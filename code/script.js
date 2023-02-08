// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const startButton = document.getElementById("start-btn");
const textInput = document.getElementById("text-input");
const sendButton = document.getElementById("send-btn");
const inputWrapper = document.getElementById("input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:
let questionIndex = 1;
let userName = "";
let mood = "";
let drink = "";

// Declare your functions after this comment
const botReply = (message) => {
  showMessage(message, "bot");
};

const userReply = (message) => {
  showMessage(message, "user");
};

const stepThroughQuestions = (message) => {
  if (questionIndex == 1) {
    userReply(message);
    userName = message;
    textInput.value = "";
    setTimeout(showButtons, 1000);
  } else if (questionIndex == 2) {
    userReply(
      `I'm feeling ${message == "good" ? "real good" : "a little off"}!`
    );
    mood = message;
    setTimeout(askForSomething, 1000);
  } else if (questionIndex == 3) {
    userReply(`I'll have a ${message}, thanks!`);
    setTimeout(anythingElse, 1000);
  } else if (questionIndex == 4) {
    userReply(message);
    setTimeout(offerVideo, 1000);
  }
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
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
  nextQuestion = "showButtons";
  botReply("Hello there! My name is EdBot. What should I call you?");
};

const showButtons = () => {
  questionIndex++;
  botReply(`Hello ${userName}! How are you?`);
  inputWrapper.innerHTML = `
  <button id="goodBtn" type="submit">Good</button>
  <button id="badBtn" type="submit">Bad</button>
`;

  document.getElementById("goodBtn").addEventListener("click", () => {
    stepThroughQuestions("good");
  });

  document.getElementById("badBtn").addEventListener("click", () => {
    stepThroughQuestions("bad");
  });
};

const askForSomething = () => {
  questionIndex++;
  botReply(`${mood == "good" ? "Great" : "Sorry"} to hear that, ${userName}!`);
  setTimeout(() => botReply("Do you want something to drink?"), 500);
  inputWrapper.innerHTML = `
  <button id="beerBtn" type="submit">a perfectly poured hazy NEIPA</button>
  <button id="waterBtn" type="submit">a glass of cold tap water</button>
`;

  document.getElementById("beerBtn").addEventListener("click", () => {
    drink = "beer";
    stepThroughQuestions("a perfectly poured hazy NEIPA");
  });

  document.getElementById("waterBtn").addEventListener("click", () => {
    drink = "water";
    stepThroughQuestions("a glass of cold tap water");
  });
};

const anythingElse = () => {
  questionIndex++;
  botReply(`Here's your drink, ${userName}!`);
  setTimeout(
    () => botReply("Can I interest you in a curated YouTube-video?"),
    500
  );
  inputWrapper.innerHTML = `
  <button id="yesBtn" type="submit">That would be lovely!</button>
  <button id="noBtn" type="submit">No thanks, I'm good!</button>
`;

  document.getElementById("yesBtn").addEventListener("click", () => {
    stepThroughQuestions("That would be lovely!");
  });

  document.getElementById("noBtn").addEventListener("click", () => {
    stepThroughQuestions("No thanks, I'm good!");
  });
};

const offerVideo = () => {
  botReply(
    `Let me find you a video which goes well with ${
      drink == "beer" ? "hazy NEIPAs" : "cold water"
    } and ${mood == "good" ? "happy" : "sad"} days!`
  );
  mood = "good"
    ? botReply("https://www.youtube.com/watch?v=Ofq_nl366VM")
    : botReply("https://www.youtube.com/watch?v=CC4I65VIoeE");
};

sendButton.addEventListener("click", () =>
  stepThroughQuestions(textInput.value)
);
textInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && textInput.value)
    stepThroughQuestions(textInput.value);
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
