let currentQuestion = ""
const chat = document.getElementById("chat")
const inputWrapper = document.getElementById("input-wrapper")
const audio = document.getElementById("botAudio")
const audioUser = document.getElementById("userAudio")
let name
let choice
let style
let lastConfirmation
let gender

// Moved the greeting function here and added the form which we removed from HTML👇🏻
/* function playAudioEffect(){
  botAudio.play();
} */

const greetUser = () => {
  showMessage(
    `Hi, I'm Sharky 😊
    Let's get started!
    What's your name?`,
    `bot`
  )
  audio.play()
  inputWrapper.innerHTML = `<form id="name-form">
    <input
      placeholder="--------------------------------------------------------------"
      id="name-input"
      type="text"
    />
    <button id="send-btn" class="send-btn" type="submit">→</button>
  </form>`
  const sendBtn = document.getElementById("send-btn")
  if (sendBtn) {
    sendBtn.onclick = handleNameInput
  }
}
// Moved the message function here 👇🏻

const showMessage = (message, sender) => {
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
    audioUser.play()
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
    audio.play()
    //playAudioEffect();
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box

  chat.scrollTop = chat.scrollHeight
}
// This is the function to handle the name submission👇🏻

const handleNameInput = (event) => {
  currentQuestion = "firstInput"
  event.preventDefault()

  // Store the value in a variable so we can access it after we
  // clear it from the input

  const nameInput = document.getElementById("name-input")
  const name = nameInput.value
  showMessage(`I'm ${name}!`, "user")
  nameInput.value = ""
  setTimeout(() => askNextQuestion(name), 500)
}

// second message from bot

const firstChoice = (name, choice) => {
  currentQuestion = "choice"
  showMessage(
    `Nice to meet you ${name}!👋
  What type of haircut would
  you like to have ?`,
    `bot`
  )
  //playAudioEffect();

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
    setTimeout(() => {
      askNextQuestion(name,choice);
    }, 1500)
  })
  document.getElementById("medium").addEventListener("click", () => {
    choice = "Medium"
    showMessage("I would like a medium cut!", "user")
    setTimeout(() => {
      //add all variable which have been defined in orders so they can be passed to the next function
      askNextQuestion(name,choice);
    }, 1500)
  })
  document.getElementById("long").addEventListener("click", () => {
    choice = "Long"
    showMessage(`I would like a ${choice} cut!`, "user")
    setTimeout(() => {
      askNextQuestion(name,choice);
    }, 1500)
  })
}

const styleSelect = (choice) => {
  currentQuestion = "style"
  inputWrapper.innerHTML = `<select id="style-choice">
  <option id="default" value="select a style" selected>↓Select a style...</option>
  <option id="curly" value="curly">Curly</option>
  <option id="straight" value="straight">Straight</option>
  <option id="wavy" value="wavy">Wavy</option></select>`
  showMessage(
    `All right, we will give you a ${choice} cut.
    Please choose which type of style you want 💇`,
    `bot`
  )

  document
    .getElementById("style-choice")
    .addEventListener("change", (event) => {
      style = event.target.value
      showMessage(`I would like a ${style} cut!`, "user")

      // I passed the choice argument in the following function because was undefined👇🏻

      setTimeout(() => askNextQuestion(name,choice,style), 2000)
    })
}

// Function to handle gender selection

const genderSelect = (choice, style) => {
  currentQuestion = "gender"
  // can't pass the choice in this function , it's undefined.👇🏻
  showMessage(
    `Great choice! You will get your desired  ${choice} ${style} styling! Will that be for a girl or a boy?`,
    "bot"
  )

  inputWrapper.innerHTML = `<div id="button-form">
  <button id="boy">👦🏻</button>
  <button id="girl">👧🏻</button>
  </div>`

  // added event listener for the buttons on click to get the choice

  document.getElementById("boy").addEventListener("click", () => {
    gender = "Boy"

    showMessage("Boy", "user")
    setTimeout(() => askNextQuestion(name,choice,style,gender), 2500)
  })
  document.getElementById("girl").addEventListener("click", () => {
    gender = "Girl"
    showMessage("Girl", "user")

    setTimeout(() => askNextQuestion(name,choice,style,gender), 2500)
  })
}

const confirmation = (style,choice,gender) => {
  currentQuestion = "lastConfirmation"
  if (gender === "Boy") {
    showMessage(
      `Amazing! We want to confirm your appointment for a ${gender}, ${choice} cut and ${style} styling. This will cost €20.
      Please press YES to confirm and NO to cancel.`,
      "bot"
    )
  } else {
    showMessage(
      `Amazing! We want to confirm your appointment for a ${gender}, ${choice} cut and ${style} styling. This will cost €30.
      Please press YES to confirm and NO to cancel.`,
      "bot"
    )
  }

  inputWrapper.innerHTML = `<div id="button-form">
  <button id="YES">YES</button>
  <button id="NO">NO</button>
  </div>`
  document.getElementById("YES").addEventListener("click", () => {
    lastConfirmation = "YES"

    showMessage("YES", "user")
    setTimeout(() => askNextQuestion(name,choice,style,gender,lastConfirmation), 2500)
    document.getElementById("button-form").remove()
  })
  document.getElementById("NO").addEventListener("click", () => {
    lastConfirmation = "NO"
    showMessage("NO", "user")
    setTimeout(() => askNextQuestion(name,choice,style,gender,lastConfirmation), 2500)
    document.getElementById("button-form").remove()
  })
}

const lastMessage = (lastConfirmation) => {
  if (lastConfirmation === "YES") {
    showMessage(
      `Thank you for your trust! See you soon!🌟
  `,
      `bot`
    )
  } else {
    showMessage(`Sorry to see you go. You can always book again!`, `bot`)
    setTimeout(resetConversation, 1500)
  }
}
// Fixed to reload the page
const resetConversation = () => {
  chat.innerHTML = ""
  inputWrapper.innerHTML = ""
  setTimeout(greetUser, 2000)
}
setTimeout(greetUser, 2000)

// Created this nextquestion function to handle the following question but i can't pass the arguments, it comes always undefined.
const askNextQuestion = (name, choice, style, gender, lastConfirmation) => {
  switch (currentQuestion) {
    case "firstInput":
      firstChoice(name, choice)
      break
    case "choice":
      styleSelect(choice)
      break
    case "style":
      // here variable should be style and choice. It was only style here so the choice cannnot be passed by.
      genderSelect(style,choice)
      break
    case "gender":
      confirmation(style,choice,gender)
      break
    case "lastConfirmation":
      lastMessage(lastConfirmation)
      break
    default:
      resetConversation()
  }
}
