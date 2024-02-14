// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");
const sendBtn = document.getElementsByClassName("send-btn");

// Global variables
let userName = "";
let foodChoice = "";
let selectedDish = "";
let dishSize = "";
let price = "";

// Functions goes here 👇
// This function inserts the food option buttons into the html
const addFoodButtons = () => {
  inputWrapper.innerHTML = `
    <button class="send-btn" id="pizza">Pizza</button>
    <button class="send-btn" id="pasta">Pasta</button>
    <button class="send-btn" id="salad">Salad</button>`;
};

// This function insterts the <select> menus into the html
// Which menu depends on which food option was chosen
const addDishMenu = () => {
  switch (foodChoice) {
    case "pizza":
      inputWrapper.innerHTML = `
      <form id="dish-form">
        <select class="curtain" id="pizza-select">
          <option value="choose" selected disabled>--Please choose a pizza--</option>
          <option value="margherita">Margherita</option>
          <option value="vesuvius">Vesuvius</option>
          <option value="kebab">Kebab</option>
        </select> 
        <button class="send-btn" id="send-btn" type="submit">Confirm</button>
      </form>`;
      break;
    case "pasta":
      inputWrapper.innerHTML = `
      <form id="dish-form">
        <select class="curtain" id="pasta-select">
          <option value="choose" selected disabled>--Please choose a pasta dish--</option>
          <option value="carbonara">Carbonara</option>
          <option value="spaghetti bolognese">Spaghetti Bolognese</option>
          <option value="frutti di mare">Frutti di Mare</option>
        </select> 
        <button class="send-btn" id="send-btn" type="submit">Confirm</button>
      </form>`;
      break;
    case "salad":
      inputWrapper.innerHTML = `
      <form id="dish-form">
        <select class="curtain" id="salad-select">
          <option value="choose" selected disabled>--Please choose a salad--</option>
          <option value="caesar salad">Caesar Salad</option>
          <option value="tabbouleh">Tabbouleh</option>
          <option value="salad caprese">Salad Caprese</option>
        </select> 
        <button class="send-btn" id="send-btn" type="submit">Confirm</button>
      </form>`;
      break;
  }
};

// Same as above, but with if instead of switch
/*if (foodChoice === "pizza") {
    inputWrapper.innerHTML = `
    <form id="dish-form">
      <select class="curtain" id="pizza-select">
        <option value="choose" selected disabled>--Please choose a pizza--</option>
        <option value="margherita">Margherita</option>
        <option value="vesuvius">Vesuvius</option>
        <option value="kebab">Kebab</option>
      </select> 
      <button class="send-btn" id="send-btn" type="submit">Confirm</button>
     </form>
  `;
  } else if (foodChoice === "pasta") {
    inputWrapper.innerHTML = `
    <form id="dish-form">
      <select class="curtain" id="pasta-select">
        <option value="choose" selected disabled>--Please choose a pasta dish--</option>
        <option value="carbonara">Carbonara</option>
        <option value="spaghetti bolognese">Spaghetti Bolognese</option>
        <option value="frutti di mare">Frutti di Mare</option>
      </select> 
      <button class="send-btn" id="send-btn" type="submit">Confirm</button>
    </form>
  `;
  } else if (foodChoice === "salad") {
    inputWrapper.innerHTML = `
    <form id="dish-form">
      <select class="curtain" id="salad-select">
        <option value="choose" selected disabled>--Please choose a salad--</option>
        <option value="caesar salad">Caesar Salad</option>
        <option value="tabbouleh">Tabbouleh</option>
        <option value="salad caprese">Salad Caprese</option>
      </select> 
      <button class="send-btn" id="send-btn" type="submit">Confirm</button>
    </form>
  `;
  }*/

// This function  inserts the portion size option buttons into the html
const addSizeButtons = () => {
  inputWrapper.innerHTML = `
    <button class="send-btn" id="Small">Small</button>
    <button class="send-btn" id="Large">Large</button>`;
};

// This function gives us the name of the user
const handleNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  // Check if the user has entered a name before moving on
  if (userName) {
    showMessage(userName, "user");
    setTimeout(chooseFood, 1000);
  } else {
    showMessage("I'm not sure that's a name. Please try again.", "bot");
  }
};

// The user is asked to choose between different food types by clicking buttons
const chooseFood = () => {
  showMessage(
    `Hello ${userName}! What would you like to eat today? Make your choice:`,
    "bot"
  );
  // Food choice buttons are added to the html
  addFoodButtons();
  // Depending on which button is clicked, the id of the clicked button is added to the foodChoice variable
  const foodButton = document.querySelectorAll(".send-btn");
  console.log(foodButton);
  foodButton.forEach((foodButton) => {
    foodButton.addEventListener("click", (event) => {
      foodChoice = event.target.id;
      console.log(foodChoice);
      showMessage(`I'd like ${foodChoice}, please.`, "user");
      // We then move on to choosing a dish
      setTimeout(chooseDish, 1000);
    });
  });
};

// The user is asked to choose a dish within the selected foodChoice category by using a <select> menu
const chooseDish = () => {
  showMessage(
    `You've chosen ${foodChoice}, a great choice! Please chose what type of ${foodChoice} you'd like.`,
    "bot"
  );
  // The <select> menu is added to the html
  addDishMenu();
  // By changing the option in the <select> menu, the text within the option is added to the selectedDish variable
  const dishMenu = document.querySelectorAll(".curtain");
  dishMenu.forEach((dishMenu) => {
    dishMenu.addEventListener("change", () => {
      selectedDish = dishMenu.options[dishMenu.selectedIndex].text;
      console.log(selectedDish);
    });
  });
  // By pressing the Confirm button, the selectedDish is confirmed
  const dishForm = document.getElementById("dish-form");
  dishForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Check if the user has selected a dish before moving on
    if (selectedDish) {
      showMessage(`I'd like ${selectedDish}, please.`, "user");
      setTimeout(foodSize, 1000);
    } else {
      showMessage("Please choose a dish.", "bot");
    }
  });
};

// The user is asked to choose the portion size
const foodSize = () => {
  showMessage(
    `${selectedDish}, always an excellent choice! What size would you like?`,
    "bot"
  );
  // Portion size buttons are added into the html
  addSizeButtons();
  // Depending on which button is clicked, the id of the clicked button is added to the dishSize variable
  const sizeButton = document.querySelectorAll(".send-btn");
  console.log(sizeButton);
  sizeButton.forEach((sizeButton) => {
    sizeButton.addEventListener("click", (event) => {
      dishSize = event.target.id;
      console.log(dishSize);
      showMessage(`${dishSize}, please.`, "user");
      setTimeout(checkOut, 1000);
      switch (dishSize) {
        case "Small":
          price = 10;
          break;
        case "Large":
          price = 15;
          break;
      }
    });
  });
};

const checkOut = () => {
  showMessage(
    `One ${dishSize} ${selectedDish} will be prepared for you. That will be €${price}. 
  Are you sure you want to order this?`,
    "bot"
  );
  inputWrapper.innerHTML = `
    <button class="send-btn" id="Yes">Yes</button>
    <button class="send-btn" id="No">No</button>`;
  document.querySelector("#Yes").addEventListener("click", () => {
    showMessage("Yes", "user");
    orderConfirmation();
  });
  document.querySelector("#No").addEventListener("click", () => {
    showMessage("No", "user");
    orderConfirmation();
  });
};

const orderConfirmation = () => {
  showMessage(`Thank you! See you again!`, "bot");
  //This inputwrapper "" get rid of the buttons.
  inputWrapper.innerHTML = "";
};

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

nameForm.addEventListener("submit", handleNameInput);
