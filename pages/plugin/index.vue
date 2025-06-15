<script lang="ts" setup>
import { usePluginsStore } from '../../stores/plugins'
const plugins = usePluginsStore()
import MazCardSpotlight from 'maz-ui/components/MazCardSpotlight'
</script>
<template>
  <MazAnimatedElement></MazAnimatedElement>
  Plugins
  <MazCardSpotlight v-for="(plugin, i) in plugins.pluginsList" :key="i"
    class="m-4">
    {{ plugin.name }}
    by {{ plugin.author }}

    {{ plugin.shortDescription }}
  </MazCardSpotlight>
</template>