import PDFDocument from "pdfkit";
import Mailgun from "mailgun.js";
import formData from "form-data";
import fs from "fs";
import path from "path";

// test commit

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const buffers = [];
    const doc = new PDFDocument({ size: "A4", margin: 50 });

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", async () => {
      const pdfBuffer = Buffer.concat(buffers);

      // Setup Mailgun client
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY,
      });

      // Send email with attachment
      await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: "Tipsee@hwoodgroup.com <no-reply@your-domain.com>",
        to: email,
        subject: "Your PDF Document with Image",
        text: "Here is your generated PDF file including an image.",
        attachment: [
          {
            filename: "Delilah Miami Menu.pdf",
            data: pdfBuffer,
          },
        ],
      });

      return res.status(200).json({ success: true });
    });

    // --- PDF CONTENT ---
    doc.moveDown();

    // Insert image (must be in /public folder)
    const imagePath = path.join(process.cwd(), "public", "illustration.png");
    if (fs.existsSync(imagePath)) {
      doc.image(imagePath, {
        fit: [400, 500],
        align: "center",
        valign: "center",
      });
    } else {
      doc.fontSize(12).text("(Image not found)", { align: "center" });
    }

    // Add another page
    doc.addPage().fontSize(20).text("Page 2 Placeholder", { align: "center" });

    // Add another page
    doc.addPage().fontSize(20).text("Page 3 Placeholder", { align: "center" });

    doc.end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send PDF" });
  }
}
