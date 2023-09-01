
// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const nameForm = document.getElementById('name-form');

// // If you need any global variables that you can use across different functions, declare them here:
let userName = '';

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  console.log("MESSAGE IS:", message);
  console.log("SENDER IS:", sender);
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message

  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight;
};

const greetUser = () => {
  showMessage("Hi! Welcome. What's your name?", 'bot');
};

setTimeout(greetUser, 1000);

const handleNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(`I'm ${userName}! Nice to meet you!`, 'user');
  setTimeout(reply, 1000);
};

nameForm.addEventListener("submit", handleNameInput);

function reply() {
  showMessage(`Are you hungry, ${userName}?`, 'bot');
}









// Starts here
// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:

// This means the greeting function will be called one second after the website is loaded.


// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.


