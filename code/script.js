// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('user');
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
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

// welcome message, ask for user's name
const greeting = () => {
  showMessage(`Hello there, what is your name ?`, 'bot')
}

setTimeout(greeting, 1000)
const nameForm = document.querySelector("#name-form")
let nameUser = null;

nameForm.addEventListener("submit", (event) => {
  event.preventDefault()
  nameUser = document.querySelector("#name-input").value
  if (nameUser.length === 0 || nameUser === null) {
    showMessage('Please tell me your name', 'bot')
  }
  else {
    showMessage(nameUser, "user")
    setTimeout(showGenre, 1000)
  }

})

// show genre (show buttons)

const movieOptions = document.querySelector("#movie-options")

const showGenre = () => {
  showMessage(`Hi ${nameUser}, what kind of movie would you like to watch?`, "bot")
  movieOptions.classList.remove('hide')
  nameForm.classList.add('hide')
}
// user interaction: click button

const comedyBtn = document.querySelector("#comedy-btn")
const actionBtn = document.querySelector("#action-btn")
const horrorBtn = document.querySelector("#horror-btn")
const romanticBtn = document.querySelector("#romantic-btn")

// show random movie title generator button & go back button

const chooseMovieOptions = (type) => {
  movieOptions.classList.add('hide')
  showMessage(type, "user")
  showMessage(`You chose ${type}!`, 'bot')
  showMessage(`Here are four ${type} movie options:`, 'bot')
}

comedyBtn.addEventListener("click", (type) => {
  chooseMovieOptions("comedy")
})
actionBtn.addEventListener("click", (type) => {
  chooseMovieOptions("action")
})
horrorBtn.addEventListener("click", (type) => {
  chooseMovieOptions("horror")
})
romanticBtn.addEventListener("click", (type) => {
  chooseMovieOptions("romantic")
})

// show random movie title generator button & go back button

const showButtons = () => {
  nameForm.innerHTML = ` 
  <div class="" id="bu">
    <button id="random-movie-btn">Random</button>
    <button id="go-back-btn">Go Back</button>
  </div>
 `
}
// generate random movie title
// go back to show genre