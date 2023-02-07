// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
const sendButton = document.getElementById('send');

const greetUser = () => {
  console.log("welcome you!");
  showMessage("Welcome to your experience, what's your name?", "bot");
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  // Just to check it out, change 'bot' to 'user' here 👆
};

const showMessage = (msg, sender) => {
  if (sender === 'user') {
    chat.innerHTML +=  `
    <section class="user-msg">
      <div class="bubble user-bubble">
        <p>${msg}</p>
      </div>
      <img src="assets/user.png" alt="user bot" />  
    </section>`;
  } else if (sender === 'bot') {
    chat.innerHTML +=  `
    <section class="bot-msg">
    <img src="assets/bot.png" alt="chat bot" /> 
      <div class="bubble bot-bubble">
        <p>${msg}</p>
      </div> 
    </section>`;
  }
 
};

setTimeout(greetUser, 500);
greetUser();




    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box



// Starts here







// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
