// Start here
// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const btn = document.querySelector("button");
const nameInput = document.getElementById("name-input");
const form = document.getElementById("name-form");

// Step 1 and Step 2
// When website loaded, chatbot asks first question.
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (msg, sender) => {
  console.log("MESSAGE IS:", msg);
  console.log("SENDER IS:", sender);
  if (sender === "bot") {
    chat.innerHTML += `<section class="bot-msg">
    <img src="assets/bot.png" alt="chat bot"/>
    <div class="bubble bot-bubble">
      <p>${msg}</p>
    </div>
    </section>
    `;
  } else if (sender === "user") {
    chat.innerHTML += `<section class="user-msg">
  <div class="bubble user-bubble">
    <p>${msg}</p>
  </div>
  <img src="assets/user.png" alt="user bot"/>
  </section>`;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};
const greetUser = () => {
  showMessage(`Hello there, What's your name?`, `bot`);
  // show message.the message should be from the bot
};
setTimeout(greetUser, 1000);
// greetUser()

// Step 3
// when user click the button, then show user's message
const handleNameinput = (event) => {
  event.preventDefault();
  const userName = nameInput.value;
  showMessage(`My name is ${userName}`, `user`);
  nameInput.value = ""; //clear nameInput's value
  setTimeout(() => askFoodType(userName), 1000);
};

btn.addEventListener("click", handleNameinput);

// bot ask user: what type of food would like to order and create menu button
const askFoodType = (userName) => {
  showMessage(
    `Nice to meet you ${userName}! 😁 What type of food would you like to order?`,
    `bot`
  );
  form.innerHTML = `
   <button id="pizzaBtn" type="submit" value="pizza">Pizza</button>
   <button id="pastaBtn" type="submit" value="pasta">Pasta</button>
   <button id="saladBtn" type="submit" value="salad">Salad</button>
   `;

  document.getElementById("pizzaBtn").addEventListener("click", foodOptions);
  document.getElementById("pastaBtn").addEventListener("click", foodOptions);
  document.getElementById("saladBtn").addEventListener("click", foodOptions);
};

//Step 4
// when click the menu button, show messages of user and bot
const foodOptions = (event) => {
  event.preventDefault();
  const type = event.target.value;
  showMessage(`${type}`, `user`);
  showMessage(
    `Oh so you're in the mood for ${type} choice. Select something from the menu!`,
    `bot`
  );
  if (type === "pizza") {
    form.innerHTML = `
      <select id="Option">
              <option disabled selected >👇Please choose one:</option>
              <option value="Margerita">Margerita</option>
              <option value="Peperion">Peperion</option>
              <option value="Vesuvio">Vesuvio</option>
      </select>
      `;
  } else if (type === "pasta") {
    form.innerHTML = `
    <select id="Option">
            <option value=""  disabled selected>👇Please choose one:</option>
            <option value="Pasta Carbonarn">Pasta Carbonara</option>
            <option value="Pasta Pomodoro">Pasta Pomodoro</option>
            <option value="Frutti Di Mare">Frutti di Mare</option>
    </select>
    `;
  } else {
    form.innerHTML = `
    <select id="Option">
            <option  value="" disabled selected>👇Please choose one:</option>
            <option value="Greek Salad">Greek Salad</option>
            <option value="Caesar Salad">Caesar Salad</option>
            <option value="Chicken Salad">Chicken Salad</option>
    </select>
    `;
  }
  document.getElementById("Option").addEventListener("change", finalOption);
};
// // confirm the final option
const finalOption = (event) => {
  showMessage(`${event.target.value}`, `user`);
  showMessage(
    `one ${event.target.value} coming up! Will that be for an adult or a child`,
    `bot`
  );
  form.innerHTML = `
    <button id="adult" value="adult">🧑🏽</button>
    <button id="child" value="child">🧒🏼</button>
  `;
  document.getElementById("adult").addEventListener(`click`, confirmation);
  document.getElementById("child").addEventListener(`click`, confirmation);
};

// select adult or child and create yes or no button
const confirmation = (event) => {
  event.preventDefault();
  const cost = event.target.value;
  showMessage(`${cost}`, `user`);
  if (cost === "adult") {
    showMessage(
      `One adult sized dish will be prepared for you. That'll be €15. Are you sure you want to order this?`,
      `bot`
    );
  } else {
    showMessage(
      `One child sized dish will be prepared for you. That'll be €10. Are you sure you want to order this?`,
      `bot`
    );
  }
  form.innerHTML = `
    <button id="yes" value="Yes">Yes</button>
    <button id="no" value="No">No</button>
  `;
  document.getElementById("yes").addEventListener("click", yesNoChoice);
  document.getElementById("no").addEventListener("click", yesNoChoice);
};

// Yes or no choice
const yesNoChoice = (event) => {
  event.preventDefault();
  const choice = event.target.value;
  console.log(choice);
  if (choice === "Yes") {
    showMessage(`Yes`, `user`);
    showMessage(`Thank you for your order! See you soon👋`, `bot`);
    form.innerHTML = ``;
  } else {
    location.reload(); //restat here, back to the top
    return false;
  }
};
