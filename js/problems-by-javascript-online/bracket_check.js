// Function takes string of brackets and checks if each bracket is properly opened and closed. Returns true or false.
function isValid (str) {
  const pair = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let areBracketsClosedProperly = true
  const listOfBrackets = str.split('')

  function hasEvenNumberOfItems (listToBeChecked) {
    return (listToBeChecked.length % 2 === 0)
  }

  function findPairs (listOfUnpairedBrackets) {
    areBracketsClosedProperly = hasEvenNumberOfItems(listOfUnpairedBrackets)

    // Search the pair (closedBracket) for the first bracket on the list
    while (areBracketsClosedProperly && listOfUnpairedBrackets.length > 0) {
      const openBracket = listOfUnpairedBrackets[0]
      let openBracketsFound = 1
      const closedBracket = pair[openBracket]
      let closedBracketsFound = 0

      for (let i = 1; i < listOfUnpairedBrackets.length; i++) {
        if (listOfUnpairedBrackets[i] === openBracket) {
          openBracketsFound++
        } else if (listOfUnpairedBrackets[i] === closedBracket) {
          closedBracketsFound++
          // Pair is found when even number of open and closed brackets has been found.
          // Pair is then removed from the list, and list is cut into two pieces: inside of the bracket pair and outside.
          // Finding pairs is continued within these pieces.
          if (closedBracketsFound === openBracketsFound) {
            findPairs(listOfUnpairedBrackets.slice(1, i))
            listOfUnpairedBrackets.splice(0, i + 1)
            findPairs(listOfUnpairedBrackets)
          }
        }
      }
      // If no pair (closedBracket) is found, the brackets cannot be closed properly.
      if (closedBracketsFound === 0 && listOfUnpairedBrackets.length !== 0) {
        areBracketsClosedProperly = false
      }
    }
  }

  findPairs(listOfBrackets)
  return areBracketsClosedProperly
}

// isValid('{[()[]]()}()')
// isValid('([])]')
// isValid('()[]{}([{}])')
// isValid('{(())()()(())[][]{')
console.log(isValid('{[()[]]()}()'))
