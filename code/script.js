// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat")
const sendBtn = document.getElementById("send-btn")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    console.log("message is:", message)
    console.log("sender is:", sender)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/child-2707415_1280.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    console.log("message is:", message)
    console.log("sender is:", sender)

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/jaws-4659701_1280.png" alt="Bot" />
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
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage(
    `Hi, I'm Sharky 😊
    Let's get started!
    What's your name?`,
    `bot`
  )
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

// Eventlisteners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 2000)

const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value
  showMessage(`I'm ${name}!`, "user")
  nameInput.value = ""
  setTimeout(() => firstChoice(name), 100)
  nameForm.remove()
}

sendBtn.onclick = handleNameInput
let choice
// second message from bot
const firstChoice = (name) => {
  showMessage(
    `Nice to meet you ${name}!👋
  What type of haircut would
  you like to have ?`,
    `bot`
  )
  // added the 3 buttons for choice

  inputWrapper.innerHTML = `<div id="button-form">
  <button id="short">Short</button>
  <button id="medium">Medium</button>
  <button id="long">Long</button></div>`
  // added event listener for the buttons on click to get the choice
  document.getElementById("short").addEventListener("click", () => {
    choice = "Short"
    // second message from user
    showMessage("I would like a short cut!", "user")
    setTimeout(() => styleSelect(choice), 1500)
  })
  document.getElementById("medium").addEventListener("click", () => {
    choice = "Medium"
    showMessage("I would like a medium cut!", "user")
    setTimeout(() => styleSelect(choice), 1500)
  })
  document.getElementById("long").addEventListener("click", () => {
    choice = "Long"
    showMessage(`I would like a ${choice} cut!`, "user")
    setTimeout(() => styleSelect(choice), 1500)
  })

  console.log(choice)
}
// after function "styleSelect" the choice is undefined
const styleSelect = (choice) => {
  showMessage(
    `All right, we will give you a ${choice} cut.
    Please choose which type of style you want 💇`,
    `bot`
  )

  let style
  inputWrapper.innerHTML = `<select id="style-choice">
  <option id="default" value="select a style" selected>↓Select a style...</option>
  <option id="curly" value="curly">Curly</option>
  <option id="straight" value="straight">Straight</option>
  <option id="wavy" value="wavy">Wavy</option></select>`

  document.getElementById("curly").addEventListener("change", () => {
    style = "curly"
    cons
    showMessage(`I would like a ${style} cut!`, "user")
    setTimeout(() => genderSelect(style), 2000)
  })
  document.getElementById("straight").addEventListener("change", () => {
    style = "straight"
    showMessage(`I would like a ${style} cut!`, "user")
    setTimeout(() => genderSelect(style), 2000)
  })
  document.getElementById("wavy").addEventListener("change", () => {
    style = "wavy"
    showMessage(`I would like a ${style} cut!`, "user")
    setTimeout(() => genderSelect(style), 2000)
  })
}
const genderSelect = (style) => {
  showMessage(
    `Great choice! You will get your desired ${style} styling!
  Will that be for a girl or a boy?`,
    `bot`
  )
}


const randomMe;
randomMe=3




