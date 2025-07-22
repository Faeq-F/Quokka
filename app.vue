<script setup lang="ts">
import { VueLenis } from 'lenis/vue'
const lenisOptions = {
  anchors: true
}
</script>
<template>
  <VueLenis root :options="lenisOptions" />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>