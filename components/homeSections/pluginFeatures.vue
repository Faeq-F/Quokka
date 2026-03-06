<script lang="ts" setup>
import { vFullscreenImg } from 'maz-ui/directives/vFullscreenImg'
</script>
<template>
  <div class=" w-full px-78 pt-52 outfit" id="plugin-features">
    <MazAnimatedElement direction="up" :delay="600" :duration="700">
      <div class="font-bold text-4xl varela text-center">
        Streamline your Workflow
      </div>
    </MazAnimatedElement>

    <div class="outfit text-center pt-3 text-gray-500 dark:text-gray-400">
      <div class="inline-block">
        <MazAnimatedText tag="h1" text="Ignore typos, scope searches, act"
          :delay="800" :duration="1500" direction="up" :column-gap="0.3"
          :row-gap="0.3" class="outfit text-gray-500 dark:text-gray-400" />
      </div>
      <MazAnimatedElement direction="right" :delay="1500" :duration="1000"
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