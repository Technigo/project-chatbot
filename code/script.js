// Our Javascript

// Page 1 - Login Page
// Get Hours & Minutes
let findTime = new Date().toTimeString().substr(0,5);
let time = findTime.replace(":", ".");

//Get Weekday (Define array, pull date, subtract 1 for array)
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weekday = new Date();
let today = weekdays[weekday.getDay() - 1];

//Get Date (Fixed to remove 0 from 01-09 in date)
let date = new Date().toDateString().substr(8,2);
if (date < 10) {
  date = date.replace("0", "");
}

// Get Month (Define Array, Choose Array item)
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = new Date();
const month = months[currentMonth.getMonth()];

//Insert Time into Unlock Scren
const insertTime = document.getElementById("time");
insertTime.innerText = time

//Insert Date into Unlock Screen
const insertDate = document.getElementById("date");
insertDate.innerText = `${today}, ${date} ${month}`;

// Add event listener to keep input container PINK when clicked on
const usernameInput = document.querySelector('.login-container');
usernameInput.addEventListener('click', function() {
  this.classList.toggle("login-container--active")
})

// Page 2 - Chat Page
// DOM selectors & Global Variables
const chat = document.getElementById('chat')
const loginButton = document.querySelector('.login__button');
let userName = "";

//Event Listener for Login Button Push
loginButton.addEventListener('click', function() {
  // prevent.Default stops page from reloading when clicking icon
  event.preventDefault();

  // Store nameString
  const nameString = document.getElementById('userName').value;
  console.log(nameString);

  // Correct nameString to userName (cut string after first name, correct Case)
  const nameString2 = nameString.split(" ")[0];
  console.log(nameString2);

  userName = nameString2.charAt(0).toUpperCase() + nameString2.substr(1).toLowerCase();

  // Hide Login Screen
  document.querySelector(".unlock-screen").style.visibility = "hidden";

  //Show Chat Screen
  document.querySelector(".chat-screen").style.visibility = "visible";

  greeting(userName);
  console.log(userName);
})

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/profile.png" alt="User Icon" class="chat-icon user-icon" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/sassy.png" alt="Bestie Icon" class="chat-icon bestie-icon" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = (userName) => {
  showMessage(`Heyyy ${userName}, I heard you just got dumped by that asshole... what was their name again?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Reply to ex name
const exNameTrigger = document.querySelector('.ex-send-btn');
const inputForm = document.querySelector('.input-form');
let exName = "";

exNameTrigger.addEventListener('click', function() {
  exName = document.querySelector('.ex-name-input').value;
  console.log(exName);
  showMessage(`Their name was ${exName}...`, 'user');
  showMessage(`${exName}?? Eww such a gross name! Can't believe you dated someone called that! How are you feeling babe?`, 'bot');
  document.querySelector('.ex-name-input').style.display = "none";
  document.querySelector('.ex-send-btn').style.display = "none";
  
  inputForm.innerHTML += `
  <div class="cry-emoji emoji-option">😭</div>
  <div class="puke-emoji emoji-option">🤮</div>
  <div class="angry-emoji emoji-option">🤬</div>
  `

}
)

// Test for Different Input Types
/* <input type="button" class="cry-emoji emoji-option" value="😭" />
<input type="button" class="puke-emoji emoji-option" value="🤮" />
<input type="button" class="angry-emoji emoji-option" value="🤬" /> */


// Select Emoji Trigger
// const emojiButtons = document.getElementByClassName('emoji-buttons');
// document.getElementsByClassName(".emoji-buttons").style.visibility = "visible";


const cryEmoji = document.querySelector('.cry-emoji');

// cryEmoji.addEventListener('click', function() {
//   console.log(This works);
// })

// cryEmoji.addEventListener('click', function() {
//   console.log("saaaad");
//   showMessage(`I'm feeling sad... 😭😭😭`, 'user');
//   showMessage(`Girl why??`, 'bot');
//   document.querySelector('.emoji-buttons').style.display = "none";
// })


/*
eventlistener to each emoji and click message from user 
message back from the bot 
hide the emojis 
*/



// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)

// Doesn't work?? hmm...
// setTimeout(() => showMessage(message, sender), 1000);
