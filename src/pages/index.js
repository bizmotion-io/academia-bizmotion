import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="Cursos de Contabilidad y ERPNext"
      description="Formacion practica en contabilidad y ERPNext para emprendedores, pymes y consultores."
    >
      <main className={styles.landingEmpty}>
        <section className={styles.heroSimple}>
          <a
            href="https://bizmotion.io/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ir a Bizmotion"
          >
            <img
              className={styles.brandLogo}
              src="/img/brand/bizmotion-academia-logo.png"
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
