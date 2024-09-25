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
        showMessage(`Nice to meet you, ${userName}! Do you prefer a beach or a mountain trip?`, 'bot');
        askForTripType(); // Ask for the trip type next
      }, 1000);
    }
  });
};

// Function to ask for trip type
const askForTripType = () => {
  const inputWrapper = document.getElementById('input-wrapper');
  inputWrapper.innerHTML = `
    <form id="trip-form">
      <label for="trip-type">Choose your trip type:</label>
      <select id="trip-type" required>
        <option value="">Select...</option>
        <option value="beach">Beach</option>
        <option value="mountain">Mountain</option>
      </select>
      <button class="send-btn" type="submit">Submit</button>
    </form>
  `;

  document.getElementById('trip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const tripType = document.getElementById('trip-type').value;

    if (tripType === "beach") {
      showMessage("Beach", 'user');
      showMessage("I recommend visiting the Maldives for an amazing beach experience!", 'bot');
      askForPreferences(); // Continue with the next question
    } else if (tripType === "mountain") {
      showMessage("Mountain", 'user');
      showMessage("I recommend exploring the Swiss Alps for breathtaking mountain views!", 'bot');
      askForPreferences(); // Continue with the next question
    } else {
      showMessage("Please select a valid option.", 'bot');
    }
  });
};

// Function to ask about travel preferences (updated with "With my partner" option)
const askForPreferences = () => {
  const inputWrapper = document.getElementById('input-wrapper');
  inputWrapper.innerHTML = `
    <p>Do you like to travel alone, with friends, or with your partner?</p>
    <button id="alone-btn">Alone</button>
    <button id="friends-btn">With friends</button>
    <button id="partner-btn">With my partner</button>
  `;

  document.getElementById('alone-btn').addEventListener('click', () => {
    showMessage("Alone", 'user');
    showMessage("Solo trips can be really peaceful! How about a quiet place in the mountains?", 'bot');
  });

  document.getElementById('friends-btn').addEventListener('click', () => {
    showMessage("With friends", 'user');
    showMessage("Trips with friends are so much fun! A beach resort could be perfect.", 'bot');
  });

  document.getElementById('partner-btn').addEventListener('click', () => {
    showMessage("With my partner", 'user');
    showMessage("Paris is the city of love! I recommend a romantic trip to Paris!", 'bot');
  });
};

// Start the conversation with a delay
setTimeout(greetUser, 1000);
