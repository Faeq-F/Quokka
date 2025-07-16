<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'

import { useSettingsStore } from '~/stores/settings'
const settings = useSettingsStore()
</script>
<template>
  <div>
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-sliders-vertical" class="mr-2" /> Settings
      </div>
      <div class="text-md outfit">Defaults & extra information</div>
    </div>
    <MazCardSpotlight class="w-full m-2">
      <span class="flex gap-1">
        The settings file is located in
        <Code inline>&nbsp;'...\Quokka\Config\'&nbsp;</Code>
      </span>
      All settings are loaded when the application starts, meaning that
      you will have to exit and re-start the app to see changes.
      <DocNotice type="info" style="width: calc(100% - 1rem)">
        Plugins may have their own, specific settings files in the root of
        their respective folders, in the PlugBoard.<br />
        Please consult their documentation (
        <ExternalLink url="/documentation?section=api-documentation">
          API Documentation
        </ExternalLink>
        &nbsp;included) for default values, etc.
      </DocNotice>
    </MazCardSpotlight>
    <MazCardSpotlight class="w-full m-2">
      Quokka comes with the
      <ExternalLink url="/#customizability">
        'Windows light'
      </ExternalLink>
      &nbsp;theme by default.<br />
      To change it, you can edit the style settings in the settings file
      and / or you can use values in a
      <ExternalLink url="/#customizability">
        provided configuration
      </ExternalLink>.
    </MazCardSpotlight>
    <MazCardSpotlight class="w-full m-2" :padding="false">
      <MazTable hoverable divider size="md" tableClass="!bg-transparent"
        roundedSize="none" search noSearchBy searchPlaceholder="Search..."
        inputSize="sm" :headers="[
          { label: 'Setting name', key: 'name', width: '12rem' },
          { label: 'Default Value', key: 'defaultValue', width: '12rem' },
          { label: 'Notes', key: 'notes' },
        ]" :rows="settings.settings">
        <template #cell-notes="{ value }">
          <ul>
            <li v-for="(note, i) in value" :key="i">
              <template v-if="Object.keys(note)[0] != '0'">
                {{ note.prevText }}
                <ExternalLink :url="note.link.url" target="_blank">
                  {{ note.link.text }}
                </ExternalLink>
                &nbsp;{{ note.afterText }}
              </template>
              <template v-else>
                {{ note }}
              </template>
            </li>
          </ul>
        </template>
        <template #cell-defaultValue="{ value }">
          <Code inline>&nbsp;{{ value }}&nbsp;</Code>
        </template>
        <template #cell-name="{ value }">
          <Code inline>&nbsp;{{ value }}&nbsp;</Code>
        </template>
      </MazTable>
    </MazCardSpotlight>
  </div>
</template>