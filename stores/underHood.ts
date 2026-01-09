import { defineStore } from "pinia";

export const useUnderTheHoodStore = defineStore("underTheHoodStore", {
  state: () => ({
    fs: [
      {
        label: 'Faeq-F/Quokka/',
        defaultExpanded: true,
        onSelect: (e: Event) => {
          e.preventDefault()
        },
        children: [
          {
            label: '.vs/',
            icon: 'i-lucide-folder'
          },
          {
            label: '.vscode/',
            icon: 'i-lucide-folder'
          },
          {
            label: 'Config/',
            defaultExpanded: false,
            onSelect: (e: Event) => {
              e.preventDefault()
            },
            children: [
              {
                label: 'Resources/',
                defaultExpanded: false,
                onSelect: (e: Event) => {
                  e.preventDefault()
                },
                children: [
                  {
                    label: 'AppFont.ttf',
                    icon: 'i-lucide-case-sensitive'
                  },
                  {
                    label: '** icons **',
                    icon: 'i-lucide-file-image'
                  },
                  {
                    label: '** licenses (for the above files) **',
                    icon: 'i-lucide-copyleft'
                  },
                ]
              },
              {
                label: 'settings.json',
                icon: 'i-lucide-file-sliders'
              },
            ]
          },
          {
            label: '** Plugin Submodule Repositories **',
            icon: 'i-lucide-folders'
          },
          {
            label: 'Quokka/',
            defaultExpanded: true,
            onSelect: (e: Event) => {
              e.preventDefault()
            },
            children: [
              {
                label: 'ListItems/',
                defaultExpanded: false,
                onSelect: (e: Event) => {
                  e.preventDefault()
                },
                children: [
                  {
                    label: 'ItemContextPane.cs',
                    icon: 'i-lucide-panel-top'
                  },
                  {
                    label: 'ListItem.cs',
                    icon: 'i-lucide-list'
                  },
                  {
                    label: 'LoadingListItem.cs',
                    icon: 'i-lucide-loader'
                  },
                  {
                    label: 'NoListItem.cs',
                    icon: 'i-lucide-list-x'
                  },
                ]
              },
              {
                label: 'PluginArch/',
                defaultExpanded: false,
                onSelect: (e: Event) => {
                  e.preventDefault()
                },
                children: [
                  {
                    label: 'AppPlugins.cs',
                    icon: 'i-lucide-plug-zap'
                  },
                  {
                    label: 'FuzzySearch.cs',
                    icon: 'i-lucide-text-search'
                  },
                  {
                    label: 'IconCache.cs',
                    icon: 'i-lucide-image'
                  },
                  {
                    label: 'Plugin.cs',
                    icon: 'i-lucide-blocks'
                  },
                  {
                    label: 'UiDispatcher.cs',
                    icon: 'i-lucide-route'
                  },
                ]
              },
              {
                label: 'SearchWindow/',
                defaultExpanded: false,
                onSelect: (e: Event) => {
                  e.preventDefault()
                },
                children: [
                  {
                    label: 'KeyDown.cs',
                    icon: 'i-lucide-square-arrow-down'
                  },
                  {
                    label: 'Scrollbar.xaml',
                    icon: 'i-lucide-mouse'
                  },
                  {
                    label: 'SearchWindow.xaml',
                    icon: 'i-lucide-search'
                  },
                  {
                    label: 'SearchWindow.xaml.cs',
                    icon: 'i-lucide-search'
                  },
                ]
              },
              {
                label: 'Settings/',
                defaultExpanded: false,
                onSelect: (e: Event) => {
                  e.preventDefault()
                },
                children: [
                  {
                    label: 'AppSettings.cs',
                    icon: 'i-lucide-cog'
                  },
                  {
                    label: 'SettingParsers.cs',
                    icon: 'i-lucide-cog'
                  },
                ]
              },
              {
                label: 'TheQuokkaPlugin/',
                defaultExpanded: false,
                onSelect: (e: Event) => {
                  e.preventDefault()
                },
                children: [
                  {
                    label: 'AboutQuokkaItem.cs',
                    icon: 'i-lucide-badge-info'
                  },
                  {
                    label: 'ContextPane.xaml',
                    icon: 'i-lucide-toolbox'
                  },
                  {
                    label: 'ContextPane.xaml.cs',
                    icon: 'i-lucide-toolbox'
                  },
                  {
                    label: 'Licences.xaml.cs',
                    icon: 'i-lucide-scale'
                  },
                  {
                    label: 'Licenses.xaml',
                    icon: 'i-lucide-scale'
                  },
                  {
                    label: 'Plugin_Quokka.cs',
                    icon: 'i-lucide-toy-brick'
                  },
                  {
                    label: 'SettingsFileWatcher.cs',
                    icon: 'i-lucide-scan-eye'
                  },
                  {
                    label: 'UpdateChecker.cs',
                    icon: 'i-lucide-refresh-cw'
                  },
                ]
              },
              {
                label: 'TrayTask/',
                defaultExpanded: false,
                onSelect: (e: Event) => {
                  e.preventDefault()
                },
                children: [
                  {
                    label: 'NotifyIconResources.xaml',
                    icon: 'i-lucide-panel-bottom'
                  },
                  {
                    label: 'NotifyIconViewModel.cs',
                    icon: 'i-lucide-panel-bottom-open'
                  },
                  {
                    label: 'TrayTask.cs',
                    icon: 'i-lucide-panel-bottom'
                  },
                ]
              },
              {
                label: 'App.config',
                icon: 'i-lucide-file-cog'
              },
              {
                label: 'App.xaml',
                icon: 'i-lucide-file-box'
              },
              {
                label: 'App.xaml.cs',
                icon: 'i-lucide-file-box'
              },
              {
                label: 'AssemblyInfo.cs',
                icon: 'i-lucide-file-cog'
              },
              {
                label: 'KeyboardHook.cs',
                icon: 'i-lucide-keyboard'
              },
              {
                label: 'Quokka.csproj',
                icon: 'i-lucide-square-kanban'
              },
              {
                label: 'Quokka.csproj.user',
                icon: 'i-lucide-file-sliders'
              },
              {
                label: 'app.manifest',
                icon: 'i-lucide-file-symlink'
              },
            ]
          },
          {
            label: 'Tests/',
            defaultExpanded: false,
            onSelect: (e: Event) => {
              e.preventDefault()
            },
            children: [
              {
                label: 'GlobalUsings.cs',
                icon: 'i-lucide-file-plus-corner'
              },
              {
                label: '** Test Files **',
                icon: 'i-lucide-test-tubes'
              },
              {
                label: 'Tests.csproj',
                icon: 'i-lucide-square-kanban'
              }
            ]
          },
          {
            label: '.editorconfig',
            icon: 'i-lucide-braces'
          },
          {
            label: '.gitignore',
            icon: 'i-lucide-eye-off'
          },
          {
            label: '.gitmodules',
            icon: 'i-lucide-component'
          },
          {
            label: 'BuildAndServeDocs.ps1',
            icon: 'i-lucide-form'
          },
          {
            label: 'BuildSolution.ps1',
            icon: 'i-lucide-hammer'
          },
          {
            label: 'Directory.Build.Props',
            icon: 'i-lucide-drill'
          },
          {
            label: 'IgnoredWords.txt',
            icon: 'i-lucide-whole-word'
          },
          {
            label: 'Version',
            icon: 'i-lucide-tag'
          },
          {
            label: 'Quokka.sln',
            icon: 'i-lucide-file-cog'
          }
        ]
      },
    ],
  }),
  actions: {
  },
});
