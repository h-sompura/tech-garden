import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tech Garden',
  tagline: 'Tech Garden 👩🏻‍🌾🌾🌻🪻🌿 is a personal collection of tech stuff—docs, notes, and things I find helpful (so I don\'t end up drowning in open tabs or re-reading stuff). It might not work for everyone, so take everything with a grain of salt 🧂 and use what works for you! 🌟',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'h-sompura', // Usually your GitHub org/user name.
  projectName: 'tech-garden', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Tech Garden',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/h-sompura',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/harshithasompura/',
            },
            {
              label: 'Substack',
              href: 'https://substack.com/@harshithasompura/',
            },
            {
              label: 'Github',
              href: 'https://github.com/h-sompura',
            },
          ],
        },
        {
          title: 'Have any suggestions?',
          items: [
            {
              label: 'Add them here',
              href: 'https://github.com/h-sompura/tech-garden/issues',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Tech Garden, Fueled by ☕ & <a href="https://docusaurus.io/" target="_blank">Docusaurus.</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
