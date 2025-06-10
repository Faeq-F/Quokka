<script setup lang="ts">
import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import MazAnimatedText from 'maz-ui/components/MazAnimatedText'
</script>

<template>
  <div class="text-center mt-16 outfit">
    <MazAnimatedElement direction="up" :delay="2200" :duration="2000">
      <img src="~/assets/media/QuokkaTextLogo.svg"
        class="w-62 mx-auto my-0 dark:invert-100">
    </MazAnimatedElement>
    <MazAnimatedText tag="p"
      text="A customizable keystroke launcher with plugins" :delay="2500"
      :duration="2000" direction="up" :column-gap="0.2" :row-gap="0.2"
      class="outfit text-gray-500 dark:text-gray-400 mb-6" />
  </div>

  <MazAnimatedElement direction="up" :delay="3000" :duration="2000">
    <div class="flex p-78 py-0">
      <div style="border-radius: 60px; overflow: hidden;">
        <div class="overflow-hidden rounded-[60px] -m-4">
          <video src="~/assets/media/HomePageVideo.mp4" autoplay loop
            class="w-screen"></video>
        </div>
      </div>
    </div>
  </MazAnimatedElement>
</template>