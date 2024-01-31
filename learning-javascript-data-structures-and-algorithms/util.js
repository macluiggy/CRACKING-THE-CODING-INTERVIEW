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

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    // {1}
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};
const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]]);
function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}
export {
  defaultToString,
  defaultEquals,
  Compare,
  defaultCompare,
  BalanceFactor,
  swap,
  reverseCompare,
};
