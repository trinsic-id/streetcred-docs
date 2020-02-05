module.exports = {
  title: 'Streetcred API Documentation',
  tagline: 'SSI Resources for Developers',
  url: 'https://docs.streetcred.id',
  baseUrl: '/',
  favicon: 'img/streetcred_colorful.png',
  organizationName: 'Streetcred ID', // Usually your GitHub org/user name.
  projectName: 'Streetcred API Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'API Docs',
      logo: {
        alt: 'SC',
        src: 'img/streetcred_colorful.png',
      },
      links: [
        {to: 'docs/getting-started', label: 'Get Started', position: 'left'},
        {to: 'swagger', label: 'API Reference', position: 'left'},
        {
          href: 'https://developer.streetcred.id',
          label: 'Dashboard',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Connections',
              to: 'docs/connections',
            },
            {
              label: 'Credentials',
              to: 'docs/credentials',
            },
            {
              label: 'Verifications',
              to: 'docs/verifications'
            },
            {
              label: 'Webhooks',
              to: 'docs/webhooks'
            },
          ],
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
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
