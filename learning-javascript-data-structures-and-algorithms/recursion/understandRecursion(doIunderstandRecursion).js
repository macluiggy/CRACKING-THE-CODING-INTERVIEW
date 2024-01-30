function understandRecursion(doIunderstandRecursion) {
  const recursionAnswer = confirm("Do you understand recursion?");
  console.log(doIunderstandRecursion, recursionAnswer);
  if (recursionAnswer === true) {
    // base case or stop point
    return true;
  }
  understandRecursion(recursionAnswer); // recursive call
}

understandRecursion()