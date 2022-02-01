// Our Javascript

// Get Hours & Minutes
let findTime = new Date().toTimeString().substr(0,5);
let time = findTime.replace(":", ".");
console.log(time);

//Get Weekday
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const weekday = new Date();
let today = weekdays[weekday.getDay() - 1];
console.log(today);

//Get Date
const date = new Date().toDateString().substr(8,2);
console.log(date);

// Get Month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentMonth = new Date();
let month = months[currentMonth.getMonth()];
console.log(month);


//Insert Time
const insertTime = document.getElementById("time");
insertTime.innerText = time

//Insert Date
const insertDate = document.getElementById("date");
insertDate.innerText = `${today}, ${date} ${month}`;



// Their JavaScript

// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
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
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
