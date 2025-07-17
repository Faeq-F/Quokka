<script setup>
import { ref, watch } from 'vue'
let displayedSection = ref({ section: 'documentation', icon: '' })
const route = useRoute()
if (route.query.section) displayedSection.value = route.query.section

import { useDocsStore } from '~/stores/docsTOC.ts';
const docsTOC = useDocsStore()
const toc = docsTOC.toc.map((item) => {
  if (item.children?.length) {
    return {
      ...item,
      children: item.children.map((child) => {
        return {
          ...child,
          onSelect: (_e) => navigateTo('/documentation?section=' + child.section),
        }
      })
    }
  }
  return {
    ...item,
    onSelect: (_e) => navigateTo('/documentation?section=' + item.section),
  }
})

import documentation from '~/components/docsSections/documentation.vue'
import apiDocumentation from '~/components/docsSections/apiDocumentation.vue'
import buildingTheApp from '~/components/docsSections/buildingTheApp.vue'
import commands from '~/components/docsSections/commands.vue'
import creatingPlugin from '~/components/docsSections/creatingPlugin.vue';
import faqs from '~/components/docsSections/faq.vue'
import generalUsage from '~/components/docsSections/generalUsage.vue'
import installation from '~/components/docsSections/installation.vue'
import plugins from '~/components/docsSections/plugins.vue'
import settings from '~/components/docsSections/settings.vue'
import trayTask from '~/components/docsSections/trayTask.vue'

const switchSectionTo = (to) => {
  if (to) {
    displayedSection.value = toc.find((item) => {
      return item.section == to.replace("/documentation?section=", "")
    })
    if (displayedSection.value === undefined) {
      displayedSection.value = toc[1].children.find((item) => {
        return item.section == to.replace("/documentation?section=", "")
      })
    }
  } else
    displayedSection.value = { section: 'documentation', icon: '' }
}
watch(() => route.query.section, switchSectionTo, { immediate: true })

const sidebarHover = ref(false);
const applyPadding = ref(false);
const slider = ref(23);
const padding = ref('padding-left:23rem;padding-right:23rem;');
const sidebarHoverPadding = ref('padding-left:17.625rem;padding-right:17.625rem;');
const updatePadding = (n) => {
  padding.value = `padding-left:${n}rem;padding-right:${n}rem;`
  sidebarHoverPadding.value = `padding-left:${n - 5.375}rem;padding-right:${n - 5.375}rem;`
}
watch(applyPadding, async (_new, _old) => {
  if (applyPadding.value) updatePadding(slider.value)
  else updatePadding(7)
})
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="flex">
        <UButton class="m-2 p-1" color="neutral" variant="ghost"
          icon="i-lucide-book-text"
          @click="displayedSection = { section: 'documentation', icon: '' }">
          Documentation
        </UButton>
        <div class="flex items-center justify-start p-2 varela "
          v-if="displayedSection.section != 'documentation'">
          <USeparator orientation="vertical" class="mr-4"
            :ui="{ border: 'dark:border-gray-600 border-l-[0.5px] h-full' }" />
          <MazAnimatedElement direction="right" :duration="500"
            class="flex items-center pt-0.5">
            Currently reading
            '
            <UIcon :name="displayedSection.icon" class="px-3" /> {{
              displayedSection.label + " " }}'
          </MazAnimatedElement>
        </div>
      </div>
      <div class="justify-end flex items-center">
        <MazAnimatedElement direction="left" :duration="500"
          v-if="applyPadding && displayedSection.section != 'api-documentation' && slider != 23">
          <UButton class="mr-2" color="neutral" variant="ghost"
            icon="i-lucide-rotate-ccw"
            @click="slider = 23; updatePadding(23);" />
        </MazAnimatedElement>
        <MazAnimatedElement direction="left" :duration="500"
          v-if="applyPadding && displayedSection.section != 'api-documentation'">
          <USlider v-model="slider" :min="7" :max="40" :step="0.125"
            color="neutral" class="w-64 mr-2"
            style="--ui-bg-inverted: var(--ui-bg-accented)" size="xs"
            :tooltip="{ text: `${slider} rem`, delayDuration: 200 }"
            @update:modelValue="updatePadding" />
        </MazAnimatedElement>
        <UButton class="mr-2" color="neutral" variant="ghost"
          :icon="displayedSection.section == 'api-documentation' ? 'i-lucide-fold-horizontal' : (applyPadding ? 'i-lucide-unfold-horizontal' : 'i-lucide-fold-horizontal')"
          @click="applyPadding = !applyPadding"
          :style="displayedSection.section == 'api-documentation' ? 'cursor: not-allowed !important;' : ''"
          :disabled="displayedSection.section == 'api-documentation'" />
      </div>
    </div>
    <USeparator
      :ui="{ border: 'dark:border-gray-600 border-l-[0.5px] w-full' }" />
    <div class="flex">
      <div
        class="flex flex-col justify-between w-11 hover:w-64 transition-all duration-200 ease-out delay-200"
        @mouseenter="sidebarHover = true" @mouseleave="sidebarHover = false">
        <UNavigationMenu orientation="vertical" :items="toc" class=" p-1 outfit"
          :ui="{
            childList: sidebarHover ? 'transition-all duration-200 ease-out delay-300'
              : 'ms-0 transition-all duration-200 ease-out delay-300', childItem: 'ps-0.5',
            linkLabel: '!font-light', linkTrailingIcon: sidebarHover ? '' : '!hidden'
          }" />
        <UNavigationMenu orientation="vertical" :items="docsTOC.links"
          class="p-1 outfit" :ui="{ linkLabel: '!font-light' }"
          :externalIcon="false">
        </UNavigationMenu>
      </div>
      <USeparator orientation=" vertical" class="h-[90vh]"
        :ui="{ border: 'dark:border-gray-600 border-l-[0.5px] h-full' }" />
      <div
        :style="displayedSection.section == 'api-documentation' ? '' : (sidebarHover ? sidebarHoverPadding : padding)"
        class="docsContent max-h-[90vh] min-h-[90vh]
          overflow-y-scroll w-full outfit transition-all ease-out duration-100 delay-200"
        data-lenis-prevent>
        <Transition name="fade">
          <documentation v-if="displayedSection.section == 'documentation'"
            @switch-section="(to) => switchSectionTo(to)" />
          <apiDocumentation
            v-else-if="displayedSection.section == 'api-documentation'" />
          <buildingTheApp v-else-if="displayedSection.section == 'build-app'" />
          <commands v-else-if="displayedSection.section == 'commands'" />
          <creatingPlugin
            v-else-if="displayedSection.section == 'creating-plugin'" />
          <faqs v-else-if="displayedSection.section == 'faq'" />
          <generalUsage
            v-else-if="displayedSection.section == 'general-usage'" />
          <installation
            v-else-if="displayedSection.section == 'installation'" />
          <plugins v-else-if="displayedSection.section == 'plugins'" />
          <settings v-else-if="displayedSection.section == 'settings'" />
          <trayTask v-else-if="displayedSection.section == 'tray-task'" />
        </Transition>
      </div>
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
<style lang="css">
.docsContent a:has(code) *,
.docsContent a {
  text-decoration: underline;
  text-decoration-color: #1f8fffde;
  text-underline-offset: 3px;
}

