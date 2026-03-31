require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Academia Bizmotion",
  tagline: "Cursos practicos de contabilidad y ERP",
  url: "https://academia.bizmotion.io",
  organizationName: "bizmotion-io",
  projectName: "academia-bizmotion",
  trailingSlash: false,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icons/logo_bizmotion.ico",
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
          ignorePatterns: ["/search", "/markdown-page"],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  headTags: [
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Academia Bizmotion",
        url: "https://academia.bizmotion.io",
        logo: "https://academia.bizmotion.io/img/brand/bizmotion-logo.png",
        sameAs: [
          "https://www.linkedin.com/company/bizmotion-io",
          "https://bizmotion.io/",
          "https://medium.com/@antoniocanada",
        ],
      }),
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Academia Bizmotion",
        url: "https://academia.bizmotion.io",
        inLanguage: "es",
      }),
    },
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cursos",
        path: "cursos",
        routeBasePath: "cursos",
        sidebarPath: require.resolve("./sidebars/sidebarsCursos.js"),
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Academia Bizmotion",
        items: [
          {
            type: "dropdown",
            label: "Cursos",
            position: "left",
            items: [
              {
                to: "/cursos/contabilidad-facil",
                label: "Contabilidad facil: fundamentos y ERPNext",
              },
              {
                to: "/cursos/bootcamp-erpnext-2025",
                label: "Bootcamp ERPNext 2025",
              },
            ],
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: "img/docusaurus-social-card.jpg",
      footer: {
        style: "light",
        links: [],
        copyright: `
          <div class="footer-bar">
            <a href="https://www.linkedin.com/company/bizmotion-io" target="_blank" rel="noopener" aria-label="LinkedIn">
              <img src="/img/icons/logo_linkedin.svg" alt="LinkedIn" width="24" height="24" />
            </a>
            <a href="https://github.com/tonicanada" target="_blank" rel="noopener" aria-label="GitHub">
              <img src="/img/icons/logo_github.svg" alt="GitHub" width="24" height="24" />
            </a>
            <a href="https://acmsoftware.cl/" target="_blank" rel="noopener" aria-label="Blog">
              <img src="/img/icons/logo_blog.svg" alt="Blog" width="24" height="24" />
            </a>
            <a href="https://bizmotion.io/" target="_blank" rel="noopener" aria-label="Bizmotion">
              <img class="footer-icon-black" src="/img/icons/logo_bizmotion.ico" alt="Bizmotion" width="24" height="24" />
            </a>
            <a href="https://medium.com/@antoniocanada" target="_blank" rel="noopener" aria-label="Medium">
              <img src="/img/icons/logo_medium.svg" alt="Medium" width="24" height="24" />
            </a>
            <span class="footer-copy">© ${new Date().getFullYear()} Antonio Cañada</span>
          </div>
        `,
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: false,
        searchParameters: {},
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "5305d2a082dba1cb",
        },
        {
          name: "algolia-site-verification",
          content: "7FD546744E8EA6D0",
        },
        {
          name: "keywords",
          content:
            "cursos contabilidad, cursos ERPNext, contabilidad para pymes, formacion contable, finanzas para emprendedores, curso contabilidad basica, ERP open source",
        },
        {
          name: "author",
          content: "Antonio Cañada Momblant",
        },
        {
          name: "description",
          content:
            "Plataforma de cursos practicos de contabilidad y ERPNext para emprendedores, pymes y profesionales.",
        },
      ],
    }),
};

module.exports = config;
