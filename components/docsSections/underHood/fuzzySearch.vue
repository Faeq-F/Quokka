<template>
  <div class="p-10">
    Contains 4 methods for using Fuzzy Searching; 2 for search (scoring
    similarity with cutoff) and 2 for sort (based off scores).
    <br /><br />
    For each, there is a method that accepts a <Code
      inline>&nbsp;Collection&lt;string&gt;&nbsp;</Code> to search /
    sort through and a method that accepts a <Code
      inline>&nbsp;Collection&lt;ListItem&gt;&nbsp;</Code>

    <DocNotice type="tip" class="mt-4" style="width: calc(100% - 1.5rem)">
      The scorer and cutoff value are configurable. Quokka has a
      <Link url="/Quokka/documentation?section=settings">general setting</Link>
      for the scorer while plugins may define their own, alongside the cutoff.
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import Code from '~/components/code.vue'
import DocNotice from '~/components/docNotice.vue'
import Link from '~/components/link.vue'
</script>