// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat');
const inputField = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

// Variables for order details
let selectedPizza = '';
let extras = [];
let size = '';

// Options for pizzas and extra ingredients
const pizzaOptions = {
  Margherita: 10,
  Pepperoni: 12,
  "Four Cheese": 14,
  "Veggie Deluxe": 13
};

const extraOptions = {
  "Extra Cheese": 2,
  "Mushrooms": 1.5,
  "Olives": 1,
  "Pepperoni": 2.5
};

// Functions goes here 👇

//when website is loaded, chatbot asks the first question
const greetUser = () => {
  console.log("Welcome to Maria's Pizza! What type of pizza would you like to order today?", "bot");
  showMessage("Hello!", "user");
};


// Show pizza options to the user
const showPizzaOptions = () => {
  let pizzaList = Object.keys(pizzaOptions).map(pizza => `${pizza} ($${pizzaOptions[pizza]})`).join(', ');
  showMessage(`We have the following options: ${pizzaList}`, "bot");
};

// Show extra ingredients options to the user
const showExtraOptions = () => {
  let extraList = Object.keys(extraOptions).map(extra => `${extra} ($${extraOptions[extra]})`).join(', ');
  showMessage(`Would you like any extra ingredients? Here are the options: ${extraList}. Type 'no' if you don't want extras.`, "bot");
};

// Show size options to the user
const showSizeOptions = () => {
  showMessage("Would you like a portion for a child ($5 less) or an adult?", "bot");
};

// Function to handle user input and bot responses
const handleUserInput = () => {
  const userInput = inputField.value;
  showMessage(userInput, 'user');

  if (!selectedPizza) {
    // Select pizza
    if (pizzaOptions[userInput]) {
      selectedPizza = userInput;
      showExtraOptions();
    } else {
      showMessage("Please select a valid pizza option.", "bot");
    }
  } else if (extras.length === 0) {
    // Select extra ingredients
    if (userInput.toLowerCase() === 'no') {
      showSizeOptions();
    } else if (extraOptions[userInput]) {
      extras.push(userInput);
      showMessage(`${userInput} added to your order. Any other extras? (Type 'no' to finish)`, "bot");
    } else {
      showMessage("Please select a valid extra ingredient or type 'no'.", "bot");
    }
  } else if (!size) {
    // Select size
    if (userInput.toLowerCase() === 'child') {
      size = 'child';
      finalizeOrder();
    } else if (userInput.toLowerCase() === 'adult') {
      size = 'adult';
      finalizeOrder();
    } else {
      showMessage("Please choose between 'child' or 'adult' portion.", "bot");
    }
  }

  inputField.value = ''; // Clear input field after each input
};

// Function to finalize the order and show the total price
const finalizeOrder = () => {
  let basePrice = pizzaOptions[selectedPizza];
  let extraPrice = extras.reduce((sum, extra) => sum + extraOptions[extra], 0);
  let sizeDiscount = size === 'child' ? 5 : 0;
  let totalPrice = basePrice + extraPrice - sizeDiscount;

  showMessage(`Great choice! You've ordered a ${selectedPizza} pizza with ${extras.length > 0 ? extras.join(', ') : 'no extras'} for a ${size} portion.`, "bot");
  showMessage(`The total price is $${totalPrice}. Thank you for your order!`, "bot");
};

// Function to show messages in the chat

const showMessage = (msg, sender) => {
  console.log("MESSAGE IS:", msg);
  console.log("SENDER IS:", sender);
  // The if statement checks if the sender is the user
  if (sender === "user") {
    chat.innerHTML += `<section class="user-msg">
  <div class="bubble user-bubble">
    <p>${msg}</p>
  </div>
  <image src="./assets/user.png" alt="user bot" />
</section>`;
    // The else if statement checks if the sender is the bot
  } else if (sender === "bot") {
    chat.innerHTML += `<section class="bot-msg">
  <div class="bubble bot-bubble">
    <p>${msg}</p>
  </div>
  <image src="./assets/bot.png" alt="chat bot" />
</section>`;
  }


  chat.scrollTop = chat.scrollHeight; // Auto-scroll to the bottom
};


// Event listeners
sendButton.addEventListener('click', handleUserInput);
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});





