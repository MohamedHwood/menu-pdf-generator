// pages/api/send-pdf.js
import Mailgun from "mailgun.js";
import formData from "form-data";
import puppeteer from "puppeteer";
import { Readable } from "stream";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, mode } = req.body;
  if (!email && mode === "email") {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/print`;
    await page.goto(url, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      width: "210mm", // A4 width
      height: "297mm", // A4 height
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    });

    await browser.close();

    if (mode === "download") {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=document.pdf");
      res.setHeader("Content-Length", pdfBuffer.length);
      return res.end(pdfBuffer); // ✅ use end() instead of send()
    }

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

      // Send email with attachment
      await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: "Tipsee@hwoodgroup.com <no-reply@your-domain.com>",
        to: email,
        subject: "Your PDF Document",
        text: "Here is your generated PDF file.",
        attachment: [
          {
            filename: "Delilah-Miami-Menu.pdf",
            data: bufferToStream(pdfBuffer), // ✅ Wrap the Buffer
          },
        ],
      });

      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: "Invalid mode" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to generate PDF" });
  }
}

// test commit
