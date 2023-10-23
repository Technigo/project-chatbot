// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const nameForm = document.getElementById("name-form");
const button = document.getElementsByClassName("send-btn");
// If you need any global variables that you can use across different functions, declare them here:
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
    console.log("It workssss!"); //added for step 1
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
  //return (userAnswered);
};
// Starts here
const greetUser = () => {
  showMessage("Hello you! My name is Bob the Bot. Who are you?", "bot");
};
const handleNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(`My name's ${userName}.`, "user");
  setTimeout(reply, 1000);
};

const reply = () => {
  showMessage(`Welcome ${userName}! Do you feel up for a quiz about random facts? Type Yes, or No`, "bot");
}

const firstquestion = (userResponse) => {
  showMessage()
  if (userResponse === "Yes") {
    showMessage(`Great! Lets start!`, "bot")

  } else if (userResponse === "No") {
    showMessage(`Okey, maybe another time then! Have a great day`, "bot")

  } else {
    showMessage(`I didn't quite get that. Please try again`, "bot");
  }
}

// Set up your eventlisteners here
nameForm.addEventListener("submit", (event) => {
  handleNameInput(event);
  AbortSignal;
});

//this eventListener is what's wrong!!!!!!!!!!!!!!!!
//button.addEventListener("click", () => {
//let userResponse = .value.trim().toLowerCase();
//firstquestion(userResponse);

//});


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);


//add a button called "fancy a quiz?" to start the chatbot.
//start with the question about the name.
//user input: name.
//bot: hello {$Name}. I hope youre up for a quiz in random facts! lets start, shall we?
//buttons, yes or no.
//if yes: Bot: great! first question!
//if no: okay, maybe another time then. Bye bye for now. Don't forget that you're beautiful <3
//first question: la la la
//two button ansers, right or wrong.
//if right: You're right {$Name}!
//if wrong: oh no, unfortunately thats not correct {$Name}.
//second question..
//Make 5 questions.
//Sum up the points.