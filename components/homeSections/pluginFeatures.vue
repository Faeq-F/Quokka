<script lang="ts" setup>
import { vFullscreenImg } from 'maz-ui'
</script>
<template>
  <div class=" w-full px-78 pt-52 outfit" id="plugin-features">
    <MazAnimatedElement direction="up" :delay="600" :duration="700">
      <div class="font-bold text-4xl varela text-center">
        Streamline your Workflow
      </div>
    </MazAnimatedElement>

    <div class="outfit text-center pt-3 text-gray-500 dark:text-gray-400">
      <MazAnimatedElement direction="up" :delay="800" :duration="700"
        class="inline">
        Ignore
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="850" :duration="700"
        class="inline">
        typos,
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="900" :duration="700"
        class="inline">
        scope
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="950" :duration="700"
        class="inline">
        searches,
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1000" :duration="700"
        class="inline">
        act
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1050" :duration="700"
        class="inline italic">
        faster
      </MazAnimatedElement>
    </div>
    <MazAnimatedElement direction="right" :delay="1100" :duration="2000">
      <div class="flex justify-around pt-10">
        <MazCardSpotlight class="w-4/17 h-52 text-center" :padding="false">
          <img src="/media/AppScreenshots/FuzzySearching.png"
            class="object-cover h-[85%] object-left" v-fullscreen-img />
          Fuzzy Searching
        </MazCardSpotlight>
        <MazCardSpotlight class="w-4/17 h-52 text-center" :padding="false">
          <img src="/media/AppScreenshots/SpecialCommands.png"
            class="object-cover h-[85%] object-left" v-fullscreen-img />
          Special Commands
        </MazCardSpotlight>
        <MazCardSpotlight class="w-4/17 h-52 text-center" :padding="false">
          <img src="/media/AppScreenshots/CommandSignifiers.png"
            class="object-cover h-[85%] object-left" v-fullscreen-img />
          Command Signifiers
        </MazCardSpotlight>
        <MazCardSpotlight class="w-4/17 h-52 text-center" :padding="false">
          <img src="/media/AppScreenshots/ContextPanes.png"
            class="object-cover h-[85%] object-left" v-fullscreen-img />
          Context Panes
        </MazCardSpotlight>
      </div>
    </MazAnimatedElement>
  </div>
</template>