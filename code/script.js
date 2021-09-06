"use strict";
// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper")
// Global variables, if you need any, declared here

// Functions declared here

// This function gets information from the input-field with id name-input
// It then stops the browser from duing its default behavior (which is reloading the page)
// We create a variable called name and get the value from the input field
// Then we run the function showMessage() and put in the value from the input-field
const handleNameInput = (event) => {
  event.preventDefault()
    const name = nameInput.value
    console.log(name);
    showMessage(name, 'user');
    nameInput.value = ''

    setTimeout(() => showPlantOptions (name), 1000)
}

const showPlantOptions = (userName) => {
  showMessage(`Nice to meet you ${userName}! What kind of plants to you want help with?`, 'bot')

  inputWrapper.innerHTML = `
  <select id="dropdown">
    <option value="Monstera">Monstera</option>
    <option value="Monstera">Monstera</option>
    <option value="Monstera">Monstera</option>
  `
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

// Set up your eventlisteners here

// element.addEventListener(event, function, useCapture);
// document.getElementById('name-form').addEventListener("click", showMessage);
document.getElementById('submit').addEventListener("click", handleNameInput);


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
