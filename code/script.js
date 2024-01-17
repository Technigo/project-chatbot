
// Accessing DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const nameForm = document.getElementById('name-form');
const inputHandle = document.getElementById('input-wrapper')
const sendButton = document.getElementById('send-btn')

// Global variables

let userName = '';
let foodOptions = '';
let foodMessage = '';


// Function to display messages in the chat
const showMessage = (message, sender) => {
  console.log("MESSAGE IS:", message);
  console.log("SENDER IS:", sender);
  if (sender === 'user') {
    // Add user message to chat
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message

  } else if (sender === 'bot') {
    // Add bot message to chat
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight;// Scroll to the latest message

};

// Function to get the current time of day
const getCurrentTimeOfDay = () => {
  const hour = new Date().getHours();
  return (hour < 12) ? 'morning' : (hour < 18) ? 'afternoon' : 'evening';
};

// Initial greeting message from the bot
const greetUser = () => {
  const timeOfDay = getCurrentTimeOfDay();
  showMessage(`Good ${timeOfDay}! Welcome to Pizzeria Del Carmen. What's your name?`, 'bot');
};
setTimeout(greetUser, 1000);

// Event handler for name input submission
const handleNameInput = (event) => {
  console.log("reply", event);
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(`I'm ${userName}! Nice to meet you!`, 'user');
  setTimeout(reply, 1500);// Proceed to the next step after a delay
};
nameForm.addEventListener("submit", handleNameInput);

// Function to ask user about food preference
function reply() {
  console.log("reply");

  showMessage(`Are you hungry, ${userName}? please choose your food.`, 'bot');

  // Display food options as buttons
  inputHandle.innerHTML = `
<button class="send-btn" id="pizza">Pizza</button>
<button class="send-btn" id="pasta">Pasta</button>
<button class="send-btn" id="salad">Salad</button>
`;

  // Add event listeners to food option buttons
  const foodButtons = inputHandle.querySelectorAll('.send-btn');
  foodButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedfood = event.target.id;
      showMessage(`I would like some ${selectedfood}`, 'user'); // User's choice displayed
      foodChoice(selectedfood); // Continue with bot response
    });
  });
}

// Function to handle food choice and present more options
function foodChoice(choice) {
  inputHandle.innerHTML = '';// Clear previous options

  // Set food options and messages based on the choice
  let foodOptions, foodMessage;
  if (choice === 'pizza') {
    foodOptions = ['Napolitana', 'Margeritha', 'Bianca'];
    foodMessage = 'Which pizza would you like to order? Choose from the menu.';
  } else if (choice === 'pasta') {
    foodOptions = ['Cacio e Pepe', 'Vongole', 'Carbonara'];
    foodMessage = 'Which pasta would you like to order? Choose from the menu.';
  } else if (choice === 'salad') {
    foodOptions = ['Pomodoro e basilico', 'Buratta', 'Melon e Peperoncino'];
    foodMessage = 'Which salad would you like to order? Choose from the menu.';
  }

  showMessage(foodMessage, 'bot');

  // Create and display a dropdown menu for detailed food options
  const dropdown = document.createElement('select');
  dropdown.id = 'food-dropdown';
  dropdown.classList.add('dropdown-style');

  // Add a default 'choose' option
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Choose food here';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  dropdown.appendChild(defaultOption);

  // Add food options to the dropdown
  foodOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    dropdown.appendChild(optionElement);
  });

  // Handle dropdown selection
  dropdown.addEventListener('change', (event) => {
    const selectedfood = event.target.value;
    showMessage(`Yummy! I've chosen ${selectedfood}.`, 'user');
    showAgeOptions(selectedfood);
  });

  inputHandle.appendChild(dropdown);
}


function showAgeOptions(selectedSize) {
  console.log(showAgeOptions);
  showMessage(`Great ${userName}! What size do you like to order your food? Do you want a regular size or small size, may I ask if you are an adult or child?`, 'bot');
  inputHandle.innerHTML = '';

  const ageButtons = document.createElement('div');
  console.log(ageButtons);
  ageButtons.innerHTML = `
  <button class="send-btn" id= "adult">Adult</button>
  <button class="send-btn" id= "child">Child</button>
  `;
  inputHandle.appendChild(ageButtons);

  const ageButtonsElements = ageButtons.querySelectorAll('.send-btn')
  console.log(ageButtonsElements);
  ageButtonsElements.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedSize = event.target.id;
      showMessage(`I am an ${selectedSize} and I would like a ${selectedSize} size ${selectedFood}.`, 'user'); // User's choice displayed
      ageOptions(selectedFood, selectedSize);
    });
  });
}

