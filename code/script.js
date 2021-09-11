// All the DOM selectors stored as short variables

const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
const main = document.getElementById('main')

// The below const are containing wrapped HTML buttons and select tags. 

const btnSelectMain = `
  <button id='sushi' type='submit'>Sushi</button>
  <button id='pokebowl' type='submit'>Pokebowl</button>
  <button id='yakisoba' type='submit'>Yakisoba</button>
  `

const selectSushi = `
  <select name="sushi" id="select">
    <option value="" selected disabled>Please choose an option</option>
    <option value="9">Mixed 9 pcs</option>
    <option value="12">Mixed 12 pcs</option>
    <option value="16">Mixed 16 pcs</option>
  </select>
  `

const selectPokebowl = `
  <select name="pokebowl" id="select">
    <option value="" selected disabled>Please choose an option</option>
    <option value="salmon">Pokebowl salmon</option>
    <option value="schrimp">Pokebowl shrimp</option>
    <option value="tofu">Pokebowl tofu</option>
  </select>
  `

const selectYakisoba = `
  <select name="Yakisoba" id="select">
    <option value="" selected disabled>Please choose an option</option>
    <option value="salmon">Yakisoba salmon</option>
    <option value="pork">Yakisoba pork</option>
    <option value="tofu">Yakisoba tofu</option>
  </select>
  `
  const btnpayment = `
  <button id='card' type='submit'>Card</button>
  <button id='swish' type='submit'>Swish</button>
  `

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('user is sending')
    
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('bot is sending')

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

/* Interaction 1, initial greeting
 */

const greeting = () => {
  showMessage(`Hello and welcome to Migaro! What is your name?`, 'bot')
}

setTimeout(greeting, 1000) //the greeting function will be called one second after the website is loaded.

const handleNameInput = (event) => { //at submit this function will be invoked
  event.preventDefault() //prevents website refresh at submit

  const name = nameInput.value //input value will be stored in the const name
  console.log(name)

  showMessage(`My name is ${name}`, 'user') //users answer
  nameInput.value = '' //clearing name input setting it to an empty string
  
  setTimeout(() => foodOptions(btnSelectMain, name), 1000) //passing the arguments to foodOptions function with 1s delay
}  

// Interaction 2, Food options and select main

const foodOptions = (selectMain, name) => { 
  showMessage(`Nice to meet you ${name}! What are you craving today? See our options below.`, 'bot')
  form.innerHTML = selectMain
  document
  .getElementById('sushi')
  .addEventListener('click', () => {
    showMessage(`Sushi would make my day!`,'user')
    form.innerHTML = '' //remove selectMain from form
    setTimeout(() => selectFinalOption(selectSushi, 'Sushi'), 1000)
  })

  document
  .getElementById('pokebowl')
  .addEventListener('click', () => {
    showMessage(`I'll go with a Pokebowl!`,'user')
    form.innerHTML = ''
    setTimeout(() => selectFinalOption(selectPokebowl, 'Pokebowl'), 1000)
  })

  document
  .getElementById('yakisoba')
  .addEventListener('click', () => {
    showMessage(`I'm craving for Yakisoba!`,'user')
    form.innerHTML = ''
    setTimeout(() => selectFinalOption(selectYakisoba, 'Yakisoba'), 1000)
  })
}

// Interaction 3, Final choice

const selectFinalOption = (selectFood, foodName) => {
  showMessage(`Great choice! Our ${foodName} are very popular! Make your choice below.`,'bot')
  form.innerHTML = selectFood /*html*/
  const mainChoice = document.getElementById('select')
  mainChoice.addEventListener('change', (event) => { // listens to the change of select
    if (foodName === 'Sushi') {
      showMessage(`Ok, I'll have mixed ${event.target.value} pcs.`, 'user')
    } else if (foodName === 'Pokebowl') {
      showMessage(`Ok, I'll have a Pokebowl with ${event.target.value}.`, 'user')
    } else {
      showMessage(`Ok, I'll have a Yakisoba with ${event.target.value}.`, 'user')
    }
  
  form.innerHTML = ''
  setTimeout(() => paymentOption(), 1000)
  })
}

// Interaction 4 payment

const paymentOption = () => {
  showMessage('It will be delivered in 15 minutes. How would you like to pay?', 'bot')
  form.innerHTML = btnpayment
  document
  .getElementById('card')
  .addEventListener('click', () => {
  showMessage('I would like to pay by card.', 'user')
  form.innerHTML = ''
  setTimeout(() => paymentChoice('card'), 1000)
  })

  document
  .getElementById('swish')
  .addEventListener('click', () => {
  showMessage('I would like to pay by Swish.', 'user')
  form.innerHTML = ''
  setTimeout(() => paymentChoice('swish'), 1000)
  })
} 

const paymentChoice = (paymethod) => {
 if (paymethod === 'card') {
  showMessage('Please pay by card upon delivery.', 'bot')
 } else {
  showMessage('Please Swish to this number 123456789.', 'bot')
 }
 form.innerHTML = ''
 setTimeout(() => thankYou(), 3000)
}


// Interaction 5 Thank you
const thankYou = () => {
  main.innerHTML = '<h1 class="thankyou">Thank you for your order!</h1>' 
  main.style.backgroundColor = "#0026ff";
}


const handleFoodInput = (event) => {
  event.preventDefault()
}

// Set up your eventlisteners here

form.addEventListener('submit', handleNameInput)
