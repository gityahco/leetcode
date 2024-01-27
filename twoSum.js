function twoSum(nums, target) {
    let numMap = {}
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i]
        console.log(`complement is ${complement}`)
        if (complement in numMap) {
            console.log(`result is: ${[numMap[complement], i]}`)
            return [numMap[complement], i]
        }
        numMap[nums[i]] = i
        console.log(numMap)
    }
}
const nums = [2, 7, 15, 11];
const target = 13;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
