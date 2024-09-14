// Constants
const GLOBAL_DELAY = 450;
const GLOBAL_LONG_DELAY = 900;
const TYPING_INDICATOR_LENGTH = 2200;

// DOM selectors
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const sendButton = document.getElementById("send-button");

// Global variables
let userName = "";

/* *******************
HELPER FUNCTIONS 
******************** */

// Select latest message in chat. Add and then remove .is-loading to perform fade-in animation.
const getLatestMessage = () => {
  // Select the last inserted .message element (the new one)
  const chatMessage = document.querySelectorAll(".message");
  const latestMessage = chatMessage[chatMessage.length - 1]; // Get the last bubble

  latestMessage.classList.add("is-loading");
  setTimeout(() => {
    latestMessage.classList.remove("is-loading");
  }, 500);
};

// Function to show the message bubble for both the user and bot
const showMessage = (message, sender) => {
  const isUser = sender === "user";
  const senderImage = isUser ? "user-avatar.png" : "bot-avatar.png";
  const bubbleContainerClass = isUser
    ? "bubble-container bubble-container--user"
    : "bubble-container bubble-container--bot";
  const messageClass = isUser
    ? "message message--user"
    : "message message--bot";
  const bubbleClass = isUser ? "bubble bubble--user" : "bubble bubble--bot";

  chat.innerHTML += `
    <section class="${messageClass}">
      <img src="assets/${senderImage}" alt="${sender}" />
      <div class="${bubbleContainerClass}">
        <div class="${bubbleClass}">
          <p>${message}</p>
        </div>
      </div>
    </section>
  `;

  getLatestMessage();

  // Scroll the chat to the latest reply
  chat.scrollTop = chat.scrollHeight;
};

// Shorthand for user messages
const userMessage = (message) => {
  showMessage(message, "user");
};

// Shorthand for bot messages
const botMessage = (message) => {
  // Create a promise in order to wait for the Bot Message to be done before proceeding with upcoming code
  return new Promise((resolve) => {
    setTimeout(() => {
      // Create typing indicator element
      const typingIndicator = document.createElement("section");
      typingIndicator.classList.add("message", "message--bot");
      typingIndicator.innerHTML = `
      <img src="assets/bot-avatar.png" alt="Harmoniqa" />
      <div class="bubble-container bubble-container--bot">
        <div class="bubble bubble--bot">
          <p><span class="dot"></span><span class="dot"></span><span class="dot"></span></p>
        </div>
      </div>
    `;

      // Append typing indicator to the chat
      chat.appendChild(typingIndicator);

      // Run helper function for fading in the bot bubble
      getLatestMessage();

      // Scroll to the bottom of the chat to show typing indicator
      chat.scrollTop = chat.scrollHeight;

      // Simulate a delay for typing
      setTimeout(() => {
        // Remove typing indicator
        typingIndicator.remove();

        // Show the actual bot message after delay
        showMessage(message, "bot");
        resolve(); // Resolve promise
      }, TYPING_INDICATOR_LENGTH); // How long the simulated typing wil run
    }, GLOBAL_DELAY);
  });
};

// Get a random song from an array
const getRandomSong = (songsArray) => {
  const randomIndex = Math.floor(Math.random() * songsArray.length);
  return songsArray[randomIndex];
};

/* **************************
  Conversational functions 
************************** */

// STEP 1: User enters their name
const handleNameInput = (event) => {
  event.preventDefault();

  // Save the value in the userName variable
  userName = nameInput.value.trim();

  // If the input is empty or just spaces, do nothing (= return)
  if (!userName) return;

  // Show the users answer in the chat
  userMessage(userName);

  nameInput.value = ""; // Clear input
  inputWrapper.innerHTML = ""; // Remove the input area after user replies

  // After delay show the next question by invoking the next function.
  setTimeout(() => musicType(userName), GLOBAL_DELAY);
};

