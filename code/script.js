// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    console.log("user");
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
    console.log("bot");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // This makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation and ask for the users name
const greetUser = () => {
  showMessage("Hello there, what's your name?", "bot");
};

// A function to promt the user to enter their name
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";
  setTimeout(() => showFoodOptions(name), 1000);
};

// The bot answers with the users name and asks what food the user wants to order with three different buttons with options
const showFoodOptions = (name) => {
  showMessage(`Hello ${name}! What are you craving today?`, "bot");
  inputWrapper.innerHTML = `<div id="button-form">
  <button id="Pizza">Pizza</button>
  <button id="Pasta">Pasta</button>
  <button id="Salad">Salad</button></div>`;
  const pizzaBtn = document.getElementById("Pizza");
  pizzaBtn.onclick = () => foodClick("Pizza");
  const pastaBtn = document.getElementById("Pasta");
  pastaBtn.onclick = () => foodClick("Pasta");
  const saladBtn = document.getElementById("Salad");
  saladBtn.onclick = () => foodClick("Salad");
};

// Message from user with the costumers choice of food
const foodClick = (foodCategory) => {
  showMessage(foodCategory, "user");
  setTimeout(() => showSubtype(foodCategory), 1000);
};

// Bot answers by using the costumers prefered food and asks what kind of prefered food the customer want. Three buttons are shown to the user.
const showSubtype = (foodCategory) => {
  showMessage(
    `${foodCategory}, nice! What kind of ${foodCategory} would you like? `,
    "bot"
  );

  if (foodCategory === "Pizza") {
    inputWrapper.innerHTML = `<div id="button-form">
  <button id="margerita">Margerita</button>
  <button id="funghi">Funghi</button>
  <button id="capricciosa">Capricciosa</button></div>`;
    const margeritaBtn = document.getElementById("margerita");
    margeritaBtn.onclick = () => subtypeClick("Margerita");
    const funghiBtn = document.getElementById("funghi");
    funghiBtn.onclick = () => subtypeClick("Funghi");
    const capricciosaBtn = document.getElementById("capricciosa");
    capricciosaBtn.onclick = () => subtypeClick("Capricciosa");
  } else if (foodCategory === "Pasta") {
    inputWrapper.innerHTML = `<div id="button-form">
  <button id="carbonara">Carbonara</button>
  <button id="lasagne">Lasagne</button>
  <button id="ravioli">Ravioli</button></div>`;
    const carbonaraBtn = document.getElementById("carbonara");
    carbonaraBtn.onclick = () => subtypeClick("Carbonara");
    const lasagneBtn = document.getElementById("lasagne");
    lasagneBtn.onclick = () => subtypeClick("Lasagne");
    const ravioliBtn = document.getElementById("ravioli");
    ravioliBtn.onclick = () => subtypeClick("Ravioli");
  } else if (foodCategory === "Salad") {
    inputWrapper.innerHTML = `<div id="button-form">
  <button id="salad-caprese">Salad Caprese</button>
  <button id="greek-salad">Greek Salad</button>
  <button id="caesar-salad">Caesar Salad</button></div>`;
    const capreseBtn = document.getElementById("salad-caprese");
    capreseBtn.onclick = () => subtypeClick("Salad-caprese");
    const greekBtn = document.getElementById("greek-salad");
    greekBtn.onclick = () => subtypeClick("Greek-salad");
    const caesarBtn = document.getElementById("caesar-salad");
    caesarBtn.onclick = () => subtypeClick("Caesar-salad");
  }
};

// Message from user with the costumers choice of food subtype
const subtypeClick = (dish) => {
  showMessage(dish, "user");
  setTimeout(() => confirmSubtype(dish), 1000);
};

// Message from bot with the costumers choice of food
const confirmSubtype = (dish) => {
  showMessage(`${dish}, nice!`, "bot");
  setTimeout(() => askForAge(), 1000);
};

// Bot asks if the costumer wants the dish for child or adult. Two buttons with options are shown.
const askForAge = (userAge) => {
  showMessage(`Do you want the meal to be for an adult or a child?`, "bot");
  inputWrapper.innerHTML = `<div id="button-form">
  <button id="adult">Adult</button>
  <button id="child">Child</button>
  </div>`;
  const adultBtn = document.getElementById("adult");
  adultBtn.onclick = () => ageClick("Adult");
  const childBtn = document.getElementById("child");
  childBtn.onclick = () => ageClick("Child");
};

// Message from user with the costumers age
const ageClick = (userAge) => {
  showMessage(userAge, "user");
  setTimeout(() => askForConfirmation(userAge), 1000);
};

// Message from bot with an age confirmation. Bot asks for confirmation by showing two buttons with options yes or no.
const askForConfirmation = (userAge) => {
  if (userAge === "Child") {
    showMessage(
      `The cost for a child portion is 10€. Are you sure you want to order this?`,
      "bot"
    );
    inputWrapper.innerHTML = `<div id="button-form">
  <button id="yes">Yes</button>
  <button id="no">No</button>
  </div>`;
    const yesBtn = document.getElementById("yes");
    yesBtn.onclick = () => confirmationClick("Yes");
    const noBtn = document.getElementById("no");
    noBtn.onclick = () => confirmationClick("No");
  } else if (userAge === "Adult") {
    showMessage(
      `The cost for an adult portion is 15€. Are you sure you want to order this?`,
      "bot"
    );
    inputWrapper.innerHTML = `<div id="button-form">
  <button id="yes">Yes</button>
  <button id="no">No</button>
  </div>`;
    const yesBtn = document.getElementById("yes");
    yesBtn.onclick = () => confirmationClick("Yes");
    const noBtn = document.getElementById("no");
    noBtn.onclick = () => confirmationClick("No");
  }
};

// NEXT STEP
//Confirmation message from user
const confirmationClick = (userConfirmation) => {
  showMessage(userConfirmation, "user");
  setTimeout(() => confirmOrder(userConfirmation), 1000);
};
//Confirmation message from bot

const confirmOrder = (userConfirmation) => {
  if (userConfirmation === "Yes") {
    showMessage(
      `Thank you for your order, we will start preparing your dish!`,
      "bot"
    );
  } else if (userConfirmation === "No") {
    showMessage(
      `Sorry to hear you didn't want to order from us. You are most welcome back whenever you feel like pizza, pasta or salad 🥰`,
      "bot"
    );
  }
  inputWrapper.innerHTML = "";
};

// Eventlisteners goes here 👇

addEventListener("submit", handleNameInput);

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
