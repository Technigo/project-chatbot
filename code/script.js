// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input') //<-- användaren skriver sitt namn
const choiceModel = document.getElementById('choice-model') // 
const sendBtn = document.getElementById('send')

let = currentQuestion = 1

// const inputWrapper = document.getElemendbyId('input-wrapper') // <-- användaren väljer (modell/färg?)


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

// Questions

// Fråga 1. Vad heter du?
const greeting = () => {
  currentQuestion = 1
  showMessage(`Hello there, what's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

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

// Hälsar Hej username. 



// Vill du beställa en cykel, ja/nej?




// Model question - Which model would you like?
// const choiceModel = document.getElementById('choice-model').addEventListener('submit')


// Color question


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 800)
