<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import { ref, watch } from 'vue';
import Link from '~/components/link.vue'

const route = useRoute()
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()
const name = (route.params.name as string).replace('~', ' ')
const plugin = plugins.pluginsList.find((p) => p.name === name)

const loading = ref(false)
const readme = ref("Could not load the file")
const contributors = ref([])

watch(() => route.params.name, fetchData, { immediate: true })
async function fetchData(_name) {
  readme.value = ""
  contributors.value = []
  loading.value = true
  try {
    readme.value = await $fetch('https://raw.githubusercontent.com/' + plugin?.github + '/main/README.md')
    contributors.value = await $fetch('https://api.github.com/repos/' + plugin?.github + '/contributors')
  } catch (err) {
    console.log('Error fetching plugin data:', err.toString())
  } finally {
    loading.value = false
  }
}

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
  <div class="mx-78 mt-24">
    <div class="flex flex-col items-center mb-16">
      <div class="flex items-center">
        <MazAnimatedElement direction="up" :delay="600" :duration="700">
          <UIcon :name="'lucide-' + plugin.icon" class="!w-10 !h-10" />
        </MazAnimatedElement>
        <MazAnimatedElement direction="right" :delay="800" :duration="700"
          class="inline font-bold varela pl-2 text-xl">
          <h1>
            {{ plugin.name }}
          </h1>
        </MazAnimatedElement>
      </div>
      <MazAnimatedElement direction="down" :delay="1000" :duration="700"
        class="outfit">
        {{ plugin.shortDescription }}
      </MazAnimatedElement>
    </div>
    <div class=" flex flex-row" data-lenis-prevent>
      <div class="basis-3/4 pt-4 px-4">
        <MazAnimatedElement direction="right" :delay="1200" :duration="700">
          <MazCardSpotlight class="min-h-[85vh] mb-4 w-full">
            <nuxt-link
              :to="'https://github.com/' + plugin?.github + '/blob/main/README.md'"
              class="!no-underline flex items-center !not-italic">
              <UIcon name="i-lucide-book-open" class="mr-1.5 !size-4" />
              <code>README.md</code>
              <UIcon name="i-lucide-arrow-up-right" class="!size-2 mb-1" />
            </nuxt-link>
            <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
            <MdPreview :theme="theme" previewTheme="github" codeTheme="github"
              language="en-US" class="!bg-transparent" :modelValue="readme"
              v-if="!loading" />
          </MazCardSpotlight>
        </MazAnimatedElement>
      </div>
      <div class="basis-1/4 pt-4 px-4 outfit">
        <MazAnimatedElement direction="left" :delay="1400" :duration="700">
          <MazCardSpotlight class="w-full m-2">
            <div class="flex items-center text-sm">
              <UIcon name="i-lucide-images" class="mr-1.5 !size-4" />
              <span>Gallery</span>
            </div>
            <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
            <MazCard :images="['https://loremflickr.com/600/600',
              'https://loremflickr.com/700/700', 'https://loremflickr.com/400/400',
              'https://loremflickr.com/300/300']" :images-show-count="3"
              :no-remaining="false" zoom class="w-full" noPadding>
            </MazCard>
          </MazCardSpotlight>
        </MazAnimatedElement>
        <MazAnimatedElement direction="left" :delay="1600" :duration="700">
          <MazCardSpotlight class="w-full m-2">
            <div class="flex items-center text-sm">
              <UIcon name="i-lucide-square-kanban" class="mr-1.5 !size-4" />
              <span>Details</span>
            </div>
            <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
            <div class="text-sm">
              <ul class="list-disc ml-5">
                <li>
                  <div class="flex items-center">
                    <Link :url="'https://github.com/' + plugin?.github">
                    Source code
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <Link url="">Discussions</Link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <Link url="">Feedback</Link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <Link url="">Report an Issue</Link>
                  </div>
                </li>
              </ul>
            </div>
          </MazCardSpotlight>
        </MazAnimatedElement>
        <MazAnimatedElement direction="left" :delay="1800" :duration="700">
          <a :href="plugin?.downloadUrl" target="_blank"
            class="!no-underline !not-italic">
            <MazCardSpotlight class="w-full m-2">
              <div class="flex items-center text-sm">
                <UIcon name="i-lucide-plug-zap" class="mr-1.5 !size-4" />
                <span>Latest Release</span>
                <UIcon name="i-lucide-arrow-up-right" class="!size-2 mb-1" />
              </div>
              <USeparator class="my-3"
                :ui="{ border: 'dark:border-gray-600' }" />
              <span class="underline">v{{ plugin.version }}</span>
            </MazCardSpotlight>
          </a>
        </MazAnimatedElement>
        <MazAnimatedElement direction="left" :delay="2000" :duration="700">
          <MazCardSpotlight class="w-full m-2">
            <div class="flex items-center text-sm">
              <UIcon name="i-lucide-tags" class="mr-1.5 !size-4" />
              <span>Tags</span>
            </div>
            <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
            <UKbd v-for="(tag, i) in plugin.tags" :key="i"
              class="mx-0.5 outfit">
              <UIcon
                :name="'i-lucide-' + plugins.tags.find((t) => t.label === tag)?.icon"
                class="mx-0.5" />
              {{ tag }}
            </UKbd>
          </MazCardSpotlight>
        </MazAnimatedElement>
        <MazAnimatedElement direction="left" :delay="200" :duration="700">
          <MazCardSpotlight class="w-full m-2">
            <div class="flex items-center text-sm ">
              <UIcon name="i-lucide-git-pull-request-arrow"
                class="mr-1.5 !size-4" />
              <span>Author & Contributors</span>
            </div>
            <span class="text-xs">Plugin by
              <nuxt-link :to="plugin.authorUrl">
                <span
                  class="underline hover:text-gray-700 dark:hover:text-white">{{
                    plugin.author }}</span>
              </nuxt-link>
            </span>
            <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
            <div class="flex justify-around">
              <div v-for="(contributor, i) in contributors" :key="i"
                class="flex items-center mt-2">
                <nuxt-link :to="contributor.html_url"
                  class="!no-underline !not-italic flex items-center">
                  <img :src="contributor.avatar_url" alt="avatar"
                    class="w-6 h-6 hover:w-7 hover:h-7 transition-all duration-200 rounded-full mr-2 inline" />
                  {{ contributor.login }}
                </nuxt-link>
              </div>
            </div>
          </MazCardSpotlight>
        </MazAnimatedElement>
      </div>
    </div>
  </div>
</template>