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
const exNameTrigger = document.querySelector('.ex-send-btn');
const inputForm = document.querySelector('.input-form');


//Event Listener for Login Button Push   ////////////////////////////////////////// ADDED EVENT here within brackets
loginButton.addEventListener('click', function(event) {
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
  // setTimeout(() => exNameInput(), 1000); tried timeDelay for users answer here
}

let exName = "";
let yearsTogether = "";

exNameTrigger.addEventListener('click', () => {
  event.preventDefault();
  exName = document.querySelector('.ex-name-input').value;
  console.log(exName);
  showMessage(`Their name was ${exName}...`, 'user');
  showMessage(`${exName}?? Eww such a gross name! Can't believe you dated someone called that! How many years were you together?`, 'bot');
  document.querySelector('.ex-name-input').style.display = "none";
  document.querySelector('.ex-send-btn').style.display = "none";
  inputForm.innerHTML += `
  <input class="years-input" type="number" autocomplete="off" name="relationshipYears" />
  <input class="years-send-btn" type="image" src="assets/send_arrow2.png" />
  `
  document.querySelector('.years-send-btn').addEventListener('click', () => {
    event.preventDefault();
    yearsTogether = document.querySelector('.years-input').value;
    console.log(yearsTogether);
    showMessage(`We were together for ${yearsTogether} years...`, 'user')
    setTimeout(showYears,1000)
  })

})

const showYears = () => {
if (yearsTogether === 0) {
  showMessage(`Not even a year? Thank god you got rid of him so fast! How are you feeling now?`, 'bot')
} else if (yearsTogether > 0 && yearsTogether < 3) {
  showMessage(`${yearsTogether} years huh.. Not too long luckily. How are you feeling?`, 'bot');
} else if (yearsTogether >= 3 && yearsTogether < 10) {
  showMessage(`${yearsTogether} years!! Wow what a waste of time. Thank god you're free. How are you feeling?`, 'bot')
} else if (yearsTogether > 9) {
  showMessage(`${yearsTogether} years!!! That's a whole lifetime. Should we plan their murder? How are you feeling?`, 'bot')
}
  document.querySelector('.years-input').style.display = "none";
  document.querySelector('.years-send-btn').style.display = "none";
    inputForm.innerHTML += `
  <input type="button" class="cry-emoji emoji-option" value="😭">
  <input type="button" class="puke-emoji emoji-option" value="🤮">
  <input type="button" class="angry-emoji emoji-option" value="🤬">
  `

  document.querySelector('.cry-emoji').addEventListener('click', () => {
    showMessage(`I feel like crying... 😭 😭 😭`, 'user');
    setTimeout(crying, 1000);
  })

  document.querySelector('.puke-emoji').addEventListener('click', () => {
    showMessage(`I feel like puking 🤮`, 'user');
    setTimeout(sick, 1000);
  })

  document.querySelector('.angry-emoji').addEventListener('click', () => {
    showMessage(`I'm so f*cking pissed!! 🤬🤬🤬`, 'user');
    setTimeout(angry, 1000);
  })
}

const crying = () => {
  showMessage('', 'bot')
  document.querySelector('.cry-emoji').style.display = "none";
  document.querySelector('.puke-emoji').style.display = "none";
  document.querySelector('.angry-emoji').style.display = "none";

}

const sick = () => {
  showMessage('', 'bot')
  document.querySelector('.cry-emoji').style.display = "none";
  document.querySelector('.puke-emoji').style.display = "none";
  document.querySelector('.angry-emoji').style.display = "none";
}

const angry = () => {
  showMessage('', 'bot')
  document.querySelector('.cry-emoji').style.display = "none";
  document.querySelector('.puke-emoji').style.display = "none";
  document.querySelector('.angry-emoji').style.display = "none";
}











///////////////////////////////////////////////////////////////////////////////////////// Reply to ex name TEST 
// const exNameInput = (userName) => {  
// /*exName = document.querySelector('.ex-name-input').value;*/

// document.getElementsByClassName('ex-send-btn').addEventListener('click', function(event) {
//   event.preventDefault();
  
//   nameString.value = ""; /////////////////////////////////////////////////////////////////// Try to reuse the nameString here for exname so reset it
//   userName = nameString.value;
//   console.log(userName);

// showMessage(`Their name was ${userName}...`, 'user');
// setTimeout(() => relationshipLength(exLength), 1000);
// }
// )
// }

/*
// Reply to ex name
const exNameTrigger = document.querySelector('.ex-send-btn');
const inputForm = document.querySelector('.input-form');
let exName = "";

exNameTrigger.addEventListener('click', function() {
  exName = document.querySelector('.ex-name-input').value;
  console.log(exName);
  showMessage(`Their name was ${exName}...`, 'user');
  showMessage(`${exName}?? Eww such a gross name! Can't believe you dated someone called that! How many years were you together?`, 'bot');
  document.querySelector('.ex-name-input').style.display = "none";
  document.querySelector('.ex-send-btn').style.display = "none";
  */
  
  // inputForm.innerHTML += `
  // <div class="cry-emoji emoji-option">😭</div>
  // <div class="puke-emoji emoji-option">🤮</div>
  // <div class="angry-emoji emoji-option">🤬</div>
  // `
/*
  inputForm.innerHTML += `
  <input class="years-input" type="number" autocomplete="off" name="relationshipYears" required />
  <input class="years-send-btn" type="image" src="assets/send_arrow2.png" />
  `
*/
/*  setTimeout(() => relationshipLength(exLength), 1000) // TEST
}
)*/

// Reply to ex-length TEST
/*
const relationshipLength = () => {
showMessage(`${exName}?? Eww such a gross name! Can't believe you dated someone called that! How many years were you together?`, 'bot');


}
/*
// Reply to relationship length
const relationshipLength = document.getElementsByClassName('years-send-btn');
let exLength="";
  relationshipLength.addEventListener('click', function() {
  exLength = document.querySelector('.years-input').value;
  console.log(exLength);
  showMessage(`${exLength} years...`, 'user');
  showMessage(`${exLength}?? Wow ew do not throw anymore of your pearls on that ${exName}-trashbin! What is the 3 worst things about them?`, 'bot')
}
)
*/

// Reply to 3 worst things
/*send meme??*/
/*or a reply with buttons or a drop-down menue*/




// Test for Different Input Types
/* <input type="button" class="cry-emoji emoji-option" value="😭" />
<input type="button" class="puke-emoji emoji-option" value="🤮" />
<input type="button" class="angry-emoji emoji-option" value="🤬" /> */


// Select Emoji Trigger
// const emojiButtons = document.getElementByClassName('emoji-buttons');
// document.getElementsByClassName(".emoji-buttons").style.visibility = "visible";

/*
const cryEmoji = document.querySelector('.cry-emoji');
*/

// cryEmoji.addEventListener('click', function() {
//   console.log(This works);
// })

// cryEmoji.addEventListener('click', function() {
//   console.log("saaaad");
//   showMessage(`I'm feeling sad... 😭😭😭`, 'user');
//   showMessage(`Girl why??`, 'bot');
//   document.querySelector('.emoji-buttons').style.display = "none";
// })


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
