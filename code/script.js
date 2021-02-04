// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.querySelector("#name-form")
const genreOptions = document.querySelector("#genre-options")
const buttonOptions = document.querySelector("#button-options")
const comedyBtn = document.querySelector("#comedy-btn")
const actionBtn = document.querySelector("#action-btn")
const horrorBtn = document.querySelector("#horror-btn")
const romanticBtn = document.querySelector("#romantic-btn")
const randomMovieBtn = document.querySelector("#random-movie-btn")
const backToGenreBtn = document.querySelector("#back-to-genre-btn")

const comedyMovies = ["movie1", "movie2", "movie3", "movie4", "movie5", "movie6", "movie7", "movie8", "movie9", "movie10"]
const actionMovies = ["movie1", "movie2", "movie3", "movie4", "movie5", "movie6", "movie7", "movie8", "movie9", "movie10"]
const horrorMovies = ["movie1", "movie2", "movie3", "movie4", "movie5", "movie6", "movie7", "movie8", "movie9", "movie10"]
const romanticMovies = ["movie1", "movie2", "movie3", "movie4", "movie5", "movie6", "movie7", "movie8", "movie9", "movie10"]

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

// Bot validate user name
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

// show genre (show buttons) bot ask user to pick a genre

let isFirstTime = true

const showGenre = () => {
  nameForm.classList.add('hide')
  buttonOptions.classList.remove("active")
  genreOptions.classList.add('active')
  if (isFirstTime) {
    showMessage(`Hi ${nameUser}, what kind of movie would you like to watch?`, "bot")
    isFirstTime = false
  } else {
    showMessage(`Choose another genre.`, "bot")
    main.classList.remove("comedy")
    main.classList.remove("action")
    main.classList.remove("horror")
    main.classList.remove("romantic")
  }
}

// show random movie title generator button & go back button

const main = document.querySelector("main")


let genreChoice = null
const showButtons = (genre) => {
  genreOptions.classList.remove('active')
  buttonOptions.classList.add('active')
  main.classList.add(genre)
  showMessage(genre, "user")
  showMessage(`You chose ${genre}!`, 'bot')
  genreChoice = genre
}

comedyBtn.addEventListener("click", (genre) => {
  showButtons("comedy")
})
actionBtn.addEventListener("click", (genre) => {
  showButtons("action")
})
horrorBtn.addEventListener("click", (genre) => {
  showButtons("horror")
})
romanticBtn.addEventListener("click", (genre) => {
  showButtons("romantic")
})

// go back to show genre

backToGenreBtn.addEventListener("click", showGenre)

// generate random movie title

randomMovieBtn.addEventListener("click", (message) => {
  if (genreChoice === "comedy") {
    showMessage(comedyMovies[getRandomNumber()], "bot")
  } else if
    (genreChoice === "action") {
    showMessage(actionMovies[getRandomNumber()], "bot")
  } else if
    (genreChoice === "horror") {
    showMessage(horrorMovies[getRandomNumber()], "bot")
  } else if
    (genreChoice === "romantic") {
    showMessage(romanticMovies[getRandomNumber()], "bot")
  } else {
    console.log("not working")
  }
}
)
let getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
}