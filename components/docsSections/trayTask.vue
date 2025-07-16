<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <div>
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-panel-bottom" class="mr-2" /> Tray Task
      </div>
      <div class="text-md outfit">Using the System Tray task</div>
    </div>
    <MazCardSpotlight class="w-full m-2" :padding="false">
      <MazTable hoverable divider size="md" tableClass="!bg-transparent"
        :headers="['Default tray task icon', 'Notes']">
        <MazTableRow>
          <MazTableCell>
            <img src="/media/Docs/LoadingQuokkaTray.ico" class="size-10" />
          </MazTableCell>
          <MazTableCell>
            Displayed while Quokka is starting up / loading (is not ready)
          </MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>
            <img src="/media/Docs/QuokkaTray.ico" class="size-10" />
          </MazTableCell>
          <MazTableCell>
            Displayed when Quokka is ready for use
          </MazTableCell>
        </MazTableRow>
      </MazTable>

      <DocNotice type="tip" style="width: calc(100% - 1rem); ">
        <span class="flex gap-1">
          To change the tray task icon, edit the
          <Code inline> QuokkaTray.ico </Code> file in
          <Code inline> ...\Quokka\Config\Resources\ </Code>
        </span>
        <span class="flex gap-1">
          (or just rename a different
          <Code inline> .ico </Code>
          file to the same name)
        </span>
      </DocNotice>
    </MazCardSpotlight>
    <MazCardSpotlight class="w-full m-2">
      The tray task context menu can be used to:
      <ul class="mt-4">
        <li>
          Launch the search window
          <DocNotice type="info" style="width: calc(100% - 3.5rem);">
            You can only have one search window open at a time
          </DocNotice>
        </li>
        <li>
          Open the settings file
          <DocNotice type="tip" style="width: calc(100% - 3.5rem);">
            <span class="flex gap-1">
              You can change which text editor opens the settings file
              through
              <ExternalLink url='' class="flex">
                <span>the&nbsp;</span>
                <Code inline class="!border-0">TextEditor</Code>
                <span>&nbsp;setting</span>
              </ExternalLink>
            </span>
          </DocNotice>
        </li>
        <li>
          Open the PlugBoard
          <DocNotice type="tip" style="width: calc(100% - 3.5rem);">
            <span class="flex gap-1">
              You can change which file manager opens the
              <Code inline> PlugBoard </Code> folder through
              <ExternalLink url='' class="flex">
                <span>the&nbsp;</span>
                <Code inline class="!border-0">FileManager</Code>
                <span>&nbsp;setting</span>
              </ExternalLink>
            </span>
          </DocNotice>
        </li>
        <li>Exit the app</li>
      </ul>
      <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
      <DocNotice type="warning" style="width: calc(100% - 1rem);">
        When the tray task context menu has its
        <span class="font-bold">appearance changed</span> in the
        settings file, you will have to <span class="font-bold">exit and
          reload</span>
        the application to see the changes.
      </DocNotice>
    </MazCardSpotlight>
    <DocNotice type="danger" style="width: 100%;">
      Unfortunately system tray tasks for other applications cannot be
      accessed through the Quokka search window yet<br />
      This functionality may come in future (as a plugin).
    </DocNotice>
  </div>
</template>