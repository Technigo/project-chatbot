// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputForm = document.getElementById("input-form");
const userInput = document.getElementById("user-input");
const inputWrapper = document.getElementById("input-wrapper");

// Starts the counter of what number of question to ask the user at 1
let questionNumber = 1;

// Variable that stores the data we get from the user to be able to present it back to the user
let answers = {
  name: "",
  day: "",
  time: "",
  people: "",
  phonenr: "",
  email: "",
};

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

// This function handles the order in which the questions are asked
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

// Functions containing the messages from bot send as well as the choices presented to the user

const botGreetsUserAndAsksName = () => {
  showBotMessage(
    "Hello there! I'm Tablebooker, your friendly table booking bot 😊"
  );
  showBotMessage("May I have your name, please?");
  inputForm.addEventListener("submit", handleUserName);
};

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
  showBotMessage("What time shall we have it ready for?");
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
  showBotMessage("How many will you be?");
  inputWrapper.innerHTML = `
      <select id="peopleChoice" class="selectChoice">
        <option value="" selected disabled>Select amount of people</option>
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
  showBotMessage(
    "Okay. Now, I will just need a phone number for the booking 🙂"
  );
  inputWrapper.innerHTML = `
        <form id="phone">
          <input id="phoneInput" type="tel" />
          <button class="send-btn" type="submit">Send</button>
        </form>
        `;
  phone.addEventListener("submit", handleUserPhonenr);
};

const botAskWhatEmail = () => {
  showBotMessage("Thank you! And lastly, an email address as well, please.");
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
    `Fantastic ${answers.name}! Let me just double check that I have got everything down right.`
  );
  showBotMessage(
    `You would like to book a table for ${answers.people} ${answers.day} at ${answers.time} under the name ${answers.name}, and your contact information is ${answers.phonenr} and ${answers.email}?`
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

// Functions handling the data received from the user

const handleUserName = () => {
  const userMessage = userInput.value;
  showUserMessage(userMessage);
  answers.name = userMessage;
  userInput.value = "";

  if (userMessage === "") {
    showBotMessage("Sorry, I didn't quite catch that 😳");
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
      `Your booking is now confirmed. Thank you! We are looking forward to seeing you ${answers.day} 😊`
    );
    inputWrapper.innerHTML = ` `;
  } else {
    showUserMessage("No");
    showBotMessage("Okay, no problem! Let's start from the beginning.");
    location.reload();
  }
};

// Sets load time for first bot message

setTimeout(nextQuestion, 700);
