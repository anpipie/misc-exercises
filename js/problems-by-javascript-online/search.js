// Given a sorted array of numbers search for a specific number.
// Function returns the index of the number, or if it is not in the array, the index where it would be.

function search (nums, n) {
  // Set start and end point for the search range
  let start = 0
  let end = nums.length - 1

  // Finish the search and return the index, if the number (n) is smaller than smallest value in the array, or
  // larger than largest value in the array.
  if (nums[0] > n) {
    return 0
  } else if (nums[end] < n) {
    return end + 1
  }

  while (start <= end) {
    // Index (ind) is set to the mid point the search range.
    const ind = Math.floor((start + end) / 2)

    // If number is between two values in the array, returns the index where it should be in the array.
    if (nums[ind + 1] > n && nums[ind] < n && nums[ind] !== n) {
      return ind + 1

    // Check if number (n) is larger or smaller than the value in array index (ind) and set the new start/end
    // point of the search range accordingly.
    } else if (nums[ind] < n) {
      start = ind + 1
    } else if (nums[ind] > n) {
      end = ind - 1

    // Returns index (ind) of the number (n)
    } else {
      return ind
    }
  }
  return ('search failed')
}

// examples
console.log(search([
  1,
  3,
  5,
  16
], 15))

console.log(search([
  1,
  3,
  5,
  16
], -1))

console.log(search([
  1,
  3,
  5,
  16
], 100))

// note: binary search, less than linear time
