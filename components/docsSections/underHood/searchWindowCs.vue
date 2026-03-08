<template>
  <div class="p-10">
    Contains the logic for the main interface, managing the search execution via <Code inline>&nbsp;OnQueryChange&nbsp;</Code> and <Code inline>&nbsp;ProduceItems&nbsp;</Code>. It also runs <Code inline>&nbsp;OnSearchWindowStartup&nbsp;</Code> for the plugins and exposes public properties for them.
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      <Code inline>&nbsp;OnQueryChange&nbsp;</Code> will display a loading item and cancel previous runs of the handler, using a debounce to avoid running work for every keystroke.
      <div style="width: calc(100% - 2.5rem);">
        <Code lang="cs">
            // cancel previous run
            _produceCts?.Cancel();
            _produceCts = new CancellationTokenSource();
            CancellationToken token = _produceCts.Token;
          </Code>
        <Code lang="cs">
            // debounce to avoid running work for every keystroke
            try
            {
              await Task.Delay((int)App.Current.Resources["Debounce"], token).ConfigureAwait(true);
            }
            catch (OperationCanceledException)
            {
              return;
            }
          </Code>
        </div>
      </DocNotice>
      <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
        <Code inline>&nbsp;ProduceItems&nbsp;</Code> is called from <Code inline>&nbsp;OnQueryChange&nbsp;</Code> and runs in a task off the UI thread (prevents the window from freezing).
        <div style="width: calc(100% - 2.5rem);">
          <Code lang="cs">
            try
            {
              // run work off the UI thread
              Results = (await Task.Run(() => ProduceItems(query), token).ConfigureAwait(true)).ToList();
            }
            catch (OperationCanceledException)
            {
              return;
            }
          </Code>
          <br />
          <Code inline>&nbsp;ProduceItems&nbsp;</Code> will first go through the plugin special commands, then check for command signifiers, before calling each plugins' <Code inline>&nbsp;OnQueryChange&nbsp;</Code> method.
        </div>
      </DocNotice>
  </div>
</template>

<script setup lang="ts">
import DocNotice from '~/components/docNotice.vue'
import Code from '~/components/code.vue'
</script>