// STEP 2: Ask for music preference
const musicType = (userName) => {
  botMessage(
    `Hey ${userName}! What type of music are you in the mood for today?`
  ).then(() => {
    // Wait for the botMessage to finish before showing buttons
    inputWrapper.innerHTML = `
        <div class="button-group">
          <button id="button-moody">Moody</button>
          <button id="button-energetic">Energetic</button>
          <button id="button-calm">Calm</button>
        </div>
      `;

    document.getElementById("button-moody").addEventListener("click", () => {
      colorSelection("Moody");
      inputWrapper.innerHTML = ""; // Remove the input area after user replies
    });
    document
      .getElementById("button-energetic")
      .addEventListener("click", () => {
        colorSelection("Energetic");
        inputWrapper.innerHTML = ""; // Remove the input area after user replies
      });
    document.getElementById("button-calm").addEventListener("click", () => {
      colorSelection("Calm");
      inputWrapper.innerHTML = ""; // Remove the input area after user replies
    });
    // Scroll down the chat window after buttons have loaded
    chat.scrollTop = chat.scrollHeight;
  });
};

let selectedMusic = "";

// STEP 3: Ask for user to pick a color
const colorSelection = (musicType) => {
  let botResponse = "";

  switch (musicType) {
    case "Moody":
      botResponse = `Dark and moody, huh? I can work with that. What color speaks to you today?`;
      break;
    case "Energetic":
      botResponse = `Let's get the party started! Just pick your color for the day first.`;
      break;
    case "Calm":
      botResponse = `A mellow fellow? I got you covered. What color resonates with you today?`;
      break;
  }

  // Show user selection in chat
  userMessage(musicType);

  selectedMusic = musicType; // Store the selected music type
  botMessage(botResponse).then(() => {
    // Wait for the botMessage to finish before showing buttons
    setTimeout(() => {
      inputWrapper.innerHTML = `
      <div class="button-group">
      <button id="button-red">Red</button>
        <button id="button-green">Green</button>
        <button id="button-blue">Blue</button>
        <button id="button-yellow">Yellow</button>
      </div>
      `;

      document
        .getElementById("button-red")
        .addEventListener("click", () => suggestSong("Red", selectedMusic));
      document
        .getElementById("button-green")
        .addEventListener("click", () => suggestSong("Green", selectedMusic));
      document
        .getElementById("button-blue")
        .addEventListener("click", () => suggestSong("Blue", selectedMusic));
      document
        .getElementById("button-yellow")
        .addEventListener("click", () => suggestSong("Yellow", selectedMusic));

      // Scroll down the chat window after buttons have loaded
      chat.scrollTop = chat.scrollHeight;
    }, GLOBAL_LONG_DELAY);
  });
};

