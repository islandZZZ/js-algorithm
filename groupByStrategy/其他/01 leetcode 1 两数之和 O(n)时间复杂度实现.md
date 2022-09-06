# leetcode 1 两数之和 O(n)时间复杂度实现

~~~
描述：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]。
~~~
<br/>


~~~js
/**
 思路：
    map实现
    一个数为a,另一个数即为diff = sum - a
    如果map[diff]存在则满足条件
 */
var twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i]
        const diff = target - ele
        if (map[diff] !== undefined) {
            return [map[diff], i]
        }
        map[ele] = i
    }
}
~~~



