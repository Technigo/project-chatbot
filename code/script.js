// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const form = document.getElementById("form");

// Global variables, if you need any, declared here
let username = "";
let emailAdress = "";
let telephoneNumber = "";
let service = "";
let currentQuestion = "name";

// Functions declared here

//Function that shows the initial greeting from the bot through the "showMessage" function.
//Fuction also activates another function called AddEventListeners

const greeting = () => {
  showMessage(
    `"Hi, my name is Bob and I will be guiding you through Bob's cleaning service. What's your name?"`,
    "bot"
  );
  addEventListeners();
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="chat__user-msg">
       <div class="chat__bubble chat__user-msg__user-bubble">
        <p>${message}</p>
       </div>
       <i class="far fa-smile icon"></i>
      </section>
    `;
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="chat__bot-msg">
        <i class="far fa-smile-beam icon"></i>
        <div class="chat__bubble chat__bot-msg__bot-bubble">
         <p>${message}</p>
        </div>
      </section>
    `;
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};
// Function that prevent default mode on form
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
});

// Function that sends a bot message with 1 seconds delay
const sendBotMessage = (message) => {
  setTimeout(() => showMessage(message, "bot"), 1000);
};

// Function that adds a clickevent to the button submitBtn and then activates the function sendUserMessage

const addEventListeners = () => {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", sendUserMessage);
};

// Function that activates another function called "show message" which shows a user message
// of weekly cleaning. Furthermor it saves service as "weekly cleaning" and currentQuestion as "times a month"
// It sends out a message through the sendBotMessage function
// It also adds new html inbetween the <form>....</form>
// And it activates the function addEventListeners

const weeklyCleaning = () => {
  showMessage(`Weekly cleaning`, `user`);
  service = `Weekly cleaning`;
  currentQuestion = `times a month`;
  sendBotMessage(
    `Excellent! How many times a month do you want us to clean your home?`
  );

  form.innerHTML = `
  <div id="submitContainer">
  <label for="textInput"></label>
  <input id="textInput" type="text" />
  <button id="submitBtn" type="submit">Send</button>
  </div>`;

  addEventListeners();
};

// Function that activates another function called "show message" which shows a user message
// of Move-out cleaning. Furthermore it saves service as "Move-out cleaning" and currentQuestion as "square meter"
// It sends out a message through the sendBotMessage function
// It also adds new html inbetween the <form>....</form>
// And it activates the function addEventListeners

const moveOutCleaning = () => {
  showMessage(`Move-out cleaning`, `user`);
  service = `Move-out cleaning`;
  currentQuestion = `square meter`;
  sendBotMessage(`How many square meters is your home?`);

  form.innerHTML = `
  <div id="submitContainer">
   <label for="textInput"></label>
   <input id="textInput" type="text" placeholder="100" />
   <button id="submitBtn" type="submit">Send</button>
  </div>`;

  addEventListeners();
};

// Function that activates another function called "show message" which shows a user message
// of window cleaning. Furthermore it saves service as "Move-out cleaning" and currentQuestion as "windows"
// It sends out a message through the sendBotMessage function
// It also adds new html inbetween the <form>....</form>
// And it activates the function addEventListeners

const windowCleaning = () => {
  showMessage(`Window cleaning`, `user`);
  service = `Window cleaning`;
  currentQuestion = `windows`;
  sendBotMessage(`Fantastic! How many windows do you have?`);

  form.innerHTML = `
  <div id="submitContainer">
   <label for="textInput"></label>
   <input id="textInput" type="text" placeholder="10"/>
   <button id="submitBtn" type="submit">Send</button>
  </div>`;

  addEventListeners();
};

//A function in which the bot asks for the users email and also changes the current question to email.
// It also adds new information to form.innerhtml since we want to change the type to email.
//Hence we also need to add new eventlisteners.

const askForEmail = () => {
  sendBotMessage(
    `What is your e-mail adress so that we can send you an offer?`
  );
  currentQuestion = `email`;

  form.innerHTML = `
  <div id="submitContainer">
   <label for="textInput"></label>
   <input id="textInput" type="email" placeholder="user@gmail.com" />
   <button id="submitBtn" type="submit">Send</button>
  </div>`;

  addEventListeners();
};

//A function in which the bot asks for the users number and also changes the current question to number.
// It also adds new information to form.innerhtml since we want to change the type to tel.
//Hence we also need to add new eventlisteners.

const askForNumber = () => {
  sendBotMessage(`What is your telephone number?`);
  currentQuestion = `number`;

  form.innerHTML = `
  <div id="submitContainer">
  <label for="textInput"></label>
  <input id="textInput" type="tel" />
  <button id="submitBtn" type="submit">Send</button>
  </div>`;

  addEventListeners();
};

