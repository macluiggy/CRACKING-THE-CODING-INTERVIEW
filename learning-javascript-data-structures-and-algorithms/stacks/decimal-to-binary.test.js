import { decimalToBinary } from "./decimal-to-binary";

// Test case 1: Positive decimal number
console.log(decimalToBinary(10)); // Expected output: "1010"

// Test case 2: Zero
console.log(decimalToBinary(0)); // Expected output: "0"

// Test case 3: Negative decimal number
console.log(decimalToBinary(-5)); // Expected output: "-101"

// Test case 4: Large decimal number
console.log(decimalToBinary(123456789)); // Expected output: "111010110111100110100010101"

// Test case 5: Decimal number with fractional part
console.log(decimalToBinary(3.14)); // Expected output: "11"

// Test case 6: Decimal number with repeating fractional part
console.log(decimalToBinary(1 / 3)); // Expected output: "0.01010101010101010101010101010101"