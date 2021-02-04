// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const form = document.getElementById("name-form")
const input = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")

// Global variables, if you need any, declared here
let question = 0;
let userName = ""
let ticketNumber = ""

// Functions declared here
// This function will lead to the next question
const nxtQuestion = (answer) => {
  usrInput(answer)
    if (questionNumber === 1) {
      handleNameInput(answer)
      input = ""
    } 
    else if (questionNumber === 2) {
      askMovieOptions(answer)
      input =""
    } 
    else if (questionNumber === 3) {
      askForTickets(answer)
      input =""
    } 
  }

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
  questionNumber = 1;
  console.log(questionNumber)
  showMessage(`Welcome to Technigo Cinema! What is your name?`, 'bot')
}
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)

//Answer from the user
const usrInput = (answer) => {
    showMessage(answer, 'user');
}

//Question 1
const handleNameInput = () => {
  questionNumber = 2
  console.log(questionNumber)
  let userName = document.getElementById('name-input').value;
  setTimeout (() => showMessage(`Hi ${userName}!`, 'bot'), 1000)
  setTimeout (() => askMovieOptions (), 2000)
  };

//Question 2
const askMovieOptions = (question) => {
  questionNumber = 3
  console.log(questionNumber)
  showMessage(`What kind of movie would you like to see today? Choose from the list below: `, 'bot')
  inputWrapper.innerHTML = `
    <button id="animation">Animation</button>
    <button id="action">Action</button>
    <button id="comedy">Comedy</button>
    <button id="horror">Horror</button>`

  document.getElementById("animation").addEventListener("click", () => {
    showMessage("Great choice! Go ahead and pick the best one.", "bot")
    setTimeout(() => {
      whatMovie()
    }, 1000)
    let whatMovie = () => {
      inputWrapper.innerHTML =  `
      <button class="choice-btn" id="the-invisible-girl">The Invisible Girl</button>
      <button class="choice-btn" id="we-bare-bears">We Bare Bears: The Movie</button>
      <button class="choice-btn" id="the-croods">The Croods: A New Age</button>`
     
      const choiceBtn = document.querySelectorAll(".choice-btn")
      for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].addEventListener("click", () => nxtQuestion(choiceBtn[i].textContent))
      }
    }
  })

  document.getElementById("action").addEventListener("click", () => {
    showMessage("Great choice! Go ahead and pick the best one.", "bot")
    setTimeout(() => {
      whatMovie()
    }, 1000)
      let whatMovie = () => {
      inputWrapper.innerHTML =  `
      <button class="choice-btn" id="honest-thief">Honest Thief</button>
      <button class="choice-btn" id="tenet">Tenet</button>
      <button class="choice-btn" id="bloodshot">Bloodshot</button>`
    
      const choiceBtn = document.querySelectorAll(".choice-btn")
      for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].addEventListener("click", () => nxtQuestion(choiceBtn[i].textContent))
      }
    }
  })

  document.getElementById("comedy").addEventListener("click", () => {
    showMessage("Great choice! Go ahead and pick the best one.", "bot")
    setTimeout(() => {
      whatMovie()
    }, 1000)
      let whatMovie = () => {
      inputWrapper.innerHTML = `
        <button class="choice-btn" id="babyteeth">Babyteeth</button>
        <button class="choice-btn" id="downhill">Downhill</button>
        <button class="choice-btn" id="friendsgiving">Friendsgiving</button>`
    
      const choiceBtn = document.querySelectorAll(".choice-btn")
      for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].addEventListener("click", () => nxtQuestion(choiceBtn[i].textContent))
      }
    }
  })

  document.getElementById("horror").addEventListener("click", () => {
    showMessage("Great choice! Go ahead and pick the best one.", "bot")
    setTimeout(() => {
      whatMovie()
    }, 1000)
    let whatMovie = () => {
      inputWrapper.innerHTML = `
        <button class="choice-btn" id="antebellum">Antebellum</button>
        <button class="choice-btn" id="brahms">Brahms: The Boy 2</button>
        <button class="choice-btn" id="come-play">Come Play</button>
        `
      const choiceBtn = document.querySelectorAll(".choice-btn")
      for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].addEventListener("click", () => nxtQuestion(choiceBtn[i].textContent))
      }
    }
  })

};

//Question 3
const askForTickets = (question) => {
  questionNumber = 4
  console.log(questionNumber)
  showMessage (`How many tickets would you like to have?`, 'bot')
  inputWrapper.innerHTML = `
        <form id="name-form">
          <input id="name-input" type="text" />
          <button class="send-btn" type="submit">
            Send
          </button>
        </form>` 

}



// Set up your eventlisteners here
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const input = document.getElementById("name-input").value;
  nxtQuestion(input)
})




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)

