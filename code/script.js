// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('user-input')
const submit = document.getElementById('send-btn')

// Global variables, if you need any, declared here
let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value=''
    setTimeout(() => typeOfFood(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showOptions(message), 1000)
  }
};

// Starts here
const greeting = () => {
  questionNumber = 1
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const typeOfFood = (msg) => {
  questionNumber++
  showMessage(`Nice to meet you ${msg}. What would you like to order?`, 'bot')
inputWrapper.innerHTML = 
  `<div>
    <button id="pizzaBtn">Pizza</button>
    <button id="sushiBtn">Sushi</button>
    <button id="soupBtn">Soup</button>
  </div>`

  document.getElementById('pizzaBtn').addEventListener('click', () => nextQuestion('pizza'))
  document.getElementById('sushiBtn').addEventListener('click', () => nextQuestion('sushi'))
  document.getElementById('soupBtn').addEventListener('click', () => nextQuestion('soup'))
  
} 

const showOptions = (type) => {
  questionNumber++

  showMessage(`What kind of ${type} would you like to order? `)
    if (type === 'pizza') {
        inputWrapper.innerHTML = 
        `<input type="checkbox" id="pizza" name="pizza" value="pizza">
        <label for="pizza">Pizza</label>
    `
    } else if (type === 'sushi') {
      inputWrapper.innerHTML =
      `<input type="checkbox" id="sushi" name="sushi" value="sushi">
      <label for="sushi">Sushi</label>`
    } 
      else {
        inputWrapper.innerHTML = 
      `<input type="checkbox" id="soup" name="soup" value="soup">
        <label for="soup">Soup</label>`
      }
}



// Set up your eventlisteners here
submit.addEventListener('click', (event) => {
  event.preventDefault()
  nextQuestion(input.value)
})
input.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
