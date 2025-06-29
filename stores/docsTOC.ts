import { defineStore } from "pinia";

export const useDocsStore = defineStore("docsStore", {
  state: () => ({
    toc: [
      {
        label: 'Installation',
        icon: 'i-lucide-loader',
        section: 'installation',
      },
      {
        label: 'How to Use',
        icon: 'i-lucide-pointer',
        section: 'general-usage',
        children: [
          {
            label: 'General Usage',
            icon: 'i-lucide-mouse-pointer',
            section: 'general-usage'
          },
          {
            label: 'Tray task',
            icon: 'i-lucide-panel-bottom',
            section: 'tray-task'
          },
          {
            label: 'Plugins',
            icon: 'i-lucide-blocks',
            section: 'plugins'
          },
          {
            label: 'Commands',
            icon: 'i-lucide-zap',
            section: 'commands'
          },
        ]
      },
      {
        label: 'Settings',
        icon: 'i-lucide-sliders-vertical',
        section: 'settings',

      },
      {
        label: 'Building the app',
        icon: 'i-lucide-drill',
        section: 'build-app',

      },
      {
        label: 'API Documentation',
        icon: 'i-lucide-code',
        section: "api-documentation",

      },
      {
        label: 'Creating a plugin',
        icon: 'i-lucide-toy-brick',
        section: 'creating-plugin',

      },
      {
        label: 'FAQ by Developers',
        icon: 'i-lucide-circle-help',
        section: 'faq',
      }
    ],
    links: [
      [
        {
          label: 'License',
          icon: 'i-lucide-scale',
          to: '',
          target: '_blank'
        },
      ],
      [
        {
          label: 'Changelog',
          icon: 'i-lucide-file-cog',
          to: '',
          target: '_blank'
        },
        {
          label: 'Releases',
          icon: 'i-lucide-tags',
          to: '',
          target: '_blank'
        },
      ],
      [
        {
          label: 'Program Source',
          icon: 'i-lucide-folder-git',
          to: '',
          target: '_blank'
        },
        {
          label: 'Website Source',
          icon: 'i-lucide-folder-git-2',
          to: '',
          target: '_blank'
        },
      ],
      [
        {
          label: 'Discussions',
          icon: 'i-lucide-messages-square',
          to: '',
          target: '_blank'
        },
        {
          label: 'Feedback',
          icon: 'i-lucide-thumbs-up',
          to: '',
          target: '_blank'
        },
        {
          label: 'Security Policy',
          icon: 'i-lucide-shield-check',
          to: '',
          target: '_blank'
        },
        {
          label: 'Report an Issue',
          icon: 'i-lucide-octagon-alert',
          to: '',
          target: '_blank'
        },
      ]
    ]
  }),
  actions: {
  },
});
