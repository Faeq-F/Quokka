using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Input;

namespace Quokka.TrayTask
{

  /// <summary>
  ///   Provides bindable properties and commands for the NotifyIcon.
  /// </summary>
  public class DelegateCommand : ICommand
  {
    private readonly Action<object?> _commandAction;
    private readonly Func<object?, bool>? _canExecuteFunc;

    /// <summary>
    ///   Creates a bindable command.
    /// </summary>
    /// <param name="commandAction">The instructions to execute.</param>
    public DelegateCommand(Action commandAction)
    {
      ArgumentNullException.ThrowIfNull(commandAction);
      _commandAction = _ => commandAction();
    }

    /// <summary>
    ///   Creates a bindable command with parameter.
    /// </summary>
    /// <param name="commandAction">The instructions to execute with a parameter.</param>
    public DelegateCommand(Action<object?> commandAction)
    {
      ArgumentNullException.ThrowIfNull(commandAction);
      _commandAction = commandAction;
    }

    /// <summary>
    ///   Creates a bindable command that can be disabled and enabled.
    /// </summary>
    /// <param name="commandAction">The instructions to execute.</param>
    /// <param name="canExecuteFunc">The initial state of whether the instructions can be executed.</param>
    public DelegateCommand(Action commandAction, Func<bool> canExecuteFunc)
    {
      ArgumentNullException.ThrowIfNull(commandAction);
      ArgumentNullException.ThrowIfNull(canExecuteFunc);
      _commandAction = _ => commandAction();
      _canExecuteFunc = _ => canExecuteFunc();
    }

    /// <inheritdoc />
    public event EventHandler? CanExecuteChanged
    {
      add => CommandManager.RequerySuggested += value;
      remove => CommandManager.RequerySuggested -= value;
    }

    /// <inheritdoc />
    public bool CanExecute(object? parameter)
    {
      return _canExecuteFunc is null || _canExecuteFunc(parameter);
    }

    /// <inheritdoc />
    public void Execute(object? parameter)
    {
      _commandAction(parameter);
    }
  }

  /// <summary>
  ///   The View Model for the Notify Icon.
  /// </summary>
  public sealed class NotifyIconViewModel
  {
    /// <summary>
    ///   Initializes a new instance of the <see cref="NotifyIconViewModel"/> class.
    /// </summary>
    public NotifyIconViewModel() { }

    /// <summary>
    ///   Shutdown the application.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will call Application.Current.Shutdown.
    /// </returns>
    public static ICommand ExitApplicationCommand =>
      new DelegateCommand(Application.Current.Shutdown);

    /// <summary>
    /// Restart the application
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will start a new Quokka instance
    ///   and call Application.Current.Shutdown.
    /// </returns>
    public static ICommand RestartApplicationCommand =>
      new DelegateCommand(App.RestartApp);

    /// <summary>
    ///   Closes the search window. This command is only
    ///   enabled if a search window is open.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will close the current
    ///   search window.
    /// </returns>
    public static ICommand CloseWindowCommand =>
      new DelegateCommand(
        Application.Current.MainWindow.Close, () => Application.Current.MainWindow is not null);

    /// <summary>
    ///   Opens the PlugBoard folder.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will open the PlugBoard
    ///   folder within Windows file explorer.
    /// </returns>
    public static ICommand OpenPlugBoard =>
      new DelegateCommand(App.OpenPlugBoard);

    /// <summary>
    ///   Opens the settings file.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will open the app settings
    ///   in notepad.
    /// </returns>
    public static ICommand OpenSettingsFile =>
      new DelegateCommand(App.OpenSettingsFile);

    /// <summary>
    /// Gets the collection of loaded plugins for tray context menu rendering.
    /// </summary>
    public static IEnumerable<PluginModel> LoadedPluginModels
    {
      get
      {
        List<PluginModel> list = new();

        if (App.Plugins is not null)
        {
          foreach (PluginArch.Plugin p in App.Plugins)
          {
            if (p is TheQuokkaPlugin.PluginQuokka)
            {
              continue; // Exclude internal builtin plugin
            }

            string pluginFolder = "Plugin" + p.PluginName;
            string plugBoardDir = System.IO.Path.Combine(Environment.CurrentDirectory, "PlugBoard");

            PluginModel model = new()
            {
              Name = p.PluginName
            };
            model.SubMenuItems.Add(new PluginSubMenuItem
            {
              Header = "Open Plugin Folder",
              Command = OpenPluginFolderCommand,
              CommandParameter = pluginFolder
            });

            string pluginPath = System.IO.Path.Combine(plugBoardDir, pluginFolder, "Plugin", "settings.json");
            if (System.IO.File.Exists(pluginPath))
            {
              model.SubMenuItems.Add(new PluginSubMenuItem
              {
                Header = "Open Settings File",
                Command = OpenPluginSettingsFileCommand,
                CommandParameter = pluginFolder
              });
            }

            list.Add(model);
          }
        }
        return list;
      }
    }

    /// <summary>
    /// Opens the specified plugin directory.
    /// </summary>
    public static ICommand OpenPluginFolderCommand =>
      new DelegateCommand(param => App.OpenPluginFolder((string)param!));

    /// <summary>
    /// Opens the specified plugin settings file.
    /// </summary>
    public static ICommand OpenPluginSettingsFileCommand =>
      new DelegateCommand(param => App.OpenPluginSettingsFile((string)param!));

    /// <summary>
    /// Toggles the search window's visibility state.
    /// </summary>
    public static ICommand ToggleWindowCommand =>
      new DelegateCommand(_ =>
      {
        if (Application.Current.MainWindow is not null)
        {
          Application.Current.MainWindow.Close();
        }
        else
        {
          Application.Current.MainWindow = new SearchWindow();
          Application.Current.MainWindow.Show();
        }
      });
  }

  /// <summary>
  /// Represents a sub-menu item under a plugin item in the tray context menu.
  /// </summary>
  public class PluginSubMenuItem
  {
    /// <summary>
    /// Gets or sets the header text of the item.
    /// </summary>
    public string Header { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the command executed when the item is clicked.
    /// </summary>
    public ICommand? Command { get; set; }

    /// <summary>
    /// Gets or sets the parameter passed to the command.
    /// </summary>
    public object? CommandParameter { get; set; }
  }

  /// <summary>
  /// Represents a plugin item in the tray context menu.
  /// </summary>
  public class PluginModel
  {
    /// <summary>
    /// Gets or sets the name of the plugin.
    /// </summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// Gets the icon image source for the plugin item.
    /// </summary>
    public static System.Windows.Media.ImageSource? PluginIconSource =>
      PluginArch.IconCache.GetOrAdd(System.IO.Path.Combine(Environment.CurrentDirectory, "Config", "Resources", "plugin.png"));

    /// <summary>
    /// Gets the list of sub-menu items for this plugin.
    /// </summary>
    public System.Collections.ObjectModel.ObservableCollection<PluginSubMenuItem> SubMenuItems { get; } = new();
  }
}
