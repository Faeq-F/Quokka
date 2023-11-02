using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quokka.PluginArch
{
    public class FuzzySearch
    {

        /// <summary>

        /// Compute Levenshtein distance

        /// </summary>

        /// <param name="s">String 1</param>

        /// <param name="t">String 2</param>

        /// <returns>Distance between the two strings.

        /// The larger the number, the bigger the difference.

        /// </returns>

        public static int LD(string s, string t)
        {

            int n = s.Length;
            int m = t.Length;
            int[,] d = new int[n + 1, m + 1];

            // Verify arguments.
            if (n == 0)
            {
                return m;
            }

            if (m == 0)
            {
                return n;
            }

            // Initialize arrays.
            for (int i = 0; i <= n; d[i, 0] = i++)
            {
            }

            for (int j = 0; j <= m; d[0, j] = j++)
            {
            }

            // Begin looping.
            for (int i = 1; i <= n; i++)
            {
                for (int j = 1; j <= m; j++)
                {
                    // Compute cost.
                    int cost = t[j - 1] == s[i - 1] ? 0 : 1;
                    d[i, j] = Math.Min(
                    Math.Min(d[i - 1, j] + 1, d[i, j - 1] + 1),
                    d[i - 1, j - 1] + cost);
                }
            }
            // Return cost.
            return d[n, m];

        }

    }
}
