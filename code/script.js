// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const sendButton = document.getElementById('send-btn')
const activityBtn = document.getElementById('input-container')
const nameForm = document.getElementById('name-form')

//Variables created dynamically using JS

// If you need any global variables that you can use across different functions, declare them here:
// When user enters name
let userName = "";

let staffPerson = "";
let spaTreatment = "";
// Declare your functions after this comment

// When website is loaded, chatbot asks first question.
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Greetings dearest customer, please enter your name.", 'bot')
}
// Just to check it out, change 'bot' to 'user' here

//username pops up on chat on user's side
const showName = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  showMessage(`${userName}`, "user");
  // when you submit a form, the default action is to send the form data to the server and reload the page.  By calling event.preventDefault() within an event handler, you can stop the browser from performing its default action and allow you to handle the event in a custom manner.
  nameInput.value = ""; //clear nameInput's value 
  setTimeout(proposeActivity, 1000);
}

//bot replies back proposing activities
const proposeActivity = () => {
  showMessage(`Welcome to our hotel Le Shandrani, ${userName}!`, "bot")
  showMessage(`This booking service is offered to you directly from your room, at your leisure.`, "bot")
  showMessage(`Which activity would you like to book today?`, "bot");
  setTimeout(hotelActivity, 2000);
}


//buttons for choosing activity
const hotelActivity = () => {
  // clear input form
  nameForm.removeChild(nameInput)
  nameForm.removeChild(sendButton)
  // buttons appear for activity choice
  activityBtn.innerHTML += `
  <button id="spa">Spa</button>
  <button id="golf">Golf</button>
  <button id="boathouse">Boathouse</button>
  <button id="diner">Diner</button>
  `

  //concatenate = "CURRYING" in programming lang.
  document.getElementById('spa').addEventListener('click', spaActivity);
  document.getElementById('golf').addEventListener('click', golfActivity);
  document.getElementById('boathouse').addEventListener('click', boathouseActivity);
  document.getElementById('diner').addEventListener('click', dinerReservation);

  // const spaBtn = document.getElementById('spa')
  // const golfBtn = document.getElementById('golf')
  // const boathouseBtn = document.getElementById('boathouse')
  // const dinerBtn = document.getElementById('diner')

  // spaBtn.addEventListener('click', spaActivity);
  // golfBtn.addEventListener('click', golfActivity);
  // boathouseBtn.addEventListener('click', boathouseActivity);
  // dinerBtn.addEventListener('click', dinerReservation);

}

// buttons for spa treatment choice
const spaActivity = (event) => {
  event.preventDefault();
  //remove irrelevant buttons
  activityBtn.innerHTML = "";
  // activityBtn.removeChild(spa)
  // activityBtn.removeChild(golf)
  // activityBtn.removeChild(boathouse)
  // activityBtn.removeChild(diner)
  showMessage(`You have chosen to experience our spa.  Please select your spa treatment:`, "bot")
  activityBtn.innerHTML += `
  <button id="footMassage">Foot massage</button>
  <button id="reiki">Reiki</button>
  <button id="oilMassage">Oil massage</button>
    `
}


const golfActivity = (event) => {
  event.preventDefault();
  //remove irrelevant buttons
  activityBtn.innerHTML = "";
  showMessage(`Excellent choice!  Please select your golf course:`, "bot")
  activityBtn.innerHTML += `
  <button id="golfPractice">Golf Practice</button>
  <button id="nineHoles">9-holes</button>
  <button id="EighteenHoles">18-holes</button>
    `
}
const boathouseActivity = (event) => {
  event.preventDefault();
  //remove irrelevant buttons
  activityBtn.innerHTML = "";
  showMessage(`A day by the seaside, wonderful choice!  Please select your water activity:`, "bot")
  activityBtn.innerHTML += `
  <button id="kiteSurfing">Kite Surfing</button>
  <button id="glassBottom">Glassbottom tour</button>
  <button id="catamaranTour">Catamaran Tour</button>
    `
}
const dinerReservation = (event) => {
  event.preventDefault();
  //remove irrelevant buttons
  activityBtn.innerHTML = "";
  showMessage(`Our hotel offers you 3 restaurant choices.  Please select one:`, "bot")
  activityBtn.innerHTML += `
  <button id="italianRest">Italian restaurant</button>
  <button id="buffetRest">International Buffet</button>
  <button id="indianRest">Indian Restaurant</button>
    `
}





//erase userName in input-field

//creating buttons for proposing activities
// const activityChoice = () => {
//   hotelActivity.innerHTML += `
//   <button id="spa">Spa</button>
//   <button id="golf">Golf</button>
//   <button id="boathouse">Boathouse</button>
//   <button id="diner-reservations">Diner</button>
//   `
// }


// /nWhom, among our qualified staff, would you like to experience your spa treatment with today?


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
        <section class="user-msg" id="user-msg">
          <div class="bubble user-bubble">
            <p>${message}</p>
          </div>
          <img src="./assets/user.png" alt="user bot">
        </section>
    `

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
        <section class="bot-msg" id="bot-msg">
          <img src="./assets/bot.png" alt="chat bot">
          <div class="bubble bot-bubble">
            <p>${message}</p>
          </div>
        </section>
        `

  }
  chat.scrollTop = chat.scrollHeight
}

// Set up your eventlisteners here

// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWait(ms))
// This means the greeting function will be called 1s=1000ms after the website is loaded.
setTimeout(greetUser, 1000);


// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
chat.scrollTop = chat.scrollHeight

// setTimeout(showName, 2000) 
sendButton.addEventListener('click', showName);
// sendButton.addEventListener('click', showName(event)): deprecated.  When you add an event listener in JavaScript, you specify a function that will be executed when a specific event occurs on the selected element. The event itself is automatically passed as an argument to the event handler function when the event is triggered. You don't need to explicitly specify the event when calling the function in the event listener because the browser handles passing the event object to the function for you.