// A button which restarts the form with the help of the function location.reload.

const resetForm = () => {
  location.reload();
};

// a Function that checks if the message is not a number and returns true if the number is not a number, and returns false if the number is a number.
// in the function we also check if the message from the user is empty. If any of these two are true the bot is gonna ask for the user to put in a number.
const isValueNotNumber = (message) => {
  let isNotANumber = isNaN(message) || message === "";
  return isNotANumber;
};

// Function that takes the message input by the user and then actvates the function "showMessage" as a user message.
// If currentQuestion is name it tells the username to be = message.value. It activates a sendBotMessage
// It also adds new html inbetween the <form>....</form>
// It adds a clickevent on the weeklyCleaningBtn and if it is clicked it starts the function weekly cleaning.
// It also sets the message.value = ""

const sendUserMessage = () => {
  const message = document.getElementById("textInput");
  showMessage(message.value, `user`);

  if (currentQuestion === `name`) {
    username = message.value;
    sendBotMessage(
      `Hi ${username}, what cleaning service do you want us to provide for you?`
    );

    form.innerHTML = `<button id="weeklyCleaning">Weekly cleaning</button>
    <button id="moveOutCleaning">Move-out cleaning</button>
    <button id="windowCleaning">Window cleaning</button>`;

    const weeklyCleaningBtn = document.getElementById("weeklyCleaning");
    weeklyCleaningBtn.addEventListener(`click`, weeklyCleaning);
    const windowCleaningBtn = document.getElementById("windowCleaning");
    windowCleaningBtn.addEventListener(`click`, windowCleaning);
    const moveOutCleaningBtn = document.getElementById("moveOutCleaning");
    moveOutCleaningBtn.addEventListener(`click`, moveOutCleaning);
  }
  //If currentQuestion is equal to times a month the sendBotMessage activates with a message to the user.
  // it also calls the function ask for email.
  else if (currentQuestion === `times a month`) {
    if (isValueNotNumber(message.value) === true) {
      sendBotMessage(`I dont understand you. You need to put in a number`);
    } else {
      sendBotMessage(
        `Perfect, we will clean ${
          message.value
        } times a month. That will cost approximately ${
          100 * message.value
        } dollars a month.`
      );
      askForEmail();
    }

    ////If currentQuestion is equal to square meter the sendBotMessage activates with a message to the user.
    // it also calls the function ask for email.
  } else if (currentQuestion === `square meter`) {
    if (isValueNotNumber(message.value) === true) {
      sendBotMessage(`I dont understand you. You need to put in a number`);
    } else {
      sendBotMessage(
        `Super, we have registered that your home is ${message.value} square meters.`
      );
      askForEmail();
    }

    //If currentQuestion is equal to windows the sendBotMessage activates with a message to the user.
    // it also calls the function ask for email.
  } else if (currentQuestion === `windows`) {
    if (isValueNotNumber(message.value) === true) {
      sendBotMessage(`I dont understand you. You need to put in a number`);
    } else {
      sendBotMessage(
        `Perfect ${username}, we will clean your ${
          message.value
        } windows. That will cost approximately ${20 * message.value} dollars.`
      );
      askForEmail();
    }

    //if current question === email it stores the message.value as the emailAdress and calls the fucnction ask for number.
  } else if (currentQuestion === `email`) {
    emailAdress = message.value;
    askForNumber();

    //if current question === number it stores the message.value as the telephoneNumber and calls for the function sendBotMessage
    // change the inner html to show a dropdown with customer satisfaction.
    // and then after choicing satisfaction level you get at button in which you can reset the form.
  } else if (currentQuestion === `number`) {
    telephoneNumber = message.value;
    sendBotMessage(
      `Thank you ${username} for your interest in our service: ${service}. We will return with a offer to the emailadress: ${emailAdress} and call you within a week to your number: ${telephoneNumber} to decide a time for the cleaning. Have a lovley day!`
    );
    form.innerHTML = `
    <div class="customer-happiness__container">
    <label for="customerHappiness"></label>
    <select name="customerHappiness" id="customerHappiness">
    <option value="">Choice your mood</option>
    <option value="😊">😊 Happy</option>
    <option value="😐">😐 Neutral</option>
    <option value="😠">😠 Angry</option>
    </select></div>`;

    const customerHappinessSelector =
      document.getElementById("customerHappiness");
    customerHappinessSelector.addEventListener(`change`, (event) => {
      showMessage(event.target.value, `user`);

      form.innerHTML = `<button id="resetForm">I changed my mind</button>`;

      const resetFormBtn = document.getElementById(`resetForm`);
      resetFormBtn.addEventListener(`click`, resetForm);
    });
  }
  message.value = "";
};

// Starts here

greeting();

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
//
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
