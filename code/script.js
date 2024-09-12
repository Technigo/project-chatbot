// DOM selectors

const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');

// Functions

//Welcome them back
const goodbyeMessage = (choice) => {
  if (choice === 'Yes') {
    showMessage(`Your order will be prepaired. Thank you for using the Cookiebot!`, 'bot');
  } else {
    showMessage(`No order has been placed. Hope we meet again soon!`, 'bot')

  }
}

const handleConfirmationChoice = (choice) => {
  showMessage(`${choice}`, 'user');
  setTimeout(() => goodbyeMessage(choice), 1000);
}


const createConfirmationButtons = () => {
  form.style.display = 'none'; // Dölj formuläret
  form.innerHTML = `
    <button type="button" id="yesButton" class="button-class">Yes</button>
    <button type="button" id="noButton" class="button-class">No</button>
  `;
  form.style.display = 'block'; // Visa knapparna

  // Lägg till event listeners för varje knapp
  document.getElementById('yesButton').addEventListener('click', () => handleConfirmationChoice('Yes'));
  document.getElementById('noButton').addEventListener('click', () => handleConfirmationChoice('No'));
}


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

const handleDrinkChoice = (choice) => {
  showMessage(`${choice} please`, 'user');

  setTimeout(() => askForOrderConfirmation(choice), 1000);
};

const createDrinkButtons = () => {
  form.style.display = 'none'; // Dölj formuläret
  form.innerHTML = `
    <button type="button" id="milk" class="button-class">🥛 Milk</button>
    <button type="button" id="coffee" class="button-class">☕️ Coffee</button>
    <button type="button" id="noDrink" class="button-class">No drink</button>
  `;
  form.style.display = 'block'; // Visa knapparna

  // Lägg till event listeners för varje knapp
  document.getElementById('milk').addEventListener('click', () => handleDrinkChoice('Milk'));
  document.getElementById('coffee').addEventListener('click', () => handleDrinkChoice('Coffee'));
  document.getElementById('noDrink').addEventListener('click', () => handleDrinkChoice('No drink'));
};

const askForDrinkChoice = (choice) => {
  showMessage(`Mmm ${choice}, great choice, would you like a drink?`, 'bot')
  createDrinkButtons();
}

const handleCookieChoice = (choice) => {
  showMessage(`I choose ${choice}!`, 'user');

  setTimeout(() => askForDrinkChoice(choice), 1000);
};

const createCookieButtons = () => {
  form.style.display = 'none'; // Dölj formuläret
  form.innerHTML = `
    <button type="button" id="darkChocolate" class="button-class">🍪 Dark chocolate</button>
    <button type="button" id="milkChocolate" class="button-class">🍪 Milk chocolate</button>
    <button type="button" id="nutsChocolate" class="button-class">🍪 Nuts and white chocolate</button>
  `;
  form.style.display = 'block'; // Visa knapparna

  // Lägg till event listeners för varje knapp
  document.getElementById('darkChocolate').addEventListener('click', () => handleCookieChoice('Dark chocolate'));
  document.getElementById('milkChocolate').addEventListener('click', () => handleCookieChoice('Milk chocolate'));
  document.getElementById('nutsChocolate').addEventListener('click', () => handleCookieChoice('Nuts and white chocolate'));
};

const askForCookieChoice = (name) => {
  showMessage(`Hello ${name}! What kind of cookie would you like to order?`, 'bot');
  createCookieButtons();
};

// Event listener för formuläret
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";

  setTimeout(() => askForCookieChoice(name), 1000);
};

form.addEventListener('submit', handleNameInput);

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
  chat.scrollTop = chat.scrollHeight;
};

const greetUser = () => {
  showMessage("Welcome! I'm the Cookiebot, what's your name?", 'bot');
};



// Starta med att hälsa användaren välkommen
setTimeout(greetUser, 1000);




