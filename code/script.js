// Variables that point to selected DOM elements
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

let artistArr = [];
let artMuseum = [];
let artMuseumArr = [];

let userName = "";
let age = "";
let price = 0;
let artist = "";

//////////////////////////////////////////////////////////////////////////////////
// Funtions
/////////////////////////////////////////////////////////////////////////////////

// start page to main form page. Main form will be appeared with this function. display("none")=>display("flex")
const showForm = () => {
  main.style.display = "flex";
};

/* After a user chose a genre, this function will be called to deciede artists and museums. 
Then, select element will be appear to decide a favorite artist.
From an user's artist choice, bot will guide an user the best museum for an user.
*/

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

// validate a user's choice

const validateYesNo = (choice) => {
  if (choice === "Yes") {
    showMessage("Have a good time at the museum!🥳💫", bot);
    inputWrapper.innerHTML = "";
  } else {
    showMessage("No problem. Have a good day 👋", bot);
    inputWrapper.innerHTML = "";
  }
};

//////////////////////////////////////////////////////////////////////////////////
// Create HTML and handle events
/////////////////////////////////////////////////////////////////////////////////

//////// question number 2

const genreEventHandler = (event, genre) => {
  event.preventDefault();
  validateType(genre);
  setTimeout(showMessage, 500, genre, user);
  setTimeout(showMessage, 1000, "Who is your favorite artist?", bot);
  form.remove();
  setTimeout(createSelectBox, 1000);
};

const createBtns = () => {
  form.innerHTML = `
  <button id="modern" type="submit">Modern</button>
  <button id="impressionism" type="submit">Impressionism</button>
  <button id="pop" type="submit">Pop</button>
  `;
  inputWrapper.appendChild(form);

  document.getElementById("modern").addEventListener("click", (event) => {
    clickSound(event);
    genreEventHandler(event, "Modern");
  });

  document.getElementById("impressionism").addEventListener("click", (event) => {
    clickSound(event);
    genreEventHandler(event, "Impressionism");
  });

  document.getElementById("pop").addEventListener("click", (event) => {
    clickSound(event);
    genreEventHandler(event, "Pop");
  });
};

// f question number 3
const createSelectBox = () => {
  form.innerHTML = `
  <select id="select">
  <option default>select an artist</option>
  <option id="artist1">${artistArr[0]}</option>
  <option id="artist2">${artistArr[1]}</option>
  <option id="artist3">${artistArr[2]}</option>
  </select>
  `;

  inputWrapper.appendChild(form);

  document.getElementById("select").addEventListener("change", (event) => {
    clickSound(event);
    // Get an artist's name and
    artist = event.target.value;

    // Based on an artist name, validateMuseum function points out a museum for a user.
    const museum = validateMuseum(artist);
    setTimeout(showMessage, 500, artist, user);
    setTimeout(showMessage, 800, `${museum} is for you! `, bot);
    setTimeout(showMessage, 1000, "Are you an adult or a child?", bot);

    // Ask the next question and create next form element. Also old element is removed.
    setTimeout(createAdultChild, 1400);

    form.remove();
  });
};

// question number 4////////////////////////////////////////////////////

const ageEventHandler = (event, old) => {
  event.preventDefault();
  age = old;
  price = old === "Child" ? 10 : 20;
  setTimeout(showMessage, 500, old, user);
  setTimeout(createYesNo, 1400);
  setTimeout(
    showMessage,
    1000,
    `You can find ${artist}'s paintings at ${artMuseum}.\n One ${age} ticket costs ${price} euro.`,
    bot
  );
  form.remove();
};

const createAdultChild = () => {
  form.innerHTML = `
  <div class="ask-container">
  <button id="adult" type="submit" class="icon">🧑</button>
  <button id="child" type="submit" class="icon">🧒</button>
  </div> 
  `;
  inputWrapper.appendChild(form);

  // When a user clicked, this eventlistener calls. Messages will be displayed,
  // and create new form element for next question. Then old element will be removed.
  document.getElementById("adult").addEventListener("click", (event) => {
    clickSound(event);
    ageEventHandler(event, "Adult");
  });

  document.getElementById("child").addEventListener("click", (event) => {
    clickSound(event);
    ageEventHandler(event, "Child");
  });
};

//  question number 5/////////////////////////////////////////////////////
const yesNoEventHandler = (event, input) => {
  event.preventDefault();

  setTimeout(showMessage, 400, input, user);
  setTimeout(validateYesNo, 1000, input);
  form.remove();
};
const createYesNo = () => {
  form.innerHTML = `
  <div class="ask-container">
  <button id="yes" type="submit">Yes</button>
  <button id="no" type="submit">no</button>
  </div> 
  `;
  inputWrapper.appendChild(form);

  // When a user chose Yes/No, then message will show and then validateYesNo function will call to validate a user's answer.
  // Then, message from bot will show based on a user's choice.
  document.getElementById("yes").addEventListener("click", (event) => {
    clickSound(event);
    yesNoEventHandler(event, "Yes");
  });

  document.getElementById("no").addEventListener("click", (event) => {
    clickSound(event);
    yesNoEventHandler(event, "No");
  });
};

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

// ////////////////////////////////////////////////////////////////////////////
// Strech Goals
// ////////////////////////////////////////////////////////////////////////////

// This is for a background music. A user can choose which music, by cliking one of buttons under h1.
const backMusicBtns = document.querySelectorAll(".music-container button");

backMusicBtns.forEach((el) => {
  const audio = document.createElement("audio");
  const startMusic = (music) => {
    audio.setAttribute("src", music);
    audio.setAttribute("loop", "loop");
    audio.volume = 0.1;
    audio.play();
  };

  if (el.classList.contains("jazz")) {
    el.addEventListener("click", () => {
      if (!audio.paused) {
        audio.pause();
      } else {
        startMusic("./assets/audio/piano.mp3");
      }
    });
  } else if (el.classList.contains("chill")) {
    el.addEventListener("click", () => {
      if (!audio.paused) {
        audio.pause();
      } else {
        startMusic("./assets/audio/classic.mp3");
      }
    });
  } else {
    el.addEventListener("click", () => {
      if (!audio.paused) {
        audio.pause();
      } else {
        startMusic("./assets/audio/techno.mp3");
      }
    });
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
