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
  // It first runs this message including the users first name
  showMessage(
    `Nice to meet you ${userName}! What kind of plants to you want help with?`,
    "bot"
  );
  // It then switches out the input-field for a dropdown containing three different plant choises
  // It also creates a restart-button where you can reset the chat and start over if you want to
  inputWrapper.innerHTML = `
  <select id="dropdown">
    <option value="Monstera">Monstera</option>
    <option value="Pilea">Pilea</option>
    <option value="Calathea">Calathea</option>
  </select>
  <button class="restart-button" onClick="resetChat()">Restart</button>`;
};

// This is a function which listens for a change in the dropdown
// and then uses the choice with a show message
const dropDownChoice = () => {
  // We create a element that gets the dropdown
  const dropdownElement = document.getElementById("dropdown");
  // if its null nothing will happen
  if (!dropdownElement) {
    return;
    // When the dropdown is generated this will happen
  } else {
    const plantChoice = document.getElementById("dropdown").value;
    // It shows the users plantChoice
    showMessage(plantChoice, "user");

    // and then it runs our botreply function
    setTimeout(() => botReply(plantChoice), 1000);
  }
};

// This is a function in which we let the bot answer the user after they have made a choice with the dropdown
const botReply = (chosenPlant) => {
  // This lets the bot get the users name from the nameInput variable
  let name = nameInput.value;
  // Then it runs the showMessage with the users name and the name of the chosen plant which it gets from the dropdown function
  showMessage(`Good choice, ${name}! You have choosen ${chosenPlant}.`, "bot");

  // Here is our conditional.
  if (chosenPlant === "Monstera") { // If the users choose Monstera, show this
    showMessage(
      `${chosenPlant} are really easy plants to look after and maintain, they like indirect sunlight and are hard to kill. For more info 
    I suggest you look at <a target="_blank" href='https://bloomscape.com/plant-care-guide/monstera-plant'/>This site </a>`,
      "bot"
    );
  } else if (chosenPlant === "Pilea") { // If the user choose Pilea, show this
    showMessage(
      `${chosenPlant} are Instagram favourites, and for good reason,  
    I suggest you look at <a href="https://bloomscape.com/plant-care-guide/pilea"/> This site</a> for care advice`,
      "bot"
    );
  } else if(chosenPlant === "Calathea") { // If none of the other two are chosen, show this
    showMessage(`${chosenPlant} can be tricky. They like to be misted and need moist soil. 
    For more advice, <a target="_blank" href="https://bloomscape.com/plant-care-guide/calathea/">see here</a>`,
      "bot");
  }

  // This prompts the user to pick another flower to know more about
  showMessage(
    `${name}, would you like more information about another flower?`,
    "bot"
  );
};

// This is a function that resets the chat
const resetChat = (name) => {
  // It replaces the dropdown with the regular input-field and button
  inputWrapper.innerHTML = `
  <form id="name-form">
    <input id="name-input" type="text" />
      <button class="send-btn" type="submit" id="submit">
          Send
      </button>
  </form>
  `;
  // This runs the greeting again
  setTimeout(greeting, 1000);
  // This gets the new input name from the input-field
  document.getElementById("submit").addEventListener("click", handleNameInput);
  // It puts it in the nameInput variable
  nameInput = document.getElementById("name-input");
  //This picks out the value of the innerHTML
  name = nameInput.value;
};

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
