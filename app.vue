<script setup lang="ts">
import { VueLenis, useLenis } from 'lenis/vue'

const lenisOptions = {

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

<!-- <style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style> -->