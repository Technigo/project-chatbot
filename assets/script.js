// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const inputWrapper = document.querySelector(".input-wrapper")
const bothButtons = document.querySelectorAll(".button");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");


// Global variables, if you need any, declared here

// Functions declared here
const helpButtons = () => {
  bothButtons.forEach(button => {
    button.classList.add("button-active");
  })
  buttonOne.innerHTML = "Physical";
  buttonTwo.innerHTML = "Psychological";
  inputWrapper.style.display = "none";
  showMessage(`Hello ${userName}. What kind of help would you need today?`, "bot");
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./assets/images/robot.png" alt="Bot" />
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
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
form.addEventListener("submit", (event) => {
  event.preventDefault();
  userName = document.querySelector("#input").value;
  if (userName.length === 0 || !userName) {
    showMessage("Please provide your name", "bot");
  } else {
    showMessage(userName, "user");
    setTimeout(helpButtons, 800);
  }
})

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
