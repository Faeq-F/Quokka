<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

const galleryitems = [
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
]

import { ref, useTemplateRef } from 'vue';
const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}
function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index
  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
  <div class="flex px-78 pt-62">
    <div class="flex-1 flex flex-col justify-center items-center px-4">

      <ImgComparisonSlider>
        <!-- eslint-disable -->
        <img slot="first" style="width: 100%" src="~/assets/media/AppScreenshots/AllApps.png" />
        <img slot="second" style="width: 100%" src="~/assets/media/AppScreenshots/AllApps.png" />
        <UIcon name="i-lucide-move-horizontal" class="!size-6" style="color: lightskyblue;" slot="handle" />
        <!-- eslint-enable -->
      </ImgComparisonSlider>

    </div>

    <div class="flex-2 w-full flex flex-col items-center pr-4 rounded-lg">
      <div class="font-bold text-4xl text-center varela">
        <MazAnimatedElement direction="up" :delay="200" :duration="2000" once=false class="inline">
          Customizable GUI &
          functionality
        </MazAnimatedElement>

      </div>
      <div class="mb-4 outfit">
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          <MazAnimatedElement direction="up" :delay="400" :duration="2000" once=false class="inline">Flexible,
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="475" :duration="2000" once=false class="inline">with
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="550" :duration="2000" once=false class="inline">an
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="625" :duration="2000" once=false class="inline">intuitive
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="700" :duration="2000" once=false class="inline">file-based
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="775" :duration="2000" once=false class="inline">configuration
          </MazAnimatedElement>
        </p>
      </div>

      <MazAnimatedElement direction="up" :delay="975" :duration="2000" once=false class="justify-center">
        <UCarousel ref="carousel" v-slot="{ item }" arrows auto-height dots :items="galleryitems"
          :prev="{ onClick: onClickPrev }" :next="{ onClick: onClickNext }" class="w-[80%] rounded-lg mx-auto my-0"
          @select="onSelect" loop="true" :ui="{
            container: 'transition-[height]',
            controls: 'absolute -bottom-4 inset-x-12',
            dots: '-top-7',
            dot: 'w-6 h-1'
          }">
          <img :src="item" class="rounded-lg mx-auto my-0" />
        </UCarousel>
      </MazAnimatedElement>

    </div>
  </div>
</template>