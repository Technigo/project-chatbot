// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const input = document.getElementById("name-input");
const sendBtn = document.querySelector(".send-btn");
const nameForm = document.getElementById("name-form");
const startImg = document.querySelector(".start-img");
const startPage = document.querySelector(".start-page");
const main = document.querySelector(".main");
const inputWrapper = document.querySelector(".input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:
let userName;
let artistArr = [];
let artType;
let questionNum = 0;
let answerNum = 0;
let artMuseum = [];
let artMuseumArr = [];
let age;
let price;
let artist;

// Declare your functions after this comment

//
const answerName = (name) => {
  showMessage(`${name}`, "user");
  answerNum++;
};

const askOrder = (name) => {
  showMessage(`Nice to meet you ${name}. What kind of art do you like the most?`, "bot");
  questionNum++;
};

const showArtType = (artType) => {
  showMessage(artType, "user");
  answerNum++;
};

const askArtist = () => {
  showMessage("Who is your most favorite artist?", "bot");
  questionNum++;
};

const showFavArtist = (artist) => {
  showMessage(artist, "user");
  answerNum++;
};

const showMuseum = (museum) => {
  showMessage(`${museum} is for you!`, "bot");
  questionNum++;
};
const askAdultOrChild = () => {
  showMessage("Are you an adult or a child?", "bot");
  questionNum++;
};

const showAdultOrChild = (age) => {
  showMessage(age, "user");
  answerNum++;
};

const askPriceIsOk = (age, price, artist, museum) => {
  showMessage(`You can find ${artist}'s painting at${museum}.`, "bot");
  showMessage(`One ${age} ticket costs ${price} euro. This is fine?`, "bot");

  questionNum++;
};

const showPriceIsOk = (yes) => {
  showMessage(yes, "user");
  answerNum++;
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

// start page to main page
const showForm = () => {
  main.style.display = "flex";
};

// Create HTML
// for a question num 2
const createBtns = () => {
  const btnContainer = document.createElement("div");

  btnContainer.innerHTML = `
  <button id="modern">Modern</button>
  <button id="impressionism">Impressionism</button>
  <button id="pop">Pop</button>
  `;

  inputWrapper.appendChild(btnContainer);

  document.getElementById("modern").addEventListener("click", () => {
    validateType("modern");
    setTimeout(showArtType, 500, "Modern");
    setTimeout(askArtist, 1000);
    btnContainer.style.display = "none";
    createSelectBox();
  });
  document.getElementById("impressionism").addEventListener("click", () => {
    validateType("impressionism");
    setTimeout(showArtType, 500, "Impressionism");
    setTimeout(askArtist, 1000);
    btnContainer.style.display = "none";
    createSelectBox();
  });
  document.getElementById("pop").addEventListener("click", () => {
    validateType("pop");
    setTimeout(showArtType, 500, "Pop");
    setTimeout(askArtist, 1000);
    btnContainer.style.display = "none";
    createSelectBox();
  });
};

// for a question num 3
const createSelectBox = () => {
  inputWrapper.innerHTML = `
  <select id="select">
  <option default>select an artist</option>
  <option id="artist1">${artistArr[0]}</option>
  <option id="artist2">${artistArr[1]}</option>
  <option id="artist3">${artistArr[2]}</option>
  </select>
  `;
  document.getElementById("select").addEventListener("change", (e) => {
    artist = e.target.value;
    showFavArtist(artist);
    const yourMuseum = validateMuseum(artist);

    select.style.display = "none";
    setTimeout(askAdultOrChild, 1400);
    setTimeout(showMuseum, 500, yourMuseum);
    setTimeout(createAdultChild, 1400);
  });
};

// for a question num 5
const createAdultChild = () => {
  inputWrapper.innerHTML = `
  <div class="ask-container">
  <button id="adult" type="submit">🧑</button>
  <button id="child" type="submit">🧒</button>
  </div> 
  `;

  document.getElementById("adult").addEventListener("click", (e) => {
    e.preventDefault();
    age = "Adult";
    price = 20;
    setTimeout(showAdultOrChild, 500, "Adult");
    setTimeout(createYesNo, 1000);
    setTimeout(askPriceIsOk, 1200, age, price, artist, artMuseum);
  });
  document.getElementById("child").addEventListener("click", (e) => {
    e.preventDefault();
    age = "Child";
    price = 10;
    setTimeout(showAdultOrChild, 500, "Child");
    setTimeout(createYesNo, 1000);
    setTimeout(askPriceIsOk, 1200, age, price, artist, artMuseum);
  });
};

// for a question num 5
const createYesNo = () => {
  inputWrapper.innerHTML = `
  <div class="ask-container">
  <button id="yes" type="submit">Yes</button>
  <button id="no" type="submit">no</button>
  </div> 
  `;

  document.getElementById("yes").addEventListener("click", () => {
    setTimeout(showPriceIsOk, 500, "Yes");
    setTimeout(validateYesNo, 1000, "yes");
  });
  document.getElementById("no").addEventListener("click", () => {
    setTimeout(showPriceIsOk, 500, "No");
    setTimeout(validateYesNo, 1000, "no");
  });
};

// validate a user's choice

const validateYesNo = (choice) => {
  if (choice === "yes") {
    showMessage("Thank you for your Order!", "bot");
  } else {
    showMessage("No problem. You can come back anytime!", "bot");
  }
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
  questionNum++;
};

// Set up your eventlisteners here
////////////////////////////////////////////////////////////////////////////////////////////////////////
// click to go to a form page
startImg.addEventListener("click", (e) => {
  e.preventDefault();
  startPage.style.display = "none";
  setTimeout(showForm, 200);
});

// first step // send user name
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userName = input.value;
  setTimeout(answerName, 200, userName);
  nameForm.style.display = "none";
  setTimeout(askOrder, 1200, userName);
  setTimeout(createBtns, 2000);
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
