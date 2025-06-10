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

import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import MazAnimatedText from 'maz-ui/components/MazAnimatedText'
</script>

<template>
  <div class=" w-full px-78 pt-62 outfit" id="faq">
    <MazAnimatedElement direction="up" :delay="200" :duration="2000">
      <div class="font-bold text-6xl varela text-center">
        Completely Free, Libre and Open Source
      </div>
    </MazAnimatedElement>

    <MazAnimatedText tag="p"
      text="No premium tiers or paywalls - everything's included, with no ads or tracking"
      :delay="200" :duration="2000" direction="up" :column-gap="0.2"
      :row-gap="0.2"
      class="outfit pt-3 text-gray-500 dark:text-gray-400 flex justify-center w-full" />

    <MazAnimatedElement direction="down" :delay="1500" :duration="2000"
      class="inline">
      <div class="varela text-2xl pl-4 pt-4">FAQ</div>
    </MazAnimatedElement>
    <MazAnimatedElement direction="down" :delay="(i * 200) + 1500"
      :duration="2000" class="m-4" v-for="(q, i) in faq" :key="q.question">
      <MazAccordion class="w-full">
        <template #title-1>
          <MazAnimatedText tag="p" :text=q.question :delay="(i * 200) + 1900"
            :duration="2000" direction="up" :column-gap="0.2" :row-gap="0.2" />
        </template>
        <template #content-1>
          <MazAnimatedText tag="p" :text=q.answer :delay="200" :duration="2000"
            direction="up" :column-gap="0.2" :row-gap="0.2" />
        </template>
      </MazAccordion>
    </MazAnimatedElement>
  </div>
</template>

<style scoped>
.m-card-spotlight {
  box-shadow: none !important;
}
</style>