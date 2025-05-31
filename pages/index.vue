<script setup lang="ts">
import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'


const galleryitems = [
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
]

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

import MazCardSpotlight from 'maz-ui/components/MazCardSpotlight'
import { ref, useTemplateRef } from 'vue';

const features = [
  {
    title: 'and more!',
    description: 'Fuzzy Search, Special Commands, Command signifiers, etc.',
    icon: 'i-lucide-terminal'
  },
]

const faq = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 3',
    answer: 'Answer 3',
  },
  {
    question: 'Question 4',
    answer: 'Answer 4',
  },
]

import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import MazAccordion from 'maz-ui/components/MazAccordion'
import { usePluginsStore } from '../stores/plugins';
const plugins = usePluginsStore()
const topPlugins = plugins.pluginsList.slice(0, 9)

</script>

<template>
  <div class="text-center mt-16 outfit">
    <MazAnimatedElement direction="up" :delay="500" :duration="2000" once=false>
      <img src="~/assets/media/QuokkaTextLogo.svg"
        class="w-62 mx-auto my-0 dark:invert-100">
    </MazAnimatedElement>

    <p class="text-gray-500 dark:text-gray-400 mb-6">
      <MazAnimatedElement direction="up" :delay="700" :duration="2000" once=false
        class="inline">A&nbsp;</MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="775" :duration="2000" once=false
        class="inline">customizable&nbsp;</MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="850" :duration="2000" once=false
        class="inline">keystroke&nbsp;</MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="925" :duration="2000" once=false
        class="inline">launcher&nbsp;</MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1000" :duration="2000" once=false
        class="inline">with&nbsp;</MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1075" :duration="2000" once=false
        class="inline">plugins</MazAnimatedElement>
    </p>
  </div>

  <MazAnimatedElement direction="up" :delay="925" :duration="2000" once=false>
    <div class="flex p-4">
      <div class="p-16">
        <div style="border-radius: 60px; overflow: hidden;">
          <div class="overflow-hidden rounded-[60px] -m-4">
            <video src="~/assets/media/HomePageVideo.webm" autoplay loop
              class="w-screen"></video>
          </div>
        </div>
      </div>
    </div>
  </MazAnimatedElement>

  <div class="p-20 pt-2">
    <MazCarousel>
      <template #title>
        <MazAnimatedElement direction="down" :duration="2000" once=false>
          <h4 class="maz-m-0 font-bold text-4xl lexend">Easily extensible</h4>
          <p class="outfit ">Plugin-oriented architecture; add or remove
            any
            feature you wish</p>
        </MazAnimatedElement>
      </template>

      <MazAnimatedElement direction="down" :duration="2000" once=false
        v-for="plugin in topPlugins" :key="plugin.name">
        <MazCardSpotlight style="min-width: 250px;box-shadow: none;" class="w-72">
          <MazCard :images="[
            'https://loremflickr.com/250/300'
          ]" style="box-shadow: none;" class="w-full">
            <template #title>
              <h4 class="maz-m-0">
                {{ plugin.name }}
              </h4>
            </template>
            <template #content>
              <p class="maz-text-muted" style="margin-bottom: 0;">
                {{ plugin.description }}
              </p>
            </template>
          </MazCard>
        </MazCardSpotlight>
      </MazAnimatedElement>
      <MazAnimatedElement direction="down" :duration="2000" once="False">
        <MazCardSpotlight style="min-width: 250px;box-shadow: none;"
          color="secondary" class="cursor-pointer">
          <MazCard style="min-width: 250px;box-shadow: none;"
            class="hover:bg-gray-400">
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

  <div class="flex">
    <div class="flex-1 flex flex-col justify-center items-center px-4">

      <ImgComparisonSlider>
        <!-- eslint-disable -->
        <img slot="first" style="width: 100%"
          src="~/assets/media/AppScreenshots/AllApps.png" />
        <img slot="second" style="width: 100%"
          src="~/assets/media/AppScreenshots/AllApps.png" />
        <UIcon name="i-lucide-move-horizontal" class="!size-6"
          style="color: lightskyblue;" slot="handle" />
        <!-- eslint-enable -->
      </ImgComparisonSlider>

    </div>

    <div class="flex-2 w-full flex flex-col items-center pr-4 rounded-lg">
      <div class="font-bold text-4xl text-center lexend">Customizable GUI &
        functionality
      </div>
      <div class="my-4 outfit">Flexible, with an intuitive file-based
        configuration</div>

      <UCarousel ref="carousel" v-slot="{ item }" arrows auto-height dots
        :items="galleryitems" :prev="{ onClick: onClickPrev }"
        :next="{ onClick: onClickNext }" class="w-[80%] rounded-lg"
        @select="onSelect" loop="true" :ui="{
          container: 'transition-[height]',
          controls: 'absolute -top-8 inset-x-12',
          dots: '-top-7',
          dot: 'w-6 h-1'
        }">
        <img :src="item" class="rounded-lg mx-auto my-0" />
      </UCarousel>

    </div>
  </div>


  <div class="h-60  w-full p-20 outfit">
    <div class="font-bold text-6xl mb-1 lexend text-center">
      Completely Free, Libre and Open Source
    </div>
    <div class="mb-4 outfit text-center">
      No premium tiers or paywalls - everything's included, with no ads or
      tracking
    </div>
    <MazAnimatedElement direction="down" :delay="0" :duration="2000" once=false
      class="m-4" v-for="q in faq" :key="q.question">
      <MazAccordion class="w-full" style="box-shadow: none;">
        <template #title-1>
          {{ q.question }}
        </template>
        <template #content-1>
          {{ q.answer }}
        </template>
      </MazAccordion>
    </MazAnimatedElement>

  </div>

  <div class="flex flex-col md:flex-row gap-8 mt-8 h-60">
    footer


    Support this project. / become a sponsor
    faeq © 2025
  </div>
</template>

<style>
.m-card-spotlight .inner {
  border-radius: 60px;
}

img-comparison-slider {
  --divider-width: 2px;
  --divider-color: #c0c0c0;
  --default-handle-opacity: 0.3;
  margin: 0;
  border-radius: 15px;
  border: none !important;
}
</style>