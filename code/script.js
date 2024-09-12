// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const startBtn = document.getElementById('start-btn')
const enterName = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input') // Get the user name
const sendBtn = document.getElementById('send-btn')

// Functions go here 👇

//Start conversation

const startChat = () => {
  greetUser() // Missing closing bracket added below
} // <-- Closing bracket for startChat function

const showMessage = (message, sender) => {
  // Posted message from the user
  if (sender === 'user') {
    console.log(`Sender is user`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // Posted message from the bot
  } else if (sender === 'bot') {
    console.log(`Sender is bot`)
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

// ****** Eventlisteners goes here 👇 *******

//Click Start conversation button
startBtn.addEventListener("click", () => {
  startChat()
  startBtn.classList.add("hidden") // Hide start button
  enterName.classList.add("shown") // Show hidden input field
})

//Click Send button to triggers welcome userName message
sendBtn.addEventListener("click", (event) => {
  event.preventDefault() 
  const userName = nameInput.value

  if (userName) { 
    showMessage(userName, 'user')
    nameInput.value = '' // Clear input field
    setTimeout(() => {
      showMessage(`Nice to meet you, ${userName}. Please start your order by selecting your favorite coffee shop.`, 'bot')
    }, 1000) // 
  }
})

//setTimeout(greetUser, 500)
