const main = function () {
  const errorMessageElement = document.getElementById('error-message')
  const submitBtn = document.getElementById('submit-button')
  const userInput = document.getElementById('user-input')

  const isValidEmail = function (email) {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return validEmail.test(email)
  }

  submitBtn.addEventListener('click', (event) => {
    const userEmail = userInput.value
    if (!isValidEmail(userEmail) || (userEmail  === '')) {
    errorMessageElement.innerHTML = 'Please, provide a valid email.'
    userInput.className = 'error-background'
    event.preventDefault()
    }
  })
}
window.addEventListener('load', () => main())
