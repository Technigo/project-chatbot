// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");

// Functions goes here 👇

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

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";
  setTimeout(() => showFoodOptions(name), 1000);
};

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

const foodClick = (foodCategory) => {
  showMessage(foodCategory, "user");
  setTimeout(() => showSubtype(foodCategory), 1000);
};

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
const subtypeClick = (dish) => {
  showMessage(dish, "user");
  setTimeout(() => confirmSubtype(dish), 1000);
};

const confirmSubtype = (dish) => {
  showMessage(`${dish}, nice!`, "bot");
  setTimeout(() => askForAge(), 1000);
};

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

const ageClick = (userAge) => {
  showMessage(userAge, "user");
  setTimeout(() => askForConfirmation(userAge), 1000);
};

const askForConfirmation = (userAge) => {
  if (userAge === "Child") {
    showMessage(
      `The cost for a child portion is 10€. Are you sure you want to order this?`,
      "bot"
    );
    const adultBtn = document.getElementById("adult");
    adultBtn.onclick = () => ageClick("Adult");
    const childBtn = document.getElementById("child");
    childBtn.onclick = () => ageClick("Child");
  } else if (userAge === "Adult") {
    showMessage(
      `The cost for an adult portion is 15€. Are you sure you want to order this?`,
      "bot"
    );
  }
  // inputWrapper.innerHTML = `<div id="button-form">
  //   <button id="adult">Adult</button>
  //   <button id="child">Child</button>
  //   </div>`;
  //   const adultBtn = document.getElementById("adult");
  //   adultBtn.onclick = () => ageClick("Adult");
  //   const childBtn = document.getElementById("child");
  //   childBtn.onclick = () => ageClick("Child");
  // };
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
