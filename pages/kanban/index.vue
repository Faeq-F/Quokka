<script setup lang="ts">
import { useTheme } from '@maz-ui/themes'
const { isDark, toggleDarkMode, colorMode, setColorMode } = useTheme()
const theme = ref(colorMode.value)
watch(colorMode, async (newTheme, _oldTheme) => theme.value = newTheme.toString())
</script>
<template>
  <div>
    <div class="text-center mt-42 varela">
      <MazAnimatedElement direction="up" :delay="200" :duration="700">
        <span class="text-6xl">Kanban board</span>
      </MazAnimatedElement>
      <p class="text-gray-500 dark:text-gray-400 mt-4">
        <MazAnimatedElement direction="up" :delay="400" :duration="700"
          class="inline">Tracking
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="450" :duration="700"
          class="inline">project
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="500" :duration="700"
          class="inline">progress,
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="550" :duration="700"
          class="inline">active,
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="600" :duration="700"
          class="inline">tasks,
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="650" :duration="700"
          class="inline">and
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="700" :duration="700"
          class="inline">upcoming
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="750" :duration="700"
          class="inline">features.
        </MazAnimatedElement>
      </p>
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