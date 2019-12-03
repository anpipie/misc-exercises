// NUMBER TO TEXT
// function numberToText writes any number between 1 and 999 999 in English.

function numberToText (n) {
  let text = ''
  const onesAsText = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const teensAsText = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tensAsText = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const numberList = n.toString().split('').map(Number)

  function writeTens (index) {
    if (numberList[index] === 1) {
      text = text + teensAsText[numberList[index + 1]]
    } else {
      if (numberList[index] > 0) {
        text = text + tensAsText[numberList[index]]
        if (numberList[index + 1] > 0) {
          text = text + '-' + onesAsText[numberList[index + 1]]
        }
      } else {
        if (numberList[index + 1] > 0) {
          text = text + onesAsText[numberList[index + 1]]
        }
      }
    }
  }

  function writeHundreds (index) {
    if (numberList[index] > 0) {
      text = text + onesAsText[numberList[index]] + ' hundred '
    }
  }

  function writeThousands () {
    if (numberList[0] > 0 || numberList[1] > 0 || numberList[2] > 0) {
      writeHundreds(0)
      writeTens(1)
      text = text + ' thousand '
    }
  }

  function prettyText () {
    let finalText = text.replace('  ', ' ')
    if (finalText.lastIndexOf(' ') === finalText.length - 1) {
      finalText = finalText.slice(0, -1)
    }
    return finalText
  }

  // Adds 0s in the begining of the numberList so it has 6 numbers. Example: 16 -> 000016.
  // This step is needed because writing the number to text is based on index
  // of each number in the numberList.
  while (numberList.length < 6) {
    numberList.unshift(0)
  }

  writeThousands()
  writeHundreds(3)
  writeTens(4)
  return prettyText()
}

// example: prints numbers 1 to 999 999
for (let i = 1; i < 1000000; i++) {
  console.log(i + ': ' + numberToText(i))
}
