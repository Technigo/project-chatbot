"use strict";

// import { questions } from "./question-two";
const chat = document.getElementById("chat");
const input = document.getElementById("name-input");
const sendBtn = document.querySelector(".send-btn");
const form = document.getElementById("name-form");

const startImg = document.querySelector(".start-img");
const startPage = document.querySelector(".start-page");
const main = document.querySelector(".main");
const inputWrapper = document.querySelector(".input-wrapper");

const bot = "bot";
const user = "user";

// If you need any global variables that you can use across different functions, declare them here:

let currentIndex = 0;

let artistArr = [];
let artMuseum = [];
let artMuseumArr = [];

let userName = "";
let age = "";
let price = 10;
let yourMuseum = "";
let favArtist = "";
let favType = "";
let yesOrNo = "";

const questions = [
  {
    message: "Which genre of art do you like the most?",
    option: "button",
    id: ["mordern", "impressionism", "pop"],
    isNested: false,
    choice: ["Modern", "Impressionism", "Pop"],
    nextHandler: function (event) {
      event.preventDefault();
      favType = event.target.id;
      console.log(favType);
      validateType(favType);
      showUserInput(favType);
      form.innerHTML = "";
      currentIndex++;
      createInputFields(questions[currentIndex].option);
    },
  },

  {
    message: "Who is your favorite artist?",
    option: "select",
    default: "Select an artist",
    isNested: true,
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
    nextHandler: function (event) {
      event.preventDefault();
      console.log(favType);
      favArtist = event.target.value;
      showUserInput(favArtist);
      validateMuseum(favArtist);
      form.innerHTML = "";
      currentIndex++;
      return createInputFields(questions[currentIndex].option);
    },
  },
  {
    message: "Are you an adult or a child?",
    option: "button",
    id: ["adult", "child"],
    class: "icon",
    choice: ["🧑", "🧒"],
    isNested: false,
    nextHandler: function (event) {
      event.preventDefault();
      age = event.target.id;
      showUserInput(age);
      price = age === "adult" ? 20 : 10;
      form.innerHTML = "";
      currentIndex++;
      console.log(age, favArtist, favType, yourMuseum);
      const confirmationMessage = questions[currentIndex].createMessage(
        favType,
        favArtist,
        yourMuseum,
        age,
        price
      );
      return createInputFields(questions[currentIndex].option, confirmationMessage);
    },
  },
  {
    createMessage: function (type, artist, museum, age, price) {
      const message = `You chose ${type} art and ${artist} as your favorite artist!/n I recommend ${museum}. One ${age} ticket will cost you ${price} euro. Are you happy with this?`;
      console.log(message);
      return message;
    },
    option: "button",
    choice: ["Yes", "No"],
    id: ["yes", "no"],
    isNested: false,
    nextHandler: function (event) {
      yesOrNo = event.target.id;
      showUserInput(yesOrNo);
      if (yesOrNo === "yes") {
        showBotInput("Have a good time at the museum!🥳💫");
        inputWrapper.innerHTML = "";
      } else {
        showBotInput("No problem. Have a good day 👋");
        inputWrapper.innerHTML = "";
      }
    },
  },
];

const showForm = () => {
  main.style.display = "flex";
};

const validateType = (type) => {
  if (type === "modern") {
    artistArr = ["Pablo Picasso", "Marcel Duchamp", "Marc Chagall"];
    artMuseumArr = [
      "Berggruen Museum",
      "Musée d’Art moderne de Paris",
      "Marc Chagall National Museum",
    ];
  } else if (type === "impressionism") {
    artistArr = ["Claude Monet", "Édouard Manet", "Gustave Caillebotte"];
    artMuseumArr = [
      "Fondation Monet in Giverny",
      "Musées d'Orsay et de l'Orangerie",
      "Musée d'Orsay",
    ];
  } else if (type === "pop") {
    artistArr = ["Yayoi Kusama", "Andy Warhol", "Dmitri Vrubel"];
    artMuseumArr = ["Louisiana Museum of Modern Art", "TATE", "the Berlin Wall"];
  }
};

