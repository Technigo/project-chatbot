// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById("input-wrapper")
const nameInput = document.getElementById("name-input")
const button = document.getElementById("button")

// Global variables
let questionNumber = 1

// Functions

// Function that adds a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log(message)
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
    console.log(message)
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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)
  
  if (questionNumber === 1) {
    userSay(`My name is ${userName}, nice to meet you!`)
    setTimeout(() => whatName(message), 1500)
  }
  else if (questionNumber === 2) {
    userSay(message)
    setTimeout(() => )
  }
 
}

// This function adds a delay to the askName function
// setTimeout(functionName, timeToWaitInMilliSeconds)
setTimeout(askName, 1200);


// This conditional is invoked if input is left empty

// Eventlisteners
