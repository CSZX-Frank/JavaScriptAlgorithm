/**
 * @param {string} s
 * @return {number}
 */
// 无重复最长子串
var lengthOfLongestSubstring = function(s) {
    // 滑窗法
    var n = s.length, ans = 0;
    var map = new Map();

    for (let j = 0, i = 0; j < n; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i);
        }
        ans = Math.max(ans, j-i+1);
        map.set(s.charAt(j), j+1);
    }
    return ans;
};
array.forEach(element => {
    
});