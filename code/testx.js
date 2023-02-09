//test
//Le Chatbot

// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");
const inputValue = document.getElementById("name-input");

// If you need any global variables that you can use across different functions, declare them here:
let currentQuestion = 0;
let preferredType = "";
let favorite = "";
const setTimeOutTime = 1200;

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-avatar.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
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
  showMessage("Welcome to Cat Bot the Chat bot, what's your name?", "bot");
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

const preferredTypeQuestion = () => {
  showMessage(`Hello ${userName}! Which type of cat do you prefer?`, "bot");
  inputWrapper.innerHTML = `
    <select id="select">
      <option disabled selected value="">Pick your favorite type of cat</option>
      <option id="domestic-long-haired-cat" value="domestic-long-haired-cat">Domestic Long-Haired Cat/Non-Breed</option>      
      <option id="domestic-short-haired-cat" value="domestic-short-haired-cat">Domestic Short-Haired Cat/Non-Breed</option>
      <option id="short-haired-breed" value="short-haired-breed">Short-Haired Breed</option>
      <option id="long-haired-breed" value="long-haired-breed">Long-Haired Breed</option>
   </select>
  `;
  // const select = document.getElementById("select");
  // select.addEventListener("change", () => handlePreferredType(select.value));
  document
    .getElementById("select")
    .addEventListener("change", () => preferredTypeQuestion("select"));
};

const adopt = () => {
  console.log(adopt);
  showMessage(
    `Perfect! We have found the perfect ${favorite} cat for you. Would you like to adopt a cat?`,
    "bot"
  );
  inputWrapper.innerHTML = `
  <button id="yes" value="yes">Yes!</button>
  <button id="maybe" value="maybe">I'll think about it</button>
  <button id="no" value="no">No</button>
  `;
  document
    .getElementById("yes")
    .addEventListener("click", () => handleAdoptACat("Yes!"));
  document
    .getElementById("maybe")
    .addEventListener("click", () => handleAdoptACat("I'll think about it"));
  document
    .getElementById("no")
    .addEventListener("click", () => handleAdoptACat("No"));
};

const farewellMessage = () => {
  showMessage(`Thank you, we will be in touch, cat lover!`, "bot");
  inputWrapper.innerHTML = ``;
};

const handleInput = (event) => {
  event.preventDefault();
  currentQuestion++;
  if (currentQuestion === 1) {
    handleUserName();
  } else if (currentQuestion === 2) {
    handleFavoritePersonality();
  } else if (currentQuestion === 3) {
    handlePreferredType();
  } else {
    handleAdoptACat();
  }
};

const handleUserName = () => {
  const userName = document.querySelector("#name-input").value;
  userName = inputValue.value;
  showMessage(`${userName}`, "user");
  inputValue.value = "";
  setTimeout(preferredTypeQuestion, setTimeOutTime);
};

const handlePreferredType = () => {
  preferredType = select.value;
  showMessage(`My favorite type of cat is ${preferredType}`, "user");
  inputValue.value = "";
  setTimeout(favoritePersonality, setTimeOutTime);
};

const handleFavoritePersonality = (favoritePersonality) => {
  favorite = btn.value;
  showMessage(`I prefer the ${favoritePersonality} cat personality`, "user");
  inputValue.value = ``;
  setTimeout(adopt, setTimeOutTime);
};

const handleAdoptACat = (adopt) => {
  showMessage(adopt, "user");
  inputValue.value = ``;
  setTimeout(farewellMessage, setTimeOutTime);
};

// Set up your eventlisteners here
// User input
form.addEventListener("submit", handleInput);

setTimeout(greetUser, setTimeOutTime);
