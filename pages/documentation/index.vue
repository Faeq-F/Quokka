<script setup>
import { ref } from 'vue'
let displayedSection = ref({ label: 'documentation', icon: '' })
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
          onSelect: (_e) => displayedSection.value = child,
        }
      })
    }
  }
  return {
    ...item,
    onSelect: (_e) => displayedSection.value = item,
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
  displayedSection.value = toc.find((item) => {
    return item.section == to.replace("/documentation?section=", "")
  })
}
watch(() => route.query.section, switchSectionTo, { immediate: true })

import Link from '~/components/link.vue'
const sidebarHover = ref(false);
</script>

<template>
  <div>
    <div class="flex">
      <div
        class="flex items-center justify-start p-2 varela clickable hover:bg-gray-100 dark:hover:bg-gray-800"
        @click="displayedSection = { label: 'documentation', icon: '' }">
        <UIcon name="i-lucide-book-text" class="mr-1" />
        Documentation
      </div>
      <div class="flex items-center justify-start p-2 varela "
        v-if="displayedSection.label != 'documentation'">
        <USeparator orientation="vertical" class="mr-4"
          :ui="{ border: 'dark:border-gray-600 border-l-[0.5px] h-full' }" />
        <MazAnimatedElement direction="right" :duration="500"
          class="flex items-center">
          Currently reading
          '
          <UIcon :name="displayedSection.icon" class="px-3" /> {{
            displayedSection.label + " " }}'
        </MazAnimatedElement>
      </div>
    </div>
    <USeparator
      :ui="{ border: 'dark:border-gray-600 border-l-[0.5px] w-full' }" />
    <div class="flex">
      <div
        class="flex flex-col justify-between w-[48px] hover:w-64 transition-all duration-200 ease-out"
        @mouseenter="sidebarHover = true" @mouseleave="sidebarHover = false">
        <UNavigationMenu orientation="vertical" :items="toc" class=" p-1 outfit"
          :ui="{ childList: 'ms-3', childItem: 'ps-0.5' }"
          :trailingIcon="sidebarHover ? '' : ' '" />
        <div class="text-sm text-gray-400 ">
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-scale" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Licence" />
              </MazAnimatedElement>
            </div>
          </div>
          <USeparator />
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-file-cog" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Changelog" />
              </MazAnimatedElement>
            </div>
          </div>
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-tags" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Releases" />
              </MazAnimatedElement>
            </div>
          </div>
          <USeparator />
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-folder-git" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Program Source" />
              </MazAnimatedElement>
            </div>
          </div>
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-folder-git-2" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Website Source" />
              </MazAnimatedElement>
            </div>
          </div>
          <USeparator />
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-messages-square" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Discussions" />
              </MazAnimatedElement>
            </div>
          </div>
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-thumbs-up" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Feedback" />
              </MazAnimatedElement>
            </div>
          </div>
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-shield-check" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Security Policy" />
              </MazAnimatedElement>
            </div>
          </div>
          <div class="flex items-center m-1 p-1 h-6">
            <UIcon name="i-lucide-octagon-alert" class="mx-1 !size-4" />
            <div :class="sidebarHover ? '' : 'hidden'">
              <MazAnimatedElement duration="700" direction="right">
                <Link url="" text="Report an Issue" />
              </MazAnimatedElement>
            </div>
          </div>
        </div>
      </div>
      <USeparator orientation=" vertical" class="h-[90vh] ml-2"
        :ui="{ border: 'dark:border-gray-600 border-l-[0.5px] h-full' }" />
      <div class="docsContent max-h-[90vh] min-h-[90vh]
          overflow-y-scroll px-4 w-full outfit" data-lenis-prevent>
        <Transition name="fade">
          <documentation v-if="displayedSection.label == 'documentation'"
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

<!--add a copy code button-->
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
.docsContent a {
  font-style: italic;
  color: black;
  text-decoration: underline;
}

.dark .docsContent a {
  color: white;
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

.docsContent h1 {
  font-family: "Varela Round", sans-serif;
  font-weight: bold;
  font-size: x-large;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem;
  margin-left: 3rem;
}

.docsContent h2 {
  font-size: large;
  margin: 1rem;
}

.docsContent h2 span,
.docsContent h1 span {
  margin-right: 10px;
  margin-bottom: 3px;
}

.docsContent docsContent div {
  border: 1px solid gray;
  border-radius: 30px;
  margin: 1rem;
  padding: 1rem
}

.docsContent blockquote {
  margin: 0;
  margin-top: 0px;
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: small;
  border-left: solid 1px #bbb;
  border-bottom: solid 1px #bbb;
  width: 90%;
  border-bottom-left-radius: 15px;

  margin-top: -10px;
  height: 30px;
  padding-top: 10px;
}

.docsContent textarea[readonly] {
  height: 40vh;
  width: 90%;
  font-family: cascadia code;
  border-radius: 10px;
  border: 1px solid #bbb;
  font-size: x-small;
}

.docsContent kbd {
  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow:
    0 1px 1px rgba(0, 0, 0, 0.2),
    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
  color: #333;
  display: inline-block;
  font-size: 0.85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
  font-family: monospace;
}

.docsContent code {
  font-family: monospace;
}

.docsContent .noRadius * {
  --maz-border-radius: 0 !important;
}

.docsContent .noRadius {
  --maz-border-radius: 0.7rem !important;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0;
}
</style>