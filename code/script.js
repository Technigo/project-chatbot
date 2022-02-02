// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input') // user writes her/his name
const form = document.getElementById('chat-form')
const sendBtn = document.getElementById('send') // Variable for first send-button
const inputWrapper = document.getElementById('input-wrapper') // user chooses model/color
let inputName = "" // variabel som sparar namnet globalt

// Global variables, if you need any, declared here
let questionNumber = 0

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

// Starting here. Introducing botQuestions
// Question 1. What's your name, user?
const greeting = () => {
  showMessage(`Hi and welcome to Bicycle Bot Shop, what's your name?`, 'bot')
}

// Bot greets the user, and asks if she/he wants to order a bike
const wantBike = (name) => {
  showMessage(`Nice to meet you ${name}!`, 'bot')
  setTimeout (() => {showMessage(`Would you like to order a bike?`, 'bot')

// YES or NO
inputWrapper.innerHTML = `
<button id="yes">Yes! 👍</button>
<button id="no">No! 👎</button>
`
  document.getElementById('yes').addEventListener('click', () => bikeSelection ('yes'))
  document.getElementById('no').addEventListener('click', () => bikeSelection ('no'))
}, 1200)
}

// Funcion if user wants bike or not
const bikeSelection = (response) => {
  questionNumber++
  showMessage(response, 'user')

// Continue function with conditionals
  setTimeout (() => {
  if (response === 'yes') {
    showMessage(`Happy to hear ${name}!`, 'bot') 
    setTimeout (() => {showMessage(`What kind of bike would you like?`, 'bot')
    
    inputWrapper.innerHTML = `
    <button id="mountainBike"> Mountainbike </button>
    <button id="ladyBike"> Ladybike </button>
    <button id="sportyBike"> Sportybike </button>
    `
    document.getElementById('mountainBike').addEventListener('click', () => modelSelection('mountainBike'))
    document.getElementById('ladyBike').addEventListener('click', () => modelSelection('ladyBike'))
    document.getElementById('sportyBike').addEventListener('click', () => modelSelection('sportyBike'))
  }, 1500)
  }

  } else {
      showMessage(`Okay, have a nice day`, 'bot')
      setTimeout (() => {location.reload()
        return false
      }, 2500)  
    }


// Pushes to the next question - our schedule
const handleInput = (event) => {
  event.preventDefault()
  questionNumber++
    if (questionNumber === 1) {
      handleNameQuestion() 
    } else if (questionNumber === 2) {
      setTimeout(XXXX, 800)
    } else if (questionNumber === 3) {
      setTimeout(XXXX, 800)
    } else if (questionNumber === 4) {
      setTimeout(XXXX, 800)
      }
    }



// Stores name in variable "name"
const handleNameQuestion = () => {
  const name = userInput.value
  showMessage(`My name is ${name}!`, 'user')
  inputWrapper.innerHTML = ``
  setTimeout (() => {wantBike(name)}, 1000)
}



// Set up your eventlisteners here
form.addEventListener('submit', handleInput)


// // Stores the input (name)
// const handleNameQuestion = () => {
//   const name = userInput.value
//   showMessage(`My name is ${name}!`, 'user')
//   inputWrapper.innerHTML = ``
//   setTimeout (() => {whatPlant(greeting)}, 1000)
// }


// Model question - Which model would you like?
// const choiceModel = document.getElementById('choice-model').addEventListener('submit')



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 800)
}