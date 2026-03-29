<template>
  <div class="p-10">
    Provides methods for plugins to execute actions on the UI thread, ensuring
    thread safety.

    <DocNotice type="tip" class="mt-4" style="width: calc(100% - 1.5rem)">
      This would be used, for example, to set an item's icon;
      <Code lang="cs">
        public TypedTextItem(string query, bool differentDesc)
        {
          Name = $"You typed `{query}`";
          Description = "Hit the enter key to copy the text";
          UiDispatcher.BeginInvoke(() =>
          {
            Icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory + "\\PlugBoard\\PluginTypedText\\Plugin\\text.png"));
          });
      </Code>
      <blockquote>
        This is a part of the
        <ExternalLink url="https://github.com/Faeq-F/Quokka-TypedText-Plugin"
          target="_blank">
          TypedText plugin
        </ExternalLink>
        &nbsp;(a demo plugin not made for use)
      </blockquote>
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import DocNotice from '~/components/docNotice.vue'
import Code from '~/components/code.vue'
import ExternalLink from '~/components/link.vue'
</script>