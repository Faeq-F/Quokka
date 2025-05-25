<script setup lang="ts">


const galleryitems = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
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

const competitions = [
  {
    label: 'Premier League',
    area: 'England',
    areaEnsignUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Flag_of_the_United_Kingdom.svg'
  },
  {
    label: 'La Liga',
    area: 'Spain',
    areaEnsignUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
  },
  {
    label: 'Bundesliga',
    area: 'Germany',
    areaEnsignUrl: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'
  },
  {
    label: 'Serie A',
    area: 'Italy',
    areaEnsignUrl: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg'
  },
  {
    label: 'Ligue 1',
    area: 'France',
    areaEnsignUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'
  },
  {
    label: 'Eredivisie',
    area: 'Netherlands',
    areaEnsignUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg'
  }
]
</script>

<template>


  <div class="flex flex-col md:flex-row gap-8 mt-8">
    <!-- Left Side: Title, Caption, Theme Toggle, Competitions -->
    <div class="flex-1 flex flex-col justify-center items-start px-4">
      <h1 class="text-3xl font-bold mb-2">Welcome to Quokka</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-6">
        Explore football competitions and enjoy the interactive gallery!
      </p>


      <div class="grid gap-4 grid-cols-1 mob-l:grid-cols-2 tab-l:grid-cols-3 w-full">
        <MazCardSpotlight v-for="competition of competitions" :key="competition.label" color="secondary">
          <div class="flex p-4">
            <MazAvatar v-if="competition.areaEnsignUrl" :src="competition.areaEnsignUrl" style="margin-right: 16px;"
              size="0.8rem" />
            <div class="truncate flex column">
              <span class="truncate">
                {{ competition.label }}
              </span>
              <span class="truncate">
                {{ competition.area }}
              </span>
            </div>
          </div>
        </MazCardSpotlight>
      </div>
    </div>

    <!-- Right Side: Gallery -->
    <div class="flex-1 w-full flex flex-col items-center">
      <UCarousel ref="carousel" v-slot="{ item }" arrows :items="galleryitems" :prev="{ onClick: onClickPrev }"
        :next="{ onClick: onClickNext }" class="w-full max-w-xs mx-auto" @select="onSelect" loop="true">
        <img :src="item" width="320" height="320" class="rounded-lg" />
      </UCarousel>

      <div class="flex gap-1 justify-between pt-4 max-w-xs mx-auto">
        <div v-for="(item, index) in galleryitems" :key="index"
          class="size-11 opacity-25 hover:opacity-100 transition-opacity"
          :class="{ 'opacity-100': activeIndex === index }" @click="select(index)">
          <img :src="item" width="44" height="44" class="rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>
