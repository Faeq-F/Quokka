import { defineStore } from "pinia";

export const useDocsStore = defineStore("docsStore", {
  state: () => ({
    toc: [
      {
        title: 'Installation',
        icon: 'i-lucide-loader',
        section: 'installation',
        children: []
      },
      {
        title: 'How to Use',
        icon: 'i-lucide-pointer',
        section: 'use',
        children: [
          {
            title: 'General Usage',
            icon: 'i-lucide-pointer',
            section: 'use'
          },
          {
            title: 'Tray task',
            icon: 'i-lucide-pointer',
            section: 'use'
          },
          {
            title: 'Plugins',
            icon: 'i-lucide-pointer',
            section: 'use'
          },
          {
            title: 'Commands ?',
            icon: 'i-lucide-pointer',
            section: 'use'
          },
        ]
      },
      {
        title: 'Settings',
        icon: 'i-lucide-sliders-vertical',
        section: 'settings',
        children: []
      },
      {
        title: 'Building the app',
        icon: 'i-lucide-drill',
        section: 'build-app',
        children: []
      },
      {
        title: 'API Documentation',
        icon: 'i-lucide-code',
        section: "api-documentation",
        children: []
      },
      {
        title: 'Creating a plugin',
        icon: 'i-lucide-toy-brick',
        section: 'create-plugin',
        children: [
          {
            title: 'Creating the project',
            icon: 'i-lucide-pointer',
            section: 'use'
          },
          {
            title: 'Creating a new item type',
            icon: 'i-lucide-pointer',
            section: 'use'
          },
          {
            title: 'Creating a context pane',
            icon: 'i-lucide-pointer',
            section: 'use'
          },
          {
            title: 'Creating the plugin',
            icon: 'i-lucide-pointer',
            section: 'use'
          },
        ]
      },
      {
        title: 'FAQ by Developers',
        icon: 'i-lucide-circle-help',
        description:
          'Answers to frequently asked questions',
        to: '/documentation?section=faq'
      }
    ]
  }),
  actions: {
  },
});
