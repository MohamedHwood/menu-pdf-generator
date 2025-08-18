import Image from "next/image";
import styles from "../styles/Document.module.css";
import { useState } from "react";

export default function Home() {
  const pages = [
    {
      title: "",
      image: "/illustration.png",
    },
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
  ];

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSendPdf = async () => {
    setStatus("Sending...");
    try {
      const res = await fetch("/api/send-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("PDF sent successfully!");
      } else {
        setStatus("Failed to send PDF.");
      }
    } catch (err) {
      console.error(err);
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
                width={550}
                height={800}
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
        <p>{status}</p>
      </div>
    </div>
  );
}
