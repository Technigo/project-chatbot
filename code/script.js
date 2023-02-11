// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const form = document.getElementById("name-form");

// const sendBtn = document.getElementById("send-btn")
const audio = new Audio("drill.mp3");

// Global variables, if you need any, declared here
let questionStep = 1;

// Function to display the message on the screen both for bot and user
const botAnswer = (inputMessage) => {
  showMessage(inputMessage, "bot");
};
const userAnswer = (inputMessage) => {
  showMessage(inputMessage, "user");
};

// Question flow functions
const handleInput = (message) => {
  if (questionStep === 2) {
    userAnswer(message);
    setTimeout(() => colourOptions(message), 800);
  } else if (questionStep === 3) {
    userAnswer(message);
    setTimeout(() => houseStatement(message), 1500);
  } else {
    userAnswer(message);
    setTimeout(goodBye, 1500);
  }
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-h.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    console.log("This works");
    chat.innerHTML += `
      <section class="bot-msg">
      <img src="assets/sorting-hat.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Bot welcome message
const greeting = () => {
  showMessage(`So... Who do we have here?`, "bot");
};

// This will display the first answer (user name)
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  userAnswer(`${name}`);
  // This will keep the input box empty after user clicks send
  nameInput.value = "";
  setTimeout(() => animalOptions(name), 1000);
});

// 2 - Bot welcomes you to Hogwarts and asks your favourite animal
const animalOptions = (name) => {
  questionStep++;
  botAnswer(`Welcome ${name} to Hogwarts!`);
  setTimeout(
    () =>
      botAnswer(`In order to sort you into a house you have to answer a few questions...
  First, what is your favourite animal?`),
    1000
  );
  inputWrapper.innerHTML = `
    <button id="lionButton">Lion 🦁</button>
    <button id="snakeButton">Snake 🐍</button>
    <button id="badgerButton">Badger 🦡</button>
    <button id="eagleButton">Eagle 🦅</button>
    `;
  document.getElementById("lionButton").addEventListener("click", () => {
    type = "lion";
    handleInput("Lion!");
  });
  document.getElementById("snakeButton").addEventListener("click", () => {
    type = "snake";
    handleInput("Snake!");
  });
  document.getElementById("badgerButton").addEventListener("click", () => {
    type = "snake";
    handleInput("Badger!");
  });
  document.getElementById("eagleButton").addEventListener("click", () => {
    type = "eagle";
    handleInput("Eagle!");
  });
};

//3 - Bot asks you to choose favourite colour
const colourOptions = (type) => {
  questionStep++;
  botAnswer(
    `Interesting! And could you tell me what your favourite colour is?`
  );
  inputWrapper.innerHTML = `
  <select id = 'select'>
  <option value='' selected disabled> Choose colour </option>
  <option value='Red'>Red</option>
  <option value='Green'>Green</option>
  <option value='Yellow'>Yellow</option>
  <option value='Blue'>Blue</option>
  </select> `;
  const select = document.getElementById("select");
  select.addEventListener("change", () => handleInput(select.value));
};

//4 - Bot will place you in Hogwarts house
const houseStatement = (colour) => {
  questionStep++;
  if (colour === "Green") {
    botAnswer(`SLYTHERIN!`);
  } else {
    botAnswer(`Hmm... Tough call... Better put you in...`);
    setTimeout(() => botAnswer(`SLYTHERIN!`), 2000);
  }

  //You will love your new house
  inputWrapper.innerHTML = `
<button id="yayButton">Yay!</button>
`;
  document
    .getElementById("yayButton")
    .addEventListener("click", () =>
      handleInput("I can't wait to become the gratest witch in the world!")
    );
};

// 5 - Bot will wish you good luck and say good bye
function goodBye() {
  botAnswer(`Have fun with your new slytherin friends!`);
  setTimeout(() => botAnswer(`And watch out for nargles...`), 1200);
  // Below clears the option to click button after once selected.
  inputWrapper.innerHTML = ``;
}
//This function will be called one second after the website is loaded.
setTimeout(greeting, 800);
