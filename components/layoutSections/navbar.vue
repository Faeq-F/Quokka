<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue';
import { useFetch } from 'nuxt/app';
import { useMiddleNavbarItems } from '~/stores/navbar'
const middleItems = useMiddleNavbarItems()

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

import { useThemeHandler } from 'maz-ui'

const {
  setDarkTheme,
  setLightTheme,
  setSystemTheme,
  autoSetTheme
} = useThemeHandler({
  watchChanges: true,
})

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

autoSetTheme()
</script>

<template>
  <MazAnimatedElement direction="down" :duration="700"
    class="sticky top-0 z-10 outfit" id="navbar">
    <div
      class="flex items-center gap-3 data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48 border-b-2 border-accent sticky top-0 bg-white dark:bg-[var(--ui-bg)] z-10">
      <MazAnimatedElement direction="right" :delay='300' :duration="700">
        <a href="/Quokka/" class="object-cover">
          <img src="/media/QuokkaTextLogo.svg" alt="Quokka Logo"
            class="h-10 dark:invert-100 ml-5 p-1 pl-2 " loading="lazy" />
        </a>
      </MazAnimatedElement>
      <MazAnimatedElement direction="down" :delay="700" :duration="700"
        class="w-full justify-center flex">
        <UNavigationMenu highlight highlight-color="neutral" color="neutral"
          orientation="horizontal" :items="middleItems.items" variant="link"
          :ui="{
            viewport: 'mt-2 !px-70',
            content: '',
            childLink: 'bg-white hover:bg-gray-100 dark:bg-[var(--ui-bg)] dark:hover:bg-gray-800',
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