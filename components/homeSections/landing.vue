<script setup lang="ts">
import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import MazAnimatedText from 'maz-ui/components/MazAnimatedText'
</script>

<template>
  <div class="text-center mt-16 outfit">
    <MazAnimatedElement direction="up" :delay="1200" :duration="700">
      <img src="~/assets/media/QuokkaTextLogo.svg"
        class="w-62 mx-auto my-0 dark:invert-100">
    </MazAnimatedElement>
    <p class="text-gray-500 dark:text-gray-400 mb-6">
      <MazAnimatedElement direction="up" :delay="1400" :duration="700"
        class="inline">A
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1450" :duration="700"
        class="inline">customizable
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1500" :duration="700"
        class="inline">keystroke
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1550" :duration="700"
        class="inline">launcher
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1600" :duration="700"
        class="inline">with
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1650" :duration="700"
        class="inline">plugins
      </MazAnimatedElement>
    </p>
  </div>

  <MazAnimatedElement direction="up" :delay="1900" :duration="700">
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