<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <div class="px-88">
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-loader" class="mr-2" /> Installation
      </div>
      <div class="text-md outfit">Requirements, steps & suggestions</div>
    </div>
    <MazCardSpotlight class="w-full m-2">
      Quokka requires the following:
      <ul>
        <li>
          A computer running Windows 7 or higher
        </li>
        <li>
          <ExternalLink url=''
            text=".NET 4.8 Framework (pre-installed on Windows 10 and 11)" />
        </li>
        <li>
          Exclusions to any anti-malware software (including Microsoft
          defender) that is installed on your computer, for the location of the
          exe;
          <br />
          <DocNotice type="warning">
            Due to costs, binaries are not signed (e.g., with a
            Organization Validation (OV) code signing certificate).<br />
            As a result, the Microsoft Defender SmartScreen will likely try
            to prevent the app from starting.
          </DocNotice>
        </li>
      </ul>
    </MazCardSpotlight>
    <MazCardSpotlight class="w-full m-2">
      To install:
      <ul>
        <li>
          Go to the top of this page and click on the
          <ExternalLink url='' text="'Download Latest Release'" />&nbsp;button
        </li>
        <li>
          Download the 'Quokka.zip' file & extract it's contents
        </li>
        <li>
          You will want to extract / move the folder to an appropriate location.
          <DocNotice type="info">
            Quokka is a portable program by design. <br />
            This means that you can place the folder on a external storage
            medium (e.g. a USB drive) and run the program from there.
          </DocNotice>
          <DocNotice type="tip">
            If you do not wish to use the program in a portable manner, I
            suggest placing the folder in 'C:\Program Files',<br />and
            creating a shortcut that is pinned to the taskbar and / or start
            menu.
          </DocNotice>
          <DocNotice type="tip">
            You can set up a task to run the program at
            startup in Task Scheduler. Alternatively see the
            <ExternalLink url='' text="FAQ" />&nbsp;on this.
          </DocNotice>
        </li>
      </ul>
    </MazCardSpotlight>
  </div>
</template>