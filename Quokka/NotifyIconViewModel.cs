using System;
using System.Windows;
using System.Windows.Input;

namespace Quokka {

  /// <summary>
  ///   Provides bindable properties and commands for the NotifyIcon.
  /// </summary>
  public class DelegateCommand : ICommand {

    /// <summary>
    ///   Creates a bindable command.
    /// </summary>
    /// <param name="CommandAction">
    ///   The instructions to execute.
    /// </param>
    public DelegateCommand(Action CommandAction) {
      this.CommandAction = CommandAction;
    }

    /// <summary>
    ///   Creates a bindable command, that can be disabled
    ///   and enabled.
    /// </summary>
    /// <param name="CommandAction">
    ///   The instructions to execute.
    /// </param>
    /// <param name="CanExecuteFunc">
    ///   The initial state of whether the instructions can
    ///   be executed.
    /// </param>
    public DelegateCommand(Action CommandAction, Func<bool> CanExecuteFunc) {
      this.CommandAction = CommandAction;
      this.CanExecuteFunc = CanExecuteFunc;
    }

    /// <inheritdoc />
    public event EventHandler? CanExecuteChanged {
      add { CommandManager.RequerySuggested += value; }
      remove { CommandManager.RequerySuggested -= value; }
    }

    private Func<bool>? CanExecuteFunc { get; set; }
    private Action CommandAction { get; set; }

    /// <inheritdoc />
    public bool CanExecute(object? parameter) {
      return CanExecuteFunc == null || CanExecuteFunc();
    }

    /// <inheritdoc />
    public void Execute(object? parameter) {
      CommandAction();
    }
  }

  /// <summary>
  ///   The View Model for the Notify Icon.
  /// </summary>
  public class NotifyIconViewModel {

    /// <summary>
    ///   Shutdown the application.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will call Application.Current.Shutdown.
    /// </returns>
    public static ICommand ExitApplicationCommand {
      get {
        return new DelegateCommand(() => Application.Current.Shutdown());
      }
    }

    /// <summary>
    ///   Closes the search window. This command is only
    ///   enabled if a search window is open.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will close the current
    ///   search window.
    /// </returns>
    public static ICommand CloseWindowCommand {
      get {
        return new DelegateCommand(
          () => Application.Current.MainWindow.Close(), () => Application.Current.MainWindow != null);
      }
    }

    /// <summary>
    ///   Opens the PlugBoard folder.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will open the PlugBoard
    ///   folder within Windows file explorer.
    /// </returns>
    public static ICommand OpenPlugBoard {
      get {
        return new DelegateCommand(() => App.OpenPlugBoard());
      }
    }

    /// <summary>
    ///   Opens the settings file.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will open the app settings
    ///   in notepad.
    /// </returns>
    public static ICommand OpenSettingsFile {
      get {
        return new DelegateCommand(() => App.OpenSettingsFile());
      }
    }

    /// <summary>
    ///   Opens a search window. This command is only
    ///   enabled if there isn't a window already open.
    /// </summary>
    /// <returns>
    ///   A DelegateCommand which will open a new search window.
    /// </returns>
    public static ICommand ShowWindowCommand {
      get {
        return new DelegateCommand(() => {
          Application.Current.MainWindow = new SearchWindow();
          Application.Current.MainWindow.Show();
        }, () => Application.Current.MainWindow == null);
      }
    }
  }
}