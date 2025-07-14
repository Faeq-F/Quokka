<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <div class="px-88">
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-drill" class="mr-2" /> Building the app
      </div>
      <div class="text-md outfit">Steps to produce the published release</div>
    </div>
    <MazCardSpotlight class="w-full m-2">
      To build the app:
      <ol>
        <li>
          Open
          <ExternalLink url='https://visualstudio.microsoft.com/#vs-section'
            target="_blank">
            Visual Studio
          </ExternalLink>
          &nbsp;& clone
          <ExternalLink url='https://github.com/faeq-f/quokka/' target="_blank">
            Quokka
          </ExternalLink>
        </li>
        <li>
          Build the solution
        </li>
        <li>
          <span class="flex gap-1">
            Copy the Quokka folder (in the build path - normally
            <Code inline> bin </Code>
            ) to your desired location (for e.g., to a USB drive)
          </span>
        </li>
        <li>
          <span class="flex gap-1">
            (Download / Delete) any plugins you (do / do not) wish to use (in
            the
            <Code inline> PlugBoard </Code>)
          </span>
          (Some of the recognized Plugins may be included with the build)
        </li>
      </ol>
      <br />
      <DocNotice type="warning" style="width: calc(100% - 1rem);">
        The app comes as portable by design - there are no separate build
        instructions for a non-portable version.
      </DocNotice>
    </MazCardSpotlight>
  </div>
</template>