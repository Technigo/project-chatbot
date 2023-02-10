// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const inputWrapper = document.getElementById('input-wrapper');
const moodStressedBtn = document.getElementById('mood-stressed');
const moodHappyBtn = document.getElementById('mood-stressed')

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log (`the user responds with: "${message}"`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log(`The bot asks: "${message}"`)
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


//This function deals with the name-input

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there! What's your name?", 'bot');

}

sendBtn.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('User has types their name');
  //Variable that stores the nameInput as name.
  const name = nameInput.value
  showMessage(`${name}`, 'user')
  //clears input field
  nameInput.value = ''
  //Here, I call the next functions
  setTimeout(() => howAreYouFeeling(name), 1500)
})

const howAreYouFeeling = (name) => {
  showMessage(`Happy to have you here, ${name}! Are you feeling anxious or stressed today?`, 'bot')
  inputWrapper.innerHTML = `
      <div class="input-wrapper" id="input-wrapper">
        <form id="name-form">
          <button id="mood-stressed" class="mood-btn" type="submit">
            Yes, a little.
          </button>
          <button id="mood-stressed" class="mood-btn" type="submit">
            Yes, very much!
          </button>
          <button id="mood-happy" class="mood-btn" type="submit">
            No, I feel calm.
          </button>
`
}







/*
const handleNameInput = (e1) => {
  e1.preventDefault()
  console.log("User has typed their name")
  const name = nameInput.value
  showMessage(name, "user")
  nameInput.value = ""
}


// Set up your eventlisteners here
sendBtn.addEventListener("click", handleNameInput);
*/


setTimeout(greetUser, 1000);