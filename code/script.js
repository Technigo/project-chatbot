// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const startButton = document.getElementById('start-btn') 
const form = document.getElementById('name-form')
const inputValue = document.getElementById('name-input')
const inputbuttons = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here
let currentQuestion = 1 


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

// Starts here
const greeting = () => {
  showMessage(`Waddup party peeps! What's yo name?`, 'bot')           // Beer bot
  // Just to check it out, change 'bot' to 'user' here 👆
}

const ageQuestion = () => {
  showMessage('How old are you?', 'bot')     //something about beer
}

const petQuestion = () => {
  showMessage('Do you have pets?', 'bot')     //something even more about beer
}

const handleInput = (event) => {
  event.preventDefault()
  
  

  if (currentQuestion === 1) {
    handleNameQuestion()
  } else if (currentQuestion === 2) {
    handleAgeQuestion()
  } else if (currentQuestion === 3) {
    handlePetQuestion()
  }
  
  currentQuestion++
}

const handleNameQuestion = () => {
  const name = inputValue.value

  showMessage(`My name is ${name}`, 'user')
  inputValue.value = ''

  setTimeout(ageQuestion, 1000) 
  setTimeout(inputbuttons, 2000)
}

const handleAgeQuestion = () => {
  const age = inputValue.value

  showMessage(`I am ${age} years young`, 'user')
  inputValue.value = ''

  setTimeout(petQuestion, 1000)
  
  inputbuttons.innerHTML = `
  <button id="Yes">Hell yea</button>
  <button id="No">No I'm a looser..</button>
  `
  
  document
  .getElementById('Yes')
  .addEventListener('click', () => currentQuestion('personality'))
  document
  .getElementById('No')
  .addEventListener('click', () => currentQuestion('looks'))
}

const handlePetQuestion = () => {

  //showMessage()
  
  
}

// Set up your eventlisteners here
form.addEventListener('submit', handleInput)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)


