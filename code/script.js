// DOM selectors
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
const submit = document.getElementById('submit')
const main = document.getElementById('main')
const inputWrapper = document.getElementById('input-wrapper')

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

  chat.scrollTop = chat.scrollHeight
}

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

const showFoodOptions = (name) => {
  showMessage(`Hi ${name}, what type of pizza would you like?`, 'bot');
 
 inputWrapper.innerHTML = `
 <button id="margaritaBtn">Margarita</button>
 <button id="pepperoniBtn">Pepperoni</button>
 <button id="hawaiiBtn">Vegetarian</button>
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
  const askForDrink = () => {
  showMessage("Please select a drink:", 'bot');
  inputWrapper.innerHTML = `
   <select id="drink-select">
     <option value="water">Water</option>
     <option value="soda">Soda</option>
     <option value="juice">Juice</option>
   </select>
   <button id="drinkBtn">Select</button>
  `;
  
  document.getElementById('drinkBtn').addEventListener('click', () => selectDrink());
  };  
  
// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500)
