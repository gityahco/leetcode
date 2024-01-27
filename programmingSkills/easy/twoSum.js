function twoSum(nums, target) {
  let numMap = {}
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i]
    // console.log(`complement is ${complement}`) // Uncomment This to understand the algorithm
    if (complement in numMap) {
    //   console.log(`result is: ${[numMap[complement], i]}`) // Uncomment This to understand the algorithm
      return [numMap[complement], i]
    }
    numMap[nums[i]] = i
    // console.log(numMap) // Uncomment This to understand the algorithm
  }
}
const nums = [2, 7, 15, 11]
const target = 13
const result = twoSum(nums, target)
console.log(result)
