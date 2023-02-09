// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const userInput = document.getElementById('user-input');
const userForm = document.getElementById ('user-form'); 
const sendBtn = document.getElementById ('sendBtn'); 
const inputWrapper = document.getElementById ('input-wrapper'); 



// If you need any global variables that you can use across different functions, declare them here:

const botReply = (msg) => {
  showMessage (msg, 'bot')
}

const userReply = (msg) => {
  showMessage (msg, 'user')
}

// Declare your functions after this comment




// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("The user is asking a question")
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
    console.log ("The bot is writing")
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


//First reply from bot 
const firstLine = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  botReply("Knock knock", 'bot');
}

setTimeout (() => firstLine (), 2000)


//Second reply from bot
const secondLine = () => {
  botReply("Tank", 'bot');
} 

//Answer from the user

setTimeout(() => secondLine, 1000)

//Third reply from bot
  const thirdLine = () => {
    // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
    botReply("You're welcome!", 'bot');
  }



  // Here is the function for the user's input 


// Set up your eventlisteners here
  //Initial button click, here I should get the name entered. If someone hits enter works too.   
sendBtn.addEventListener('click', (event) => {
  event.preventDefault(); //prevents the page to auto save before running or code?
  //Store the value in a variable so I can access it after we clear it from the input. 

  let userReply = userInput.value ; 
  showMessage(`${userReply}`, 'user');
  userInput.value = ''
})

setTimeout(() => firstLine, 3000)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
