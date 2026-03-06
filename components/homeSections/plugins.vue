<script setup lang="ts">
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()
import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import PluginCard from '~/components/PluginCard.vue'
</script>

<template>
  <div class="px-78 pt-62">
    <MazCarousel hideScrollbar hide-scroll-buttons class="m-0 p-0 -mb-16">
      <template #title>
        <MazAnimatedElement direction="down" :delay="600" :duration="700"
          class="inline">
          <h4 class="maz-m-0 font-bold text-4xl varela">Easily</h4>
        </MazAnimatedElement>
        <MazAnimatedElement direction="down" :delay="800" :duration="700"
          class="inline">
          <h4 class="maz-m-0 font-bold text-4xl varela">extensible</h4>
        </MazAnimatedElement>
        <MazAnimatedText tag="h1"
          text="Plugin-oriented architecture; add or remove any feature you wish"
          :delay="1100" :duration="1500" direction="up" :column-gap="0.3"
          :row-gap="0.3" class="outfit text-gray-500 dark:text-gray-400 " />
      </template>
    </MazCarousel>
    <MazAnimatedElement direction="down" :duration="20" :delay="1500">
      <MazCarousel hideScrollbar id="pluginCarousel">
        <MazAnimatedElement direction="right" :delay="1500" :duration="1500"
          v-for="(plugin, i) in plugins.getTopPlugins()" :key="i" class="z-9">
          <PluginCard :plugin="plugin" />
        </MazAnimatedElement>

        <MazAnimatedElement direction="right" :duration="2000">
          <MazCardSpotlight style="min-width: 250px;box-shadow: none;"
            class="cursor-pointer">
            <MazCard style="min-width: 250px;box-shadow: none;"
              class="hover:bg-gray-400 !bg-transparent !border-0 outfit">
              <p class="maz-text-muted" style="margin-bottom: 0;">
                and more...
              </p>
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
  width: calc(100vw - 39rem);
  height: 12rem;
  position: absolute;
  left: 0;
}

.dark #pluginCarousel .m-carousel__items::after {
  box-shadow: inset 30px 0 15px -4px rgba(15, 23, 43, 0.8),
    inset -30px 0 15px -4px rgb(15 23 43 / 80%);
}
</style>