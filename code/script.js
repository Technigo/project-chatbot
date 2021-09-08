// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('this is the user talking') //this NOT is shown because we changed to 'user' in const greeting.
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    ` 
  } else if (sender === 'bot') {
    console.log('this is the bot talking')//this is showing because we changed to 'user' in const greeting.
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

// Starts here, introducing Plot the plant bot
const greeting = () => {
  showMessage(`Hello there! I'm Plot, the plant bot. What's your name?`, 'bot')
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// setTimeout makes the greeting take 0.5 seconds to show after the page is loaded
setTimeout(greeting, 500)