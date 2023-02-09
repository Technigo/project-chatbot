// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const nameForm = document.getElementById('name-form');

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
function showMessage(message, sender) {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// User greeting
const greetUser = () => {
  showMessage("Hi! Let's find you the perfect plant! What's your name?", 'bot');
}

//Handling of username
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, 'user');
  setTimeout(() => waterQuestion(), 1000);
  inputWrapper.innerHTML = ''
}

//Question 1, user clicks, triggers bot answer and question 2
const waterQuestion = () => {
  showMessage(`How much do you water your plants, ${nameInput.value}? `, 'bot');
  inputWrapper.innerHTML = `
  <button id="littleWaterBtn">A little</button>
  <button id="lotWaterBtn">A lot!</button>
  <button id="naWaterBtn">As needed</button>
  `
  document.getElementById('littleWaterBtn').addEventListener('click', () => {showMessage ("I keep forgetting to water plants!", 'user');
  inputWrapper.innerHTML = '';
  setTimeout(() => waterResponse('littleWater'), 1000)});
  document.getElementById('lotWaterBtn').addEventListener('click', () => {showMessage ("I love watering, I keep drowning my plants...", 'user');
  inputWrapper.innerHTML = '';
  setTimeout(() => waterResponse('lotWater'), 1000)});
  document.getElementById('naWaterBtn').addEventListener('click', () =>{showMessage("I water my plants like a pro!", 'user');
  inputWrapper.innerHTML = '';
  setTimeout(() => waterResponse('anyWater'), 1000)});

const waterResponse = (waterAnswer) => {
  inputWrapper.innerHTML = ``;
  if (waterAnswer === 'littleWater') {
    showMessage ("So do I! Don't worry, we'll find you a good match.", 'bot')
  }
  else if (waterAnswer === 'lotWater') {
    showMessage ("It's so easy to water too much! Let's find you a plant that likes water.", 'bot')
  }
  else if (waterAnswer === 'anyWater') {
    showMessage ("Wow, you're better than me! Let's find you a good plant!", 'bot')
  }
  else {
    showMessage ("Sorry, I didn't understand you!", 'bot')
  }

setTimeout(() => lightQuestion(waterAnswer), 1000);
}
}


const lightQuestion = (waterAnswer) => {
  showMessage(`How much light will your plant get? `, 'bot');
  inputWrapper.innerHTML = `
  <button id="lightBtn" value="light">Sunny all day, baby!</button>
  <button id="darkBtn" value="dark">A dark corner</button>
  <button id="naLightBtn" value="anyLight">Not sure!</button>
  `
  document.getElementById('lightBtn').addEventListener('click', () => {showMessage ("light!", 'user')
  setTimeout(() => showPlant(waterAnswer, 'light'), 1000)});
  document.getElementById('darkBtn').addEventListener('click', () => {showMessage ("dark", 'user')
  setTimeout(() => showPlant(waterAnswer, 'dark'), 1000)});
  document.getElementById('naLightBtn').addEventListener('click', () =>{showMessage("pro light", 'user')
  setTimeout(() => showPlant(waterAnswer, 'anyLight'), 1000)});
}

const showPlant = (waterAnswer, lightAnswer) => {
  inputWrapper.innerHTML = '';
  if (waterAnswer === 'littleWater' && lightAnswer === 'light') {
showMessage ("You should get a succulent!", 'bot')
  }
  else if (waterAnswer === 'lotWater' && lightAnswer === 'light') {
    showMessage ("You should get coleus plant!", 'bot')
  }
  else if (waterAnswer === 'anyWater' && lightAnswer === 'light') {
    showMessage ("You should get a pelargon", 'bot')
  }
  else if (waterAnswer === 'littleWater' && lightAnswer === 'dark') {
    showMessage ("You should get a garderobsblomma", 'bot')
  }
  else if (waterAnswer === 'lotWater' && lightAnswer === 'dark') {
    showMessage ("You should get an ivy plant!", 'bot')
  }
  else if (waterAnswer === 'anyWater' && lightAnswer === 'dark') {
    showMessage ("You should get a croton", 'bot')
  }
  else if (waterAnswer === 'littleWater' && lightAnswer === 'anyLight') {
    showMessage ("You should get a pelargon", 'bot')
  }
  else if (waterAnswer === 'lotWater' && lightAnswer === 'anyLight') {
    showMessage ("You should get a pelargon", 'bot')
  }
  else if (waterAnswer === 'anyWater' && lightAnswer === 'anyLight') {
    showMessage ("You should get a pelargon", 'bot')
  }
else {
  showMessage ("Nothing", 'bot')
}
setTimeout(() => lastQuestion(), 1000)
}

const lastQuestion = () => {
  showMessage ("Are you happy with your plant?", 'bot');
  inputWrapper.innerHTML=`
  <button id="yesBtn" value="yesBtn">Yes, I love it!</button>
  <button id="noBtn" value="noBtn">No, I want to try again!</button>
  `;

  document.getElementById('yesBtn').addEventListener('click', () => showMessage ("Hope you will enjoy your plant!", 'bot'));
  document.getElementById('noBtn').addEventListener('click', () => window.location.reload());
}

//starts here

setTimeout(greetUser, 500);



nameForm.addEventListener('submit', handleNameInput);
