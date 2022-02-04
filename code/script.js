// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const form = document.getElementById("name-form");

// const sendBtn = document.getElementById("send-btn")
const audio = new Audio("drill.mp3");

// Global variables, if you need any, declared here
let questionStep = 1;

// This variabels shows in the last messages
let name = "";
let type = "";
let service = "";

// Functions declared here

// Function to display the message on the screen both for bot and user
const botAnswer = (inputMessage) => {
  showMessage(inputMessage, "bot");
};
const userAnswer = (inputMessage) => {
  showMessage(inputMessage, "user");
};

// Question flow functions
const handleInput = (message) => {
  if (questionStep === 2) {
    userAnswer(message);
    setTimeout(() => moreServices(message), 2000);
  } else if (questionStep === 3) {
    userAnswer(message);
    setTimeout(() => priceInformation(message), 1000);
  } else {
    userAnswer(message);
    setTimeout(goodBye, 1000);
  }
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
    console.log("This works");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.gif" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // Audio

  audio.currentTime = 0;
  audio.play();

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Bot welcome message
const greeting = () => {
  showMessage(`Hello my name is Botty McBot, What's your name?`, "bot");
};

// This will display the first answer (user name)
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  userAnswer(`${name}`);
  // This will keep the input box empty after user clicks send
  
  nameInput.value = "";
  setTimeout(() => serviceOptions(name), 1000);

});

// 2nd Bot message
const serviceOptions = (name) => {
  questionStep++;
  botAnswer(`Hi ${name} 👋 What can we help you with today?`);
  inputWrapper.innerHTML = `
    <button id="plumbingButton"> Plumbing 🔧 </button>
    <button id="electricalButton"> Electrical Work 🔌 </button>
    <button id="paintingButton"> Painting 🖌️ </button>
    `;
  document.getElementById("plumbingButton").addEventListener("click", () => {
    type = "plumbing";
    handleInput("plumbing");
  });
  document.getElementById("electricalButton").addEventListener("click", () => {
    type = "electrical";
    handleInput("electrical");
  });
  document.getElementById("paintingButton").addEventListener("click", () => {
    type = "painting";
    handleInput("painting");
  });
};

//3rd Bot message
const moreServices = (type) => {
  questionStep++;
  botAnswer(
    `So you need help with ${type}. Which type of ${type} service will you require?`
  );

  // Here we added a conditional statement for specific service options depending on the category.
  if (type === "plumbingButton" || "electricalButton") {
    inputWrapper.innerHTML = `
  <select id = 'select'>
  <option value='' selected disabled> Choose service </option>
  <option value='installation'>Installation</option>
  <option value='maintenece'>Maintenece</option>
  <option value='repair'>Repair</option>
  <option value='emergency repair'>Emergency Repair</option>`;
  } else {
    inputWrapper.innerHTML = `
  <select id = 'select'>
  <option value='' selected disabled> Choose service </option>
  <option value='interior painting'>Interrior Painting</option>
  <option value='exterior painting'>Exterior Painting</option>
  <option value='wall resurfacing'>Wall Resurfacing</option>
  </select> `;
  }
  const select = document.getElementById("select");
  select.addEventListener("change", () => handleInput(select.value));
};

//4th Bot message
const priceInformation = (service) => {
  questionStep++;
  if (service === "emergency repair") {
    botAnswer(`Perfect! Our starting price for ${service} is SEK 5,000.`);
  } else {
    botAnswer(`Perfect! Our starting price for ${service} is SEK 3,000.`);
  }
  

  inputWrapper.innerHTML = `
<button id="bookButton">I want to book</button>
`;
  document
    .getElementById("bookButton")
    .addEventListener("click", () => handleInput("I want to book"));
};

// 5 th bot message
function goodBye () {
  botAnswer(
    `Thank you for booking ${type} with us, some will contact you soon. `
  );
  botAnswer(`Have a lovley day! ${name}`);
  // Below clears the option to click book after once selected.
  inputWrapper.innerHTML = ``;
}
//This function will be called one second after the website is loaded.
setTimeout(greeting, 1200);
