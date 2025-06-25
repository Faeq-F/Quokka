<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import { ref, watch } from 'vue';

const route = useRoute()
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()
const name = (route.params.name as string).replace('~', ' ')
const plugin = plugins.pluginsList.find((p) => p.name === name)

//will load images from public under respective folder
//need to render md
//add gallery

const loading = ref(false)
const readme = ref(null)

// watch the params of the route to fetch the data again
watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData(id) {
  readme.value = null
  loading.value = true
  try {
    readme.value = await $fetch('https://raw.githubusercontent.com/' + plugin?.github + '/main/README.md')
  } catch (err) {
    readme.value = err.toString()
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="mx-78 mt-24">
    <div class=" flex justify-start pb-1 ">
      <div class="flex ml-8 items-center  ">
        <div>
          <MazAnimatedElement direction="up" :delay="600" :duration="700">
            <UIcon :name="'lucide-' + plugin.icon" class="!w-10 !h-10" />
          </MazAnimatedElement>
        </div>
        <div class="ml-4 px-2 text-gray-500 dark:text-gray-200 w-full">
          <MazAnimatedElement direction="up" :delay="800" :duration="700"
            class="inline">
            <h1>
              {{ plugin.name }}
            </h1>
          </MazAnimatedElement>
          <div>
            <div class="text-gray-600  dark:text-gray-100">
              <MazAnimatedElement direction="up" :delay="1400" :duration="700">
                {{ plugin.shortDescription }}
              </MazAnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" flex flex-row" id="docsPage" data-lenis-prevent>
      <div class="basis-3/4 pt-4 px-4">
        <MazCardSpotlight class="h-[75vh]">
          <div class="flex items-center ">
            <UIcon name="i-lucide-book-open" class="mr-1 !size-4" />
            <code>README.md</code>
            <div class="flex items-start !h-full">
              <UIcon name="i-lucide-arrow-up-right" class="!size-2" />
            </div>
          </div>
          <USeparator class="my-3" />
          {{ readme }}
        </MazCardSpotlight>
      </div>
      <div class="basis-1/4 pt-4 px-4">
        <MazCardSpotlight class="w-full m-2">
          <nuxt-link
            :to="'https://github.com/' + plugin?.github">github</nuxt-link>
        </MazCardSpotlight>
        <MazCardSpotlight class="w-full m-2">
          Latest version:
          <br>
          v{{ plugin.version }}
          <nuxt-link :to="plugin?.downloadUrl">download</nuxt-link>
          Latest release date
        </MazCardSpotlight>
        <MazCardSpotlight class="w-full m-2">
          <nuxt-link :to="plugin.authorUrl">
            by <span
              class="underline hover:text-gray-700 dark:hover:text-white">{{
                plugin.author }}</span>
          </nuxt-link>
        </MazCardSpotlight>
        <MazCardSpotlight class="w-full m-2">
          <div>
            <UKbd v-for="(tag, i) in plugin.tags" :key="i" class="mx-0.5 mt-2">
              <UIcon
                :name="'i-lucide-' + plugins.tags.find((t) => t.label === tag)?.icon"
                class="mx-0.5" />
              {{ tag }}
            </UKbd>
          </div>
        </MazCardSpotlight>
      </div>
    </div>
  </div>
</template>