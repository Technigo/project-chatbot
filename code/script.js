const BOT_DELAY = 1000;

//Variables
let customerName,
  destinationType,
  destination,
  tripDuration,
  numberOfPassengers;

// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
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
const passengersForm = document.getElementById("passengers-form");
const confirmationForm = document.getElementById("confirmation-form");

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
      "Great! You have selected Mountain destination; Here are some options:",
      "bot"
    );
    destinationMountainOptionsForm.className = "";
  } else {
    showMessage(
      "Fantastic! You have selected Beach destination; Here are some options:",
      "bot"
    );
    destinationBeachOptionsForm.className = "";
  }
};

const showVacationTypes = (name) => {
  showMessage(`Hello ${name}, Where would you like to travel?`, "bot");

  destinationTypeForm.className = "";
};

const showVacationDuration = (destination) => {
  showMessage(
    `You have selected ${destination}. How long are planning to stay?`,
    "bot"
  );

  durationForm.className = "";
};

const showNumberOfPassengers = (duration) => {
  if (duration === "Week") {
    showMessage("Amazing a long trip! How many passengers?", "bot");
  } else {
    showMessage("A weekend to explore. How many passengers?", "bot");
  }

  passengersForm.className = "";
};

const showConfirmation = () => {
  showMessage(
    `${customerName}, you have selected one ${tripDuration} in ${destination} as ${numberOfPassengers}. That will be 2000 SEK. Is that ok with you?`,
    "bot"
  );

  confirmationForm.className = "";
};

// Handlers
const handleNameInput = (event) => {
  event.preventDefault();

  // Handle user input
  customerName = nameInput.value;
  showMessage(customerName, "user");
  nameInput.value = "";
  nameForm.className = "hidden";

  // Handle next question from bot
  setTimeout(() => showVacationTypes(customerName), BOT_DELAY);
};

const handleDestinationTypeInput = (event) => {
  event.preventDefault();

  // Get value of button clicked
  destinationType = event.submitter.value;
  destinationTypeForm.className = "hidden";
  showMessage(destinationType, "user");

  setTimeout(() => showVacationOptions(destinationType), BOT_DELAY);
};

const handleSelectedDestination = (event) => {
  destination = event.target.value;
  showMessage(destination, "user");

  destinationMountainOptionsForm.className = "hidden";
  destinationBeachOptionsForm.className = "hidden";

  setTimeout(() => showVacationDuration(destination), BOT_DELAY);
};

const handleSelectDuration = (event) => {
  tripDuration = event.target.value;

  showMessage(tripDuration, "user");
  durationForm.className = "hidden";

  setTimeout(() => showNumberOfPassengers(tripDuration), BOT_DELAY);
};

const handleSelectPassengers = (event) => {
  event.preventDefault();

  numberOfPassengers = event.submitter.value;

  passengersForm.className = "hidden";
  showMessage(numberOfPassengers, "user");

  setTimeout(() => showConfirmation(), BOT_DELAY);
};

const handleConfirmation = (event) => {
  event.preventDefault();

  confirmationForm.className = "hidden";
  showMessage(event.submitter.value, "user");

  if (event.submitter.value === "Yes") {
    setTimeout(() =>
      showMessage("Perfect! Thank you for booking with us", "bot", BOT_DELAY)
    );
  } else {
    setTimeout(
      () => showMessage("No worries, come back anytime", "bot"),
      BOT_DELAY
    );
  }
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
passengersForm.addEventListener("submit", handleSelectPassengers);
confirmationForm.addEventListener("submit", handleConfirmation);

setTimeout(greetUser, BOT_DELAY);
