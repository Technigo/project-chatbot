// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");

// If you need any global variables that you can use across different functions, declare them here:

let questionNumber = 1;

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === "user") {
    console.log("User saying this:", message);
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
    console.log("Bot saying this:", message);
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

const showBotMessage = (message) => {
  setTimeout(() => {
    showMessage(message, "bot");
  }, 300);
};

const nextQuestion = () => {
  if (questionNumber === 1) {
    botGreetsUserAndAsksName();
  } else if (questionNumber === 2) {
    botAskWhichDay();
  } else if (questionNumber === 3) {
    botAskWhatTime();
  } else if (questionNumber === 4) {
    botAskHowManyPeople();
  } else if (questionNumber === 5) {
    botAskWhatPhoneNumber();
  }

  if (questionNumber > 10) {
    showMessage("Oh, you're talkative aren't you...", "bot");
  }

  questionNumber++;
};

// Starts here
const botGreetsUserAndAsksName = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showBotMessage("Hello there, What's your name?");
  // Just to check it out, change 'bot' to 'user' here 👆
};

//function asking about what day
const botAskWhichDay = () => {
  //Here we call the next question about what day they would like to visit
  //  When do you want to book for?
  //  Today
  //  Tomorrow
  showBotMessage("What day would like to book your table?");
  // @TODO show today/tomorrow button picker UI for user
};

//function asking about what time of the day
const botAskWhatTime = () => {
  //Here we call the next question about what day they would like to visit
  // What time?
  //  - 5pm
  //  - 6pm
  //  - 7pm
  showBotMessage("For what TIME would like to book your table?");
  // @TODO show list of available time for user
};

const botAskHowManyPeople = () => {
  // How many people? (Buttons)
  //   - 2
  //   - 3
  //   - 4
  showBotMessage("How many people?");
  // @TODO show 2-3-4 button picker UI for user
};

const botAskWhatPhoneNumber = () => {
  showBotMessage("I'll need a phone number for the booking, please.");
};

//function handling the user input
const handleUserInput = (event) => {
  console.log(nameInput);
  let userMessage = nameInput.value;
  //console.log(userMessage);

  showMessage(userMessage, "user");
  nameInput.value = "";

  // if (userMessage === "") {
  //   showMessage("Sorry, I didnt get that", "bot");
  //   return;
  // }
  nextQuestion();
};

// Set up your eventlisteners here

nameForm.addEventListener("submit", handleUserInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(nextQuestion, 600);
