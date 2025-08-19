import Image from "next/image";
import styles from "../styles/Document.module.css";
import { useState } from "react";

export default function Home() {
  const pages = [
    {
      title: "",
      image: "/image - 01.png",
    },
    {
      title: "",
      image: "/image - 02.png",
    },
    {
      title: "",
      content: "",
    },
  ];

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // inside your component
  const handleDownloadPdf = async () => {
    const res = await fetch("/api/send-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: "download" }),
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "document.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const handleSendPdf = async () => {
    setStatus("Sending...");
    try {
      const res = await fetch("/api/send-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mode: "email" }),
      });
      const data = await res.json();
      setStatus(
        data.success ? "PDF sent successfully!" : "Failed to send PDF."
      );
    } catch {
      setStatus("Error sending PDF.");
    }
  };

  return (
    <div className={styles.viewer}>
      {pages.map((page, idx) => (
        <div className={styles.page} key={idx}>
          {page.image ? (
            <div className={styles.imageFill}>
              <Image
                src={page.image}
                alt={page.title}
                fill // ✅ Next.js 13+ shorthand for layout="fill"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ) : (
            <>
              <h1 className={styles.title}>{page.title}</h1>
              {page.content && <p className={styles.content}>{page.content}</p>}
            </>
          )}
        </div>
      ))}

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleSendPdf} style={{ padding: "8px 16px" }}>
          Send PDF by Email
        </button>
        <button
          onClick={handleDownloadPdf}
          style={{ padding: "8px 16px", marginLeft: "10px" }}
        >
          Download PDF
        </button>
        <p style={{ marginTop: "10px" }}>{status}</p>
      </div>
    </div>
  );
}
