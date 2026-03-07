<script setup lang="ts">
const loading = ref(true)
const contributing = ref(`# Contributing to Quokka

Welcome! We appreciate your interest in making Quokka better.

Before continuing please read our [code of conduct][code-of-conduct] which all
contributors are expected to adhere to.

[code-of-conduct]: https://faeq-f.github.io/Quokka/conduct


## Contributing bug reports

If you have found a bug in Quokka please check to see if there is an open
ticket for this problem on [our kanban board][issues]. If you cannot
find an existing ticket for the bug please open a new one.

[issues]: https://faeq-f.github.io/Quokka/kanban

A bug may be a technical problem such as a crash or an incorrect
value from a query, or a user experience issue such as
unclear or absent documentation. If you are unsure if your problem is a bug
please open a ticket and we will work it out together.

## Contributing code changes

Before working on code it is suggested that you read the ['under the hood'][under-hood] docs.
It outlines the fundamental components and design of this project.

[under-hood]: https://faeq-f.github.io/Quokka/documentation?section=under-hood

To maintain consistency, please adhere to [conventional branch names][conventional-branch],
 [conventional commit messages][conventional-commit], including [gitmoji][gitmoji] [(emojis)][gitmoji-site],
  and the solution [\`.editorconfig\`][editor-config-file] settings.

[conventional-branch]: https://conventional-branch.github.io/

[conventional-commit]: https://www.conventionalcommits.org/

[gitmoji]: https://github.com/carloscuesta/gitmoji/blob/master/README.md

[gitmoji-site]: https://gitmoji.dev/

[editor-config-file]: https://github.com/Faeq-F/Quokka/blob/main/.editorconfig

---

Code changes to Quokka are welcomed via the process below.

1. Find or open a ticket relevant to the change you wish to make and
   comment saying that you wish to work on this change.

   If the change introduces new functionality or behaviour this would be a good
   time to discuss the details of the change to ensure we are in agreement as to
   how the new functionality should work.

3. Open a GitHub pull request with your changes.

4. A Quokka team member will review the changes and may provide feedback to
   work on. Depending on the change there may be multiple rounds of feedback.

5. Once the changes have been approved the code will be merged into the
   main branch.

6. Update the [Changelog.md](changelog) file with your changes.

[changelog]: https://faeq-f.github.io/Quokka/changelog

## Attribution

These guidelines are adapted from the [Gleam contributing guidelines](https://github.com/gleam-lang/gleam/blob/main/CONTRIBUTING.md).
`)

contributing.value = contributing.value.substring(contributing.value.indexOf("\n") + 1)

// onMounted(async () => {
//   changelog.value = ""
//   try {
//     changelog.value = await $fetch('https://raw.githubusercontent.com/Faeq-F/Quokka/refs/heads/main/CONTRIBUTING.md')
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

import { useTheme } from '@maz-ui/themes'
const { colorMode } = useTheme()
const theme = ref(colorMode.value)
watch(colorMode, async (newTheme, _oldTheme) => theme.value = newTheme.toString())
</script>
<template>
  <div>
    <div class="text-center mt-42 varela">
      <MazAnimatedElement direction="up" :delay="200" :duration="700">
        <span class="text-6xl">Contributing</span>
      </MazAnimatedElement>
      <MazAnimatedText tag="h1" text="Help shape the future of this project"
        :delay="400" :duration="1500" direction="up" :column-gap="0.3"
        :row-gap="0.3" class="text-gray-500 dark:text-gray-400 mt-4" />
    </div>
    <div class="w-full px-78 mb-4 mt-16 outfit">
      <MazAnimatedElement direction="up" :delay="900" :duration="700">
        <MazCardSpotlight class="min-h-[40vh] w-full">
          <nuxt-link
            to="https://github.com/Faeq-F/Quokka/blob/main/CONTRIBUTING.md"
            class="!no-underline flex items-center !not-italic">
            <UIcon name="i-lucide-book-open" class="mr-1.5 !size-4" />
            <code>CONTRIBUTING.md</code>
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