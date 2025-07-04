<script lang="ts" setup>
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()

const createdPlugins = plugins.pluginsList.map((item) => {
  return {
    developed: '✅',
    name: item.name,
    author: item.author,
    classes: 'hover:!bg-blue-50 dark:hover:!bg-[#181821]'
  }
})
const plannedPlugins = plugins.plannedPlugins.map((item) => {
  return {
    developed: item.inProgress ? 'In progress' : '▢',
    name: item.name,
    author: 'n/a',
    classes: 'hover:!bg-blue-50 dark:hover:!bg-[#181821]'
  }
})
const allPlugins = [...createdPlugins, ...plannedPlugins]
</script>
<template>
  <div class="px-88">
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-blocks" class="mr-2" /> Plugins
      </div>
      <div class="text-md outfit">Using plugins & the plugins list</div>
    </div>
    <DocNotice type="warning" style="width: 100%;">
      Only recognized plugins appear on this site — others may exist.
    </DocNotice>
    <MazCardSpotlight class="w-full m-2">
      <span class="flex gap-1">
        To add a plugin, download and extract it to the
        <Code inline> PlugBoard </Code> folder
      </span>
      If you do not wish to use a plugin, simply delete the appropriate
      folder in the PlugBoard
      <DocNotice type="info" style="width: calc(100% - 1rem); ">
        Plugins may have their own settings, special commands, command
        signifiers, etc.<br />
        Please see their folder in the PlugBoard to find their settings
        file (at the root, if there is one) and consult their documentation for
        default values, implemented features, etc.
      </DocNotice>
    </MazCardSpotlight>
    <MazCardSpotlight class="w-full m-2" :padding="false">
      <MazTable hoverable divider size="md" tableClass="!bg-transparent"
        :headers="[
          { label: 'Developed?', key: 'developed' },
          { label: 'Planned / developed plugin', key: 'name' },
          { label: 'Author', key: 'author' },
        ]" :rows="allPlugins" search noSearchBy inputSize="sm">
      </MazTable>
    </MazCardSpotlight>
  </div>
</template>
<style>
.m-table-header {
  background: transparent !important;
}
</style>