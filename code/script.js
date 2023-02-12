// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const name = document.getElementById("name-input");
const sendButton = document.getElementById("send");
const inputWrapper = document.getElementById("input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:

let questionNumber = 1;

let userName = "";

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
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

//const nextQuestion = (message) => {};
// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

// Store the value in a variable so I can access it after we

// Initial button click, here I should get the name entered
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  userName = name.value;
  showMessage(`${userName}`, "user");
  name.value = ""; // clear it from the input
  setTimeout(() => askZodiacSigns(), 1000); //calls the function askZodiac
});

/* sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  userName = name.value;
  showMessage(`${userName}`, "user");
  name.value = ""; // clear it from the input
  setTimeout(() => nextQuestion(), 1000); //calls the function askZodiac
}); */

//Here I call the function where I welcome the user and ask them to tell me their zodiac sign
const askZodiacSigns = () => {
  console.log("this works");
  showMessage(
    `Welcome ${userName} happy youre here! What's your zodiac sign?`,
    "bot"
  );
};
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  userName = name.value;
  showMessage(`${userName}`, "bot");
  name.value = ""; // clear it from the input
  setTimeout(() => nextQuestion(), 1000); //calls the function askZodiac
});

/* ---------Attempt to add next question with getElementById (not working) -----------------*/

/* const nextQuestion = () => {
  console.log("next question works!");
  showMessage("next question is working", bot);
    setTimeout(() => nextQuestion(), 1000); //calls the function neqtQuestion
    name.value = ""; // clear it from the input
  };
  inputWrapper.innerHTML = `
  <form id="zodiac-form">
          <label for="zodiac-form">Zodiac</label> 
          <input id="zodiac-input" type="text" />
          <button class="send-btn" id="send" type="submit">Send</button>
          <p> something </p>
        </form>
   `; */
// ----------------------------------- Attempt end

/* 
const nextQuestion = () => {
  showMessage(`OMG youre a ${userName}`, "bot");
  userName = name.value;
  name.value = ""; // clear it from the input
  setTimeout(() => nextQuestion(), 1000); //calls the function askZodiac
}; */

//  //declare variable using "input-wrapper" from HTML - this can go at the top of the page
//  //Then write the code to change the HTML in Javascript

//   // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender

// sendButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   // Store the value in a variable so I can access it after we
//   // clear it from the input
//   let answer = name.value;
//   showMessage(`${answer}`, "user");

//   // Clears the input field
//   name.value = "";
//   //Here I call the function where I present the dishes to choose from. I will also pass the userName
// });

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
