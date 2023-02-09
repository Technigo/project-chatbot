// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const button = document.getElementById("send-btn");

// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1;

// Declare your functions after this comment
// These functions are shortcuts for the showMessage function which specifies
// if it's the user or the bot talking. That way you can just invoke
// the function botReply or userReply and not have to go the whole showMessage ("user")
const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an
  // html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // The else if statement checks if the sender is a bot and if that's
    // the case it inserts an html senction inside the chat with the posted message
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
  // This little thing makes the chat scroll to the last message when there are
  // too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here

const greetUser = () => {
  // here we call the function showMessage, that we declared earlier, with the argument
  //"Hello there, What's your name?" for message, and the argument "bot" for sender
  console.log(
    "This is the bot's first greeting. It asks the user for their name."
  );
  showMessage("Hello there traveller, what's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

// This is the bot's first question
const firstQuestion = (userName) => {
  console.log("The bot logs the user's name and asks its first question");
  botReply(
    `Hello ${userName}, I'm TravelBot, your friendly travel planner! 
    Where are you planning your next vacation?`
  );
};

// eftersom du bundit name till nameInput.value så kan du också använda name, konstit...
// name e ju ovanför i scope..... what?? fungera de??? Tydligen e name ett special ord
// som man int får använda

// Set up your eventlisteners here

// This is an event listener that logs the name that the user writes in the input form at
// the beginning of the convo, and then shows it in the user's reply bubble. It also gives the bot's
// next question (with the user's name in it). The function for that is above.
button.addEventListener("click", (event) => {
  console.log("The user writes their name");
  const userName = nameInput.value;
  event.preventDefault();
  userReply(userName);
  setTimeout(() => firstQuestion(userName), 600);
  nameInput.value = "";
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// Den här grejen gör de... du måst mata in funktionen som du vill ska kallas, o sätta ett kommatecken efter o sen tiden
setTimeout(greetUser, 600);
// hmmm
// funka de?
