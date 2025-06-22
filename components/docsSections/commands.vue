<template>
  <div>
    <h1>
      <UIcon name="i-lucide-zap" /> Commands
    </h1>
    <!-- check this with signifiers -->
    <div>
      <b>Special commands are case-sensitive</b> to ensure they do not
      interfere with other functions of the app or plugins
    </div>
    <!-- get these from the store -->
    <div>
      All special commands for recognized plugins:
      <MazTable hoverable divider
        :headers="['Command', 'Use', 'Plugin', 'Notes']">


        <MazTableRow>
          <MazTableCell><code>AllApps</code></MazTableCell>
          <MazTableCell>list all installed apps</MazTableCell>
          <MazTableCell>InstalledApps</MazTableCell>
          <MazTableCell>
            This command is modifiable within the plugin specific
            settings<br />
            Along with the list of apps, an extra item is added to the
            start,
            allowing users to open shell:appsFolder.<br />
            This item can be blacklisted.
          </MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell><code>AllPortableApps</code></MazTableCell>
          <MazTableCell>list all portable apps</MazTableCell>
          <MazTableCell><a href=''>PortableApps</a></MazTableCell>
          <MazTableCell>This command is
            modifiable within the plugin specific settings<br />
            Along with the list of apps, an extra item is added to the
            start,
            allowing users to open the directory in which the portable
            apps
            reside.<br />
            This item can be blacklisted.</MazTableCell>
        </MazTableRow>
      </MazTable>
    </div>
    <div>
      All command signifiers for recognized plugins:
      <MazTable hoverable divider
        :headers="['Signifier', 'Use', 'Plugin', 'Notes']">
        <MazTableRow>
          <MazTableCell><code>...</code></MazTableCell>
          <MazTableCell>...</MazTableCell>
          <MazTableCell>...</MazTableCell>
          <MazTableCell>
            ...
          </MazTableCell>
        </MazTableRow>
      </MazTable>
    </div>
  </div>
</template>