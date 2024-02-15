// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const displayMain = document.querySelector("main")

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

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//FUNCTIONS START HERE////////////////////////////////////////////////////////////////////////

// 1 Start screen, hide chat section, just h1 and start button.
const startScreen = () => {  
  //Hidde main element
  displayMain.style.display = "none"

  //Create a button
  const startButton = document.createElement("button")
  startButton.textContent = "START"
  startButton.classList.add ("start-button")
  //Add event listener to the button
  startButton.addEventListener("click", () =>{
    // Show the main element when the button es clicked
    displayMain.style.display = "block"
    // Remove the button from the document
    startButton.remove();
  })
  // Append the button to the document body
  document.body.appendChild(startButton)
}
startScreen()
showMessage()

// 2 A function to start the conversation

// 3 Function to handle user responses

// 4 Function to greet the user and ask if the would like to order

// 5 Function to handle name input

// 6 Function to handle form submission

// 7 Eventlisteners goes here 👇


// Here we invoke the first function to get the chatbot to ask the first question when the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

/* const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot') */