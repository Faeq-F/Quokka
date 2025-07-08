<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()

const commands = plugins.pluginsList.map((i) => {
  return i.specialCommands.map((j) => {
    return {
      ...j,
      plugin: i.name
    }
  })
}).flat()

const signifiers = plugins.pluginsList.map((i) => {
  return i.commandSignifiers.map((j) => {
    return {
      ...j,
      plugin: i.name
    }
  })
}).flat()

</script>
<template>
  <div class="px-88">
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-zap" class="mr-2" /> Commands
      </div>
      <div class="text-md outfit">Special commands & command signifiers</div>
    </div>
    <!-- check this with signifiers -->
    <DocNotice type="warning" style="width: 100%" class="outfit">
      <span class="font-bold">Special commands are case-sensitive</span> to
      ensure they do not
      interfere with other functions of the app or plugins
    </DocNotice>

    <!-- get these from the store -->
    <MazAccordion class="w-full m-2" contentClass="!p-0">
      <template #title-1>
        All special commands from recognized plugins
      </template>
      <template #content-1>
        <USeparator :ui="{ border: 'dark:border-gray-600' }" />
        <MazTable hoverable divider size="md" tableClass="!bg-transparent"
          roundedSize="none" search noSearchBy searchPlaceholder="Search..."
          inputSize="sm" :headers="[
            { label: 'Plugin', key: 'plugin' },
            { label: 'Default Special Command', key: 'command' },
            { label: 'Use', key: 'use' },
            { label: 'Notes', key: 'notes' },
          ]" :rows="commands">
          <template #cell-notes="{ value }">
            <ul>
              <li v-for="(note, i) in value" :key="i">
                {{ note }}
              </li>
            </ul>
          </template>
          <template #cell-plugin="{ value }">
            <ExternalLink :url='"/plugin/" + value.replace(" ", "~")'>
              {{ value }}
            </ExternalLink>
          </template>
          <template #cell-command="{ value }">
            <Code inline>&nbsp;{{ value }}&nbsp;</Code>
          </template>
        </MazTable>
      </template>

      <template #title-2>
        All command signifiers from recognized plugins
      </template>
      <template #content-2>
        <MazTable hoverable divider size="md" tableClass="!bg-transparent"
          roundedSize="none" search noSearchBy searchPlaceholder="Search..."
          inputSize="sm" :headers="[
            { label: 'Plugin', key: 'plugin' },
            { label: 'Default Command Signifier', key: 'signifier' },
            { label: 'Use', key: 'use' },
            { label: 'Notes', key: 'notes' },
          ]" :rows="signifiers">
          <template #cell-notes="{ value }">
            <ul>
              <li v-for="(note, i) in value" :key="i">
                {{ note }}
              </li>
            </ul>
          </template>
          <template #cell-plugin="{ value }">
            <ExternalLink :url='"/plugin/" + value.replace(" ", "~")'>
              {{ value }}
            </ExternalLink>
          </template>
          <template #cell-signifier="{ value }">
            <Code inline>&nbsp;{{ value }}&nbsp;</Code>
          </template>
        </MazTable>
      </template>
    </MazAccordion>


  </div>

</template>