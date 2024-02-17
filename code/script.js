// Variables that point to the selected DOM elements
const chat = document.getElementById(`chat`);
const nameInput = document.getElementById(`name-input`);
const inputWrapper = document.getElementById(`input-wrapper`);
const sendButton = document.querySelector(`.send-btn`);
const nameForm = document.getElementById(`name-form`);

let username = "";
let answerArray = []; // can also use three variables instead

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
    `Hello there 👋. I'm Finnly. Nice to meet you. Do you want to find out what kind of sea creature you are?`,
    `bot`
  );
  showMessage(
    `Let's get started.
  But first, let me know your name.`,
    `bot`
  );
};

//invoke the first function to get the chatbot to ask the first question
setTimeout(greetUser, 1000);

//user types in name
const saveUsername = (event) => {
  event.preventDefault();
  //store the value in a variable so we can acces it later
  username = nameInput.value;
  showMessage(`Hi, I'm ${username}!`, `user`);
  setTimeout(chooseIntroExtro, 2000);
  //chooseIntroExtro();
};

// Event listener
nameForm.addEventListener("submit", saveUsername);

//bot asks first question, 2 options (introvert vs extrovert) to chose from
const chooseIntroExtro = () => {
  showMessage(
    `Nice to meet you ${username}.
    Let's find out which marine animal is most like you.`,
    `bot`
  );
  showMessage(`Are you more introverted or extroverted?`, `bot`);

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
    handleSelectionIntroExtro("introvert")
  );
  extrovertButton.addEventListener("click", () =>
    handleSelectionIntroExtro("extrovert")
  );
};

//function to display selection
const handleSelectionIntroExtro = (answer1) => {
  showMessage(`I'm more of an ${answer1}`, `user`);
  answerArray[0] = answer1;
  //handle option selection (e.g. move to the next question)
  setTimeout(chooseDayNight, 2000);
};

//bot asks second question, 2 options (day vs night) to chose from
const chooseDayNight = () => {
  showMessage(
    `Amazing!
  Are you an early bird 🐓 or a night owl 🦉?`,
    `bot`
  );

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
  dayButton.addEventListener("click", () => handleSelectionDayNight("days"));
  nightButton.addEventListener("click", () =>
    handleSelectionDayNight("nights")
  );
};

//function to display selection
const handleSelectionDayNight = (answer2) => {
  showMessage(`I prefer ${answer2}`, "user");
  answerArray[1] = answer2;
  //handle option selection (e.g. move to the next question)
  setTimeout(chooseOutIn, 2000);
};

//bot asks third question, 2 options (Stand out vs Blend in) to chose from
const chooseOutIn = () => {
  showMessage(
    `Interesting!
    I have one last question for you before I assign you a marine animal.`,
    `bot`
  );
  showMessage(`Would you rather stand out or blend in?`, `bot`);

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
  outButton.addEventListener("click", () => handleSelectionOutIn("stand out"));
  inButton.addEventListener("click", () => handleSelectionOutIn("blend in"));
};

const handleSelectionOutIn = (answer3) => {
  showMessage(`I ${answer3}`, `user`);
  answerArray[2] = answer3;
  console.log(answerArray);
  setTimeout(defineSeaCreature, 2000);
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
          break;
      }
      break;
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
          break;
        case "nights":
          switch (defineOutIn) {
            case "stand out":
              response = "Mandarin Fish";
              break;
            case "blend in":
              response = "Manta Ray";
              break;
          }
          break;
      }
      break;
    default:
      break;
  }
  //response
  showMessage(`You're most likely a ${response}.`, `bot`);

  setTimeout(exitChat, 2000);
};

//chatbot solution added
// Function to exit the chat
const exitChat = () => {
  showMessage(
    `Click YES if you're happy with your result, or NO if you want to start over.`,
    "bot"
  );
  console.log(showMessage);

  // Create buttons for user feedback
  inputWrapper.innerHTML = `
  <div id="options">
    <button id="yes-btn">Yes</button>
    <button id="no-btn">No</button>
  </div>`;

  // Get buttons
  const yesButton = document.getElementById(`yes-btn`);
  const noButton = document.getElementById(`no-btn`);

  // Event listeners for user feedback
  yesButton.addEventListener("click", () => handleFeedback("yes"));
  noButton.addEventListener("click", () => handleFeedback("no"));
};

// Function to handle user feedback
const handleFeedback = (feedback) => {
  if (feedback === "yes") {
    showMessage(`Bye👋`, "bot");
    return;
  } else {
    showMessage(`Ok, try again 🔝`, "bot");
    setTimeout(function () {
      location.reload();
    }, 4000);
    console.log(setTimeout);
  }
};
