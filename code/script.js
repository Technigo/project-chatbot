// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input')
const form = document.getElementById('chat-form')
const send = document.getElementById('send')
const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here

let questionNumber = 0


// Functions declared here



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('this is the user talking') //this NOT is shown because we changed to 'user' in const greeting.
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    ` 
  } else if (sender === 'bot') {
    console.log('this is the bot talking')//this is showing because we changed to 'user' in const greeting.
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

// if (questionNumber === 1) {



// Starts here, introducing Plot the plant bot
const greeting = () => {
  showMessage(`Hello there! I'm Plot, the plant bot. What's your name?`, 'bot')
}
  
// const favColor = () => {
//   showMessage(`What is your favourite color?`, 'bot')
// }

const whatPlant = () => {
  showMessage(`Nice to meet you!`, 'bot') 
  showMessage(`What kind of plants do you like?`, 'bot')

    inputWrapper.innerHTML = `
    <button id="flowers">🌺</button>
    <button id="edibles">🌶</button>
    <button id="thorny">🌵</button>
  `

    document.getElementById('flowers')
    .addEventListener('click', () => plantSelection('flowers'))
    document.getElementById('edibles')
    .addEventListener('click', () => plantSelection('edibles'))
    document.getElementById('thorny')
    .addEventListener('click', () => plantSelection('thorny'))
}

const plantSelection = (choice) => {
  questionNumber++


  if (choice === 'flowers') {
    inputWrapper.innerHTML = `
    <button id="oneBig">One BIG flower 🌸</button>
    <button id="plentySmall">A bouquet 💐</button>
    `
  } else if (choice === 'edibles') {
      inputWrapper.innerHTML = `
      <button id="sweet">I have sweet tooth 🍓</button>
      <button id="hot">I like it HOT 🔥</button>
      `
    } else if (choice === 'thorny') {
      inputWrapper.innerHTML = `
      <button id="cactus">Low maintenance 🌵</button>
      <button id="rose">Something deceivingly beautiful 🌹</button>
      ` 
    }
  }

const handleInput = (event) => {
  event.preventDefault()
  questionNumber++
    if (questionNumber === 1) {
      handleNameQuestion()
    } else if (questionNumber === 2) {
      handlePlantQuestion()   
    }
}

const handleNameQuestion = () => {
  const name = userInput.value
  showMessage(`My name is ${name}!`, 'user')
  userInput.value = ''
  setTimeout(whatPlant, 1000)
}

const handlePlantQuestion = () => {
  const color = userInput.value
  showMessage(`My favourite color is ${color}!`, 'user')
  userInput.value = ''
  setTimeout(1000)
}

// Set up your eventlisteners here

form.addEventListener('submit', handleInput)


// When website loaded, chatbot asks first question.
// setTimeout makes the greeting take 0.5 seconds to show after the page is loaded
setTimeout(greeting, 500)