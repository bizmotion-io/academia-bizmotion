import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Inicio" description="Academia Bizmotion">
      <main className={styles.landingEmpty}>
        <section className={styles.heroSimple}>
          <p className={styles.brandKicker}>Academia</p>

          <a
            href="https://bizmotion.io/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ir a Bizmotion"
          >
            <img
              className={styles.brandLogo}
              src="/img/brand/bizmotion-logo.png"
              alt="Bizmotion"
            />
          </a>

          <p className={styles.description}>
            Formación práctica en contabilidad y ERP, con cursos aplicados para emprendedores, equipos administrativos y consultores.
          </p>

          <Link className={styles.ctaButton} to="/cursos">
            Ver cursos
          </Link>
        </section>
      </main>
    </Layout>
  );
}
