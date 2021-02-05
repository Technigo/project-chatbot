// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');
const input = document.getElementById('name-input');

// Functions declared here

const handleBotResponse = (text) => {
  showMessage(text, 'bot');
};

const handleUserAnswer = (text) => {
  showMessage(text, 'user');
};


// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('hello');
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>`
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>`
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
};

  
// Starts here

const greeting = () => {
  handleBotResponse(`Hello sweet tooth, what's your name?`)
};

// First answer 

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = input.value;
  handleUserAnswer(name); 

  if (name) {
    input.value = '';
    setTimeout(() => candyTypes(name), 1000);
    }
});

// Second question 

const candyTypes = (name) => {
  handleBotResponse(`Nice to meet you ${name}! What kind of candy do you want today?`);

  inputWrapper.innerHTML = `
    <button id="sweetButton" class="sweet">Sweet</button>
    <button id="sourButton" class="sour">Sour</button>
    <button id="saltyButton" class="salty">Salty</button>`

    document.getElementById('sweetButton').addEventListener('click', () => userType('Sweet'));
    document.getElementById('sourButton').addEventListener('click', () => userType('Sour'));
    document.getElementById('saltyButton').addEventListener('click', () => userType('Salty'));
};

// Second answer

const userType = (type) => {
  handleUserAnswer(type);
  if (type) {
    setTimeout(() => candyAmount(type), 1000);
  }
};

// Third question

const candyAmount = (type) => {
  handleBotResponse(`So you like the ${type} kind! How much would you like to have?`);
  
  inputWrapper.innerHTML = `
    <button id="oneButton" class="hg">1hg</button>
    <button id="twoButton" class="hg">2hg</button>
    <button id="fiveButton" class="hg">5hg</button>
    <button id="tenButton" class="hg">10hg</button>`

  document.getElementById('oneButton').addEventListener('click', () => userAmount('1'));
  document.getElementById('twoButton').addEventListener('click', () => userAmount('2'));
  document.getElementById('fiveButton').addEventListener('click', () => userAmount('5'));
  document.getElementById('tenButton').addEventListener('click', () => userAmount('10'));
};

// Third answer

const userAmount = (amount) => {
  handleUserAnswer(amount);

  if (amount) {
    setTimeout(() => candyCost(amount), 1000);
  }
};

// Fourth question

const candyCost = (amount) => {

  if ( amount === '1') {
    handleBotResponse(`Ok, so you want ${amount}hg! That will be 9,99$!`);
  } else if( amount === '2') {
    handleBotResponse(`Great, so you want ${amount}hg! That will be 12,99$!`);
  } else if( amount === '5') {
    handleBotResponse(`Wow, so you want ${amount}hg! That will be 18,99$!`);
  } else {
    handleBotResponse(`Wow, so you want ${amount}hg! That will be 29,99$!`);
  }

  setTimeout(() => candyDelivery(), 2000);
};


// Fifth question 

const candyDelivery = () => {
  handleBotResponse(`Would you like to add home-delivery for 2.99$?`);

  inputWrapper.innerHTML = `
    <button id="yesButton" class="yes">yes</button>
    <button id="noButton" class="no">no</button>`

  document.getElementById('yesButton').addEventListener('click', () => userDelivery('Yes'));
  document.getElementById('noButton').addEventListener('click', () => userDelivery('No'));
};

// Fifth answer

const userDelivery = (delivery) => {
  handleUserAnswer(delivery);

  if (delivery) {
    setTimeout(() => thankYou(delivery), 1000);
  }
};

// Thank you message 

const thankYou = (delivery) => {

  if (delivery === 'Yes') {
    handleBotResponse(`Thank you for your order, we will notify you as soon as we are on our way with your candy!`);
  } else {
    handleBotResponse(`Thank you for your order, we will notify you as soon as your order is ready for pick-up!`);
  }

  setTimeout(() => feedback(), 1000);
};

// Are you happy with our services

const feedback = (happy) => {
  handleBotResponse(`Are you happy with our services?`);

  inputWrapper.innerHTML = `
    <button id="thumbsUp" class="yes"><i class="fas fa-thumbs-up"></i></button>
    <button id="thumbsDown" class="no"><i class="fas fa-thumbs-down"></i></button>`

  document.getElementById('thumbsUp').addEventListener('click', () => feedbackAnswer('thumbsUp'));
  document.getElementById('thumbsDown').addEventListener('click', () => feedbackAnswer('thumbsDown'));

  setTimeout(() => feedbackAnswer(happy), 1000);
};

// FeedbackAnswer

const feedbackAnswer = (happy) => {

  if (happy === 'thumbsUp') {
    handleBotResponse('<i class="fas fa-kiss-wink-heart"></i>');
    inputWrapper.innerHTML = '';
  } else if (happy ==='thumbsDown') {
    handleBotResponse ('<i class="fas fa-sad-tear"></i>');
    inputWrapper.innerHTML = '';
  }
};

// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1000);
