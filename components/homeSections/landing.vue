<template>
  <div class="text-center mt-16 outfit">
    <MazAnimatedElement direction="up" :delay="500" :duration="2000" once=false>
      <img src="~/assets/media/QuokkaTextLogo.svg" class="w-62 mx-auto my-0 dark:invert-100">
    </MazAnimatedElement>

    <p class="text-gray-500 dark:text-gray-400 mb-6">
      <MazAnimatedElement direction="up" :delay="700" :duration="2000" once=false class="inline">A
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="775" :duration="2000" once=false class="inline">customizable
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="850" :duration="2000" once=false class="inline">keystroke
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="925" :duration="2000" once=false class="inline">launcher
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1000" :duration="2000" once=false class="inline">with
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1075" :duration="2000" once=false class="inline">plugins
      </MazAnimatedElement>
    </p>
  </div>

  <MazAnimatedElement direction="up" :delay="925" :duration="2000" once=false>
    <div class="flex p-78 py-0">
      <div style="border-radius: 60px; overflow: hidden;">
        <div class="overflow-hidden rounded-[60px] -m-4">
          <video src="~/assets/media/HomePageVideo.mp4" autoplay loop class="w-screen"></video>
        </div>
      </div>
    </div>
  </MazAnimatedElement>
</template>