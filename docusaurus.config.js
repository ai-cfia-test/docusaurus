module.exports = {
  title: 'AI Lab at CFIA',
  tagline: 'Welcome to AI Lab Documentation',
  url: 'https://ai-cfia-docs.github.io',
  baseUrl: '/docusaurus/',
  favicon: 'img/favicon.ico',
  organizationName: 'ai-cfia', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'docs/import/Introduction',
          activeBasePath: 'docs/import/Introduction',
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'Import',
              to: '/docs/import/Introduction',
            },
            {
              label: 'Chatbot',
              to: '/docs/chatbot/Introduction',
            },
            {
              label: 'Extractor',
              to: '/docs/extractor/Intro'
            },
            {
              label: 'Image Classification',
              to: '/docs/classification/fish/Intro'
            }

          ]
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommendoc1ded to set document id as docs home page (`docs/` path).
          homePageId: 'Introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
              'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  onBrokenLinks: 'warn'
};
