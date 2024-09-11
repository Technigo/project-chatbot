// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const startBtn = document.getElementById('start-btn')
const enterName = document.getElementById('input-wrapper')

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    console.log (`Sender is user`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    console.log (`Sender is bot`)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation

const greetUser = () => {
  showMessage("Hello there fellow Java Junkie! What's your name?", 'bot')
}
    // Here we call the function showMessage, that we declared earlier with the argument:
    // "Hello there, what's your name?" for message, and the argument "bot" for sender
    //showMessage("Hello there! Did you know , what's your name?", 'bot')
    // Just to check it out, change 'bot' to 'user' here 👆 and see what happens

// Eventlisteners goes here 👇

const startChat = () => {
  greetUser()
}

startBtn.addEventListener("click", () => {
  startChat()
  startBtn.classList.add("hidden")
  enterName.classList.remove("hidden")
})

//setTimeout(greetUser, 500)

