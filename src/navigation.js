import { SITE } from './utils/config';
import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Technology',
      href: getPermalink('/inhouse/technology'),
    },
    {
      text: 'Videos',
      href: getPermalink('/inhouse/videos'),
    },
    //{
    //  text: 'In House Productions',
    //  links: [
    //    {
    //      text: 'Gaming',
    //      href: getPermalink('/inhouse/gaming'),
    //    },
    //    {
    //      text: 'Videos',
    //      href: getPermalink('/inhouse/videos'),
    //    },
    //    {
    //      text: 'Animated Series',
    //      href: getPermalink('/inhouse/animated-series'),
    //    },
    //  ],
    //},
    //{
    //  text: 'Our Clients',
    //  href: getPermalink('/our-clients'),
    //},
    //{
    //  text: 'Products',
    //  href: getPermalink('/products'),
    //},

    {
      text: 'About us',
      href: getPermalink('/about-us'),
    },

    //
    // ===@Rahul - Default pages from template =====
    // {
    //   text: 'Default Pages',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    /* {
      text: 'Blog/Projects',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    }, */
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

let currentYear = new Date().getFullYear();

export const footerData = {
  links: [
    {
      title: 'Socials',
      links: [
        { text: 'Facebook', href: '#' },
        { text: 'Twitter', href: '#' },
        { text: 'Youtube', href: '#' },
      ],
    },
    {
      title: 'Featured Links',
      links: [
        { text: 'Projects 1 ', href: '#' },
        { text: 'Projects 2 ', href: '#' },
        { text: 'Projects 3 ', href: '#' },
        { text: 'Projects 4 ', href: '#' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'About Us', href: '/about-us' },
        { text: 'Careers', href: '/careers' },
        { text: 'Terms', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Careers', href: '/careers' },
        { text: 'Contact Us', href: '/contact' },
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],

  footNote: `
  ${currentYear} All rights reserved. &copy; ${SITE.name}
  `,
};
