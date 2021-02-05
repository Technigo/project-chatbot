// Import scripts
import * as input from "./scripts/elementInputs.js";
import * as _ from "./scripts/helperFunctions.js";
import Encounter from "./scripts/encounter.js";

/** DOM SELECTORS */
const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");
const info = document.getElementById("info");
const btnAudio = document.getElementById("btnAudio");

/** GLOBALS */
let currentInput, encounter;
let endState = false;
let counter = 0;
// Temp variables to use for instantiation
let _name,
  _type,
  _difficulty,
  _tokenDefault = "tokenDefault";

/** FUNCTIONS */
// Update the info fields
const updateInfo = () => {
  const heroHealth = info.querySelector("#healthHero");
  const heroName = info.querySelector("#nameHero");
  const enemyHealth = info.querySelector("#healthEnemy");
  const enemyName = info.querySelector("#nameEnemy");
  const rounds = info.querySelector("#rounds");
  // Update rounds
  rounds.innerHTML = encounter.rounds;
  // update info names
  heroName.innerHTML = encounter.hero.name;
  enemyName.innerHTML = encounter.enemy.type;
  // update health info
  heroHealth.innerHTML = encounter.hero.hp < 0 ? 0 : encounter.hero.hp;
  enemyHealth.innerHTML = encounter.enemy.hp < 0 ? 0 : encounter.enemy.hp;
};
// Update buffs info
const updateBuffs = () => {
  const enemyInfo = info.querySelector("#enemyInfo");
  //check if enemy has buffs
  _.addBuffs(enemyInfo, encounter.enemy.buffs);
  _.removeBuffs(enemyInfo, encounter.buffsRemove);
};

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
      userInput.innerHTML = input.classSelect(_difficulty);
      currentInput = "classSelect";
      break;
    case "actionSelect":
      userInput.innerHTML = input.setActionsSelect(encounter.hero);
      currentInput = "actionSelect";
      break;
    default:
      userInput.innerHTML = ``;
      currentInput = "none";
      break;
  }
  chat.scrollTop = chat.scrollHeight;
};

// These function will add a chat bubble in the correct place based on who the sender is
const userMessage = (message, type) => {
  chat.innerHTML += input.userMessage(message, type);
  chat.scrollTop = chat.scrollHeight;
};

const botMessage = (message) => {
  counter++;
  chat.innerHTML += input.botMessage(counter);
  const chatmessage = chat.querySelector(`#botMessage${counter}`);
  chat.scrollTop = chat.scrollHeight;
  setTimeout(() => {
    chatmessage.innerText = message;
    chat.scrollTop = chat.scrollHeight;
  }, 1000);
};

/** CONTROL FLOW */
const greeting = () => {
  botMessage(`Hello adventurer! Welcome to the dungeon…`);
  setTimeout(() => {
    botMessage("Prey tell, what is your name?");
    setTimeout(() => {
      changeInput("name");
    }, 2500);
  }, 2500);
};
const greetingAgain = () => {
  botMessage(`Welcome back ${_name}`);
  setTimeout(() => {
    askExperience();
  }, 2500);
};

const handleNameInput = (event) => {
  const name = event.target.children.namedItem("inputName").value;
  // Show the name as user message
  userMessage(name, _tokenDefault);
  // store the name
  _name = name;
  //trigger askExperience
  setTimeout(() => {
    askExperience();
  }, 1000);
};

const askExperience = () => {
  botMessage("Alright...");
  setTimeout(() => {
    botMessage(`Looks like you’re in for a challenge ${_name}`);
    setTimeout(() => {
      botMessage("Would you like to make it a bit easier?");
      setTimeout(() => {
        // show the yes and no inputs
        changeInput("boolSelect");
      }, 2500);
    }, 2500);
  }, 2500);
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
      botMessage("Okay... Your loss");
      changeInput();
    }
    return;
  }
  const response = inputVal ? "Take it easy on me" : "I like a challenge";
  // show answer as a response
  userMessage(response, encounter !== undefined ? encounter.hero.token : _tokenDefault);
  // store as encounter isEasy
  _difficulty = inputVal;
  // trigger ask class
  setTimeout(() => {
    askClass();
  }, 1000);
};

