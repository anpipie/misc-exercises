
function romanToDecimal (roman) {
  const key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let decimal = 0
  const romanNumeral = roman.split('')
  for (let i = 0; i < romanNumeral.length; i++) {
    if (key[romanNumeral[i + 1]] > key[romanNumeral[i]]) {
      decimal = decimal - key[romanNumeral[i]]
    } else {
      decimal = decimal + key[romanNumeral[i]]
    }
  }
  return decimal
}
console.log(romanToDecimal('MMXVI'))
