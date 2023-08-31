"use strict";

const chat = document.getElementById("chat");
const input = document.getElementById("name-input");
const sendBtn = document.querySelector(".send-btn");
const form = document.getElementById("name-form");
const startImg = document.querySelector(".start-img");
const startPage = document.querySelector(".start-page");
const main = document.querySelector(".main");
const inputWrapper = document.querySelector(".input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:
const user = "user";
const bot = "bot";

let artistArr = ["Claude Monet", "Édouard Manet", "Gustave Caillebotte"];
let artMuseum = [];
let artMuseumArr = [];

let userName = "";
let age = "";
let price = 0;
let artist = "";

const showForm = () => {
  main.style.display = "flex";
};

const questions = [
  {
    message: "Hi there! What is your name?",
    option: "input",
    next: "",
  },
  {
    message: "Which genre of art do you like the most?",
    option: "button",
    id: ["mordern", "impressionism", "pop"],
    choice: ["Mordern", "Impressionism", "Pop"],
    next: "",
  },
  {
    message: "Who is your favorite artist?",
    option: "select",
    default: "Select an artist",
    choice: [
      {
        artistArr: ["Pablo Picasso", "Marcel Duchamp", "Marc Chagall"],
        museumArr: [
          "Berggruen Museum",
          "Musée d’Art moderne de Paris",
          "Marc Chagall National Museum",
        ],
      },
      {
        artistArr: ["Claude Monet", "Édouard Manet", "Gustave Caillebotte"],
        museumArr: [
          "Fondation Monet in Giverny",
          "Musées d'Orsay et de l'Orangerie",
          "Musée d'Orsay",
        ],
      },
      {
        artistArr: ["Yayoi Kusama", "Andy Warhol", "Dmitri Vrubel"],
        museumArr: ["Louisiana Museum of Modern Art", "TATE", "the Berlin Wall"],
      },
    ],
    next: "",
  },
  {
    message: "Are you an adult or a child?,",
    option: "button",
    id: ["adult", "child"],
    class: "icon",
    choice: ["🧑", "🧒"],
    next: "",
  },
  {
    // message: `You chose ${artType} and ${artist}! I recommend ${museum}. One ${age} ticket will cost you ${cost} euro. Are you happy with this?`,
    option: "button",
    choice: ["Yes", "No"],
    next: "",
  },
];

function askNextQuestion(questionArr, index) {
  // createHTML elements for next question
  let nextHtml;

  console.log(questionArr[index].message);

  if (questionArr[index].option === "button") {
    console.log(questionArr[index].choice);
    nextHtml =
      ` <div class="ask-container">` +
      "hi"//   ` ${questionArr[index].choice.forEach((el) => ` <button>Hi</button>`)}` +
      `</div>`;
  } else if (questionArr[index].option === "select") {
    nextHtml = `  <select id="select">
      <option default>Select an Artist</option>
      <option id="artist1">${artistArr[0]}</option>
      <option id="artist2">${artistArr[1]}</option>
      <option id="artist3">${artistArr[2]}</option>
      </select>`;
  }

  form.innerHTML = `${nextHtml}`;
  inputWrapper.appendChild(form);
  //   -----------------------------------
  //   do some validation

  //     const buttonId=document.getElementById(id)
  //     buttonId.addEventListener("click", (event) => {
  //       event.preventDefault;
  //       nextFunction(event);
  //     });
  //     num++;
}

askNextQuestion(questions, 1);

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === user) {
    chat.innerHTML += `
        <section class="user-msg">
          <div class="bubble user-bubble">
            <p>${message}</p>
          </div>
          <img src="assets/user.png" alt=user />  
        </section>
      `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === bot) {
    chat.innerHTML += `
        <section class="bot-msg">
          <img src="assets/bot.png" alt=bot />
          <div class="bubble bot-bubble">
            <p>${message}</p>
          </div>
        </section>
      `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument bot for sender
  showMessage("Hello there, What's your name?", bot);
  // Just to check it out, change 'bot' to 'user' here 👆
};

// Set up your eventlisteners here
////////////////////////////////////////////////////////////////////////////////////////////////////////
// click to go to a form page

startImg.addEventListener("click", (event) => {
  event.preventDefault();
  clickSound(event);
  startPage.remove();
  setTimeout(showForm, 200);
});

// first step // send user name
sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clickSound(event);
  userName = input.value;
  setTimeout(showMessage, 400, userName, user);
  form.remove();
  setTimeout(
    showMessage,
    1200,
    `Nice to meet you ${userName}. Which genre of art do you like the most?`,
    bot
  );
  setTimeout(createBtns, 1000);
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
