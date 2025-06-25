import { defineStore } from "pinia";
import { usePluginsStore } from './plugins'
const plugins = usePluginsStore()
const pluginsChildren = plugins.getTopPlugins().map((plugin) => {
  return {
    label: plugin.name,
    icon: 'i-lucide-' + plugin.icon,
    description: plugin.shortDescription,
    to: `/plugin/${plugin.name.replace(' ', '~')}`,
    active: false
  }
})

export const useMiddleNavbarItems = defineStore("middleNavbarItems", {
  state: () => ({
    items: [
      [
        {
          label: 'Plugins',
          icon: 'i-lucide-box',
          to: '/plugin',
          active: false,
          defaultOpen: true,
          children: [...pluginsChildren, {
            label: 'more...',
            icon: 'i-lucide-box',
            description: 'lots more available',
            to: '/plugin',
            active: false
          }]
        },
        {
          label: 'Documentation',
          icon: 'i-lucide-book-open',
          to: '/documentation',
          active: false,
          children: [
            {
              label: 'Installation',
              description: 'Requirements, steps & suggestions',
              icon: 'i-lucide-loader',
              to: '/documentation?section=installation'
            },
            {
              label: 'How to Use',
              description: 'The tray task, plugins & command types',
              icon: 'i-lucide-pointer',
              to: '/documentation?section=general-usage'
            },
            {
              label: 'Settings',
              icon: 'i-lucide-sliders-vertical',
              description: 'Defaults & extra information',
              to: '/documentation?section=settings'
            },
            {
              label: 'Building the app',
              icon: 'i-lucide-drill',
              description: 'Steps to produce the published release',
              to: '/documentation?section=build-app'
            },
            {
              label: 'API Documentation',
              icon: 'i-lucide-code',
              description:
                'Documentation generated from source files',
              to: '/documentation?section=api-documentation'
            },
            {
              label: 'Creating a plugin',
              icon: 'i-lucide-toy-brick',
              description:
                'Creating new item types & producing their plugin ',
              to: '/documentation?section=creating-the-project'
            },
            {
              label: 'FAQ by Developers',
              icon: 'i-lucide-circle-help',
              description:
                'Answers to frequently asked questions',
              to: '/documentation?section=faq'
            }
          ]
        },
        {
          label: 'FAQ',
          icon: 'i-lucide-circle-help',
          to: "/#faq",
          active: false
        }
      ],
    ]
  }),
  actions: {
  },
});
