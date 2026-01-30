<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
</script>
<template>
  <div class="p-10">
    Defines the abstract base class that serves as the contract for all list
    items, ensuring every item implements the required properties and
    behaviors.
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      Every item must have a <Code inline>&nbsp;Name&nbsp;</Code>,
      <Code inline>&nbsp;Description&nbsp;</Code>,
      <Code inline>&nbsp;Icon&nbsp;</Code> and an
      <Code inline>&nbsp;Execute&nbsp;</Code> method. See the second step in
      <ExternalLink url='/Quokka/documentation?section=creating-plugin'>
        creating a plugin.
      </ExternalLink>
    </DocNotice>
  </div>
</template>