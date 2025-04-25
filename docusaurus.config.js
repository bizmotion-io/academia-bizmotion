/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación PGC España',
  tagline: 'Documentación del Plan General de Contabilidad (RD 1514/2007)',
  url: 'https://tonicanada.github.io',
  organizationName: 'tonicanada',
  projectName: 'pgc-spain-docs',
  trailingSlash: false,
  baseUrl: '/pgc-spain-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
          editUrl: 'https://github.com/tu_usuario/pgc-docusaurus/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'PGC Español',
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/introduction', label: 'Introducción', position: 'left' },
        { to: '/docs/plan-de-cuentas', label: 'Plan de cuentas', position: 'left' }
      ],
    },
  }),
};


module.exports = config;