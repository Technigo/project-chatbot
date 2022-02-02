// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputText = document.getElementById('name-input')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  console.log ('hi there')
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
    console.log ('what do you want?')
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
  showMessage(`Good day Sir/Ms, please type your name`, 'bot')

  // Just to check it out, change 'bot' to 'user' here 👆
}

// Function that listens to user input and showing it

const handleNameInput =  (event) => {
  event.preventDefault()
  const name = inputText.value
  showMessage(`My name is ${name}`, 'user')
  inputText.value = ''
  setTimeout(() => destination(), 1000)
}
const destination = () => {
  showMessage(`Type your destination here`, 'bot')
  
}


// Set up your eventlisteners here
  form.addEventListener('submit', handleNameInput)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
