// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const displayMain = document.querySelector("main") //for start button pourposes
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts an HTML section inside the chat with the posted message from the bot
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

  // This makes the chat scroll to the last message when there are too many to be shown 
  chat.scrollTop = chat.scrollHeight
}

//FUNCTIONS START HERE////////////////////////////////////////////////////////////////////////

// 1 Start screen, hide chat section, just h1 and start button.
const startScreen = () => {  
  displayMain.style.display = "none"
  
  const startButton = document.createElement("button") //Create a button
  startButton.textContent = "START"
  startButton.classList.add ("start-button")
  
  startButton.addEventListener("click", () =>{ //Add event listener to the button
    displayMain.style.display = "flex" // Show the main element when the button es clicked
    // Remove the button from the document
    startButton.remove()
  })
  // Append the button to the document body
  document.body.appendChild(startButton)
}
startScreen()

// 2 A function to start the conversation
const greetUser = () => {
  showMessage("Wellcome to this amazing chat bot! What's your name?", "bot")
  }

setTimeout(greetUser, 1800)

// 4 Function to greet the user and ask if he would like to order
// 5 Function to handle name input
// 6 Function to handle form submission
nameForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const userName = nameInput.value
  showMessage(userName, 'user') // Show user input in the chat as a user message
  
  setTimeout(() => {
    showMessage(`Wellcome ${userName}!`, "bot")
  }, 1800)

  setTimeout(() => {
    showMessage(`Live is short, don't lose more time. What do you want to order?`, "bot")
  }, 2500)

  
})


// 7 Eventlisteners goes here 👇




/* const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot') */