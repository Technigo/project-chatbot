// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const form = document.getElementById("name-form");

// Global variables, if you need any, declared here
let questionStep = 1;

// Functions declared here
// Function to display the message on the screen both for bot and user
const botAnswer = (inputMessage) => {
  showMessage(inputMessage, "bot");
};
const userAnswer = (inputMessage) => {
  showMessage(inputMessage, "user");
};

// Flow to next question function
const chosenService = (message) => {
  if (questionStep === 2) {
    userAnswer(message);
    setTimeout(() => serviceTypes(message), 1000);
  } else questionStep === 3;
  {
    console.log("It works?");
  }
};
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    console.log("This works");
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
};

// Starts here
const greeting = () => {
  showMessage(`Hello my name is Simon, What's your name?`, "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};
// Set up your eventlisteners here

// This will display the first answer (user name)
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  userAnswer(`${name}`);
  // This will keep the input box empty after user clicks send
  nameInput.value = "";
  setTimeout(() => serviceType(name), 1000);
});

// 2nd Bot message
const serviceType = () => {
  questionStep++;
  botAnswer(`Hi ${"name"}" + 👋 What can we help you with today?`);
  inputWrapper.innerHTML = `
    <button id="plumbingButton"> Plumbing 🔧 </button>
    <button id="electricalButton"> Electrical Work 🔌 </button>
    <button id="paintingButton"> Painting 🖌️ </button>
    `;
  document
    .getElementById("plumbingButton")
    .addEventListener("click", () => chosenService("plumbing"));
  document
    .getElementById("electricalButton")
    .addEventListener("click", () => chosenService("electrical"));
  document
    .getElementById("paintingButton")
    .addEventListener("click", () => chosenService("painting"));
};

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1200);
