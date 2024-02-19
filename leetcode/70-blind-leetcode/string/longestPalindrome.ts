function longestPalindromeDP(s: string): string {
  const n = s.length;
  let longestPal = '';
  const dp = Array(n).fill(false).map(() => Array(n).fill(false));

  for (let len = 1; len <= n; len++) { // iterate over all possible lengths
    for (let i = 0; i <= n - len; i++) { // iterate over all possible start indices
      const j = i + len - 1; // end index

      if (len === 1) {
        dp[i][j] = true; // single character is always a palindrome
      } else if (len === 2) {
        dp[i][j] = (s[i] === s[j]); // two characters are a palindrome if they are the same
      } else {
        dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]); // for lengths > 2, check if the outer characters are the same and the inner substring is a palindrome
      }

      if (dp[i][j] && len > longestPal.length) {
        longestPal = s.substring(i, j + 1);
      }
    }
  }

  return longestPal;
}


function longestPalindrome(s: string): string {
  let substrings = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      substrings.push(s.slice(i, j));
    }
  }
  let palindromes = substrings.filter(isPalindrome);
  let longestPalindrome = findLongestString(palindromes);
  return longestPalindrome;
}

const isPalindrome = (s: string) => s === s.split("").reverse().join("");
function findLongestString(arr: string[]): string {
  return arr.reduce((max, str) => (str.length > max.length ? str : max), "");
}

console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"));  // Output: "bab"