<template>
  <h1>
    <UIcon name="i-lucide-loader" /> Installation
  </h1>
  <div>
    Quokka requires the following:
    <ul>
      <li>A computer running Windows 7 or higher</li>
      <li><a href="">.NET 4.8 Framework (pre-installed on Windows 10 and 11)</a></li>
      <li>A Windows defender exclusion for the location of the exe;</li>
    </ul>

    Due to costs, binaries are not signed.<br />
    Add exclusions to any other anti-malware software that is installed on your computer, you do not want the software
    to mistake the app for malware
  </div>
  <div>
    To install:
    <ul>
      <li>Go to the top of this page and click on the <a href=''>'Download Latest Release'</a> button</li>
      <li>Download the 'Quokka.zip' file & extract it's contents</li>
      <li>You will want to extract / move the folder to an appropriate location.</li>
    </ul>

    Quokka is a portable program by design, meaning that you can place the folder on a external storage medium (e.g. a
    USB drive) and run the program from there.<br />
    Please see the suggestions below for an appropriate location of the folder.
  </div>
  <div>
    Suggestions:
    <ul>
      <li>If you do not wish to use the program in a portable manner, I suggest placing the folder in 'C:\Program
        Files', and
        creating a shortcut that is pinned to the taskbar and / or start menu.</li>
      <li>You may also want to set up a task to run the program at startup in Task Scheduler. Alternatively see the <a
          href=''>FAQ</a> on this.</li>
    </ul>
  </div>
  <h1>
    <UIcon name="i-lucide-pointer" /> How to use
  </h1>
  <div>
    <h2>
      <UIcon name="i-lucide-mouse-pointer" /> General Usage
    </h2>
    <div>
      To use the app, run Quokka.exe (in the root folder)
      <table>
        <thead>
          <tr>
            <th>Default Keyboard shortcut</th>
            <th>Use</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><kbd>Left ⊞</kbd>+<kbd>Space</kbd></td>
            <td>Launches the search bar</td>
            <td>This shortcut is modifiable; see <a href="">the WindowHotKey setting</a></td>
          </tr>
          <tr>
            <td><kbd>🠙</kbd>&<kbd>🠛</kbd></td>
            <td>Select items</td>
            <td>The keys used cannot be changed</td>
          </tr>
          <tr>
            <td><kbd>↵</kbd>></td>
            <td>Executes the selected item (the first item if no item is selected)</td>
            <td>The key used cannot be changed</td>
          </tr>
          <tr>
            <td><kbd>☰</kbd></td>
            <td>Shows context pane for item</td>
            <td>This shortcut is modifiable; see <a href="">the ContextPaneKey setting</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h2>
        <UIcon name="i-lucide-panel-bottom" /> Tray Task
      </h2>
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
        To change the tray task icon, edit the 'QuokkaTray.ico' file in '...\Quokka\Config\Resources\'<br />
        (or just rename a different .ico file to the same name)
      </div>
      <div>
        The tray task context menu can have its appearance changed in the settings file. You will have to exit and
        reload the application to see changes.
      </div>
      <div>
        You can only have one search window open at a time
      </div>
      <div>
        You can change which file manager opens the plugboard folder through <a href="">the FileManager
          setting</a><br />
        Likewise, you can change which text editor opens the settings file through <a href="">the TextEditor setting</a>
      </div>
      <div>
        Unfortunately system tray tasks cannot be accessed through the Quokka search window (though Quokka's tray task
        can be); this means that Quokka cannot completely replace your taskbar yet.<br />
        This functionality may come in future (as a plugin).
      </div>
    </div>
    <div>
      <h2>
        <UIcon name="i-lucide-toy-brick" /> Plugins
      </h2>
      <div>
        To add a plugin, download and extract it to the PlugBoard folder<br />
        If you do not wish to use a plugin, simply delete the appropriate folder in the PlugBoard
      </div>
      <div>
        Plugins may have their own settings and special commands.<br />
        Please see their folder in the PlugBoard to find their settings file (at the root (if there is one)).<br />
        Please consult their documentation for default values, etc.
      </div>
      <div>
        Only recognized plugins appear on this page. Being human, I can't recognize every plugin for Quokka — I can only
        realize there is so much that exists.
      </div>
      <div>
        Planned plugins:
        <table>
          <thead>
            <tr>
              <th>Developed?</th>
              <th>Plugin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>✅</td>
              <td>installed app launcher</td>
            </tr>
            <tr>
              <td>✅</td>
              <td>portable app launcher</td>
            </tr>
            <tr>
              <td>In progress</td>
              <td>file/folder launcher - everything integration</td>
            </tr>
            <tr>
              <td>In progress</td>
              <td>calculator</td>
            </tr>
            <tr>
              <td>In progress</td>
              <td>power commands (logout, lock, sleep, shutdown, etc.)</td>
            </tr>
            <tr>
              <td>In progress</td>
              <td>English dictionary</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>control panel shortcuts</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>Windows settings</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>Unicode character lookup</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>IP & MAC address</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>cli commands - powershell</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>color space conversion</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>unit conversion</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>currency conversion</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>translate</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>lorem ipsum generator</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>emoji lookup</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>url opener</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>wikipedia search</td>
            </tr>
            <tr>
              <td>▢</td>
              <td>workflows - launch multiple shortcuts at once - see below</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>