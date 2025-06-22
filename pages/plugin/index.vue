<script lang="ts" setup>
import { ref, watch } from 'vue';
import { usePluginsStore } from '~/stores/plugins'
import Fuse from 'fuse.js'
import PluginCard from '~/components/PluginCard.vue';

const plugins = usePluginsStore()
const searchVal = ref('');
const tagsVal = ref([]);
let searched = ref(plugins.pluginsList);

const fuse = new Fuse(plugins.pluginsList, {
  keys: ['name', 'shortDescription', 'author'],
});

watch(searchVal, (newV, _oldV) => {
  if (newV === '') {
    searched.value = plugins.pluginsList
  } else {
    searched.value = fuse.search(newV).map((result) => result.item);
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
  <div>
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
      <MazAnimatedElement direction="down" :delay="800" :duration="700">
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
      </MazAnimatedElement>
    </div>
    <MazAnimatedElement direction="down" :delay="1200" :duration="700">
      <USeparator label=" Results" class="px-88" />
    </MazAnimatedElement>
    <div class="flex justify-evenly flex-wrap px-68">
      <span v-if="searched.length === 0">No results found</span>
      <template v-for="(plugin,
        i) in searched" :key="i">
        <MazAnimatedElement direction="up" :delay="(200 * i) + 200"
          :duration="1500">
          <PluginCard :plugin="plugin" v-if="checkTags(plugin)" />
        </MazAnimatedElement>
      </template>
    </div>
  </div>
</template>