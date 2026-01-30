<template>
  <div class="p-10">
    Contains the function that loads all of the settings in the
    app settings file on startup.
    <DocNotice type="tip" class="mt-4" style="width: calc(100% - 1.5rem)">
      Settings are stored in
      <Code inline lang="cs">&nbsp;Application.Current.Resources&nbsp;</Code>
      and are accessible with
      <Code inline
        lang="cs">&nbsp;Application.Current.Resources[entry.Key]&nbsp;</Code>.
      <br />For e.g.,
      <Code inline
        lang="cs">&nbsp;Application.Current.Resources["CheckForUpdates"]&nbsp;</Code>
      .
    </DocNotice>
  </div>
</template>