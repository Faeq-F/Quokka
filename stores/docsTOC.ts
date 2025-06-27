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
    ]
  }),
  actions: {
  },
});
