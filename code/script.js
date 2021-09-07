// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const input = document.getElementById('user-input')
const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here

const questionNumber = 1

// Functions declared here

let nextQuestion = (message) => {
  if (questionNumber === 1) {
    handleNameInput(message)
    input.value = ''
  }
  else if (questionNumber === 2){
    pizzaOption (message)
  }
}

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

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = () => {
const name = input.value
  console.log(name)
  showMessage(name, 'user')
  input.value = ''
  showMessage (`Hello, ${name}!`, 'bot')
}



// const pizzaOptions = () => {
//   questionNumber++
//   showMessage (`Which pizza would you like?`, 'bot')
//   inputWrapper.innerHTML =

//   const whatPizza = () => {
//     <button id="peperoni">peperoni</button>
//     <button id="funghi">funghi</button>
//     <button id="margharita">margharita</button>
//   }
// }



// Set up your eventlisteners here

form.addEventListener('submit', (event) => {
  event.preventDefault()
  handleNameInput()
})

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)