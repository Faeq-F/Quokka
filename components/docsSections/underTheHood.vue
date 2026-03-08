<script setup lang="ts">
import { VueLenis } from 'lenis/vue'
import { useUnderTheHoodStore } from '~/stores/underHood';
import Home from '~/components/docsSections/underHood/home.vue';
import type { TreeItem } from '@nuxt/ui';

import File from '~/components/docsSections/underHood/file.vue'
import { contentMappings, defaultContentItems, componentMap } from '~/components/docsSections/underHood/contentMappings';

const fsLenisContent = ref();
const fsLenisWrapper = ref();
const ContentLenisContent = ref();
const ContentLenisWrapper = ref();

const mapChildren = (prevPath: string, item: TreeItem) => {
  let label = String(item.label)
  if (label.endsWith('/') && label != '.vs/' && label != '.vscode/') {
    if (item.children) {
      for (let i of item.children) {
        mapChildren(prevPath + label, i)
      }
    }
  }
  item = { ...item, link: (prevPath + (label.includes('*') ? '' : label)).replace('Faeq-F/Quokka/', 'https://github.com/Faeq-F/Quokka/tree/main/') };
  delete item['children']
  delete item['defaultExpanded']
  delete item['onSelect']
  delete item['icon']
  linksFS.push(item);
}

const fs = addOnSelectToLeaves(useUnderTheHoodStore().fs)

function addOnSelectToLeaves(items: TreeItem[]): TreeItem[] {
  return items.map((item) => {
    const isLeaf = !item.children || item.children.length === 0;
    if (isLeaf) {
      return {
        ...item,
        onSelect: (_e: Event) => {
          navigateTo(`/documentation?section=under-hood&file=${item.label}`);
        },
      };
    }

    if (item.children) {
      return {
        ...item,
        children: addOnSelectToLeaves(item.children),
      };
    }

    return item;
  });
}

const linksFS: any[] = [];
mapChildren('', fs[0]);

const selectedItem = ref()
const route = useRoute()
if (route.query.file) {
  const found = fs.find((i) => i.label?.replace(' ', '%20') == route.query.file)
  if (found) {
    selectedItem.value = found
  }
}

const switchSectionTo = (to: any) => {
  console.log('switchSectionTo called with:', to)
  if (to) {
    selectedItem.value = getSwitchSection(fs, to)
    console.log('selectedItem set to:', selectedItem.value)
    if (selectedItem.value == undefined) selectedItem.value = null
  } else
    selectedItem.value = null
  console.log('Final selectedItem:', selectedItem.value)
}

const getSwitchSection = (fs: TreeItem[], targetLabel: string): TreeItem | undefined => {
  for (const item of fs) {
    if (item.label === targetLabel) {
      return item;
    }
    if (item.children && item.children.length > 0) {
      const found = getSwitchSection(item.children, targetLabel);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
};


const itemContent = computed(() => {
  if (!selectedItem.value?.label) {
    console.log('No selectedItem.label', selectedItem.value)
    return null
  }
  const label = selectedItem.value.label
  console.log('Looking for label:', label, 'in contentMappings')
  const result = contentMappings[label] || null
  console.log('Found result:', result)
  return result
})

const contentKey = computed(() => {
  return selectedItem.value?.label || 'default'
})

const hasCustomComponent = computed(() => {
  if (!itemContent.value) return false
  const componentName = itemContent.value?.component || itemContent.value?.customComponent
  return componentName && componentName in componentMap
})

const customComponent = computed(() => {
  if (!itemContent.value) return null
  const componentName = itemContent.value?.component || itemContent.value?.customComponent
  if (!componentName || !(componentName in componentMap)) return null
  return componentMap[componentName]
})

const hasDescription = computed(() => {
  if (!itemContent.value) return false
  return itemContent.value?.description || defaultContentItems.includes(selectedItem.value?.label)
})

const description = computed(() => {
  if (itemContent.value?.description) return itemContent.value.description

  // Default handling for items without specific content
  if (defaultContentItems.includes(selectedItem.value?.label)) {
    return ''
  }

  return null
})

const fileLink = computed(() => {
  if (!selectedItem.value?.label) return null
  return linksFS.find((val) => val.label === selectedItem.value.label)?.link
})

watch(() => route.query.file, switchSectionTo, { immediate: true })
</script>

<template>
  <div>
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-folder-open-dot" class="mr-2" /> Under the hood
      </div>
      <div class="text-md outfit">The inner workings of the application</div>
    </div>
    <div class="flex gap-2 w-full overflow-hidden">
      <MazCardSpotlight class="w-xl list-none max-h-[85vh] mb-4 resize-x">
        <div class="max-h-full h-full max-w-full w-full overflow-y-scroll"
          ref="fsLenisWrapper">
          <VueLenis root :options="{
            autoRaf: true,
            lerp: 0.1,
            content: fsLenisContent,
            wrapper: fsLenisWrapper,
          }" />
          <div class="w-full" ref="fsLenisContent">
            <UTree :items="fs" color="neutral" v-model="selectedItem"
              class="!ml-0" />
          </div>
        </div>
      </MazCardSpotlight>
      <MazCardSpotlight class="w-full mb-4 max-h-[85vh] h-[85vh]"
        :padding="false">
        <div
          class="max-h-full h-full max-w-full w-full overflow-y-scroll transition-all ease-out duration-100 delay-200"
          ref="ContentLenisWrapper">
          <VueLenis root :options="{
            autoRaf: true,
            lerp: 0.1,
            content: ContentLenisContent,
            wrapper: ContentLenisWrapper,
          }" />
          <div class="w-full p-4" ref="ContentLenisContent">
            <Transition name="fade">
              <Home
                @select="(v) => navigateTo(`/documentation?section=under-hood&file=${v.label}`)"
                v-if="!selectedItem" />
              <div v-else :key="contentKey">
                <!-- Always show file component -->
                <File v-if="selectedItem" :link="fileLink"
                  :item="selectedItem" />

                <!-- Description content -->
                <div v-if="hasDescription" class="p-10">
                  <div v-if="description" v-html="description"></div>

                  <!-- Custom HTML content -->
                  <div v-if="itemContent?.customContent"
                    v-html="itemContent.customContent"></div>
                </div>

                <!-- Custom component content -->
                <component v-if="hasCustomComponent" :is="customComponent" />
              </div>
            </Transition>
          </div>
        </div>
      </MazCardSpotlight>
    </div>
  </div>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>