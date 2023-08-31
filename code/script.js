// Variables that point to selected DOM elements
const chat = document.getElementById('chat')

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
    console.log("Hiya!")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/pizzaman.png" alt="Bot" />
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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Ciao, What's your name?", 'bot')
}

// Set up your eventlisteners here
const nameForm = document.getElementById('name-form');

nameForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('userName');
  const userName = nameInput.value;

  console.log('UserName:', 'user');

    nameInput.value = '';
});
nameForm.addEventListener('submit', function(event) {
event.preventDefault();

const nameInput = document.getElementById('name-input');
const userName = nameInput.value;

showMessage(userName, 'user');
nameInput.value = '';
});
setTimeout(greetUser, 1000);
