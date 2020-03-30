/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // 双指针法
    if (nums.length < 4) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 3; i++) {
        // 若与已遍历过的数字相同，避免结果中出现重复的数组
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // 若当前循环的前四位数字已大于 target
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) { // 此处nums[i] + nums[i+1] + nums[i+2]每次i循环只用一次
            break;
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            // 若与已遍历过的数字相同，避免结果中出现重复的数组
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let left = j + 1,
                right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                }
                // 避免left和right重复，自加自减left和right
                if (sum <= target) {  // 此处若只是小于0，则上一句push可能会陷入死循环，并且此处必须另开一个if，否则也会陷入死循环
                    while (nums[left] === nums[++left]);
                } else {
                    while (nums[right] === nums[--right]);
                }
            }
        }
    }
    return result;
};


console.log(fourSum([1,0,-1,0,-2,2],0))


