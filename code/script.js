// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
let userAnswer = document.getElementById('name-input');
const nameForm = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');

// Global variables, if you need any, declared here
let currentQuestion = 0;

// Functions declared here

const clearInput = () => {
  const clearText = document.getElementById("name-form");
  clearText.reset();
}

const increaseCounter = () => {
  currentQuestion = currentQuestion + 1
}

const yesNoButtons = () => {
inputWrapper.innerHTML = `
  <div class="input-wrapper" id="input-wrapper">
    <form id="name-form">
      <button class="send-btn" type="submit">
        YES
      </button>
      <button class="send-btn" type="submit">
        NO
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

// This function will add a chat bubble in the correct place based on who the sender is
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, what's your name?`, 'bot');
}


// Set up your eventlisteners here
nameForm.addEventListener("submit", (event)=> {
  event.preventDefault();
  
   // Assign input value to variable
   const value = document.getElementById('name-input').value;
  //  const inputWrapper = document.getElementById('input-wrapper').value;
     if (currentQuestion === 0) {
     clearInput();
     showMessage(value, 'user');
     showMessage(`Hi ${value}, nice to meet you! I'm Bot and I'll be your waiter today. What do you feel like drinking?`, "bot");
     increaseCounter();
   } else if (currentQuestion === 1) {
     clearInput();
     showMessage(value, 'user');
     showMessage(`Nice! ${value} is a great choice! What do you feel like eating with that?`, "bot");
     increaseCounter();
   } else if (currentQuestion === 2) {
     clearInput();
     showMessage(value, 'user');
     showMessage('Yummy! How about something sweet, what would you like for dessert?', "bot");
     increaseCounter();
   } else if (currentQuestion === 3) {
     clearInput();
     showMessage(value, 'user');
     showMessage(`${value} sounds delicious - can I get you the bill?`, "bot");
    //  yesNoButtons();
     increaseCounter();
   } else if (currentQuestion === 4) {
     clearInput();
     showMessage(value, 'user');
     showMessage(`That'll be 800kr`, "bot");
     showMessage(`If you would like to tip please write the amount!`, "bot");
     number();
     increaseCounter();
   } else if (currentQuestion === 5) {
     clearInput();
     showMessage(value, 'user');
     increaseCounter();
   } else if (currentQuestion === 6) {
     if (parseInt(value, 10) < 40) {
      showMessage(`You're very cheap!`, "bot");
     } else {
      showMessage(`Thank you and see you soon!`, "bot");
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

// Ternary - error messages
// Delay as if bot is thinking
// Nested if/else
// Buttons or similar?
// Summary?