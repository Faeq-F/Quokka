import { defineStore } from "pinia";

export const usePluginsStore = defineStore("pluginsStore", {
  state: () => ({
    tags: [
      {
        label: "browser",
        icon: "earth",
      },
      {
        label: "network",
        icon: "ethernet-port",
      },
      {
        label: "notes",
        icon: "notebook-pen",
      },
      {
        label: "utility",
        icon: "wrench",
      },

      {
        label: "productivity",
        icon: "briefcase-business",
      },

      {
        label: "development",
        icon: "drill",
      },
      {
        label: "system",
        icon: "laptop",
      },

      {
        label: "programming",
        icon: "code-xml",
      },
      {
        label: "multimedia",
        icon: "image-play",
      },
      {
        label: "search",
        icon: "search",
      },
      {
        label: "automation",
        icon: "workflow",
      },
      {
        label: "calculator",
        icon: "calculator",
      },
      {
        label: "offline",
        icon: "wifi-off",
      },
      {
        label: "online",
        icon: "wifi",
      },
    ],
    pluginsList: [
      {
        name: "Installed Apps",
        shortDescription: "Launch apps installed on your machine",
        version: "1.0.0",
        github: "Faeq-F/Quokka-InstalledApps-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "box",
        tags: ["system", "search", 'offline'],
        specialCommands: [
          {
            command: 'AllApps',
            use: 'Used to list all installed apps',
            notes: [
              'This command is modifiable within the plugin specific settings',
              'Along with the list of apps, an extra item is added to the start, allowing users to open a folder to view all installed apps',
              'This item can be blacklisted'
            ]
          },
        ],
        commandSignifiers: [
          {
            signifier: 'app',
            use: 'Search for an installed app',
            notes: []
          },
        ]
      },
      {
        name: "Portable Apps",
        shortDescription: "Launch portable applications stored in a given directory",
        version: "1.0.0",
        github: "Faeq-F/Quokka-PortableApps-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "usb",
        tags: ["search", 'offline'],
        specialCommands: [
          {
            command: 'AllPortableApps',
            use: 'list all portable apps',
            notes: [
              'This command is modifiable within the plugin specific settings',
              'Along with the list of apps, an extra item is added to the start, allowing users to open the directory in which the portable apps reside.',
              'This item can be blacklisted.'
            ]
          },
        ],
        commandSignifiers: [
          {
            signifier: 'portapp',
            use: 'Search for a portable app',
            notes: []
          },
        ]
      },
      {
        name: "Everything",
        shortDescription: "Search through and find files and folders",
        version: "1.0.0",
        github: "Faeq-F/Quokka-Everything-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "folder-search",
        tags: ["search", "system", 'offline'],
        specialCommands: [],
        commandSignifiers: [
          {
            signifier: 'f?',
            use: 'Search for files and folders',
            notes: [
              'Like in normal search, you can use the match path, match case, match whole word, and regex flags',
            ]
          },
        ]
      },
      {
        name: "Calculator",
        shortDescription: "Calculate mathematical expressions",
        version: "1.0.0",
        github: "Faeq-F/Quokka-Calculator-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "calculator",
        tags: ["productivity", "calculator", 'offline'],
        specialCommands: [],
        commandSignifiers: [
          {
            signifier: '=',
            use: 'Evaluate a mathematical equation',
            notes: []
          },
        ]
      },
      {
        name: "Power Commands",
        shortDescription: "Shutdown, restart, set to sleep, sign out of and lock your PC",
        version: "1.0.0",
        github: "Faeq-F/Quokka-PowerCommands-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "power",
        tags: ["system", "utility", 'offline'],
        specialCommands: [
          {
            command: 'PowerCommands',
            use: 'List all power commands',
            notes: []
          },
          {
            command: 'shutdown',
            use: 'Closes all apps and turns off the PC',
            notes: [
              'Quokka is shutdown before the action is carried out',
            ]
          },
          {
            command: 'restart',
            use: 'Closes all apps, turns off the PC and then turns it on again',
            notes: [
              'Quokka is shutdown before the action is carried out',
            ]
          },
          {
            command: 'sleep',
            use: 'The PC stays on but uses low power. Apps stay open so you can come back to where you left off',
            notes: []
          },
          {
            command: 'sign out',
            use: 'Closes all apps and ends the session',
            notes: [
              'Quokka is shutdown before the action is carried out',
            ]
          },
          {
            command: 'lock',
            use: 'Secure your PC, requiring a password to resume your session',
            notes: []
          },
        ],
        commandSignifiers: []
      },
      {
        name: "English Dictionary",
        shortDescription: "Find denotations for words in the English (US) language",
        version: "1.0.0",
        github: "Faeq-F/Quokka-EnglishDictionary-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "book-a",
        tags: ['search', 'online'],
        specialCommands: [],
        commandSignifiers: [
          {
            signifier: 'def',
            use: 'Search for the definition of a word',
            notes: [
              'All results from the plugin are in English (US)',
            ]
          },
        ]
      },
      {
        name: "Web Search",
        shortDescription: "Allows you to query the web from Quokka",
        version: "1.0.0",
        github: "Faeq-F/Quokka-WebSearch-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "search",
        tags: ['search', 'online'],
        specialCommands: [],
        commandSignifiers: [
          {
            signifier: '?',
            use: 'Create a search for the web',
            notes: []
          },
        ]
      },
      {
        name: "Settings",
        shortDescription: "Provides shortcuts to the control panel and windows settings",
        version: "1.0.0",
        github: "Faeq-F/Quokka-Settings-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "settings",
        tags: ["system", "utility", 'offline'],
        specialCommands: [
          {
            command: 'AllSettings',
            use: 'Displays all settings',
            notes: [
              'Some may not work due to being outdated as Microsoft are constantly changing settings and layouts',
            ]
          },
          {
            command: 'AllControlPanelSettings',
            use: 'Displays all settings from the control panel',
            notes: [
              'May be outdated as Microsoft are constantly moving more settings to the app',
            ]
          },
          {
            command: 'AllWindowsSettings',
            use: 'Displays all settings from the Windows settings app',
            notes: [
              'May be outdated as Microsoft are constantly moving more settings to the app',
            ]
          },
        ],
        commandSignifiers: [
          {
            signifier: '~',
            use: 'Search for settings from the settings app or the control panel',
            notes: []
          },
          {
            signifier: '*',
            use: 'Search for settings from the settings app',
            notes: []
          },
          {
            signifier: '&',
            use: 'Search for settings from the control panel',
            notes: []
          },
        ]
      },
      {
        name: "Gitmoji",
        shortDescription: "Allows you to copy the code for emojis within the gitmoji convention",
        version: "1.0.0",
        github: "Faeq-F/Quokka-Gitmoji-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "smile",
        tags: ['search', 'development', 'offline'],
        specialCommands: [
          {
            command: 'gitmoji',
            use: 'Displays all emojis within the convention',
            notes: []
          },
        ],
        commandSignifiers: [
          {
            signifier: 'gitmoji',
            use: 'Search for an emoji within the convention',
            notes: []
          },
        ]
      },
      {
        name: "Workflows",
        shortDescription: "Run multiple commands at once",
        version: "1.0.0",
        github: "Faeq-F/Quokka-Workflows-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "workflow",
        tags: ['automation', 'productivity', 'offline'],
        specialCommands: [
          {
            command: 'All Workflows',
            use: 'Display all workflows',
            notes: [
              'The first string in every list in the Workflows settings is also a special command',
              'The remaining strings in the lists are commands for the workflow to execute',
            ]
          },
        ],
        commandSignifiers: [
          {
            signifier: '|',
            use: 'Search for a workflow',
            notes: []
          },
        ]
      },
      {
        name: "Window Switch",
        shortDescription: "Switch between open windows on your desktop",
        version: "1.0.0",
        github: "Faeq-F/Quokka-WindowSwitch-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "panel-bottom-open",
        tags: ['system', 'utility', 'offline'],
        specialCommands: [
          {
            command: 'AllWindows',
            use: 'Display all open windows that can be switched to',
            notes: [
              'Not all windows may appear as some cannot be focused by the user',
            ]
          },
        ],
        commandSignifiers: [
          {
            signifier: '->',
            use: 'Search for open windows to switch to',
            notes: []
          },
        ]
      },
      {
        name: "Device Addresses",
        shortDescription: "Provides list items that show the device's IP & MAC addresses",
        version: "1.0.0",
        github: "Faeq-F/Quokka-DeviceAddresses-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "network",
        tags: ['system', 'network', 'utility', 'offline'],
        specialCommands: [
          {
            command: 'DeviceAddresses',
            use: 'Display all addresses for the device',
            notes: []
          },
          {
            command: 'IPaddresses',
            use: 'Display all IP addresses for the device',
            notes: []
          },
          {
            command: 'MACaddresses',
            use: 'Display all MAC addresses for the device',
            notes: []
          },
        ],
        commandSignifiers: []
      },
      {
        name: "Shell Command",
        shortDescription: "Allows you to run powershell commands from Quokka",
        version: "1.0.0",
        github: "Faeq-F/Quokka-ShellCommand-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "terminal",
        tags: ['system', 'utility', 'offline'],
        specialCommands: [],
        commandSignifiers: [
          {
            signifier: '>',
            use: 'Create an item to run a shell command',
            notes: [
              'Can use the admin flag',
            ]
          },
        ]
      },
      {
        name: "Unicode Character Lookup",
        shortDescription: "Allows you to copy Unicode characters to your clipboard",
        version: "1.0.0",
        github: "Faeq-F/Quokka-UnicodeCharacterLookup-Plugin",
        downloadUrl: "https://example.com/plugin1/download",
        author: "Faeq",
        authorUrl: "https://faeq-f.github.io",
        icon: "globe-2",
        tags: ['search', 'notes', 'productivity', 'online'],
        specialCommands: [],
        commandSignifiers: [
          {
            signifier: 'char',
            use: 'Search for a unicode character',
            notes: [
              'This is the only way to use the plugin',
            ]
          },
        ]
      },
    ],
    plannedPlugins: [
      {
        name: 'Color Space Convertor',
        inProgress: true
      },
      {
        name: 'Unit Convertor',
        inProgress: false
      },
      {
        name: 'Currency Convertor',
        inProgress: false
      },
      {
        name: 'Translator',
        inProgress: false
      },
      {
        name: 'Lorem Ipsum Generator',
        inProgress: false
      },
      {
        name: 'Emoji Lookup',
        inProgress: false
      },
      {
        name: 'Wikipedia Search',
        inProgress: false
      },
    ]
  }),
  actions: {
    getTopPlugins() {
      return this.pluginsList.slice(0, 9);
    },
    getSortedTags() {
      return this.tags.sort((first, second) => {
        if (first.label > second.label) return 1;
        else if (second.label > first.label) return -1;
        else return 0;
      })
    }
  },
});
