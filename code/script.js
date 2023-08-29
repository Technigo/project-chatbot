// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const userInput = document.getElementById("name-input");
const sendChatBtn = document.getElementById("send-btn");
// const pizzaBtn = document.getElementById("pizzaBtn");
// const pastaBtn = document.getElementById("pastaBtb");
// const saladBtn = document.getElementById("saladBtn");
const chatSection = document.getElementById("input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:

let hasAskedForName = false;
let userName = "";
let foodType = "";
let orderMode = false;
let portionSize = "";
let dishToOrder = "";
const childPortionPrice = "€12";
const adultPortionPrice = "€15";

// Declare your functions after this comment

const sendMessage = (event) => {
  //Prevents chat from defaulting when message is sent
  event.preventDefault();

  const userMessage = userInput.value.trim();

  if (userMessage !== "") {
    showMessage(userMessage, "user");
    if (!hasAskedForName) {
      messageResponse(userMessage, "user");
    } else {
      messageResponse(userMessage);
    }
    userInput.value = "";
  }

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
    chat.appendChild(messageDiv);
    // chat.innerHTML += `
    //   <section class="user-msg">
    //     <div class="bubble user-bubble">
    //       <p>${message}</p>
    //     </div>
    //     <img src="assets/user.png" alt="User" />
    //   </section>
    // `;
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

    // chat.innerHTML += `
    //   <section class="bot-msg">
    //     <img src="assets/bot.png" alt="Bot" />
    //     <div class="bubble bot-bubble">
    //       <p>${message}</p>
    //     </div>
    //   </section>
    // `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
// const greetUser = () => {
//   // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
//   showMessage("Hello there, what is your name?", "bot");
//   // Just to check it out, change 'bot' to 'user' here 👆
// };

const foodOrder = () => {
  orderMode = true;
  chatSection.innerHTML = `
  <button id="pizzaBtn">Pizza</button>
    <button id="pastaBtn">Pasta</button>
    <button id="saladBtn">Salad</button>`;
  showMessage(
    `What type of food would you like to order?
  We have pizza, pasta and salads.`,
    "bot"
  );
  document.getElementById("pizzaBtn").addEventListener("click", () => {
    foodType = "pizza";
    console.log(foodType);
    subMenu(foodType);
  });
  document.getElementById("pastaBtn").addEventListener("click", () => {
    foodType = "pasta";
    console.log(foodType);
    subMenu(foodType);
  });
  document.getElementById("saladBtn").addEventListener("click", () => {
    foodType = "salad";
    console.log(foodType);
    subMenu(foodType);
  });
};

const subMenu = (foodCategory) => {
  showMessage(
    `Some ${foodCategory}, eh? Excellent choice. Now select the type of ${foodCategory} that you want!`,
    "bot"
  );
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

  const select = document.getElementById("select");
  select.addEventListener("change", () => {
    dishToOrder = select.value;
    dishSize(dishToOrder);
  });
};

const dishSize = (dish) => {
  showMessage(
    `One ${dish}, got it! Will the order be for a child or an adult?`,
    "bot"
  );

  chatSection.innerHTML = `
  <button id="child">Child-size 🧒🏽</button>
    <button id="adult">Adult-size 👨🏽‍🦳</button>
  `;

  document.getElementById("child").addEventListener("click", () => {
    portionSize = "child";
    orderConfirmation();
  });
  document.getElementById("adult").addEventListener("click", () => {
    portionSize = "adult";
    orderConfirmation();
  });
};

const orderConfirmation = () => {
  let orderCost =
    portionSize === "child" ? childPortionPrice : adultPortionPrice;
  showMessage(
    `One ${portionSize} sized ${dishToOrder} will be prepared for you. That will be ${orderCost}. Is this what you want to order?`,
    "bot"
  );
  chatSection.innerHTML = `
  <button id="confirm">Yes</button>
    <button id="reset">No</button>
  `;

  document.getElementById("reset").addEventListener("click", () => {
    location.reload();
    return false;
  });
  document.getElementById("confirm").addEventListener("click", () => {
    showMessage(`Wonderful! Your order will be ready in 10-15 minutes!`, "bot");
    chatSection.innerHTML = ``;
  });
};

const messageResponse = (message) => {
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
  }, 500);
};

const botMessageSound = () => {
  const botSound = document.getElementById("botSound");
  botSound.play();
};

// Set up your eventlisteners here
sendChatBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

//setTimeout(greetUser, 500);

showMessage("Hello there, what is your name?", "bot");