// Create object with song suggestions based on music type + color
const songs = {
  moody: {
    red: [
      {
        title: "Meghan Trainor ft. Teddy Swims – Bad for Me",
        spotifyUrl:
          "https://open.spotify.com/embed/track/0mHk41X0RRc6pqrcq1gQAr?utm_source=generator&theme=0",
      },
      {
        title: "Susanne Sundfør – Memorial",
        spotifyUrl:
          "https://open.spotify.com/embed/track/4bjrkGKddXrE8wZu4X9o6C?utm_source=generator&theme=0",
      },
      {
        title: "Hozier – Take Me to Church",
        spotifyUrl:
          "https://open.spotify.com/embed/track/70LrxJ5u19umvrXbC19g20?utm_source=generator&theme=0",
      },
    ],
    green: [
      {
        title: "Billie Eilish – Everything I Wanted",
        spotifyUrl:
          "https://open.spotify.com/embed/track/3ZCTVFBt2Brf31RLEnCkWJ?utm_source=generator&theme=0",
      },
      {
        title: "City and Colour – The Girl",
        spotifyUrl:
          "https://open.spotify.com/embed/track/39dnj8G8DK6I1JmNOZKeZO?utm_source=generator&theme=0",
      },
      {
        title: "The Marcus King Band – Goodbye Carolina",
        spotifyUrl:
          "https://open.spotify.com/embed/track/6lNGQqEos6i2KxISBn24Xc?utm_source=generator&theme=0",
      },
    ],
    blue: [
      {
        title: "Coldplay – Fix You",
        spotifyUrl:
          "https://open.spotify.com/embed/track/7LVHVU3tWfcxj5aiPFEW4Q?utm_source=generator&theme=0",
      },
      {
        title: "Nestor – On the Run (Piano Version)",
        spotifyUrl:
          "https://open.spotify.com/embed/track/3HsOCbsLSSDMdQ68md6uyK?utm_source=generator&theme=0",
      },
      {
        title: "Oscar and the Wolf – Angel Face",
        spotifyUrl:
          "https://open.spotify.com/embed/track/005k50cKNdWjOitdP6Y6jz?utm_source=generator&theme=0",
      },
    ],
    yellow: [
      {
        title: "Bon Iver – Holocene",
        spotifyUrl:
          "https://open.spotify.com/embed/track/35KiiILklye1JRRctaLUb4?utm_source=generator&theme=0",
      },
      {
        title: "The Lumineers – Ophelia",
        spotifyUrl:
          "https://open.spotify.com/embed/track/14AyWf6y7KlWWLfAjdKMKI?utm_source=generator&theme=0",
      },
      {
        title: "Leon Bridges – River",
        spotifyUrl:
          "https://open.spotify.com/embed/track/3hhbDnFUb2bicI2df6VurK?utm_source=generator&theme=0",
      },
    ],
  },
  energetic: {
    red: [
      {
        title: "Vargas & Lagola – Daughter of a Rifleman",
        spotifyUrl:
          "https://open.spotify.com/embed/track/3lCNZSLRgib8Lkw2XQsFqm?utm_source=generator&theme=0",
      },
      {
        title: "Rage Against The Machine – Killing in the Name",
        spotifyUrl:
          "https://open.spotify.com/embed/track/59WN2psjkt1tyaxjspN8fp?utm_source=generator&theme=0",
      },
      {
        title: "Arctic Monkeys – I Bet You Look Good on the Dancefloor",
        spotifyUrl:
          "https://open.spotify.com/embed/track/3DQVgcqaP3iSMbaKsd57l5?utm_source=generator&theme=0",
      },
    ],
    green: [
      {
        title: "Daft Punk – Get Lucky",
        spotifyUrl:
          "https://open.spotify.com/embed/track/2Foc5Q5nqNiosCNqttzHof?utm_source=generator&theme=0",
      },
      {
        title: "Florence + The Machine – Dog Days Are Over",
        spotifyUrl:
          "https://open.spotify.com/embed/track/456WNXWhDwYOSf5SpTuqxd?utm_source=generator&theme=0",
      },
      {
        title: "Mark Ronson ft. Bruno Mars – Uptown Funk",
        spotifyUrl:
          "https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS?utm_source=generator&theme=0",
      },
    ],
    blue: [
      {
        title: "The Killers – Mr. Brightside",
        spotifyUrl:
          "https://open.spotify.com/embed/track/003vvx7Niy0yvhvHt4a68B?utm_source=generator&theme=0",
      },
      {
        title: "The Chainsmokers – Don't Let Me Down",
        spotifyUrl:
          "https://open.spotify.com/embed/track/1i1fxkWeaMmKEB4T7zqbzK?utm_source=generator&theme=0",
      },
      {
        title: "David Guetta ft. Sia – Titanium",
        spotifyUrl:
          "https://open.spotify.com/embed/track/0TDLuuLlV54CkRRUOahJb4?utm_source=generator&theme=0",
      },
    ],
    yellow: [
      {
        title: "Conan Gray – Never Ending Song",
        spotifyUrl:
          "https://open.spotify.com/embed/track/4V3KS34vOLFkh3tJSPLTXP?utm_source=generator&theme=0",
      },
      {
        title: "Pharrell Williams – Happy",
        spotifyUrl:
          "https://open.spotify.com/embed/track/60nZcImufyMA1MKQY3dcCH?utm_source=generator&theme=0",
      },
      {
        title: "Mystery Jets – Bubblegum",
        spotifyUrl:
          "https://open.spotify.com/embed/track/53p7or9OC8PGNnGrd9gLBv?utm_source=generator&theme=0",
      },
    ],
  },
  calm: {
    red: [
      {
        title: "Norah Jones – Don't Know Why",
        spotifyUrl:
          "https://open.spotify.com/embed/track/1zNXF2svmdlNxfS5XeNUgr?utm_source=generator&theme=0",
      },
      {
        title: "Sufjan Stevens – Mystery of Love",
        spotifyUrl:
          "https://open.spotify.com/embed/track/4HbeGjbt7u3pvwDk1vN7P0?utm_source=generator&theme=0",
      },
      {
        title: "Adele – Make You Feel My Love",
        spotifyUrl:
          "https://open.spotify.com/embed/track/273QnyCvJB65rScHJ1nPZb?utm_source=generator&theme=0",
      },
    ],
    green: [
      {
        title: "José González – Heartbeats",
        spotifyUrl:
          "https://open.spotify.com/embed/track/16j0oMDsmn2aeAewzF1NUi?utm_source=generator&theme=0",
      },
      {
        title: "SYML – Girl (Acoustic)",
        spotifyUrl:
          "https://open.spotify.com/embed/track/4BrGYhbT975hwXXPBUqXNY?utm_source=generator&theme=0",
      },
      {
        title: "Cat Burns – Live More & Love More",
        spotifyUrl:
          "https://open.spotify.com/embed/track/1Oj4FgVngNgBTvd0a9nI2k?utm_source=generator&theme=0",
      },
    ],
    blue: [
      {
        title: "John Mayer – Gravity",
        spotifyUrl:
          "https://open.spotify.com/embed/track/3SktMqZmo3M9zbB7oKMIF7?utm_source=generator&theme=0",
      },
      {
        title: "LANY – Malibu Nights",
        spotifyUrl:
          "https://open.spotify.com/embed/track/0Eqg0CQ7bK3RQIMPw1A7pl?utm_source=generator&theme=0",
      },
      {
        title: "The Tallest Man on Earth – Rivers",
        spotifyUrl:
          "https://open.spotify.com/embed/track/1dBje6EOpDBLdoKGo94DEa?utm_source=generator&theme=0",
      },
    ],
    yellow: [
      {
        title: "Dagny – Landslide",
        spotifyUrl:
          "https://open.spotify.com/embed/track/41fecZEX4sPrRxnjZQ6DGU?utm_source=generator&theme=0",
      },
      {
        title: "Israel Kamakawiwo'ole – Somewhere Over the Rainbow",
        spotifyUrl:
          "https://open.spotify.com/embed/track/25U7raB3ZSszayTYClh4hF?utm_source=generator&theme=0",
      },
      {
        title: "Ben Howard – Only Love",
        spotifyUrl:
          "https://open.spotify.com/embed/track/2uhEKg8kIzpdvz4gyy6x8W?utm_source=generator&theme=0",
      },
    ],
  },
};

