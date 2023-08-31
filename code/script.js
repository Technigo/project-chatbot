// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const form = document.getElementById('name-form');
const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('name-input');

// If you need any global variables that you can use across different functions, declare them here:
let userAnswer = "";

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
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
const greeting = (name) => {
  showMessage("Welcome to the Icecream dream! What's your name?", 'bot')
}


  //Here you need to invoke the next function
const handleNameInput = event => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showUserMessage(`${userName}`, `user`);
    setTimeout(reply, 300);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = inputField.value;
  showMessage(userMessage, 'user');
  inputField.value = '';
  setTimeout(icecream, 300);
})

const icecream = userName => {
  showMessage(`Nice to meet you, ${userName}! What would you like to order today?`, 'bot');
 setTimeout(showMessage, 300);
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 300)
