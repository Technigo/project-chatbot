// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:

let questionNumber = 1;

let answers = {
  //Global. Object with properties to store data. Can use it both to reference previous answers as well as a summary at the end
  name: "",
  day: "",
  time: "",
  people: "",
  phonenr: "",
  email: "",
};

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
  } else if (questionNumber === 6) {
    botAskWhatEmail();
  } else if (questionNumber === 7) {
    botAskForConfirmation();
  }

  if (questionNumber > 10) {
    showMessage("Oh, you're talkative aren't you...", "bot");
  }

  questionNumber++;
};

// Starts here
const botGreetsUserAndAsksName = () => {
  showBotMessage("Hello, what's your name?");
};

const botAskWhichDay = () => {
  //Here we call the next question about what day they would like to visit
  //  When do you want to book for?
  //  Today
  //  Tomorrow

  //console.log("userMessage", userMessage);

  showBotMessage(
    `Ok ${answers.name} Which day would you like to book a table for?`
  );
  inputWrapper.innerHTML = `
    <button class="send-btn" id="today" type="submit">Today</button>
    <button class="send-btn" id="tomorrow" type="submit">Tomorrow</button>
    `;

  document
    .getElementById("today")
    .addEventListener("click", () => daySelection("today"));
  document
    .getElementById("tomorrow")
    .addEventListener("click", () => daySelection("tomorrow"));
};

const botAskWhatTime = () => {
  showBotMessage("For what time would like to book your table?");
  inputWrapper.innerHTML = `
    <select id="timeChoice">
        <option value="" selected disabled>Select a time</option>
        <option value="5pm">5pm</option>
        <option value="6pm">6pm</option>
        <option value="7pm">7pm</option>
      </select>
      <button class="send-btn" id="time" type="submit">OK</button>
    `;
  document
    .getElementById("time")
    .addEventListener("click", () => timeSelection(timeChoice.value));
};

const botAskHowManyPeople = () => {
  showBotMessage("How many people?");
  inputWrapper.innerHTML = `
      <select id="peopleChoice">
        <option value="" selected disabled>How many people?</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button class="send-btn" id="people" type="submit">OK</button>
    `;
  document
    .getElementById("people")
    .addEventListener("click", () => peopleSelection(people.value));
};

const botAskWhatPhoneNumber = () => {
  showBotMessage("I'll need a phone number for the booking, please.");
  inputWrapper.innerHTML = `
        <form id="phone">
          <input id="phoneInput" type="tel" />
          <button class="send-btn" type="submit">Send</button>
        </form>
        `;
  phone.addEventListener("submit", handleUserPhonenr);
};

const botAskWhatEmail = () => {
  showBotMessage("And an email address as well :)");
  inputWrapper.innerHTML = `
        <form id="email">
          <input id="emailInput" type="email" />
          <button class="send-btn" type="submit">Send</button>
        </form>
        `;
  email.addEventListener("submit", handleUserEmail);
};

const botAskForConfirmation = () => {
  showBotMessage(
    "Fantastic, thank you. Let me just double check I've got everything right before I confirm your booking: you'd like to book a table for INSERTAMOUNTOFPEOPLE on INSERTDAY at INSERTTIME, is this correct?"
  );
  //TODO show Y/N button IU for user which leads to either last bot "question" aka booking confirmed message, or to bot saying "Ok, sorry for that, let's start over" and then reload page (??)
  inputWrapper.innerHTML = `
  <button class="send-btn" id="yes" type="submit">Yes, confirm booking</button>
  <button class="send-btn" id="no" type="submit">No, start over</button>
  `;

  document
    .getElementById("yes")
    .addEventListener("click", () => bookingConfirmation("yes"));
  document
    .getElementById("no")
    .addEventListener("click", () => bookingConfirmation("no"));
};

const handleUserInput = (event) => {
  event.preventDefault();
  const userMessage = nameInput.value;
  showMessage(userMessage, "user");
  answers.name = userMessage;
  nameInput.value = "";

  if (userMessage === "") {
    showMessage("Sorry, I didn't get that", "bot");
    return;
  }

  nextQuestion();
};

const daySelection = (dayChoice) => {
  //if (dayChoice === "today") {
  answers.day = dayChoice;
  showMessage(dayChoice, "user");
  //botAskWhatTime();
  nextQuestion();
  // }
};

const timeSelection = (event) => {
  const time = timeChoice.value;
  showMessage(time, "user");
  answers.time = time;
  nextQuestion();
  console.log(time);
};

const peopleSelection = (event) => {
  const people = peopleChoice.value;
  showMessage(people, "user");
  answers.people = people;
  nextQuestion();
  console.log(people);
};

const handleUserPhonenr = (event) => {
  event.preventDefault();
  const userPhoneNr = phoneInput.value;
  showMessage(userPhoneNr, "user");
  answers.phonenr = userPhoneNr;
  phoneInput.value = "";
  nextQuestion();
};

const handleUserEmail = (event) => {
  event.preventDefault();
  const userEmail = emailInput.value;
  showMessage(userEmail, "user");
  answers.email = userEmail;
  emailInput.value = "";
  nextQuestion();
};

const bookingConfirmation = (confirmationChoice) => {
  if (confirmationChoice === "yes") {
    showMessage("Yes", "user");
  } else {
    showMessage("No", "user");
  }
  //botAskWhatTime();
  nextQuestion();
  // }
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
