<script lang="ts" setup>
import { ref, watch } from 'vue';
import { usePluginsStore } from '~/stores/plugins'
const plugins = usePluginsStore()

const searchVal = ref('');
const tagsVal = ref([]);
import Fuse from 'fuse.js'
import PluginCard from '~/components/PluginCard.vue';
const fuse = new Fuse(plugins.pluginsList, {
  keys: ['name', 'shortDescription', 'author'],
});
let searched = plugins.pluginsList;
watch(searchVal, (newV, _oldV) => {
  if (newV === '') {
    searched = plugins.pluginsList
  } else {
    searched = fuse.search(newV).map((result) => result.item);
  }
})
function checkTags(plugin) {
  for (const tag of tagsVal.value) {
    if (plugin.tags.includes(tag)) {
      continue;
    }
    return false;
  }
  return true;
}
</script>
<template>
  <div class="text-center mb-16 mt-42 varela">
    <MazAnimatedElement direction="up" :delay="200" :duration="700">
      <span class="text-6xl">Plugins</span>
    </MazAnimatedElement>
    <p class="text-gray-500 dark:text-gray-400 mb-52 mt-4">
      <MazAnimatedElement direction="up" :delay="400" :duration="700"
        class="inline">Extend
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="450" :duration="700"
        class="inline">your
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="500" :duration="700"
        class="inline">launcher's
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="550" :duration="700"
        class="inline">functionality
      </MazAnimatedElement>
    </p>
  </div>
  <div class="w-full px-78 mb-4">
    <MazInput v-model="searchVal" placeholder="Search..." class="w-full"
      size="md" block>
      <template #left-icon>
        <UIcon name="i-lucide-search" class="ml-1 mb-0.5 !h-4 !w-4" />
      </template>
      <template #right-icon>
        <UButton v-if="searchVal?.length" color="neutral" variant="link"
          size="lg" icon="i-lucide-circle-x" aria-label="Clear input"
          @click="searchVal = ''" />
        <USeparator orientation="vertical" class="mr-4 h-5" />
        <UIcon name="i-lucide-filter" />
        <MazSelect v-model="tagsVal"
          :options="plugins.getSortedTags().map((tag) => tag.label)"
          label="Filter..." multiple search :search-threshold="0.75" block
          size="sm" style="--maz-border-color: transparent;">
          <template #no-results>
            <div class="p-4 text-center">
              No result
            </div>
          </template>
        </MazSelect>
      </template>
    </MazInput>
  </div>
  <USeparator label=" Results" class="px-88" />
  <div class="flex justify-evenly flex-wrap px-68">
    <template v-for="(plugin, i) in searched" :key="i">
      <PluginCard :plugin="plugin" v-if="checkTags(plugin)" />
    </template>
  </div>
</template>