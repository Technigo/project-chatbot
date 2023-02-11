// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameForm = document.getElementById("name-form");
const input = document.getElementById("input");
const button = document.getElementById("send-btn");

/* This is the changeable variable for in which order the questions come,
so that the conversation runs consecutively (questionNumber = 1; first, 
then QuestionNumber++ (2) follows it, then ++ again (3), and so on). 
It's not a global variable, as it has the keyword "let". */
let questionNumber = 1;

// Declare your functions after this comment!

/*These functions are shortcuts for the showMessage function which specifies
if it's the user or the bot talking. That way you can just invoke
the function botReply or userReply and not have to go the whole showMessage ("user")-route. */
const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  /* the if statement checks if the sender is 'user' and if that's the case it inserts the
  following html senction inside the chat with the posted message: */
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    /* The else if statement checks if the sender is a bot and if that's
    the case it inserts this html senction inside the chat with the posted message, so that the 
    chat bubble is to the left. */
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
  /* This little thing makes the chat scroll to the last message 
  when there are too many to be shown in the chat box*/
  chat.scrollTop = chat.scrollHeight;
};

const nextQuestion = (message) => {
  console.log("questionNumber", questionNumber);
  event.preventDefault();
  if (questionNumber === 1) {
    userReply(`${message}!!!!`);
    input.value = "";
    setTimeout(() => whichDestination(message), 600);
  } else if (questionNumber === 2) {
    userReply(message);
    setTimeout(() => meansOftravel(message), 600);
  } else if (questionNumber === 3) {
    userReply(message);
    setTimeout(() => lifeInsurance(message), 600);
  } else if (questionNumber === 4) {
    userReply(message);
    setTimeout(() => showPrice(message), 600);
  } else {
    userReply(message);
    setTimeout(thankYou, 600);
  }
};

// The conversation starts here!

const greetUser = () => {
  questionNumber = 1;
  console.log(
    "This is the bot's first greeting. It asks the user for their name."
  );
  botReply("Hello there traveller, what's your name?");
};

// This is the bot's first question, after the user has given their name:

const whichDestination = (username) => {
  questionNumber++;
  console.log("The bot logs the user's name and asks its first question");
  botReply(
    `Alright ${username}, just relax. I'm TravelBot, your friendly travel planner! 
    Where are you planning your next vacation?`
  );
  inputWrapper.innerHTML = ` 
  <button class="kyrgyzstan-btn" id="kyrgyzstan-btn">Kyrgyzstan</button> 
  <button class="sentinel-btn" id="sentinel-btn">North Sentinel Island</button> 
  <button class="dmz-btn" id="dmz-btn">The Korean Demilitarized Zone</button>
  `;
  document
    .getElementById("kyrgyzstan-btn")
    .addEventListener("click", () => nextQuestion("Kyrgyzstan"));
  document
    .getElementById("sentinel-btn")
    .addEventListener("click", () => nextQuestion("North Sentinel Island"));
  document
    .getElementById("dmz-btn")
    .addEventListener("click", () =>
      nextQuestion("The Korean Demilitarized Zone")
    );
};

const meansOftravel = (travelplace) => {
  questionNumber++;
  botReply(
    `Ah, ${travelplace}... I hear it's lovely this time of year. How would you like to get there?`
  );

  if (travelplace === "Kyrgyzstan") {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select means of travel below...</option>
        <option value="Aboard a cargo ship">Aboard a cargo ship</option>
        <option value="Human cannonball-style">Human cannonball-style</option>
        <option value="By foot">By foot</option>
        <option value="In a hot air balloon">In a hot air balloon</option>
      </select>
    `;
  } else if (travelplace === "North Sentinel Island") {
    inputWrapper.innerHTML = `
    <select id="select">
    <option value="" selected disabled>👇 Select means of travel below...</option>
    <option value="Aboard a cargo ship">Aboard a cargo ship</option>
    <option value="Human cannonball-style">Human cannonball-style</option>
    <option value="By foot">By foot</option>
    <option value="In a hot air balloon">In a hot air balloon</option>
  </select>
    `;
  } else if (travelplace === "The Korean Demilitarized Zone") {
    inputWrapper.innerHTML = `
    <select id="select">
    <option value="" selected disabled>👇 Select means of travel below...</option>
    <option value="Aboard a cargo ship">Aboard a cargo ship</option>
    <option value="Human cannonball-style">Human cannonball-style</option>
    <option value="By foot">By foot</option>
    <option value="In a hot air balloon">In a hot air balloon</option>
  </select>
    `;
  }
  const select = document.getElementById("select");
  select.addEventListener("change", () => nextQuestion(select.value));
};

const lifeInsurance = (waytotravel) => {
  questionNumber++;
  botReply(
    `${waytotravel}? That's kinda weird but ok... have you updated your will and life insurance?`
  );
  inputWrapper.innerHTML = `
    <button id="yes">Yes</button>
    <button id="no">No</button>
  `;
  document
    .getElementById("adult")
    .addEventListener("click", () => nextQuestion("adult"));
  document
    .getElementById("child")
    .addEventListener("click", () => nextQuestion("child"));
};

const showPrice = (size) => {
  questionNumber++;

  let price;
  if (size === "adult") {
    price = "€15";
  } else {
    price = "€10";
  }

  botReply(
    `One ${size} sized dish will be prepared for you. That'll be ${price}. Are you sure you want to order this?`
  );

  inputWrapper.innerHTML = `
    <button id="restart">NO</button>
    <button id="confirm">YES</button>
  `;

  document.getElementById("restart").addEventListener("click", () => {
    location.reload();
    return false;
  });
  document
    .getElementById("confirm")
    .addEventListener("click", () => nextQuestion("Yep!"));
};

const thankYou = () => {
  botReply(
    `Then everything seems to be in order! That'll be four million euros. I only accept cash. "Safe" Travels!`
  );
  inputWrapper.innerHTML = ``;
};

// Set up your eventlisteners here

// This is an event listener that logs the name that the user writes in the input form at
// the beginning of the convo, and then shows it in the user's reply bubble. It also gives the bot's
// next question (with the user's name in it). The function for that is above.
button.addEventListener("click", () => nextQuestion(input.value));
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && input.value) nextQuestion(input.value);
});
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 600);
