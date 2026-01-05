<script setup lang="ts">
import navbar from '../components/layoutSections/navbar.vue'
import { VueLenis } from 'lenis/vue'
import { ref } from 'vue';
const LenisWrapper = ref();
const LenisContent = ref();
</script>
<template>
  <navbar />
  <div id="bgGlow"></div>
  <VueLenis root :options="{
    autoRaf: true,
    lerp: 0.1,
    anchors: true,
    content: LenisContent,
    wrapper: LenisWrapper,
  }" />
  <slot />
</template>
<style scoped lang="css">
#bgGlow {
  position: fixed;
  top: -100%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(31, 143, 255, 0.08) 0%, rgba(237, 83, 83, 0) 40%);
  z-index: -1;
}
</style>