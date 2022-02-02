// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const send = document.getElementById('send')

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
  showMessage(`Hello, what is your name?`, 'bot') // denna är kopplad till <p>message</p>
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {  
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''
  setTimeout(() => showDecade(name), 1000)
}

const showDecade = (name) => {
  showMessage(`Welcome ${name}, what decade do feel like today?`, 'bot');

  inputWrapper.innerHTML = `
    <button id="1980Btn">1980s</button>
    <button id="1990Btn">1990s</button>
    <button id="2000Btn">2000s</button>
  `

  // document.getElementById('1980Btn').addEventListener('click', () => nextQuestion('1980'))
  // document.getElementById('1990Btn').addEventListener('click', () => nextQuestion('1990'))
  // document.getElementById('2000Btn').addEventListener('click', () => nextQuestion('2000'))
}

// Set up your eventlisteners here. 

form.addEventListener('submit', handleNameInput);
 
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1200) 