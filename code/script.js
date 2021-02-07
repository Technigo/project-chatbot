// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
let userAnswer = document.getElementById('name-input');
const nameForm = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');

// Global variables:

let currentQuestion = 0;

// Functions:

// A function to clear the textfield after submit
const clearInput = () => {
  const clearText = document.getElementById("name-form");
  clearText.reset();
}

// Increases the counter for the sake of knowing which answer belongs where
const increaseCounter = () => {
  currentQuestion = currentQuestion + 1
}


const showInput = () => {
  inputWrapper.innerHTML = `
    <input id="name-input" type="text"/>
      <button class="send-btn" type="submit">
        Send
      </button> 
    `
}

// The Y/N buttons
const yesNoButtons = () => {
  inputWrapper.innerHTML = `
    <div class="input-wrapper" id="input-wrapper">
      <form id="name-form">
        <button id="btn-yes" class="send-btn" type="submit">
          <i class="fas fa-thumbs-up"></i>
        </button>
        <button id="btn-no" class="send-btn" type="submit">
          <i class="fas fa-thumbs-down"></i>
        </button>
      </form>
    </div> 
    `
}

const number = () => {
  inputWrapper.innerHTML = `
    <div class="input-wrapper" id="input-wrapper">
        <form id="name-form">
          <input id="name-input" type="number"/>
          <button class="send-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    `
} 

// This function adds a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("Hej!")
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
    console.log(sender);
  }
  // Makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Greeting
const greeting = () => {
  showMessage(`Hello there, what's your name?`, 'bot');
}

// Eventlisteners here
nameForm.addEventListener("submit", (event)=> {
  event.preventDefault();
  

   // Assigns input value to variable
   const input = document.getElementById('name-input').value;
    if (currentQuestion === 0) {
      clearInput();
      showMessage(input, 'user');
      showMessage(`Hi ${input}, nice to meet you! I'm Bot and I'll be your waiter today. What do you feel like drinking?`, "bot");
      increaseCounter();
   } else if (currentQuestion === 1) {
      clearInput();
      showMessage(input, 'user');
      showMessage(`Nice! ${input} is a great choice! What do you feel like eating with that?`, "bot");
      increaseCounter();
   } else if (currentQuestion === 2) {
      clearInput();
      showMessage(input, 'user');
      showMessage('Yummy! How about something sweet, what would you like for dessert?', "bot");
      increaseCounter();
   } else if (currentQuestion === 3) {
      clearInput();
      showMessage(input, 'user');
      showMessage(`${input} sounds delicious - We are closing soon so I'll bring you the bill`, "bot");
      setTimeout(() => showMessage(`That'll be 800kr`, "bot"), 1000);
      setTimeout(() => {
      showMessage(`If you would like to tip please write the amount!`, "bot");
      increaseCounter();
    }, 2000);
     
   } else if (currentQuestion === 4) {
      clearInput();
      showMessage(input, 'user');

     // isNaN = is not a number, checks if its not numerical.
      if (isNaN(input)) {
        showMessage('Please enter a valid number', 'bot');
      } else if (+input < 50) {
        setTimeout(() => showMessage(`You are very cheap!`, "bot"), 1000);
        setTimeout(() => showMessage(`But hope to see you soon again!`, "bot"), 2000);
        yesNoButtons();
        setTimeout(() => showMessage(`Please take a moment to rate your visit:`, "bot"), 3000);
        increaseCounter();
      } else {
        yesNoButtons();
        setTimeout(() => showMessage(`Thank you, and hope to see you soon! Please take a moment to rate your visit:`, "bot"), 1000);
      }
    }
});

 
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500);