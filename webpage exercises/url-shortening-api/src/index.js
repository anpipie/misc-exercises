const main = function () {
  const menuButton = document.getElementById('menu-button')
  const submitButton = document.getElementById('submit-button')
  const url = 'https://rel.ink/api/links/'

  // hamburger menu open and close

  const operateMenu = function () {
    const expanded = menuButton.getAttribute('aria-expanded')
    const navigationMenu = document.querySelector('.navigation-links-container')
    if (expanded === 'false') {
      navigationMenu.style.visibility = 'visible'
      menuButton.setAttribute('aria-expanded', 'true')
    } else {
      navigationMenu.style.visibility = 'hidden'
      menuButton.setAttribute('aria-expanded', 'false')
    }
  }

  // tools for creating html elements

  const createDiv = function (className) {
    const newDiv = document.createElement('div')
    newDiv.classList.add(className)
    return newDiv
  }

  const createButton = function (className, text) {
    const newButton = document.createElement('button')
    newButton.classList.add(className)
    newButton.innerHTML = text
    return newButton
  }

  //  copy url to user clipboard

  const copyUrl = function (event) {
    const copyBtn = event.target
    const urlText = copyBtn.previousSibling.textContent
    console.log(urlText)
    const element = document.createElement('textarea')
    element.value = urlText
    element.setAttribute('readonly', '')
    element.style.position = 'absolute'
    element.style.left = '-9999px'
    document.body.appendChild(element)
    element.select()
    element.setSelectionRange(0, 99999)
    document.execCommand('copy')
    document.body.removeChild(element)
    copyBtn.classList.add('copied')
    copyBtn.innerHTML = 'Copied!'
  }

  // create card for showing shortened url

  const createShortUrlElement = function (longUrl, shortUrl) {
    const cardContainer = document.getElementById('urls-container')
    const newCard = createDiv('url-card')
    const newLongUrlDiv = createDiv('long-url-link')
    const newShortUrlDiv = createDiv('short-url-link')
    const hrElement = document.createElement('hr')
    const copyButton = createButton('url-copy-button', 'Copy')
    newLongUrlDiv.textContent = longUrl
    newShortUrlDiv.textContent = shortUrl
    cardContainer.appendChild(newCard)
    newCard.appendChild(newLongUrlDiv)
    newCard.appendChild(hrElement)
    newCard.appendChild(newShortUrlDiv)
    newCard.appendChild(copyButton)
    copyButton.addEventListener('click', (event) => copyUrl(event))
  }

  // Post data with fetch, returns response

  async function postData (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  }

  // get short url from API

  const getShortUrl = function (event) {
    event.preventDefault()
    const userInput = document.getElementById('url-input').value
    if (userInput === '') {
      document.getElementById('url-input').classList.add('error')
      document.getElementById('error-message').textContent = 'Please add a link'
    } else {
      postData(url, { 'url': userInput }).then((data) => {
        createShortUrlElement(userInput, 'https://rel.ink/' + data.hashid)
        document.forms['url-input-form'].reset() // clear form
        sessionStorage.setItem(userInput, 'https://rel.ink/' + data.hashid) // saves urls in session storage
      })
    }
  }

  // create url cards from session storage
  const initUrlCards = function () {
    console.log('init urls')
    const keys = Object.keys(sessionStorage)
    for (const longUrl of keys) {
      const shortUrl = sessionStorage.getItem(longUrl)
      createShortUrlElement(longUrl, shortUrl)
    }
  }

  initUrlCards()

  // Eventlisteners for buttons
  menuButton.addEventListener('click', () => operateMenu())
  submitButton.addEventListener('click', (event) => getShortUrl(event))
}

window.addEventListener('load', () => {
  main()
})
