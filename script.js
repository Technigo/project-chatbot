// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input')
const form = document.getElementById('chat-form')
const send = document.getElementById('send')
const inputWrapper = document.getElementById('input-wrapper')
// const timeOutTime = 1500

// Global variables, if you need any, declared here

let questionNumber = 0
let inputFromUser = ''

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
  showMessage(`Nice to meet you ${inputFromUser}!`, 'bot') 
  setTimeout (() => {showMessage(`What kind of plants do you like?`, 'bot')

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
  }, 1000)
  }

const plantSelection = (plantChoice) => {
  questionNumber++
showMessage(`I prefer ${plantChoice}!`, 'user')
setTimeout (() => {showMessage(`Aha... ${plantChoice} you say.. Let's find out more!`, 'bot')

  if (plantChoice === 'flowers') {
    inputWrapper.innerHTML = `
    <button id="oneBig">One BIG flower 🌸</button>
    <button id="plentySmall">A bouquet 💐</button>
    `
  } else if (plantChoice === 'edibles') {
      inputWrapper.innerHTML = `
      <button id="sweet">I have sweet tooth 🍓</button>
      <button id="hot">I like it HOT 🔥</button>
      `
    } else if (plantChoice === 'thorny') {
      inputWrapper.innerHTML = `
      <button id="cactus">Low maintenance 🌵</button>
      <button id="rose">Something deceivingly beautiful 🌹</button>
      ` 
    }
  }
  , 1000)

  document.getElementById('oneBig')
  .addEventListener('click', () => lastChoice('oneBig'))
  document.getElementById('plentySmall')
  .addEventListener('click', () => lastChoice('plentySmall'))
  document.getElementById('sweet')
  .addEventListener('click', () => lastChoice('sweet'))
  document.getElementById('hot')
  .addEventListener('click', () => lastChoice('hot'))
  document.getElementById('cactus')
  .addEventListener('click', () => lastChoice('cactus'))
  document.getElementById('rose')
  .addEventListener('click', () => lastChoice('rose'))
  }



const handleInput = (event) => {
  event.preventDefault()
// setTimeout (() => 
  questionNumber++
    if (questionNumber === 1) {
      handleNameQuestion()
    } else if (questionNumber === 2) {
      handlePlantQuestion()   
    } else if (questionNumber === 3) {
      handlePlantChoice()
    }
  // }, timeOutTime)
}

const handleNameQuestion = () => {
  inputFromUser = userInput.value
  showMessage(`My name is ${inputFromUser}!`, 'user')
  userInput.value = ''
  setTimeout(whatPlant,1000)
}

const handlePlantQuestion = () => {
  inputFromUser = userInput.value  
  showMessage(`I prefer ${inputFromUser}!`, 'user')
  userInput.value = ''
  setTimeout(plantSelection, 1500)
}

const lastChoice = () => {
//fortsätt på if else för plantSelection/lastChoice
} 


// Set up your eventlisteners here

form.addEventListener('submit', handleInput)


// When website loaded, chatbot asks first question.
// setTimeout makes the greeting take 0.5 seconds to show after the page is loaded
setTimeout(greeting, 500)