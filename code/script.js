// Variables that point to the selected DOM elements
const chat = document.getElementById(`chat`);
const nameInput = document.getElementById(`name-input`);
const inputWrapper = document.getElementById(`input-wrapper`);
const sendButton = document.querySelector(`.send-btn`);
const nameForm = document.getElementById(`name-form`);

let username = "";
let answerArray = []; // oder über 3 Variablen lösen

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  //the if statement checks if the sender is user and if that's the case outputs the message
  if (sender === "user") {
    // console.log(sender);
    // console.log(message);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-crab.jpg" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    //the else if statement checks if the sender is bot and if that's the case outputs the message
    // console.log(message);
    // console.log(sender);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-fish.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // makes the chat scroll to the last message when there are too many
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  showMessage(
    `Hello. I'm Finnly. Nice to meet you. Wanna find out what kind of sea creature you are?`,
    `bot`
  );
  showMessage(`Let's get started. But first, let me get your name.`, `bot`);
};

//invoke the first function to get the chatbot to ask the first question
setTimeout(greetUser, 1000);

//user types in name
const saveUsername = (event) => {
  event.preventDefault();
  //store the value in a variable so we can acces it later
  username = nameInput.value;
  showMessage(`Hi, I'm ${username}!`, `user`);
  chooseIntroExtro();
};

// Event listener
nameForm.addEventListener("submit", saveUsername);

//bot asks first question, 2 options (introvert vs extrovert) to chose from
const chooseIntroExtro = () => {
  showMessage(
    `Nice to meet you ${username}. Let's find out wat sea creature is mostly like you.`,
    "bot"
  );
  showMessage(`Are you more of an introvert or an extrovert?`, "bot");

  //create new form with buttons for first question (intro/extro)
  inputWrapper.innerHTML = `
    <div id="options">
      <button id="intro-btn">Introvert</button>
      <button id="extro-btn">Extrovert</button>
    </div>`;

  //get buttons, define variable
  const introvertButton = document.getElementById(`intro-btn`);
  const extrovertButton = document.getElementById(`extro-btn`);
  //event listeners for buttons
  introvertButton.addEventListener("click", () =>
    handleSelection1("introvert")
  );
  extrovertButton.addEventListener("click", () =>
    handleSelection1("extrovert")
  );
};

//function to display selection
const handleSelection1 = (answer1) => {
  showMessage(`I'm more of an ${answer1}`, "user");
  answerArray[0] = answer1;
  //handle option selection (e.g. move to the next question)
  chooseDayNight();
};

//bot asks second question, 2 options (day vs night) to chose from
const chooseDayNight = () => {
  showMessage(`Amazing! Now, are you a night owl or a early bird?`, "bot");

  //create new form with buttons for second question (day/night)
  inputWrapper.innerHTML = `
<div id="options">
  <button id="day-btn">Earyl Bird</button>
  <button id="night-btn">Night Owl</button>
</div>`;

  //get buttons, define variable
  const dayButton = document.getElementById(`day-btn`);
  const nightButton = document.getElementById(`night-btn`);

  //event listeners for buttons
  dayButton.addEventListener("click", () => handleSelection2("days"));
  nightButton.addEventListener("click", () => handleSelection2("nights"));
};

//function to display selection
const handleSelection2 = (answer2) => {
  showMessage(`I prefer ${answer2}`, "user");
  answerArray[1] = answer2;
  //handle option selection (e.g. move to the next question)
  chooseOutIn();
};

//bot asks third question, 2 options (Stand out vs Blend in) to chose from
const chooseOutIn = () => {
  showMessage(
    `Interesting! I have one last question for you, before I assign you a sea creature.`,
    "bot"
  );
  showMessage(`Do you rather stand out or blend in?`, "bot");

  //create new form with buttons for third question (intro/extro)
  inputWrapper.innerHTML = `
    <div id="options">
      <button id="out-btn">Stand Out</button>
      <button id="in-btn">Blend In</button>
    </div>`;

  //get buttons, define variable
  const outButton = document.getElementById(`out-btn`);
  const inButton = document.getElementById(`in-btn`);

  //event listeners for buttons
  outButton.addEventListener("click", () => handleSelection3("stand out"));
  inButton.addEventListener("click", () => handleSelection3("blend in"));
};

const handleSelection3 = (answer3) => {
  showMessage(`I ${answer3}`, "user");
  answerArray[2] = answer3;
  console.log(answerArray);
  defineSeaCreature();
};

//function to define the sea creature based on users selections
const defineSeaCreature = () => {
  const defineIntroExtro = answerArray[0];
  const defineDayNight = answerArray[1];
  const defineOutIn = answerArray[2];

  let response = "";

  // if (answerArray.toString() === "'introvert','days','stand out'") {
  //   response = "Muster1";
  // }

  //switch
  switch (defineIntroExtro) {
    case "introvert":
      switch (defineDayNight) {
        case "days":
          switch (defineOutIn) {
            case "stand out":
              response = "Peacock Mantis Shrimp";
              break;
            case "blend in":
              response = "Mimic Octopus";
              break;
          }
        case "nights":
          switch (defineOutIn) {
            case "stand out":
              response = "Moray Eel";
              break;
            case "blend in":
              response = "Ghostpipe Fish";
              break;
          }
      }
    case "extrovert":
      switch (defineDayNight) {
        case "days":
          switch (defineOutIn) {
            case "stand out":
              response = "Clownfish";
              break;
            case "blend in":
              response = "Dolphin";
              break;
          }
        case "nights":
          switch (defineOutIn) {
            case "stand out":
              response = "Mandarin Fish";
              break;
            case "blend in":
              response = "Manta Ray";
              break;
          }
      }
    default:
      break;
  }
  //response
  showMessage(`Turns out you are most likely a ${response}`, "bot");
};
