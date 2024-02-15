// Variables that point to the selected DOM elements
const chat = document.getElementById(`chat`);
const nameInput = document.getElementById(`name-input`);
const inputWrapper = document.getElementById(`input-wrapper`);
const sendButton = document.querySelector(`.send-btn`);
const nameForm = document.getElementById(`name-form`);

let username = "";
let question1 = "";

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  //the if statement checks if the sender is user and if that's the case outputs the message
  if (sender === "user") {
    console.log(sender);
    console.log(message);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-crab.jpg" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    //the else if statement checks if the sender is bot and if that's the case outputs the message
    console.log(message);
    console.log(sender);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-fish.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // makes the chat scroll to the last message when there are too many
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  showMessage(
    `Hello. I'm Finnly. Nice to meet you. Wanna find out what kind of sea creature you are?`,
    `bot`
  );
  showMessage(
    `Great! Let's get started. But first, let me get your name.`,
    `bot`
  );
};

//user types in name
const saveUsername = (event) => {
  event.preventDefault();
  username = nameInput.value;
  showMessage(`Hi ${username}!`, `bot`);
  nameInput.value = "";
  creatureNature();
};

//bot asks first question, 2 options (introvert vs extrovert) to chose from (atm user has to type in answer)
const creatureNature = () => {
  showMessage(
    `Now let's check out some of your personality traits to find out what sea creature suits you. Are you more of an introvert or an extrovert?`,
    "bot"
  );

  // Create new form for question 1
  inputWrapper.innerHTML = `
    <form id="first-form">
          <label for="first-input">Introvert vs Extrovert</label>
          <input id="first-input" type="text" />
          <button class="first-btn" type="submit">Send</button>
        </form>
  `;

  // Make something happen - put in the function for question 1
  question1 = document.getElementById("first-input").value;
  document
    .querySelector(".first-btn")
    .addEventListener(
      "click",
      console.log(document.getElementById("first-input").value)
    );
};

//bot asks second question, 2 options (introvert vs extrovert) to chose from (atm user has to type in answer)
const preferedTime = () => {
  showMessage(`Tell me, are you more of a night owl or an early bird?`, "bot");

  // Create new form for question 2
  inputWrapper.innerHTML = `
<form id="first-form">
      <label for="second-input">Night Owl vs Early Bird</label>
      <input id="second-input" type="text" />
      <button class="second-btn" type="submit">Send</button>
    </form>
`;

  // Make something happen - put in the function for question 2
  question2 = document.getElementById("second-input").value;
  document
    .querySelector(".second-btn")
    .addEventListener(
      "click",
      console.log(document.getElementById("second-input").value)
    );
};

// Eventlisteners

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);

sendButton.addEventListener("click", saveUsername);
