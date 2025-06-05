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