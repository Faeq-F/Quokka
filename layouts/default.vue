<script setup lang="ts">
import navbar from '../components/layoutSections/navbar.vue'
</script>
<template>
  <navbar />
  <div id="bgGlow"></div>
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