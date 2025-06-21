<script setup lang="ts">
import { onMounted } from 'vue';
import navbar from '../components/layoutSections/navbar.vue'

// Fix for scrolling issues
onMounted(() => {
  document.querySelectorAll('*').forEach(el => {
    el.addEventListener('wheel', function (e) {
      e.stopPropagation();
    });
  });
});
</script>
<template>
  <navbar />
  <slot />
</template>