.docsContent a:has(code) {
  text-decoration: none;
}

.docsContent a code {
  text-decoration: underline;
  text-decoration-color: #1f8fffde;
  text-underline-offset: 4px;
  padding-top: 3px;
}

.docsContent table a code {
  padding-top: 1px;
}

.dark .docsContent a:has(code) *,
.dark .docsContent a code,
.dark .docsContent a {
  text-decoration-color: #1f8fff91;
}

.docsContent a:hover {
  opacity: 70%;
}

.dark .docsContent a:hover {
  opacity: 100%;
  filter: brightness(1.2);
}

.docsContent ul,
.docsContent ol {
  margin-left: 2rem;
}

.docsContent ul {
  list-style: unset;
}

.docsContent ol {
  list-style: auto;
}

.docsContent h2 {
  font-size: large;
  margin: 1rem;
}

.docsContent blockquote {
  margin: 0;
  margin-top: 0px;
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: small;
  border-left: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
  width: 95%;
  border-bottom-left-radius: 15px;
  margin-top: -10px;
  height: 30px;
  padding-top: 6px;
}

.dark .docsContent blockquote {
  border-left: solid 1px oklch(44.6% 0.03 256.802);
  border-bottom: solid 1px oklch(44.6% 0.03 256.802);
}

.docsContent textarea[readonly] {
  height: 40vh;
  width: 90%;
  font-family: cascadia code;
  border-radius: 10px;
  border: 1px solid #bbb;
  font-size: x-small;
}

.docsContent tr {
  cursor: url(/Quokka/cursors/light-Point.cur),
    auto !important;
}

.dark .docsContent tr {
  cursor: url(/Quokka/cursors/dark-Point.cur),
    auto !important;
}

.docsContent kbd {
  width: fit-content;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid oklch(92.8% 0.006 264.531);
  box-shadow: 0 2px 0 1px oklch(92.8% 0.006 264.531);
  cursor: url(/Quokka/cursors/light-Point.cur),
    auto !important;
  font-family: var(--font-family-sans-serif);
  font-size: 0.75em;
  line-height: 1;
  display: inline;
  text-align: center;
  padding: 2px 5px;
  position: relative;
  top: -1px;
  margin-left: 7px;
  margin-right: 7px;

  &:hover {
    box-shadow: 0 1px 0 0.5px oklch(92.8% 0.006 264.531);
    top: 1px;
  }
}

.dark .docsContent kbd {
  background-color: #0f172b;
  border: 1px solid oklch(44.6% 0.03 256.802);
  box-shadow: 0 2px 0 1px oklch(44.6% 0.03 256.802);
  cursor: url(/Quokka/cursors/dark-Point.cur),
    auto !important;

  &:hover {
    box-shadow: 0 1px 0 0.5px oklch(44.6% 0.03 256.802);
  }
}

.docsContent code {
  font-family: monospace;
}
</style>