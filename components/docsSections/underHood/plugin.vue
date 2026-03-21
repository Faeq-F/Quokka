<template>
  <div class="p-10">
    An abstract class all plugins must inherit from.
    <DocNotice type="tip" class="mt-4" style="width: calc(100% - 1.5rem)">
      Includes methods that allow plugins to trigger actions;
      <ul>
        <li>on application startup and shutdown</li>
        <li>on search window startup</li>
      </ul>
      <br />
      With methods to provide item list results;
      <ul>
        <li>on search query changes</li>
        <li>on the use of special commands and command signifiers</li>
      </ul>
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import Code from '~/components/code.vue'
import DocNotice from '~/components/docNotice.vue'
import Link from '~/components/link.vue'
</script>