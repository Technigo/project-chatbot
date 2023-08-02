// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById("input-wrapper")
const nameInput = document.getElementById("input")
const greetBtn = document.getElementById("greet-btn")
const ignoreBtn = document.getElementById("ignore-btn")



// Declare your functions after this comment

// Declare a flag to track whether the initial greeting has been displayed
let initialGreetingDisplayed = false;

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("User")
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
    console.log("Bot")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/cat.png" alt="Bot" />
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
  showMessage("Maow?", 'bot');
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>Oh snap! I seem to have woken him up. What do I do?</p>", 'user');
  }, 1000)
  
  // Just to check it out, change 'bot' to 'user' here 👆
}

const greetBob = () => {
  showMessage("<p style='font-style: italic;'>You chose to greet Bob.</p>", 'user');
  setTimeout(() => {
    showMessage("Hello there little fella👋", 'user');
  }, 2000);
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>sniffs hand</p>", 'bot');
  }, 4000);
}

const showReloadBtn = () => {
  chat.innerHTML += `
  <button type="button" onclick="window.location.reload()">Reload page?</button>`;
}

const ignoreBob = () => {
  showMessage("You chose to ignore Bob.", 'user');
  showMessage("Bob feels sad now. 😿", 'bot');
  showReloadBtn();
}

// Set up your eventlisteners here

greetBtn.addEventListener("click", greetBob);
ignoreBtn.addEventListener("click", ignoreBob);



setTimeout(greetUser, 2000)