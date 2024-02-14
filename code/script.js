// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const userName = document.getElementById("name-input");
const sendBtn = document.getElementById("send-btn");
const inputField = document.getElementById("input-wrapper");
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

const orderConfirmation = () => {
  inputField.innerHTML = `
  <button id="yes" value="yes">Yes</button>
  <button id="no" value="no">No</button>
`;
  document.getElementById("yes").addEventListener("click", () => {
    inputField.innerHTML = ""
    showMessage("yes", "user");
    setTimeout(()=>{
      showMessage("Thank you for your order! See you soon.", "bot")},
      1000
    )
  });
  document.getElementById("no").addEventListener("click", () => {
    inputField.innerHTML = ""
    showMessage("no", "user");
    setTimeout(()=>{
      showMessage("Your order is cancelled. Come back anytime!", "bot")},
      1000
    )
  });
};


const price = (age) => {
  showMessage(age, 'user')
  if (age == "adult") {
    setTimeout(() => {
      showMessage(`One ${age} sized dish will be prepared for you. That'll be 99kr. Are you sure you want to order this?`, 'bot')
      orderConfirmation()
    }, 1000)
  } else {
    setTimeout(() => {
      showMessage(`One ${age} sized dish will be prepared for you. That'll be 79kr. Are you sure you want to order this?`, 'bot')
      orderConfirmation()
    }, 1000)
  }
}

const ageCheck = (type) => {
  showMessage(type, "user");
  setTimeout(
    () =>
      showMessage(
        `One ${type} coming up! Will that be for an adult or a child?`,
        "bot"
      ),
    1000);
  inputField.innerHTML = `
  <button id="adult">Adult</button>
  <button id="child">Child</button>
`;
  document.getElementById("adult").addEventListener("click", () => {price("adult")});
  document.getElementById("child").addEventListener("click", () => {price("child")});
};

const showSubtypes = () => {
  inputField.innerHTML = `
  <form>
  <label>Select a pizza:</label>
  <select id='subtype' required>
  <option id='select' selected disabled>Select a pizza:</option>
  <option id='Margerita' value='Margerita'>Margerita</option>
  <option id='Vesuvio' value='Vesuvio' >Vesuvio</option>
  <option id='Peperoni' value='Peperoni'>Peperoni</option>
  </select>
  </form>`;
  document.getElementById("subtype").addEventListener("change", (event) => {
    const selectedtype = event.target.value;
    switch (selectedtype) {
      case "Margerita":
        setTimeout(() => ageCheck("Margerita"), 1000);
        break;
      case "Vesuvio":
        setTimeout(ageCheck, 1000);
        break;
      case "Peperoni":
        setTimeout(ageCheck, 1000);
        break;
      default:
        console.log(selectedtype);
    }
  });
};

const showFoodOptions = () => {
  inputField.innerHTML = `
  <button id="pizzaBtn">Pizza</button>
  <button id="pastaBtn">Pasta</button>
  <button id="saladBtn">Salad</button>
`;

  document.getElementById("pizzaBtn").addEventListener("click", showSubtypes);
  document.getElementById("pastaBtn").addEventListener("click", () => {});
  document.getElementById("saladBtn").addEventListener("click", () => {});
};

const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  console.log(event);
  const name = userName.value;
  showMessage(name, "user");
  userName.value = "";
  console.log(name);
  console.log(userName.value);
  setTimeout(
    () =>
      showMessage(
        `Hello ${name}! What types of food would you like to order?`,
        "bot"
      ),
    1000
  );
  setTimeout(showFoodOptions, 1000);
};

// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.
// setTimeout(() => showFoodOptions(name), 1000);

sendBtn.addEventListener("click", handleNameInput);
