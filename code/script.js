// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

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

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000) 
