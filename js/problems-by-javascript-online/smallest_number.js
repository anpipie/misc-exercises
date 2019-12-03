// Given the list of numbers, calculates the string representing the smallest possible number.
function minimumNumber (nums) {
  const smallestNumber = []

  function chooseBetter (a, b) {
    const aStr = a.toString()
    const bStr = b.toString()
    if (aStr + bStr < bStr + aStr) {
      return a
    } else {
      return b
    }
  }
  // setNumber function selects and adds a number to the smallestNumber
  function setNumber () {
    let numberCandidatesList = nums

    function compareNumbers () {
      const selectedNumbers = []
      for (let i = 0; i < numberCandidatesList.length; i = i + 2) {
        if (i === numberCandidatesList.length - 1) {
          selectedNumbers.push(numberCandidatesList[i])
        } else {
          selectedNumbers.push(chooseBetter(numberCandidatesList[i], numberCandidatesList[i + 1]))
        }
      }
      numberCandidatesList = selectedNumbers
    }

    // repeat the comparison of numbers until one number is left
    while (numberCandidatesList.length !== 1) {
      compareNumbers()
    }

    // add number to the smallestNumber list and remove that number from the original number list
    smallestNumber.push(numberCandidatesList[0])
    nums.splice(nums.indexOf(numberCandidatesList[0]), 1)
  }

  // clean 0s from the number list
  function removeZeros (value) {
    return value > 0
  }
  nums = nums.filter(removeZeros)

  // set numbers to smallestNumber list until no numbers are left in the original nums list
  while (nums.length > 0) {
    setNumber()
  }

  // return result as string
  if (smallestNumber.length === 0) {
    return '0'
  } else {
    const final = smallestNumber.toString().replace(/,/g, '')
    return final
  }
}
console.log(minimumNumber([
  1,
  2,
  12,
  21,
  0
]))

// minimumNumber([
//   1,
//   11,
//   111,
//   12,
//   121,
//   112,
//   122,
//   1111
// ])

console.log(minimumNumber([
  0,
  0,
  0
]))
