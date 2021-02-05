// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.querySelector("#name-form")
const main = document.querySelector("main")
const genreOptions = document.querySelector("#genre-options")
const buttonOptions = document.querySelector("#button-options")
const comedyBtn = document.querySelector("#comedy-btn")
const actionBtn = document.querySelector("#action-btn")
const horrorBtn = document.querySelector("#horror-btn")
const romanticBtn = document.querySelector("#romantic-btn")
const randomMovieBtn = document.querySelector("#random-movie-btn")
const backToGenreBtn = document.querySelector("#back-to-genre-btn")

const genres = ["comedy", "action", "horror", "romantic"]
const comedyMovies = ["The Intouchables", "Back to the Future", "Toy Story", "Up", "Monty Python and the Holy Grail", "Inside Out", "Mary and Max", "The Truman Show", "The Big Lebowski", "Zoomania"]
const actionMovies = ["The Dark Knight", "The Lord of the Rings", "Inception", "Matrix", "Star Wars", "Gladiator", "Léon", "Terminator", "Spider-Man", "Avengers"]
const horrorMovies = ["Psycho", "Shining", "Alien", "The Thing", "The Exorcist", "Rosemary's Baby", "Let the Right One In", "Halloween", "Saw", "28 Days Later"]
const romanticMovies = ["Forrest Gump", "Titanic", "Casablanca", "Amélie", "La La Land", "The Perks of Being a Wallflower", "Slumdog Millionaire", "Groundhog Day", "Annie Hall", "The Graduate"]

// Button Sounds 
const comedySound = new Audio(" https://www.soundjay.com/human/sounds/laughter-2.mp3");
const actionSound = new Audio(" https://www.soundjay.com/mechanical/sounds/explosion-02.mp3");
const horrorSound = new Audio(" https://www.soundjay.com/human/sounds/woman-scream-01.mp3");
const romanticSound = new Audio(" https://www.fesliyanstudios.com/play-mp3/4261");

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
  showMessage(`Hello there, what is your name?`, 'bot')
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
    setTimeout(showGenre, 500)
  }
})

// show genre (show buttons) bot ask user to pick a genre

let isFirstTime = true

const showGenre = () => {
  nameForm.classList.add('hide')
  buttonOptions.classList.remove("active")
  genreOptions.classList.add('active')
  if (isFirstTime) {
    showMessage(`Hi ${nameUser}! What kind of movie would you like to watch?`, "bot")
    isFirstTime = false
  } else {
    showMessage(`Please choose another genre.`, "bot")
    for (genre of genres) {
      main.classList.remove(genre)
      randomMovieBtn.classList.remove(`${genre}-btn`)
    }
  }
}

// show random movie title generator button & go back button




let genreChoice = null
const showButtons = (genre) => {
  setTimeout(() => {
    showMessage(`${genre.slice(0, 1).toUpperCase()}${genre.slice(1)}`, "user")
  }, 500);
  setTimeout(() => {
    showMessage(`Nice choice! I can give you a recommendation for a great ${genre} movie!`, 'bot')
    genreChoice = genre
    genreOptions.classList.remove('active')
    buttonOptions.classList.add('active')
    main.classList.add(genre)
    randomMovieBtn.classList.add(`${genre}-btn`)
  }, 1000);
}



comedyBtn.addEventListener("click", (genre) => {
  showButtons("comedy")
  setTimeout(() => {
    comedySound.play();
  }, 1000);
  comedySound.volume = 0.1;
})
actionBtn.addEventListener("click", (genre) => {
  showButtons("action")
  setTimeout(() => {
    actionSound.play();
  }, 1000);
  actionSound.volume = 0.1;
})
horrorBtn.addEventListener("click", (genre) => {
  showButtons("horror")
  setTimeout(() => {
    horrorSound.play();
  }, 1000);
  horrorSound.volume = 0.1;

})
romanticBtn.addEventListener("click", (genre) => {
  showButtons("romantic")
  setTimeout(() => {
    romanticSound.play();
  }, 1000);
  romanticSound.volume = 0.1;

})


// go back to show genre

backToGenreBtn.addEventListener("click", showGenre)

// generate random movie title

randomMovieBtn.addEventListener("click", (message) => {
  if (genreChoice === "comedy") {
    setTimeout(() => {
      showMessage(comedyMovies[getRandomNumber()], "bot")
    }, 300)
  } else if
    (genreChoice === "action") {
    setTimeout(() => {
      showMessage(actionMovies[getRandomNumber()], "bot")
    }, 300)
  } else if
    (genreChoice === "horror") {
    setTimeout(() => {
      showMessage(horrorMovies[getRandomNumber()], "bot")
    }, 300)
  } else {
    setTimeout(() => {
      showMessage(romanticMovies[getRandomNumber()], "bot")
    }, 300)
  }
}
)
let getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
}