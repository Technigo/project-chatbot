console.log('script.js is running');

// Select important elements from the HTML and assign them to variables for later use
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
const chatToggle = document.getElementById('js-chat-toggle');
const chatContainer = document.getElementById('js-chat-container');

// Declare global variables to store user information
let userName = '';

// Funct. to display messages in the chat window
const showMessage = (message, sender) => {
  let messageSection = `
      <section class='${sender}-msg'>
        <img src='assets/${sender}1.png' alt='${sender}' />
        <div class='bubble ${sender}-bubble'>
          <p>${message}</p>
        </div>
      </section>`;

  chat.innerHTML += messageSection;
  chat.scrollTop = chat.scrollHeight;
};

// Capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Send a series of greetings from the bot when the page loads
const greetUser = () => {
  showMessage(`Hello there!`, 'bot');
  showMessage(`I'm Elbine, a chatbot.`, 'bot');
  showMessage(`What's your name?`, 'bot');
};

// Handle the event when the user submits their name
const userNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value.trim();

  if (userName) {
    userName = capitalizeFirstLetter(userName);
    nameForm.remove();
    showMessage(userName, 'user');
    setTimeout(() => welcomeUser(userName), 500);
    setTimeout(() => askForChoice(), 1000);
  }
};

function welcomeUser(userName) {
  showMessage(`Welcome to 'Elbines-Plants' ${userName}!`, 'bot');
}

const askForChoice = () => {
  showMessage(`Would you like to continue?`, 'bot');
  inputWrapper.innerHTML = `
    <button class='send-btn' id='Yes'>YES</button> 
    <button class='send-btn' id='No'>NO</button>`;

  //Event listeners to the Yes and No buttons
  document.querySelectorAll('.send-btn').forEach(button => {
    button.addEventListener('click', handleContinueChoice);
  });
  chat.scrollTop = chat.scrollHeight;
};

// Handles the user's choice of Yes or No
function handleContinueChoice(event) {
  inputWrapper.innerHTML = '';
  const choice = event.target.id;

  if (choice === 'Yes') {
    showMessage(`Please select a category:`, 'bot');
    showOptionsPlantCat(['Green Plants 🌱 ', 'Flowers 🌻 ', 'Plant Supplies 🧰 ']);
  } else if (choice === 'No') {
    showMessage(`Feel free to browse our webpage.`, 'bot');
  }
  chat.scrollTop = chat.scrollHeight;
}

// Displays buttons for different plant categories
function showOptionsPlantCat(options) {
  inputWrapper.innerHTML = '';
  options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'send-btn';
    button.textContent = option;
    //Event listeners to each category button
    button.addEventListener('click', () => selectCategory(option));
    inputWrapper.appendChild(button);
  });
}

// Handle user's selection of a plant category
function selectCategory(option) {
  showMessage(option, 'user');
  setTimeout(() => askPriceRange(option), 500);
}

// Ask user for preferred price range
function askPriceRange(option) {
  showMessage(`What is your price range for ${option}?`, 'bot');
  inputWrapper.innerHTML = `
    <select id='price-select'>
      <option value=''>Please choose an option:</option>
      <option value='PriceRange1'>From 100 - 300,- </option>
      <option value='PriceRange2'>From 300 - 500,- </option>
      <option value='PriceRange3'>From 500 - 1000,- </option>
      <option value='PriceRange4'>1000,- and up </option>
    </select>`;

  // Event listener to the price range selection
  document.getElementById('price-select').addEventListener('change', confirmPriceRange);
}

// Confirm the selected price range
const confirmPriceRange = (event) => {
  let selectedPriRan = event.target.value;
  let priceRangeText = '';

  switch (selectedPriRan) {
    case 'PriceRange1':
      priceRangeText = '100 - 300kr';
      break;
    case 'PriceRange2':
      priceRangeText = '300 - 500kr';
      break;
    case 'PriceRange3':
      priceRangeText = '500 - 1000kr';
      break;
    case 'PriceRange4':
      priceRangeText = '1000kr and up';
      break;
    default:
      priceRangeText = 'Unknown range';
  }

  showMessage(`My price range is ${priceRangeText}`, 'user');
  setTimeout(() => showMessage(`Options for ${priceRangeText} will be selected.`, 'bot'), 500);
  setTimeout(() => deliveryStepBtn(), 1300);
};

// Asks user for their delivery preference
const deliveryStepBtn = () => {
  showMessage(`Do you prefer pick-up or delivery?`, 'bot');
  inputWrapper.innerHTML = `
    <button class='send-btn' id='pick-up'>PICK UP</button> 
    <button class='send-btn' id='delivery'>DELIVERY</button>`;

  //Event listeners to the delivery options
  document.querySelectorAll('.send-btn').forEach(button => {
    button.addEventListener('click', handleDeliveryChoice);
  });
};

// Handle the user's delivery choice
function handleDeliveryChoice(event) {
  let deliveryChoice = event.target.id;
  showMessage(deliveryChoice === 'pick-up' ? `I want to pick up myself.` : `I would like a delivery.`, 'user');
  showMessage(deliveryChoice === 'pick-up' ? `Sure! Orders can be picked up at our store.` : `Sure! We offer next-day delivery.`, `bot`);
  setTimeout(emailYesNo, 500);
}

// Asks the user if they want to receive an email
const emailYesNo = () => {
  showMessage(`Do you want us to send you an email with options based on your preferences?`, 'bot');
  showMessage(`Please type Yes or No.`, 'bot');
  inputWrapper.innerHTML = `
    <form id='yes-no-form'>
      <input id='yes-no-input' type='text' placeholder='Type here...' autoFocus>`;

  //Event listener for email consent form submission
  document.getElementById('yes-no-form').addEventListener('submit', handleEmailConsent);
};

// Handle the submission of the Yes/No question about receiving an email
function handleEmailConsent(event) {
  event.preventDefault();
  const userInput = document.getElementById('yes-no-input').value.trim().toLowerCase();
  showMessage(userInput, 'user');
  if (userInput === 'yes') {
    enterEmailForPreferences();
  } else if (userInput === 'no') {
    setTimeout(() => showMessage('No problem, feel free to browse our site!', 'bot'), 500);
  } else {
    setTimeout(() => showMessage('Invalid answer, please enter Yes or No.', 'bot'), 500);
  }
};

// Asks user to enter their email
const enterEmailForPreferences = () => {
  showMessage(`Please enter your e-mail`, 'bot');
  inputWrapper.innerHTML = `
    <form id='preferences-email-form'>
      <input id='preferences-email-input' type='email' placeholder='Enter your email...' required autoFocus>`;

  //Event listener for preferences email form submission
  document.getElementById('preferences-email-form').addEventListener('submit', submitPreferencesEmail);
};

// Handle the submission of user's email
function submitPreferencesEmail(event) {
  event.preventDefault();
  const email = document.getElementById('preferences-email-input').value;
  showMessage(email, 'user');
  if (validateEmail(email)) {
    setTimeout(() => showMessage(`Thank you! You will soon receive an email at ${email}.`, 'bot'), 500);
  } else {
    setTimeout(() => showMessage('Please enter a valid email address.', 'bot'), 500);
  }
};

// Validate the entered email format, so only text that looks like emails are approved
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Event listener for submitting the user's name
nameForm.addEventListener('submit', userNameInput);

// Event listener for toggling the chat interface
chatToggle.addEventListener('click', () => {
  chatContainer.classList.toggle('open');
});

// Calls the greetUser function shortly after the page loads
setTimeout(greetUser, 500);
