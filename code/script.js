// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

// If you need any global variables that you can use across different functions, declare them here:
const button = document.querySelector(".send-btn");
const form = document.getElementById("form");
const nameGreeting = document.getElementById("name-greeting");
const inputWrapper = document.getElementById("input-wrapper");

console.log(nameGreeting);
// Declare your functions after this comment
// Input Wrapper HTML elements:
const typeOfFoodHtml = () => {
  inputWrapper.innerHTML = `
  <button id="donut" value="Donut" type="button"> Donut </button>
  <button id="croissant"  value="Croissant"> Croissant </button>
  <button id="sponge-cake"  value="Sponge Cake"> Sponge Cake </button>
  `;
};

const typeOfFlavourHtml = (flavour) => {
  if (flavour === "donut") {
    inputWrapper.innerHTML = `
  <select name="flavours" id="flavours">
  <option>👇 Select a flavour...</option>
  <option id="choco">Chocolate</option>
  <option id="vanilla">Vanilla</option>
  <option id="oreo">Oreo</option>
</select>
  `;
  } else if (flavour === "croissant") {
    inputWrapper.innerHTML = `
  <select name="flavours" id="flavours">
  <option>👇 Select a flavour...</option>
  <option id="pistachio">Pistachio</option>
  <option id="nutella">Nutella</option>
  <option id="cheese">Cheese</option>
</select>
  `;
  }
};

const shippingMethodHtml = () => {
  inputWrapper.innerHtml = `
  <button id="delivery" type="button" value="Delivery"> Delivery </button>
  <button id="pickup" type="button" value="Pickup">  Pickup </button>
  `;
};

const orderConfirmationHtml = () => {
  inputWrapper.innerHtml = `
  <button id="confirm" type="button" value="Confirm"> Confirm </button>
  <button id="cancel" type="button" value="Cancel">  Cancel </button>
  `;
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
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

  chat.scrollTop = chat.scrollHeight;
};

// Question 1 from Chatbot (greeting):
const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};
console.log(document.querySelector("#donut"));
// Greeting and 2nd bot question
const userNameAnswer = (e) => {
  e.preventDefault();
  showMessage(nameGreeting.value, "user");

  //Show 2nd bot question
  setTimeout(
    () =>
      showMessage(
        `Nice to meet you ${nameGreeting.value}! What type of food would you like to order?`,
        "bot"
      ),
    1000
  );
  //Show food options:
  setTimeout(typeOfFoodHtml, 2000);
};

//Question 3 from bot
const typeOfFlavourQuestion = (e) => {
  const answer = `${e.target.value}`;
  console.log(answer);
  showMessage(answer, "user");
  setTimeout(() => typeOfFlavourHtml(answer), 1000);
};

// Set up your eventlisteners here
inputWrapper.addEventListener("click", function (e) {
  const selectedFood = e.target;
  if (selectedFood.id === "donut") {
    setTimeout(() => typeOfFlavourHtml(selectedFood.id), 1000);
    showMessage(selectedFood.value, "user");
    showMessage("Select a flavour for your donut!", "bot");
  } else if (selectedFood.id === "croissant") {
    showMessage(selectedFood.value, "user");
    typeOfFlavourHtml(selectedFood.id);
    showMessage("Select a flavour for your croissant!", "bot");
  } else if (selectedFood.id === "sponge-cake") {
    showMessage(selectedFood.value, "user");
    typeOfFlavourHtml(selectedFood.id);
    showMessage("Select a flavour for your sponge cake!", "bot");
  }
});
if (button) {
  button.addEventListener("click", userNameAnswer);
}

setTimeout(greetUser, 1000);
