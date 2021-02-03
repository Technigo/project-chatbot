// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWraper = document.getElementById('input-wrapper')
let userName = ""

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


const handleResponse = () => {
  let userName = document.getElementById('name-input').value;
  showMessage(`Nice to meet you ${userName}! What is your mood today?`, 'bot')
  inputWraper.innerHTML = `
    <button id="option1">happy</button>
    <button id="option2">sad</button> 
 
  `
}

const yourMoodToday = () => {
  const options = document.getElementById('option1').value;
  showMessage(`Ok ${userName} I see that you are happy today`, 'bot')
}



// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  showMessage(value, 'user')
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  showMessage(value, 'bot')
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  setTimeout (() => handleResponse(value, 'bot'), 1000)
});



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
