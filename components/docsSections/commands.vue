<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <div class="px-88">
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-zap" class="mr-2" /> Commands
      </div>
      <div class="text-md outfit">Special commands & command signifiers</div>
    </div>
    <!-- check this with signifiers -->
    <DocNotice type="warning" style="width: 100%">
      <b>Special commands are case-sensitive</b> to ensure they do not
      interfere with other functions of the app or plugins
    </DocNotice>


    <!-- get these from the store -->
    <MazAccordion class="w-full m-2" contentClass="!p-0">
      <template #title-1>
        All special commands from recognized plugins
      </template>
      <template #content-1>
        <USeparator :ui="{ border: 'dark:border-gray-600' }" />
        <MazTable hoverable divider size="md" tableClass="!bg-transparent"
          roundedSize="none" search noSearchBy searchPlaceholder="Search..."
          inputSize="sm"
          :headers="['Special Command', 'Use', 'Plugin', 'Notes']">
          <MazTableRow>
            <MazTableCell><code>AllApps</code></MazTableCell>
            <MazTableCell>list all installed apps</MazTableCell>
            <MazTableCell>InstalledApps</MazTableCell>
            <MazTableCell>
              This command is modifiable within the plugin specific
              settings<br />
              Along with the list of apps, an extra item is added to the
              start,
              allowing users to open shell:appsFolder.<br />
              This item can be blacklisted.
            </MazTableCell>
          </MazTableRow>
          <MazTableRow>
            <MazTableCell><code>AllPortableApps</code></MazTableCell>
            <MazTableCell>list all portable apps</MazTableCell>
            <MazTableCell><a href=''>PortableApps</a></MazTableCell>
            <MazTableCell>This command is
              modifiable within the plugin specific settings<br />
              Along with the list of apps, an extra item is added to the
              start,
              allowing users to open the directory in which the portable
              apps
              reside.<br />
              This item can be blacklisted.</MazTableCell>
          </MazTableRow>
        </MazTable>
      </template>

      <template #title-2>
        All command signifiers from recognized plugins
      </template>
      <template #content-2>
        <MazTable hoverable divider size="md" tableClass="!bg-transparent"
          roundedSize="none" search noSearchBy searchPlaceholder="Search..."
          inputSize="sm"
          :headers="['Command Signifier', 'Use', 'Plugin', 'Notes']">
          <MazTableRow>
            <MazTableCell><code>...</code></MazTableCell>
            <MazTableCell>...</MazTableCell>
            <MazTableCell>...</MazTableCell>
            <MazTableCell>...</MazTableCell>
          </MazTableRow>
        </MazTable>
      </template>
    </MazAccordion>


  </div>

</template>