/* Implement a very simple string-based, key-value database, whose only interface is string commands.
 There are only two commands: SET and GET. */

function run (script) {
  const result = []
  const database = {}

  function doSet (commandLine) {
    const commandAttributes = commandLine.slice(4)
    const attributesList = commandAttributes.split(' ')
    if (attributesList[0].search(/\W|_/) !== -1) {
      result.push('ERROR')
    } else {
      const key = attributesList[0]
      const value = commandAttributes.slice(commandAttributes.indexOf(key) + key.length + 1)
      if (Object.prototype.hasOwnProperty.call(database, key)) {
        if (database[key] === value) {
          result.push('UNCHANGED')
        } else {
          database[key] = value
          result.push('UPDATED')
        }
      } else {
        database[key] = value
        result.push('CREATED')
      }
    }
  }
  function doGet (commandLine) {
    const attributesList = commandLine.split(' ')
    if (attributesList.length !== 2) {
      result.push('ERROR')
    } else {
      if (Object.prototype.hasOwnProperty.call(database, attributesList[1])) {
        result.push('VALUE=' + database[attributesList[1]])
      } else {
        result.push('NOT FOUND')
      }
    }
  }
  function runCommand (commandLine) {
    if (commandLine.startsWith('SET ')) {
      doSet(commandLine)
    } else if (commandLine.startsWith('GET ')) {
      doGet(commandLine)
    } else {
      result.push('ERROR')
    }
  }
  script.forEach(runCommand)
  return result
}

console.log(run([
  'invalid command',
  'set key1 val1',
  'SET key_1 val1',
  'SET key1 val1',
  'GET key1 extra_stuff',
  'SET key1 val2',
  'SET key1 val2',
  'GET key1',
  'GET key2',
  'SET key2 val1 val2_=_val3',
  'GET key2',
  'GET key1'
]))
