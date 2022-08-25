// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const input = document.getElementById("user-input");
const form = document.getElementById("workout-form");
const inputWrapper = document.getElementById("input-wrapper"); // this connects the js with the element in the html.

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

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
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, I'm your personal trainer bot.", "bot");
};

const ageQuestion = () => {
  showMessage("Firstly, how old are you?", "bot");
};

const showAgeInput = (event) => {
  event.preventDefault();
  const ageInput = input.value; //input value will be stored in the variable
  showMessage(ageInput, "user");
  input.value = ""; // clear text field from the input
  setTimeout(() => musclegroupQuestion(ageInput), 1000);
};
/* 
const handleAgeInput = (ageInput) => {
  let age2 = boolean;
  age2 = ageInput;
  if (age2 < 16) {
    return true;
  } else {
    return false;
  }
};
console.log(age2); */

/* 
function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
} */

const musclegroupQuestion = (ageInput) => {
  showMessage(
    `That's great! You are ${ageInput}. What muscle group would you like to focus on today?`,
    "bot"
  );
  inputWrapper.innerHTML = `
    <button id="lowerBtn">Lower body</button>
    <button id="upperBtn">Upper body</button>
  `;
  document
    .getElementById("lowerBtn")
    .addEventListener("click", () => lowerAnswer("lowerbody"));
  document
    .getElementById("upperBtn")
    .addEventListener("click", () => upperAnswer("upperbody"));
};

let link1 = "https://www.google.se";
let link2 = "https://www.google.com";

/* var a = document.createElement('a');
var linkText = document.createTextNode("my title text");
a.appendChild(linkText);
a.title = "my title text";
a.href = "http://example.com";
document.body.appendChild(a); */

const lowerAnswer = (link1) => {
  showMessage(
    `Lower body, how fun! Here's a link to a workout you might like:  ${link1} `,
    "bot"
  );
};

const upperAnswer = (link2) => {
  showMessage(
    `Upper body, how fun! Here's a link to a workout you might like: ${link2} `,
    "bot"
  );
};

// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.

//setTimeout(() => showFoodOptions(name), 1000);

// Set up your eventlisteners here

form.addEventListener("submit", showAgeInput);

// setTimeout(functionName, timeToWaitInMilliSeconds)
setTimeout(greeting, 1000);
setTimeout(ageQuestion, 2000);
