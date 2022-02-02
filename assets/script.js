// DOM selectors
const chat = document.getElementById("chat");
const inputWrapper = document.querySelector(".input-wrapper");
const selectWrapper = document.querySelector(".select-wrapper");
const buttonWrapper = document.querySelector(".button-wrapper");
const bothButtons = document.querySelectorAll(".button");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");

const myDate = new Date();
const hours = myDate.getHours();
let greet;

if (hours < 12) greet = "Good Morning";
else if (hours >= 12 && hours <= 17) greet = "Good Afternoon";
else if (hours >= 17 && hours <= 24) greet = "Good Evening";
else greet = "Hello";

// Global variables
let count = 0;
let contactChoice;
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
  selectWrapper.style.background = "none"
  selectWrapper.innerHTML = `
  <select name="contactOptions" class="contact-options" id="contactOptions">
  <option class="option" value="">Select a contact option...</option>
    <option class="option" value="chat">By chat</option>
    <option class="option" value="phone">By phone</option>
    <option class="option" value="video">By video call</option>
  </select>
 `
}

const displaySelectWrapper = () => selectWrapper.style.display = 'block';

const closingMessages = () => {
  selectWrapper.addEventListener("change", (event) => {
    contactChoice = event.target.value;
    showMessage(`${event.target.value}`, "user")
    selectWrapper.style.display = "none"
    let closingMessage =
      [
        `You have chosen to be contacted by ${contactChoice}, let me connect you with a practictioner...`,
        `Thank you for using Medibot, I am connecting you with a practictioner now, This page will reload in 10 seconds`
      ]
    showMessage(closingMessage[0], "bot")
    setTimeout(() => {
      showMessage(closingMessage[1], "bot")
    }, 1000);
    setTimeout(() => {
      location.reload()
    }, 10000);
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
  showMessage('How would you prefer to be contacted?', 'bot');
  buttonWrapper.style.display = "none"
  chat.scrollTop = chat.scrollHeight
  showDropdown()
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
    }
  })
})

setTimeout(greeting, 1000);
closingMessages();