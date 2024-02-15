// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const userName = document.getElementById("name-input");
const sendBtn = document.getElementById("send-btn");
const inputField = document.getElementById("input-wrapper");
const menu = {
  food: ["Pizza", "Pasta", "Salad"],
  pizza: ["Margherita Pizza", "Pepperoni Pizza", "Veggie Pizza"],
  pasta: ["Spaghetti Bolognaise", "Lasagne", "Fettuccine Alfredo"],
  salad: ["Caesar salad", "Greek salad", "Caprese salad"],
};
const priceList = {
  adult: "99kr",
  child: "79kr"
}

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is.
const processUserOption = (message, functionName) => {
  showMessage(message, "user");
  inputField.innerHTML = "";
  showMessage(`<div class="loader" id="loader">
  <span></span>
  <span></span>
  <span></span>
  </div>`, "bot")
  setTimeout(()=>{
    chat.lastElementChild.remove();
    functionName(message);}, 1000)
}


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
setTimeout(greetUser, 500);

const showOrderStatus = (confirmation) => {
  if (confirmation === "yes"){
    showMessage("Thank you for your order! See you soon.", "bot");
  }else {
    showMessage("Your order is cancelled. Come back anytime!", "bot");
  }
};

const checkPrice = (age) => {
  showMessage(
    `One ${age} sized dish will be prepared for you. That'll be${priceList[age]}. Are you sure you want to order this?`,
    "bot"
  );
  inputField.innerHTML = `
  <button id="yes" value="yes">Yes</button>
  <button id="no" value="no">No</button>
  `;
  document.getElementById("yes").addEventListener("click", () => {
    processUserOption("yes", showOrderStatus);
  });
  
  document.getElementById("no").addEventListener("click", () => {
    processUserOption("no", showOrderStatus);
  });
};

const checkAge = (type) => {
  showMessage(`One ${type} coming up! Will that be for an adult or a child?`,
  "bot")
  inputField.innerHTML = `
  <button id="adult">Adult</button>
  <button id="child">Child</button>
`;
  document.getElementById("adult").addEventListener("click", () => {
    processUserOption("adult", checkPrice)
  });
  document.getElementById("child").addEventListener("click", () => {
    processUserOption("child", checkPrice)
  });
};

//TODO: set a param so it accepts the input of food option then 
const showSubtypes = (type) => {
  showMessage(
    `Oh so you're in the mood for ${type}? Great choice. Select something from the menu!`, "bot")
  inputField.innerHTML = `<form>
  <select id='subtype' class='select-bar'required>
  <option id='select' selected disabled>Select a ${type}:</option>
  <option value='${menu[type][0]}'>${menu[type][0]}</option>
  <option value='${menu[type][1]}' >${menu[type][1]}</option>
  <option value='${menu[type][2]}'>${menu[type][2]}</option>
  </select></form>`;

  document.getElementById("subtype").addEventListener("change", (event) => {
    console.log(event.target.value)
    const subtype = event.target.value;
    processUserOption(subtype, checkAge);
  });
};

const showFoodOptions = (name) => {
  showMessage(
    `Hello ${name}! What types of food would you like to order?`,
    "bot"
  );
  inputField.innerHTML = `
  <button value="pizza">Pizza</button>
  <button value="pasta">Pasta</button>
  <button value="salad">Salad</button>
`;

  const allBtns = document.getElementsByTagName("button");
  for (btn of allBtns) {
    btn.addEventListener("click", (event) => {
      console.log(event.target.value)
      const foodOption = event.target.value;
      processUserOption(foodOption, showSubtypes);
    });
  };
}


  //TODO: Replace the string with the button value as a placeholder 


const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = userName.value;
  processUserOption(name, showFoodOptions);
};

// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.
// setTimeout(() => showFoodOptions(name), 1000);

sendBtn.addEventListener("click", handleNameInput);
