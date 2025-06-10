<script setup lang="ts">
import navbar from '../components/layoutSections/navbar.vue'
import Footer from '../components/layoutSections/footer.vue'
</script>
<template>
  <navbar />
  <slot />
  <Footer />
</template>