<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const plugins = usePluginsStore()

const items = ref<NavigationMenuItem[][]>([
  [],
  [
    {
      label: 'Plugins',
      icon: 'i-lucide-box',
      to: '/components',
      active: true,
      defaultOpen: true,
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          to: '/components/link'
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          to: '/components/modal'
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          to: '/components/navigation-menu'
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
          to: '/components/pagination'
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          to: '/components/popover'
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
          to: '/components/progress'
        }
      ]
    },
    {
      label: 'Documentation',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'Introduction',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-lucide-house'
        },
        {
          label: 'Installation',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download'
        },
        {
          label: 'Icons',
          icon: 'i-lucide-smile',
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        },
        {
          label: 'Colors',
          icon: 'i-lucide-swatch-book',
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        },
        {
          label: 'Theme',
          icon: 'i-lucide-cog',
          description:
            'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
        }
      ]
    },
    {
      label: 'FAQ',
      icon: 'i-lucide-circle-help',
    }
  ],
  [
    {
      icon: 'i-lucide-download',
    },
    {
      label: 'GitHub',
      icon: 'i-lucide-github',
      badge: '3.8k',
      to: 'https://github.com/nuxt/ui',
      target: '_blank'
    },
  ]
])

import { useThemeHandler } from 'maz-ui'

const {
  setDarkTheme,
  setLightTheme,
} = useThemeHandler()

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    setLightTheme()
  } else {
    setDarkTheme()
  }
}

</script>
<template>
  <div
    class="flex items-center gap-3 data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48">
    <!-- Logo -->
    <img src="~/assets/images/QuokkatextLogo.svg" alt="Quokka Logo"
      class="h-10 p-1 pl-2 object-cover dark:invert-100" />
    <!-- Navigation Menu -->
    <UNavigationMenu highlight highlight-color="primary" orientation="horizontal" :items="items" :ui="{
      viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
      content: 'sm:w-auto',
      childList: 'sm:w-96',
      childLinkDescription: 'text-balance line-clamp-2'
    }" class="flex-1" />
    <!-- Theme Switch -->
    <USwitch unchecked-icon="i-lucide-sun" checked-icon="i-lucide-moon" @click="toggleTheme" class="mr-5" />
  </div>
  <!-- Page Content -->
  <slot />
  {{ plugins.name }}
</template>