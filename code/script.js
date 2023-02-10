// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const input = document.getElementById('name-input') //trying to figure this out
const form = document.getElementById('name-form')
const submit = document.getElementById('submit')
const inputWrapper = document.getElementById('input-wrapper')

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("User is saying something")
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
    console.log("Bot is asking something")
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

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi pretty, what's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleInput = (event) => { // when submiting this will be used
  event.preventDefault() // prevents chat from refreshing when submitting
  const message = input.value // input value shall be stored in the const name 
  showMessage(`${message}`, 'user') // users answer 
  input.value = ''
  setTimeout(() => question1(message), 500)
}

const question1 = (message) => {
  showMessage(`Nice to meet you ${message}! How are you feeling today?`, 'bot')
}

// Set up your eventlisteners here

form.addEventListener('submit', handleInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);


