// This is the definition of a single node (a single clue).
class ListNode {
  data: any; // The data can be anything: a number, a string, etc.
  next: ListNode | null; // The reference to the next clue (node).

  constructor(data: any) {
    this.data = data; // Set the data of the node.
    this.next = null; // Start with the next reference as null (no direction to the next clue yet).
  }
}

// This is the linked list (the entire treasure map).
class LinkedList {
  head: ListNode | null; // The start of the list.

  constructor() {
    this.head = null; // There's no clue to start with, so the head is null.
  }

  // A method to add a new clue to the end of the list.
  append(data: any): void {
    if (this.head === null) {
      this.head = new ListNode(data); // If the list is empty, the new clue is the first clue.
    } else {
      let current = this.head; // Start at the beginning of the hunt.
      while (current.next !== null) {
        current = current.next; // Follow the clues until you reach the last one.
        // console.log(current);
        
      }
      current.next = new ListNode(data); // Add the new clue to the end of the hunt.
    }
  }
}

// Now let's use our LinkedList.
let treasureMap = new LinkedList(); // Create a new treasure hunt.
// console.log(treasureMap.head); // The head is null, because there are no clues yet.

treasureMap.append("Clue #1"); // Add the first clue.
// console.log(treasureMap.head); // The head is no longer null, because there's a clue now.
treasureMap.append("Clue #2"); // Add the second clue.
// console.log(treasureMap.head); // The head is still the same, because there are more clues now.
treasureMap.append("Clue #3"); // Add the third clue.
// console.log(treasureMap.head); // The head is still the same, because there are more clues now.
treasureMap.append("Clue #4"); // Add the fourth clue.
// console.log(treasureMap.head); // The head is still the same, because there are more clues now.
