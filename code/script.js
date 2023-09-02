// DOM: Variables that point to selected DOM (HTML) elements:
// Added a links to the HTML elements - still not grasping how this really works
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementsByClassName('send-btn');


// If you need any global variables that you can use across different functions, declare them here:

// DECLARE FUNCTIONS:
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log(sender, message);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
    // Not sure if I have fully understood the benefits of console.log and the ways it can be used - but I think I am getting the hang of it.
  } else if (sender === 'bot') {
    console.log(sender, message);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This makes the chat scroll to the last message 
  chat.scrollTop = chat.scrollHeight
}

// BOT Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello traveller! What's your name?", 'bot')
}
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()

// Function (message) Delay: setTimeout(functionName, timeToWaitInMilliSeconds)
setTimeout(greetUser, 2000)


// Eventlisteners underneath

//REPLY FROM USER
//I found the next part hard - I did not find the example in the read.me instructions very helpful. I found a thread about this topic in slack, so I did the same, which included the userName = nameInput.value part within this function. Not sure why this works and other things I tried do not.
// Also not sure how to dealy the message that comes from the user should I want to do so - tried many combinations.

let userName = ""

const handleNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(`Hello! My name is ${userName}`, "user");
  // After 1 second, show the next question by invoking the next function. Passing the name into it to have access to the user's name if we want to use it in the next question from the bot.
  setTimeout(() => reply1(userName), 1000)
  setTimeout(() => reply2(userName), 3000)
}

nameForm.addEventListener("submit", handleNameInput)

// REPLY FROM BOT 
//Two messages that show up 2 seconds apart, delay is defined in the reply from user function above
// User is asked to select a button as part of the second message
// A confirmation message shows up when the user makes their selection - had trouble with this and had to look to some other codes. Dont really have the hang of params, events, callbacks, arguments etc..
//REPLY1
function reply1() {
  showMessage(`Welcome, ${userName}! How amazing that you are interested in an adventure with us!`, 'bot')
}

//REPLY2
function reply2() {
  showMessage(`Which of our activities are you interested in booking?`, 'bot')
  //Link to HTML - ID specification (link to later) - name of button
  inputWrapper.innerHTML = `
    <button class="send-btn" id="surfing">Surfing</button>
    <button class="send-btn" id="skiing">Skiing</button>
    <button class="send-btn" id="sailing">Sailing</button>
    <button class="send-btn" id="yoga">Yoga</button>
  `
  //Link to HTML
  const activityButtons = inputWrapper.querySelectorAll('.send-btn')
  //Funtion for.each to perform the action for each button when clicked on and connect it to the right id above
  activityButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedActivity = event.target.id
      //console.log which button was chosen
      console.log(selectedActivity)
      //message to be displayed when a button is selected
      showMessage(`Wonderful! You selected ${selectedActivity}.Lets dive in !`, 'bot')
    })
  })
}

