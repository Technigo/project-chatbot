// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')

// Global variables, if you need any, declared here

// Functions declared here

const botAnswer = (inputMessage) => {
  showMessage(inputMessage, 'bot')
}

const userAnswer = (inputMessage) => {
  showMessage(inputMessage, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    // Add a console log here and see when it's being logged and not :)

    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/paw-green.png" class="paw" alt="User" />  
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
  botAnswer(`Welcome to our salon! <br> What's your name?`)
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = nameInput.value
  userAnswer(name)
  nameInput.value = ''
  setTimeout(() => showPetTypes(name), 1000)
})



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded. Tried to changed to 2000
setTimeout(greeting, 2000)
