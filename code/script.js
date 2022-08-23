// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

// If you need any global variables that you can use across different functions, declare them here:

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  chat.scrollTop = chat.scrollHeight;
}

// Test Sofia //

 const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber) 

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showHelpTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showDishSize(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}


// Starts here
const greeting = () => {
  questionNumber = 1
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  botReply("Hello there, What's your name?")
  // Just to check it out, change 'bot' to 'user' here 👆
}
const showHelpTypes = (msg) => {
  questionNumber++
  botReply(
    `Nice to meet you ${msg}. What do you need help with today?`
  ) 
inputWrapper.innerHTML = `
<button id="htmlBtn">Html</button>
<button id="cssBtn">Css</button>
<button id="jsBtn">Javascript</button>
`
document.getElementById('htmlBtn')
.addEventListener('click', () => nextQuestion('html'))
document.getElementById('cssBtn')
.addEventListener('click', () => nextQuestion('css'))
document.getElementById('saladBtn')
.addEventListener('click', () => nextQuestion('javascript'))


const showCodeMenu = (type) => {
  questionNumber++
  botReply(
    `Oh so you need help with ${type}? I understand its hard.`
  )

    if (type === 'html') {
      inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Select help tool ....</option>
        `
    }

}  
// Set up your eventlisteners here
sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
