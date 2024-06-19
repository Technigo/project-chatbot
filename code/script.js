// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const nameFormChildren = nameForm.querySelectorAll("*") // all children i formuläret
let nameInput = document.getElementById("name-input")
const output = document.getElementById("output")
const selectbutton = document.getElementById("selectbutton")
const inputWrapper = document.getElementById("input-wrapper")

// Functions goes here 👇
// A function that will add a chat bubble in the correct place based on who the sender is
function showMessage(message, sender) {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        <img src="assets/user.png" alt="User" />  
        </div>
      </section>`

    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>`
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", "bot")
}

//type name in name-input

const handleNameInput = (event) => {
  event.preventDefault()
  const username = nameInput.value

  showMessage(`Hi, I'm ${username}`, "user")
  let input = (nameInput.value = "")

  //get "Hello 'name' in return
  // Set a timer

  // callback func ()
  setTimeout(() => {
    showMessage(
      `Welcome to week 2, ${username}, nice to meet you. 
    Please pick a programming language that'll make your brain melt 
    and drip out through your nose`,
      "bot"
    )
  }, 1000)
  setTimeout(clickButton, 1000)
}

//when a button is clicked, a message shows accordingly
const clickButton = () => {
  nameFormChildren.forEach((child) => {
    child.style.display = "none"
  })

  // User choice of lagnuage
  nameForm.innerHTML = `
  <button id="javaScript" type="submit" class="choice-btn">JavaScript</button>
  <button id="python" type="submit" class="choice-btn">Python</button>
  <button id="java" type="submit" class="choice-btn">Java</button>
  `

  document.getElementById("javaScript").addEventListener("click", nextFunction)
  document.getElementById("python").addEventListener("click", nextFunction)
  document.getElementById("java").addEventListener("click", nextFunction)
}

const nextFunction = (e) => {
  e.preventDefault()
  showMessage("Attaboy, you got another thing coming!", "bot")
  setTimeout(() => askForLevel(), 1000)
}
//ask for the users level of knowledge
const askForLevel = () => {
  showMessage("Please let me know your experience in that language", "bot")
  inputWrapper.innerHTML = `
  <select id="level-select">
  <option value="">Select your level</option>
  <option value="Beginner">Beginner</option>
  <option value="Intermediate">Intermediate</option>
  <option value="Advanced">Advanced</option>
  </select>
  <button id="levelBtn">Select</button>
  `
  document.getElementById("levelBtn").addEventListener("click", selectLevel)
}
const selectLevel = () => {
  const knowledgeLevel = document.getElementById("level-select").value

  if (knowledgeLevel) {
    showMessage(`You selected: ${knowledgeLevel}`, "user")

    setTimeout(() => {
      showMessage(
        `Thank you for letting me know your level is ${knowledgeLevel}. We'll ensure you get a challenge!`,
        "bot"
      )
      setTimeout(() => {
        askForAge()
      }, 1500)
    }, 1000)

    inputWrapper.innerHTML = ""
  } else {
    showMessage("You didn't select a level of knowledge", "bot")
  }
}

//Ask the user for their age
const askForAge = () => {
  showMessage("Are you younger or older than 20?", "bot")
  inputWrapper.innerHTML = `
    <button id="youngerBtn">younger</button>
    <button id="olderBtn">older</button>
  `
  document
    .getElementById("youngerBtn")
    .addEventListener("click", () => selectAge("Young"))
  document
    .getElementById("olderBtn")
    .addEventListener("click", () => selectAge("Old"))
}
const selectAge = (ageType) => {
  showMessage(`${ageType}`, "user")
  const totalPrice = ageType === "Old" ? "2200€" : "1700€"
  showMessage(
    `Thank you, the total price for your education is ${totalPrice}. Would you like to proceed?`,
    "bot"
  )
  confirmationOptions()
}

const confirmationOptions = () => {
  inputWrapper.innerHTML = `
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
  `
  document
    .getElementById("yesBtn")
    .addEventListener("click", () => confirmOrder(true))
  document
    .getElementById("noBtn")
    .addEventListener("click", () => confirmOrder(false))
}

const confirmOrder = (isConfirmed) => {
  if (isConfirmed) {
    showMessage("Yes", "user")
    showMessage("Prepare for a bumpy ride, friend!", "bot")
  } else {
    showMessage("No", "user")
    showMessage(
      "No problem, you are always welcome back to take on a challenge!",
      "bot"
    )
  }
  inputWrapper.innerHTML = ""
}

// Eventlisteners goes here
nameForm.addEventListener("submit", handleNameInput)

//selectbutton.addEventListener("click", clickButton)

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 1000)
//setTimeout(showMessage, 2000)

//showMessage("Prepare for a bumpy ride, friend! Bye bye", "bot")
