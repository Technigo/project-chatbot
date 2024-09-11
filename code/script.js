// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const form = document.getElementById("name-form");
const submit = document.getElementById("send");
const inputWrapper = document.getElementById("input-wrapper");

// Variables
let questionNumber = 1;
let userName = "";

// Destinations mapped by mood
const destinationsByMood = {
  Adventure: ["Mount Everest", "Amazon Rainforest", "Sahara Desert"],
  Relax: ["Maldives", "Bora Bora", "Bali"],
  Cultural: ["Italy", "Greece", "Japan"],
  Romantic: ["Paris", "Venice", "Santorini"],
};

// Functions go here 👇

const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    console.log("Bot message is being shown:", message); // This will log when the bot sends a message
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greeting = () => {
  botReply(`Welcome! Let me help you choose a destination.`);
  botReply(`What's your name?`);

  // Show the name input field
  inputWrapper.innerHTML = `
    <input id="name-input" type="text" placeholder="Enter your name here..." />
    <button id="submit-name">Submit</button>
  `;

  document
    .getElementById("submit-name")
    .addEventListener("click", () => handleNameInput());
};

// Handle name input
const handleNameInput = () => {
  const nameInput = document.getElementById("name-input");
  userName = nameInput.value.trim(); // Get the user's name

  if (userName) {
    userReply(userName);
    botReply(
      `Nice to meet you, ${userName}! Let's start by choosing your mood.`
    );

    showMoodOptions(); // Proceed to mood selection
  } else {
    botReply(`Please enter your name to continue.`);
  }
};

// Show mood options
const showMoodOptions = () => {
  inputWrapper.innerHTML = `
    <button id="adventureBtn">🌍 Adventure</button>
    <button id="relaxBtn">🌴 Relax</button>
    <button id="culturalBtn">🏛️ Cultural</button>
    <button id="romanticBtn">💖 Romantic</button>
  `;

  document
    .getElementById("adventureBtn")
    .addEventListener("click", () => nextQuestion("Adventure"));
  document
    .getElementById("relaxBtn")
    .addEventListener("click", () => nextQuestion("Relax"));
  document
    .getElementById("culturalBtn")
    .addEventListener("click", () => nextQuestion("Cultural"));
  document
    .getElementById("romanticBtn")
    .addEventListener("click", () => nextQuestion("Romantic"));
};

// Proceed to the next question based on the selected mood
const nextQuestion = (mood) => {
  botReply(
    `Great choice! You're in the mood for ${mood}. Now, let's pick a destination.`
  );

  showDestinationOptions(mood); // Pass the mood to showDestinationOptions
};

// Show destination options based on the selected mood
const showDestinationOptions = (mood) => {
  const destinations = destinationsByMood[mood]; // Get the destinations associated with the selected mood

  // Create the select dropdown based on the destinations array
  inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>👇 Select a destination...</option>
      ${destinations
        .map(
          (destination) =>
            `<option value="${destination}">${destination}</option>`
        )
        .join("")}
    </select>
  `;

  const select = document.getElementById("select");
  select.addEventListener("change", () => showMenu(select.value));
};

// Ask about activities after selecting a destination
const showMenu = (destination) => {
  questionNumber++;

  botReply(
    `Great choice! ${destination} sounds like an amazing place. Would you like to plan some activities while you're there?`
  );

  inputWrapper.innerHTML = `
    <button id="theEnd">NO</button>
    <button id="confirm">YES</button>
  `;

  document.getElementById("theEnd").addEventListener("click", () => {
    botReply("Alright, enjoy your relaxing trip!");
    inputWrapper.innerHTML = ``;
  });

  document.getElementById("confirm").addEventListener("click", () => {
    showActivities();
  });
};

// Choose activities
const showActivities = () => {
  questionNumber++;

  botReply(`Awesome! What activities would you like to do while you're there?`);

  inputWrapper.innerHTML = `
    <button id="hikingBtn">🥾 Hiking</button>
    <button id="beachBtn">🏖 Beach</button>
    <button id="sightseeingBtn">🗺 Sightseeing</button>
  `;

  document
    .getElementById("hikingBtn")
    .addEventListener("click", () => showChoice("Hiking"));
  document
    .getElementById("beachBtn")
    .addEventListener("click", () => showChoice("Beach"));
  document
    .getElementById("sightseeingBtn")
    .addEventListener("click", () => showChoice("Sightseeing"));
};

// Show the choice made by the user and prompt readiness
const showChoice = (choice) => {
  questionNumber++;

  botReply(`${choice} sounds fun! Are you ready to start planning your trip?`);

  inputWrapper.innerHTML = `
    <button id="ready">Ready</button>
  `;

  document.getElementById("ready").addEventListener("click", () => {
    thankYou();
  });
};

// End of conversation
const thankYou = () => {
  botReply(
    `Enjoy your trip! Hope you have an amazing adventure, ${userName}! 👋🏼`
  );
  inputWrapper.innerHTML = ``; // Clear input
};

// Event listeners for sending text input
submit.addEventListener("click", () => nextQuestion(nameInput.value));
nameInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && nameInput.value) nextQuestion(nameInput.value);
});

// Start the conversation
setTimeout(greeting, 1000);

// Prevent default form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
