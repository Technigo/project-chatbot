// Global variables
let userName = "";
let mainFoodChoice = "";
let foodSubtype = "";
let partySize = "10";
let orderValue;
let onePizzaPrice = 15;
let oneSaladPrice = 18;
let onePastaPrice = 12;
let confirmPrice = "";

// ------------------------------------------------
// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper"); // Select the input wrapper

// NAME
const nameButton = document.querySelector("button[class='send-btn']"); // Select the submit button
const nameInput = document.getElementById("name-input"); // Select the name input
const nameForm = document.getElementById("name-form");

// FOOD
const pizzaButton = document.createElement("button");
const pastaButton = document.createElement("button");
const saladButton = document.createElement("button");
const foodDiv = document.createElement("div");

//subtypeFood
const subtypeDiv = document.createElement("div");

// PIZZA
const italianButton = document.createElement("button");
const hawaiiButton = document.createElement("button");
const veganButton = document.createElement("button");

// PASTA
const carbonaraButton = document.createElement("button");
const bolognaiseButton = document.createElement("button");
const lasagneButton = document.createElement("button");

// SALAD
const caesarButton = document.createElement("button");
const capreseButton = document.createElement("button");
const greekButton = document.createElement("button");
// Party
const partyLabel = document.createElement("label");
const partyInput = document.createElement("input");
const partyButton = document.createElement("button");
const partyForm = document.createElement("form");

//user confirm
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
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

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", "bot");
};

// function to save name and send to showMessage, and move on
const submitName = event => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(userName, "user");
  setTimeout(() => chooseFood(), 1000); // Go to next step, chooseFood
};

// function to ask for food choice and send to displayFood
const chooseFood = () => {
  showMessage(
    `What kind of food would you like us to serve, ${userName}?`,
    "bot"
  );
  displayFood();
};

// Function to show food choices
const displayFood = () => {
  // Display buttons
  pizzaButton.textContent = "Pizza"; // Adds text in button
  pastaButton.textContent = "Pasta";
  saladButton.textContent = "Salad";

  foodDiv.append(pizzaButton, pastaButton, saladButton); // Places buttons in foodDiv
  inputWrapper.replaceChild(foodDiv, nameForm); // Replaces the nameForm with the new foodDiv
};

// IF PIZZA
const selectPizza = () => {
  mainFoodChoice = "Pizza";
  showMessage(`${mainFoodChoice}`, "user");
  setTimeout(() => {
    showMessage(`Ok! What kind of ${mainFoodChoice}?`, "bot");
    displayPizzaSubtypes(); // Go to next step
  }, 1000);
};

const displayPizzaSubtypes = () => {
  // Display buttons
  italianButton.textContent = "Italian Pizza";
  hawaiiButton.textContent = "Hawaii Pizza";
  veganButton.textContent = "Vegan Pizza";

  subtypeDiv.append(italianButton, hawaiiButton, veganButton);
  inputWrapper.replaceChild(subtypeDiv, foodDiv);
};

// IF PASTA
const selectPasta = () => {
  mainFoodChoice = "Pasta";
  showMessage(`${mainFoodChoice}`, "user");
  setTimeout(() => {
    showMessage(`Ok! What kind of ${mainFoodChoice}?`, "bot");
    displayPastaSubtypes(); // Go to next step
  }, 1000);
};
const displayPastaSubtypes = () => {
  // Display buttons
  carbonaraButton.textContent = "Pasta Carbonara";
  bolognaiseButton.textContent = "Spaghetti Bolognaise";
  lasagneButton.textContent = "Vegetarian Lasagne";

  subtypeDiv.append(carbonaraButton, bolognaiseButton, lasagneButton);
  inputWrapper.replaceChild(subtypeDiv, foodDiv);
  console.log("Showing pasta buttons");
};
// IF SALAD
const selectSalad = () => {
  mainFoodChoice = "Salad";
  showMessage(`${mainFoodChoice}`, "user");
  setTimeout(() => {
    showMessage(`Ok! What kind of ${mainFoodChoice}?`, "bot");
    displaySaladSubtypes(); // Go to next step
  }, 1000);
};

// displaySaladSubtypes
const displaySaladSubtypes = () => {
  caesarButton.textContent = "Caesar Salad";
  capreseButton.textContent = "Caprese Salad";
  greekButton.textContent = "Greek Salad";

  subtypeDiv.append(caesarButton, capreseButton, greekButton);
  inputWrapper.replaceChild(subtypeDiv, foodDiv);
};

