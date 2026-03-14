<template>
  <div class="p-10">
    Contains the logic for loading plugins on startup.
    <DocNotice type="tip" class="mt-4" style="width: calc(100% - 1.5rem)">
      All plugins are accessible through the
      <Code inline>&nbsp;Plugins&nbsp;</Code>
      property.
      <Code
        lang="cs">public static Collection&lt;Plugin&gt; Plugins => plugins;</Code>
    </DocNotice>
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      Currently,
      <ExternalLink blank
        url="https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection">
        reflection
      </ExternalLink>
      is used to load plugins.
      <Code lang="cs">
        string dllPath = GetPluggerDll(plugin);
        Assembly _Assembly = Assembly.LoadFile(dllPath);
        var types = _Assembly.GetTypes()?.ToList();
        var type = types?.Find(a => typeof(Plugin).IsAssignableFrom(a));
        plugins.Add((Plugin)Activator.CreateInstance(type!)!);
      </Code>
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import DocNotice from '~/components/docNotice.vue'
import Code from '~/components/code.vue'
import ExternalLink from '~/components/link.vue'
</script>