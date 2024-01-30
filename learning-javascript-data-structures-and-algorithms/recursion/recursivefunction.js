function recursiveFunction1(someParam) {
  recursiveFunction2(someParam);
}
function recursiveFunction2(someParam) {
  recursiveFunction1(someParam);
}

// recursiveFunction2()
function recursiveFunction(someParam) {
  recursiveFunction(someParam);
}

let i = 0;
function recursiveFn() {
  i++;
  recursiveFn();
}
try {
  recursiveFn();
} catch (ex) {
  console.log("i = " + i + " error: " + ex);
}
