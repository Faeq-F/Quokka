// Content mapping configuration
import ItemContextPane from '~/components/docsSections/underHood/itemContextPane.vue'
import App from '~/components/docsSections/underHood/app.vue'
import Quokka from '~/components/docsSections/underHood/quokka.vue'
import ListItem from '~/components/docsSections/underHood/listItem.vue'
import AppSettings from '~/components/docsSections/underHood/appSettings.vue'
import KeyDown from '~/components/docsSections/underHood/keyDown.vue'
import SearchWindow from '~/components/docsSections/underHood/searchWindow.vue'
import SearchWindowCs from '~/components/docsSections/underHood/searchWindowCs.vue'
import KeyboardHook from '~/components/docsSections/underHood/keyboardHook.vue'
import GlobalUsings from '~/components/docsSections/underHood/globalUsings.vue'
import BuildAndServeDocs from '~/components/docsSections/underHood/buildAndServeDocs.vue'
import BuildSolution from '~/components/docsSections/underHood/buildSolution.vue'
import QuokkaSln from '~/components/docsSections/underHood/quokkaSln.vue'
import AppFont from '~/components/docsSections/underHood/appFont.vue'
import SettingParsers from '~/components/docsSections/underHood/settingParsers.vue'

const contentMappings: Record<string, any> = {
  '.vs/': {
    description: 'Stores temporary caches and user-specific workspace settings for Microsoft Visual Studio (settings are set to maintain shared conventions).'
  },
  '.vscode/': {
    description: 'Stores user-specific workspace settings for Microsoft Visual Studio Code (settings are set to maintain shared conventions).'
  },
  'AppFont.ttf': {
    component: 'AppFont'
  },
  '** icons **': {
    description: 'Icons used by the application and some plugins.'
  },
  '** licenses (for the above files) **': {
    description: 'License copies for the content in this folder.'
  },
  'settings.json': {
    description: 'The primary settings file for personalizing the application.'
  },
  '** Plugin Submodule Repositories **': {
    description: 'Plugin repositories managed as Git submodules for the Quokka repository.'
  },
  'ItemContextPane.cs': {
    component: 'ItemContextPane'
  },
  'ListItem.cs': {
    component: 'ListItem'
  },
  'LoadingListItem.cs': {
    description: 'The list item that appears while waiting for results to load.'
  },
  'NoListItem.cs': {
    description: 'The list item that appears when there are no results for a query.'
  },
  'KeyDown.cs': {
    component: 'KeyDown'
  },
  'Scrollbar.xaml': {
    description: 'Contains the visual design and control templates for the application scrollbars.'
  },
  'SearchWindow.xaml': {
    component: 'SearchWindow'
  },
  'SearchWindow.xaml.cs': {
    component: 'SearchWindowCs'
  },
  'AppSettings.cs': {
    component: 'AppSettings'
  },
  'SettingParsers.cs': {
    component: 'SettingParsers'
  },
  'NotifyIconResources.xaml': {
    description: 'Defines the UI for the tray task and its context menu.'
  },
  'NotifyIconViewModel.cs': {
    description: 'Contains the View Model (bindable properties) for the tray task.'
  },
  'TrayTask.cs': {
    description: 'Contains the methods used for the different actions in the tray task context menu.'
  },
  'App.config': {
    description: 'Configurations for the runtime.'
  },
  'App.xaml': {
    description: 'The entry point for the app. Starts the application without opening a window, allowing it to run quietly in the system tray. It defines global configurations for animation styles, error handling and other resources.'
  },
  'App.xaml.cs': {
    component: 'App'
  },
  'AssemblyInfo.cs': {
    description: 'Defines the general information about, and defaults for, the assembly.'
  },
  'KeyboardHook.cs': {
    component: 'KeyboardHook'
  },
  'Quokka.csproj': {
    component: 'Quokka'
  },
  'Quokka.csproj.user': {
    description: 'Specifies the build actions and IDE contexts for the project files, ensuring XAML components are correctly compiled as UI pages and opened in the visual designer.'
  },
  'app.manifest': {
    description: 'Defines how the application interacts with Windows, for e.g. by including the User Account Control (UAC) execution levels, high DPI awareness, and OS compatibility settings.'
  },
  'GlobalUsings.cs': {
    component: 'GlobalUsings'
  },
  '** Test Files **': {
    description: 'Unit tests for the source code.'
  },
  'Tests.csproj': {
    description: 'The tests project file; defines the project metadata, the target frameworks, and the NuGet dependencies used by the MSBuild system to compile the application.'
  },
  '.editorconfig': {
    description: 'A configuration file enforcing consistent coding styles for everyone that works in the Quokka codebase.'
  },
  '.gitignore': {
    description: 'A Git configuration file containing the files and folders ignored by Git.'
  },
  '.gitmodules': {
    description: 'A Git configuration file containing every plugin as a Git submodule.'
  },
  'BuildAndServeDocs.ps1': {
    component: 'BuildAndServeDocs'
  },
  'BuildSolution.ps1': {
    component: 'BuildSolution'
  },
  'Directory.Build.Props': {
    description: 'Build settings for the project.'
  },
  'IgnoredWords.txt': {
    description: 'Words to ignore when Microsoft Visual Studio is spell checking the solution.'
  },
  'Version': {
    description: 'Contains the latest version number of the application available & its download link. It is used when the app checks for updates.'
  },
  'Quokka.sln': {
    component: 'QuokkaSln'
  }
}

const defaultContentItems = [
  'AppPlugins.cs', 'FuzzySearch.cs', 'IconCache.cs', 'Plugin.cs', 'UiDispatcher.cs',
  'AboutQuokkaItem.cs', 'ContextPane.xaml', 'ContextPane.xaml.cs', 'Licences.xaml.cs',
  'Licenses.xaml', 'Plugin_Quokka.cs', 'SettingsFileWatcher.cs', 'UpdateChecker.cs',
]

const componentMap: Record<string, any> = {
  ItemContextPane,
  App,
  Quokka,
  ListItem,
  AppSettings,
  KeyDown,
  SearchWindow,
  SearchWindowCs,
  KeyboardHook,
  GlobalUsings,
  BuildAndServeDocs,
  BuildSolution,
  QuokkaSln,
  AppFont,
  SettingParsers,
}

export { contentMappings, defaultContentItems, componentMap };