function groupAnagrams(strs: string[]): string[][] {
    const map = new Map()

    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      const sortedStr = str.split('').sort().join('')
      const mapItem: any[] = map.get(sortedStr) || []
      mapItem.push(str)
      map.set(sortedStr, mapItem)
    }

    return Array.from(map.values())
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
