function isUnique (nums) {
  const set = new Set(nums)
  return nums.length === set.size
}
console.log(isUnique([
  6,
  2,
  44,
  12,
  96,
  0,
  -12,
  66
]))
