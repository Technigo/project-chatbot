// ----- Variables that point to selected DOM elements -----

const chat = document.getElementById('chat');
const ticketBtn = document.getElementById('ticket-btn');
const chatbot = document.getElementById('chatbot');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const ticketBtnContainer = document.getElementById("ticket-btn-container");


// If you need any global variables that you can use across different functions, declare them here:


// ----- Declare your functions after this comment -----

// This function will add a chat bubble in the correct place.
// showMessage function takes arguments "message" and "sender".
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message.
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-icon.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message.
  } else if (sender === 'bot') {

    console.log(message)

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-icon.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box.
  chat.scrollTop = chat.scrollHeight
}

// Bot pop-up-function:
// Add class to hide ticket-btn-container + remove class from chatbot so it's visible.
const botPopUp = () => {
  ticketBtnContainer.classList.add("ticketBtnContainer");
  chatbot.classList.remove("chatbot");
  setTimeout(() => greetUser(), 500);
}

// Start of the bot
// Question 1
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "..." for message, and the argument "bot" for sender.
  showMessage("Welcome to the Cinema City Ticket Bot!", 'bot');

  setTimeout(() => {
    showMessage("What is your name?", 'bot');
  }, 1000);
}

const handleNameInput = (event) => {
  event.preventDefault(); // Prevents the chat to reload.
  const name = nameInput.value; // Stores the value in a variable for easy access after we clear it from the input.
  showMessage(name, "user");
  nameInput.value = ""; // Clears the input field after message shows.

  // After 1 second, show the next question by invoking the next function. Passing the name into it to have access to the user's name if we want to use it in the next question from the bot.
  setTimeout(() => movie(name), 1000);
}

// ----- Set up your eventlisteners here -----
// When ticket button is clicked, bot greets and asks first question.
ticketBtn.addEventListener("click", botPopUp);
nameForm.addEventListener("submit", handleNameInput);


// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.