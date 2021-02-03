// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const formSubmitButton = document.getElementById("send-btn");
const formMessageBox = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");


// Global variables, if you need any, declared here
let questionNumber = 1;
let chatDelay = 800;

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

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.jpg" alt="Bot" />
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
  showMessage(`Hi there!👩‍🍳 Welcome to Bootstrap Bakery. What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

/* nextQuestion will check the value of questionNumer and execute which ever code correspands to the correct value. */
const nextQuestion = (message) => {

  if (questionNumber === 1) {
    userReply(message);
    formMessageBox.value = "";
    setTimeout(() => question2(message), chatDelay);
  }else if (questionNumber === 2){
    userReply(message);
    formMessageBox.value = "";
    setTimeout(() => question3(message), chatDelay);
  }else if(questionNumber === 3){
    userReply(message);
    formMessageBox.value = "";
    setTimeout(() => question4(message), chatDelay);
  }else {
    //botReply("Don't forget to pick up your order!"); Lägga till igen?
  }
};

const question2 = (message) => {
  questionNumber++;
  botReply(`Nice to meet you, ${message}. What would you like to order?`);


  inputWrapper.innerHTML = `
  <button id="cakeBtn">Cake</button> 
  <button id="cupcakeBtn">Cupcake</button> 
  <button id="pieBtn">Pie</button> 
  `

  document
    .getElementById("cakeBtn")
    .addEventListener("click", () =>nextQuestion("cake"))
    document
    .getElementById("cupcakeBtn")
    .addEventListener("click", () =>nextQuestion("cupcake"))
    document
    .getElementById("pieBtn")
    .addEventListener("click", () =>nextQuestion("pie"))
};

const question3 = (type) => {
  questionNumber++;
  botReply(`A ${type}, yum! Pick a flavour.`);

  if (type === "cake") {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>Flavour</option>
      <option value="vanilla">Vanilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="strawberry">Strawberry</option>
    </select>
    `
  }

  else if (type === "cupcake") {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>Flavour</option>
      <option value="vanilla">Vanilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="strawberry">Strawberry</option>
    </select>
    `
  }

  else {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>Flavour</option>
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
  botReply (`${message}, that's a really nice choice! Thanks for ordering, see you soon!`)
  inputWrapper.innerHTML = `
  <form id="name-form" onsubmit="return false;">
  <input id="name-input" type="text" />
  </form>`// Vi hade glömt att ta bort menyn med innerHTML
  };




// Eventlisteners
formSubmitButton.addEventListener('click', () => nextQuestion(formMessageBox.value));

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
