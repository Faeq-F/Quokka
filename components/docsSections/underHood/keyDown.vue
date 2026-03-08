<template>
  <div class="p-10">
    Contains the handler for the event where a keyboard key is pressed while the search box has focus.
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      <ul>
        <li>If a context pane is open, focus will switch to it.</li>
        <li>If the key is <Code inline>&nbsp;ContextPaneKey&nbsp;</Code>, it will find and open the item's context pane.</li>
        <li>If the key is up or down arrow keys, it will scroll & select the relevant item.</li>
        <li>If the key is left or right arrow keys, it will scroll the selected item horizontally.</li>
      </ul>
      <br />
      See <ExternalLink url="/Quokka/documentation?section=general-usage">general usage.</ExternalLink>
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import DocNotice from '~/components/docNotice.vue'
import ExternalLink from '~/components/link.vue'
import Code from '~/components/code.vue'
</script>
