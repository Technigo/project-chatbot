// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");
const inputValue = document.getElementById("name-input");

// If you need any global variables that you can use across different functions, declare them here:
let currentQuestion = 0;
let userName = "";
let preferredType = "";
const setTimeOutTime = 1200;

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-avatar.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/catbot.png" alt="Bot" />
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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome to Cat Bot the Chat bot. What's your name?", "bot");
};

const preferredTypeQuestion = () => {
  showMessage(`Hello ${userName}! Which type of cat do you prefer`, "user");
  inputWrapper.innerHTML = `
<select id="select"
<option disabled selected value="">Select your favorite type of cat</option>
<option id="domestic-long-haired-cat" value="domestic-long-haired-cat">Domestic Long-Haired Cat/Non-Breed</option>
<option id="short-haired-breed" value="short-haired-breed">Short-Haired Breed</option>
      <option id="long-haired-breed" value="long-haired-breed">Long-Haired Breed</option>
   </select>
`;
  const select = document.getElementById("select");
  select.addEventListener("change", () => handlePreferredType(select.value));
};

const favoritePersonality = () => {
  showMessage("And which cat personality is your favorite?", "bot");
  inputWrapper.innerHTML = `
  <div id="btn">
  <button id="cuddly" value="cuddly">Cuddly</button>
  <button id="anti-social" value="anti-social">Antisocial</button>
  </div>
`;
  document
    .getElementById("cuddly")
    .addEventListener("click", () => handleFavoritePersonality("cuddly"));
  document
    .getElementById("anti-social")
    .addEventListener("click", () => handleFavoritePersonality("anti-social"));
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => favoritePersonality(btn.value));
};

const adopt = () => {
  showMessage(
    "Perfect! We have found the perfect ${preferredType} cat for you. Would you like to adopt a cat?",
    "bot"
  );
  inputWrapper.innerHTML = `
  <button id="yes" value="yes">Yes!</button>
    <button id="maybe" value="maybe">I'll think about it</button>
  <button id="no" value="no">No</button>
`;
  document
    .getElementById("yes")
    .addEventListener("click", () => handleAdoptACat("yes"));
  document
    .getElementById("maybe")
    .addEventListener("click", () => handleAdoptACat("maybe"));
  document
    .getElementById("no")
    .addEventListener("click", () => handleAdoptACat("no"));
};

//todo:
//Farewell message
//Iteration through handlers
//Handlers
// Change user name input to first uppercase letter
// Change preferred type input to favorite personality

// Set up your eventlisteners here
form.addEventListener("submit", handleInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, setTimeOutTime);
