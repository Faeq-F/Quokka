<script setup lang="ts">
import { ref } from 'vue';

defineProps(['url'])
const hover = ref(false);
</script>
<template>
  <a :href="url" @mouseenter="hover = true" @mouseleave="hover = false">
    <slot />
    <MazAnimatedElement direction="up" :duration="600" class="inline"
      v-if="hover">
      <UIcon name="i-lucide-arrow-up-right" />
    </MazAnimatedElement>
  </a>
</template>