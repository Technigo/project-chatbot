// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const formSubmitButton = document.getElementById("send-btn");
const formMessageBox = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");


// Global variables
let questionNumber = 1;
const chatDelay = 800;

// Functions 
const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};

const firstToUpperCase = (msg) => {
  return msg.substr(0, 1).toUpperCase() + msg.substr(1);
}


// This function adds a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="images/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="images/bot.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Bot and user conversation starts here
const greeting = () => {
  showMessage(`Hi there!👩‍🍳 Welcome to Bootstrap Bakery. What's your name?`, 'bot')
}

const nextQuestion = (message) => {

  if (questionNumber === 1) {
    userReply(message);
    formMessageBox.value = "";
    setTimeout(() => question2(message), chatDelay);
  } else if (questionNumber === 2) {
    userReply(firstToUpperCase(message));
    formMessageBox.value = "";
    setTimeout(() => question3(message), chatDelay);
  } else if (questionNumber === 3) {
    userReply(firstToUpperCase(message));
    formMessageBox.value = "";
    setTimeout(() => question4(message), chatDelay);
  }
};

const question2 = (message) => {
  questionNumber++;
  botReply(`Nice to meet you, ${message}. What would you like to order?`);

  inputWrapper.innerHTML = `
    <button id="cakeBtn">Cake 🎂</button> 
    <button id="cupcakeBtn">Cupcake 🧁</button> 
    <button id="pieBtn">Pie 🥧</button> 
  `

  document
    .getElementById("cakeBtn")
    .addEventListener("click", () => nextQuestion("cake"));
  document
    .getElementById("cupcakeBtn")
    .addEventListener("click", () => nextQuestion("cupcake"));
  document
    .getElementById("pieBtn")
    .addEventListener("click", () => nextQuestion("pie"));
};

const question3 = (type) => {
  questionNumber++;
  botReply(`A ${type}, yum! Pick a flavour.`);

  if (type === "cake") {
    inputWrapper.innerHTML = `
    <select class="select" id="select">
      <option value="" selected disabled>🤍 🍫 🍓</option>
      <option value="vanilla">Vanilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="strawberry">Strawberry</option>
    </select>
    `
  } else if (type === "cupcake") {
    inputWrapper.innerHTML = `
    <select class="select" id="select">
      <option value="" selected disabled>🤍 🍫 🍓</option>
      <option value="vanilla">Vanilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="strawberry">Strawberry</option>
    </select>
    `
  } else {
    inputWrapper.innerHTML = `
    <select class="select" id="select">
      <option value="" selected disabled>🤍 🍫 🍓</option>
      <option value="vanilla">Vanilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="strawberry">Strawberry</option>
    </select>
    `
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value));
};

const question4 = (message) => {
  questionNumber++;
  const msg = firstToUpperCase(message);
  botReply(`${msg}, that's a really nice choice! Thanks for ordering, see you soon!👋`)
  inputWrapper.innerHTML = `
    <form id="name-form" onsubmit="return false;">
    <input id="name-input" type="text" />
    </form>
  `
};

// Eventlisteners
formSubmitButton.addEventListener('click', () => nextQuestion(formMessageBox.value));

// This means the greeting function will be called 0,5 seconds after the website is loaded
setTimeout(greeting, 500)