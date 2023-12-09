using System;
using System.Windows;
using System.Windows.Input;

namespace Quokka {
  /// <summary>
  /// Provides bindable properties and commands for the NotifyIcon. In this sample, the
  /// view model is assigned to the NotifyIcon in XAML. Alternatively, the startup routing
  /// in App.xaml.cs could have created this view model, and assigned it to the NotifyIcon.
  /// </summary>
  public class NotifyIconViewModel {
    /// <summary>
    /// Shows a window, if none is already open.
    /// </summary>

    public ICommand ShowWindowCommand {
      get {
        return new DelegateCommand(() => {
          Application.Current.MainWindow = new SearchWindow();
          Application.Current.MainWindow.Show();
        }, () => Application.Current.MainWindow == null);
      }
    }

    /// <summary>
    /// Hides the main window. This command is only enabled if a window is open.
    /// </summary>
    public ICommand HideWindowCommand {
      get {
        return new DelegateCommand(
          () => Application.Current.MainWindow.Close(), () => Application.Current.MainWindow != null);
      }
    }

    /// <summary>
    /// Shows the settings file
    /// </summary>

    public ICommand OpenSettingsFile {
      get {
        return new DelegateCommand(() => App.OpenSettingsFile());
      }
    }

    public ICommand OpenPlugBoard {
      get {
        return new DelegateCommand(() => App.OpenPlugBoard());
      }
    }


    /// <summary>
    /// Shuts down the application.
    /// </summary>
    public ICommand ExitApplicationCommand {
      get {
        return new DelegateCommand(() => Application.Current.Shutdown());
      }
    }
  }


  /// <summary>
  /// Simplistic delegate command for the demo.
  /// </summary>
  public class DelegateCommand : ICommand {

    public DelegateCommand(Action CommandAction) {
      this.CommandAction = CommandAction;
    }

    public DelegateCommand(Action CommandAction, Func<bool> CanExecuteFunc) {
      this.CommandAction = CommandAction;
      this.CanExecuteFunc = CanExecuteFunc;
    }

    public Action CommandAction { get; set; }
    public Func<bool>? CanExecuteFunc { get; set; }

    public void Execute(object? parameter) {
      CommandAction();
    }

    public bool CanExecute(object? parameter) {
      return CanExecuteFunc == null || CanExecuteFunc();
    }

    public event EventHandler? CanExecuteChanged {
      add { CommandManager.RequerySuggested += value; }
      remove { CommandManager.RequerySuggested -= value; }
    }
  }
}
