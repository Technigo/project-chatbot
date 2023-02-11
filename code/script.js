// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const userForm = document.getElementById('user-form');
const sendBtn = document.getElementById('send-btn');
const inputWrapper = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:
const botReply = (message) =>{
showMessage (message, 'bot')
}
const userReply = (message) =>{
  showMessage(message, 'user')
}


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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
}
greetUser();


const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value 
  showMessage(`My name is ${name}`, 'user');
  nameInput.value=''

  setTimeout( () => showMessage(`Hello ${name} ! What are you in the mood for today?`, 'bot'), 1000);
}


// Set up your eventlisteners here

userForm.addEventListener('submit', handleNameInput);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

