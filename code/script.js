// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const userInput = document.getElementById("name-input");
const sendChatBtn = document.querySelector(".send-btn");
const chatSection = document.getElementById("input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:

//A variable that checks if the bot has asked for the user's name
let hasAskedForName = false;
//A variable that saves the user's name
let userName = "";
//A variable that saves the type of food that the user wants to order
let foodType = "";
//A variable that saves the order size
let portionSize = "";
//A variable that saves the actual dish the user wants to order
let dishToOrder = "";
//Pricing for the dish sizes
const childPortionPrice = "€12";
const adultPortionPrice = "€15";

// Declare your functions after this comment

//A function that handles the messages sent by the user
const sendMessage = (event) => {
  //Prevents chat from defaulting when message is sent
  event.preventDefault();

  //A variable that takes the message the user has written and removes whitespace from both ends
  const userMessage = userInput.value.trim();

  //Check to see if the user has typed anything before it is sent
  if (userMessage !== "") {
    showMessage(userMessage, "user");
    //Checks to see if the user's name has been asked and asks for it if it hasn't. Otherwise sends messages as normal
    if (!hasAskedForName) {
      messageResponse(userMessage, "user");
    } else {
      messageResponse(userMessage);
    }
    //Empties the chat input after a message has been sent
    userInput.value = "";
  }

  //Changes the Name tag to message after the user has sent their first message, which should be their name.
  let nameTag = document.getElementById("name-label");
  nameTag.innerHTML = "Message";
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  //Creates an element that will be displayed in the chat
  const messageDiv = document.createElement("div");
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    messageDiv.innerHTML = `<section class="user-msg">
    <div class="bubble user-bubble">
      <p>${message}</p>
    </div>
    <img src="assets/user.png" alt="User" />  
  </section>
`;
    //The div is appended, or added, to the chat and displayed as a new message
    chat.appendChild(messageDiv);

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    messageDiv.innerHTML = `
    <section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble user-bubble">
      <p>${message}</p>
    </div>
  </section>
`;
    chat.appendChild(messageDiv);
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

//A function that manages the  scripted interactions and replies of the bot
const messageResponse = (message) => {
  //the default message of the bot when a user message contains none of the words or phrases below
  let botResponse = "Remember; I'm just a simple bot, not a protocol droid.";

  if (!hasAskedForName) {
    userName = message;
    botResponse = `Nice to meet you, ${userName}! My name is Anna the bot. Do you know who I am?`;
    hasAskedForName = true;
  } else if (message.toLowerCase().includes("hello")) {
    botResponse = `Hello again, ${userName}! How can I assist you today?`;
  } else if (message.toLowerCase().includes("protocol droid")) {
    botResponse = "A protocol droid, yes. You know, like C3PO from Star Wars?";
  } else if (message.toLowerCase().includes("how are you?")) {
    botResponse = "Thanks for asking! I'm good, but I'm still a bot.";
  } else if (message.toLowerCase().includes("hello")) {
    botResponse = "Welcome, my name is Anna the bot. Do you know who I am?";
  } else if (
    message.toLowerCase().includes("who are you?") ||
    message.toLowerCase().includes("no")
  ) {
    botResponse =
      'Let me educate you. Watch this <a href="https://www.youtube.com/watch?v=1XK5-n4rR7Q" target="_blank">video</a>';
  }

  setTimeout(() => {
    showMessage(botResponse, "bot");
    botMessageSound();
  }, 1000);
};

//A function that plays a sound every time the bot sends a message in "chat-mode"
const botMessageSound = () => {
  const botSound = document.getElementById("botSound");
  botSound.play();
};

// Starts here

//A function that manipulates the input-wrapper/chatSection to accommodate "order mode"
const foodOrder = () => {
  //Adds three buttons for the user to choose between pizza, pasta and salad
  chatSection.innerHTML = `
  <button id="pizzaBtn">Pizza</button>
    <button id="pastaBtn">Pasta</button>
    <button id="saladBtn">Salad</button>`;
  showMessage(
    `What type of food would you like to order?
  We have pizza, pasta and salads.`,
    "bot"
  );
  botMessageSound();
  //Eventlisteners that keep track of the user's choice of food and then launch another function based on that choice
  document.getElementById("pizzaBtn").addEventListener("click", () => {
    foodType = "pizza";
    subMenu(foodType);
  });
  document.getElementById("pastaBtn").addEventListener("click", () => {
    foodType = "pasta";
    subMenu(foodType);
  });
  document.getElementById("saladBtn").addEventListener("click", () => {
    foodType = "salad";
    subMenu(foodType);
  });
};

//A function that offers the user a choice of dish instead of just category
const subMenu = (foodCategory) => {
  //A message is sent from the bot to confirm the food category chosen by the user
  showMessage(
    `Some ${foodCategory}, eh? Excellent choice. Now select the type of ${foodCategory} that you want!`,
    "bot"
  );
  botMessageSound();

  //A different select-menu is displayed depending on what category of food the user chose in the previous step
  if (foodCategory === "pizza") {
    chatSection.innerHTML = `
    <select id="select">
        <option value="" selected disabled> Select a pizza... 🍕</option>
        <option value="Capricciosa">Capricciosa</option>
        <option value="Vesuvio">Vesuvio</option>
        <option value="Margherita">Margherita</option>
      </select>
     `;
  } else if (foodCategory === "pasta") {
    chatSection.innerHTML = `
      <select id="select">
        <option value="" selected disabled> Select a pasta... 🍝</option>
        <option value="Carbonara">Pasta Carbonara</option>
        <option value="Lasagne">Lasagne</option>
        <option value="Pasta Bolognese">Pasta Bolognese</option>
      </select>
    `;
  } else {
    chatSection.innerHTML = `
      <select id="select">
        <option value="" selected disabled> Select a salad... 🍅</option>
        <option value="Caesar Salad">Caesar Salad</option>
        <option value="Caprese Salad">Caprese Salad</option>
        <option value="Greek Salad">Greek Salad</option>
      </select>
    `;
  }

  //The dish choice value is saved in the dishToOrder variable and used to launch the dishSize function
  const select = document.getElementById("select");
  select.addEventListener("change", () => {
    dishToOrder = select.value;
    dishSize(dishToOrder);
  });
};

//A function that keeps track of the size of the dish that the user wants to order
const dishSize = (dish) => {
  //A confirmation of the dish and a query about the size of the dish is sent from the bot
  showMessage(
    `One ${dish}, got it! Will the order be for a child or an adult?`,
    "bot"
  );
  botMessageSound();

  //Two buttons representing the different dish-sizes are displayed to the user
  chatSection.innerHTML = `
  <button id="child">Child-size 🧒🏽</button>
    <button id="adult">Adult-size 👨🏽‍🦳</button>
  `;

  //Eventlisteners that register the size and the launch the order
  document.getElementById("child").addEventListener("click", () => {
    portionSize = "child";
    orderConfirmation();
  });
  document.getElementById("adult").addEventListener("click", () => {
    portionSize = "adult";
    orderConfirmation();
  });
};

//A function that summarizes and confirms the user's order
const orderConfirmation = () => {
  //A variable that determines the price of the dish depending on the size
  let orderCost =
    portionSize === "child" ? childPortionPrice : adultPortionPrice;
  //A summary of the user's choices is sent and the user is asked to confirm their order
  showMessage(
    `One ${portionSize} sized ${dishToOrder} will be prepared for you. That will be ${orderCost}. Is this what you want to order?`,
    "bot"
  );
  botMessageSound();
  chatSection.innerHTML = `
  <button id="confirm">Yes</button>
    <button id="cancel">No</button>
  `;

  //Eventlisteners that monitor user's choice and respond accordingly
  document.getElementById("confirm").addEventListener("click", () => {
    showMessage(`Wonderful! Your order will be ready in 10-15 minutes!`, "bot");
    botMessageSound();
    chatSection.innerHTML = ``;
  });
  document.getElementById("cancel").addEventListener("click", () => {
    showMessage(
      `That's alright, we'll cancel the order. Please feel free to order from us in the future!`,
      "bot"
    );
    botMessageSound();
    chatSection.innerHTML = ``;
  });
};

// Set up your eventlisteners here

//An eventlistener that initiates the sendMessage function on the input in the chat when the user clicks on the send button
sendChatBtn.addEventListener("click", sendMessage);

//An eventlistener that does essentially the same as above, but when the user presses the enter button
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

//The initial message sent in the chat
setTimeout(showMessage("Hello there, what is your name?", "bot"), 1000);
