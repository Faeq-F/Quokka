<script setup lang="ts">
defineEmits(['select'])
import { useUnderTheHoodStore } from '~/stores/underHood';
const fs = useUnderTheHoodStore().fs;
</script>
<template>
  <div>
    <UCard class="bg-transparent mb-8">
      Understanding a new codebase can feel overwhelming. This
      guide can help you find your way around the repository. This overview
      breaks down the directory structure and explains where the core logic
      resides. Use this map to orient yourself before you start
      contributing.
    </UCard>
    You may wish to familiarize yourself with these files:
    <UCollapsible class="flex flex-col gap-2 w-11/12 mt-2" :defaultOpen="true">
      <UButton label="App" color="neutral" variant="subtle"
        trailing-icon="i-lucide-chevron-down" block class="group" :ui="{
          trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
        }" />
      <template #content>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![8])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![8].icon!" />
            <div>App.xaml.cs</div>
          </div>
          <div class="text-muted text-sm">
            Contains global exception handling and app initialization logic;
            setting the keyboard hook & tray task and loading plugins.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![5].children![2])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![5].children![2].icon!" />
            <div>TrayTask.cs</div>
          </div>
          <div class="text-muted text-sm">
            Contains actions for the tray task context menu and app exit
            logic; running <Code inline>&nbsp;OnAppShutdown()&nbsp;</Code> for
            all
            plugins and disposing of the keyboard hook and tray task.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![3].children![0])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![3].children![0].icon!" />
            <div>AppSettings.cs</div>
          </div>
          <div class="text-muted text-sm">
            Parses <Code inline>&nbsp;settings.json&nbsp;</Code> and loads all
            application configuration values.
          </div>
        </UCard>
      </template>
    </UCollapsible>
    <UCollapsible class="flex flex-col gap-2 w-11/12 mt-2">
      <UButton label="Search Window" color="neutral" variant="subtle"
        trailing-icon="i-lucide-chevron-down" block class="group" :ui="{
          trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
        }" />
      <template #content>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![2].children![3])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![2].children![3].icon!" />
            <div>SearchWindow.xaml.cs</div>
          </div>
          <div class="text-muted text-sm">
            Handles query changes, threading, debouncing input, and item
            generation.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![2].children![0])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![2].children![0].icon!" />
            <div>KeyDown.cs</div>
          </div>
          <div class="text-muted text-sm">
            Handles key down events in the search window; item list and context
            pane state.
          </div>
        </UCard>
      </template>
    </UCollapsible>
    <UCollapsible class="flex flex-col gap-2 w-11/12 mt-2">
      <UButton label="Plugin Architecture" color="neutral" variant="subtle"
        trailing-icon="i-lucide-chevron-down" block class="group" :ui="{
          trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
        }" />
      <template #content>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![1].children![3])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![1].children![3].icon!" />
            <div>Plugin.cs
            </div>
          </div>
          <div class="text-muted text-sm">
            An abstract class to be implemented by all plugins.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![1].children![4])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![1].children![4].icon!" />
            <div>UiDispatcher.cs
            </div>
          </div>
          <div class="text-muted text-sm">
            Useful methods for plugins to execute actions on the UI thread.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![1].children![2])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![1].children![2].icon!" />
            <div>
              IconCache.cs
            </div>
          </div>
          <div class="text-muted text-sm">
            Useful for plugins to cache images for list item icons.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![1].children![1])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![1].children![1].icon!" />
            <div>
              FuzzySearch.cs
            </div>
          </div>
          <div class="text-muted text-sm">
            Useful methods for plugins using Fuzzy Searching.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![1].children![0])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![1].children![0].icon!" />
            <div>AppPlugins.cs</div>
          </div>
          <div class="text-muted text-sm">
            Handles the discovery and loading of all plugins at application
            startup.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![0].children![1])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![0].children![1].icon!" />
            <div>ListItem.cs
            </div>
          </div>
          <div class="text-muted text-sm">
            An abstract class to be implemented by all list items.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![0].children![0])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![0].children![0].icon!" />
            <div>ItemContextPane.cs</div>
          </div>
          <div class="text-muted text-sm">
            A basic class to inherit from for a context pane.
          </div>
        </UCard>
      </template>
    </UCollapsible>
    <UCollapsible class="flex flex-col gap-2 w-11/12 mt-2">
      <UButton label="The Quokka Plugin" color="neutral" variant="subtle"
        trailing-icon="i-lucide-chevron-down" block class="group" :ui="{
          trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
        }" />
      <template #content>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![4].children![5])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![4].children![5].icon!" />
            <div>PluginQuokka.cs</div>
          </div>
          <div class="text-muted text-sm">
            A built-in utility plugin, useful as an example for plugin creators.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![4].children![0])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![4].children![0].icon!" />
            <div>AboutQuokkaItem.cs</div>
          </div>
          <div class="text-muted text-sm">
            A list item for the plugin, used to access different actions.
            Useful as an example for plugin creators.
          </div>
        </UCard>
        <UCard variant="subtle" class="w-11/12 m-2 clickable"
          @click="$emit('select', fs[0].children[4].children![4].children![1])">
          <div class="flex items-center gap-2">
            <UIcon :name="fs[0].children[4].children![4].children![1].icon!" />
            <div>ContextPane.xaml.cs & ContextPane.xaml</div>
          </div>
          <div class="text-muted text-sm">
            A context pane for triggering the plugin's different actions. Useful
            as an example for plugin creators.
          </div>
        </UCard>
      </template>
    </UCollapsible>
  </div>
</template>