<script setup lang="ts">
const galleryitems = [
  '/Quokka/media/AppScreenshots/AllApps.png',
  '/Quokka/media/AppScreenshots/AllApps.png',
  '/Quokka/media/AppScreenshots/AllApps.png',
  '/Quokka/media/AppScreenshots/AllApps.png',
  '/Quokka/media/AppScreenshots/AllApps.png',
  '/Quokka/media/AppScreenshots/AllApps.png',
  '/Quokka/media/AppScreenshots/AllApps.png',
]

const codeItems = [
  {
    "SearchBar": {
      "SearchBarColor": "#fff",
      "SearchBarRounding": "8",
      "SearchBarBorderColor": "#dddddd",
      "SearchBarBorderThickness": "0",
      "SearchBarHeight": "40",
      "SearchIconWidth": "32",
      "SearchIconMargin": "8, 0, -8, 0",

      "EntryField": {
        "SearchFieldTxtColor": "Black",
        "SearchFieldTxtSelColor": "Black",
        "SearchFieldHeight": "32",
        "SearchFieldWidth": "720",
        "SearchFieldMargin": "5, 10, 10, 10",
        "SearchFieldTxtSize": "14",
        "SearchFieldPlaceholder": "Enter Query",
        "SearchFieldPlaceholderMargin": "5, 10, 10, 10",
        "SearchFieldPlaceholderColor": "#8e8e8e",
        "SearchFieldPlaceholderSize": "14"
      }
    }
  },
  {
    "SearchBar": {
      "SearchBarColor": "#fff",
      "SearchBarRounding": "8",
      "SearchBarBorderColor": "#dddddd",
      "SearchBarBorderThickness": "0",
      "SearchBarHeight": "40",
      "SearchIconWidth": "32",
      "SearchIconMargin": "8, 0, -8, 0",

      "EntryField": {
        "SearchFieldTxtColor": "Black",
        "SearchFieldTxtSelColor": "Black",
        "SearchFieldHeight": "32",
        "SearchFieldWidth": "720",
        "SearchFieldMargin": "5, 10, 10, 10",
        "SearchFieldTxtSize": "14",
        "SearchFieldPlaceholder": "Enter Query",
        "SearchFieldPlaceholderMargin": "5, 10, 10, 10",
        "SearchFieldPlaceholderColor": "#8e8e8e",
        "SearchFieldPlaceholderSize": "14"
      }
    }
  },
  {
    "SearchBar": {
      "SearchBarColor": "#fff",
      "SearchBarRounding": "8",
      "SearchBarBorderColor": "#dddddd",
      "SearchBarBorderThickness": "0",
      "SearchBarHeight": "40",
      "SearchIconWidth": "32",
      "SearchIconMargin": "8, 0, -8, 0",

      "EntryField": {
        "SearchFieldTxtColor": "Black",
        "SearchFieldTxtSelColor": "Black",
        "SearchFieldHeight": "32",
        "SearchFieldWidth": "720",
        "SearchFieldMargin": "5, 10, 10, 10",
        "SearchFieldTxtSize": "14",
        "SearchFieldPlaceholder": "Enter Query",
        "SearchFieldPlaceholderMargin": "5, 10, 10, 10",
        "SearchFieldPlaceholderColor": "#8e8e8e",
        "SearchFieldPlaceholderSize": "14"
      }
    }
  },
  {
    "SearchBar": {
      "SearchBarColor": "#fff",
      "SearchBarRounding": "8",
      "SearchBarBorderColor": "#dddddd",
      "SearchBarBorderThickness": "0",
      "SearchBarHeight": "40",
      "SearchIconWidth": "32",
      "SearchIconMargin": "8, 0, -8, 0",

      "EntryField": {
        "SearchFieldTxtColor": "Black",
        "SearchFieldTxtSelColor": "Black",
        "SearchFieldHeight": "32",
        "SearchFieldWidth": "720",
        "SearchFieldMargin": "5, 10, 10, 10",
        "SearchFieldTxtSize": "14",
        "SearchFieldPlaceholder": "Enter Query",
        "SearchFieldPlaceholderMargin": "5, 10, 10, 10",
        "SearchFieldPlaceholderColor": "#8e8e8e",
        "SearchFieldPlaceholderSize": "14"
      }
    }
  },
  {
    "SearchBar": {
      "SearchBarColor": "#fff",
      "SearchBarRounding": "8",
      "SearchBarBorderColor": "#dddddd",
      "SearchBarBorderThickness": "0",
      "SearchBarHeight": "40",
      "SearchIconWidth": "32",
      "SearchIconMargin": "8, 0, -8, 0",

      "EntryField": {
        "SearchFieldTxtColor": "Black",
        "SearchFieldTxtSelColor": "Black",
        "SearchFieldHeight": "32",
        "SearchFieldWidth": "720",
        "SearchFieldMargin": "5, 10, 10, 10",
        "SearchFieldTxtSize": "14",
        "SearchFieldPlaceholder": "Enter Query",
        "SearchFieldPlaceholderMargin": "5, 10, 10, 10",
        "SearchFieldPlaceholderColor": "#8e8e8e",
        "SearchFieldPlaceholderSize": "14"
      }
    }
  },
  {
    "SearchBar": {
      "SearchBarColor": "#fff",
      "SearchBarRounding": "8",
      "SearchBarBorderColor": "#dddddd",
      "SearchBarBorderThickness": "0",
      "SearchBarHeight": "40",
      "SearchIconWidth": "32",
      "SearchIconMargin": "8, 0, -8, 0",

      "EntryField": {
        "SearchFieldTxtColor": "Black",
        "SearchFieldTxtSelColor": "Black",
        "SearchFieldHeight": "32",
        "SearchFieldWidth": "720",
        "SearchFieldMargin": "5, 10, 10, 10",
        "SearchFieldTxtSize": "14",
        "SearchFieldPlaceholder": "Enter Query",
        "SearchFieldPlaceholderMargin": "5, 10, 10, 10",
        "SearchFieldPlaceholderColor": "#8e8e8e",
        "SearchFieldPlaceholderSize": "14"
      }
    }
  },
  {
    "SearchBar": {
      "SearchBarColor": "#fff",
      "SearchBarRounding": "8",
      "SearchBarBorderColor": "#dddddd",
      "SearchBarBorderThickness": "0",
      "SearchBarHeight": "40",
      "SearchIconWidth": "32",
      "SearchIconMargin": "8, 0, -8, 0",

      "EntryField": {
        "SearchFieldTxtColor": "Black",
        "SearchFieldTxtSelColor": "Black",
        "SearchFieldHeight": "32",
        "SearchFieldWidth": "720",
        "SearchFieldMargin": "5, 10, 10, 10",
        "SearchFieldTxtSize": "14",
        "SearchFieldPlaceholder": "Enter Query",
        "SearchFieldPlaceholderMargin": "5, 10, 10, 10",
        "SearchFieldPlaceholderColor": "#8e8e8e",
        "SearchFieldPlaceholderSize": "14"
      }
    }
  },
]

