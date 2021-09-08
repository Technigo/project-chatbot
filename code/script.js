// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputForm = document.getElementById('input-form')
const textInput = document.getElementById('text-input')
// Global variables, if you need any, declared here

// Functions declared here

// The showMessage function will add a chat bubble in the correct place based on who the sender is. The showMessage function takes two arguments - the message, and the sender. You can pass any text as the message and either 'user' or 'bot' as the sender. Depending on which sender you choose, it'll build up some HTML and append it to the 'chat' div with a different image and class name.
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

// The Bot starts here
//The greeting function sends a message as the bot asking for your name.
const greeting = () => {
  showMessage(`Hello and welcome to Pretty Pets, What's the name of your furry friend?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const userInput = textInput.value
  showMessage(userInput, 'user')
  textInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => nameOfPet(userInput), 1000)
}

const nameOfPet = () => {
  showMessage(`Would you like to book an appointment or look at our treatments?`, 'bot')
}

// Set up your eventlisteners here
inputForm.addEventListener('submit', handleInput)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000) 