// save Subtype and send to showMessage, and move on
const submitSubtype = subtype => {
  foodSubtype = subtype;
  showMessage(foodSubtype, "user");
  setTimeout(() => {
    showMessage(`Good choice! Our ${foodSubtype} is sublime.`, "bot");
  }, 1000);
  selectParty(); // Go to next step
};

// Get party size to calculate prize
const selectParty = () => {
  setTimeout(() => {
    showMessage(`How many people are in your party? 🥳`, "bot");
    displayPartyInput(); // Go to next step
  }, 1000);
};

const displayPartyInput = () => {
  // Display buttons
  partyInput.type = "range";
  partyInput.id = "party-input";
  partyInput.value = "10";
  partyInput.max = "50";
  partyInput.min = "1";
  partyLabel.textContent = `Party size: ${partySize}`;
  partyLabel.htmlFor = "party-input";
  partyButton.type = "submit";
  partyButton.textContent = "Send";

  partyForm.append(partyLabel, partyInput, partyButton);
  inputWrapper.replaceChild(partyForm, subtypeDiv);
};

const submitPartysize = event => {
  event.preventDefault();
  showMessage(partySize, "user");
  calculateOrderValue();
};

const calculateOrderValue = () => {
  inputWrapper.removeChild(partyForm);
  if (mainFoodChoice === "Pizza") {
    orderValue = partySize * onePizzaPrice;
  } else if (mainFoodChoice === "Pasta") {
    orderValue = partySize * onePastaPrice;
  } else {
    orderValue = partySize * oneSaladPrice;
  }
  showMessage(
    `You have ordered ${partySize} ${foodSubtype}, here is your bill: ${orderValue} €. Is that ok?`,
    "bot"
  );
  setTimeout(userConfirm, 1000);
};

const userConfirm = () => {
  inputWrapper.innerHTML = `<div id="button-form">
    <button id="yes" type="Submit">Yes</button>
    <button id="no" type="Submib">No</button>
  </div>`;

  document.getElementById("yes").addEventListener("click", () => {
    confirmPrice = "Yes";
    showMessage(`Yes`, "user");
    showMessage(`Great! Your food is on the way!`, "bot");
    inputWrapper.innerHTML = "";
  });

  document.getElementById("no").addEventListener("click", () => {
    confirmPrice = "No";
    showMessage(`No`, "user");
    showMessage(`Oh I am sorry for that! Let's see you again!`, "bot");
    inputWrapper.innerHTML = "";
  });
  setTimeout(restartChat, 7000);
};

// Reload the chat
const restartChat = () => {
  location.reload();
};

// ------------------------------------------------
// Eventlisteners goes here 👇
setTimeout(greetUser, 1000);

// Name
nameButton.addEventListener("click", submitName); // Event listener for submit button in form

// Food
pizzaButton.addEventListener("click", selectPizza); //
pastaButton.addEventListener("click", selectPasta); //
saladButton.addEventListener("click", selectSalad); //

// Pizza
italianButton.addEventListener("click", () =>
  submitSubtype(italianButton.textContent)
); //
hawaiiButton.addEventListener("click", () =>
  submitSubtype(hawaiiButton.textContent)
); //
veganButton.addEventListener("click", () =>
  submitSubtype(veganButton.textContent)
); //

// Pasta
carbonaraButton.addEventListener("click", () =>
  submitSubtype(carbonaraButton.textContent)
); //
bolognaiseButton.addEventListener("click", () =>
  submitSubtype(bolognaiseButton.textContent)
); //
lasagneButton.addEventListener("click", () =>
  submitSubtype(lasagneButton.textContent)
); //

// Salad
caesarButton.addEventListener("click", () =>
  submitSubtype(caesarButton.textContent)
);
capreseButton.addEventListener("click", () =>
  submitSubtype(capreseButton.textContent)
);
greekButton.addEventListener("click", () =>
  submitSubtype(capreseButton.textContent)
);

// Party
partyInput.addEventListener("input", () => {
  partySize = partyInput.value; // Update variable partySize
  partyLabel.textContent = `Party size: ${partySize}`; // Update input label
});
partyButton.addEventListener("click", submitPartysize);
