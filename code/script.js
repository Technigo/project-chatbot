// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");
const sendBtn = document.getElementsByClassName("send-btn");

// Global variables
let userName = "";
let foodChoice = "";

// Functions goes here 👇
const handleNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  if (userName) {
    showMessage(userName, "user");
    setTimeout(chooseFood, 1000);
  } else {
    showMessage("I'm not sure that's a name. Please try again.", "bot");
  }
};

const chooseFood = () => {
  showMessage(
    `Hello ${userName}! What would you like to eat today? Make your choice:`,
    "bot"
  );
  addButtons();
  const foodButton = document.querySelectorAll(".send-btn");
  console.log(foodButton);
  foodButton.forEach((foodButton) => {
    foodButton.addEventListener("click", (event) => {
      foodChoice = event.target.id;
      console.log(foodChoice);
      showMessage(`I'd like ${foodChoice}, please.`, "user");
      setTimeout(chooseDish, 1000);
    });
  });
};

const chooseDish = () => {
  showMessage(`You've chosen ${foodChoice}, a great choice!`, "bot");
  addDishMenu();
};

function addButtons() {
  inputWrapper.innerHTML = `
    <button class="send-btn" id="pizza">Pizza</button>
    <button class="send-btn" id="pasta">Pasta</button>
    <button class="send-btn" id="salad">Salad</button>`;
}

function addDishMenu() {
  if (foodChoice === "pizza") {
    inputWrapper.innerHTML = `
    <select class="curtain" id="pizza-select">
      <option value="choose" disabled>--Please choose a pizza--</option>
      <option value="margherita">Margherita</option>
      <option value="vesuvius">Vesuvius</option>
      <option value="kebab">Kebab</option>
    </select> 
  `;
  } else if (foodChoice === "pasta") {
    inputWrapper.innerHTML = `
    <select class="curtain" id="pasta-select">
      <option value="choose" disabled>--Please choose a pasta dish--</option>
      <option value="carbonara">Carbonara</option>
      <option value="spaghetti bolognese">Spaghetti Bolognese</option>
      <option value="frutti di mare">Frutti di Mare</option>
    </select> 
  `;
  } else if (foodChoice === "salad") {
    inputWrapper.innerHTML = `
    <select class="curtain" id="salad-select">
      <option value="choose" disabled>--Please choose a salad--</option>
      <option value="caesar salad">Caesar Salad</option>
      <option value="tabbouleh">Tabbouleh</option>
      <option value="salad caprese">Salad Caprese</option>
    </select> 
  `;
  }
}

/*
const chosePizzaType = () => {
  if (userName == "") {
    showMessage("Pizza, What type of pizza do you want?", "bot");
  } else {
    showMessage(`Cool, ${userName}! What size do you want?`, "bot");
  }
};*/

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
};

// Eventlisteners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);

/*
nameInput.addEventListener("change", (e) => {
  userName = e.target.value;
});

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showMessage(`${userName}`, "user");
  nameInput.value = "";
  setTimeout(chooseFood, 1000);
});*/

nameForm.addEventListener("submit", handleNameInput);
