<template>
  <div>
    <h1>
      <UIcon name="i-lucide-blocks" /> Plugins
    </h1>
    <div>
      To add a plugin, download and extract it to the PlugBoard
      folder<br />
      If you do not wish to use a plugin, simply delete the appropriate
      folder
      in the PlugBoard
    </div>
    <div>
      Plugins may have their own settings and special commands.<br />
      Please see their folder in the PlugBoard to find their settings
      file
      (at
      the root (if there is one)).<br />
      Please consult their documentation for default values, etc.
    </div>
    <div>
      Only recognized plugins appear on this page. Being human, I can't
      recognize every plugin for Quokka — I can only
      realize there is so much that exists.
    </div>
    <div>
      Planned plugins:
      <MazTable hoverable divider :headers="['Developed?', 'Plugin']">
        <MazTableRow>
          <MazTableCell>✅</MazTableCell>
          <MazTableCell>installed app launcher</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>✅</MazTableCell>
          <MazTableCell>portable app launcher</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>In progress</MazTableCell>
          <MazTableCell>file/folder launcher - everything integration
          </MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>In progress</MazTableCell>
          <MazTableCell>calculator</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>In progress</MazTableCell>
          <MazTableCell>power commands (logout, lock, sleep, shutdown, etc.)
          </MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>In progress</MazTableCell>
          <MazTableCell>English dictionary</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>control panel shortcuts</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>Windows settings</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>Unicode character lookup</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>IP & MAC address</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>cli commands - powershell</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>color space conversion</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>unit conversion</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>currency conversion</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>translate</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>lorem ipsum generator</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>emoji lookup</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>url opener</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>wikipedia search</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell>▢</MazTableCell>
          <MazTableCell>workflows - launch multiple shortcuts at once - see
            below
          </MazTableCell>
        </MazTableRow>
      </MazTable>
    </div>
  </div>
</template>