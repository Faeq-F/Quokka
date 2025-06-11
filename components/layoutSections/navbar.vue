<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue';
import { usePluginsStore } from '../../stores/plugins'
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
      to: '/plugin',

      defaultOpen: true,
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          to: '/plugin/link'
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          to: '/plugin/modal'
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          to: '/plugin/navigation-menu'
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
          to: '/plugin/pagination'
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          to: '/plugin/popover'
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
          to: '/plugin/progress'
        }
      ]
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
          to: '/documentation#doc1'
        },
        {
          label: 'How to Use',
          description: 'The tray task, plugins & command types',
          icon: 'i-lucide-pointer',
          to: '/documentation#doc2'
        },
        {
          label: 'Settings',
          icon: 'i-lucide-sliders-vertical',
          description: 'Defaults & extra information',
          to: '/documentation#doc3'
        },
        {
          label: 'Building the app',
          icon: 'i-lucide-drill',
          description: 'Steps to produce the published release',
          to: '/documentation#doc4'
        },
        {
          label: 'API Documentation',
          icon: 'i-lucide-code',
          description:
            'Documentation generated from source files',
          to: '/documentation#doc5'
        },
        {
          label: 'Creating a plugin',
          icon: 'i-lucide-toy-brick',
          description:
            'Creating new item types & producing their plugin ',
          to: '/documentation#doc6'
        },
        {
          label: 'FAQ by Developers',
          icon: 'i-lucide-circle-help',
          description:
            'Answers to frequently asked questions',
          to: '/documentation#doc7'
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
      label: '',
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

setSystemTheme()

import MazAnimatedText from 'maz-ui/components/MazAnimatedText'

</script>

<template>
  <MazAnimatedElement direction="down" :duration="700"
    class="sticky top-0 z-10">
    <div
      class="flex items-center gap-3 data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48 border-b-2 border-accent sticky top-0 bg-white dark:bg-[var(--ui-bg)] z-10">
      <MazAnimatedElement direction="right" :delay='300' :duration="700">
        <a href="/" class="object-cover">
          <img src="~/assets/media/QuokkatextLogo.svg" alt="Quokka Logo"
            class="h-10 dark:invert-100 ml-5 p-1 pl-2 " />
        </a>
      </MazAnimatedElement>
      <MazAnimatedElement direction="down" :delay="700" :duration="700"
        class="w-full justify-center flex">
        <UNavigationMenu highlight highlight-color="neutral" color="neutral"
          orientation="horizontal" :items="middleItems" variant="link" :ui="{
            viewport: 'mt-2 !px-70',
            content: '',
            childLink: 'bg-white hover:bg-gray-100',
            childLinkDescription: 'text-balance line-clamp-2'
          }" />
      </MazAnimatedElement>
      <MazAnimatedElement direction="down" :delay="900" :duration="700"
        class="relative flex w-auto justify-end">
        <UNavigationMenu highlight highlight-color="neutral" color="neutral"
          orientation="horizontal" v-if="rightItems" :items="rightItems" />
        <!-- Theme Switch -->
        <USeparator orientation="vertical" class="h-8 self-center ml-4" />
        <UNavigationMenu content-orientation="vertical" color="neutral"
          :items="themeItems" variant="link" trailing-icon=" " :ui="{
            viewport: 'mt-2 pr-27',
            content: 'w-auto',
            childList: 'w-auto',
            childLabel: 'w-full',
            childLinkDescription: 'line-clamp-1'
          }" class="relative flex w-auto justify-end">
          <template #item="{ item }">
            <UIcon :name="item.icon" class="mx-4" />
          </template>
        </UNavigationMenu>
      </MazAnimatedElement>
    </div>
  </MazAnimatedElement>
</template>