const form = document.querySelector('#contact-form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phone-number')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')

const errMsg = document.querySelector('.error-message')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  if (typeof Number(firstName) === 'number' || typeof firstName !== 'string' || 
      typeof Number(lastName) === 'number' || typeof lastName !== 'string') {
    errMsg.textContent = 'bro your name must be a string not a number'
    return
  }
})