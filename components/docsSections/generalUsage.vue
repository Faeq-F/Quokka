<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import Code from '~/components/code.vue'
</script>
<template>
  <div class="px-88">
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-mouse-pointer" class="mr-2" /> General Usage
      </div>
      <div class="text-md outfit">Running the app & default keys</div>
    </div>
    <MazCardSpotlight class="w-full m-2">
      <span class="flex gap-1">
        To use the app, run
        <Code inline> Quokka.exe </Code>
        (in the root folder)
      </span>
    </MazCardSpotlight>
    <MazCardSpotlight class="w-full m-2" :padding="false">
      <MazTable hoverable divider size="md" tableClass="!bg-transparent"
        :headers="['Default keys / shortcuts', 'Use', 'Notes']">
        <MazTableRow class="hover:!bg-blue-50 dark:hover:!bg-[#181821]">
          <MazTableCell style="font-size: 1rem;">
            <kbd>Left Alt</kbd>+<kbd>Space</kbd>
          </MazTableCell>
          <MazTableCell style=" font-size: 1rem;">
            Launches the search bar
          </MazTableCell>
          <MazTableCell style="font-size: 1rem; width:43%">
            This shortcut is modifiable; see
            <span class="flex gap-1">This shortcut is modifiable; see
              <ExternalLink url='' class="flex">
                <span>the&nbsp;</span>
                <Code inline class="!border-0">WindowHotKey</Code>
                <span>&nbsp;setting</span>
              </ExternalLink>
            </span>
          </MazTableCell>
        </MazTableRow>
        <MazTableRow class="hover:!bg-blue-50 dark:hover:!bg-[#181821]">
          <MazTableCell style=" font-size: 1rem;">
            <kbd>🠙</kbd><span class="text-sm">&</span><kbd>🠛</kbd>
          </MazTableCell>
          <MazTableCell style=" font-size: 1rem;">
            Select items
          </MazTableCell>
          <MazTableCell style=" font-size: 1rem; width:43%">
            The keys used cannot be changed
          </MazTableCell>
        </MazTableRow>
        <MazTableRow class="hover:!bg-blue-50 dark:hover:!bg-[#181821]">
          <MazTableCell style=" font-size: 1rem;">
            <kbd>↵</kbd>
          </MazTableCell>
          <MazTableCell style=" font-size: 1rem;">
            Executes the selected item (the first item if no item is selected)
          </MazTableCell>
          <MazTableCell style=" font-size: 1rem; width:43%">
            The key used cannot be changed
          </MazTableCell>
        </MazTableRow>
        <MazTableRow class="hover:!bg-blue-50 dark:hover:!bg-[#181821]">
          <MazTableCell style=" font-size: 1rem;">
            <kbd>☰</kbd>
          </MazTableCell>
          <MazTableCell style=" font-size: 1rem;">
            Shows context pane for item
          </MazTableCell>
          <MazTableCell style=" font-size: 1rem; width:43%">
            <span class="flex gap-1">This shortcut is modifiable; see
              <ExternalLink url='' class="flex">
                <span>the&nbsp;</span>
                <Code inline class="!border-0">ContextPaneKey</Code>
                <span>&nbsp;setting</span>
              </ExternalLink>
            </span>
          </MazTableCell>
        </MazTableRow>
      </MazTable>
      <!-- <Code lang="cs">
        return Console.WriteLine('Hi');
      </Code>
      <span class="flex gap-1">
        Hello <Code lang="cs" inline>
        return Console.WriteLine('Hi');
      </Code> after</span> -->
    </MazCardSpotlight>
  </div>
</template>