<script lang="ts" setup>
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()

const createdPlugins = plugins.pluginsList.map((item) => {
  return {
    developed: 'i-lucide-square-check',
    name: item.name,
    author: item.author,
    authorLink: item.authorUrl,
  }
})
const plannedPlugins = plugins.plannedPlugins.map((item) => {
  return {
    developed: item.inProgress ? 'In progress' : 'i-lucide-square',
    name: item.name,
    author: 'n/a',
  }
})
const allPlugins = [...createdPlugins, ...plannedPlugins]
import ExternalLink from '~/components/link.vue'
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
        roundedSize="none" :headers="[
          { label: 'Developed?', key: 'developed', width: '18rem' },
          { label: 'Planned / developed plugin', key: 'name', width: '36rem' },
          { label: 'Author', key: 'author' },
        ]" :rows="allPlugins" search noSearchBy searchPlaceholder="Search..."
        inputSize="sm">
        <template #cell-name="{ row, value }">
          <ExternalLink :url='"/plugin/" + row.name.replace(" ", "~")'
            v-if="row.authorLink">
            {{ value }}
          </ExternalLink>
        </template>
        <template #cell-author="{ row, value }">
          <ExternalLink :url='row.authorLink' v-if="row.authorLink">
            {{ value }}
          </ExternalLink>
        </template>
        <template #cell-developed="{ value }">
          <UIcon :name="value" v-if="value != 'In progress'" class="!size-5" />
        </template>
      </MazTable>
    </MazCardSpotlight>
  </div>
</template>