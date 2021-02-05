// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const formSubmitButton = document.getElementById("send-btn");
const formMessageBox = document.getElementById("form-input");
const formInputWrapper = document.getElementById("input-wrapper");
const mainTag = document.getElementById("mainTag");

// Global variables, if you need any, declared here
let questionNumber = 1;
let chatDelay = 100;

// Set up your eventlisteners here
formSubmitButton.addEventListener('click', () => nextQuestion(formMessageBox.value));

// Functions declared here
const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};

// This function will add a chat bubble in the correct place based on who the sender is
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

const nextQuestion = (message) => {
  if (questionNumber === 1) {
      greentingAnswer(message);
  } else if (questionNumber === 2) {
      stockOrFundsQuestionAnswer(message);
  } else if (questionNumber === 3) {
      highRiskOrLowRiskStockQuestion(message);
  } else if (questionNumber === 4) {
    highRiskOrLowRiskFundQuestion(message);
  } else if (questionNumber === 99) {
      finalQuestion(message);
  } else {
      botReply("questionNumber invalid value!");
  }
};

const greentingAnswer = (message) => {
    userReply(message); // Speech bubble name
    formMessageBox.value = "";
    setTimeout(() => stockOrFundsQuestion(message), chatDelay) // Move to question2
};

const stockOrFundsQuestion = (message) => {
  questionNumber = 2; // Add 1 to questionNumber. questionNumber is now 2
  botReply(`Hello ${message}. Would you like to buy "stocks" or "funds"?`) // Speech bubble question
  // Jump to nextQuestion function because we clicked the button
};

const stockOrFundsQuestionAnswer = (message) => {
    
    userReply(message); // Speech bubble STOCKS or FUNDS
     formMessageBox.value = "";

    if (message === "stocks") {
      botReply("Perfect. Would you like high risk or low risk stocks?");
      questionNumber = 3; // Add 1 to questionNumber. questionNumber is now 3
    } else if (message === "funds") {
      botReply("Perfect. Would you like high risk or low risk funds?");
      questionNumber = 4; // Add 1 to questionNumber. questionNumber is now 4
    } else {
      botReply('You have to type either "stocks" or "funds".');
    }; 
};

const highRiskOrLowRiskStockQuestion = (message) => {
  questionNumber = 99;
  userReply(message); // Speechbubble high
  formMessageBox.value = "";
  if (message === "high" || message === "high risk") {
    botReply("oh, so you want high risk!");
    setTimeout(chatDelay)
    botReply("Here you go!");

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

    selectOptionButton.addEventListener('click', () => nextQuestion(selectMenuOptions.value));

  } else if (message === "low" || message === "low risk") {

    botReply("You want low risk");
    setTimeout(chatDelay)
    botReply("Here you go!");

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

    selectOptionButton.addEventListener('click', () => nextQuestion(selectMenuOptions.value));

  } else if (message === "low" || message === "low risk") {

    botReply("You want low risk");
    setTimeout(chatDelay)
    botReply("Here you go!");

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

    selectOptionButton.addEventListener('click', () => nextQuestion(selectMenuOptions.value));

  } else {
    botReply("You have to type either low risk or high risk.");
  };



};

const finalQuestion = (message) => {
  console.log(message);
  botReply(`Awesome. You have now purchased 1x of ${message}`);


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
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
/*  */

/* setTimeout(greeting, 500 */
setTimeout(greeting, chatDelay)
/* setTimeout(greeting, 3000)*/