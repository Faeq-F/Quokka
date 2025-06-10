<script setup lang="ts">
import { usePluginsStore } from '../../stores/plugins.ts';
const plugins = usePluginsStore()
const topPlugins = plugins.pluginsList.slice(0, 9)

import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import MazAnimatedText from 'maz-ui/components/MazAnimatedText'
</script>

<template>
  <div class="px-78 pt-62">
    <MazCarousel>
      <template #title>
        <MazAnimatedText tag="h4" text="Easily extensible" :duration="2000"
          direction="down" :column-gap="0.2" :row-gap="0.2"
          class="maz-m-0 font-bold text-4xl varela" />
        <MazAnimatedText tag="p"
          text="Plugin-oriented architecture; add or remove any feature you wish"
          :delay="200" :duration="2000" direction="up" :column-gap="0.2"
          :row-gap="0.2" class="outfit text-gray-500 dark:text-gray-400" />
      </template>

      <MazAnimatedElement direction="right" :delay="400" :duration="2000"
        v-for="(plugin, i) in topPlugins" :key="plugin.name">
        <MazCardSpotlight style="min-width: 250px;box-shadow: none;"
          class="w-72">
          <MazCard :images="[
            'https://loremflickr.com/250/300'
          ]" style="box-shadow: none;" class="w-full !bg-transparent">
            <template #title>
              <h4 class="maz-m-0">
                {{ plugin.name }}
              </h4>
            </template>
            <template #content>
              <p class="maz-text-muted" style="margin-bottom: 0;">
                {{ plugin.shortDescription }}
              </p>
            </template>
          </MazCard>
        </MazCardSpotlight>
      </MazAnimatedElement>
      <MazAnimatedElement direction="right" :duration="2000">
        <MazCardSpotlight style="min-width: 250px;box-shadow: none;"
          color="secondary" class="cursor-pointer">
          <MazCard style="min-width: 250px;box-shadow: none;"
            class="hover:bg-gray-400 !bg-transparent">
            <template #title>
              <h4 class="maz-m-0">
              </h4>
            </template>
            <template #content>
              <p class="maz-text-muted" style="margin-bottom: 0;">
                and more...
              </p>
            </template>
          </MazCard>
        </MazCardSpotlight>
      </MazAnimatedElement>
    </MazCarousel>
  </div>
</template>