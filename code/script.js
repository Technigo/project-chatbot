// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const sendButton = document.getElementById('button')
const form = document.getElementById('name-form')
const userInput = document.getElementById('name-input')



// Global variables, if you need any, declared here
let questionNumber = 1 
// Functions declared here
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply= (msg) => {
  showMessage(msg, 'user')
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
   console.log(message, 'user')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('mordor', 'bot')
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
  showMessage(`Hello Hobbit, I'm Sarouman! What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = userInput.value
  showMessage (name, 'user')
  userInput.value = ''
  setTimeout(() => saroumanAsk(name), 1000)
});

 const saroumanAsk = (message) => {
   questionNumber++
  showMessage (`Nice to meet you ${message}. How can I help you?`, 'bot')
  userInput.value=''
  setTimeout(() => howAreYou (name), 1000)
 };

 const howAreYou = (message) => {
  questionNumber++
  showMessage(`Nice answer`, 'bot')
}

// form.addEventListener('submit', (event) => {
//   showMessage(name, 'user')
//   userInput.value = ''
//   setTimeout(() => howAreYou(name), 1000)
// });



// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
