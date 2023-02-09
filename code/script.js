// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputValue = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');


// If you need any global variables that you can use across different functions, declare them here:
let currentQuestion = 0;
let yourName = "";
let country = "";

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML +=  `
    <section class="user-msg">
      <div class="bubble user-bubble">
        <p>${message}</p>
      </div>
      <img src="assets/user.png" alt="user bot" />  
    </section>`

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML +=  `
    <section class="bot-msg">
    <img src="assets/bot.png" alt="chat bot" /> 
      <div class="bubble bot-bubble">
        <p>${message}</p>
      </div> 
    </section>`
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome to your experience, what's your name?", "bot");
};


  const activityQuestion = () => {
    showMessage(`Nice to meet you ${yourName}! Which activity do you want to book?`, 'bot');
    inputWrapper.innerHTML = //add three experience buttons
    `<button id="kayak-btn" type="submit">Kayaking</button>
    <button id="dive-btn" type="submit">Diving</button>
    <button id="climb-btn" type="submit">Climbing</button>`;
    
    document.getElementById('kayak-btn')
.addEventListener('click', () => handleActivityQuestion('Kayaking'));
document.getElementById('dive-btn')
.addEventListener('click', () => handleActivityQuestion('Diving'));
document.getElementById('climb-btn')
.addEventListener('click', () => handleActivityQuestion('Climbing'));
   };


const whereQuestion = () => {
    showMessage(`Where do you want to go on your adventure?`, 'bot');
inputWrapper.innerHTML = //add three where buttons
`<button id="bali-btn" type="submit">Bali</button>
<button id="iceland-btn" type="submit">Iceland</button>
<button id="hawaii-btn" type="submit">Hawaii</button>`;

document.getElementById('bali-btn')
.addEventListener('click', () => handleWhereQuestion('Bali'));
document.getElementById('iceland-btn')
.addEventListener('click', () => handleWhereQuestion('Iceland'));
document.getElementById('hawaii-btn')
.addEventListener('click', () => handleWhereQuestion('Hawaii'));
};

//Orderconfirmation
const orderConfirmation = () => {
  showMessage(`Greate choice, Would you like to make a booking?`, "bot");
  inputWrapper.innerHTML =
  `<button id "yes" value="yes">Yes please!</button>
  <button id "no" value="no">No thanks!</button>`;

  document.getElementById('yes')
  .addEventListener('click', () => handleOrderConfirmation('Yes please!'));
  document.getElementById('no')
  .addEventListener('click', () => handleOrderConfirmation('No thanks!'));
};
//Thank you for booking with us! Have a great day!!
const lastMessage = () => {
  showMessage(`Thank you for booking with us, have a great day!`, 'bot');
  inputWrapper.innerHTML =``;
}

const handleInput = (event1) => {
event1.preventDefault()
currentQuestion++
if (currentQuestion === 1) {
  handleUserName();
} else if (currentQuestion === 2) {
  handleActivityQuestion ();
} else if (currentQuestion === 3) {
handleWhereQuestion ();
} else {
  handleOrderConfirmation();
}
};

const handleUserName = () => {
  yourName = inputValue.value;
  showMessage(`My name is ${yourName}`, 'user');
  inputValue.value = ``;
  setTimeout(activityQuestion, 1000);
};

const handleActivityQuestion = (activity) => {
  yourName = inputValue.value;
  showMessage(`I would like to go ${activity}`, 'user');
  inputValue.value = ``;
  setTimeout(whereQuestion, 1000);
};

const handleWhereQuestion = (country) => {
  yourName = inputValue.value;
  showMessage(`I would like to ${country}`, 'user');
  inputValue.value = ``;
  setTimeout(orderConfirmation, 1000);
};

const handleOrderConfirmation = (order) => {
  yourName = inputValue.value;
  showMessage(order, 'user');
  inputValue.value = ``;
  setTimeout(lastMessage, 1000);
};

// Set up your eventlisteners here - 
form.addEventListener('submit', handleInput);



setTimeout(greetUser, 1000);
  // After 1 second, show the next question by invoking the next function.

