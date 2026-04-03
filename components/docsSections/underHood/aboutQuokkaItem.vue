<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import Code from '~/components/code.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <div class="p-10">
    The list item that appears when the user has entered the
    <ExternalLink url="/Quokka/documentation?section=settings">
      <Code inline>&nbsp;AboutCommand&nbsp;</Code>
    </ExternalLink>
    special command.
  </div>
</template>