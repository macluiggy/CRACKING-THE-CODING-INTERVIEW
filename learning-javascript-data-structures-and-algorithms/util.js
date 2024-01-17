const defaultToString = (item) => {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString(); // {1}};
};
const defaultEquals = (a, b) => a === b;

export { defaultToString, defaultEquals };
