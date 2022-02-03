// Declare variables
const startButton = document.getElementById('start-button');
const startContent = document.getElementById('start-content');
const chatBox = document.getElementById('chat-box');
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper');
let questionCounter = 0;

// Function to move through questions
const questionGenerator = () => {
  questionCounter++;
  if (questionCounter === 1) {
    setTimeout(question1, 1000);
  } else if (questionCounter === 2) {
    setTimeout(question2, 1000);
  } else if (questionCounter === 3) {
    setTimeout(question3, 1000);
  } else if (questionCounter === 4) {
    setTimeout(question4, 1000);
  } else if (questionCounter === 5) {
    setTimeout(endMessage, 1000);
  }
}

// Question 1
const question1 = () => {
  showMessage(`Hello there, what's your name?`, 'bot')

  document.getElementById('name-form').onsubmit = event => {
    event.preventDefault();
    showMessage(nameInput.value, 'user');
    nameInput.value ='';
    questionGenerator();
  }
}

// Question 2
const question2 = () => {
  
  showMessage(`Question with two buttons`, 'bot');

  inputWrapper.innerHTML = `
    <button class="button-input">option 1</button>
    <button class="button-input">option 2</button>
    `
  addButtonListeners('button-input');
}

// Question 3
const question3 = () => {
  showMessage(`Question with a text answer`, 'bot');
  inputWrapper.innerHTML = `
    <input id="second-input" type="text" />
    <button id="second-btn">Send</button>
  `
  const secondInput = document.getElementById('second-input');
  document.getElementById('second-btn').addEventListener('click', () => {
    showMessage(secondInput.value, 'user');
    secondInput.value ='';
    questionGenerator();
  });
}

// Question 4
const question4 = () => {
  showMessage(`Question with a option answer`, 'bot');
  inputWrapper.innerHTML = `
    <select id="third-input" type="option">
      <option id="option-1">option 1</option>
      <option id="option-2">option 2</option>
      <option id="option-3">option 3</option>
    </select>
    `
  const select = document.getElementById('third-input');
  select.addEventListener('change', () => {
    showMessage(select.value, 'user');
    questionGenerator();
  });
}

// End message
const endMessage = () => {
  showMessage(`Have a good day!`, 'bot');
  inputWrapper.innerHTML = '';
}

// Reusable event listener(s)
const addButtonListeners = (buttonClassName) => {
  const sendButtons = document.getElementsByClassName(buttonClassName);
  console.log(sendButtons)
  
  Array.from(sendButtons).forEach(button => {
    button.addEventListener('click', () => {
      showMessage(button.innerText, 'user');
      questionGenerator();
    });
  });
}

// Add chat bubble in the correct place based on who the sender is
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

// Start chatbot by moving past start page
startButton.addEventListener('click', () => {
  startContent .style.display = "none";
  chatBox.style.display = "flex";
  questionGenerator();
});