function recursiveFunction1(someParam) {
  recursiveFunction2(someParam);
}
function recursiveFunction2(someParam) {
  recursiveFunction1(someParam);
}

// recursiveFunction2()