// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

// If you need any global variables that you can use across different functions, declare them here:
const button = document.querySelector(".send-btn");
const form = document.getElementById("form");
const nameGreeting = document.getElementById("name-greeting");
const inputWrapper = document.getElementById("input-wrapper");
const donut = document.getElementById("donut");
console.log(nameGreeting);
// Declare your functions after this comment
const typeOfFood = () => {
  inputWrapper.innerHTML = `
  <button id="donut" type="button" value="Donut"> Donut </button>
  <button id="croissant" type="button" value="Croissant"> Croissant </button>
  <button id="sponge-cake" type="button" value="Sponge Cake"> Sponge Cake </button>
  `;
};

const typeOfFlavour = () => {
  inputWrapper.innerHTML = `
  <select name="flavours" id="flavours">
  <option>👇 Select a flavour...</option>
  <option id="choco">Chocolate</option>
</select>
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

// Chatbot greeting:
const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};

// answer from user:
const userNameAnswer = (e) => {
  e.preventDefault();
  showMessage(nameGreeting.value, "user");
  typeOfFoodQuestion();
};
// Question 1 from Bot:
const typeOfFoodQuestion = () => {
  const message = `Nice to meet you ${nameGreeting.value}! What type of food would you like to order?`;
  showMessage(message, "bot");
  typeOfFood();
};

// question from bot: type of food

// Set up your eventlisteners here

if (button) {
  button.addEventListener("click", userNameAnswer);
}

setTimeout(greetUser, 1000);
