<template>

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
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Use</th>
          <th>Plugin</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>AllApps</code></td>
          <td>list all installed apps</td>
          <td>InstalledApps</td>
          <td>
            This command is modifiable within the plugin specific
            settings<br />
            Along with the list of apps, an extra item is added to the
            start,
            allowing users to open shell:appsFolder.<br />
            This item can be blacklisted.
          </td>
        </tr>
        <tr>
          <td><code>AllPortableApps</code></td>
          <td>list all portable apps</td>
          <td><a href=''>PortableApps</a></td>
          <td>This command is
            modifiable within the plugin specific settings<br />
            Along with the list of apps, an extra item is added to the
            start,
            allowing users to open the directory in which the portable
            apps
            reside.<br />
            This item can be blacklisted.</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    All command signifiers for recognized plugins:
    <table>
      <thead>
        <tr>
          <th>Signifier</th>
          <th>Use</th>
          <th>Plugin</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>...</code></td>
          <td>...</td>
          <td>...</td>
          <td>
            ...
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>