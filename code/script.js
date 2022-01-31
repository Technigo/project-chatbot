// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input') // user writes her/his name
const form = document.getElementById('chat-form')
const inputWrapper = document.getElementById('input-wrapper') // user chooses model/color


// Global variables, if you need any, declared here
let questionNumber = 0

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

// Starting here. Introducing botQuestions
// Question 1. What's your name, user?
const greeting = () => {
  showMessage(`Hi and welcome to Bicycle Bot Shop, what's your name?`, 'bot')
}

// Bot greets the user, and asks if she/he wants to order a bike
const whichBike = (name) => {
  showMessage(`Nice to meet you ${name}!`, 'bot')
  setTimeout (() => {showMessage(`Would you like to order a bike?`, 'bot')

// YES or NO
inputWrapper.innerHTML = `
<button id="yes">Yes! 👍</button>
<button id="no">No! 👎</button>
`

// User responds
document.getElementById('yes')
.addEventListener('click', () => colorSelection ('yes'))
document.getElementById('no')
.addEventListener('click', () => colorSelection('no'))
  }, 1500 )}

// Vill att användaren skriver i sitt namn
// Skapar en funktion som sparar username som ett value
// Sedan skickas användaren vidare till ny fråga
const textInput = (event) => { 
  event.preventDefault() // Prevents the page from refreshing
  const name = inputValue.value // Input from user gets stored in username
  showMessage(name, 'user') // Shows the msg the user typed in
  inputValue.value = '' // Clears form
  
  if (name === "") { // If no user name
    setTimeout (() => showMessage(`No name? Please try again.`, 'bot'), 1000)
  }
  
  else { // If user puts in name, continue
    setTimeout(() => showMessage(`Hey ${name}`, 'bot'), 1000) // Bot says hey to 'name'
  }
}


// Stores the user input (name) and sends it through to next bot answer, so that the bot can be more personal
const handleNameQuesion = () => {
  const name = userInput.value
  showMessage(`My name is ${name}!`, 'user')
  inputWrapper.innerHTML = ``
  setTimeout (() => {whichBike(name)},1000) // 1 sek until sending to which color
}



// Model question - Which model would you like?
// const choiceModel = document.getElementById('choice-model').addEventListener('submit')


// Set up your eventlisteners here
form.addEventlistener('submit', handleInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 800)
