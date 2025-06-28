<script setup lang="ts">
import { useThemesStore } from '~/stores/themes'
const themes = useThemesStore()

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

import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'

</script>

<template>
  <div class="flex px-78 pt-62">
    <div class="inline">
      <MazAnimatedElement direction="right" :delay="1100" :duration="2000">
        <MazCardSpotlight :padding="false">
          <div class="px-4 w-88 ">

            <textarea readonly>
            ...

            {{ themes.themes[activeIndex].json }}
            ...
            </textarea>

          </div>
        </MazCardSpotlight>
      </MazAnimatedElement>
      <MazAnimatedElement direction="right" :delay="1200" :duration="2000">
        <MazCardSpotlight
          class="flex flex-col justify-left items-center mt-2 w-full"
          :padding="false">
          <div class="p-4 flex justify-between outfit">
            <div class="flex items-center">
              <UIcon name="i-lucide-swatch-book" class="mr-2" />
              {{ themes.themes[activeIndex].name }}
            </div>
            <div class="flex">
              <USeparator orientation="vertical" class="mx-3" />
              <MazBtn color="transparent" class="!p-1 !min-h-0"
                :href="themes.themes[activeIndex].downloadLink">
                <template #icon>
                  <UIcon name="i-lucide-download" />
                </template>
              </MazBtn>
            </div>
          </div>
        </MazCardSpotlight>
      </MazAnimatedElement>
    </div>

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
          :items="themes.getGalleryItems()"
          :prev="{ onClick: onClickPrev, class: 'ring-[#1f8fff33]' }"
          :next="{ onClick: onClickNext, class: 'ring-[#1f8fff33]' }"
          class="w-[80%] rounded-lg mx-auto my-0" @select="onSelect"
          :loop="true" :ui="{
            container: 'transition-[height]',
            controls: 'absolute -bottom-4 inset-x-12',
            dots: '-top-7',
            dot: 'w-6 h-1 bg-[#1f8fff33]',
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
}

.dark .sameOutline {
  border: #1f8fff33 1px solid;
}

textarea {
  font-family: cascadia code;
  font-size: x-small;
  height: 48vh;
  width: 100%;
  resize: none;
  align-content: center;
}
</style>