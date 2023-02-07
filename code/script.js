// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendButton = document.getElementById('.send-btn');


// If you need any global variables that you can use across different functions, declare them here:


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
  showMessage("Hi! What's your name?", 'bot');
}

setTimeout(greetUser, 1000);

const handleNameInput = () => {
  let name = nameInput.value
  showMessage(name, 'user');
}

addEventListener('submit', (event) => {
  event.preventDefault();
  handleNameInput();
  setTimeout(() => askNextQuestion(), 1000)
})

askNextQuestion() {
  setTimeout(() => showMessage(`Let's find you the perfect plant, ${nameInput.value}! `, 'bot'))
  inputWrapper.innerHTML=`
  <button id="yesBtn">Yes, let's go!</button>
  <button id="noBtn">No, I'm not ready for that commitment!</button>
  `
} 
