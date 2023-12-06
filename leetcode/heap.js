/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxValue = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <= nums.length; j++) {
            let value = (nums[i]-1)*(nums[j]-1)
            if (value > maxValue) {
                maxValue = value
            }
        }
    }
    return maxValue
};

// Path: leetcode/heap.js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxValue = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <= nums.length; j++) {
            let value = (nums[i]-1)*(nums[j]-1)
            if (value > maxValue) {
                maxValue = value
            }
        }
    }
    return maxValue
}

// Path: leetcode/heap.js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxValue = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <= nums.length; j++) {
            let value = (nums[i]-1)*(nums[j]-1)
            if (value > maxValue) {
                maxValue = value
            }
        }
    }
    return maxValue
}