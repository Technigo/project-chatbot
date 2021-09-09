// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const input = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
const startButton = document.getElementById ('start-btn')

// Global variables, if you need any, declared here

let currentQuestion = 1

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

const handleInput = (event) => {     
  event.preventDefault()
  console.log(currentQuestion)
  if(currentQuestion === 1){
    handleNameQuestion()
  } else if(currentQuestion === 2){
    moodOption()
  } else if(currentQuestion === 3) {
    userMood()
  }
}


// Starts here
const greeting = () => {
  showMessage(`Hello there! What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameQuestion = () => {  
  currentQuestion = 1
  const name = input.value
    console.log(name)
    showMessage(name, 'user')
    input.value = ''
    showMessage (`Hello, ${name}! Lets talk.`, 'bot')
    setTimeout(moodOption, 1000)
    }

const moodOption =() => {
  currentQuestion = 2
  showMessage (`How are you feeling today?`, 'bot')
  setTimeout(userMood, 1000)

  
form.innerHTML = `
        <button id="happyBtn">Happy</button>
        <button id="anxiousBtn">Anxious</button>
        <button id="sadBtn">Sad</button>
  `

  document.getElementById('happyBtn')
  .addEventListener('click', () => userMood ('happy'))

  document.getElementById('anxiousBtn')
  .addEventListener('click', () => userMood ('anxious'))

  document.getElementById('sadBtn')
  .addEventListener('click', () => userMood ('sad'))
}

 const userMood = (option) => {
   currentQuestion = 3

if (option === 'happy') {
  showMessage(`I'm feeling happy!`, 'user')
  showMessage(`Glad to hear you are feeling happy`, 'bot')
} else if (option === 'anxious') {
  showMessage(`I'm feeling anxious`, 'user')
  showMessage(`Sorry to hear you are anxious`, 'bot')
} else if(option === 'sad') {
  showMessage(`I'm feeling sad`, 'user')
  showMessage(`Sorry to hear you are feeling sad`, 'bot')
}
}



// Set up your eventlisteners here

startButton.addEventListener('click', () => setTimeout (greeting, 500))
form.addEventListener('submit', handleInput)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


// setTimeout(greeting, 1000)