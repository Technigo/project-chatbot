// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const inputValue = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')


// Global variables, if you need any, declared here

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
      </section>`
  } 



  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello sweetie, who's there?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const textInput = (event) => {
  event.preventDefault()
  const name = inputValue.value  
  showMessage(name, 'user') 
  inputValue.value = '' 

  if (name === ""){
    setTimeout(() => showMessage(`Give me your name.`, 'bot'), 1000)
  }
  else{
    setTimeout(() => showMessage(`Hey ${name}!`, 'bot'), 1000)
    
  }
}


// Set up your eventlisteners here
nameForm.addEventListener('submit', textInput)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
