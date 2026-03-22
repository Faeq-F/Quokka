<template>
  <div class="p-10">
    A cache for <Code inline>&nbsp;ListItem&nbsp;</Code> icon <Code
      inline>&nbsp;ImageSource&nbsp;</Code> objects.

    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      Since plugin methods are run in a <Code inline>&nbsp;Task&nbsp;</Code>,
      the cache is used to save memory and ensure images are created on the UI
      thread.
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import DocNotice from '~/components/docNotice.vue'
import Code from '~/components/code.vue'
import ExternalLink from '~/components/link.vue'
</script>