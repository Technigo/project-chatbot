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
  setTimeout(hangoutOffer(userName), 1000);
};

const hangoutOffer = (userName) => {
  showMessage(`What are you up to today, ${userName}? Want to hang out?`, 'bot');
  wrapper.innerHTML = `
  <div id ="hangoutChoices">
  <button id="no" type="submit" value="no">No, thank you</button>
  <button id="yes" type="submit" value="yes">I'd love to!</button>
  </div>
  `

  document.getElementById('no').addEventListener('click', () => {
    showMessage('No', 'user')
    // Also add some code in here to add answer options for next message
  })
  document.getElementById('yes').addEventListener('click', () => {
    showMessage('Yes', 'user')
    showMessage('Fantastic! What time can i pick you up? 5 or 6?', 'bot')
    // Also add some code in here to add answer options for next message
  })

}



/*const handleHangout = (event) => {

  event.preventDefault();
  hangoutChoice = event.target.hangoutChoices.value;
  if (hangoutChoice === 'yes') {
    showMessage(`Cool, I'll bring my whole family`, 'bot');
  } else if (hangoutChoice === 'no') {
    showMessage(`Okay then, maybe another time!`, 'bot');
  }
}
*/


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("User is the sender.");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Bot is the sender.");
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

// Set up your eventlisteners here
nameSubmit.addEventListener('submit', handleNameInput);



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
