// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const userInput = document.getElementById('user-input');
const form = document.getElementById('user-form');
const submit = document.getElementById('submit');
const main = document.getElementById('main');
const inputWrapper = document.getElementById('input-wrapper');

let = questionNumber = 1;

const botReply = (msg) => {
  showMessage(msg, 'bot');
};

const userReply = (msg) => {
  showMessage(msg, 'user');
};



// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  
  if (sender === 'user') {
    console.log('answer');
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    console.log('question');
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
}

const generateRequest = (message) => {
  console.log('questionNumber', questionNumber);
  
  if (questionNumber === 1) {
    setTimeout (() => showHelpOptions(message), 1000);
  } else if (questionNumber === 2) {
    setTimeout (() => bookingId(message), 1000);
  } else if (questionNumber === 3) {
    setTimeout (() => bookingId(message), 1000);
  } else if (questionNumber === 4) {
    setTimeout (() => bookingId(message), 1000);
  }
}

// Starts here

const greeting = () => {
  questionNumber = 1;
  botReply('Hello there, What is your name?');
}

const handleInput = (event) => {
    event.preventDefault();
    const reply = userInput.value;
    showMessage(reply, 'user');
    userInput.value = '';

    setTimeout(() => generateRequest(reply), 1000);
}

const showHelpOptions = () => {
  questionNumber++;
  botReply(`How may I help you today?`);

    inputWrapper.innerHTML = `
      <button id="firstBtn">Boat</button>
      <button id="secondBtn">Bus</button>
      <button id="thirdBtn">Train</button>
    `;

    document.getElementById('firstBtn') .addEventListener('click', () => {
      generateRequest('Boat');
      showMessage('Boat', 'user');
    })
    document.getElementById('secondBtn') .addEventListener('click', () => {
      generateRequest('Bus');
      showMessage('Bus', 'user');
    })
    document.getElementById('thirdBtn') .addEventListener('click', () => {
      generateRequest('Train');
      showMessage('Train', 'user');
    })
}

const bookingId = () => {
  questionNumber++;
  botReply('testing');
}

form.addEventListener('submit', handleInput);

// Set up your eventlisteners here


setTimeout(greeting, 1000);


