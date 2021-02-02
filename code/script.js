// Import scripts
import * as input from "./scripts/elementInputs.js";
import Hero from "./scripts/hero.js";
import Encounter from "./scripts/encounter.js";

// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");

// Global variables, if you need any, declared here
let currentInput = "none";
// Instantiate encounter and hero with default values to be filled by user settings
let encounter = new Encounter(true);
let player = new Hero(encounter);

// Functions declared here
// This function replaces the userInput with a new element
const changeInput = (type) => {
  switch (type) {
    case "name":
      userInput.innerHTML = input.name;
      currentInput = "name";
      break;
    case "btnGroup":
      userInput.innerHTML = input.btnGroup;
      break;
    default:
      userInput.innerHTML = ``;
      currentInput = "none";
      break;
  }
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    console.log("user sent a message");
    chat.innerHTML += `
    <section class="message__user">
      <div class="bubble bubble__user">
        <p class="message__text">${message}</p>
      </div>
      <img src="assets/user.png" alt="User" />  
    </section>
    `;
  } else if (sender === "bot") {
    console.log("bot sent a message");
    chat.innerHTML += `
      <section class="message__bot">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bubble__bot">
          <p class="message__text">${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greeting = () => {
  showMessage(`Hello adventurer! Welcome to the dungeon…`, "bot");
  setTimeout(() => {
    showMessage("Prey tell, what is your name?", "bot");
    changeInput("name");
  }, 1500);
};

const handleNameInput = (event) => {
  const name = event.target.children.namedItem("inputName").value;
  // Show the name as user message
  showMessage(name, "user");
  // store the name
  player.name = name;
  //trigger askExperience
  setTimeout(() => {
    askExperience();
  }, 1000);
};

const askExperience = () => {
  console.log("ask experience");
  console.log(player);
};

// Set up your eventlisteners here
userInput.addEventListener("submit", (event) => {
  event.preventDefault();
  switch (currentInput) {
    case "name":
      handleNameInput(event);
      break;

    default:
      break;
  }
  // This clears the user input wrapper from any actions
  changeInput();
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 800);
