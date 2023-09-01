// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById(`input-wrapper`);
const reportForm = document.getElementById(`report-form`);
const userInput = document.getElementById(`user-input`);
const sendBtn = document.getElementById(`send-btn`);

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {

  showMessage("Welcome to report error messages about our municipal streets! Do you want to make a report?", 'bot');
};



  
  // Display the user's answer in the chat
  // Here you can process the user's answer, ask the next question, etc.
  // For now, let's just display a response from the bot:





const handleUserAnswer = event => {
  event.preventDefault ();
  const userAnswer = userInput.value.trim().toLowerCase();
  showMessage(userAnswer, 'user');
  setTimeout(() => {

  if (userAnswer === 'yes') {
    showMessage("Svar", 'bot');
    
  } else if (userAnswer === 'no') {
    showMessage("OK!", 'bot');

  } else { showMessage("I'm sorry, I didn't understand your response. Please answer with 'yes' or 'no'.", 'bot');
  }
  reply();
}, 500);
};
// Set up your eventlisteners here
reportForm.addEventListener("submit", handleUserAnswer);



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:

 
  //setTimeout((reply) => {
    //showMessage("Thank you for your answer!", 'bot');
  //}, 500);
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

