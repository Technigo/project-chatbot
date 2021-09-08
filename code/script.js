// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const welcomeButton = document.getElementById('welcomeBtn')
const sendBtn = document.getElementsByClassName('send-btn')
const input = document.getElementById('input')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById("name-form");


// Global variables, if you need any, declared here

// Functions declared here

let questionNumber = 1
//botReply to show message at bot side
const botReply = (message) => {
  showMessage(message, 'bot')
}
//userReply to show message at bot side
const userReply = (message) => {
  showMessage(message, 'user')
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
 questionNumber = 0
  showMessage(`Hello there Beat Bot!`, 'user')
  setTimeout (() => botGreeting(), 1000)
}
//starts conversation with button
welcomeButton.onclick = function () {
  if (welcomeButton.style.display !== 'none') {
    welcomeButton.style.display = 'none'; {
      greeting(showMessage, 'user')
      }
    };
}
//
const botGreeting = () => {
  showMessage(`Hello there human, what's your name?`, 'bot')
  nextQuestion()
}


const nextQuestion = ()=>{
  console.log('questionNumber', questionNumber)
 if (questionNumber === 0){
    showMessage(botGreeting)
    input.value =''
    
    
  }
}

const handleNameInput = (event) => {
  event.preventDefault()
  
  const name = input.value
  showMessage(`My name is ${name}`, 'user')
  input.value = ''
  setTimeout(whatMood, 1000)
}

const whatMood = () => {
  questionNumber = 1
  showMessage(`Oh ${name} what mood are you in?`, 'bot')
}



// Set up your eventlisteners here

form.addEventListener('submit', handleNameInput)
sendBtn.addEventListener('click', () => nextQuestion(input.value))


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greeting, 1000)


