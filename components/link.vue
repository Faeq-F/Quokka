<script setup lang="ts">
import { ref } from 'vue';

defineProps(['url', 'text'])
const hover = ref(false);
</script>
<template>
  <a :href="url" @mouseenter="hover = true" @mouseleave="hover = false">
    {{ text }}
    <MazAnimatedElement direction="up" :duration="600" class="inline"
      v-if="hover">
      <UIcon name="i-lucide-arrow-up-right" class="-ml-1" />
    </MazAnimatedElement>
  </a>
</template>