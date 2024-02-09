import LinkedList, { ListNode } from "./linked-list";
const addlists = (list1: ListNode | null, list2: ListNode | null) => {
  let num1Arr = [];
  let current1 = list1;
  while (current1) {
    num1Arr.push(current1.value);
    current1 = current1.next;
  }
  let num2Arr = [];
  let current2 = list2;
  while (current2) {
    num2Arr.push(current2.value);
    current2 = current2.next;
  }
  num1Arr = num1Arr.reverse();
  num2Arr = num2Arr.reverse();
  let num1 = +num1Arr.reduce((acc, curr) => `${acc}${curr}`, "");
  let num2 = +num2Arr.reduce((acc, curr) => `${acc}${curr}`, "");
  let numSum = num1 + num2 + "";
  let numSumArr = numSum.split("");
  const numSumLinkedList = new LinkedList();
  for (let i = numSumArr.length - 1; i >= 0; i--) {
    const num = +numSumArr[i];
    numSumLinkedList.add(num);
  }
  return numSumLinkedList.getHead() as ListNode;
};

export default addlists;
