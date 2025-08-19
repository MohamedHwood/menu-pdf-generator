// pages/print.js
import Image from "next/image";
import styles from "../../styles/Document.module.css";

export default function Print() {
  const pages = [
    { title: "", image: "/image - 01.png" },
    { title: "", content: "/image - 02.png" },
    { title: "", content: "" },
  ];

  return (
    <div className={styles.viewer}>
      {pages.map((page, idx) => (
        <div className={styles.page} key={idx}>
          {page.image ? (
            <div className={styles.imageFill}>
              <Image
                src={page.image}
                alt={page.title}
                width={650}
                height={800}
                priority
              />
            </div>
          ) : (
            <>
              <h1 className={styles.title}>{page.title}</h1>
              <p className={styles.content}>{page.content}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
