// Tests if given strings are anagrams
function isAnagram (string1, string2) {
  function convertForComparison (stringToConvert) {
    return stringToConvert.toLowerCase().split('').sort().toString().replace(/\W|\s|_/g, '')
  }
  return convertForComparison(string1) === convertForComparison(string2)
}
console.log(isAnagram('Election results', 'Lies - Let\'s recount!'))
console.log(isAnagram('AAAABBBccd', 'AAAAbbbcd'))
