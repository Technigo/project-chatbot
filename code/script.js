// START Variables that point to selected DOM elements
const chat = document.getElementById('chat');

//END Variables that point to selected DOM elements
// START global variables


//END global variables

// START functions
// function that adds a chat bubble in the correct place based on who the sender is
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
    console.log(sender === 'user')
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

//function that asks user for name
const askName = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there!\nWelcome to the Bill Splitter.\nI will be the bot serving you today.\n May I ask, what is your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

//this adds a delay to the askName function
/* When website loaded, chatbot asks first question. normally we would invoke a function like this:
  greeting()
  But if we want to add a little delay to it, we can wrap it in a setTimeout:
  setTimeout(functionName, timeToWaitInMilliSeconds)
  This means the greeting function will be called 1.2 second after the website is loaded.*/
  setTimeout(askName, 1200);

//function that stores the name

//conditional if input is left empty

// START eventlisteners


//END
//END functions