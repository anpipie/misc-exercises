// Function writes the numbers from 1 to n. Any multiplier of 3, the output is Fizz,
// multiplers of 5 the output is Buzz, and if they happen at the same time output is FizzBuzz.
// The output is a mixed array of numbers and strings.
function fizzbuzz (n) {
  const array = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz')
    } else if (i % 3 === 0) {
      array.push('Fizz')
    } else if (i % 5 === 0) {
      array.push('Buzz')
    } else {
      array.push(i)
    }
  }
  return array
}
// example:
console.log(fizzbuzz(20))
