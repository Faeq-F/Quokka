<script setup lang="ts">
import { usePluginsStore } from '../../stores/plugins.ts';
const plugins = usePluginsStore()
const topPlugins = plugins.pluginsList.slice(0, 9)
</script>

<template>
  <div class="px-78 pt-62">
    <MazCarousel>
      <template #title>
        <MazAnimatedElement direction="down" :duration="2000" once=false>
          <h4 class="maz-m-0 font-bold text-4xl varela">Easily extensible</h4>
          <p class="outfit text-gray-500 dark:text-gray-400">
            <MazAnimatedElement direction="up" :delay="700" :duration="2000" once=false class="inline">
              Plugin-oriented</MazAnimatedElement>
            <MazAnimatedElement direction="up" :delay="775" :duration="2000" once=false class="inline">
              architecture;&nbsp;</MazAnimatedElement>
            <MazAnimatedElement direction="up" :delay="850" :duration="2000" once=false class="inline">add
            </MazAnimatedElement>
            <MazAnimatedElement direction="up" :delay="925" :duration="2000" once=false class="inline">or
            </MazAnimatedElement>
            <MazAnimatedElement direction="up" :delay="1000" :duration="2000" once=false class="inline">remove
            </MazAnimatedElement>
            <MazAnimatedElement direction="up" :delay="1075" :duration="2000" once=false class="inline">any
            </MazAnimatedElement>
            <MazAnimatedElement direction="up" :delay="1150" :duration="2000" once=false class="inline">feature
            </MazAnimatedElement>
            <MazAnimatedElement direction="up" :delay="1225" :duration="2000" once=false class="inline">you
            </MazAnimatedElement>
            <MazAnimatedElement direction="up" :delay="1300" :duration="2000" once=false class="inline">wish
            </MazAnimatedElement>
          </p>
        </MazAnimatedElement>
      </template>

      <MazAnimatedElement direction="down" :delay="(200 * i) + 1500" :duration="2000" once=false
        v-for="(plugin, i) in topPlugins" :key="plugin.name">
        <MazCardSpotlight style="min-width: 250px;box-shadow: none;" class="w-72">
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
      <MazAnimatedElement direction="down" :delay="2000 + 500" :duration="2000" once="False">
        <MazCardSpotlight style="min-width: 250px;box-shadow: none;" color="secondary" class="cursor-pointer">
          <MazCard style="min-width: 250px;box-shadow: none;" class="hover:bg-gray-400 !bg-transparent">
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