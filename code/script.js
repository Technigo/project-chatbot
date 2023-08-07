// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById("input-wrapper")
const nameInput = document.getElementById("input")


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
  showMessage("Hello there, how can I assist you today?", 'bot');
  setTimeout(() => {
    firstBtn.removeAttribute("hidden");
    secondBtn.removeAttribute("hidden");
    thirdBtn.removeAttribute("hidden");
  }, 1000)
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);

// Add this after the greetUser function
document.getElementById("userinput-form").addEventListener("submit", (event)=> {
  event.preventDefault();
  handleUserInput(event);
});


// Define the function to handle user input
const handleUserInput = (event) => {
  event.preventDefault(); // Prevent form submission
  const userInputSelect = document.getElementById("user-input");
  const selectedOption = userInputSelect.value;

  if (selectedOption !== "") {
    showMessage(selectedOption, 'user'); // Display user-selected option in the chat
    processUserInput(selectedOption);
    userInputSelect.value = ""; // Reset the dropdown selection
  }
}

const processUserInput = (selectedOption) => {
  // Process the selected option and provide bot responses accordingly
  switch (selectedOption) {
    case "option1":
      showMessage("You want help debugging.", 'bot');
      // Add specific response for Option 1
      break;
    case "option2":
      showMessage("You want help with Git.", 'bot');
      // Add specific response for Option 2
      break;
    case "option3":
      showMessage("You want help with time management.", 'bot');
      // Add specific response for Option 3
      break;
    case "option4":
      showMessage("You want help with time management.", 'bot');
      // Add specific response for Option 3
      break;  
    case "option5":
      showMessage("You want help with time management.", 'bot');
      // Add specific response for Option 3
      break;
    case "option6":
      showMessage("You want help with time management.", 'bot');
      // Add specific response for Option 3
      break;
    case "option7":
      showMessage("You want help with time management.", 'bot');
      // Add specific response for Option 3
      break;
    default:
      showMessage("I'm sorry, I didn't recognize your selection. Please try again.", 'bot');
  }
}
