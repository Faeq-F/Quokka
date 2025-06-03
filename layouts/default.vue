<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue';
import { usePluginsStore } from '../stores/plugins'
import { useFetch } from 'nuxt/app';

// const plugins = usePluginsStore() {{ plugins.pluginsList }}

let githubStars;
let rightItems;

useFetch('https://api.github.com/repos/faeq-f/quokka/stargazers').then((data) => {
  githubStars = Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format([...data.data.value].length).toString()
}).catch(() => {
  githubStars = ""
})
rightItems = ref<NavigationMenuItem[][]>([
  [
    {
      icon: 'i-lucide-download',
    },
    {
      label: 'GitHub',
      icon: 'i-lucide-github',
      badge: githubStars,
      to: 'https://github.com/faeq-f/quokka/',
      target: '_blank'
    },
  ]
])



const middleItems = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Plugins',
      icon: 'i-lucide-box',
      to: '/plugins',

      defaultOpen: true,
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          to: '/plugins/link'
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          to: '/plugins/modal'
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          to: '/plugins/navigation-menu'
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
          to: '/plugins/pagination'
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          to: '/plugins/popover'
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
          to: '/plugins/progress'
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
          icon: 'i-lucide-house',
          to: '/plugins/progress#Introduction'
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
      to: "/#faq",
      active: false
    }
  ],
])

import { useThemeHandler } from 'maz-ui'

const {
  setDarkTheme,
  setLightTheme,
  setSystemTheme
} = useThemeHandler()

function toggleTheme(theme) {
  if (theme == 1) {
    setLightTheme()
  } else if (theme == 0) {
    setDarkTheme()
  } else {
    setSystemTheme()
  }
}

const themeItems = ref<NavigationMenuItem[][]>([
  [
    {
      icon: 'i-lucide-sun-moon',
      children: [
        {
          label: 'Light',
          icon: 'i-lucide-sun',
          onSelect: () => toggleTheme(1),
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon',
          onSelect: () => toggleTheme(0),
        },
        {
          label: 'System',
          icon: 'i-lucide-laptop-minimal',
          onSelect: () => toggleTheme(-1),
        }
      ]
    }
  ]
])

</script>
<template>
  <MazAnimatedElement direction="down" :delay="1200" :duration="2000" class="sticky top-0 z-10">
    <div data-maz-aos="fade-down" data-maz-aos-delay="600" data-maz-aos-once="true"
      class="flex items-center gap-3 data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48 border-b-2 border-accent sticky top-0 bg-white dark:bg-[var(--ui-bg)] z-10">
      <a href="/" class="object-cover">
        <img src="~/assets/media/QuokkatextLogo.svg" alt="Quokka Logo" class="h-10 dark:invert-100 ml-5 p-1 pl-2 " />
      </a>
      <UNavigationMenu highlight highlight-color="neutral" color="neutral" orientation="horizontal" :items="middleItems"
        :ui="{
          viewport: 'sm:w-(--reka-navigation-menu-viewport-width) mt-2',
          content: 'sm:w-auto',
          childList: 'sm:w-96',
          childLinkDescription: 'text-balance line-clamp-2'
        }" class="w-full justify-center" />
      <UNavigationMenu highlight highlight-color="neutral" color="neutral" orientation="horizontal" v-if="rightItems"
        :items="rightItems" :ui="{
          viewport: 'sm:w-(--reka-navigation-menu-viewport-width) mt-2',
          content: 'sm:w-auto',
          childList: 'sm:w-96',
          childLinkDescription: 'text-balance line-clamp-2'
        }" class="" />
      <!-- Theme Switch -->
      <USeparator orientation="vertical" class="h-8" />
      <UNavigationMenu content-orientation="vertical" color="neutral" :items="themeItems"
        class="relative flex w-auto justify-end" highlight="false" variant="link" trailing-icon=" " :ui="{
          viewport: ' mt-2',
          content: 'w-auto',
          childList: 'w-auto',
          childLabel: 'w-full',
          childLinkDescription: 'line-clamp-1'
        }" />
    </div>
  </MazAnimatedElement>
  <slot />
</template>
