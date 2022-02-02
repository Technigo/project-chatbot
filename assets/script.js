// DOM selectors
const chat = document.getElementById("chat");
const inputWrapper = document.querySelector(".input-wrapper");
const bothButtons = document.querySelectorAll(".button");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");

const myDate = new Date();
const hours = myDate.getHours();
let greet;

if (hours < 12) {
  greet = "Good Morning",
  timeOfDay = "Morning"
} else if (hours >= 12 && hours <= 17) {
  greet = "Good Afternoon",
  timeOfDay = "Afternoon"
} else if (hours >= 17 && hours <= 24) {
  greet = "Good Evening",
  timeOfDay = "Evening"
} else {
  greet = "Hello"
}

// Global variables
let count = 0;
let physicalSymptoms =
  [
    "Do you have a cough?",
    "Do you have a fever?",
    "Do you have a runny or stuffy nose?",
    "Okay, thank you for your information, let me connect you with a doctor...",
    `Thank you for using Medibot, I am connecting you with a doctor now. Have a nice ${timeOfDay}!`
  ]
let psychologicalSymptoms =
  [
    "Are you feeling sad or depressed?",
    "Are you unable to cope with daily problems or stress?",
    "Are you experiencing anxiety?",
    "Okay, thank you for your information, let me connect you with a psychologist...",
    `Thank you for using Medibot, I am connecting you with a psychologist now. Have a nice ${timeOfDay}!`
  ]

const helpButtons = () => {
  bothButtons.forEach(button => {
    button.classList.add("button-active");
  })
  buttonOne.innerHTML = "Physical";
  buttonTwo.innerHTML = "Psychological";
  inputWrapper.style.display = "none";
  showMessage(`Hello ${userName}. What kind of help would you need today?`, "bot");
}

const yesNoButtons = () => {
  buttonOne.innerHTML = "yes";
  buttonTwo.innerHTML = "no";
}

const hideButtons = () => {
  buttonOne.style.display = "none";
  buttonTwo.style.display = "none";
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./assets/images/robot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight
}

const greeting = () => {
  showMessage(`${greet}, What's your name?`, 'bot')
}

// Eventlisteners 
form.addEventListener("submit", (event) => {
  event.preventDefault();
  userName = document.querySelector("#input").value;
  if (userName.length === 0 || !userName) {
    showMessage("Please provide your name", "bot");
  } else {
    showMessage(userName, "user");
    setTimeout(helpButtons, 1000);
  }
})

buttonOne.addEventListener("click", () => {
  if (buttonOne.innerHTML === "Physical") {
    return buttonOne.value = "first"
  }
  return buttonTwo.value = "second"
})

bothButtons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    if (count === 1) {
      showMessage(`${button.innerHTML}`, "user");
      if (buttonOne.value === "first") {
        const cough = () => showMessage(physicalSymptoms[0], "bot");
        setTimeout(cough, 2000);
        setTimeout(yesNoButtons, 2000);
      } else {
        const sad = () => showMessage(psychologicalSymptoms[0], "bot");
        setTimeout(sad, 2000);
        setTimeout(yesNoButtons, 2000);
      }
    }
    if (count === 2) {
      showMessage(`${button.innerHTML}`, "user");
      if (buttonOne.value === "first") {
        const fever = () => showMessage(physicalSymptoms[1], "bot");
        setTimeout(fever, 2000);
        setTimeout(yesNoButtons, 2000);
      } else {
        const stress = () => showMessage(psychologicalSymptoms[1], "bot");
        setTimeout(stress, 2000);
        setTimeout(yesNoButtons, 2000);
      }
    }
    if (count === 3) {
      showMessage(`${button.innerHTML}`, "user")
      if (buttonOne.value === "first") {
        const runnyNose = () => showMessage(physicalSymptoms[2], "bot");
        setTimeout(runnyNose, 2000);
        setTimeout(yesNoButtons, 2000);
      } else {
        const mood = () => showMessage(psychologicalSymptoms[2], "bot");
        setTimeout(mood, 2000);
        setTimeout(yesNoButtons, 2000);
      }
    }
    if (count === 4) {
      showMessage(`${button.innerHTML}`, "user")
      if (buttonOne.value === "first") {
        const closing1 = () => showMessage(physicalSymptoms[3], "bot");
        const closing2 = () => showMessage(physicalSymptoms[4], "bot");
        setTimeout(closing1, 2000);
        setTimeout(closing2, 4000);
        hideButtons()
      } else {
        const closing1 = () => showMessage(psychologicalSymptoms[3], "bot");
        const closing2 = () => showMessage(psychologicalSymptoms[4], "bot");
        setTimeout(closing1, 2000);
        setTimeout(closing2, 4000);
        hideButtons()
      }
    }
  })
})

setTimeout(greeting, 1000)
