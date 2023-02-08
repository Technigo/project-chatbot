// Variables that point to selected DOM elements
const chat = document.getElementById('chat');

const noButton = document.getElementById("no-btn");
const inputWrapper = document.getElementById('input-wrapper');
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-btn");


// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, Would you like to book a train ticket?", 'bot')
  
  chat.innerHTML += `
   <button id="yes-btn" class="inChatButton">Yes please</button>
   <button id="no-btn" class="inChatButton">No thanks</button>
  `
  document.getElementById('yes-btn').addEventListener('click',() => {
    showMessage('Yes please.', 'user')
    setTimeout(() => showMessage('Great! What is your city of departure?', 'bot'), 1200);
})

}




const handleChatInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we clear it from the input
  const inputstring = chatInput.value;
  showMessage(`You age is ${inputstring}`, 'user'); 

  const age = parseInt(inputstring);
  if(age > 18)
    showMessage("You are an adult!", 'bot');
  else
  showMessage("You are a child!", 'bot');


  chatInput.value = ''

  
  
}







// Set up your eventlisteners here
//yesButton.addEventListener("click", yesButtonOnClick);
sendButton.addEventListener("click", handleChatInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);


