import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="PGC Español" description="Documentación del Plan General de Contabilidad">
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h1>Plan General de Contabilidad (PGC) - España</h1>
        <p>Guía detallada y explicativa de cada cuenta, adaptada al RD 1514/2007.</p>
        <a href="/docs/introduccion" style={{
          padding: '12px 24px',
          backgroundColor: '#007acc',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none'
        }}>Empezar</a>
      </div>
    </Layout>
  );
}