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
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    ` 
  } else if (sender === 'bot') {
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

// Starts here, introducing Plot the plant bot
const greeting = () => {
  showMessage(`Hello there! I'm Plot, the plant bot. What's your name?`, 'bot')
}

const whatPlant = () => {
  showMessage(`Nice to meet you ${inputFromUser}!`, 'bot') 
  setTimeout (() => {showMessage(`What kind of plants do you like?`, 'bot')

    inputWrapper.innerHTML = `
    <button id="flowers">🌺</button>
    <button id="edibles">🌶</button>
    <button id="thorny">🌵</button>
  `
    document.getElementById('flowers')
    .addEventListener('click', () => plantSelection('flowers 🌺'))
    document.getElementById('edibles')
    .addEventListener('click', () => plantSelection('edibles 🌶'))
    document.getElementById('thorny')
    .addEventListener('click', () => plantSelection('thorny 🌵'))
  }, 1500)
  }

const plantSelection = (plantChoice) => {
  questionNumber++
  showMessage(`I prefer ${plantChoice}!`, 'user')
  const editedText = plantChoice.slice(0, -2) //removes the last two characters in the information sent through plantChoice.
  setTimeout (() => {showMessage(`Aha... ${editedText} you say.. let's find out more!`, 'bot')

    if (plantChoice === 'flowers 🌺') {
      inputWrapper.innerHTML = `
      <button id="oneBig">One BIG flower 🌸</button>
      <button id="plentySmall">A bouquet 💐</button>
      `
      document.getElementById('oneBig')
      .addEventListener('click', () => lastChoice('One BIG flower 🌸'))
      document.getElementById('plentySmall')
      .addEventListener('click', () => lastChoice('A bouquet 💐'))
    } else if (plantChoice === 'edibles 🌶') {
      inputWrapper.innerHTML = `
      <button id="sweet">I have sweet tooth 🍓</button>
      <button id="hot">I like it HOT 🔥</button>
      `
      document.getElementById('sweet')
      .addEventListener('click', () => lastChoice('I have sweet tooth 🍓'))
      document.getElementById('hot')
      .addEventListener('click', () => lastChoice('I like it HOT 🔥'))
    } else {
      inputWrapper.innerHTML = `
      <button id="cactus">Low maintenance 🌵</button>
      <button id="rose">Something deceivingly beautiful 🌹</button>
      ` 
      document.getElementById('cactus')
      .addEventListener('click', () => lastChoice('Low maintenance 🌵'))
      document.getElementById('rose')
      .addEventListener('click', () => lastChoice('Something deceivingly beautiful 🌹')) 
    }
  }, 1000)
  }

  const lastChoice = (finalChoice) => {
    questionNumber++
    showMessage(finalChoice, 'user')
    setTimeout (() => {
    if (finalChoice === 'One BIG flower 🌸') {
      showMessage(`Based on your`, 'bot')
    } else if (finalChoice === 'A bouquet 💐') {
      showMessage(`Based on your`, 'bot')
    } else if (finalChoice === 'I have sweet tooth 🍓') {
      showMessage(`Based on your`, 'bot')
    } else if (finalChoice === 'I like it HOT 🔥') {
      showMessage(`Based on your`, 'bot')
    } else if (finalChoice === 'Low maintenance 🌵') {
      showMessage(`You obviously `, 'bot')
    } else {
      showMessage(`Alright, a plant with a touch of poison for you my dear...`, 'bot')
      setTimeout (() => {showMessage(`Hmmm..`, 'bot')}, 1000)
      setTimeout (() => {showMessage(`I suggest a `, 'bot')}, 2000)
    }
    }, 1500)

     setTimeout (() => {inputWrapper.innerHTML =`
      <button id="yes">I'm happy with your choice!</button>
      <button id="no">Naah, try again!</button>`
      //  `
      // <input id="yes" type="radio" name="choice" value="yes" /> I'm happy with your choice!
      // <input id="no" type="radio" name="choice" value="no"/> Naah, try again!
      // <button class="send-btn" id="send" type="submit">Send</button>
      // `
      document.getElementById('yes')
      .addEventListener('click', () => playAgain(`I'm very satisfied with your expertise!`))
      document.getElementById('no')
      .addEventListener('click', () => playAgain(`It seems like you don't know me at all...`))
     }, 4500)
  }

    const playAgain = (happy) => {
    questionNumber++
    showMessage(happy, 'user')
    // trying out a different approach to the if/else statement
    happy === `I'm very satisfied with your expertise!` ? showMessage(`Perfect! Let's wrap it up in paper for you!`, 'bot') : showMessage(`I'm sorry to hear that... let's try again, then 😌`, 'bot')
  }



const handleInput = (event) => {
  event.preventDefault()
  questionNumber++
    if (questionNumber === 1) {
      handleNameQuestion()
    } else if (questionNumber === 2) {
      setTimeout(plantSelection, 1500)
    } else if (questionNumber === 3) {
      setTimeout(lastChoice, 1500)
    } else if (questionNumber === 4) { 
      setTimeout(playAgain, 1500) 
    } 
}

const handleNameQuestion = () => {
  inputFromUser = userInput.value // ska vi göra om till konstant, jag tror inte vi använder denna mer än 1 gång
  showMessage(`My name is ${inputFromUser}!`, 'user')
  inputWrapper.innerHTML = ``
  setTimeout(whatPlant,1000)
}

// Set up your eventlisteners here

form.addEventListener('submit', handleInput)


// When website loaded, chatbot asks first question.
// setTimeout makes the greeting take 0.5 seconds to show after the page is loaded
setTimeout(greeting, 500)