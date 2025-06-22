<script setup lang="ts">
import { onMounted } from 'vue';
import navbar from '../components/layoutSections/navbar.vue'
</script>
<template>
  <navbar />
  <slot />
</template>