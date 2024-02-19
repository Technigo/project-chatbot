// DOM selectors
const myButton = document.getElementById("myButton")
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
const submit = document.getElementById('submit')
const main = document.getElementById('main')
const inputWrapper = document.getElementById('input-wrapper')

// Separates bot and user
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
// Scroll function
  chat.scrollTop = chat.scrollHeight
}
// Greeting user
const greetUser = () => {
  showMessage("Welcome to Pizzeria Penguin, what's your name?", 'bot')
}
const nameForm = document.getElementById('name-form');

// Eventlisteners goes here 👇

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";
  setTimeout(() => showFoodOptions(name), 1500);
};

nameForm.addEventListener('submit', handleNameInput); 
// User choice of pizza
const showFoodOptions = (name) => {
  showMessage(`Hello ${name}, what type of pizza would you like to order today?`, 'bot');

 inputWrapper.innerHTML = `
 <button id="margaritaBtn">Margarita</button>
 <button id="pepperoniBtn">Pepperoni</button>
 <button id="hawaiiBtn">Hawaii</button>
`;
document.getElementById('margaritaBtn').addEventListener('click', () => selectPizza('Margarita'));
document.getElementById('pepperoniBtn').addEventListener('click', () => selectPizza('Pepperoni'));
document.getElementById('hawaiiBtn').addEventListener('click', () => selectPizza('Hawaii'));
};
const selectPizza = (pizzaType) => {
  showMessage(`${pizzaType} pizza`, 'user');
  showMessage(`${pizzaType}, excellent choice!`, 'bot');
  setTimeout(() => askForDrink(), 1500);
  };
// User choice of drink
const askForDrink = () => {
  showMessage("Please select a drink:", 'bot');
  inputWrapper.innerHTML = `
    <select id="drink-select">
      <option value="">Select a drink</option>
      <option value="Coke">Coke</option>
      <option value="Fanta">Fanta</option>
      <option value="Sprite">Sprite</option>
    </select>
    <button id="drinkBtn">Select</button>
  `;
  document.getElementById('drinkBtn').addEventListener('click', selectDrink);
};

const selectDrink = () => {
  const drinkType = document.getElementById('drink-select').value;
  if (drinkType) {
    showMessage(`${drinkType}`, 'user');
    showMessage(`${drinkType}, perfect choice!`, 'bot');
    setTimeout(askForAge, 1500);
  } else {
    showMessage("You didn't select a drink.", 'bot');
  }
};

// Age of user
const askForAge = () => {
  showMessage("Are you an adult or a child?", 'bot');
  inputWrapper.innerHTML = `
    <button id="childBtn">👧🏽</button>
    <button id="adultBtn">🧔🏻‍♂️</button>
  `;
  document.getElementById('childBtn').addEventListener('click', () => selectAge('Child'));
  document.getElementById('adultBtn').addEventListener('click', () => selectAge('Adult'));
};
  const selectAge = (ageType) => {
    showMessage(`${ageType}`, 'user');
    const totalPrice = ageType === 'Adult' ? '15€' : '10€';
    showMessage(`Perfect, the total price for your order is ${totalPrice}. Would you like to proceed?`, 'bot');
    showConfirmationOptions();
  };

const showConfirmationOptions = () => {
  inputWrapper.innerHTML = `
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
  `;
  document.getElementById('yesBtn').addEventListener('click', () => confirmOrder(true));
  document.getElementById('noBtn').addEventListener('click', () => confirmOrder(false));
};

const confirmOrder = (isConfirmed) => {
  if (isConfirmed) {
    showMessage("Yes", "user");
    showMessage("Thanks for your order, have a nice day!", "bot");
 
  } else {
    showMessage("No", "user");
    showMessage("No problem, you are always welcome back!", "bot");

  }
  inputWrapper.innerHTML = '';
};
setTimeout(greetUser, 1000)
