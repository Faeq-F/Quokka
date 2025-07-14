<script setup lang="ts">
import creatingPlugin from '~/components/docsSections/creatingPlugin/creatingPlugin.vue';
import creatingProject from '~/components/docsSections/creatingPlugin/creatingProject.vue';
import creatingNewItemType from '~/components/docsSections/creatingPlugin/creatingNewItemType.vue';
import creatingContextPane from '~/components/docsSections/creatingPlugin/creatingContextPane.vue';
</script>

<template>
  <div class="px-88">
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-toy-brick" class="mr-2" /> Creating a Plugin
      </div>
      <div class="text-md outfit">Creating new item types & producing their
        plugin</div>
    </div>
    <MazCardSpotlight class="w-full m-2">
      <div class="mb-2">Steps</div>
      <MazStepper :steps="[
        { title: 'Creating the project' },
        { title: 'Creating a new item type' },
        { title: 'Creating a context pane' },
        { title: 'Creating the plugin' },
      ]" can-close-steps color="neutral">
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
    </MazCardSpotlight>
  </div>
</template>