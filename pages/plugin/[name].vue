<script setup lang="ts">
import { useRoute } from 'nuxt/app';

const route = useRoute()

//will load readme from plugins github

//will load images from assets under respective folder
</script>
<template>
  The {{ (route.params.name as string).replace('~', ' ') }} plugin
</template>