const validateMuseum = (artist) => {
  switch (artist) {
    // Modern artist
    case "Pablo Picasso":
      yourMuseum = artMuseumArr[0];
      break;
    case "Marcel Duchamp":
      yourMuseum = artMuseumArr[1];
      break;
    case "Marc Chagall":
      yourMuseum = artMuseumArr[2];
      break;
    // Impressionism artists
    case "Claude Monet":
      yourMuseum = artMuseumArr[0];
      break;
    case "Édouard Manet":
      yourMuseum = artMuseumArr[1];
      break;
    case "Gustave Caillebotte":
      yourMuseum = artMuseumArr[2];
      break;
    // Pop artists
    case "Yayoi Kusama":
      yourMuseum = artMuseumArr[0];
      break;
    case "Andy Warhol":
      yourMuseum = artMuseumArr[1];
      break;
    case "Dmitri Vrubel":
      yourMuseum = artMuseumArr[2];
      break;
  }
  yourMuseum;
};

function createInputFields(inputType, specialmessage) {
  console.log(favType, yourMuseum);
  if (specialmessage) {
    showBotInput(specialmessage);
  } else {
    showBotInput(questions[currentIndex].message);
  }
  if (inputType === "button") {
    // create a div to pass buttons. Also addting a class name
    const buttonBox = document.createElement("div");
    buttonBox.classList.add("ask-container");
    // get a button content from questions arr
    buttonBox.innerHTML = `${questions[currentIndex].choice.map(
      (el, i) => ` <button id=${questions[currentIndex].id[i]}>${el}</button>`
    )}`;

    form.appendChild(buttonBox);
    // Here I picked button elements that I need to add event handlers
    const buttons = document.querySelectorAll("button");

    buttons.forEach((el, i) => {
      el.addEventListener("click", (event) => {
        clickSound(event);
        questions[currentIndex].nextHandler(event);
        event.preventDefault();
      });
    });
  } else if (inputType === "select") {
    const selectEl = document.createElement("select");
    selectEl.setAttribute("id", "select");
    selectEl.innerHTML = `
        <option default>Select an Artist</option>
        <option id="artist1">${artistArr[0]}</option>
        <option id="artist2">${artistArr[1]}</option>
        <option id="artist3">${artistArr[2]}</option>
    `;
    form.appendChild(selectEl);
    selectEl.addEventListener("change", (event) => {
      event.preventDefault();
      clickSound(event);

      questions[currentIndex].nextHandler(event);
    });
  }
}

function showUserInput(message) {
  setTimeout(showMessage, 500, message, "user");
}

function showBotInput(message) {
  setTimeout(showMessage, 1000, message, "bot");
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

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clickSound(event);
  userName = input.value;
  showUserInput(userName);
  form.innerHTML = "";
  createInputFields(questions[currentIndex].option);
  return;
});

// This is for a background music. A user can choose which music, by cliking one of buttons under h1.
const backMusicBtns = document.querySelectorAll(".music-container button");

backMusicBtns.forEach((el) => {
  const audio = document.createElement("audio");

  function soundMusic(el, src) {
    el.addEventListener("click", () => {
      if (!audio.paused) {
        audio.pause();
      } else {
        startMusic(src);
      }
    });
  }
  const startMusic = (music) => {
    audio.setAttribute("src", music);
    audio.setAttribute("loop", "loop");
    audio.volume = 0.1;
    audio.play();
  };

  if (el.classList.contains("jazz")) {
    soundMusic(el, "./assets/audio/piano.mp3");
  } else if (el.classList.contains("chill")) {
    soundMusic(el, "./assets/audio/classic.mp3");
  } else {
    soundMusic(el, "./assets/audio/techno.mp3");
  }
});

// This function is called when something is clicked. And then this will make a clicking sound.

function clickSound(event) {
  event.preventDefault();
  const audio = document.createElement("audio");
  audio.setAttribute("src", "./assets/audio/click-sound.wav");
  audio.volume = 0.1;
  audio.play();
}
