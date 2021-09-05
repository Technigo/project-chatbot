// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');


// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
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

// Starts here
const greeting = () => {
  showMessage(`Welcome to the Time Bank, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
setTimeout(greeting, 500);
// Set up your eventlisteners here


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

const handleNameInput = (event) => {
  event.preventDefault();
  //read the input 
  const nameInput = document.getElementById("name-input");
  const name = nameInput.value;
  showMessage(name, 'user');  //print the name in screen 
  nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(() => showTimeOptions(name), 1000);
}

let sendButton = document.getElementById("sendName");
sendButton.addEventListener("click", handleNameInput);


function toggleVisible(className) {
  document.querySelector(`.${className}`).classList.toggle("invisible");
}

const showTimeOptions = (name) => {
  showMessage(`Hello ${name}! I'm happy you have found your way to the Time Bank, welcome! How much time do you need? 1 hour, 1 day or 1 week?`, 'bot');
  toggleVisible("question-name");
  toggleVisible("question-time");
}


// document
//   .getElementById('1h-Btn')
//   .addEventListener('click', () => nextQuestion('1h-payment'))
// document
//   .getElementById('1d-Btn')
//   .addEventListener('click', () => nextQuestion('1d-payment'))
// document
//   .getElementById('1d-Btn')
//   .addEventListener('click', () => nextQuestion('1w-payment'))
// }