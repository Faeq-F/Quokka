<script setup lang="ts">
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()
defineProps(['plugin'])
import MazCardSpotlight from 'maz-ui/components/MazCardSpotlight'
</script>

<template>
  <MazCardSpotlight class="my-4 mx-0 w-78 h-42 clickable outfit"
    @click="$router.push('/plugin/' + plugin.name.replace(' ', '~'))">
    <div class=" text-sm absolute top-4 right-4 left-auto ">
      <MazAnimatedElement direction=" right" :delay="600" :duration="700">
        v{{ plugin.version }}
      </MazAnimatedElement>
    </div>
    <div class="flex justify-start pb-1">
      <div class="flex ">
        <div>
          <MazAnimatedElement direction="up" :delay="600" :duration="700">
            <UIcon :name="'lucide-' + plugin.icon" class="!w-10 !h-10" />
          </MazAnimatedElement>
        </div>
        <div class="px-2 text-gray-500 dark:text-gray-200 w-52">
          <MazAnimatedElement direction="up" :delay="800" :duration="700"
            class="inline">
            <h1>
              {{ plugin.name }}
            </h1>
          </MazAnimatedElement>
          <div>
            <MazAnimatedElement direction="up" :delay="1100" :duration="700"
              class="inline">
              <nuxt-link :to="plugin.authorUrl" target="_blank">
                by <span
                  class="underline hover:text-gray-700 dark:hover:text-white">{{
                    plugin.author }}</span>
              </nuxt-link>
            </MazAnimatedElement>
          </div>
        </div>
      </div>
    </div>
    <div class="text-gray-600 p-1 dark:text-gray-100">
      <MazAnimatedElement direction="up" :delay="1400" :duration="700">
        {{ plugin.shortDescription }}
      </MazAnimatedElement>
    </div>
    <div class="">
      <UKbd v-for="(tag, i) in plugin.tags" :key="i" class="mx-0.5 mt-2 outfit">
        <UIcon
          :name="'i-lucide-' + plugins.tags.find((t) => t.label === tag)?.icon"
          class="mx-0.5" />
        {{ tag }}
      </UKbd>
    </div>
  </MazCardSpotlight>

</template>