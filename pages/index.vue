<script setup lang="ts">
const features = [
  {
    title: 'and more!',
    description: 'Fuzzy Search, Special Commands, Command signifiers, etc.',
    icon: 'i-lucide-terminal'
  },
]

import Faq from '../components/homeSections/faq.vue'
import Plugins from '../components/homeSections/plugins.vue'
import Customizability from '../components/homeSections/customizability.vue'
import Landing from '../components/homeSections/landing.vue'
</script>

<template>
  <Landing />
  <Plugins />
  <Customizability />
  <Faq />
</template>

<style>
.m-card-spotlight .inner {
  border-radius: 60px;
}

img-comparison-slider {
  --divider-width: 2px;
  --divider-color: #c0c0c0;
  --default-handle-opacity: 0.3;
  margin: 0;
  border-radius: 15px;
}
</style>