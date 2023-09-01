"use strict";

// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputField = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const formInputField = document.getElementById('name-form');

const drinkOption = {
  teaBase: ["Matcha", "Black Tea", "Oolong Tea"],
  bobaPearlOption: ["Tapioca Pearls", "Brown Sugar Pearls", "Grass Jelly", "Coffee Jelly"],
  drinkSize: ["Regular", "Large"],
};


// FUNCTIONS are declared below

// Function to clear the input field
// Since the input field needs to be cleared after every input I created a function for this.
const clearInputField = () => {
  inputField.value = "";
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log('Message is:', message);
    console.log('Sender is:', sender);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log('Message is:', message);
    console.log('Sender is:', sender);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Function to greet the user
// The function showMessage is called with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
const greetUser = () => {
  showMessage("Hi, what's your name?", 'bot')
}

// Function for the name input from the user
const handleNameInput = (event) => {
  event.preventDefault();

  // the dot . means that we're accessing an attribute/method of the variable left of the dot.
  // Here we are accessing the value that exists in the input element with the id "name-input". 
  const name = inputField.value;

  // If the function that is being called was defined with parameters, like showMessage = (message, sender), they need to be added when said function is called/used.
  // the showMessage function is called and passes on the arguments name (which is the value of the input field) and the sender (which depends on the if statement).
  showMessage(name, "user");

  //Function that clears the input field.
  clearInputField();

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want to use it in the next question from the bot.
  // To pass parameter values to a function, that is itself passed as a parameter to another function, use an "anonymous function" () => {}
  // Meaning, when a function is a parameter and needs a parameter itself, you need to use an anonymous function
  setTimeout(() => handleBobaBaseOptions(name), 1000);
};

// Function that gives drink options to the user.
const handleBobaBaseOptions = (name) => {

  showMessage(`Let's start creating your Boba drink ${name}!
What kind of tea do you want to have?`, 'bot')

  formInputField.innerHTML = `
  <div class="bobaBaseOptions">
    <button id="matcha" type="submit">Matcha</button>
    <button id="blackTea" type="submit">Black Tea</button>
    <button id="oolongTea" type="submit">Oolong Tea</button>
  </div>`

  // Variables for buttons
  const matchaBtn = document.getElementById('matcha');
  const blackTeaBtn = document.getElementById('blackTea');
  const oolongTeaBtn = document.getElementById('oolongTea');

  let teaBaseOption = "";

  //Eventlisteners for buttons
  matchaBtn.addEventListener('click', () => {
    // get the value from the buttons instead
    let teaBaseOption = drinkOption.teaBase[0];
    showMessage(teaBaseOption, "user");
  });
  blackTeaBtn.addEventListener('click', () => {
    let teaBaseOption = drinkOption.teaBase[1];
    showMessage(teaBaseOption, "user");
  });
  oolongTeaBtn.addEventListener('click', () => {
    let teaBaseOption = drinkOption.teaBase[2];
    showMessage(teaBaseOption, "user");
  });

  setTimeout(() => handleBobaPearls(teaBaseOption), 1000);
};

const handleBobaPearls = (teaBaseOption) => {

  showMessage(`Great! For your ${teaBaseOption}, what type of boba pearls do you wanna add?`, 'bot');

  formInputField.innerHTML = `
  <div class="bobaPearlWrapper">
    <p>Choose your boba pearl option</p>
    <select name="bobaPearlOptions" id="bobaPearlOptions" required>
      <option value="" disabled selected>--</option>
      <option id="tapiokaPearl" value="tapiokaPearl">Tapioka Pearls</option>
      <option id="brownSugarPearl" value="brownSugarPearl">Brown Sugar Pearls</option>
      <option id="grassJelly" value="Jelly">Grass Jelly</option> 
      <option id="coffeeJelly" value="coffeeJelly">Coffee Jelly</option>   
      </select>
  </div>`;

  // Variables for select
  const tapiokaPearlOption = document.getElementById('tapiokaPearl');
  const brownSugarPearlOption = document.getElementById('brownSugarPearl');
  const grassJellyOption = document.getElementById('grassJelly');
  const coffeeJellyOption = document.getElementById('coffeeJelly');

  //Eventlisteners for drop-down menu
  tapiokaPearlOption.addEventListener('click', () => {
    let teaPearlOption = drinkOption.bobaPearlOption[0];
    showMessage(teaPearlOption, "user");
  });
  brownSugarPearlOption.addEventListener('click', () => {
    let teaPearlOption = drinkOption.bobaPearlOption[1];
    showMessage(teaPearlOption, "user");
  });
  grassJellyOption.addEventListener('click', () => {
    let teaPearlOption = drinkOption.bobaPearlOption[2];
    showMessage(teaPearlOption, "user");
  });
  coffeeJellyOption.addEventListener('click', () => {
    let teaPearlOption = drinkOption.bobaPearlOption[3];
    showMessage(teaPearlOption, "user");
  });

  setTimeout(() => handleBobaDrinkSize(), 1000);

};

const handleBobaDrinkSize = () => {

  showMessage(`Nice! Which size do you want to choose?`, 'bot');

  formInputField.innerHTML = `
  <div class="bobaDrinkSize">
    <button id="regularSize" type="submit">Regular (500 mL)</button>
    <button id="largeSize" type="submit">Large (700 mL)</button>
  </div>`

  // Variables for buttons
  const regularSizeBtn = document.getElementById('regularSize');
  const largeSizeBtn = document.getElementById('largeSize');

  let drinkSizeOption = "";

  //Eventlisteners for buttons
  regularSizeBtn.addEventListener('click', () => {
    let drinkSizeOption = drinkOption.drinkSize[0];
    showMessage(drinkSizeOption, "user");
  });
  largeSizeBtn.addEventListener('click', () => {
    let drinkSizeOption = drinkOption.drinkSize[1];
    showMessage(drinkSizeOption, "user");
  });

  setTimeout(() => handleOrderConfirmation(drinkSizeOption), 1000);

};

// const handleOrderConfirmation (drinkSizeOption) => {

// };


// EVENTLISTENERS

sendBtn.addEventListener('click', handleNameInput);



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500)
