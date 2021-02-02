// Import scripts
import * as input from "./scripts/elementInputs.js";
import Encounter from "./scripts/encounter.js";

/** DOM SELECTORS */
const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");

/** GLOBALS */
let currentInput, encounter;
let endState = false;
// Temp variables to use for instantiation
let _name, _type, _difficulty;

/** FUNCTIONS */
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
    case "actionSelect":
      userInput.innerHTML = input.actionSelect;
      currentInput = "actionSelect";
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

/** CONTROL FLOW */
const greeting = () => {
  showMessage(`Hello adventurer! Welcome to the dungeon…`, "bot");
  setTimeout(() => {
    showMessage("Prey tell, what is your name?", "bot");
    changeInput("name");
  }, 1500);
};
const greetingAgain = () => {
  showMessage(`Welcome back ${_name}`, "bot");
  setTimeout(() => {
    askExperience();
  }, 1000);
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
  const inputVal = event.value === "true";
  if (endState) {
    if (inputVal) {
      //clear chat
      chat.innerHTML = "";
      endState = false;
      // new greeting
      setTimeout(() => {
        greetingAgain();
      }, 1000);
    } else {
      showMessage("Okay... Your loss", "bot");
      changeInput();
    }
    return;
  }
  const response = inputVal ? "Take it easy on me" : "I like a challenge";
  // show answer as a response
  showMessage(response, "user");
  // store as encounter isEasy
  _difficulty = inputVal;
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
  // instantiate Encounter
  encounter = new Encounter(_name, _type, _difficulty);
  console.log(encounter);
  showMessage("Excellent! Let's begin...", "bot");
  setTimeout(() => {
    showMessage(
      `You are in a ${encounter.location}. It’s dark and the moon has taken over the sky. Almost covering up the stars above with its ominous light.`,
      "bot"
    );
    setTimeout(() => {
      switch (encounter.location) {
        case "forest":
          showMessage(
            `Out of the bushes a ${encounter.enemy.type} jumps out at you. It is clear they wish to fight to the death. What do you do?`,
            "bot"
          );
          break;
        case "mountain":
          showMessage(`from mountain jump a ${encounter.enemy.type}. What do you?`);
          break;
        case "swamp":
          showMessage(`from swamp jump a ${encounter.enemy.type}. What do you?`);
          break;
        case "desert":
          showMessage(`from desert jump a ${encounter.enemy.type}. What do you?`);
          break;
        default:
          break;
      }
      // show hero actions
      changeInput("actionSelect");
    }, 2000);
  }, 2000);
};

const runEndGame = () => {
  changeInput();
  showMessage("end of game, retry?", "bot");
  endState = true;
  changeInput("boolSelect");
};

/** EVENT LISTENERS */

// This function listens for an action select by user.
// It then goes on to trigger the gameloop:
// (hero action->enemy action->hero action->etc....)
// until an end state is reached
const handleActionSelectInput = (event) => {
  const action = event.value;
  // show user response
  showMessage(`I will ${action}!`, "user");
  // Start the game loop
  setTimeout(() => {
    let msg = encounter.execHeroAction(action);
    if (msg === null) {
      // the msg is null so an end state was achieved
      runEndGame();
      return;
    }
    // the loop continues, no end state yet
    showMessage(msg, "bot");
    setTimeout(() => {
      msg = encounter.execEnemyAction();
      showMessage(msg, "bot");
      changeInput("actionSelect");
    }, 2000);
  }, 1000);
};

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
    case "actionSelect":
      handleActionSelectInput(event.submitter);
      break;
    default:
      break;
  }
  // This clears the user input wrapper from any actions
  changeInput();
});

/** BEGIN THE FLOW */
setTimeout(greeting, 800);
