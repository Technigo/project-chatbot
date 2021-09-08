"use strict";
// This gets the html-element with id chat and stores it in a variable called chat
const chat = document.getElementById("chat");
// This gets the html-element with id name-input and stores it in the nameInput variable
let nameInput = document.getElementById("name-input");
// This gets the html-element with id input-wrapper and stores it in the inputWrapper variable
const inputWrapper = document.getElementById("input-wrapper");

// This function gets information from the input-field with id name-input
// It then stops the browser from duing its default behavior (which is reloading the page)
// We create a variable called name and get the value from the variable we created for the input field
// Then we run the function showMessage() and put in the value from the input-field
const handleNameInput = (event) => {
  event.preventDefault();
  let name = nameInput.value;
  showMessage(name, "user");
  setTimeout(() => showPlantOptions(name), 1000); // This then runs our function which creates the dropdown
};

// This is a function which then greets the user with their first name
// It then switches out the input-field for a dropdown so that the user can pick a choice
const showPlantOptions = (userName) => {
  showMessage(
    `Nice to meet you ${userName}! What kind of plants to you want help with?`,
    "bot"
  );
  inputWrapper.innerHTML = `
  <select id="dropdown">
    <option value="Monstera">Monstera</option>
    <option value="Pilea">Pilea</option>
    <option value="Calathea">Calathea</option>
  </select>
  <button class="restart-button" onClick="resetChat()">Take me back to the start</button>`;
};

// This is a function which listens for a change in the dropdown
// and then uses the choice with a show message
const dropDownChoice = () => {
  const plantChoice = document.getElementById("dropdown").value;
  showMessage(plantChoice, "user");

  setTimeout(() => botReply(plantChoice), 1000);
};

const botReply = (chosenPlant) => {
  let name = nameInput.value;
  showMessage(`Good choice, ${name}! You have choosen ${chosenPlant}.`, "bot");

  if (chosenPlant === "Monstera") {
    showMessage(`Bla bla bla`, "bot");
  } else if (chosenPlant === "Pilea") {
    showMessage(`bla bla bla 2`, "bot");
  } else {
    showMessage(`bla bla bla 3`, "bot");
  }
  // inputWrapper.innerHTML =`
  // <form id="name-form">
  //   <input id="name-input" type="text" />
  //     <button class="send-btn" type="submit" id="submit">
  //         Send
  //     </button>
  // </form>
  // `
  showMessage(`${name}, would you like more information about another flower?`, 'bot')
};

const resetChat = () => {
  inputWrapper.innerHTML =`
  <form id="name-form">
    <input id="name-input" type="text" />
      <button class="send-btn" type="submit" id="submit">
          Send
      </button>
  </form>
  `
  nameInput.value = document.getElementById("submit").addEventListener("click", handleNameInput);
  setTimeout(greeting, 1000);
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    // if the user is defined as a 'user' the function will use this message
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    // if the user is defined as a 'bot' the function will use this message
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

// This is the start of our chat.
// This is a function that runs the showMessage() function with the first input
const greeting = () => {
  showMessage(`Hello there, What's your name?`, "bot");
};

// Set up your eventlisteners here

// element.addEventListener(event, function, useCapture);
// document.getElementById('name-form').addEventListener("click", showMessage);
document.getElementById("submit").addEventListener("click", handleNameInput);

// !!!! Add another eventlistener for the dropdown !!!!
document
  .getElementById("input-wrapper")
  .addEventListener("change", dropDownChoice);
// this is what makes the function called greeting run at pageload, it will run with a delay of 1000ms
setTimeout(greeting, 1000);
