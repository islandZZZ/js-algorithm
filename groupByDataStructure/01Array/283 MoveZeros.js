/**
 * 要求原址操作，思路维持一个指针k, k永远指向i自身，或者当前数组第一个非0元素，保证[0,k)中所有元素为非0元素
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
    const len = nums.length
    if (len <= 1) return len
    let slow = 0, fast = 0
    while (fast < len) {
        if (nums[fast]) {
            slow !== fast && ([nums[slow], nums[fast]] = [nums[fast], nums[slow]])
            slow ++ 
        }
        fast ++ 
    }
}



