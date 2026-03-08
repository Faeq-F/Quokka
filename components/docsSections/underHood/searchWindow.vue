<template>
  <div class="p-10">
    The design and layout of the primary user interface of the application, encompassing the main text input, the results list, and the frame for context panes.
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      The first <Code inline>&nbsp;Border&nbsp;</Code> is the container for the window contents. With the transparent window, the container seems to be the actual window.
      <br /><br />
      The first nested <Code inline>&nbsp;Border&nbsp;</Code> is the results area, followed by the <Code inline>&nbsp;Frame&nbsp;</Code> for context panes and then the nested <Code inline>&nbsp;Border&nbsp;</Code> containing the search entry field.
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import DocNotice from '~/components/docNotice.vue'
import Code from '~/components/code.vue'
</script>
