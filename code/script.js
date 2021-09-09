// DOM selectors
const chat = document.getElementById("chat");
const form = document.getElementById("form");

// Global variables
let username = "";
let emailAdress = "";
let telephoneNumber = "";
let service = "";
let currentQuestion = "name";

// Functions
// The function adds a class called active to the element with the id overlay.
const setOverlayActive = () => {
  let overlay = document.getElementById(`overlay`);
  overlay.classList.add(`active`);
};

// The function removes a class called active to the element with the id overlay.
const removeOverlayActive = () => {
  let overlay = document.getElementById(`overlay`);
  overlay.classList.remove(`active`);
};

// The function removes a class called hidden to the element with the id inputContainer.
const removeInputContainerHidden = () => {
  let inputContainer = document.getElementById(`inputContainer`);
  inputContainer.classList.remove(`hidden`);
};

// The function adds a class called hidden to the element with id inputContainer.
const addinputContainerHidden = () => {
  let inputContainer = document.getElementById(`inputContainer`);
  inputContainer.classList.add(`hidden`);
};

// The function shows the initial greeting from the bot through the "showMessage" function.
const greeting = () => {
  sendBotMessage(
    `Hi, my name is Bob and I will be guiding you through Bob's cleaning service. What's your name?`
  );
};

// The function will add a chat bubble in the correct place based on who the sender is.
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
      </section>`;
  }
  chat.scrollTop = chat.scrollHeight;
};

// Function that prevent default mode on form.
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
});

// Function that sends a bot message with delay, add a sound effect and add and remove classes from different elements to hide and show content on the page.
const sendBotMessage = (message) => {
  setOverlayActive();
  addinputContainerHidden();

  setTimeout(() => {
    showMessage(`"${message}"`, "bot");
    playSoundEffect(`./assets/sound.mp3`);
    removeOverlayActive();
    removeInputContainerHidden();
  }, 1000);
};

// Function that plays up our sound effects.
const playSoundEffect = (audiofile) => {
  const audio = new Audio(audiofile);
  audio.play();
};

// Function that activates the function showMessage, and saves `Monthly cleaning` as the value of service and currentQuestion as "times a month"
// It sends out a message through the sendBotMessage function and also adds new html in the form.
const monthlyCleaning = () => {
  showMessage(`"Monthly cleaning"`, `user`);
  service = `Monthly cleaning`;
  currentQuestion = `times a month`;
  sendBotMessage(
    `Excellent! How many times a month do you want us to clean your home?`
  );

  form.innerHTML = `
  <div id="submitContainer">
  <div class="form__overlay active" id="overlay"></div>
  <div class="form__input-container hidden" id="inputContainer">
    <label for="textInput"></label>
    <input id="textInput" type="text" required/>
    <button id="submitBtn" type="submit">Send</button>
  </div>
  </div>`;
};

// Function that activates the function showMessage, and saves `Move-out cleaning` as the value of service and currentQuestion as "square meter"
// It sends out a message through the sendBotMessage function and also adds new html in the form.
const moveOutCleaning = () => {
  showMessage(`"Move-out cleaning"`, `user`);
  service = `Move-out cleaning`;
  currentQuestion = `square meter`;
  sendBotMessage(`How many square meters is your home?`);

  form.innerHTML = `
  <div id="submitContainer">
  <div class="form__overlay active" id="overlay"></div>
  <div class="form__input-container hidden" id="inputContainer">
    <label for="textInput"></label>
    <input id="textInput" type="text" placeholder="100" required />
    <button id="submitBtn" type="submit">Send</button>
  </div>
  </div>`;
};

// Function that activates the function showMessage, and saves `Move-out cleaning` as the value of service and currentQuestion as "windows"
// It sends out a message through the sendBotMessage function and also adds new html in the form.

const windowCleaning = () => {
  showMessage(`"Window cleaning"`, `user`);
  service = `Window cleaning`;
  currentQuestion = `windows`;
  sendBotMessage(`Fantastic! How many windows do you have?`);

  form.innerHTML = `
  <div id="submitContainer">
  <div class="form__overlay active" id="overlay"></div>
  <div class="form__input-container hidden" id="inputContainer">
    <label for="textInput"></label>
    <input id="textInput" type="text" placeholder="10" required/>
    <button id="submitBtn" type="submit">Send</button>
  </div>
  </div>`;
};

//A function in which the bot asks for the users email and also changes the current question to email, it also adds new html to the form.
const askForEmail = () => {
  sendBotMessage(
    `What is your e-mail adress so that we can send you an offer?`
  );
  currentQuestion = `email`;

  form.innerHTML = `
  <div id="submitContainer">
  <div class="overlay active" id="overlay"></div>
  <div class="input__container hidden" id="inputContainer">
    <label for="textInput"></label>
    <input id="textInput" type="email" placeholder="user@gmail.com" required />
    <button id="submitBtn" type="submit">Send</button>
  </div>
  </div>`;
};

// A function in which the bot asks for the users number and also changes the current question to number and adds new html to the form.
const askForNumber = () => {
  sendBotMessage(`What is your telephone number?`);
  currentQuestion = `number`;

  form.innerHTML = `
  <div id="submitContainer">
  <div class="form__overlay active" id="overlay"></div>
  <div class="form__input-container hidden" id="inputContainer">
    <label for="textInput"></label>
    <input id="textInput" type="tel" required/>
    <button id="submitBtn" type="submit">Send</button>
  </div>
  </div>`;
};

// A button which restarts the form with the help of the function location.reload.
const resetForm = () => {
  location.reload();
};

// A function that returns true if the number is not a number and returns false if the number is a number.
const isValueNotNumber = (message) => {
  let isNotANumber = isNaN(message);
  return isNotANumber;
};

// The function SendUserMessage keeps track of where in the chain we are and what should happen in all the steps.

const sendUserMessage = () => {
  const message = document.getElementById("textInput");
  showMessage(`"${message.value}"`, `user`);

  // Step 1 - Current question = name - Stores the message.value as a username, send out messages, and add new html to the form.
  if (currentQuestion === `name`) {
    username = message.value;
    sendBotMessage(
      `Hi ${username}, what cleaning service do you want us to provide for you?`
    );

    form.innerHTML = `
    <div class="form__overlay active" id="overlay"></div>
  <div class="form__input-container hidden" id="inputContainer">
      <button id="monthlyCleaning">Monthly cleaning</button>
      <button id="moveOutCleaning">Move-out cleaning</button>
      <button id="windowCleaning">Window cleaning</button>
    </div>`;

    const monthlyCleaningBtn = document.getElementById("monthlyCleaning");
    monthlyCleaningBtn.addEventListener(`click`, monthlyCleaning);
    const windowCleaningBtn = document.getElementById("windowCleaning");
    windowCleaningBtn.addEventListener(`click`, windowCleaning);
    const moveOutCleaningBtn = document.getElementById("moveOutCleaning");
    moveOutCleaningBtn.addEventListener(`click`, moveOutCleaning);

    // Step 2 - Current question = Times a month?
    //        - Current question = Square meter?
    //        - Current question = Windows?

    //Check that the input is valid, if not it asks user to put in a number,
    //Sends a message and add content to the inner.html to change the layout, finally asks for email of the user.
  } else if (currentQuestion === `times a month`) {
    if (isValueNotNumber(message.value) === true) {
      sendBotMessage(`I dont understand you. You need to put in a number!`);
    } else {
      sendBotMessage(
        `Perfect, we will clean ${
          message.value
        } times a month. That will cost approximately ${
          100 * message.value
        } dollars a month.`
      );
      setTimeout(() => {
        askForEmail();
      }, 1000);
    }
  } else if (currentQuestion === `square meter`) {
    if (isValueNotNumber(message.value) === true) {
      sendBotMessage(`I dont understand you. You need to put in a number`);
    } else {
      sendBotMessage(
        `Super, we have registered that your home is ${message.value} square meters.`
      );
      setTimeout(() => {
        askForEmail();
      }, 1000);
    }
  } else if (currentQuestion === `windows`) {
    if (isValueNotNumber(message.value) === true) {
      sendBotMessage(`I dont understand you. You need to put in a number`);
    } else {
      sendBotMessage(
        `Perfect ${username}, we will clean your ${
          message.value
        } windows. That will cost approximately ${20 * message.value} dollars.`
      );
      setTimeout(() => {
        askForEmail();
      }, 1000);
    }

    // Step 3: Current question: email - Saves message.value as emailadress. Calls for the function askForNumber().
  } else if (currentQuestion === `email`) {
    emailAdress = message.value;
    askForNumber();
  }

  // Step 4: Current question - number - Saves message.value as a telephone-number. Calls for the function number(), Sends a message and add content to the form.
  // Adds a dropdown, shows the message from the user, sends a message from the bot and add new content to the form, finally add a resetForm function
  else if (currentQuestion === `number`) {
    telephoneNumber = message.value;
    sendBotMessage(
      `Thank you ${username} for your interest in our service: ${service}. We will return with a offer to the email adress: ${emailAdress} and call you within a week to your number: ${telephoneNumber} to decide a time for the cleaning.`
    );
    form.innerHTML = `
    <div class="overlay active" id="overlay"></div>
    <div id="inputContainer" class="input__container hidden">
      <label for="customerHappiness"></label>
      <select name="customerHappiness" id="customerHappiness">
        <option value="">Choose your mood</option>
        <option value="😊">😊 Happy</option>
        <option value="😐">😐 Neutral</option>
        <option value="😠">😠 Angry</option>
      </select>
    </div>`;

    const customerHappinessSelector =
      document.getElementById("customerHappiness");
    customerHappinessSelector.addEventListener(`change`, (event) => {
      showMessage(event.target.value, `user`);
      sendBotMessage(`Thanks for letting us know! Have a lovley day!`);

      form.innerHTML = `
      <div class="overlay active" id="overlay"></div>
      <div id="inputContainer" class="input__container hidden">
        <button id="resetForm">I changed my mind</button>
      </div>
      `;

      const resetFormBtn = document.getElementById(`resetForm`);
      resetFormBtn.addEventListener(`click`, resetForm);
    });
  }
  message.value = "";
};

greeting();

// EventListener
form.addEventListener("submit", sendUserMessage);
