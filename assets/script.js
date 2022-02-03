// DOM selectors
const chat = document.getElementById("chat");
const inputWrapper = document.querySelector(".input-wrapper");
const submitButton = document.querySelector("#submitButton");
const selectWrapper = document.querySelector(".select-wrapper");
const buttonWrapper = document.querySelector(".button-wrapper");
const bothButtons = document.querySelectorAll(".button");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");

const newDate = new Date();
let hours = newDate.getHours();

// Global variables
let greet;
let count = 0;
let practitioner;
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

if (hours < 12) greet = "Good Morning";
else if (hours >= 12 && hours <= 17) greet = "Good Afternoon";
else if (hours >= 17 && hours <= 24) greet = "Good Evening";
else greet = "Hello";

const helpButtons = () => {
  bothButtons.forEach(button => {
    button.classList.add("button-active");
  })
  buttonOne.innerHTML = "Physical";
  buttonTwo.innerHTML = "Psychological";
  inputWrapper.style.display = "none";
  showMessage(`Hello ${userName}. What kind of help would you need today?`, "bot", timeStamp());
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
  <select name="contactOptions" class="input contact-options" id="contactOptions">
    <option class="option" value="">Select a contact option...</option>
    <option class="option" value="chat">By chat</option>
    <option class="option" value="phone">By phone</option>
    <option class="option" value="video">By video call</option>
  </select>
 `
}

const closingMessages = () => {
  selectWrapper.addEventListener("change", (event) => {
    const contactChoice = event.target.value;
    showMessage(`${event.target.value}`, "user", timeStamp())
    selectWrapper.style.display = "none"
    setTimeout(() => {
      showMessage(`You have chosen to be contacted by ${contactChoice}...`, "bot", timeStamp())
    }, 3000);
    setTimeout(() => {
      showMessage(`Thank you for using Medibot, I will connect you with a ${practitioner} now, This page will reload in 10 seconds!`, "bot", timeStamp())
    }, 6000);
    setTimeout(() => {
      location.reload()
    }, 16000);
  })
}  

const timeStamp = () => {
  const newDate = new Date();
  let hours = newDate.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = newDate.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  const dateIndex = newDate.getDate();
  const monthIndex = newDate.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[monthIndex];
  return `${dateIndex} ${month}, ${hours}:${minutes}`;
}

const chatAudio = () => {
  var audio = new Audio('https://notificationsounds.com/storage/sounds/file-sounds-1143-clearly.mp3');
  audio.play();
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender, date) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
      </section>
      <p class="timestamp timestamp-right">${date}</p>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./assets/images/doctor.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
      <p class="timestamp timestamp-left">${date}</p>
    `
  }
  chat.scrollTop = chat.scrollHeight
  chatAudio();
}

const contactMethod = () => {
  showMessage('Thank you for your response, how would you prefer to be contacted?', 'bot', timeStamp());
  buttonWrapper.style.display = "none";
  selectWrapper.style.display = 'block';
  chat.scrollTop = chat.scrollHeight
  showDropdown()
}

const greeting = () => {
  showMessage(`${greet}, What's your name?`, 'bot', timeStamp())
}

// Eventlisteners 
form.addEventListener("submit", (event) => {
  event.preventDefault();
  userName = document.querySelector("#input").value;
  if (userName.length > 1 || userName) {
    showMessage(userName, "user", timeStamp());
    setTimeout(helpButtons, 1000);
  } else {
    showMessage("Please enter your name", "bot", timeStamp());
  }
})

buttonOne.addEventListener("click", () => {
  if(buttonOne.innerHTML === "Physical") {
    buttonOne.value = "first"
    practitioner = "doctor";
  } else {
    buttonTwo.value = "second";
    practitioner = "psychologist";
  }
})

bothButtons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    switch (count) {
      case 1:
        showMessage(`${button.innerHTML}`, "user", timeStamp());
        if (buttonOne.value === "first") {
          const cough = () => showMessage(physicalSymptoms[0], "bot", timeStamp());
          setTimeout(cough, 2000);
          setTimeout(yesNoButtons, 2000);
        } else {
          const sad = () => showMessage(psychologicalSymptoms[0], "bot", timeStamp());
          setTimeout(sad, 2000);
          setTimeout(yesNoButtons, 2000);
        }
        break;

      case 2:
        showMessage(`${button.innerHTML}`, "user", timeStamp());
        if (buttonOne.value === "first") {
          const fever = () => showMessage(physicalSymptoms[1], "bot", timeStamp());
          setTimeout(fever, 2000);
          setTimeout(yesNoButtons, 2000);
        } else {
          const stress = () => showMessage(psychologicalSymptoms[1], "bot", timeStamp());
          setTimeout(stress, 2000);
          setTimeout(yesNoButtons, 2000);
        }
        break;

      case 3:
        showMessage(`${button.innerHTML}`, "user", timeStamp())
        if (buttonOne.value === "first") {
          const runnyNose = () => showMessage(physicalSymptoms[2], "bot", timeStamp());
          setTimeout(runnyNose, 2000);
          setTimeout(yesNoButtons, 2000);
        } else {
          const mood = () => showMessage(psychologicalSymptoms[2], "bot", timeStamp());
          setTimeout(mood, 2000);
          setTimeout(yesNoButtons, 2000);
        }
        break;

      case 4:
        showMessage(`${button.innerHTML}`, "user", timeStamp())
        hideButtons();
        setTimeout(contactMethod, 5000);
    }
  })
})

setTimeout(greeting, 1000);
closingMessages();