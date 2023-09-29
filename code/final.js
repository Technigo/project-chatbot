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

const types = [];
const artistArr = [];
const artMuseum = [];
const artMuseumArr = [];
let artsArr = [];
const urlArr = [];
const costs = [];

let userName = "";
let price = 0;
let yourMuseum = "";
let favArtist = "";
let favType = "";
let museumUrl = "";
let modernArtistsArr;

const getData = async () => {
  const res = await fetch("./art.json");
  const data = await res.json();
  modernArtistsArr = data.modernArts;
  console.log(modernArtistsArr);
  const artType = modernArtistsArr.map((el) => {
    types.push(el.artType);
    console.log(types);
  });
};
getData();

// Here is an array that stores all the info about chat (messages, input type, question choices....)
// The first question has been already placed in the initial event handler. Therefore, array starts from question number 2.
const questions = [
  {
    /***************************QUESTION 2*******************************/
    message: "Which genre of art do you like the most?",
    option: "button",
    choice: types,
    id: types,
    nextHandler: function (event) {
      event.preventDefault();

      favType = event.target.id;
      form.innerHTML = "";
      currentIndex++;
      //   this will trigers next step
      artsArr = modernArtistsArr.find((obj) => obj.artType === favType).artists;
      console.log(artsArr);
      artsArr.forEach((el) => {
        console.log(el);
        artMuseumArr.push(el.museum);
        artistArr.push(el.artist);
        urlArr.push(el.url);
        costs.push(el.cost);
        console.log(artMuseumArr, artistArr);
      });
      createInputFields(questions[currentIndex].option);
      showUserInput(favType);
    },
  },

  {
    /***************************QUESTION 3*******************************/
    message: "Who is your favorite artist?",
    option: "select",
    id: artistArr,
    default: "Select an artist",
    choice: {
      artists: artistArr,
      museums: artMuseumArr,
    },

    nextHandler: function (event) {
      event.preventDefault();
      favArtist = event.target.value;
      showUserInput(favArtist);
      const yourArtObj = artsArr.find((obj) => obj.artist === favArtist);
      yourMuseum = yourArtObj.museum;
      museumUrl = yourArtObj.url;
      price = yourArtObj.cost;
      form.innerHTML = "";
      currentIndex++;
      const confirmationMessage = questions[currentIndex].createMessage(favArtist, yourMuseum);
      return createInputFields(questions[currentIndex].option, confirmationMessage);
    },
  },
  {
    /***************************QUESTION 4*******************************/
    createMessage: function (artist, museum) {
      const message = `We picked up ${museum} for you. You can find many paintings by ${artist} 👨🏻‍🎨 Do you want some more infomation?`;
      return message;
    },
    option: "button",
    id: ["yes", "no"],
    class: "icon",
    choice: ["Yes 🌸", "No ⚡️"],
    isNested: false,
    nextHandler: function (event) {
      event.preventDefault();
      showUserInput(event.target.innerHTML);
      form.innerHTML = "";
      currentIndex++;
      const confirmationMessage = questions[currentIndex].createMessage(
        favType,
        favArtist,
        yourMuseum,
        price,
        museumUrl
      );
      return createInputFields(questions[currentIndex].option, confirmationMessage);
    },
  },
  {
    /***************************QUESTION 5*******************************/
    createMessage: function (type, artist, museum, price, url) {
      const message = `<p>You can find ${type} paintings by ${artist} at ${museum}.<br/><br/> Here is a <a href=${url}>link</a> A ticket will cost you ${price} euro.</p>
      <p>Is this helpful?</P>`;
      return message;
    },
    option: "button",
    choice: ["Yes", "No"],
    id: ["yes", "no"],
    isNested: false,
    nextHandler: function (event) {
      const yesOrNo = event.target.id;
      showUserInput(yesOrNo);
      if (yesOrNo === "yes") {
        showBotInput("Hope see you again! 🥳💫");
        inputWrapper.innerHTML = "";
        event.currentTarget.removeEventListener("click", this.nextHandler);
      } else {
        showBotInput("Have a good day 👋");
        inputWrapper.innerHTML = "";
        event.currentTarget.removeEventListener("click", this.nextHandler);
      }
    },
  },
];

// ////////////////////////////////////////////////////////////////////////////////////////
// This is to open a form element that was hidden at the initial page.
const showForm = () => {
  main.style.display = "flex";
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

  if (inputType === "button") {
    // create a div to pass buttons. Also addting a class name
    const buttonBox = document.createElement("div");
    buttonBox.classList.add("ask-container");
    const styleTypeBtn = questions[currentIndex].choice === types ? "type" : console.log("no");

    // get a button content from questions arr

    buttonBox.innerHTML = `${questions[currentIndex].choice
      .map(
        (el, i) =>
          ` <button id=${questions[currentIndex].id[i]} class=${styleTypeBtn} >${el}</button>`
      )
      .join("")}`;

    form.appendChild(buttonBox);
    // Here I picked button elements that I need to add event handlers
    const buttons = document.querySelectorAll("#input-wrapper button");

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
        <option id="artist4">${artistArr[3]}</option>
        <option id="artist5">${artistArr[4]}</option>
        <option id="artist6">${artistArr[5]}</option>
    
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
  if (!userName) {
    alert("This is not a valid answer. Please type your name.");
  } else {
    showUserInput(userName);
    form.innerHTML = "";
    createInputFields(questions[currentIndex].option);
  }
});

// //////////////////////////////////////////////////////////////////////////////////////////
// This is for a background music. A user can choose which music, by cliking one of buttons under h1.
const backMusicBtns = document.querySelectorAll(".music-container button");

const audio = document.createElement("audio");

function soundMusic(el, src) {
  console.log("The sound music");
  el.addEventListener("click", () => {
    if (!audio.paused) {
      audio.pause();
    } else {
      startMusic(src);
    }
  });
}

const startMusic = (music) => {
  console.log("The start musice");
  audio.setAttribute("src", music);
  audio.setAttribute("loop", "loop");
  audio.volume = 0.1;
  audio.play();
};

backMusicBtns.forEach((el) => {
  console.log("The foreach");
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
  console.log("The click sound");
  event.preventDefault();
  const audio = document.createElement("audio");
  audio.setAttribute("src", "./assets/audio/click-sound.wav");
  audio.volume = 0.1;
  audio.play();
}
