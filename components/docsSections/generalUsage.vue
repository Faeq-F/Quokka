<template>
  <div>
    <h1>
      <UIcon name="i-lucide-mouse-pointer" /> General Usage
    </h1>
    <div>
      To use the app, run Quokka.exe (in the root folder)
      <MazTable hoverable divider
        :headers="['Default Keyboard shortcut', 'Use', 'Notes']">
        <MazTableRow>
          <MazTableCell><kbd>Left ⊞</kbd>&nbsp;+&nbsp;<kbd>Space</kbd>
          </MazTableCell>
          <MazTableCell>Launches the search bar</MazTableCell>
          <MazTableCell>This shortcut is modifiable; see <a href="">the
              WindowHotKey
              setting</a></MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell><kbd>🠙</kbd>&nbsp;&&nbsp;<kbd>🠛</kbd></MazTableCell>
          <MazTableCell>Select items</MazTableCell>
          <MazTableCell>The keys used cannot be changed</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell><kbd>↵</kbd></MazTableCell>
          <MazTableCell>Executes the selected item (the first item if no item is
            selected)</MazTableCell>
          <MazTableCell>The key used cannot be changed</MazTableCell>
        </MazTableRow>
        <MazTableRow>
          <MazTableCell><kbd>☰</kbd></MazTableCell>
          <MazTableCell>Shows context pane for item</MazTableCell>
          <MazTableCell>This shortcut is modifiable; see <a href="">the
              ContextPaneKey
              setting</a></MazTableCell>
        </MazTableRow>
      </MazTable>



    </div>
  </div>
</template>