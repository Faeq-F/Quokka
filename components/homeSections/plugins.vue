<script setup lang="ts">
import { usePluginsStore } from '../../stores/plugins.ts';
const plugins = usePluginsStore()
const topPlugins = plugins.pluginsList.slice(0, 9)

import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
</script>

<template>
  <div class="px-78 pt-62">
    <MazCarousel hideScrollbar noScrollBtn class="m-0 p-0 -mb-16">
      <template #title>
        <MazAnimatedElement direction="down" :delay="600" :duration="700"
          class="inline">
          <h4 class="maz-m-0 font-bold text-4xl varela">Easily</h4>
        </MazAnimatedElement>
        <MazAnimatedElement direction="down" :delay="800" :duration="700"
          class="inline">
          <h4 class="maz-m-0 font-bold text-4xl varela">extensible</h4>
        </MazAnimatedElement>
        <p class="outfit text-gray-500 dark:text-gray-400">
          <MazAnimatedElement direction="up" :delay="1100" :duration="700"
            class="inline">
            Plugin-oriented</MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="1150" :duration="700"
            class="inline">
            architecture;&nbsp;</MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="1200" :duration="700"
            class="inline">add
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="1250" :duration="700"
            class="inline">or
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="1300" :duration="700"
            class="inline">remove
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="1350" :duration="700"
            class="inline">any
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="1400" :duration="700"
            class="inline">feature
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="1450" :duration="700"
            class="inline">you
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="1500" :duration="700"
            class="inline">wish
          </MazAnimatedElement>
        </p>
      </template>
    </MazCarousel>
    <MazAnimatedElement direction="down" :duration="20" :delay="1500">
      <MazCarousel hideScrollbar>
        <MazAnimatedElement direction="right" :delay="1500" :duration="1500"
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
    </MazAnimatedElement>
  </div>
</template>

<style lang="css">
.m-carousel .m-carousel__items {
  overflow-x: hidden !important;
}
</style>