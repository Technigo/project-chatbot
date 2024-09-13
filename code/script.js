// DOM selectors (variables that point to selected DOM elements) goes here
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const form = document.getElementById("name-form");
const submit = document.getElementById("send");
const inputWrapper = document.getElementById("input-wrapper");

// Variables
let questionNumber = 1;
let userName = "";

// Destinations mapped by mood
// Based on the mood selected by the user, the bot will suggest destinations
const destinationsByMood = {
  Adventure: ["🏔️ Mount Everest", "🌳 Amazon Rainforest", "🏜️ Sahara Desert"],
  Relax: ["🛳️ Maldives", "🌴 Bora Bora", "🏖️ Bali"],
  Cultural: ["🍝 Italy", "🏺 Greece", "🍣 Japan"],
  Romantic: ["🌹 Paris", "🌅 Venice", "🌺 Santorini"],
};

// Function for bot to reply with a message after a delay
// The delay is used to make the conversation feel more natural.
const botReply = (msg) => {
  setTimeout(() => showMessage(msg, "bot"), 500);
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
  botReply(
    `Hi there! I'm your travel assistant, ready to help you pick the perfect destination.`
  );
  botReply(`Before we start, can I get your name?`);

  // Show the name input field
  inputWrapper.innerHTML = `
    <input id="name-input" type="text" placeholder="Enter your name..." />
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
      `Nice to meet you, ${userName}! Let's figure out what kind of trip you're in the mood for.`
    );

    showMoodOptions(); // Proceed to mood selection
  } else {
    botReply(`Oops, I didn't catch that! Please enter your name to continue.`);
  }
};

const showMoodOptions = () => {
  // Wait for the bot's message to be displayed first
  setTimeout(() => {
    inputWrapper.innerHTML = `
      <select id="moodSelect">
        <option value="" selected disabled>👇 Select a mood...</option>
        <option value="Adventure">🌍 Adventure</option>
        <option value="Relax">🌴 Relax</option>
        <option value="Cultural">🏛️ Cultural</option>
        <option value="Romantic">💖 Romantic</option>
      </select>
    `;

    document
      .getElementById("moodSelect")
      .addEventListener("change", (event) => nextQuestion(event.target.value));
  }, 600); // 500ms delay
};

// Proceed to the next question based on the selected mood
const nextQuestion = (mood) => {
  botReply(`${mood}, exciting! Let's see which destinations match your mood.`);

  showDestinationOptions(mood); // Pass the mood to showDestinationOptions
};

const showDestinationOptions = (mood) => {
  const destinations = destinationsByMood[mood];

  // Wait for the bot's message to be displayed first
  setTimeout(() => {
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
  }, 600); // 500ms delay
};

// Ask about activities after selecting a destination
const showMenu = (destination) => {
  questionNumber++;

  botReply(
    `Great choice! ${destination} sounds like an amazing place. Would you like to plan some activities while you're there?`
  );

  // Delay the appearance of the Yes/No buttons
  setTimeout(() => {
    inputWrapper.innerHTML = `
    <button id="theEnd">NO</button>
    <button id="confirm">YES</button>
  `;

    document.getElementById("theEnd").addEventListener("click", () => {
      botReply("Alright, enjoy your trip!");
      inputWrapper.innerHTML = ``;
      showStartOverButton(); // Show the "Start Over" button
    });

    document.getElementById("confirm").addEventListener("click", () => {
      showActivities();
    });
  }, 600); // Delay of 600ms
};

const showActivities = () => {
  questionNumber++;

  botReply(`Awesome! What activities would you like to do while you're there?`);

  // Create a dropdown menu for activities
  setTimeout(() => {
    inputWrapper.innerHTML = `
      <select id="activitySelect">
        <option value="" selected disabled>👇 Select an activity...</option>
        <option value="Hiking">🥾 Hiking</option>
        <option value="Beach">🏖️ Beach</option>
        <option value="Sightseeing">🗺️ Sightseeing</option>
      </select>
    `;

    document
      .getElementById("activitySelect")
      .addEventListener("change", (event) => {
        const selectedActivity = event.target.value;
        if (selectedActivity) {
          showChoice(selectedActivity);
        }
      });
  }, 600); // 500ms delay
};
// Show the choice made by the user and prompt readiness
const showChoice = (choice) => {
  questionNumber++;

  botReply(`${choice} sounds fun! Are you ready to start planning your trip?`);

  // Add suggestions based on the selected activity
  let suggestions = "";
  if (choice === "Hiking") {
    suggestions = `
      Here are some hiking tips and guides:
      <ul>
        <li><a href="random url" target="_blank">AllTrails - Discover Hiking</a></li>
        <li><a href="random url" target="_blank">Hiking for Beginners</a></li>
        <li><a href="random url" target="_blank">Top Hiking Trails</a></li>
      </ul>
    `;
  } else if (choice === "Beach") {
    suggestions = `
      Here are some beach travel ideas:
      <ul>
        <li><a href="random url" target="_blank">TripAdvisor - Must-Visit Beaches</a></li>
        <li><a href="random url" target="_blank">Condé Nast Traveler - Top Beaches</a></li>
        <li><a href="random url" target="_blank">Top 5 Beaches</a></li>
      </ul>
    `;
  } else if (choice === "Sightseeing") {
    suggestions = `
      Here are some sightseeing guides:
      <ul>
        <li><a href="random url" target="_blank">Lonely Planet - Best Sightseeing Tours</a></li>
        <li><a href="random url" target="_blank">BuzzFeed - Top Bucket List Sights</a></li>
        <li><a href="random url" target="_blank">Rough Guides - Best in Travel 2024</a></li>
      </ul>
    `;
  }

  // Display the suggestions before asking if they're ready
  botReply(suggestions);

  // Delay the appearance of the "Ready" button
  setTimeout(() => {
    inputWrapper.innerHTML = `
      <button id="ready">Ready</button>
    `;

    document.getElementById("ready").addEventListener("click", () => {
      thankYou();
    });
  }, 600); // Delay of 500ms
};

// End of conversation
const thankYou = () => {
  botReply(
    `Wishing you an incredible trip ${userName}! Hope you have an amazing adventure.`
  );
  inputWrapper.innerHTML = ``; // Clear input, removes the "ready" btn
  showStartOverButton(); // Show the "Start Over" button
};
// Function to display "Start Over" button
const showStartOverButton = () => {
  setTimeout(() => {
    inputWrapper.innerHTML = `
      <button id="startOver">Start Over</button>
    `;
    document
      .getElementById("startOver")
      .addEventListener("click", () => startOver());
  }, 500); // Delay of 500ms
};

// Reset the conversation and start over
const startOver = () => {
  chat.innerHTML = ""; // Clear the chat
  userName = ""; // Reset variables
  questionNumber = 1;
  greeting(); // Start the conversation again
};
// Event listeners for sending text input
submit.addEventListener("click", () => nextQuestion(nameInput.value));
nameInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && nameInput.value) nextQuestion(nameInput.value);
});

// Start the conversation
// setTimeout(greeting, 500);
greeting();

// Prevent default form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
