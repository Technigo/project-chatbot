// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const formSubmitButton = document.getElementById("send-btn");
const formMessageBox = document.getElementById("form-input");
const formInputWrapper = document.getElementById("input-wrapper");
const mainTag = document.getElementById("mainTag");

// Global variables, if you need any, declared here

/* This varaible will keep track of which question functin that will be triggered in the IF statement. */
let questionNumber = 1;

/* This variable will set a global chat delay to every bubble to emulate a more natural conversation flow. */
let chatDelay = 1000;

// Set up your eventlisteners here

/* This eventlistener will listen for a click on the From Submit Button */
formSubmitButton.addEventListener('click', () => nextQuestion(formMessageBox.value));

// Functions declared here

/* This function allows us to only type botReply("message"). Makes it easier to read and type*/
const botReply = (msg) => {
  showMessage(msg, "bot");
};

/* This function allows us to only type userReply("message"). Makes it easier to read and type*/
const userReply = (msg) => {
  showMessage(msg, "user");
};

/* This function will add a chat bubble in the correct place based on who the sender is */
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    /* console.log(message); */
    /* console.log(showMessage); */
    /* console.log(greeting); */

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
  chat.scrollTop = chat.scrollHeight
}


// Starts here
const greeting = () => {
  showMessage(`Hi! What name did your parents give you?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

/* This functions is the core of the question. What ever questioNumber is equals to, that specific function will be called.  */
const nextQuestion = (message) => {
  if (questionNumber === 1) {
    // Function call
    greentingAnswer(message);
  } else if (questionNumber === 2) {
    // Function call
    stockOrFundsQuestionAnswer(message);
  } else if (questionNumber === 3) {
    // Function call
    highRiskOrLowRiskStockQuestion(message);
  } else if (questionNumber === 4) {
    // Function call
    highRiskOrLowRiskFundQuestion(message);
  } else if (questionNumber === 99) {
    // Function call
    finalQuestion(message);
  } else {
    botReply("questionNumber invalid value!");
  }
};

/* This function will handle the what's your name response. */
const greentingAnswer = (message) => {
  userReply(message); // Speech bubble name
  formMessageBox.value = "";
  /* We add a timeout here and then we call the function. */
  setTimeout(() => stockOrFundsQuestion(message), chatDelay)
};

/* This functions will print the the chat bubble on screen that asks us if you want to buy stocks or funds */
const stockOrFundsQuestion = (message) => {
  questionNumber = 2; // Set questionNumber to 2
  botReply(`Hello ${message}. Would you like to buy "stocks" or "funds"?`) // Speech bubble question
  // Jumps to nextQuestion function because we clicked the button
};

/* This question will print the users answer speech bubble and check wheter or not the users answer is stocks or funds. Depending on what the answe is the code will push the user in the right direction. We also added a failsafe else if user user don't type the correct message. */
const stockOrFundsQuestionAnswer = (message) => {

  userReply(message); // Speech bubble STOCKS or FUNDS
  formMessageBox.value = "";

  if (message === "stocks") {
    botReply("Perfect. Would you like high risk or low risk stocks?");
    questionNumber = 3; // Set questionNumber to 3
  } else if (message === "funds") {
    botReply("Perfect. Would you like high risk or low risk funds?");
    questionNumber = 4; // Set questionNumber to 4
  } else {
    botReply('You have to type either "stocks" or "funds".');
  };
};

/* This function will print a speech bubble on the screen with the users answer which should be either "high" or "low". It will then check whcih type of stock the user want. Then push the user in the right direction.*/
const highRiskOrLowRiskStockQuestion = (message) => {
  questionNumber = 99;
  userReply(message); // Speechbubble high
  formMessageBox.value = "";
  if (message === "high" || message === "high risk") {
    botReply("oh, so you want high risk!");
    setTimeout(chatDelay)
    botReply("Here you go!");

    /*At this poin in the code we have coded a HTML slect option list that will be rendered on the screen and our previous textbox will be removed*/
    formInputWrapper.innerHTML = `
  <div class="input-wrapper" id="input-wrapper">
    <div class="selectOptionDiv" id="selectOptionDiv">
      <select id="selectMenuOptions">
        <option value="" selected disabled>Select a stock</option>
        <option value="Provide IT">Provide IT</option>
        <option value="Sagax D">Sagax D</option>
        <option value="Naxs">Naxs</option>
        <option value="Lundin Energy">Lundin Energy</option>
      </select>
      <button id="selectOptionButton" class="send-btn" type="button">Buy</button>
    </div>
  </div>`;

    let selectOptionButton = document.getElementById("selectOptionButton");
    let selectMenuOptions = document.getElementById("selectMenuOptions");

    /* We had to add a new event lsitener to our "buy" button we rendered above. */
    selectOptionButton.addEventListener('click', () => nextQuestion(selectMenuOptions.value));

  } else if (message === "low" || message === "low risk") {

    botReply("You want low risk");
    setTimeout(chatDelay)
    botReply("Here you go!");

    /* At this poin in the code we have coded a HTML slect option list that will be rendered on the screen and our previous textbox will be removed */
    formInputWrapper.innerHTML = `
    <div class="input-wrapper" id="input-wrapper">
    <div class="selectOptionDiv" id="selectOptionDiv">
    <select id="selectMenuOptions">
    <option value="" selected disabled>Select a stock</option>
    <option value="Investor">Investor</option>
    <option value="Latour">Latour</option>
    <option value="Kinnevik">Kinnevik</option>
    <option value="Castellum">Castellum</option>
    </select>
    <button id="selectOptionButton" class="send-btn" type="button">Buy</button>
    </div>
    </div>`;
    let selectOptionButton = document.getElementById("selectOptionButton");
    let selectMenuOptions = document.getElementById("selectMenuOptions");

    /* We had to add a new event lsitener to our "buy" button we rendered above. */
    selectOptionButton.addEventListener('click', () => nextQuestion(selectMenuOptions.value));

  } else {
    botReply("You have to type either low risk or high risk.");
  };
};

const highRiskOrLowRiskFundQuestion = (message) => {

  questionNumber = 99;
  userReply(message); // Speechbubble high
  formMessageBox.value = "";
  if (message === "high" || message === "high risk") {
    botReply("oh, so you want high risk!");
    setTimeout(chatDelay)
    botReply("Here you go!");

    /* At this poin in the code we have coded a HTML slect option list that will be rendered on the screen and our previous textbox will be removed */
    formInputWrapper.innerHTML = `
  <div class="input-wrapper" id="input-wrapper">
    <div class="selectOptionDiv" id="selectOptionDiv">
      <select id="selectMenuOptions">
        <option value="" selected disabled>Select a stock</option>
        <option value="BGF World Gold">BGF World Gold</option>
        <option value="Allianz Global">Allianz Global</option>
        <option value="Amundi Fds">Amundi Fds</option>
        <option value="Shroder ISF">Shroder ISF</option>
      </select>
      <button id="selectOptionButton" class="send-btn" type="button">Buy</button>
    </div>
  </div>`;

    let selectOptionButton = document.getElementById("selectOptionButton");
    let selectMenuOptions = document.getElementById("selectMenuOptions");

    /* We had to add a new event lsitener to our "buy" button we rendered above. */
    selectOptionButton.addEventListener('click', () => nextQuestion(selectMenuOptions.value));

  } else if (message === "low" || message === "low risk") {

    botReply("You want low risk");
    setTimeout(chatDelay)
    botReply("Here you go!");

    /* At this poin in the code we have coded a HTML slect option list that will be rendered on the screen and our previous textbox will be removed */
    formInputWrapper.innerHTML = `
    <div class="input-wrapper" id="input-wrapper">
    <div class="selectOptionDiv" id="selectOptionDiv">
    <select id="selectMenuOptions">
    <option value="" selected disabled>Select a stock</option>
    <option value="Spiltan Räntefond Sverige">Spiltan Räntefond Sverige</option>
    <option value="SPP Obligationsfond">SPP Obligationsfond</option>
    <option value="Spiltan Högräntefond">Spiltan Högräntefond</option>
    <option value="IKC avkastningsfond">IKC avkastningsfond</option>
    </select>
    <button id="selectOptionButton" class="send-btn" type="button">Buy</button>
    </div>
    </div>`;
    let selectOptionButton = document.getElementById("selectOptionButton");
    let selectMenuOptions = document.getElementById("selectMenuOptions");

    /* We had to add a new event lsitener to our "buy" button we rendered above. */
    selectOptionButton.addEventListener('click', () => nextQuestion(selectMenuOptions.value));

  } else {
    botReply("You have to type either low risk or high risk.");
  };
};

/* This function will handle the final part of the chat. It doens't matter if the user chose the stock route or the fund route. The function will take the value and tell us that we have successfully purchased our selected stock/fund. */
const finalQuestion = (message) => {
  console.log(message);
  botReply(`Awesome. You have now purchased 1x of ${message}`);

  /* At this point we render a new div element with a hidden class. The styling will set the display to none thus hiding the element. */
  selectOptionDiv.innerHTML = `
    <div class="selectOptionDiv selectOptionDivHidden" id="selectOptionDiv">
    <select id="selectMenuOptions">
    <option value="" selected disabled>Select a stock</option>
    <option value="provideIT">Provide IT</option>
    <option value="sagaxD">Sagax D</option>
    <option value="naxs">Naxs</option>
    <option value="lunding energy">Lundin Energy</option>
    </select>
    <button id="selectOptionButton" class="send-btn" type="button">Buy</button>
    </div>
    `;

  /* At this point we render a textbox and submit button again. */
  formInputWrapper.innerHTML = `
    <div class="input-wrapper" id="input-wrapper">
      <form id="name-form" onsubmit="return false;">
        <input id="form-input" type="text" />
        <button id="send-btn" class="send-btn" type="button">
        Send
        </button>
      </form>
  </div>
  `;


};

/* setTimeout(greeting, 500 */
setTimeout(greeting, chatDelay)
/* setTimeout(greeting, 3000)*/