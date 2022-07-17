// function twoSum(numbers, target) {
//   // write code here
//   const len = numbers.length
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       console.log(i, j)
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1].sort()
//       }
//     }
//   }
// }
var twoSum = function (nums, target) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]]) {
      return [hash[target - nums[i]], i]
    }
    hash[nums[i]] = i
  }
  return []
}
console.log(twoSum([1, 2, 3, 4], 7))
