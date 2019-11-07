/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let known = {};
    for (i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        // 慎用 diff in known，这样的写法会检查 known 原型链上所有属性值
        if (known.hasOwnProperty(diff)) {
            return [known[diff], i];
        } else {
            known[nums[i]] = i; 
        }
    }
};

