<script setup lang="ts">
import creatingPlugin from '~/components/docsSections/creatingPlugin/creatingPlugin.vue';
import creatingProject from '~/components/docsSections/creatingPlugin/creatingProject.vue';
import creatingNewItemType from '~/components/docsSections/creatingPlugin/creatingNewItemType.vue';
import creatingContextPane from '~/components/docsSections/creatingPlugin/creatingContextPane.vue';
</script>

<template>
  <div>
    <h1>
      <UIcon name="i-lucide-toy-brick" /> Creating a Plugin
    </h1>
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
  </div>
</template>