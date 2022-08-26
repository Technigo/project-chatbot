// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputForm = document.getElementById("input-form");
const userInput = document.getElementById("user-input");
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
        <i class="fa-solid fa-user"></i>  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    console.log("Bot saying this:", message);
    chat.innerHTML += `
      <section class="bot-msg">
      <i class="fa-solid fa-shrimp"></i>
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
  }, 600);
};

const showUserMessage = (message) => {
  setTimeout(() => {
    showMessage(message, "user");
  }, 600);
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

  questionNumber++;
};

// Starts here
const botGreetsUserAndAsksName = () => {
  showBotMessage(
    "Hello there! I'm Tablebooker, your friendly table booking bot 😊"
  );
  showBotMessage("May I have your name please?");
};

//Here we call the next question about what day they would like to visit
const botAskWhichDay = () => {
  showBotMessage(
    `Okay ${answers.name}, which day would you like to book a table for?`
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
    <select id="timeChoice" class="selectChoice">
        <option value="" selected disabled>Select a time</option>
        <option value="5 p.m.">5 p.m.</option>
        <option value="6 p.m.">6 p.m.</option>
        <option value="7 p.m.">7 p.m.</option>
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
      <select id="peopleChoice" class="selectChoice">
        <option value="" selected disabled>Select how many people?</option>
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
  showBotMessage("I'll need a phone number for the booking, please 🙂");
  inputWrapper.innerHTML = `
        <form id="phone">
          <input id="phoneInput" type="tel" />
          <button class="send-btn" type="submit">Send</button>
        </form>
        `;
  phone.addEventListener("submit", handleUserPhonenr);
};

const botAskWhatEmail = () => {
  showBotMessage("And an email address as well.");
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
    `Fantastic ${answers.name}! Let me just double check I've got everything down right.`
  );
  showBotMessage(
    `You'd like to book a table for ${answers.people} ${answers.day} at ${answers.time} under the name ${answers.name}, and your contact information is ${answers.phonenr} and ${answers.email}?`
  );
  showBotMessage(`Is this correct?`);
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

const handleUserInput = () => {
  const userMessage = userInput.value;
  showUserMessage(userMessage);
  answers.name = userMessage;
  userInput.value = "";

  if (userMessage === "") {
    showBotMessage("Sorry, I didn't get that");
    return;
  }

  nextQuestion();
};

const daySelection = (dayChoice) => {
  answers.day = dayChoice;
  showUserMessage(dayChoice);
  nextQuestion();
};

const timeSelection = () => {
  const time = timeChoice.value;
  showUserMessage(time);
  answers.time = time;
  nextQuestion();
};

const peopleSelection = () => {
  const people = peopleChoice.value;
  showUserMessage(people);
  answers.people = people;
  nextQuestion();
};

const handleUserPhonenr = () => {
  const userPhoneNr = phoneInput.value;
  showUserMessage(userPhoneNr);
  answers.phonenr = userPhoneNr;
  phoneInput.value = "";
  nextQuestion();
};

const handleUserEmail = () => {
  const userEmail = emailInput.value;
  showUserMessage(userEmail);
  answers.email = userEmail;
  emailInput.value = "";
  nextQuestion();
};

const bookingConfirmation = (confirmationChoice) => {
  if (confirmationChoice === "yes") {
    showUserMessage("Yes");
    showBotMessage(
      `Your booking is confirmed. Thank you, we are looking forward seeing you ${answers.day}! :)`
    );
    inputWrapper.innerHTML = ` `;
  } else {
    showUserMessage("No");
    showBotMessage("Ok, no problem! Let's start from the beginning.");
    location.reload();
  }
};

// EventListener for form. Listening for a submit when the user have added something in the form.

inputForm.addEventListener("submit", handleUserInput);

// Sets load time for first bot message

setTimeout(nextQuestion, 600);
