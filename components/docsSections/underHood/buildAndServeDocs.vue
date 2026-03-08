<template>
  <div class="p-10">
    A script to build the HTML API documentation pages from the files containing the source code.
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem);">
      Uses the <Code inline>&nbsp;QuokkaDocs&nbsp;</Code> folder from the <Code inline>&nbsp;site&nbsp;</Code> branch.
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import DocNotice from '~/components/docNotice.vue'
import Code from '~/components/code.vue'
</script>
