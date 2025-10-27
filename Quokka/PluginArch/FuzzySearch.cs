using FuzzySharp;
using FuzzySharp.Extractor;
using FuzzySharp.SimilarityRatio;
using FuzzySharp.SimilarityRatio.Scorer.StrategySensitive;
using Quokka.ListItems;
using System.Collections.Generic;
using System.Linq;

namespace Quokka.PluginArch {

  /// <summary>
  ///   Contains methods for using Fuzzy Searching
  /// </summary>
  public class FuzzySearch {

    /// <summary>
    /// Scores all possibleResults
    /// </summary>
    /// <param name="query">The user's query</param>
    /// <param name="possibleResults">A list of what the user may be looking for</param>
    /// <param name="cutoff">A threshold the possible result needs to score over (in similarity) in order to be 
    /// included in the returned value</param>
    /// <returns>A list of ListItem which contains all the possible results</returns>
    public static IEnumerable<ListItem> searchAll(string query, List<ListItem> possibleResults, int cutoff = 0) {
      string[] stringifiedResults = possibleResults.Select(x => x.ToString()).ToArray();
      IEnumerable<ExtractedResult<string>> StringResults = Process.ExtractAll(query, stringifiedResults, scorer: ScorerCache.Get<PartialRatioScorer>(), cutoff: cutoff);
      return StringResults.Select(x => possibleResults[x.Index]);
    }

    /// <summary>
    /// Scores all possibleResults
    /// </summary>
    /// <param name="query">The user's query</param>
    /// <param name="possibleResults">A list of what the user may be looking for</param>
    /// <param name="cutoff">A threshold the possible result needs to score over (in similarity) in order to be 
    /// included in the returned value</param>
    /// <returns>A list of ExtractedResult which contains all the possible results with their corresponding score where higher is 
    /// more similar </returns>
    public static IEnumerable<ExtractedResult<string>> searchAll(string query, List<string> possibleResults, int cutoff = 0) {
      return Process.ExtractAll(query, possibleResults,
        scorer: ScorerCache.Get<PartialRatioScorer>(), cutoff: cutoff);
    }

    /// <summary>
    /// Scores all possibleResults and sorts them with the highest score first (ideally used after applying a cutoff with searchAll)
    /// </summary>
    /// <param name="query">The user's query</param>
    /// <param name="possibleResults">A list of what the user may be looking for</param>
    /// <returns>A list of ListItem which contains all the possible results, sorted with the highest score first </returns>
    public static IEnumerable<ListItem> sort(string query, List<ListItem> possibleResults) {
      string[] stringifiedResults = possibleResults.Select(x => x.ToString()).ToArray();
      IEnumerable<ExtractedResult<string>> StringResults = Process.ExtractSorted(query, stringifiedResults, scorer: ScorerCache.Get<PartialRatioScorer>());
      return StringResults.Select(x => possibleResults[x.Index]);
    }

    /// <summary>
    /// Scores all possibleResults and sorts them with the highest score first (ideally used after applying a cutoff with searchAll)
    /// </summary>
    /// <param name="query">The user's query</param>
    /// <param name="possibleResults">A list of what the user may be looking for</param>
    /// <returns>A list of ExtractedResult which contains all the possible results with their corresponding score where higher is 
    /// more similar. The list is sorted with the highest score first </returns>
    public static IEnumerable<ExtractedResult<string>> sort(string query, List<string> possibleResults) {
      return Process.ExtractSorted(query, possibleResults,
        scorer: ScorerCache.Get<PartialRatioScorer>());
    }
  }
}