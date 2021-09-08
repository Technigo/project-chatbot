// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const userName = document.getElementById('name-input')
const sendBtn = document.getElementById('send-btn')
//const foodOptions = document.querySelector('.food-options')

// Global variables, if you need any, declared here
let currentQuestion = 1


 
// Functions declared here
const handelInput = (event) => {
  event.preventDefault()
  
  if (currentQuestion===1) {
  const userInput = userName.value
  userName.value = ""
  showMessage(userInput, 'user')
  setTimeout(() => {
    nextQuestion (userInput)
  }, 1000)
  } else if (currentQuestion === 2) {
    const userInput2= event.target.textContent
    showMessage(`${userInput2}`, 'user')
  }
  
}

const nextQuestion = (preAnswer) => {
  
  if (currentQuestion === 1) {
    showMessage(`Welcome ${preAnswer}! What are you craving for today?`, 'bot')
    userName.style.display = "none"
    sendBtn.style.display = "none"
    
    form.innerHTML += `

   <div class="food-options" id="optionBtn">
     <button id="optionBtn">Phad Thai</button>
    <button id="optionBtn">Paneng Curry</button>
    <button id="optionBtn">Tom Kha Gai</button>
    </div>
   `
    currentQuestion++
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
  showMessage(`Hello there!, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

form.addEventListener('submit', handelInput)

//foodOptions.addEventListener('click', handelInput)



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
