import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Linux_Docs",
  tagline: "linux documentation by ariaf",
  favicon: "img/favicon.png",

  url: "https://ariaf.my.id",
  baseUrl: "/docs_aria/",

  organizationName: "ariafatah0711",
  projectName: "docs_aria",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ariafatah0711/docs_aria/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ariafatah0711/docs_aria/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "storage",
        path: "storage",
        routeBasePath: "storage",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/ariafatah0711/docs_aria/tree/main/storage/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cybersec",
        path: "cybersec",
        routeBasePath: "cybersec",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/ariafatah0711/docs_aria/tree/main/cybersec/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "scripting",
        path: "scripting",
        routeBasePath: "scripting", // URL aksesnya menjadi /linux/
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/ariafatah0711/docs_aria/tree/main/scripting/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "android_debug",
        path: "android_debug",
        routeBasePath: "android_debug",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/ariafatah0711/docs_aria/tree/main/android_debug/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Linux Docs",
        logo: {
          alt: "Linux Docs",
          src: "img/profil.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "default",
            position: "left",
            label: "linux",
            docsPluginId: "default",
          },
          {
            type: "docSidebar",
            sidebarId: "default",
            position: "left",
            label: "storage",
            docsPluginId: "storage",
          },
          {
            type: "docSidebar",
            sidebarId: "default",
            position: "left",
            label: "cybersec",
            docsPluginId: "cybersec",
          },
          {
            type: "docSidebar",
            sidebarId: "default",
            position: "left",
            label: "scripting",
            docsPluginId: "scripting",
          },
          {
            type: "docSidebar",
            sidebarId: "default",
            position: "left",
            label: "android_debug",
            docsPluginId: "android_debug",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ariafatah0711/docs_aria",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "docs_aria",
                to: "/docs_aria",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://s.id/dev-universe",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/ariafatah0711/docs_aria",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
