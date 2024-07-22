// class Trie {
//   array: string[]
//   constructor() {
//     this.array = []
//   }

//   insert(word: string): void {
//     this.array.push(word);
//   }

//   search(word: string): boolean {
//     return Boolean(this.array.find((el) => el == word));
//   }

//   startsWith(prefix: string): boolean {
//     return this.array.some((word) => word.startsWith(prefix));
//   }
// }

class TrieNode {
  public isEnd = false;
  public children: Map<string, TrieNode> = new Map();
  constructor() {}
}

class Trie {
  private root: TrieNode | null = null;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node!.children.has(word[i])) {
        node!.children.set(word[i], new TrieNode());
      }
      node = node!.children.get(word[i]) as TrieNode;
    }
    node!.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.root;

    // console.log(JSON.stringify(this.root));

    for (let i = 0; i < word.length; i++) {
      if (!node!.children.has(word[i])) {
        return false;
      }
      node = node!.children.get(word[i]) as TrieNode;
    }
    return node!.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!node!.children.has(prefix[i])) {
        return false;
      }
      node = node!.children.get(prefix[i]) as TrieNode;
    }

    return true;
  }

  toString() {
    console.log(JSON.stringify(convertTrieNodeToObject(this.root), null, 2));
  }
}

const trie = new Trie();
function convertTrieNodeToObject(node: TrieNode | null): any {
  if (node === null) return null;
  const obj: any = {
    isEnd: node.isEnd,
    children: {},
  };
  node.children.forEach((childNode, key) => {
    obj.children[key] = convertTrieNodeToObject(childNode);
  });
  return obj;
}
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
trie.insert("ape");
// trie.insert("rew");
// trie.insert("assd");
// trie.insert("fdss");
trie.toString()
