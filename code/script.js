// Import scripts
import * as input from "./scripts/elementInputs.js";
import Hero from "./scripts/hero.js";
import Encounter from "./scripts/encounter.js";

// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");

// Global variables, if you need any, declared here
let currentInput = "none";
let hero, encounter;

// Temp variables to use for instantiation
let _name, _type, _difficulty;

// Functions declared here
// This function replaces the userInput with a new element and sets the currentInput variable
const changeInput = (type) => {
  switch (type) {
    case "name":
      userInput.innerHTML = input.name;
      currentInput = "name";
      break;
    case "boolSelect":
      userInput.innerHTML = input.boolSelect;
      currentInput = "boolSelect";
      break;
    case "classSelect":
      userInput.innerHTML = input.classSelect;
      currentInput = "classSelect";
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
    chat.innerHTML += `
    <section class="message__user">
      <div class="bubble bubble__user">
        <p class="message__text">${message}</p>
      </div>
      <img src="assets/user.png" alt="User" />  
    </section>
    `;
  } else if (sender === "bot") {
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
  _name = name;
  //trigger askExperience
  setTimeout(() => {
    askExperience();
  }, 1000);
};

const askExperience = () => {
  showMessage("Alright...", "bot");
  setTimeout(() => {
    showMessage(`Looks like you’re in for a challenge ${_name}`, "bot");
    setTimeout(() => {
      showMessage("Would you like to make it a bit easier?", "bot");
      // show the yes and no inputs
      changeInput("boolSelect");
    }, 1000);
  }, 1000);
};

const handleBoolInput = (event) => {
  const difficulty = event.value === "true";
  const response = difficulty ? "Take it easy on me" : "I like a challenge";
  // show answer as a response
  showMessage(response, "user");
  // store as encounter isEasy
  _difficulty = difficulty;
  // trigger ask class
  setTimeout(() => {
    askClass();
  }, 1000);
};

const askClass = () => {
  showMessage("Great! I will adapt the experience based on that.", "bot");
  setTimeout(() => {
    showMessage("One last thing before we begin....", "bot");
    setTimeout(() => {
      showMessage("What class would you like to play as?", "bot");
      // show class input options
      changeInput("classSelect");
    }, 1000);
  }, 1000);
};

const handleClassSelectInput = (event) => {
  const type = event.value;
  // show user response
  showMessage(`I am a ${type}`, "user");
  // store class
  _type = type;
  // trigger encRoundStart()
  setTimeout(() => {
    encRoundStart();
  }, 1000);
};

const encRoundStart = () => {
  // instantiate Hero and Encounter
  encounter = new Encounter(_difficulty);
  hero = new Hero(_name, _type, encounter);
  console.log(encounter);
  console.log(hero);
};

// Set up your eventlisteners here
// Listens for any submit events in the user input form. Then triggers a handler funct for that input type (based on the currentinput variable)
userInput.addEventListener("submit", (event) => {
  event.preventDefault();
  switch (currentInput) {
    case "name":
      handleNameInput(event);
      break;
    case "boolSelect":
      handleBoolInput(event.submitter);
      break;
    case "classSelect":
      handleClassSelectInput(event.submitter);
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
