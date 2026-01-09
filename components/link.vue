<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  url: String,
  blank: Boolean
})
const hover = ref(false);
</script>
<template>
  <a :href="url" @mouseenter="hover = true" @mouseleave="hover = false"
    :target="blank ? '_blank' : ''">
    <slot />
    <MazAnimatedElement direction="up" :duration="600" class="inline"
      v-if="hover">
      <UIcon name="i-lucide-arrow-up-right" />
    </MazAnimatedElement>
  </a>
</template>