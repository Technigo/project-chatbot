// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const form = document.getElementById("chat-form");
const buttonTea = document.createElement("div");
const greenTea = document.createElement("button");
const milkTea = document.createElement("button");
const blackTea = document.createElement("button");
const jelly = document.createElement("button");
const cream = document.createElement("button");
const boba = document.createElement("button");
const none = document.createElement("button");
const yes = document.createElement("button");
const no = document.createElement("button");
let bump = new Audio("assets/message.mp3");
let kettle = new Audio("assets/kettle.mp3");

//variables to be stored for usage in several functions
let teaChoice = "";
let topping = "";
let userName = "";
// Functions goes here 👇
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
        <img src="assets/user.svg" alt="User" />  
      </section>
    `;

    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/boba.svg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;


  }
  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
  myPlay(bump);

};

// A function to start the conversation
const greetUser = () => {

  showMessage("Hello there, what's your name?", "bot");

};

const handleInput = (event) => {
  event.preventDefault();

  // Store the value in a variable so we can access it after we
  // clear it from the input
  const userInput = document.getElementById("user-input").value;
  showMessage(userInput, "user");
  document.getElementById("user-input").value = "";
  userName = userInput;
  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(() => showFoodOptions(), 1000);
};

const showFoodOptions = () => {
  showMessage(
    `Hi ${userName} Please choose your tea base.`,
    "bot"
  );

  // add class hidden to input and submit button
  document.getElementById("user-input").classList.add("hidden");
  document.querySelector(".send-btn").classList.add("hidden");
  //add buttons with options
  buttonTea.classList.add("button-tea");
  greenTea.textContent = "Green Tea";
  blackTea.textContent = "Black Tea";
  milkTea.textContent = "Milk Tea";

  buttonTea.append(greenTea, blackTea, milkTea);
  form.appendChild(buttonTea);
};

const handleFoodChoice = (choice) => {
  showMessage(` ${choice}.`, "user");
  teaChoice = choice;
  buttonTea.removeChild(blackTea);
  buttonTea.removeChild(milkTea);
  buttonTea.removeChild(greenTea);
  setTimeout(() => toppingChoice(choice), 500);
};

const toppingChoice = (choice) => {
  showMessage(`${choice} Sounds good! Do you want some topping?`, "bot");
  boba.textContent = "Boba";
  jelly.textContent = "Jelly";
  cream.textContent = "Cream";
  none.textContent = "No topping";
  buttonTea.append(boba, jelly, cream, none);
};

const handleToppingChoice = (choice) => {
  showMessage(`${choice}.`, "user");
  topping = choice;
  // removing buttons
  buttonTea.removeChild(boba);
  buttonTea.removeChild(cream);
  buttonTea.removeChild(jelly);
  buttonTea.removeChild(none);
  setTimeout(() => checkOut(), 500);
};

const checkOut = () => {
  showMessage(`Are you sure you want ${teaChoice} with ${topping}?`, "bot");
  yes.textContent = "Yes";
  no.textContent = "No";
  buttonTea.append(yes, no);

};

const confirm = (choice) => {
  buttonTea.removeChild(yes);
  buttonTea.removeChild(no);

  if (choice == "Yes") {
    myPlay(kettle);
    showMessage(`Yes`, "user");
    showMessage(`Ok ${userName}! Your ${teaChoice} with ${topping} will be ready in 5 seconds`, "bot");

  }
  else {
    showMessage(`No`, "user");
    showMessage(`Ok ${userName}, maybe coffee is more your cup of tea?`, "bot");

  }

  setTimeout(() => refresh(), 5000);
};

const refresh = () => {
  location.reload();
}

function myPlay(pip) {
  audio = pip;
  audio.play();
}



setTimeout(greetUser, 1000);
// Eventlisteners goes here 👇
form.addEventListener("submit", handleInput);
greenTea.addEventListener("click", () => handleFoodChoice("Green Tea"));
blackTea.addEventListener("click", () => handleFoodChoice("Black Tea"));
milkTea.addEventListener("click", () => handleFoodChoice("Milk Tea"));
cream.addEventListener("click", () => handleToppingChoice("Cream"));
jelly.addEventListener("click", () => handleToppingChoice("Jelly"));
boba.addEventListener("click", () => handleToppingChoice("Boba"));
none.addEventListener("click", () => handleToppingChoice("no topping"));
yes.addEventListener("click", () => confirm("Yes"));
no.addEventListener("click", () => confirm("No"));