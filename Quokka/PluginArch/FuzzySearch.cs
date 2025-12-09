using FuzzySharp;
using FuzzySharp.Extractor;
using FuzzySharp.SimilarityRatio;
using FuzzySharp.SimilarityRatio.Scorer.StrategySensitive;
using Quokka.ListItems;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;

namespace Quokka.PluginArch
{

  /// <summary>
  ///   Contains methods for using Fuzzy Searching
  /// </summary>
  public static class FuzzySearch
  {

    /// <summary>
    /// Scores all possibleResults
    /// </summary>
    /// <param name="query">The user's query</param>
    /// <param name="possibleResults">A Collection of what the user may be looking for</param>
    /// <param name="cutoff">A threshold the possible result needs to score over (in similarity) in order to be 
    /// included in the returned value</param>
    /// <returns>A Collection of ListItem which contains all the possible results</returns>
    public static Collection<ListItem> SearchAll(string query, Collection<ListItem> possibleResults, int cutoff = 0)
    {
      string[] stringifiedResults = possibleResults.Select(x => x.ToString()).ToArray();
      IEnumerable<ExtractedResult<string>> StringResults = Process.ExtractAll(query, stringifiedResults, scorer: ScorerCache.Get<PartialRatioScorer>(), cutoff: cutoff);
      return new Collection<ListItem>(StringResults.Select(x => possibleResults[x.Index]).ToList());
    }

    /// <summary>
    /// Scores all possibleResults
    /// </summary>
    /// <param name="query">The user's query</param>
    /// <param name="possibleResults">A Collection of what the user may be looking for</param>
    /// <param name="cutoff">A threshold the possible result needs to score over (in similarity) in order to be 
    /// included in the returned value</param>
    /// <returns>A Collection of ExtractedResult which contains all the possible results with their corresponding score where higher is 
    /// more similar </returns>
    public static Collection<ExtractedResult<string>> SearchAll(string query, Collection<string> possibleResults, int cutoff = 0)
    {
      return new Collection<ExtractedResult<string>>(
        Process.ExtractAll(query, possibleResults,
        scorer: ScorerCache.Get<PartialRatioScorer>(), cutoff: cutoff).ToList());
    }

    /// <summary>
    /// Scores all possibleResults and sorts them with the highest score first (ideally used after applying a cutoff with searchAll)
    /// </summary>
    /// <param name="query">The user's query</param>
    /// <param name="possibleResults">A Collection of what the user may be looking for</param>
    /// <returns>A Collection of ListItem which contains all the possible results, sorted with the highest score first </returns>
    public static Collection<ListItem> Sort(string query, Collection<ListItem> possibleResults)
    {
      string[] stringifiedResults = possibleResults.Select(x => x.ToString()).ToArray();
      IEnumerable<ExtractedResult<string>> StringResults = Process.ExtractSorted(query, stringifiedResults, scorer: ScorerCache.Get<PartialRatioScorer>());
      return new Collection<ListItem>(StringResults.Select(x => possibleResults[x.Index]).ToList());
    }

    /// <summary>
    /// Scores all possibleResults and sorts them with the highest score first (ideally used after applying a cutoff with searchAll)
    /// </summary>
    /// <param name="query">The user's query</param>
    /// <param name="possibleResults">A Collection of what the user may be looking for</param>
    /// <returns>A Collection of ExtractedResult which contains all the possible results with their corresponding score where higher is 
    /// more similar. The Collection is sorted with the highest score first </returns>
    public static Collection<ExtractedResult<string>> Sort(string query, Collection<string> possibleResults)
    {
      return new Collection<ExtractedResult<string>>(
        Process.ExtractSorted(query, possibleResults,
        scorer: ScorerCache.Get<PartialRatioScorer>()).ToList());
    }
  }
}
