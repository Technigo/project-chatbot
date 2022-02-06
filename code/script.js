// Page 1 - Login Page
// Get Hours & Minutes
let findTime = new Date().toTimeString().substr(0,5);
let time = findTime.replace(":", ".");

//Get Weekday (Define array, pull date, subtract 1 for array)
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = new Date();
let today = weekdays[weekday.getDay()];

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

// Ex's Name

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
  <input class="years-send-btn send-btn" type="image" src="assets/send_arrow2.png" />
  `
  document.querySelector('.years-send-btn').addEventListener('click', () => {
    event.preventDefault();
    yearsTogether = document.querySelector('.years-input').value;
    console.log(yearsTogether);
    showMessage(`We were together for ${yearsTogether} years...`, 'user')
    setTimeout(showYears,1000)
  })

})

// Years Together

const showYears = () => {
  if (yearsTogether < 1) { /////////// changed here to this since it skipped the text when i put 0 before
    showMessage(`Not even a year? Thank god you got rid of them so fast! How are you feeling now?`, 'bot')
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
    showMessage(`I'm so sad I can't stop crying... 😭 😭 😭`, 'user');
    setTimeout(crying, 1000);
  })

  document.querySelector('.puke-emoji').addEventListener('click', () => {
    showMessage(`I feel sick... Like I want to puke 🤮`, 'user');
    setTimeout(sick, 1000);
  })

  document.querySelector('.angry-emoji').addEventListener('click', () => {
    showMessage(`I'm so f*cking pissed!! 🤬 🤬 🤬`, 'user');
    setTimeout(angry, 1000);
  })
}


// Emoji Choices

const crying = () => {
  showMessage(`I get that you're sad but I can't believe you're crying over a trashbag called ${exName}!`, 'bot');
  showMessage(`What would make you feel better?`, 'bot');
  document.querySelector('.cry-emoji').style.display = "none";
  document.querySelector('.puke-emoji').style.display = "none";
  document.querySelector('.angry-emoji').style.display = "none";
  inputForm.innerHTML += `
  <input type="button" class="uplift-me upliftmeanbutton" value="Uplift me 🥺">
  <input type="button" class="be-mean upliftmeanbutton" value="Be mean 😈">
  `
  document.querySelector('.uplift-me').addEventListener('click', () => {
  event.preventDefault();
  showMessage(`I need a confidence boost.. I'm not feeling too great 🥺`, 'user');
  setTimeout(upliftMe, 1000);
  })

  document.querySelector('.be-mean').addEventListener('click', () => {
  event.preventDefault();
  showMessage(`I want you to say mean things about ${exName}!`, 'user')
  setTimeout(beMean, 1000);
  })
}

const sick = () => {
  showMessage(`I totally get it... You know, ${exName} always did have disgusting breath. Probably wipes back to front, too.`, 'bot');
  showMessage(`What can I do to make you feel better?`, 'bot');
  document.querySelector('.cry-emoji').style.display = "none";
  document.querySelector('.puke-emoji').style.display = "none";
  document.querySelector('.angry-emoji').style.display = "none";
  inputForm.innerHTML += `
  <input type="button" class="uplift-me upliftmeanbutton" value="Uplift me 🥺">
  <input type="button" class="be-mean upliftmeanbutton" value="Be mean 😈">
  `
  document.querySelector('.uplift-me').addEventListener('click', () => {
  event.preventDefault();
  showMessage(`I need a confidence boost.. I'm not feeling too great 🥺`, 'user');
  setTimeout(upliftMe, 1000);
  })

  document.querySelector('.be-mean').addEventListener('click', () => {
  event.preventDefault();
  showMessage(`I want you to say mean things about ${exName}!`, 'user')
  setTimeout(beMean, 1000);
  })
}

