// DOM SELECTORS
const chat = document.getElementById("chat");
const button = document.getElementById("btn");
const form = document.getElementById('name-form')
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");

// GLOBAL VARIABLES
let currentQuestion = 1;

// FUNCTIONS:

// First Function showMessage: This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += 
    `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./Pictures/bill-chatbot.png" alt="User" />  
      </section>
    `
  } else if (sender === "bot") {
    chat.innerHTML += 
    `
      <section class="bot-msg">
        <img src="./Pictures/julieta-chatbot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight; // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
};

// Secind Function greeting: This function invokes ('calls') the first function, so when the function greeting is invoked, it invokes the first function.
const greeting = () => {
  showMessage(`Welcome to Flowerland! What's your name?`, "bot");
};
setTimeout(greeting, 1000);

// Third Function questions
const handleInput = (e) => {
  e.preventDefault();

  if (currentQuestion === 1) {
    //user answer
    let name = nameInput.value;
    showMessage(name, "user");
    nameInput.value = "";
    //bot answer after 2 seconds
    setTimeout(
      () =>
        showMessage(
          `What type of flowers would you like to order ${name}?`,
          "bot"
        ),
      2000
    );

    currentQuestion = 2;

  } else if (currentQuestion === 2) {
    let flower = nameInput.value;
    showMessage(flower, "user");
    nameInput.value = "";
    setTimeout(
      () => showMessage(`You have chosen ${flower}! Great choice!`, "bot"),
      2000)
    }
   
};

form.addEventListener('submit', handleInput);


