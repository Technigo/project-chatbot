// DOM selectors
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
  setTimeout(() => showFoodOptions(name), 1000);
};

nameForm.addEventListener('submit', handleNameInput); 
// User choice of pizza
const showFoodOptions = (name) => {
  showMessage(`Hi ${name}, what type of pizza would you like to order?`, 'bot');

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
  showMessage(`I have chosen a ${pizzaType} pizza`, 'user');
  showMessage(`${pizzaType}, excellent choice!`, 'bot');
  setTimeout(() => askForDrink(), 1000);
  };
// User choice of drink
const askForDrink = () => {
  showMessage("Please select a drink:", 'bot');
  inputWrapper.innerHTML = `
    <button id="cokeBtn">Coke</button>
    <button id="fantaBtn">Fanta</button>
  `;
  document.getElementById('cokeBtn').addEventListener('click', () => selectDrink('Coke'));
  document.getElementById('fantaBtn').addEventListener('click', () => selectDrink('Fanta'));
};

const selectDrink = (drinkType) => {
  showMessage(`I have chosen ${drinkType}`, 'user');
  showMessage(`${drinkType}, perfect choice!`, 'bot');
  setTimeout(askForAge, 1000); // Anropa askForAge här
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
  showMessage(`I am a ${ageType}`, 'user');
  showMessage(`${ageType}, great!`, 'bot');

};
  
// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500)
