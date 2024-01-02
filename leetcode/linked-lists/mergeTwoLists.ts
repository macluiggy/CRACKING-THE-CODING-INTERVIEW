/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import ListNode from "./listNode";

// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   /**
//    * create undefined linked list (LK)
//    * iterate in a while loop until both list1.next and list2.next are null
//    * check between the current list 1 and 2 value and get it sorted, then
//    * for the first iteration check if the new linked list is undefined, if so, declare it as a new linked list
//    * add the first value of the list as the minor of the two in the current list 1 and 2 and the second value for the major
//    * reasign list 1 and 2 as its next value
//    */

//   let sortedList: ListNode | null = null;
//   while (list1 && list2) {
//     const valueList1 = list1.val;
//     const valueList2 = list2.val;
//     const [minor, major] =
//       valueList1 > valueList2
//         ? [valueList2, valueList1]
//         : [valueList1, valueList2];
//     if (!sortedList) {
//       sortedList = new ListNode(minor, new ListNode(major));
//       console.log(sortedList);
//     } else {
//       // sortedList.next = new ListNode(minor, new ListNode(major));
//       let lastNode = getLastElementOfList(sortedList)
//       lastNode!.next = new ListNode(minor, new ListNode(major));
//     }

//     list1 = list1.next;
//     list2 = list2.next;
//   }

//   return sortedList;
// }

// const getLastElementOfList = (list: ListNode | null): ListNode | null => {
//   if (!list) {
//     return null;
//   }

//   let lastNode = list;
//   while (lastNode.next) {
//     lastNode = lastNode.next;
//   }

//   return lastNode;
// };

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  /**
   * create undefined linked list (LK)
   * iterate in a while loop until both list1.next and list2.next are null
   * check between the current list 1 and 2 value and get it sorted, then
   * for the first iteration check if the new linked list is undefined, if so, declare it as a new linked list
   * add the first value of the list as the minor of the two in the current list 1 and 2 and the second value for the major
   * reasign list 1 and 2 as its next value
   */

  let head: ListNode | null = new ListNode();
  let current = head;
  while (list1 && list2) {
    console.log(JSON.stringify(head, null, 2));

    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;
  // console.log(head.next);
  return head.next;
}

// const getLastElementOfList = (list: ListNode | null): ListNode | null => {
//   if (!list) {
//     return null;
//   }

//   let lastNode = list;
//   while (lastNode.next) {
//     lastNode = lastNode.next;
//   }

//   return lastNode;
// };

export default mergeTwoLists;
