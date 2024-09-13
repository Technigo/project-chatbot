// DOM selectors

const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');

// Functions

// Welcome the user back again
const goodbyeMessage = (choice) => {
  if (choice === 'Yes') { // If yes, message that order is prepaired
    showMessage(`Your order will be prepaired. Thank you for using the Cookiebot! 🍪`, 'bot');
  } else { // If no, massage that the order is canceled 
    showMessage(`No order has been placed. Hope we meet again soon!`, 'bot')
  }
};

// User bubble show confirmation choice
const handleConfirmationChoice = (choice) => {
  showMessage(`${choice}`, 'user');
  document.getElementById('buttonContainer').style.display = 'none'; // Hide buttons
  setTimeout(() => goodbyeMessage(choice), 1000);
};

// Confirmation buttons
const createConfirmationButtons = () => {
  form.style.display = 'none'; // Hide form
  form.innerHTML = `
    <div class="button-container" id="buttonContainer">
      <button type="button" id="yesButton" class="button-class">Yes</button>
      <button type="button" id="noButton" class="button-class">No</button>
    </div>
  `;
  form.style.display = 'block'; // Show buttons

  // DOM, Event listeners and invoking yes or no buttons
  document.getElementById('yesButton').addEventListener('click', () => handleConfirmationChoice('Yes'));
  document.getElementById('noButton').addEventListener('click', () => handleConfirmationChoice('No'));
};

// Ask for order confirmation
// Also printing out correct price depending on drink or not
const askForOrderConfirmation = (choice) => {
  let totalPrice = '';
  if (choice === 'Milk' || choice === 'Coffee') {
    totalPrice = '$10';
  } else {
    totalPrice = '$5';
  }
  showMessage(`Wonderful! The total price will be ${totalPrice}, are you sure you'd like to place the order?`, 'bot')
  createConfirmationButtons();
};

// User bubble show drink choice and passes the choice to next function
const handleDrinkChoice = (choice) => {
  showMessage(`${choice} please`, 'user');
  document.getElementById('buttonContainer').style.display = 'none'; // Hide buttons
  setTimeout(() => askForOrderConfirmation(choice), 1000);
};

// Drink buttons
const createDrinkButtons = () => {
  form.style.display = 'none'; // Hide form
  form.innerHTML = `
    <div class="button-container" id="buttonContainer">
      <button type="button" id="milk" class="button-class">🥛 Milk</button>
      <button type="button" id="coffee" class="button-class">☕️ Coffee</button>
      <button type="button" id="noDrink" class="button-class">No drink</button>
    </div>
  `;
  form.style.display = 'block'; // Show buttons

  // DOM, Event listeners and Invoking each drink button
  document.getElementById('milk').addEventListener('click', () => handleDrinkChoice('Milk'));
  document.getElementById('coffee').addEventListener('click', () => handleDrinkChoice('Coffee'));
  document.getElementById('noDrink').addEventListener('click', () => handleDrinkChoice('No drink'));
};

// Asking for drink
const askForDrinkChoice = (choice) => {
  showMessage(`Mmm ${choice}, great choice, would you like a drink?`, 'bot')
  createDrinkButtons();
};

// User bubble show cookie choice and passes the choice to next function
const handleCookieChoice = (choice) => {
  showMessage(`I choose ${choice}!`, 'user');
  document.getElementById('buttonContainer').style.display = 'none'; // Hide buttons
  setTimeout(() => askForDrinkChoice(choice), 1000);
};

// Cookie buttons 
const createCookieButtons = () => {
  form.style.display = 'none'; // hide form
  form.innerHTML = `
    <div class="button-container" id="buttonContainer">
      <button type="button" id="darkChocolate" class="button-class">🍪 Dark chocolate</button>
      <button type="button" id="milkChocolate" class="button-class">🍪 Milk chocolate</button>
      <button type="button" id="nutsChocolate" class="button-class">🍪 Nuts and white chocolate</button>
    </div>
    `;
  form.style.display = 'block'; // show buttons

  // Here I: 
  // 1.Select DOMs, 
  // 2.Add Event listeners 
  // 3.Invoking handleCookieChoice function + passes the cookie choice
  document.getElementById('darkChocolate').addEventListener('click', () => handleCookieChoice('Dark chocolate'));
  document.getElementById('milkChocolate').addEventListener('click', () => handleCookieChoice('Milk chocolate'));
  document.getElementById('nutsChocolate').addEventListener('click', () => handleCookieChoice('Nuts and white chocolate'));
};

// Asking for what kind of cookie
const askForCookieChoice = (name) => {
  showMessage(`Welcome ${name}! What kind of cookie would you like to order?`, 'bot');
  createCookieButtons();
};

// Handeling the name input, if the user types nothing in the field
//the bot will ask again for name 
// If the user print in a name, the program continues 
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value.trim(); // Trim is getting rid of spaces
  if (name === "") {
    showMessage(name, "user");
    setTimeout(() => { // Using setTimeout to delay the bot message
      showMessage("Please type in your name...", 'bot');
      form.addEventListener('submit', handleNameInput); // Invoking the function again
    }, 1000);
  } else {
    showMessage(name, "user");
    nameInput.value = ""; // Empty textfield
    setTimeout(() => askForCookieChoice(name), 1000); // Continue with the next question
  }
};

// Event listener for the form
form.addEventListener('submit', handleNameInput);

// Funcion that shows diffrent chat bubbles depending on 'user' or 'bot'
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/userlogomonster.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/botpic2.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  setTimeout(() => {
    chat.scrollTop = chat.scrollHeight;
  }, 10);
};

// Greeting message
const greetUser = () => {
  showMessage("Hello! I'm the Cookiebot, what's your name?", 'bot');
};

// Start by greeting the user Welcome!
setTimeout(greetUser, 1000);