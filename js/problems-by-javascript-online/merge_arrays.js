// Merges two sorted arrays into one sorted array without using build-in array sort methods

function merge (arr1, arr2) {
  function func (value) {
    for (let i = 0; i < arr1.length; i++) {
      if (value < arr1[i]) {
        arr1.splice(i, 0, value)
        break
      }
      if (i === arr1.length - 1) {
        arr1.push(value)
        console.log(arr1)
        break
      }
    }
  }

  if (arr1.length === 0 || arr2.length === 0) {
    return arr1.concat(arr2)
  }

  arr2.forEach(func)
  console.log(arr1)
  return arr1
}
