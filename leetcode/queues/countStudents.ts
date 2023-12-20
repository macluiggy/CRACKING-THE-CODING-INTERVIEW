import Queue from "./queue";

// function countStudents(students: number[], sandwiches: number[]): number {
//   let count = students.length;
//   while (count && students.length) {
//     for (let i = 0; i < students.length; i++) {
//       // st = [1, 1, 0, 0], sw = [0, 1, 0, 1])
//       const student = students[i];
//       if (student === sandwiches[0]) {
//         students.shift();
//         sandwiches.shift();
//         count = students.length;
//         break;
//       } else {
//         count--;
//         students.push(students.shift()!);
//         break;
//       }
//     }
//   }
//   return students.length;
// }
function countStudents(students: number[], sandwiches: number[]): number {
  let count = 0
  while (count !== students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
      count = 0
      continue
    } else {
      students.push(students.shift()!)
      count++
    }
  }
  return students.length;
}

export default countStudents;
