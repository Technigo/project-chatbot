// Declare variables
const startButton = document.getElementById('start-button');
const startContent = document.getElementById('start-content');
const chatBox = document.getElementById('chat-box');
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper');

let buttonText = "";
let questionCounter = 0;

// Start chat by moving past start page
startButton.addEventListener('click', () => {
  startContent .style.display = "none";
  chatBox.style.display = "flex";
  questionGenerator();
});

// Function to move through questions
const questionGenerator = () => {
  questionCounter++;
  if (questionCounter === 1) {
    setTimeout(question1, 1000);
  } else if (questionCounter === 2) {
    setTimeout(question2, 1000, nameInput.value);
  } else if (questionCounter === 3) {
    setTimeout(question3, 1000, buttonText);
  } else if (questionCounter === 4) {
    setTimeout(question4, 1000);
  } else if (questionCounter === 5) {
    setTimeout(question5, 1000);
  } else if (questionCounter === 6) {
    setTimeout(endMessage, 1000, nameInput.value);
  }
}

// Question 1
const question1 = () => {
  showMessage(`Hello there, what's your name?`, 'bot')

  document.getElementById('name-form').onsubmit = event => {
    event.preventDefault();
    showMessage(nameInput.value, 'user');
    questionGenerator();
  }
}

// Question 2
const question2 = (message) => {
  
  showMessage(`How is your day going, ${message}?`, 'bot');

  inputWrapper.innerHTML = `
    <button class="button-input">Great!</button>
    <button class="button-input">Could be better</button>
    `
  addButtonListeners('button-input');
}

// Question 3
const question3 = (answer) => {
  console.log(buttonText);
  if (answer === 'Great!') {
    showMessage(`Glad to hear it! Name one thing that made you happy.`, 'bot');
  } else {
    showMessage(`Aw, what's bugging you?`, 'bot');
  }

  inputWrapper.innerHTML = `
    <input id="text-input" type="text" />
    <button id="send-btn">Send</button>
  `
  const textInput = document.getElementById('text-input');
  document.getElementById('send-btn').addEventListener('click', () => {
    showMessage(textInput.value, 'user');
    textInput.value ='';
    questionGenerator();
  });
}

// Question 4
const question4 = (answer) => {
  showMessage(`Thanks for sharing. What's something you're looking forward to this week?`, 'bot');

  inputWrapper.innerHTML = `
    <input id="text-input" type="text" />
    <button id="send-btn">Send</button>
  `
  const textInput = document.getElementById('text-input');
  document.getElementById('send-btn').addEventListener('click', () => {
    showMessage(textInput.value, 'user');
    textInput.value ='';
    questionGenerator();
  });
}

// Question 5
const question5 = () => {
  showMessage(`Sounds great! When should we chat next?`, 'bot');
  inputWrapper.innerHTML = `
    <select id="option-menu" type="option">
      <option selected disabled>Choose a time</option>
      <option>Tomorrow</option>
      <option>In three days</option>
      <option>Next week</option>
      <option>I'm not sure</option>
    </select>
    `
  const select = document.getElementById('option-menu');
  select.addEventListener('change', () => {
    showMessage(select.value, 'user');
    questionGenerator();
  });
}

// End message
const endMessage = (message) => {
  showMessage(`Alright, let's keep in touch. Have a good day and don't forget that you're a rockstar ${message}!`, 'bot');
  inputWrapper.innerHTML = '';
}

// Reusable event listener(s)
const addButtonListeners = (buttonClassName) => {
  const sendButtons = document.getElementsByClassName(buttonClassName);
  console.log(sendButtons)
  
  Array.from(sendButtons).forEach(button => {
    button.addEventListener('click', () => {
      showMessage(button.innerText, 'user');
      buttonText = button.innerText;
      questionGenerator();
    });
  });
}

// Placement of chat bubble based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user_neutral.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot_neutral.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  } 
  chat.scrollTop = chat.scrollHeight;
}