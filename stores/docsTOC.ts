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
        section: 'general-usage',
        children: [
          {
            title: 'General Usage',
            icon: 'i-lucide-mouse-pointer',
            section: 'general-usage'
          },
          {
            title: 'Tray task',
            icon: 'i-lucide-panel-bottom',
            section: 'tray-task'
          },
          {
            title: 'Plugins',
            icon: 'i-lucide-blocks',
            section: 'plugins'
          },
          {
            title: 'Commands',
            icon: 'i-lucide-zap',
            section: 'commands'
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
        section: 'creating-the-project',
        children: [
          {
            title: 'Creating the project',
            icon: 'i-lucide-folder-kanban',
            section: 'creating-the-project'
          },
          {
            title: 'Creating a new item type',
            icon: 'i-lucide-list',
            section: 'creating-new-item-type'
          },
          {
            title: 'Creating a context pane',
            icon: 'i-lucide-panels-top-left',
            section: 'creating-context-pane'
          },
          {
            title: 'Creating the plugin',
            icon: 'i-lucide-unplug',
            section: 'creating-the-plugin'
          },
        ]
      },
      {
        title: 'FAQ by Developers',
        icon: 'i-lucide-circle-help',
        section: 'faq',
        children: []
      }
    ]
  }),
  actions: {
  },
});
