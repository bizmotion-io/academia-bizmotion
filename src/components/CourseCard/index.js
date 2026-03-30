import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function CourseCard({ title, description, href, cta = "Ver curso" }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link className={styles.cta} to={href}>
        {cta}
      </Link>
    </article>
  );
}
