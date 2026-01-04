<script setup lang="ts">

const faq = [
  {
    question: 'How do you monetize the application?',
    answer: 'I don\'t, though I may in future. I will only generate revenue from this software in a way that doesn\'t compromise user privacy.',
  },
  {
    question: 'How do I set the app to run at startup?',
    answer: 'Answer 2',
  },
  {
    question: 'How do I change the app font?',
    answer: 'Answer 3',
  },
  {
    question: 'How do I change app icons?',
    answer: 'Answer 4',
  },
]

import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
</script>

<template>
  <div class=" w-full px-78 pt-62 outfit" id="faq">
    <MazAnimatedElement direction="up" :delay="600" :duration="700">
      <div class="font-bold text-6xl varela text-center">
        Completely Free, Libre and Open Source
      </div>
    </MazAnimatedElement>

    <div class="outfit text-center pt-3 text-gray-500 dark:text-gray-400">
      <MazAnimatedElement direction="up" :delay="800" :duration="700"
        class="inline">
        No
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="850" :duration="700"
        class="inline">
        premium
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="900" :duration="700"
        class="inline">
        tiers
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="950" :duration="700"
        class="inline">
        or
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1000" :duration="700"
        class="inline">
        paywalls
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1050" :duration="700"
        class="inline">
        -
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1100" :duration="700"
        class="inline">
        everything's
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1150" :duration="700"
        class="inline">
        included,
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1200" :duration="700"
        class="inline">
        with
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1250" :duration="700"
        class="inline">
        no
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1300" :duration="700"
        class="inline">
        ads
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1350" :duration="700"
        class="inline">
        or
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1400" :duration="700"
        class="inline">
        tracking
      </MazAnimatedElement>
    </div>
    <MazAnimatedElement direction="down" :delay="1600" :duration="700"
      class="flex items-center justify-center varela text-sm pl-4 pt-4 gap-4">
      <nuxt-link to="">
        <div class="flex items-center justify-center">
          <UIcon name="i-lucide-file-cog" class="size-4 mx-1 mb-1" />
          Changelog
        </div>
      </nuxt-link>
      <UIcon name="i-lucide-dot" class="size-4" />
      <nuxt-link to="">
        <div class="flex items-center">
          <UIcon name="i-lucide-square-kanban" class="size-4 mx-1 mb-1" />
          Kanban
        </div>
      </nuxt-link>
    </MazAnimatedElement>
    <MazAnimatedElement direction="down" :delay="1600" :duration="700"
      class="inline">
      <div class="varela text-2xl pl-4 pt-4">FAQ</div>
    </MazAnimatedElement>
    <MazAnimatedElement direction="down" :delay="(i * 200) + 1400"
      :duration="2000" class="m-4" v-for="(q, i) in faq" :key="q.question">
      <MazAccordion class="w-full">
        <template #title-1>
          <MazAnimatedElement direction="right" :delay="1900" :duration="2000">
            <p>
              {{ q.question }}
            </p>
          </MazAnimatedElement>
        </template>
        <template #content-1>
          <MazAnimatedElement direction="right" :delay="400" :duration="700">
            <p>
              {{ q.answer }}
            </p>
          </MazAnimatedElement>
        </template>
      </MazAccordion>
    </MazAnimatedElement>
  </div>
</template>