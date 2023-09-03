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

// Here is an array that stores all the info about chat (messages, input type, question choices....)
// The first question has been already placed in the initial event handler. Therefore, array starts from question number 2.
const questions = [
  {
    /***************************QUESTION 2*******************************/
    message: "Which genre of art do you like the most?",
    option: "button",
    id: ["modern", "impressionism", "pop"],
    isNested: false,
    choice: ["Modern", "Impressionism", "Pop"],
    // Here is the next function that will triger in createInputField()
    nextHandler: function (event) {
      event.preventDefault();
      favType = event.target.id;
      validateType(favType);
      showUserInput(favType);
      form.innerHTML = "";
      //   currentIndex is organizing the order of questions.
      currentIndex++;
      //   this will trigers next step
      createInputFields(questions[currentIndex].option);
    },
  },

  {
    /***************************QUESTION 3*******************************/
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
      favArtist = event.target.value;
      showUserInput(favArtist);
      validateMuseum(favArtist);
      form.innerHTML = "";
      currentIndex++;
      return createInputFields(questions[currentIndex].option);
    },
  },
  {
    /***************************QUESTION 4*******************************/
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
      //    I need this function bc of js runtime problem...all variables I need to show the next message are global scop and decleared with let.
      // So it should be mutable. However, it stores initial values and cannot reasign. So I need to call this function to reasign all the variables I need.
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
    /***************************QUESTION 5*******************************/
    createMessage: function (type, artist, museum, age, price) {
      const message = `You chose ${type} art and ${artist} as your favorite artist! I recommend ${museum}. One ${age} ticket will cost you ${price} euro. Are you happy with this?`;
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

// ////////////////////////////////////////////////////////////////////////////////////////
// This is to open a form element that was hidden at the initial page.
const showForm = () => {
  main.style.display = "flex";
};

// Here I validate user's choices for artist and museums
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

// This is the most important function that triggers almost all the actions in this app.
// createing input elements based on input type parameter, and

function createInputFields(inputType, specialmessage) {
  // special message is only from the 5th question that I could not reasign so that I created a function to a proper message.

  if (specialmessage) {
    showBotInput(specialmessage);
  } else {
    showBotInput(questions[currentIndex].message);
  }

  //   this validate if input field needs button or select. select was only used in question 3. So I wrote html just for the question.
  // So if I need to extend more questions, this needs to be changed.
  // Button part is reuseable.

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
        event.preventDefault();
        clickSound(event);
        questions[currentIndex].nextHandler(event);
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

// Here controls when messages should be appeared. I chose 500s for user inputs, and 1000s for bot inputs.

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

// //////////////////////////////////////////////////////////////////////////////////////////
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
