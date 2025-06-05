<script setup lang="ts">
const galleryitems = [
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
  '/Quokka/_nuxt/assets/media/AppScreenshots/AllApps.png',
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

import { ref } from 'vue';
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

</script>

<template>
  <div class="flex px-78 pt-62">
    <div class="flex flex-col justify-left items-center px-4 outline rounded-lg outline-gray-400">

      <div class="">
        <pre class="text-xs">
      <code>
      ...

      {{ codeItems[activeIndex] }}
      
      ...
      </code></pre>
        <div class="flex justify-around p-4 outline rounded-xl rounded-b-none outline-gray-400">Windows 11 Light <div>
            <div class="bg-gray-600 opacity-70 py-1 px-2 rounded-xl hover:bg-black">
              <UIcon name="i-lucide-download" class="size-5 bg-white" />
            </div>
          </div>
        </div>


      </div>

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