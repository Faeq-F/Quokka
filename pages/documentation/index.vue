<script setup>
import { ref } from 'vue'
let displayedSection = ref('installation')
const route = useRoute()
if (route.query.section) displayedSection.value = route.query.section

import { useDocsStore } from '~/stores/docsTOC.ts';
const docsTOC = useDocsStore()

function switchSection(section) {
  displayedSection.value = section
}

import MazCardSpotlight from 'maz-ui/components/MazCardSpotlight'

import apiDocumentation from '~/components/docsSections/apiDocumentation.vue'
import buildingTheApp from '~/components/docsSections/buildingTheApp.vue'
import creatingContextPane from '~/components/docsSections/creatingContextPane.vue'
import commands from '~/components/docsSections/commands.vue'
import creatingNewItemType from '~/components/docsSections/creatingNewItemType.vue'
import creatingThePlugin from '~/components/docsSections/creatingThePlugin.vue'
import creatingTheProject from '~/components/docsSections/creatingTheProject.vue';
import faqs from '~/components/docsSections/faq.vue'
import generalUsage from '~/components/docsSections/generalUsage.vue'
import installation from '~/components/docsSections/installation.vue'
import plugins from '~/components/docsSections/plugins.vue'
import settings from '~/components/docsSections/settings.vue'
import trayTask from '~/components/docsSections/trayTask.vue'

</script>

<template>
  <div class="flex flex-row" id="docsPage">
    <div class="basis-1/4 pt-4 px-4">
      <MazCardSpotlight class="w-full" :padding="false">
        <MazAnimatedElement direction="down" :delay="500" :duration="2000"
          class="noRadius" v-for="(s, i) in docsTOC.toc" :key="i">
          <MazBtn color="transparent" @click="switchSection(s.section)"
            class="w-full !border-0 !p-0 !min-h-0 !hover:bg-transparent"
            justify="start" v-if="s.children?.length == 0"
            :class="i == 0 ? '' : '!rounded-none'">
            <MazCardSpotlight class="w-full">
              <MazAnimatedElement direction="right" :delay="1900"
                :duration="2000" class="justify-start flex">
                <UIcon :name="s.icon" />
                <p class="inline ml-2">
                  {{ s.title }}
                </p>
              </MazAnimatedElement>
            </MazCardSpotlight>
          </MazBtn>
          <MazAccordion class="w-full" v-else>
            <template #title-1>
              <MazAnimatedElement direction="right" :delay="1900"
                :duration="2000">
                <UIcon :name="s.icon" />
                <p class="inline ml-2">
                  {{ s.title }}
                </p>
              </MazAnimatedElement>
            </template>
            <template #content-1>
              <MazAnimatedElement direction="right" :delay="400" :duration="700"
                v-for="(child, i) in s.children" :key="i">
                <MazBtn color="transparent"
                  @click="switchSection(child.section)"
                  class="w-full !border-0 !p-0 !min-h-0 !hover:bg-transparent"
                  justify="start" :class="i == 0 ? '' : '!rounded-none'">
                  <MazCardSpotlight class="w-full">
                    <MazAnimatedElement direction="right" :delay="1900"
                      :duration="2000" class="justify-start flex">
                      <UIcon :name="child.icon" />
                      <p class="inline ml-2">
                        {{ child.title }}
                      </p>
                    </MazAnimatedElement>
                  </MazCardSpotlight>
                </MazBtn>
              </MazAnimatedElement>
            </template>
          </MazAccordion>
        </MazAnimatedElement>
      </MazCardSpotlight>
    </div>
    <div class="basis-3/4 py-4 pr-4">
      <MazCardSpotlight class="w-full">
        <div class="docsContent max-h-[85vh] overflow-y-scroll">
          <apiDocumentation v-if="displayedSection == 'api-documentation'" />
          <buildingTheApp v-if="displayedSection == 'build-app'" />
          <creatingContextPane
            v-if="displayedSection == 'creating-context-pane'" />
          <commands v-if="displayedSection == 'commands'" />
          <creatingNewItemType
            v-if="displayedSection == 'creating-new-item-type'" />
          <creatingThePlugin v-if="displayedSection == 'creating-the-plugin'" />
          <creatingTheProject
            v-if="displayedSection == 'creating-the-project'" />
          <faqs v-if="displayedSection == 'faq'" />
          <generalUsage v-if="displayedSection == 'general-usage'" />
          <installation v-if="displayedSection == 'installation'" />
          <plugins v-if="displayedSection == 'plugins'" />
          <settings v-if="displayedSection == 'settings'" />
          <trayTask v-if="displayedSection == 'tray-task'" />
        </div>
      </MazCardSpotlight>
    </div>
  </div>

</template>

<!--add a copy code button-->

<style lang="css">
#docsPage a {
  font-style: italic;
  color: black;
  text-decoration: underline;
}

.dark #docsPage a {
  color: white;
}

#docsPage ul,
#docsPage ol {
  margin-left: 2rem;
}

#docsPage ul {
  list-style: unset;
}

#docsPage ol {
  list-style: auto;
}

#docsPage h2,
#docsPage h1 {
  font-family: "Varela Round", sans-serif;
  font-weight: bold;
  font-size: x-large;
  display: flex;
  align-items: center;
  margin: 4rem;
  margin-left: 3rem;
}

#docsPage h2 {
  font-size: large;
  margin: 1rem;
}

#docsPage h2 span,
#docsPage h1 span {
  margin-right: 10px;
  margin-bottom: 3px;
}

#docsPage docsContent div {
  border: 1px solid gray;
  border-radius: 30px;
  margin: 1rem;
  padding: 1rem
}

#docsPage blockquote {
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

#docsPage textarea[readonly] {
  height: 40vh;
  width: 90%;
  font-family: cascadia code;
  border-radius: 10px;
  border: 1px solid #bbb;
  font-size: x-small;
}

#docsPage kbd {
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

#docsPage code {
  font-family: monospace;
}

#docsPage .noRadius * {
  --maz-border-radius: 0 !important;
}
</style>