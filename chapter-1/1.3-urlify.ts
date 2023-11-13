const URLify = (str: string, length: number): string => {
  return str.trim().replace(/\s/g, '%20');
}

export {
  URLify
}