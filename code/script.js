// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')

// Global variables, if you need any, declared here

// Functions declared here

const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
  // clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''
// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.
setTimeout(() => showMessage(name), 1000)
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  console.log(sender)
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
  showMessage(`Hello, where's the party at?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
} 

const foodoption = () => {
  showMessage(`Do you want pizza or pasta?`, 'bot')

}

// Set up your eventlisteners here
nameForm.addEventListener('submit', handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)