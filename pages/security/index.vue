<script setup lang="ts">
const loading = ref(true)
const contributing = ref(`# Security Policy

## Supported Versions

| Version    | Supported           |
| ---------- | ------------------- |
| 1.0        | no longer supported |
| 2.0        | supported           |

## Reporting a Vulnerability

Please follow the [steps for contributing bug reports](https://faeq-f.github.io/Quokka/contributing) to report vulnerabilities.
`)

contributing.value = contributing.value.substring(contributing.value.indexOf("\n") + 1)

// onMounted(async () => {
//   changelog.value = ""
//   try {
//     changelog.value = await $fetch('https://raw.githubusercontent.com/Faeq-F/Quokka/refs/heads/main/SECURITY.md')
//     changelog.value = contributing.value.substring(contributing.value.indexOf("\n") + 1)
//   } catch (err) {
//     console.log('Error fetching changelog data:', err.toString())
//   } finally {
//     loading.value = false
//   }
// })

import { config, MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import LinkAttr from 'markdown-it-link-attributes';

config({
  markdownItPlugins(plugins, { editorId }) {
    return [
      {
        type: 'linkAttr',
        plugin: LinkAttr,
        options: {
          matcher(href: string) {
            return !href.startsWith('#');
          },
          attrs: {
            target: '_blank'
          }
        }
      },
    ]
  }
})

import { useThemeHandler } from 'maz-ui'
const themeHandler = useThemeHandler({
  watchChanges: true,
})
const theme = ref(themeHandler.selectedTheme.value)
watch(themeHandler.selectedTheme, async (newTheme, _oldTheme) => theme.value = newTheme.toString())
</script>
<template>
  <div>
    <div class="text-center mt-42 varela">
      <MazAnimatedElement direction="up" :delay="200" :duration="700">
        <span class="text-6xl">Security Policy</span>
      </MazAnimatedElement>
      <p class="text-gray-500 dark:text-gray-400 mt-4">
        <MazAnimatedElement direction="up" :delay="400" :duration="700"
          class="inline">Reporting
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="450" :duration="700"
          class="inline">vulnerabilities
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="500" :duration="700"
          class="inline">and
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="550" :duration="700"
          class="inline">supported
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="600" :duration="700"
          class="inline">versions
        </MazAnimatedElement>
      </p>
    </div>
    <div class="w-full px-78 mb-4 mt-16 outfit">
      <MazAnimatedElement direction="up" :delay="800" :duration="700">
        <MazCardSpotlight class="min-h-[40vh] w-full">
          <nuxt-link to="https://github.com/Faeq-F/Quokka/blob/main/SECURITY.md"
            class="!no-underline flex items-center !not-italic">
            <UIcon name="i-lucide-book-open" class="mr-1.5 !size-4" />
            <code>SECURITY.md</code>
            <UIcon name="i-lucide-arrow-up-right" class="!size-2 mb-1" />
          </nuxt-link>
          <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
          <MdPreview :theme="theme" previewTheme="github" codeTheme="github"
            language="en-US" class="!bg-transparent"
            :modelValue="contributing" />
          <!-- v-if="!loading" on MdPreview-->
        </MazCardSpotlight>
      </MazAnimatedElement>
    </div>
  </div>
</template>