"use strict";

import questions from "./questions";
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

let currentQuestionIndex = 0;

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

const validateType = (type) => {
  if (type === "Modern") {
    artistArr = ["Pablo Picasso", "Marcel Duchamp", "Marc Chagall"];
    artMuseumArr = [
      "Berggruen Museum",
      "Musée d’Art moderne de Paris",
      "Marc Chagall National Museum",
    ];
  } else if (type === "Impressionism") {
    artistArr = ["Claude Monet", "Édouard Manet", "Gustave Caillebotte"];
    artMuseumArr = [
      "Fondation Monet in Giverny",
      "Musées d'Orsay et de l'Orangerie",
      "Musée d'Orsay",
    ];
  } else if (type === "Pop") {
    artistArr = ["Yayoi Kusama", "Andy Warhol", "Dmitri Vrubel"];
    artMuseumArr = ["Louisiana Museum of Modern Art", "TATE", "the Berlin Wall"];
  }
};

const validateMuseum = (artist) => {
  switch (artist) {
    // Modern artist
    case "Pablo Picasso":
      artMuseum = artMuseumArr[0];
      break;
    case "Marcel Duchamp":
      artMuseum = artMuseumArr[1];
      break;
    case "Marc Chagall":
      artMuseum = artMuseumArr[2];
      break;
    // Impressionism artists
    case "Claude Monet":
      artMuseum = artMuseumArr[0];
      break;
    case "Édouard Manet":
      artMuseum = artMuseumArr[1];
      break;
    case "Gustave Caillebotte":
      artMuseum = artMuseumArr[2];
      break;
    // Pop artists
    case "Yayoi Kusama":
      artMuseum = artMuseumArr[0];
      break;
    case "Andy Warhol":
      artMuseum = artMuseumArr[1];
      break;
    case "Dmitri Vrubel":
      artMuseum = artMuseumArr[2];
      break;
  }
  return artMuseum;
};

function displayQuestion(index) {
  let nextHtml;

  console.log(questionObject.message);

  if (questionObject.option === "button") {
    if (!questionObject.choice.inNested) {
      nextHtml =
        ` <div class="ask-container">` +
        ` ${questionObject.choice.map(
          (el, i) => ` <button id=${questionObject.id[i]}>${el}</button>`
        )}` +
        `</div>`;
    } else {
      // nextHtml =
      // ` <div class="ask-container">` +
      // ` ${questionObject.choice.map(
      //   (el, i) => ` <button id=${questionObject.id[i]}>${el}</button>`
      // )}` +
      // `</div>`
    }
  } else if (questionObject.option === "select") {
    nextHtml = `  <select id="select">
        <option default>Select an Artist</option>
        <option id="artist1">${artistArr[0]}</option>
        <option id="artist2">${artistArr[1]}</option>
        <option id="artist3">${artistArr[2]}</option>
        </select>`;
  }

  form.innerHTML = `${nextHtml}`;
  inputWrapper.appendChild(form);
}

function displayFinalMessage(yesOrNo) {
  if (yesOrNo === "yes") {
    showMessage("Have a good time at the museum!🥳💫", bot);
    inputWrapper.innerHTML = "";
  } else {
    showMessage("No problem. Have a good day 👋", bot);
    inputWrapper.innerHTML = "";
  }
}

function askNextQuestion(index) {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    displayFinalMessage(yesOrNo);
  }

  function showUserInput(message) {
    showMessage(message, 500, "user");
  }

  function showBotInput(message) {
    showMessage(message, 1000, "bot");
  }

  function checkArtType(event, eventId) {
    event.preventDefault();
    validateType(eventId);
  }

  function checkAge(event, eventId) {
    event.preventDefault();
    age = eventId;
  }

  function checkInput(e, eventHandler) {
    let userInput;
    if (questionObject.option === "select") {
      userInput = e.target.value;
      showUserInput(userInput);
    } else if (questionObject.option === "input") {
      uerInput = input.value;
      showUserInput(userInput);
    } else if (questionObject.option === "button") {
      const buttons = document.querySelectorAll("button");
      buttons.forEach((el, i) => {
        el.addEventListener("click", (event) => {
          const eventId = questionObject.id[i];
          eventHandler(event, eventId);
          userInput = event.target.value;
        });
      });
      showUserInput(userInput);
    }
  }
}
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

setTimeout(greetUser, 1000);

// first step // send user name
sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //   clickSound(event);
  userName = input.value;
  setTimeout(showMessage, 400, userName, user);
  form.remove();

  questions.map((el, i) => {
    askNextQuestion(el, i);
  });
});

askNextQuestion(currentQuestionIndex);
