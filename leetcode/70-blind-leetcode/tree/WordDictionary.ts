class TrieNode {
  children: {
      [key: string]: TrieNode;
    } ;
  isEndWord: boolean;
  constructor() {
    this.children= {};
    this.isEndWord = false;
  }
}

class WordDictionary {
  private root: TrieNode | null = null;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let cur = this.root;
    for (let c of word) {
      if (!cur?.children[c]) {
        cur!.children[c] = new TrieNode()
      }
      cur = cur?.children[c] as TrieNode;
    }
    cur!.isEndWord = true;
  }

  search(word: string): boolean {
    const dfs = (j: number, root: TrieNode) => {
      let cur = root;
      for (let i = j; i < word.length; i++) {
        const c = word[i];
        if (c === ".") {
          for(let child of Object.values(cur.children)) {
            if (dfs(i+1, child)) return true;
          }
          return false
        } else {
          if (!cur.children[c]) return false;
          cur = cur.children[c]
        }
      }
      return cur.isEndWord;
    };

    return dfs(0, this.root as TrieNode)
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
