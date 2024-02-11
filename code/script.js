// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat")
const sendBtn = document.getElementById("send-btn")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")
const firstBtn = document.getElementById("first-btn")
const secondBtn = document.getElementById("second-btn")
const thirdBtn = document.getElementById("third-btn")

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
  inputWrapper.innerHTML += `
<form id="button-form">
        <button id="first-btn" class="first-btn" type="submit" value="SHORT">SHORT</button>
        <button id="second-btn" class="second-btn" type="submit"value="MEDIUM">MEDIUM</button>
        <button id="third-btn" class= "third-btn" type="submit" value="LONG">LONG</button>
      </form>
`
}

sendBtn.onclick = handleNameInput

const firstChoice = (name) => {
  showMessage(
    `Nice to meet you ${name}!👋
  What type of haircut would
  you like to have ?`,
    `bot`
  )
}

// const handleBtnInput = () => {
//   const choice = firstBtn.value
//   showMessage(`I would like a Short cut ${choice}!`, `user`)
//   firstBtn.value = ""
//   setTimeout(() => secondChoice(choice), 1000)
// }
// console.log(choice)

// firstBtn.onclick = handleBtnInput
// const secondChoice = (choice) => {
//   showMessage(
//     `All right, we will give you a Short ${choice} cut.
//   Please choose which type of style you want 💇`,
//     `bot`
//   )
// }
