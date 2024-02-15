const BOT_DELAY = 1000;

// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");

//Forms
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const destinationTypeForm = document.getElementById("destination-type-form");
const destinationMountainOptionsForm = document.getElementById(
  "destination-mountain-options-form"
);
const destinationBeachOptionsForm = document.getElementById(
  "destination-beach-options-form"
);
const durationForm = document.getElementById("duration-form");

// Functions goes here 👇
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    console.log("user");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    console.log("bot");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  alert(`Are you ready for your next vacation? 🌴⛰️🌇`);
  showMessage("Welcome! Let's begin with your name", "bot");
};

// Steps

const showVacationOptions = (type) => {
  if (type === "Mountain") {
    showMessage(
      "Great! You have chosen Mountain destination, here are some options:",
      "bot"
    );
    destinationMountainOptionsForm.className = "";
  } else {
    showMessage(
      "Fantastic! You have chosen Beach destination, here are some options:",
      "bot"
    );
    destinationBeachOptionsForm.className = "";
  }
};

const showVacationTypes = (name) => {
  showMessage(`Hello ${name}, where would you like to travel?`, "bot");

  nameForm.className = "hidden";
  destinationTypeForm.className = "";
};

const showVacationDuration = (destination) => {
  showMessage(
    `You have chosen ${destination}. How long are planning to stay?`,
    "bot"
  );

  durationForm.className = "";
};

// Handlers

const handleNameInput = (event) => {
  event.preventDefault();

  // Handle user input
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";

  // Handle next question from bot
  setTimeout(() => showVacationTypes(name), BOT_DELAY);
};

const handleDestinationTypeInput = (event) => {
  event.preventDefault();

  // Get value of button clicked
  destinationTypeForm.className = "hidden";
  showMessage(event.submitter.value, "user");

  setTimeout(() => showVacationOptions(event.submitter.value), BOT_DELAY);
};

const handleSelectedDestination = (event) => {
  showMessage(event.target.value, "user");

  destinationMountainOptionsForm.className = "hidden";
  destinationBeachOptionsForm.className = "hidden";

  setTimeout(() => showVacationDuration(event.target.value), BOT_DELAY);
};

const handleSelectDuration = (event) => {
  showMessage(event.target.value, "user");
  durationForm.className = "hidden";
};

// Eventlisteners goes here 👇
nameForm.addEventListener("submit", handleNameInput);
destinationTypeForm.addEventListener("submit", handleDestinationTypeInput);
destinationMountainOptionsForm.addEventListener(
  "change",
  handleSelectedDestination
);
destinationBeachOptionsForm.addEventListener(
  "change",
  handleSelectedDestination
);

durationForm.addEventListener("change", handleSelectDuration);

setTimeout(greetUser, BOT_DELAY);
