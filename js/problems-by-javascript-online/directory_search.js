// The name search takes a list of names and list of queries as parameters and returns the search result
// for each query. Possible search results are: not found, starts with, found.

function nameSearch (directory, queries) {
  const searchResults = []

  function search (name) {
    let resultOfquery = 'NOT FOUND'
    for (let i = 0; i < directory.length; i++) {
      if (directory[i] === name) {
        resultOfquery = 'FOUND'
        break
      }
      if (directory[i].startsWith(name)) {
        resultOfquery = 'STARTS WITH'
      }
    }
    searchResults.push(resultOfquery)
  }
  queries.forEach(search)
  console.log(searchResults)
  return searchResults
}
// example:
nameSearch([
  'jack',
  'jill',
  'annemarie',
  'anne'
], [
  'jack',
  '',
  'anne',
  'j',
  'joe'
])
