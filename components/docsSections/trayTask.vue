<template>
  <h1>
    <UIcon name="i-lucide-panel-bottom" /> Tray Task
  </h1>


  <div>
    The tray task context menu can be used to:
    <ul>
      <li>Launch the search window</li>
      <li>Open the settings file</li>
      <li>Open the PlugBoard</li>
      <li>Exit the app</li>
    </ul>
  </div>
  <div>
    To change the tray task icon, edit the 'QuokkaTray.ico' file in
    '...\Quokka\Config\Resources\'<br />
    (or just rename a different .ico file to the same name)
  </div>
  <div>
    The tray task context menu can have its appearance changed in the
    settings file. You will have to exit and
    reload the application to see changes.
  </div>
  <div>
    You can only have one search window open at a time
  </div>
  <div>
    You can change which file manager opens the plugboard folder
    through
    <a href="">the FileManager
      setting</a><br />
    Likewise, you can change which text editor opens the settings file
    through <a href="">the TextEditor setting</a>
  </div>
  <div>
    Unfortunately system tray tasks cannot be accessed through the
    Quokka
    search window (though Quokka's tray task
    can be); this means that Quokka cannot completely replace your
    taskbar
    yet.<br />
    This functionality may come in future (as a plugin).
  </div>
</template>