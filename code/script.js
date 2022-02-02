// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('name-input');

// Global variables, if you need any, declared here
let questionNumber = 1;
let userName = '';
let icing = '';
let pieces = '';

// Functions declared here
const botReply = (msg) => {
  showMessage(msg, 'bot');
};

const userReply = (msg) => {
  showMessage(msg, 'user');
};


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(); //Move this to line 12/13?
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    console.log();
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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber);

  if (questionNumber === 1) {
    userName = message;
    userReply(message);
    input.value = '';
    setTimeout(() => showCakes(message), 1000);
  } else if (questionNumber === 2) {
    userReply(message);
    setTimeout(() => showIcing(message), 1000);
  } else if (questionNumber === 3) {
    icing = message;
    userReply(message);
    if (message === "without icing") {
      questionNumber++;
      setTimeout(() => showSize(message), 1000);
    } else {
      setTimeout(() => showColour(message), 1000);
    }
  } else if (questionNumber === 4) {
    userReply(message);
    setTimeout(() => showSize(message), 1000);
  } else if (questionNumber === 5) {
    pieces = message
    userReply(message);
    setTimeout(() => showOrder(message), 1000);
  } else {
    userReply(message);
    setTimeout(() => thankYou(pieces, icing), 1000);
  }
};



// Starts here
const greeting = () => {
  questionNumber = 1;
  botReply(`Welcome, what's your name?`);
  // Just to check it out, change 'bot' to 'user' here 👆
};

const showCakes = (msg) => {
  questionNumber++;
  botReply(`What type of cake would you like, ${msg}`);
  inputWrapper.innerHTML = `
  <button id="chocolateBtn">Chocolate</button>
  <button id="vanillaBtn">Vanilla</button>
  <button id="fruitBtn">Fruit</button>
  `;
  document.getElementById('chocolateBtn').addEventListener('click', () => nextQuestion('chocolate'));
  document.getElementById('vanillaBtn').addEventListener('click', () => nextQuestion('vanilla'));
  document.getElementById('fruitBtn').addEventListener('click', () => nextQuestion('fruit'));
};

const showIcing = (msg) => {
  questionNumber++;
  botReply(`A ${msg} cake, what a great choice! Do you want icing?`);
  inputWrapper.innerHTML = `
  <button id="YesBtn">Yes please!</button>
  <button id="NoBtn">No, it would be to sweet </button>
  `;
  document.getElementById('YesBtn').addEventListener('click', () => nextQuestion('with icing'));
  document.getElementById('NoBtn').addEventListener('click', () => nextQuestion('without icing'));
};

const showColour = (msg) => {
  questionNumber++;
  botReply(`A cake with icing is always better! What colour do you want for the icing?`);
  inputWrapper.innerHTML = `
  <button id="pinkBtn">Pink</button>
  <button id="greenBtn">Green</button>
  <button id="yellowBtn">Yellow</button>
  `;
  document.getElementById('pinkBtn').addEventListener('click', () => nextQuestion('pink'));
  document.getElementById('greenBtn').addEventListener('click', () => nextQuestion('green'));
  document.getElementById('yellowBtn').addEventListener('click', () => nextQuestion('yellow'));
};

const showSize = (msg) => {
  console.log();
  questionNumber++;
  botReply(`It's noted ${userName}! What size do you want?`);
  inputWrapper.innerHTML = 
  `
  <button id="4Btn">4 pieces</button>
  <button id="8Btn">8 pieces</button>
  <button id="12Btn">12 pieces</button>
  <button id="16Btn">16 pieces</button>
  `;
  document.getElementById('4Btn').addEventListener('click', () => nextQuestion('4 pieces'));
  document.getElementById('8Btn').addEventListener('click', () => nextQuestion('8 pieces'));
  document.getElementById('12Btn').addEventListener('click', () => nextQuestion('12 pieces'));
  document.getElementById('16Btn').addEventListener('click', () => nextQuestion('16 pieces'));

  // `
  // <select id="select">
  //   <option value="" selected disabled>Select the number of pieces</option>
  //   <option value="4">4 pieces</option>
  //   <option value="8">8 pieces</option>
  //   <option value="12">12 pieces</option>
  //   <option value="16">16 pieces</option>
  // </select>
  // `
  // const select = document.getElementById('select')
  // select.addEventListener('change', () => nextQuestion(select.value))

};

const showOrder = (msg) => {
  questionNumber++;
  botReply(`Are you sure your want to order a ${msg} cake?`);
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes</button>
  <button id="noBtn">No</button>
  `;
  document.getElementById('noBtn').addEventListener('click', () => {
    location.reload();
    return false;
  });

  document.getElementById('yesBtn').addEventListener('click', () => nextQuestion('Yes!'));
};

const thankYou = (pieces, icing) => {
  let price = ''
  if (pieces === "4 pieces"){
    price = 10 
  } else if (pieces === "8 pieces"){
    price = 20
  } else if (pieces === "12 pieces"){
    price = 30
  } else {
    price = 40
  }
  if (icing === "with icing"){
    price += 5
  }
  botReply(`Thanks you for your order, it will be ${price} €`);
  inputWrapper.innerHTML = ``;
};

// Set up your eventlisteners here

sendBtn.addEventListener('click', () => {
  nextQuestion(input.value);
  // Disable button & input on Enter
});

// maybe this part is not useful? seems to work without
// input.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter' && input.value) {
//     nextQuestion(input.value)
//     // Disable button & input on Enter
//   }
// });




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);



document.getElementById('name-form').onsubmit = event => {
  event.preventDefault();
};

