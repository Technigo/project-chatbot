// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="chat__user-msg">
        <div class="chat__bubble chat__user-msg__user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    console.log(chat.innerHTML);
    chat.innerHTML += `
      <section class="chat__bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="chat__bubble chat__bot-msg__bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const sendBotMessage = (message) => {
  setTimeout(showMessage(message, "bot"), 1000);
};

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
});

const sendUserMessageName = () => {
  const message = document.getElementById("textInput"); //visar på id, inte värdet
  showMessage(message.value, `user`);

  sendBotMessage(
    `Hi ${message.value}, what cleaning service do you want us to provide for you?`
  );
  // message.value = "";

  const submitContainer = document.getElementById("submitNameContainer");
  submitContainer.classList.add("hidden");

  const cleanBtnsContainer = document.getElementById("cleanBtnsContainer");
  cleanBtnsContainer.classList.add("active");
};

const submitNameBtn = document.getElementById("submitNameBtn");
submitNameBtn.addEventListener("click", sendUserMessageName);

document.getElementById("textInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendUserMessageName();
  }
});

sendBotMessage("Hi, my name is Bob. What's your name?");

// -------------------WEEKLY CLEANING BUTTON------------------------------

const weeklyCleaningBtn = document.getElementById("weeklyCleaning");
weeklyCleaningBtn.addEventListener(`click`, () => {
  showMessage(`Weekly cleaning`, `user`);
  sendBotMessage(
    `Excellent! How many times a month do you want us to clean your home?`
  );

  const cleanBtnsContainer = document.getElementById("cleanBtnsContainer");
  cleanBtnsContainer.classList.remove("active");

  const submitTimesCleaningContainer = document.getElementById(
    "submitTimesCleaningContainer"
  );
  submitTimesCleaningContainer.classList.add("active");
});

const sendUserMessageTimesMonthBtn = () => {
  const message = document.getElementById("submitTimesCleaningInput");
  showMessage(message.value, `user`);

  sendBotMessage(
    `Perfect, we will clean ${
      message.value
    } times a month. That will cost approximately ${
      100 * message.value
    } dollars a month.`
  );

  message.value = "";
};

const submitTimesCleaningBtn = document.getElementById(
  "submitTimesCleaningBtn"
);
submitTimesCleaningBtn.addEventListener("click", sendUserMessageTimesMonthBtn);

document
  .getElementById("submitTimesCleaningInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendUserMessageTimesMonthBtn();
    }
  });

// -------------------MOVE OUT CLEANING------------------------------

const moveOutCleaningBtn = document.getElementById("moveOutCleaning");
moveOutCleaningBtn.addEventListener(`click`, () => {
  showMessage(`Move-out cleaning`, `user`);
  sendBotMessage(`How many square meters is your home?`);

  const cleanBtnsContainer = document.getElementById("cleanBtnsContainer");
  cleanBtnsContainer.classList.remove("active");

  const submitTimesCleaningContainer = document.getElementById(
    "submitTimesCleaningContainer"
  );
  submitTimesCleaningContainer.classList.remove("active");

  const submitSquareMetersContainer = document.getElementById(
    "submitSquareMetersContainer"
  );
  submitSquareMetersContainer.classList.add("active");
});

const sendUserMessageSquareMetersBtn = () => {
  const message = document.getElementById("submitSquareMetersInput");
  showMessage(message.value, `user`);

  sendBotMessage(
    `Super, we have registered that your home is ${message.value} square meters. We will contact you with an offer you can't refuse!`
  );

  message.value = "";
};

const submitSquareMetersBtn = document.getElementById("submitSquareMetersBtn");
submitSquareMetersBtn.addEventListener("click", sendUserMessageSquareMetersBtn);

document
  .getElementById("submitSquareMetersInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendUserMessageSquareMetersBtn();
    }
  });

// ----------------------------------------Window Cleaning --------------------------------------------

// const weeklyCleaningBtn = document.getElementById("weeklyCleaning");
// weeklyCleaningBtn.addEventListener(`click`, () => {
//   showMessage(`Weekly cleaning`, `user`);
//   sendBotMessage(
//     `Excellent! How many times a month do you want us to clean your home?`
//   );

//   const cleanBtnsContainer = document.getElementById("cleanBtnsContainer");
//   cleanBtnsContainer.classList.remove("active");

//   const submitTimesCleaningContainer = document.getElementById(
//     "submitTimesCleaningContainer"
//   );
//   submitTimesCleaningContainer.classList.add("active");
// });

// const sendUserMessageTimesMonthBtn = () => {
//   const message = document.getElementById("submitTimesCleaningInput");
//   showMessage(message.value, `user`);

//   sendBotMessage(
//     `Perfect, we will clean ${
//       message.value
//     } times a month. That will cost approximately ${
//       100 * message.value
//     } dollars a month.`
//   );

//   message.value = "";
// };

// const submitTimesCleaningBtn = document.getElementById(
//   "submitTimesCleaningBtn"
// );
// submitTimesCleaningBtn.addEventListener("click", sendUserMessageTimesMonthBtn);

// document
//   .getElementById("submitTimesCleaningInput")
//   .addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       sendUserMessageTimesMonthBtn();
//     }
//   });

// v;
// const moveOutCleaningBtn = document.getElementById("moveOutCleaning");
// moveOutCleaningBtn.addEventListener(`click`, () => {
//   showMessage(`Move-out cleaning`, `user`);
//   sendBotMessage(`How many square meters is your home?`);

//   const cleanBtnsContainer = document.getElementById("cleanBtnsContainer");
//   cleanBtnsContainer.classList.remove("active");

//   const submitTimesCleaningContainer = document.getElementById(
//     "submitTimesCleaningContainer"
//   );
//   submitTimesCleaningContainer.classList.remove("active");

//   const submitSquareMetersContainer = document.getElementById(
//     "submitSquareMetersContainer"
//   );
//   submitSquareMetersContainer.classList.add("active");
// });

// const sendUserMessageSquareMetersBtn = () => {
//   const message = document.getElementById("submitSquareMetersInput");
//   showMessage(message.value, `user`);

//   sendBotMessage(
//     `Super, we have registered that your home is ${message.value} square meters. We will contact you with an offer you can't refuse!`
//   );

//   message.value = "";
// };

// const submitSquareMetersBtn = document.getElementById("submitSquareMetersBtn");
// submitSquareMetersBtn.addEventListener("click", sendUserMessageSquareMetersBtn);

// document
//   .getElementById("submitSquareMetersInput")
//   .addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       sendUserMessageSquareMetersBtn();
//     }
//   });
