import { defineStore } from "pinia";

export const useSettingsStore = defineStore("themesStore", {
  state: () => ({
    settings: [
      {
        name: "AboutCommand",
        defaultValue: "AboutQuokka",
        notes: [],
      },
      {
        name: "CheckForUpdates",
        defaultValue: "true",
        notes: [],
      },
      {
        name: "WindowHotKey",
        defaultValue: "Space",
        notes: [
          {
            prevText: "The full list of keys that can be used in the setting can be found",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.keys?view=netframework-4.8",
              text: "here"
            },
            afterText: "(use the first column)",
          }
        ],
      },
      {
        name: "WindowHotKeyModifier",
        defaultValue: "Alt",
        notes: [
          {
            prevText: "The full list of keys that can be used in the setting can be found highlighted",
            link: {
              url: "https://github.com/Faeq-F/Quokka/blob/main/Quokka/KeyboardHook.cs#L130-L151",
              text: "here"
            },
          }
        ],
      },
      {
        name: "ContextPaneKey",
        defaultValue: "Apps",
        notes: [],
      },
      {
        name: "MaxResults",
        defaultValue: "10",
        notes: [],
      },
      {
        name: "IgnoreMaxResultsFlag",
        defaultValue: "-ShowAll",
        notes: [],
      },
      {
        name: "FileManager",
        defaultValue: "explorer.exe",
        notes: [
          "This is the program that will open the plugboard",
          "Plugins may use this setting to open other folders, for e.g., a file location"
        ],
      },
      {
        name: "TextEditor",
        defaultValue: "notepad.exe",
        notes: [
          "This is the program that will open the settings file",
          "Plugins may use this setting to open other files, for e.g., their own settings file"
        ],
      },
    ]
  }),
  actions: {},
});
