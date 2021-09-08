// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('this is the user talking') //this is shown because we changed to 'user' in const greeting.
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>message</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    ` // at row 15 - when we removed the ${}/template literals the bot writes "message" since we no longer are calling the message-string.
  } else if (sender === 'bot') {
    console.log('this is the bot talking')//this is NOT showing because we changed to 'user' in const greeting.
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
  showMessage(`Hello there, What's your name?`, 'user')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
  // setTimeout(greeting, 1000)

// makes the greeting take 6 seconds to show after the page is loaded
// setTimeout(greeting, 6000)

// makes the greeting appear directly when the page is loaded
setTimeout(greeting)
