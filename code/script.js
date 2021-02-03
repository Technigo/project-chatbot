// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const form = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")

// Global variables, if you need any, declared here
let question = 1;

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
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

// Starts here
// First message
const greeting = () => {
  showMessage(`Welcome to Technigo Cinema! What is your name?`, 'bot')
}

//Question 1
const handleNameInput = (event) => {
  event.preventDefault()
  const userName = nameInput.value
  nameInput.value = ""
  showMessage (userName, "user")
  setTimeout (() => showMessage (`Hi ${userName}!`, 'bot'), 1000)
  setTimeout (() => askMovieOptions (`What kind of movie would you like to see today? Choose from the list below.`, 'bot'), 2000)
  };

//Question 2
const askMovieOptions = () => {
  showMessage (`What kind of movie would you like to see today? Choose from the list below: `, 'bot')
  inputWrapper.innerHTML=`
<button id="animation">Animation</button>
<button id="action">Action</button>
<button id="comedy">Comedy</button>
<button id="horror">Horror</button>`

document.getElementById("animation").addEventListener("click", () => {
  showMessage("Great choice!", "bot")
  setTimeout (() => inputWrapper.innerHTML=`
<button id="the-invisible-girl">The Invisible Girl</button>
<button id="we-bare-bears">We Bare Bears: The Movie</button>
<button id="the-croods">The Croods: A New Age</button>
`, 1000)
})

document.getElementById("action").addEventListener("click", () => {
  showMessage("Great choice! Go ahead and pick the best one.", "bot")
  setTimeout (() => inputWrapper.innerHTML=`
<button id="honest-thief">Honest Thief</button>
<button id="tenet">Tenet</button>
<button id="bloodshot">Bloodshot</button>
`, 1000)
})

document.getElementById("comedy").addEventListener("click", () => {
  showMessage("Great choice! Go ahead and pick the best one.", "bot")
  setTimeout (() => inputWrapper.innerHTML=`
<button id="babyteeth">Babyteeth</button>
<button id="downhill">Downhill</button>
<button id="friendsgiving">Friendsgiving</button>
`, 1000)
})

document.getElementById("horror").addEventListener("click", () => {
  showMessage("Great choice! Go ahead and pick the best one.", "bot")
  setTimeout (() => inputWrapper.innerHTML=`
<button id="antebellum">Antebellum</button>
<button id="brahms">Brahms: The Boy 2</button>
<button id="come-play">Come Play</button>
`, 1000)
})

};

//Question 3


// Set up your eventlisteners here
form.addEventListener('submit', handleNameInput)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
