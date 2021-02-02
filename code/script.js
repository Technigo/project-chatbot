// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here
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
  chat.scrollTop = chat.scrollHeight
}
// Functions declared here
const handleFoodInput = (event) => {
  event.preventDefault()
  inputWrapper.innerHTML = `
  <button id="Pizza-button">Pizza</button>
  <button id="Pasta-button">Pasta</button>
  <button id="Salad-button">Salad</button>
  `
  document
  .getElementById('Pizza-button')
  .addEventListener('click',() => {
   showMessage('I want pizza', 'user') 
  })

  document
  .getElementById('pasta-button')
  .addEventListener('click',() => {
   showMessage('I want pasta', 'user') 
  })

  document
  .getElementById('Salad-button')
  .addEventListener('click',() => {
   showMessage('I want Salad', 'user') 
  })
}

// This function will add a chat bubble in the correct place based on who the sender is

  
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
 


// Starts here
const greeting = () => {
  showMessage(`Hello there, What would you like to eat?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
