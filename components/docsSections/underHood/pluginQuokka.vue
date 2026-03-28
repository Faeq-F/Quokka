<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import Code from '~/components/code.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <div class="p-10">
    Quokka's built-in utility plugin.
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      Contains the following functionality:
      <ul>
        <li>
          Checking for updates manually & on startup
        </li>
        <li>
          Watching the settings file for changes to suggest a restart of the
          application
        </li>
        <li>
          Provides a view for licenses of software used by Quokka
        </li>
        <li>
          Provides useful links about Quokka
        </li>
      </ul>
    </DocNotice>
  </div>
</template>