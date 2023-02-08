// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const nameForm = document.getElementById('name-form');


// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
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
  chat.scrollTop = chat.scrollHeight;
}



// Starts here
const greetUser = () => {
  showMessage("Hi! Let's find you the perfect plant! What's your name?", 'bot')
}

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, 'user');
  setTimeout(() => waterQuestion(), 1000);
}

const yesAnswer = () => {
  showMessage("I love watering, I keep drowning my plants...", 'user');
  setTimeout(() => askNextQuestion(), 1000);
}

const noAnswer = () => {
  showMessage("I keep forgetting to water plants!", 'user');
  setTimeout(() => askNextQuestion(), 1000);
}

const naAnswer = () => {
  showMessage("I can water it as much as it needs!", 'user');
  setTimeout(() => askNextQuestion(), 1000);
}

setTimeout(greetUser, 1000);


const waterQuestion = () => {
  showMessage(`How much light will your plant get, ${nameInput.value}? `, 'bot');
  inputWrapper.innerHTML = `
  <button id="noWaterBtn">No</button>
  <button id="yesWaterBtn">A lot</button>
  <button id="naWaterBtn">As much as it needs</button>
  `
  document.getElementById('yesWaterBtn').addEventListener('click', () => yesAnswer());
  document.getElementById('noWaterBtn').addEventListener('click', () => noAnswer());
  document.getElementById('naWaterBtn').addEventListener('click', () => naAnswer());
}




const askNextQuestion = () => {
  showMessage(`How much light will your plant get, ${nameInput.value}? `, 'bot');
  inputWrapper.innerHTML = `
  <button id="darkBtn">It's a dark room...</button>
  <button id="lightBtn">Sunny all day, baby!</button>
  <button id="naBtn">I'm not sure!</button>
  `
} 



nameForm.addEventListener('submit', handleNameInput);
