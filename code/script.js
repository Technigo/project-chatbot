// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputSection = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:
let myPizza = '';
let mySize = '';

// Containing two message, the user selection and confirmation from bot
const selectSize = (size) => {
  mySize = size;
  showMessage(size, 'user');
  showMessage(`Super Mario, you chose the ${size} size for your ${myPizza}`, 'bot');
  showConfirmationMenu();
};

const showDropdownMenuInsteadOfPizzaButtons = () => {
  inputSection.innerHTML = `
    <div class="sizeOptions">
      <select id="selectSize">
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button id="sizeButton">Select</button>
    </div>
  `;

  const option = document.getElementById('selectSize');
  document.getElementById('sizeButton').addEventListener('click', () => selectSize(option.value));
};

const showConfirmationMenu = () => {
  inputSection.innerHTML = `
    <div class="confirmationOption">
      <button id="acceptButton">Accept</button>
      <button id="declineButton">Decline</button>
    </div>
  `;

  document.getElementById('acceptButton').addEventListener('click', () => confirmOrder());
  document.getElementById('declineButton').addEventListener('click', () => declineOrder());
};

const confirmOrder = () => {
  inputSection.innerHTML = '';
  showMessage(`Great! Your pizza will be ready in 15 minutes. Enjoy!`, 'bot');
};

const declineOrder = () => {
  inputSection.innerHTML = '';
  showMessage(`Hope you have a great day!`, 'bot');
};

const pizzaSize = (pizzaSizes) => {
  myPizza = pizzaSizes;
  showMessage(pizzaSizes, 'user');
  showMessage(`Fantastic! You chose ${pizzaSizes}! What size would you like?`, 'bot');
  showDropdownMenuInsteadOfPizzaButtons();
};

const showMenuButtonsInsteadOfForm = () => {
  inputSection.innerHTML = `
    <div class="pizzaButton">
      <button id="MargheritaButton">Margherita</button>
      <button id="FungiButton">Fungi</button>
      <button id="CapricciosaButton">Capricciosa</button>
    </div>
  `;

  document.getElementById('MargheritaButton').addEventListener('click', () => pizzaSize('Margherita'));
  document.getElementById('FungiButton').addEventListener('click', () => pizzaSize('Fungi'));
  document.getElementById('CapricciosaButton').addEventListener('click', () => pizzaSize('Capricciosa'));
};

const sendMessage = (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get the user's input from the name input field
  const inputField = document.getElementById('name-input');
  const userName = inputField.value.trim(); // Trim leading and trailing whitespaces

  // If the input is empty, display an error message and exit
  if (!userName) {
    showMessage('Please enter a name before proceeding.', 'bot');
    return;
  }

  // Define a regular expression pattern to check for numbers
  const numberPattern = /\d/;

  // Check if the user's name input contains numbers
  if (numberPattern.test(userName)) {
    // Display an error message if numbers are found
    showMessage('Invalid input. Please enter a name without numbers.', 'bot');
    return; // Exit the function, don't proceed further
  }

  // If the input is valid (no numbers), proceed
  showMessage(userName, 'user');
  showMessage(`Welcome ${userName}! What would you like to order today?`, 'bot');
  showMenuButtonsInsteadOfForm();

  // Clear the input field
  inputField.value = '';
};


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
    console.log('Hiya!');
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/pizzaman.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // Scroll to the last message in the chat
  chat.scrollTop = chat.scrollHeight;
};

// Function to greet the user initially
const greetUser = () => {
  showMessage("Ciao! What's your name?", 'bot');
};

// Set up your event listeners
form.addEventListener('submit', sendMessage);

// Initial greeting message
setTimeout(greetUser, 700);
