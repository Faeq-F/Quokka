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
    question: 'Question 3',
    answer: 'Answer 3',
  },
  {
    question: 'Question 4',
    answer: 'Answer 4',
  },
]
</script>

<template>
  <div class="h-172 w-full px-78 pt-62 outfit" id="faq">
    <MazAnimatedElement direction="up" :delay="200" :duration="2000" once=false>
      <div class="font-bold text-6xl varela text-center">
        Completely Free, Libre and Open Source
      </div>
    </MazAnimatedElement>
    <div class="outfit text-center pt-3 text-gray-500 dark:text-gray-400">
      <MazAnimatedElement direction="up" :delay="400" :duration="2000" once=false class="inline">
        No
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="475" :duration="2000" once=false class="inline">
        premium
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="550" :duration="2000" once=false class="inline">
        tiers
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="625" :duration="2000" once=false class="inline">
        or
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="700" :duration="2000" once=false class="inline">
        paywalls
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="775" :duration="2000" once=false class="inline">
        -
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="850" :duration="2000" once=false class="inline">
        everything's
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="925" :duration="2000" once=false class="inline">
        included,
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1000" :duration="2000" once=false class="inline">
        with
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1075" :duration="2000" once=false class="inline">
        no
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1050" :duration="2000" once=false class="inline">
        ads
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1125" :duration="2000" once=false class="inline">
        or
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1200" :duration="2000" once=false class="inline">
        tracking
      </MazAnimatedElement>
    </div>
    <MazAnimatedElement direction="down" :delay="1500" :duration="2000" once=false class="inline">
      <div class="varela text-2xl pl-4 pt-4">FAQ</div>
    </MazAnimatedElement>
    <MazAnimatedElement direction="down" :delay="(i * 200) + 1500" :duration="2000" once=false class="m-4"
      v-for="(q, i) in faq" :key="q.question">
      <MazAccordion class="w-full" style="box-shadow: none;">
        <template #title-1>
          {{ q.question }}
        </template>
        <template #content-1>
          {{ q.answer }}
        </template>
      </MazAccordion>
    </MazAnimatedElement>
  </div>
</template>