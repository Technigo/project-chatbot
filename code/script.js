// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')

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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
document.getElementById('name-form').onsubmit = event => {
  event.preventDefault();
  showMessage(nameInput.value, 'user');
  nameInput.value ='';
  questionFlow();
  // call function to move through questions
}

// ------- PSEUDOCODE ------- //

// Define our variables
const inputWrapper = document.getElementById('input-wrapper');
let questionCounter = 0;

// declare function to move through questions that is called from event listeners
// obs naming a function should decribe what it is doing. ex 'messageHandler" or 'messageDelivery'
  // update questionCounter to keep track of what question comes next
  // move through questionnaire based on which question we're on usung if else statement
    // if questionCounter === 1 {
      // call first question function
    // } else if... {
      // call next question function
    // }

const questionFlow = () => {
  questionCounter++;
  if (questionCounter === 1) {
    setTimeout(question1, 1000);
  } else if (questionCounter === 2) {
    setTimeout(question2, 1000);
  }
}

// Question-function structure
  // display bot-message here (add set-timeout?)
  // html form input type (i.e. how to answer)
  // show answer
  // continue in question flow

  // Question 1
const question1 = () => {
  
  showMessage(`First  question with two buttons`, 'bot');

  inputWrapper.innerHTML = `
    <button id="coffee-btn">coffee</button>
    <button id="tea-btn">tea</button>
    `
  const coffeeButton = document.getElementById('coffee-btn');
  const teaButton = document.getElementById('tea-btn');
  
  coffeeButton.addEventListener("click", () => {
    showMessage(document.getElementById('coffee-btn').innerText, 'user');
    questionFlow();
  });
  teaButton.addEventListener("click", () => {
    showMessage(document.getElementById('tea-btn').innerText, 'user');
    questionFlow();
  });
}

// Question 2
const question2 = () => {
  showMessage(`Second question with a text answer`, 'bot');
  inputWrapper.innerHTML = `
    <input id="second-input" type="text" />
    <button id="second-btn">Send</button>
  `
  const secondInput = document.getElementById('second-input');
  document.getElementById('second-btn').addEventListener("click", () => {
    showMessage(secondInput.value, 'user');
    secondInput.value ='';
    questionFlow();
  });
}

// Question 3 function
  // repeat above structure

// Question 4 function
  // repeat above structure

// ...

// End message


setTimeout(greeting, 1000)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.