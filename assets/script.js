// DOM selectors
const chat = document.getElementById("chat");
const inputWrapper = document.querySelector(".input-wrapper");
const selectWrapper = document.querySelector(".select-wrapper");
const selectParagraph = document.querySelector(".select-paragraph");
const select = document.querySelector(".contact-options");
const contactOptions = document.querySelectorAll(".option");
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
    "Do you have a runny or stuffy nose?"
  ]
let psychologicalSymptoms =
  [
    "Are you feeling sad or depressed?",
    "Are you unable to cope with daily problems or stress?",
    "Are you experiencing anxiety?"
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

const showDropdown = () => {
  selectWrapper.innerHTML += `
  <select name="contactOptions" class="contact-options" id="contactOptions">
  <option class="option" value="chat">Select a contact option...</option>
    <option class="option" value="chat">By chat</option>
    <option class="option" value="phone">By phone</option>
    <option class="option" value="video">By video call</option>
  </select>
 `
}

const displaySelectWrapper = () => selectWrapper.style.display = 'block';

const showParagraph = () => {
  selectParagraph.addEventListener('click', () => {
    showDropdown()
  })
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

const contactMethod = () => {
  showMessage('Thank you for your information, How would you prefer to be contacted?', 'bot');
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
  buttonOne.innerHTML === "Physical" ? buttonOne.value = "first" : buttonTwo.value = "second";
})

bothButtons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    switch (count) {
      case 1: 
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
      break;

      case 2: 
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
      break;

      case 3: 
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
      break;

      case 4: 
      showMessage(`${button.innerHTML}`, "user")
      hideButtons();
      setTimeout(contactMethod, 1000);
      setTimeout(displaySelectWrapper, 1000)
      showParagraph()
    }
  })
})

// setTimeout(greeting, 1000)
setTimeout(greeting, 100)
