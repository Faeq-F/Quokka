<script setup lang="ts">
const loading = ref(true)
const conduct = ref("")

// links in new tabs

// mention issue templates - fill the provided issue template

conduct.value = conduct.value.substring(conduct.value.indexOf("\n") + 1)

onMounted(async () => {
  conduct.value = ""
  try {
    conduct.value = await $fetch('https://raw.githubusercontent.com/Faeq-F/Quokka/refs/heads/main/CODE_OF_CONDUCT.md')
    conduct.value = conduct.value.substring(conduct.value.indexOf("\n") + 1)
  } catch (err) {
    console.log('Error fetching changelog data:', err.toString())
  } finally {
    loading.value = false
  }
})

import { MdPreview, type Themes, config } from 'md-editor-v3';
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

import { useTheme } from '@maz-ui/themes'
const { colorMode } = useTheme()
const theme = ref(colorMode.value)
watch(colorMode, async (newTheme, _oldTheme) => theme.value = newTheme.toString())
</script>
<template>
  <div>
    <div class="text-center mt-42 varela">
      <MazAnimatedElement direction="up" :delay="200" :duration="700">
        <span class="text-6xl">Contributor Covenant: Code of Conduct</span>
      </MazAnimatedElement>
      <MazAnimatedText tag="h1"
        text="Fostering an open, welcoming, and safe environment for all contributors."
        :delay="400" :duration="1500" direction="up" :column-gap="0.3"
        :row-gap="0.3"
        class="text-gray-500 dark:text-gray-400 mt-4 sm:px-0 px-4" />
    </div>
    <div class="w-full sm:px-78 px-4 mb-4 mt-16 outfit">
      <MazAnimatedElement direction="up" :delay="1050" :duration="700">
        <MazCardSpotlight class="min-h-[40vh] w-full">
          <nuxt-link
            to="https://github.com/Faeq-F/Quokka/blob/main/CODE_OF_CONDUCT.md"
            class="!no-underline flex items-center !not-italic">
            <UIcon name="i-lucide-book-open" class="mr-1.5 !size-4" />
            <code>CODE_OF_CONDUCT.md</code>
            <UIcon name="i-lucide-arrow-up-right" class="!size-2 mb-1" />
          </nuxt-link>
          <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
          <MdPreview :theme="theme as Themes" previewTheme="github"
            codeTheme="github" language="en-US" class="!bg-transparent"
            :modelValue="conduct" />
          <!-- v-if="!loading" on MdPreview-->
        </MazCardSpotlight>
      </MazAnimatedElement>
    </div>
  </div>
</template>