<script setup lang="ts">
import { VueLenis } from 'lenis/vue'
import Code from '~/components/code.vue';
import DocNotice from '~/components/docNotice.vue'

const fsLenisContent = ref();
const fsLenisWrapper = ref();

const ContentLenisContent = ref();
const ContentLenisWrapper = ref();

const mapChildren = (prevPath: string, item: any) => {
  let label = String(item.label)
  if (label.endsWith('/') && label != '.vs/' && label != '.vscode/') {
    for (let i of item.children) {
      mapChildren(prevPath + label, i)
    }
  }
  item = { ...item, link: (prevPath + (label.includes('*') ? '' : label)).replace('Faeq-F/Quokka/', 'https://github.com/Faeq-F/Quokka/tree/main/') };
  delete item['children']
  delete item['defaultExpanded']
  delete item['onSelect']
  delete item['icon']
  linksFS.push(item);
}

import { useUnderTheHoodStore } from '~/stores/underHood';
import Home from '~/components/docsSections/underHood/home.vue';
import File from '~/components/docsSections/underHood/file.vue';
const fs = useUnderTheHoodStore().fs
const linksFS: any[] = [];
mapChildren('', fs[0]);

const selectedItem = ref()
import ItemContextPane from '~/components/docsSections/underHood/itemContextPane.vue'
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
              <Home @select="(v) => selectedItem = v" v-if="!selectedItem" />
              <div v-else-if="selectedItem.label == '.vs/'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Stores temporary caches and user-specific workspace settings
                  for Microsoft Visual Studio (settings are set to maintain
                  shared conventions).
                </div>
              </div>
              <div v-else-if="selectedItem.label == '.vscode/'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Stores user-specific workspace settings
                  for Microsoft Visual Studio Code (settings are set to maintain
                  shared conventions).
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'AppFont.ttf'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  The font for application text.
                  <DocNotice type="tip" class="mt-4"
                    style="width: calc(100% - 1.5rem)">
                    To customize, replace the file
                    (keeping the name <Code
                      inline>&nbsp;AppFont.ttf&nbsp;</Code>) and update the
                    <Code inline>&nbsp;AppFont&nbsp;</Code>
                    setting.
                  </DocNotice>
                </div>
              </div>
              <div v-else-if="selectedItem.label == '** icons **'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Icons used by the application and some plugins.
                </div>
              </div>
              <div
                v-else-if="selectedItem.label == '** licenses (for the above files) **'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  License copies for the content in this folder.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'settings.json'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  The primary settings file for personalizing the application.
                </div>
              </div>
              <div
                v-else-if="selectedItem.label == '** Plugin Submodule Repositories **'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Plugin repositories managed as Git submodules for the
                  Quokka repository.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'ItemContextPane.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <ItemContextPane />
              </div>
              <div v-else-if="selectedItem.label == 'ListItem.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'LoadingListItem.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'NoListItem.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'AppPlugins.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'FuzzySearch.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'IconCache.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Plugin.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'UiDispatcher.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'KeyDown.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Scrollbar.xaml'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'SearchWindow.xaml'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'SearchWindow.xaml.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'AppSettings.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'SettingParsers.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'AboutQuokkaItem.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'ContextPane.xaml'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'ContextPane.xaml.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Licences.xaml.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Licenses.xaml'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Plugin_Quokka.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'SettingsFileWatcher.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'UpdateChecker.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'NotifyIconResources.xaml'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'NotifyIconViewModel.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'TrayTask.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'App.config'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'App.xaml'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'App.xaml.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'AssemblyInfo.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'KeyboardHook.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Quokka.csproj'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Quokka.csproj.user'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == 'app.manifest'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Defines how the application interacts with Windows, for e.g.
                  by including User Account Control (UAC) execution levels, high
                  DPI awareness, and OS compatibility settings.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'GlobalUsings.cs'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == '** Test Files **'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Unit tests for source code.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Tests.csproj'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">

                </div>
              </div>
              <div v-else-if="selectedItem.label == '.editorconfig'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  A configuration file enforcing consistent coding styles for
                  everyone that works in the Quokka codebase.
                </div>
              </div>
              <div v-else-if="selectedItem.label == '.gitignore'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  A Git configuration file containing files and folders ignored
                  by Git.
                </div>
              </div>
              <div v-else-if="selectedItem.label == '.gitmodules'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  A Git configuration file containing every plugin as a Git
                  submodule.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'BuildAndServeDocs.ps1'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  A script to build the HTML API documentation pages from
                  files containing source code.
                  <DocNotice type="info" class="mt-4"
                    style="width: calc(100% - 1.5rem);">
                    Uses the <Code inline>&nbsp;QuokkaDocs&nbsp;</Code>
                    folder
                    from the <Code inline>&nbsp;site&nbsp;</Code> branch.
                  </DocNotice>
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'BuildSolution.ps1'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  A script used to build the solution, with editors that are
                  not Microsoft Visual Studio.

                  For example, the files in
                  <Code inline>&nbsp;.vscode/&nbsp;</Code>
                  utilize this script for the editor Microsoft Visual Studio
                  Code.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Directory.Build.Props'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Build settings for the project.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'IgnoredWords.txt'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Words to ignore when Microsoft Visual Studio is spell
                  checking the solution.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Version'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  Contains the latest version no. of the application
                  available
                  & its
                  download link. It is used when the app checks for updates.
                </div>
              </div>
              <div v-else-if="selectedItem.label == 'Quokka.sln'">
                <File
                  :link="linksFS.find((val) => val.label == selectedItem.label).link"
                  :item="selectedItem" />
                <div class="p-10">
                  A Microsoft Visual Studio Solution File.
                  <br />
                  Contains references to solution items, like
                  <Code inline>&nbsp;.editorconfig&nbsp;</Code>,
                  resources, like different icons, every plugin project &
                  the
                  tests project.
                </div>
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