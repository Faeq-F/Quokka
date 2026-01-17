<script setup lang="ts">
const loading = ref(true)
const changelog = ref(`# Change Log

All notable changes to Quokka will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

<br /><br />

## [Unreleased] - yyyy-mm-dd

This version is a **complete rewrite**. Because of this, old configurations are
 **no longer supported**. To upgrade, please check your previous configuration
 for important preferences (like command signifiers) and **manually** add them
 to the new settings files.

### ✨ Added

- n/a

### 👽️ Changed

- n/a

### 🗑️ Deprecated

- n/a

### 🔥 Removed

- n/a

### 🐛 Fixed

- n/a

### 🔒️ Security

- n/a

<br /><br />

## [1.0] - 2022-07-18

- 🎉 First release!

[unreleased]: https://github.com/faeq-f/quokka/compare/oldCodebase...HEAD
[2.0]: https://github.com/faeq-f/quokka/compare/oldCodebase...v2.0
[1.0]: https://github.com/Faeq-F/Quokka/compare/v1.0...oldCodebase
`)

changelog.value = changelog.value.substring(changelog.value.indexOf("\n") + 1)

// onMounted(async () => {
//   changelog.value = ""
//   try {
//     changelog.value = await $fetch('https://raw.githubusercontent.com/Faeq-F/Quokka/refs/heads/main/Changelog.md')
//     changelog.value = changelog.value.substring(changelog.value.indexOf("\n") + 1)
//   } catch (err) {
//     console.log('Error fetching changelog data:', err.toString())
//   } finally {
//     loading.value = false
//   }
// })

import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
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
        <span class="text-6xl">Change Log</span>
      </MazAnimatedElement>
      <p class="text-gray-500 dark:text-gray-400 mt-4">
        <MazAnimatedElement direction="up" :delay="400" :duration="700"
          class="inline">Stay
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="450" :duration="700"
          class="inline">up
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="500" :duration="700"
          class="inline">to
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="550" :duration="700"
          class="inline">date
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="600" :duration="700"
          class="inline">with
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="650" :duration="700"
          class="inline">the
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="700" :duration="700"
          class="inline">latest
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="750" :duration="700"
          class="inline">additions,
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="800" :duration="700"
          class="inline">deprecations,
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="850" :duration="700"
          class="inline">and
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="900" :duration="700"
          class="inline">improvements
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="950" :duration="700"
          class="inline">across
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="1000" :duration="700"
          class="inline">all
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="1050" :duration="700"
          class="inline">versions.
        </MazAnimatedElement>
      </p>
    </div>
    <div class="w-full px-78 mb-4 mt-16 outfit">
      <MazAnimatedElement direction="up" :delay="1200" :duration="700">
        <MazCardSpotlight class="min-h-[40vh] w-full">
          <nuxt-link
            to="https://github.com/Faeq-F/Quokka/blob/main/Changelog.md"
            class="!no-underline flex items-center !not-italic">
            <UIcon name="i-lucide-book-open" class="mr-1.5 !size-4" />
            <code>Changelog.md</code>
            <UIcon name="i-lucide-arrow-up-right" class="!size-2 mb-1" />
          </nuxt-link>
          <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
          <MdPreview :theme="theme" previewTheme="github" codeTheme="github"
            language="en-US" class="!bg-transparent" :modelValue="changelog" />
          <!-- v-if="!loading" on MdPreview-->
        </MazCardSpotlight>
      </MazAnimatedElement>
    </div>
  </div>
</template>