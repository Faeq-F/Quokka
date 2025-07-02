<script setup lang="ts">
import { usePluginsStore } from '~/stores/plugins.ts';
const plugins = usePluginsStore()
import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import PluginCard from '~/components/PluginCard.vue'
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
      <MazCarousel hideScrollbar id="pluginCarousel">
        <MazAnimatedElement direction="right" :delay="1500" :duration="1500"
          v-for="(plugin, i) in plugins.getTopPlugins()" :key="i">
          <PluginCard :plugin="plugin" />
        </MazAnimatedElement>

        <MazAnimatedElement direction="right" :duration="2000">
          <MazCardSpotlight style="min-width: 250px;box-shadow: none;"
            class="cursor-pointer">
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

#pluginCarousel .m-carousel__items::after {
  box-shadow: inset 30px 0 15px -4px rgba(255, 255, 255, 0.8),
    inset -30px 0 15px -4px rgb(255 255 255 / 80%);
  content: "";
  width: calc(100vw - 39.6rem);
  height: 12rem;
  position: absolute;
  left: 0;
}
</style>