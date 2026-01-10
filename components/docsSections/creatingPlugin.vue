<script setup lang="ts">
import creatingPlugin from '~/components/docsSections/creatingPlugin/creatingPlugin.vue';
import creatingProject from '~/components/docsSections/creatingPlugin/creatingProject.vue';
import creatingNewItemType from '~/components/docsSections/creatingPlugin/creatingNewItemType.vue';
import creatingContextPane from '~/components/docsSections/creatingPlugin/creatingContextPane.vue';
import refreshLenis from '~/assets/scripts/lenis';
import Link from '~/components/link.vue'
</script>

<template>
  <div>
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-toy-brick" class="mr-2" /> Creating a Plugin
      </div>
      <div class="text-md outfit">Creating new item types & producing their
        plugin</div>
    </div>

    <DocNotice type="info" class="w-full">
      Quokka is licensed under the
      <Link blank url="https://github.com/Faeq-F/Quokka/blob/main/LICENCE"> GNU
        General Public License v3.0</Link>
    </DocNotice>

    <div class="mb-2 mt-4">Steps</div>
    <MazStepper :steps="[
      { title: 'Creating the project' },
      { title: 'Creating a new item type' },
      { title: 'Creating a context pane (optional)' },
      { title: 'Creating the plugin' },
    ]" can-close-steps color="neutral"
      @update:model-value="() => refreshLenis()">
      <template #icon-1>
        <UIcon name="i-lucide-folder-kanban" />
      </template>
      <template #content-1>
        <creatingProject />
      </template>
      <template #icon-2>
        <UIcon name="i-lucide-list" />
      </template>
      <template #content-2>
        <creatingNewItemType />
      </template>
      <template #icon-3>
        <UIcon name="i-lucide-panels-top-left" />
      </template>
      <template #content-3>
        <creatingContextPane />
      </template>
      <template #icon-4>
        <UIcon name="i-lucide-unplug" />
      </template>
      <template #content-4>
        <creatingPlugin />
      </template>
    </MazStepper>

  </div>
</template>