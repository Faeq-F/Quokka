<script setup lang="ts">
defineProps({
  link: String,
  item: Object
})
</script>
<template>
  <nuxt-link target="_blank" :to="link"
    class="!no-underline flex items-center justify-center text-lg !not-italic mt-4">
    <UIcon :name="item!.icon" class="mr-1.5 !size-5" />
    <code>{{ item!.label.replaceAll('*', '') }}</code>
    <UIcon name="i-lucide-arrow-up-right" class="!size-3 mb-1" />
  </nuxt-link>
</template>