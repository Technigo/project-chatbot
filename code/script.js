// (Pseudo code) Variables that point to selected DOM elements
const chat = document.getElementById('chat');

// When the website has loaded (function)
const greetUser = () => {
  showMessage("Hey buddy, what's your name?", 'bot');
  //showMessage("Hey my name is Emma", 'user' )
}
setTimeout(greetUser, 800);

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is(two arguments handled w conditionals)
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
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log(showMessage)

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};


// Set up your eventlisteners here
  //document.getElementById("").addEventListener("",() {
    //get inputs 

  //});

//setTimeout(functionName, timeToWait)
//greetUser();

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

