// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const wrapper = document.getElementById('input-wrapper')
const nameSubmit = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')


// If you need any global variables that you can use across different functions, declare them here:
let userName = "";
let hangoutReply = "";

// Declare your functions after this comment
// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage(`Why hello there, may i ask you your name?`, 'bot')
}

//Store the users name and pass it through showMessage function which posts message to user bubble
const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  userName = nameInput.value;


  showMessage(`${userName}`, 'user');
  nameInput.value = "";

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(animalQuestion(userName), 1000);
}
const animalQuestion = (userName) => {
  showMessage(`Are you a morning person or a night owl, ${userName}?`, 'bot');
  youngButton.style.display = 'none';
  oldButton.style.display = 'none';
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  wrapper.style.display = 'none';
  morningButton.style.display = 'block';
  nightButton.style.display = 'block';
  morningButton.onclick = () => ageQuestion();
  nightButton.onclick = () => ageQuestion();
}


const ageQuestion = (userName) => {
  showMessage(`How old are you?`, 'bot');
  youngButton.style.display = 'block';
  oldButton.style.display = 'block';
  morningButton.style.display = 'none';
  nightButton.style.display = 'none';
  wrapper.style.display = 'none';
  youngButton.onclick = () => handleTooYoung();
  oldButton.onclick = () => hangoutOffer();
}

const handleTooYoung = () => {
  showMessage(`Young you are! Enjoy your youth!`, 'bot');
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  youngButton.style.display = 'none';
  oldButton.style.display = 'none';
  morningButton.style.display = 'none';
  nightButton.style.display = 'none';
  wrapper.style.display = 'none';
  yesButton.onclick = () => handleTimeInput();
  noButton.onclick = () => handleGoodbye();
}

const hangoutOffer = (userName) => {
  setTimeout(showMessage(`I'm old too! Want to hang out?`, 'bot'), 2000);
  yesButton.style.display = 'block';
  noButton.style.display = 'block';
  youngButton.style.display = 'none';
  oldButton.style.display = 'none';
  morningButton.style.display = 'none';
  nightButton.style.display = 'none';
  wrapper.style.display = 'none';
  yesButton.onclick = () => handleTimeInput();
  noButton.onclick = () => handleGoodbye();

}
const handleTimeInput = () => {
  showMessage('I would love to!', 'user');
  showMessage('Fantastic! I am available from 17, does that work ? ', 'bot');
  yesButton.style.display = 'block';
  noButton.style.display = 'block';
  morningButton.style.display = 'none';
  nightButton.style.display = 'none';
  wrapper.style.display = 'none';
  yesButton.onclick = () => handleSeeYouLater();
  noButton.onclick = () => handleGoodbye();
}

const handleGoodbye = () => {
  showMessage('No', 'user');
  showMessage('Maybe another time then! Hope you have a great day and you can tell me all about it later. Bye!', 'bot');
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  wrapper.style.display = 'none';
}

const handleSeeYouLater = () => {
  showMessage('Yes', 'user');
  showMessage('Great, see you then!', 'bot');
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  wrapper.style.display = 'none';
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("User is the sender.");
    chat.innerHTML += `
    < section class="user-msg" >
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section >
  `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Bot is the sender.");
    chat.innerHTML += `
  < section class="bot-msg" >
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section >
  `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Set up your eventlisteners here
nameSubmit.addEventListener('submit', handleNameInput);



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
