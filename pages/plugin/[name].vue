<script setup lang="ts">
import { useRoute } from 'nuxt/app';

const route = useRoute()
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()
const name = (route.params.name as string).replace('~', ' ')

//will load readme from plugins github

//will load images from assets under respective folder
</script>
<template>
  <div class="text-center mx-78 mt-24">
    The {{ name }} plugin
    <br>
    <br>
    <nuxt-link
      :to="plugins.pluginsList.find((p) => p.name === name)?.github">github</nuxt-link>
    <br>
    <br>
    <nuxt-link
      :to="plugins.pluginsList.find((p) => p.name === name)?.downloadUrl">download</nuxt-link>
  </div>
</template>