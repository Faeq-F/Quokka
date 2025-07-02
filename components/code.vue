<script lang="ts" setup>

import Prism from 'prismjs'
import '~/assets/css/prism-vs.css'
import 'prismjs/components/prism-csharp'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/autolinker/prism-autolinker'
import 'prismjs/plugins/autolinker/prism-autolinker.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

defineProps(['inline', 'lang'])
import { onMounted } from 'vue'
onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <code v-if="inline" :class="`lang-${lang}`" data-prismjs-copy="⿻">
    <slot />
  </code>
  <pre v-else data-prismjs-copy="⿻">
      <code :class="`lang-${lang}`">
        <slot />
    </code>
  </pre>
</template>