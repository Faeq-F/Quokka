<script lang="ts" setup>

import Prism from 'prismjs'
import '~/assets/css/prism-vs.css'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-csharp'
import 'prismjs/plugins/match-braces/prism-match-braces'
import 'prismjs/plugins/match-braces/prism-match-braces.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/autolinker/prism-autolinker'
import 'prismjs/plugins/autolinker/prism-autolinker.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

defineProps({
  inline: Boolean,
  lang: String
})
import { onMounted } from 'vue'
onMounted(() => {
  Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 100,
  });
  Prism.highlightAll()
})
</script>

<template>
  <code v-if="inline" :class="`lang-${lang} match-braces`">
    <slot />
  </code>
  <pre class="line-numbers" data-lenis-prevent v-else>
      <code :class="`lang-${lang} match-braces`">
        <slot />
    </code>
  </pre>
</template>