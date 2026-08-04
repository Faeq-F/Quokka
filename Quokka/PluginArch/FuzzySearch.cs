using FuzzySharp;
using FuzzySharp.Extractor;
using FuzzySharp.SimilarityRatio.Scorer;
using Quokka.ListItems;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Windows;

namespace Quokka.PluginArch
{

  /// <summary>
  /// Provides methods for performing fuzzy search and similarity sorting on collections of items.
  /// </summary>
  public static class FuzzySearch
  {

    /// <summary>
    /// Scores all <paramref name="possibleResults"/> against the <paramref name="query"/> and filters them by a similarity cutoff threshold.
    /// </summary>
    /// <param name="query">The user's query.</param>
    /// <param name="possibleResults">A collection of <see cref="ListItem"/>s representing the possible results.</param>
    /// <param name="cutoff">A threshold the possible result needs to score over (in similarity) in order to be included in the returned value. Defaults to <c>0</c>.</param>
    /// <returns>A collection of <see cref="ListItem"/>s matching the search criteria.</returns>
    public static Collection<ListItem> SearchAll(string query, Collection<ListItem> possibleResults, int cutoff = 0)
    {
      string[] stringifiedResults = possibleResults.Select(x => x.ToString()).ToArray();
      IEnumerable<ExtractedResult<string>> StringResults = Process.ExtractAll(query, stringifiedResults, scorer: (IRatioScorer)Application.Current.Resources["Scorer"], cutoff: cutoff);
      return new Collection<ListItem>(StringResults.Select(x => possibleResults[x.Index]).ToList());
    }

    /// <summary>
    /// Scores all <paramref name="possibleResults"/> against the <paramref name="query"/> and filters them by a similarity cutoff threshold.
    /// </summary>
    /// <param name="query">The user's query.</param>
    /// <param name="possibleResults">A collection of strings representing the possible results.</param>
    /// <param name="cutoff">A threshold the possible result needs to score over (in similarity) in order to be included in the returned value. Defaults to <c>0</c>.</param>
    /// <returns>A collection of <see cref="ExtractedResult{T}"/> instances containing the matched results and their similarity scores.</returns>
    public static Collection<ExtractedResult<string>> SearchAll(string query, Collection<string> possibleResults, int cutoff = 0)
    {
      return new Collection<ExtractedResult<string>>(
        Process.ExtractAll(query, possibleResults,
        scorer: (IRatioScorer)Application.Current.Resources["Scorer"], cutoff: cutoff).ToList());
    }

    /// <summary>
    /// Scores all <paramref name="possibleResults"/> against the <paramref name="query"/> and sorts them with the highest score first (ideally used after applying a cutoff with <see cref="SearchAll(string, Collection{ListItem}, int)"/>).
    /// </summary>
    /// <param name="query">The user's query.</param>
    /// <param name="possibleResults">A collection of <see cref="ListItem"/>s representing the possible results.</param>
    /// <returns>A collection of <see cref="ListItem"/>s sorted by similarity score in descending order.</returns>
    public static Collection<ListItem> Sort(string query, Collection<ListItem> possibleResults)
    {
      string[] stringifiedResults = possibleResults.Select(x => x.ToString()).ToArray();
      IEnumerable<ExtractedResult<string>> StringResults = Process.ExtractSorted(query, stringifiedResults, scorer: (IRatioScorer)Application.Current.Resources["Scorer"]);
      return new Collection<ListItem>(StringResults.Select(x => possibleResults[x.Index]).ToList());
    }

    /// <summary>
    /// Scores all <paramref name="possibleResults"/> against the <paramref name="query"/> and sorts them with the highest score first (ideally used after applying a cutoff with <see cref="SearchAll(string, Collection{string}, int)"/>).
    /// </summary>
    /// <param name="query">The user's query.</param>
    /// <param name="possibleResults">A collection of strings representing the possible results.</param>
    /// <returns>A collection of <see cref="ExtractedResult{T}"/> instances sorted by similarity score in descending order.</returns>
    public static Collection<ExtractedResult<string>> Sort(string query, Collection<string> possibleResults)
    {
      return new Collection<ExtractedResult<string>>(
        Process.ExtractSorted(query, possibleResults,
        scorer: (IRatioScorer)Application.Current.Resources["Scorer"]).ToList());
    }
  }
}
