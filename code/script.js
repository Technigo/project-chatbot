// Variables that point to selected DOM elements
const chat = document.getElementById('chat')


// --------------------------------------------------------
// global variables that you can use across different functions, declare them here:



// -----------------------------------------------------
// functions

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {

  if (sender === 'user') {
    console.log("a user message")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("a bot message")
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
// ---------------------------------------
// Starts here

const greetUser = () => {
  // here we call the function showMessage
  showMessage("Welcome to dreamhoster.net, your service provider for professional hosting. What services are you interested in?", 'bot')
}
// ------------------------------------------
// eventlisteners



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
//  Fkt with () would mean execute right away, aber soll erst nach event ausgeführt werden
