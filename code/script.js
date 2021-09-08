// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const inputUser = document.getElementById('name-input')
const btn = document.getElementById('button')

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
   console.log(message, 'user')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('mordor', 'bot')
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
  showMessage(`Hello Hobbit, I'm Sarouman! What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = inputUser.value
  showMessage (name, 'user')
  inputUser.value = ''
  setTimeout(() => helpOptions(name), 1000)
    
});

const helpOptions = (message) => {
  showMessage(`Hi ${message}! Do you need help?`, 'bot')
  inputWrapper.innerHTML = `
  <section class="input-wrapper">
  <button id="yes">Yes</button>
  <button id="no">No</button>
  </section>
  `
  const yesbtn = document.getElementById('yes').addEventListener('submit')
  console.log('The click', yesbtn)
}




// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 900)
