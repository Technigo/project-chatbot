// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById("name-input");
const btn = document.getElementById("send-btn");
// Find all the food choice button
const foodBtn = document.getElementById("foodChoice");

// If you need any global variables that you can use across different functions, declare them here:
// Bot replies with user name and ask the next question
// Problem : how to stop showing bot response at once from the beginnin 
// Possible solution, add question number so the bot can keep track of the current questions
// Declare the current question so we can use operator ++ to tell the bot we need to move on to the next question
let currerntQuestion = 1;

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    // console.log(showMessage("hello user",'bot'));
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
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
setTimeout(greetUser, 1000);
// Set up your eventlisteners here
// Get user input with getElementById
// Trigger event listener when user click the button "submit"
btn.addEventListener("click", (event) => {
  nameMsg(event);
})
// Trigger event listenner when user press enter
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter")
    nameMsg(event);
})

const nameMsg = (event) => {
  //I spent almost half a day to figure out why the reply won't stay there, Google save my life
  event.preventDefault();
  // get user input
  let userName = nameInput.value;
  showMessage(userName, 'user');
  setTimeout(() => {
    showMessage(`Nice to meet you ${userName}. What type of food would you like to order?`, "bot")
    // Hide the answer field after display the user name and ready for the next quesition 
    nameForm.classList.add("hidden")
    // Show the buttons after the answer field is hidden 
    foodChoice.classList.remove("hidden")
  }, 1000)
  //empty the input field
  nameInput.value = "";
  ;
  currerntQuestion++;
}

// const v = (event) => {
//   console.log(event);
// };
//show message according to the user's choice


// Loop through the buttons and add a click to event listener to each button

const displayChoice = (event) => {
  switch (event.target.id) {
    case 'pizza':
      showMessage("pizza", "user");
      break;
    case 'salad':
      showMessage("salad", "user");
      break;
    case 'pasta':
      showMessage("pasta", "user");
      break;
  }
};

foodBtn.querySelectorAll('button').forEach(button => button.addEventListener("click", displayChoice));





// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


