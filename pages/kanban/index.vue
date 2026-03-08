<script setup lang="ts">
import { useTheme } from '@maz-ui/themes'
import type { ColorMode } from '@maz-ui/themes'
const { isDark, toggleDarkMode, colorMode, setColorMode } = useTheme()
const theme = ref<ColorMode>(colorMode.value)
watch(colorMode, async (newTheme, _oldTheme) => theme.value = newTheme)
</script>
<template>
  <div>
    <div class="text-center mt-42 varela">
      <MazAnimatedElement direction="up" :delay="200" :duration="700">
        <span class="text-6xl">Kanban board</span>
      </MazAnimatedElement>
      <MazAnimatedText tag="h1"
        text="Tracking project progress, active tasks, and upcoming features."
        :delay="400" :duration="1500" direction="up" :column-gap="0.3"
        :row-gap="0.3" class="text-gray-500 dark:text-gray-400 mt-4" />
    </div>
    <div class="w-full px-78 mb-4 mt-16 outfit">
      <MazAnimatedElement direction="up" :delay="900" :duration="700">
        <MazCardSpotlight class="min-h-[40vh] w-full h-[90vh]" :padding="false">
          <iframe
            src="https://cryptpad.fr/kanban/#/2/kanban/view/-WlOVL1alVLH3OuLlEYVG9FUOe+MYjXey0jnVrUtz30/embed/"
            class="w-full h-full"></iframe>
        </MazCardSpotlight>
      </MazAnimatedElement>
    </div>
  </div>
</template>