import { ref, useId } from 'vue';
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

import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'

</script>

<template>
  <div class="flex px-78 pt-62">
    <MazAnimatedElement direction="right" :delay="1100" :duration="2000"
      class="inline">
      <div
        class="flex flex-col justify-left items-center px-4 rounded-lg sameOutline">
        <div class="">
          <pre class="text-xs">
      <code>
      ...

      {{ codeItems[activeIndex] }}

      ...
      </code></pre>
          <div
            class="flex justify-around p-4 rounded-xl rounded-b-none sameOutline !border-b-0">
            Windows 11 Light <div>
              <MazBtn color="transparent" class="!p-1 !min-h-0">
                <template #icon>
                  <UIcon name="i-lucide-download" />
                </template>
              </MazBtn>

            </div>
          </div>
        </div>
      </div>
    </MazAnimatedElement>

    <div class="flex-2 w-full flex flex-col items-center pr-4 rounded-lg">
      <div class="font-bold text-4xl text-center varela">
        <MazAnimatedElement direction="up" :delay="600" :duration="700"
          class="inline">
          Customizable GUI &
          functionality
        </MazAnimatedElement>

      </div>
      <div class="mb-4 outfit">
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          <MazAnimatedElement direction="up" :delay="700" :duration="700"
            class="inline">Flexible,
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="750" :duration="700"
            class="inline">with
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="800" :duration="700"
            class="inline">an
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="850" :duration="700"
            class="inline">intuitive
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="900" :duration="700"
            class="inline">file-based
          </MazAnimatedElement>
          <MazAnimatedElement direction="up" :delay="950" :duration="700"
            class="inline">configuration
          </MazAnimatedElement>
        </p>
      </div>

      <MazAnimatedElement direction="left" :delay="1100" :duration="2000"
        class="justify-center">
        <UCarousel ref="carousel" v-slot="{ item }" arrows auto-height dots
          :items="galleryitems" :prev="{ onClick: onClickPrev }"
          :next="{ onClick: onClickNext }"
          class="w-[80%] rounded-lg mx-auto my-0" @select="onSelect"
          :loop="true" :ui="{
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
<style lang="css" scoped>
.sameOutline {
  border: oklch(86.9% 0.022 252.894) 1px solid;
  background: #fff
}

.dark .sameOutline {
  border: rgba(31, 143, 255, .2) 1px solid;
  background: #20212c
}
</style>