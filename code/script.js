// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('inputWrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')


let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}
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
    //console.log('chatbot')
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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showEmojis(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}


// Starts here
const greeting = () => {
  showMessage(`Hi! How you doing?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const showEmojis = (msg) => {
  questionNumber++
  botReply(
    `I see. ${msg}. How would you rate your day?`
  )
  inputWrapper.innerHTML = `
    <button id="brilliantBtn">Brilliant</button>
    <button id="okBtn">OK</button>
    <button id="terribleBtn">Terrible</button>
  `

  document
    .getElementById('brilliantBtn')
    .addEventListener('click', () => nextQuestion('brilliant'))
  document
    .getElementById('okBtn')
    .addEventListener('click', () => nextQuestion('ok'))
  document
    .getElementById('terribleBtn')
    .addEventListener('click', () => nextQuestion('terrible'))
}


// Set up your eventlisteners here

const handleFeelingInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const feeling = feelingInput.value
  showMessage(feeling, 'user')
  feelingInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => showFoodOptions(feeling), 1000)
}


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
