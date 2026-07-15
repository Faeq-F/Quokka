using System;
using System.Windows;
using System.Windows.Threading;

namespace Quokka.PluginArch
{
  /// <summary>
  /// Provides methods to execute actions on the UI thread, ensuring thread safety.
  /// </summary>
  public static class UiDispatcher
  {
    /// <summary>
    /// Gets the Dispatcher associated with the current application.
    /// </summary>
    public static Dispatcher Dispatcher => Application.Current?.Dispatcher ?? Dispatcher.CurrentDispatcher;

    /// <summary>
    /// Schedules the provided action to run asynchronously on the UI thread.
    /// Useful to avoid blocking the caller thread.
    /// </summary>
    /// <param name="a">The action to execute asynchronously.</param>
    /// <param name="p">The priority at which to execute the action.</param>
    /// <returns>
    /// A <see cref="DispatcherOperation"/> representing the asynchronous operation.
    /// </returns>
    public static DispatcherOperation BeginInvoke(Action a, DispatcherPriority p = DispatcherPriority.Normal) => Dispatcher.BeginInvoke(a, p);

    /// <summary>
    /// Runs the provided function on the UI thread and returns its result.
    /// If already on the UI thread, the function executes directly.
    /// </summary>
    /// <typeparam name="T">The type of the return value.</typeparam>
    /// <param name="f">The function to execute.</param>
    /// <returns>
    /// The value returned by <paramref name="f"/>.
    /// </returns>
    public static T Invoke<T>(Func<T> f) => Dispatcher.Invoke(f);

  }
}
