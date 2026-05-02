<script lang="ts" setup>
import { ref, watch } from 'vue';
import { usePluginsStore } from '~/stores/plugins'
import Fuse from 'fuse.js'
import PluginCard from '~/components/PluginCard.vue';

const plugins = usePluginsStore()
const searchVal = ref('');
const tagsVal = ref([]);
const searched = ref(plugins.pluginsList);
// required due to bug related to select being under cards
const lowerCards = ref(false);

const fuse = new Fuse(plugins.pluginsList, {
  keys: ['name', 'shortDescription', 'author'],
});

watch([searchVal, tagsVal], ([newSearch, _newTags], [_oldSearch, _oldTags]) => {
  let value;
  if (newSearch === '') {
    value = plugins.pluginsList
  } else {
    value = fuse.search(newSearch).map((result) => result.item);
  }
  searched.value = value.filter((plugin) => {
    return checkTags(plugin);
  });
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
      <MazAnimatedElement direction="up" :delay="200" :duration="700"
        class="mb-4">
        <span class="text-6xl">Plugins</span>
      </MazAnimatedElement>
      <MazAnimatedText tag="h1" text="Extend your launcher's functionality"
        :delay="300" :duration="1500" direction="up" :column-gap="0.3"
        :row-gap="0.3" class="text-gray-500 dark:text-gray-400" />
    </div>
    <div class="w-full sm:px-78 px-2 mb-4 outfit mt-52">
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
            <div data-lenis-prevent>
              <MazSelect v-model="tagsVal"
                :options="plugins.getSortedTags().map((tag) => tag.label)"
                label="Filter..." multiple search :search-threshold="0.75"
                size="sm" id="plugin-filter" class="no-border-select"
                @open="lowerCards = true" @close="lowerCards = false">
                <template #no-results>
                  <div class="p-4 text-center">
                    No result
                  </div>
                </template>
              </MazSelect>
            </div>
          </template>
        </MazInput>
      </MazAnimatedElement>
    </div>
    <MazAnimatedElement direction="down" :delay="1200" :duration="700"
      class="-z-1 relative">
      <USeparator label=" Results" class="sm:px-88 outfit" />
    </MazAnimatedElement>
    <div class="flex justify-evenly flex-wrap sm:px-68">
      <span v-if="searched.length === 0" class="p-4 outfit">No results
        found</span>
      <template v-for="(plugin,
        i) in searched" :key="i">
        <div :class="lowerCards ? '-z-1' : ''">
          <MazAnimatedElement direction="up" :delay="(200 * i) + 200"
            :duration="1500">
            <PluginCard :plugin="plugin" />
          </MazAnimatedElement>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.no-border-select .m-input-wrapper {
  --maz-tw-border-opacity: 0 !important;
  border-color: transparent !important;
  --maz-border: 0% 0% 0% !important;
}
</style>