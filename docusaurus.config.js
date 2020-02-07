module.exports = {
  title: 'Streetcred API Documentation',
  tagline: 'SSI Resources for Developers',
  url: 'https://streetcred-id.github.io',
  baseUrl: '/',
  favicon: 'img/streetcred_colorful.png',
  organizationName: 'streetcred-id', // Usually your GitHub org/user name.
  projectName: 'streetcred-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Streetcred ID',
      logo: {
        alt: 'SC',
        src: 'img/streetcred_colorful.png',
      },
      links: [
        {to: 'docs/getting-started', label: 'Docs', position: 'left'},
        {to: 'docs/api', label: 'API', position: 'right'},
        {
          href: 'https://developer.streetcred.id',
          label: 'Portal',
          position: 'right',
        },
        {
          href: 'https://streetcred.id/contact-us',
          label: 'Support',
          position: 'right',
        }
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
              label: 'Open Source',
              href: 'https://chat.hyperledger.org/channel/aries',
            },
            {
              label: 'Website',
              href: 'https://streetcred.id',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'https://medium.com/streetcred-id',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/streetcred-id',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/streetcred_id',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Streetcred ID, Inc.`,
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
