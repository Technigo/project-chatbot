// VARIABLES THAT POINT TO SELECTED DOM ELEMENTS
const chat = document.getElementById('chat');
const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('name-input');


// GLOBAL VARIABLES
let userAnswer = ""; // stores users answer in a variable globally for use anywhere

// FUNCTIONS

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

const greetUser = () => {
    // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
    showMessage("Hello there, What's your name?", 'bot')
    // Just to check it out, change 'bot' to 'user' here 👆
}

// A callback function to handle the updated userAnswer further down
const handleUserAnswer = (answer) => {
    console.log(answer);
};

// "clickingPreventsDefault" prevents the default form from submitting
// Function to send the form. It runs the function showMessage, so that whatever the user has typed is shown in the user part of the bot. 
const submitForm = (clickingPreventsDefault, callback) => {
    clickingPreventsDefault.preventDefault();
    // gets the text (value) written in the input field and stores it in a the global variable userAnswer
    userAnswer = inputField.value;
    callback(userAnswer);
    showMessage(`${userAnswer}`, 'user');
    // clears the inputfield after enter is pressed or the submit button has been clicked
    inputField.value = "";
};

//When user submits a message, the bot should respond with an appopriate answer

// EVENT LISTENERS
submitBtn.addEventListener("click", (bringBackAnswer) => {
    submitForm(bringBackAnswer, handleUserAnswer)
});

// MISC
// The greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);

/*
if (typeof userAnswer === 'string') {
    console.log("hello")
  }
*/




/*
COMMENT TO README INCASE I USE THIS
I was trying to reach the text the user had typed into the input, but found that very tricky. I tried making the variable that stored the value global, but it still wouldn't log it on testing. The problem was that the answer was logged within a function, and making the variable global didn't work because Javascript loads asynchronously = the submitForm function had not finished executing when I tried to access it. 

After a lot of trial and error I found a way to do this using a callback function. The callback function is created higher up, and then added as a parameter in the submitForm function. After updating the userAnswer, the callback is invoked with the updated answer as an argument. This ensures that the handleUserAnswer function is called at the right time, after the userAnswer has been updated.*/