const angry = () => {
  showMessage(`Me too! What should we do? Go to ${exName}'s house and set their car on fire?`, 'bot')
  showMessage(`I'm just kidding! But is there anything that would make you feel better?`, 'bot');
  document.querySelector('.cry-emoji').style.display = "none";
  document.querySelector('.puke-emoji').style.display = "none";
  document.querySelector('.angry-emoji').style.display = "none";
  inputForm.innerHTML += `
  <input type="button" class="uplift-me upliftmeanbutton" value="Uplift me 🥺">
  <input type="button" class="be-mean upliftmeanbutton" value="Be mean 😈">
  `
  document.querySelector('.uplift-me').addEventListener('click', () => {
  event.preventDefault();
  showMessage(`I need a confidence boost.. I'm not feeling too great 🥺`, 'user');
  setTimeout(upliftMe, 1000);
  })

  document.querySelector('.be-mean').addEventListener('click', () => {
  event.preventDefault();
  showMessage(`I want you to say mean things about ${exName}!`, 'user')
  setTimeout(beMean, 1000);
  })
}


// Uplift me //////

const sendMeme = () => {
  chat.innerHTML += `
<section class="bot-msg">
<img src="assets/sassy.png" alt="Bestie Icon" class="chat-icon bestie-icon" />
  <div class="bubble bot-bubble">
    <img src="assets/exPhoto.png" class="meme"> 
  </div>
</section>
`
chat.scrollTop = chat.scrollHeight
}


const upliftMe = () => {
  showMessage(`So I found this old picture of you guys, imma just leave it here...`, 'bot'); 
  sendMeme();
  document.querySelector('.uplift-me').style.display = "none";
  document.querySelector('.be-mean').style.display = "none";

  inputForm.innerHTML += `
  <input type="button" class="good-point upliftmeanbutton" value="...good point 😤">
  <input type="button" class="ok-go-mean upliftmeanbutton" value="Ok go mean 😈">
  `
  document.querySelector('.good-point').addEventListener('click', () => {
    event.preventDefault();
    showMessage(`Ok good point, I can't argue with that! I really should raise my standards 😤`, 'user');
    setTimeout(goodPoint, 1000);
  })

  document.querySelector('.ok-go-mean').addEventListener('click', () => {
    event.preventDefault();
    showMessage(`I want you to say mean things about ${exName}!`, 'user')
    setTimeout(beMean, 1000);
  })
}


////////////////// Good-point function
const goodPoint = () => {
  showMessage(`Yes who needs boring ${exName} when you have the whole internet!?`, 'bot');
  showMessage('This seems like a fun page: https://find-happiness.netlify.app/', 'bot');
  document.querySelector('.good-point').style.display = "none";
  document.querySelector('.ok-go-mean').style.display = "none";
  inputForm.innerHTML += `
  <input type="button" class="check-out upliftmeanbutton" value="I'll check out the link...">
  `
  document.querySelector('.check-out').addEventListener('click', () => {
    showMessage("I'll check out the link. Thank you Satan 💖", 'user')
    setTimeout(feelingBetter, 1000);
  })
}



// Be Mean Function
const beMean = () => {
  showMessage(`You know what, ${exName} seems terrible and deserve to be punished, but who has got the time right so just sign'em up here:`, 'bot');
  showMessage('https://deathbyspam-week3.netlify.app', 'bot');
  document.querySelector('.uplift-me').style.display = "none";
  document.querySelector('.be-mean').style.display = "none";
  document.querySelector('.good-point').style.display = "none";
  document.querySelector('.ok-go-mean').style.display = "none";
  inputForm.innerHTML += `
  <input type="button" class="check-out upliftmeanbutton" value="I'll check out the link...">
  `
  document.querySelector('.check-out').addEventListener('click', () => {
    showMessage("I'll check out the link. Thank you Satan 💖", 'user')
    setTimeout(feelingBetter, 1000);
  })
}


// Feeling Better / Logout Function

const feelingBetter = () => {
  showMessage(`No problem. Hope you're feeling better babe.`, 'bot');
  showMessage('I definitely am. Talk to you later!', 'user');
  document.querySelector('.check-out').style.display = "none";
}