function showAgeOptions(selectedFood) {
  showMessage(`Great ${userName}! What size of ${selectedFood} would you like to order? Are you an adult or a child?`, 'bot');
  inputHandle.innerHTML = `
    <button class="send-btn" id="adult">Adult</button>
    <button class="send-btn" id="child">Child</button>
  `;

  document.getElementById('adult').addEventListener('click', () => {
    userSizeChoice('adult', selectedFood);
  });

  document.getElementById('child').addEventListener('click', () => {
    userSizeChoice('child', selectedFood);
  });
}

function userSizeChoice(sizeChoice, foodChoice) {
  showMessage(`I am an ${sizeChoice} and I would like a ${sizeChoice} size ${foodChoice}.`, 'user');

  ageOptions(foodChoice, sizeChoice);
}

function ageOptions(foodChoice, sizeChoice) {
  // This function handles the user's size choice
  let priceMessage;
  if (sizeChoice === 'adult') {
    priceMessage = `The price for an adult size ${foodChoice} is 15€.`;
  } else if (sizeChoice === 'child') {
    priceMessage = `The price for a small size ${foodChoice} is 10€.`;
  }
  showMessage(priceMessage, 'bot');

  setTimeout(() => {
    askForConfirmation(foodChoice, sizeChoice);
  }, 1500);
}

function askForConfirmation(foodChoice, selectedSize) {
  showMessage(`Is this OK?`, 'bot');

  inputHandle.innerHTML = `
    <button class="send-btn" id="confirm-size">Yes</button>
    <button class="send-btn" id="cancel-size">No</button>
  `;

  document.getElementById('confirm-size').addEventListener('click', () => {
    showMessage(`Yes, that's fine.`, 'user'); // User confirms
    orderConfirmation(foodChoice, selectedSize); // Proceed with order confirmation
  });

  document.getElementById('cancel-size').addEventListener('click', () => {
    showMessage(`No, I want to change my order.`, 'user');
    setTimeout(reply, 1500); // User wants to change the order

  });
}


function orderConfirmation(foodChoice, selectedSize) {
  showMessage(`This is your order ${userName}, an ${foodChoice} for a ${selectedSize}! Enjoy!`, 'bot');

  inputHandle.innerHTML = ` 
    <button class="send-btn" id="confirm">Yes, I accept this order!</button>
    <button class="send-btn" id="cancel">No, I want to cancel my order.</button>
  `;

  const confirmBtn = document.getElementById('confirm');
  const cancelBtn = document.getElementById('cancel');

  confirmBtn.addEventListener('click', () => {
    showMessage(`Thanks for confirming your order! You ordered ${foodChoice} (${selectedSize} size). Your food will soon be at your place.`, 'bot');
    displayRestartButton();
  });

  cancelBtn.addEventListener('click', () => {
    showMessage(`Your order has been canceled. Welcome back! Feel free to order food next time you are hungry.`, 'bot');
    displayRestartButton();
  });
}

function displayRestartButton() {
  inputHandle.innerHTML = `
    <button class="send-btn" id="restart-chat">Restart Order</button>
  `;

  const restartBtn = document.getElementById('restart-chat');
  restartBtn.addEventListener('click', restartChat);
}

function restartChat() {
  userName = ''; // Reset username
  foodOptions = ''; // Reset food options
  foodMessage = ''; // Reset food message
  chat.innerHTML = ''; // Clear the chat history

  // Re-render the name input form
  inputHandle.innerHTML = `
    <form id="name-form">
      <label for="name-input">Name</label>
      <input id="name-input" type="text" />
      <button class="send-btn" type="submit">Send</button>
    </form>
  `;

  // Re-attach the event listener to the new form
  document.getElementById('name-form').addEventListener("submit", handleNameInput);


  setTimeout(greetUser, 500);
}