// STEP 4: Present the user with their song suggestion
const suggestSong = (color, selectedMusic) => {
  // Show user selection in chat
  userMessage(color);

  // Get a random song based on the selected music type and color choice
  const songSuggestion = getRandomSong(
    songs[selectedMusic.toLowerCase()][color.toLowerCase()] ?? []
  );

  let botResponse = "";

  switch (color) {
    case "Red":
      botResponse = `${userName}, here’s my pick for you: "${songSuggestion.title}". I have a feeling this track will hit all the right notes for you!`;
      break;
    case "Green":
      botResponse = `${userName}, I think you’re going to fall in love with "${songSuggestion.title}". It’s the perfect match for you!`;
      break;
    case "Blue":
      botResponse = `${userName}, I’ve got the perfect song for you: "${songSuggestion.title}". I’m sure it’s going to be right up your alley!`;
      break;
    case "Yellow":
      botResponse = `${userName}, I’ve picked "${songSuggestion.title}" just for you. I have a hunch this song will strike a chord with you!`;
      break;
  }

  botMessage(botResponse).then(() => {
    // Embed the Spotify iframe after the suggestion
    setTimeout(() => {
      const spotifyEmbed = `
          <iframe style="border-radius:12px" src="${songSuggestion.spotifyUrl}" 
            width="100%" height="152" frameBorder="0" allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>
        `;

      // Inject the Spotify iframe into the chat
      chat.innerHTML += `
          <section class="message message--bot">
            <img src="assets/bot-avatar.png" alt="bot" />
            <div class="bubble-container bubble-container--bot">
              <div class="bubble bubble--bot">${spotifyEmbed}</div>
            </div>
          </section>
        `;

      chat.scrollTop = chat.scrollHeight; // Scroll to the bottom to show the embedded player
    }, GLOBAL_DELAY);
  });

  inputWrapper.remove(); // Remove the input area after song suggestion has loaded
};

/* **************************
  Event listeners
************************** */

// When user presses enter from the name input, run the handleNameInput function
nameInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleNameInput(event);
  }
});

// When user clicks the send button, run the handleNameInput function
sendButton.addEventListener("click", handleNameInput);

/* **************************
  Initialize converstion
************************** */

const greetUser = () => {
  botMessage(
    `Hey, I'm Harmoniqa. <br><br>
    I can’t wait to help you find the perfect song!
    But before we dive in, what’s your name?`
  );
};

greetUser();
