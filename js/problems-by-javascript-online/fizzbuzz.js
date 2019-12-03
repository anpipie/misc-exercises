// Your function should write the numbers from 1 to n with a twist; instead of any multiplier of 3, you output Fizz,
// instead of multiplers of 5 you output Buzz, and if they happen at the same time, you should use FizzBuzz.
// The output of your function should be a mixed array of numbers and strings.
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
