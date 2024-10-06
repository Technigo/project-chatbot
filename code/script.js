// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // Scroll to the last message when too many messages are in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot');

  const inputWrapper = document.getElementById('input-wrapper');
  inputWrapper.innerHTML = `
    <form id="name-form">
      <input id="name-input" type="text" placeholder="Enter your name" required />
      <button class="send-btn" type="submit">Submit</button>
    </form>
  `;

  document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const userName = document.getElementById('name-input').value;

    if (userName) {
      showMessage(userName, 'user');
      setTimeout(() => {
        showMessage(`Nice to meet you, ${userName}! I'm a travel bot, let's plan a nice trip. Will you be traveling solo, with friends, or as a couple?`, 'bot');
        askForTripType(); // Ask for the trip type next
      }, 1000);
    }
  });
};

// Function to ask for trip type (Solo, friends or couple)
const askForTripType = () => {
  const inputWrapper = document.getElementById('input-wrapper');
  inputWrapper.innerHTML = `
    <form id="trip-form">
      <label for="trip-type">Choose your trip type:</label>
      <select id="trip-type" required>
        <option value="">Select...</option>
        <option value="Solo">Solo</option>
        <option value="Friends">Friends</option>
        <option value="Couple">Couple</option>
      </select>
      <button class="send-btn" type="submit">Submit</button>
    </form>
  `;

  document.getElementById('trip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const tripType = document.getElementById('trip-type').value;

    if (tripType === "Solo") {
      showMessage("Solo", 'user');
      suggestSoloDestinations(); // Suggest solo destinations
    } else if (tripType === "Friends") {
      showMessage("With Friends", 'user');
      suggestFriendsDestinations(); // Suggest friends destinations
    } else if (tripType === "Couple") {
      showMessage("As a Couple", 'user');
      suggestCoupleDestinations(); // Suggest couple destinations
    } else {
      showMessage("Please select a valid option.", 'bot');
    }
  });
};

// Function to suggest solo destinations and let the user choose
const suggestSoloDestinations = () => {
  showMessage("How about a trip to Japan or New Zealand?", 'bot');
  
  const inputWrapper = document.getElementById('input-wrapper');
  inputWrapper.innerHTML = `
    <button id="japan-btn">Japan</button>
    <button id="nz-btn">New Zealand</button>
  `;

  // Event listeners for the destination choice
  document.getElementById('japan-btn').addEventListener('click', () => {
    confirmChoice("Japan");
  });

  document.getElementById('nz-btn').addEventListener('click', () => {
    confirmChoice("New Zealand");
  });
};

// Function to suggest destinations for friends and let the user choose
const suggestFriendsDestinations = () => {
  showMessage("How about a fun trip to Thailand or Spain?", 'bot');
  
  const inputWrapper = document.getElementById('input-wrapper');
  inputWrapper.innerHTML = `
    <button id="thailand-btn">Thailand</button>
    <button id="spain-btn">Spain</button>
  `;

  // Event listeners for the destination choice
  document.getElementById('thailand-btn').addEventListener('click', () => {
    confirmChoice("Thailand");
  });

  document.getElementById('spain-btn').addEventListener('click', () => {
    confirmChoice("Spain");
  });
};

// Function to suggest destinations for couples and let the user choose
const suggestCoupleDestinations = () => {
  showMessage("How about a romantic trip to Italy or Greece?", 'bot');
  
  const inputWrapper = document.getElementById('input-wrapper');
  inputWrapper.innerHTML = `
    <button id="italy-btn">Italy</button>
    <button id="greece-btn">Greece</button>
  `;

  // Event listeners for the destination choice
  document.getElementById('italy-btn').addEventListener('click', () => {
    confirmChoice("Italy");
  });

  document.getElementById('greece-btn').addEventListener('click', () => {
    confirmChoice("Greece");
  });
};

// Function to confirm the user's choice and provide a validation step
const confirmChoice = (destination) => {
  showMessage(`You selected ${destination}. Do you want to confirm this choice?`, 'bot');

  const inputWrapper = document.getElementById('input-wrapper');
  inputWrapper.innerHTML = `
    <button id="confirm-btn">Confirm</button>
    <button id="change-btn">Change destination</button>
  `;

  document.getElementById('confirm-btn').addEventListener('click', () => {
    showMessage(`Confirmed! You will travel to ${destination}.`, 'user');
    setTimeout(() => endConversation(), 1000);
  });

  document.getElementById('change-btn').addEventListener('click', () => {
    if (destination === "Japan" || destination === "New Zealand") {
      suggestSoloDestinations();
    } else if (destination === "Thailand" || destination === "Spain") {
      suggestFriendsDestinations();
    } else if (destination === "Italy" || destination === "Greece") {
      suggestCoupleDestinations();
    }
  });
};

// Function to end the conversation
const endConversation = () => {
  showMessage("Awesome choice! I'll send the tickets to your mail right away. Thank you for trusting me!", 'bot');
};

// Start the conversation with a delay
setTimeout(greetUser, 1000);
