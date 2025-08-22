// pages/api/send-pdf.js
import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import Mailgun from "mailgun.js";
import { Readable } from "stream";
import formData from "form-data";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, mode } = req.body;

  if (mode === "email" && !email) {
    return res.status(400).json({ error: "Email is required" });
  }

  let browser = null;

  try {
    // --- Use puppeteer locally, puppeteer-core + chromium on Vercel ---
    const isLocal = !process.env.VERCEL;

    if (isLocal) {
      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    } else {
      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    }

    // --- Generate PDF ---
    const page = await browser.newPage();
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/print`;

    await page.goto(url, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      width: "210mm",
      height: "297mm",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    });

    await browser.close();

    // --- Handle download ---
    if (mode === "download") {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=Delilah-Miami-Menu.pdf"
      );
      res.setHeader("Content-Length", pdfBuffer.length);
      return res.end(pdfBuffer);
    }

    // --- Handle email ---
    if (mode === "email") {
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY,
      });

      // Convert Buffer -> Readable stream
      function bufferToStream(buffer) {
        const readable = new Readable();
        readable.push(buffer);
        readable.push(null);
        return readable;
      }

      await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: "Tipsee@hwoodgroup.com <no-reply@hwoodgroup.com>",
        to: email,
        subject: "Your PDF Document",
        text: "Here's our Delilah Miami Menu.",
        attachment: [
          {
            filename: "Delilah-Miami-Menu.pdf",
            data: bufferToStream(pdfBuffer),
          },
        ],
      });

      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: "Invalid mode" });
  } catch (err) {
    console.error("PDF/email error:", err);
    return res.status(500).json({ error: "Failed to process request" });
  } finally {
    if (browser) await browser.close();
  }
}