const askClass = () => {
  botMessage("Great! I will adapt the experience based on that.");
  setTimeout(() => {
    botMessage("One last thing before we begin....");
    setTimeout(() => {
      botMessage("What class would you like to play as?");
      // show class input options
      setTimeout(() => {
        changeInput("classSelect");
      }, 2500);
    }, 2500);
  }, 2500);
};

const handleClassSelectInput = (event) => {
  const type = event.value;
  // show user response
  userMessage(`I am a ${type}`, encounter !== undefined ? encounter.hero.token : _tokenDefault);
  // store class
  _type = type;
  // start encounter
  setTimeout(() => {
    encRoundStart();
  }, 1000);
};

const encRoundStart = () => {
  // instantiate Encounter
  encounter = new Encounter(_name, _type, _difficulty);
  updateInfo();
  botMessage("Excellent! Let's begin...");
  setTimeout(() => {
    botMessage(encounter.location.description);
    setTimeout(() => {
      switch (encounter.location.type) {
        case "forest":
          botMessage(encounter.enemy.description);
          break;
        case "mountain":
          botMessage(encounter.enemy.description);
          break;
        case "swamp":
          botMessage(encounter.enemy.description);
          break;
        case "desert":
          botMessage(encounter.enemy.description);
          break;
      }
      setTimeout(() => {
        botMessage("What do you want to do?");
        // show hero actions
        setTimeout(() => {
          changeInput("actionSelect");
        }, 2000);
      }, 4000);
    }, 4000);
  }, 3000);
};

const runEndGame = (winner) => {
  if (winner === "hero") {
    botMessage(`You defeated the ${encounter.enemy.type}! Would you like to play again?`);
    setTimeout(() => {
      changeInput();
      updateInfo();
      endState = true;
      changeInput("boolSelect");
    }, 2000);
  } else if (winner === "enemy") {
    botMessage(`The ${encounter.enemy.type} has killed you... Would you like to try again?`, "bot");
    setTimeout(() => {
      changeInput();
      updateInfo();
      endState = true;
      changeInput("boolSelect");
    }, 2000);
  }
};

// This function handles action select by user.
// It triggers the gameloop:
// (hero action->enemy action->hero action->etc....)
// until an end state is reached
const handleActionSelectInput = (action) => {
  // show user response
  userMessage(action.dataset.msg, encounter !== undefined ? encounter.hero.token : _tokenDefault);
  // Start the game loop
  setTimeout(() => {
    let msg = encounter.execHeroAction(action.value);
    if (msg === null) {
      // the msg is null so an end state was achieved
      runEndGame("hero");
      return;
    }
    // the loop continues, no end state yet
    botMessage(msg);
    updateInfo();
    updateBuffs();
    setTimeout(() => {
      msg = encounter.execEnemyAction();
      if (msg === null) {
        // the msg is null so an end state was achieved
        runEndGame("enemy");
        return;
      }
      botMessage(msg[0]);
      updateInfo();
      setTimeout(() => {
        botMessage(msg[1]);
        encounter.newRound();
        setTimeout(() => {
          // new round
          changeInput("actionSelect");
          updateInfo();
          updateBuffs();
        }, 1500);
      }, 3000);
    }, 3000);
  }, 1000);
};

/** EVENT LISTENERS */

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

btnAudio.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("fa-play-circle-o")) {
    element.firstElementChild.play();
    event.target.classList.add("fa-pause-circle-o");
    event.target.classList.remove("fa-play-circle-o");
  } else {
    element.firstElementChild.pause();
    event.target.classList.add("fa-play-circle-o");
    event.target.classList.remove("fa-pause-circle-o");
  }
});

/** BEGIN THE FLOW */
setTimeout(greeting, 800);
