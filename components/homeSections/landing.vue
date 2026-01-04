<script setup lang="ts">
import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import { onMounted } from 'vue';

onMounted(async () => {
  (document.getElementById("home-video-elem") as HTMLVideoElement).play();
})
</script>

<template>
  <div class="text-center outfit" id="header">
    <MazAnimatedElement direction="up" :delay="1200" :duration="700">
      <img src="/media/QuokkaTextLogo.svg"
        class="w-62 mx-auto my-0 dark:invert-100">
    </MazAnimatedElement>
    <p class="text-gray-500 dark:text-gray-400 mb-2">
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
    <MazAnimatedElement direction="up" :delay="1775" :duration="700">
      <UButtonGroup class="mb-6">
        <UButton color="neutral" variant="outline" label="Download"
          icon="i-lucide-download" to="https://github.com/faeq-f/quokka/"
          target="_blank" />
        <UButton color="neutral" variant="subtle" label="View Source"
          icon="i-lucide-github" to="https://github.com/faeq-f/quokka/"
          target="_blank" />
      </UButtonGroup>
    </MazAnimatedElement>
  </div>

  <MazAnimatedElement direction="up" :delay="1900" :duration="700">
    <div class="flex p-90 py-0">
      <div style="border-radius: 60px; overflow: hidden;"
        class="hover:px-4 transition-all duration-700 ease-in-out">
        <div class="overflow-hidden rounded-[60px] -m-4">
          <video autoplay loop disablePictureInPicture muted
            id="home-video-elem" class="w-screen">
            <source src="/media/HomePageVideo.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </MazAnimatedElement>
</template>
<style lang="css" scoped>
#header {
  background: radial-gradient(circle, rgb(255 255 255) 0%, rgba(237, 83, 83, 0) 40%);
  padding: 10px;
  padding-top: 4rem;
}

.dark #header {
  background: radial-gradient(circle, oklch(20.8% 0.042 265.755) 0%, rgba(237, 83, 83, 0) 40%);
}
</style>