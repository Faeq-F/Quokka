<template>

  <h1>
    <UIcon name="i-lucide-sliders-vertical" /> Settings
  </h1>
  <div>
    Quokka comes with the 'Windows light' theme by default.<br />
    To change it, you can edit the style settings in the settings file
    or
    you
    can use values in a configuration provided on the themes page.
  </div>
  <div>
    The settings file is located in '...\Quokka\Config\'
  </div>
  <div>
    All settings are loaded when the application starts, meaning that
    you
    will
    have to exit and re-start the app to see changes.
  </div>
  <div>
    Plugins may have their own, specific settings files in the root of
    their
    respective folders in the PlugBoard. You can open The PlugBoard
    using
    the
    Tray Task Icon context menu.<br />
    Please consult their documentation for default values, etc.
  </div>
  <div>
    Default General settings:<br />
    (Please see the 'Windows light' theme for default style settings)

    <table>
      <thead>
        <tr>
          <th>Setting name</th>
          <th>Notes</th>
          <th>Default Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>WindowHotKey</code></td>
          <td>The default value is interpreted as 'Left Windows key +
            Spacebar'<br /><br />The full list of keys that can be used
            in
            the
            setting can be found <a
              href="https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.key?view=windowsdesktop-7.0#fields">here</a>
            (use
            the first column)</td>
          <td><code>LWinSpace</code></td>
        </tr>
        <tr>
          <td><code>FileManager</code></td>
          <td>The program that will open the plugboard. Plugins may use
            this
            setting to open other folders, for e.g., a file location
          </td>
          <td><code>explorer.exe</code></td>
        </tr>
        <tr>
          <td><code>TextEditor</code></td>
          <td>The program that will open the settings file. Plugins may
            use
            this setting to open other files, for e.g., their own
            settings
            file
          </td>
          <td><code>notepad.exe</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>