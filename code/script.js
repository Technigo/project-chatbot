// DOM selectors 👇
const chat = document.getElementById("chat")
const submitButton = document.getElementById("send-btn")
const nameInput = document.getElementById("name-input")
const form = document.getElementById("form")
const inputWrapper = document.getElementById("input-wrapper")
const sound = document.getElementById("click-sound")

// Function that will add a chat bubble
const showMessage = (message, sender) => {
  // User bubble
  if (sender === "user") {
    sound.play()
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user2.png" alt="User" />  
      </section>
    `
    // Bot bubble
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot2.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // Scroll down to see the last message
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  showMessage(`Hello there my name is Fikabot, what's your name?`, "bot")
}

//Call for first greeting, with a short delay
setTimeout(greetUser, 1000)

//Function that handle the name input
const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we
  const name = nameInput.value
  if (name !== "") {
    showMessage(`I'm ${name}`, "user")
    setTimeout(() => firstChoice(name), 1000)
  } else {
    showMessage(`I'm ${name}`, "user")
    showMessage(`Please type your real name.`, "bot")
    setTimeout(() => greetUser(), 1000)
  }
  // clear value from the input
  nameInput.value = ""
}

//Call for handleNameInput func. to activate 1st responce
submitButton.onclick = handleNameInput

let choice

// Add buttons for choice and handle user choice
const firstChoice = (name) => {
  showMessage(`So ${name} what would you like to order?`, "bot")
  form.innerHTML = `
  <div class="categories">
  <button class="order-btn" id="coffee" type="submit">Coffee</button>
  <button class="order-btn" id="bread" type="submit">Bread</button>
  <button class="order-btn" id="pastry" type="submit">Pastry</button></div>`

  document
    .getElementById("coffee")
    .addEventListener("click", (handleFirstChoice) => {
      handleFirstChoice.preventDefault()
      choice = "coffee"
      showMessage("I would like a coffee, please!", "user")
      setTimeout(() => handleSecondChoice(choice), 1000)
    })
  document
    .getElementById("bread")
    .addEventListener("click", (handleFirstChoice) => {
      handleFirstChoice.preventDefault()
      choice = "bread"
      showMessage("I would like some bread, please!", "user")
      setTimeout(() => handleSecondChoice(choice), 1000)
    })
  document
    .getElementById("pastry")
    .addEventListener("click", (handleFirstChoice) => {
      handleFirstChoice.preventDefault()
      choice = "pastry"
      showMessage("I would like a pastry, please!", "user")
      setTimeout(() => handleSecondChoice(choice), 1000)
    })
}
let subChoice

//Function handling the subchoice of the order
const handleSecondChoice = (choice) => {
  showMessage(
    `Great choice, ${choice} coming up, what kind of ${choice} would you like?`,
    "bot"
  )
  if (choice === "coffee") {
    form.innerHTML = `<div class="sub-categories">
    <button class="send-btn" id="filter" type="submit">Filter Coffee</button>
    <button class="send-btn" id="espresso" type="submit">Espresso</button>
    <button class="send-btn" id="flat" type="submit">Flat White</button></div>`

    document
      .getElementById("filter")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "filter coffee"
        showMessage("I would like a filter coffee, please!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
    document
      .getElementById("espresso")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "espresso"
        showMessage("I would like an espresso, please!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
    document
      .getElementById("flat")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "flat white"
        showMessage("I would like a flat white, please!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
  } else if (choice === "bread") {
    form.innerHTML = `<div class="sub-categories">
    <button class="send-btn" id="baguette" type="submit">Baguette</button>
    <button class="send-btn" id="sourdough" type="submit">Sourdough</button>
    <button class="send-btn" id="rye" type="submit">Rye Bread</button></div>`

    document
      .getElementById("baguette")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "baguette"
        showMessage("I would like a baguette, s'il vous plaît!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
    document
      .getElementById("sourdough")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "sourdough bread"
        showMessage("I would like sourdough bread, please!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
    document
      .getElementById("rye")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "rye bread"
        showMessage("I would like a rye bread, please!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
  } else if (choice === "pastry") {
    form.innerHTML = `<div class="sub-categories">
    <button class="send-btn" id="semla" type="submit">Semla</button>
    <button class="send-btn" id="cinnamon" type="submit">Cinnamon Bun</button>
    <button class="send-btn" id="brownie" type="submit">Brownie</button></div></form>`

    document
      .getElementById("semla")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "semla"
        showMessage("I would like a semla, please!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
    document
      .getElementById("cinnamon")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "cinnamon bun"
        showMessage("I would like cinnamon bun, please!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
    document
      .getElementById("brownie")
      .addEventListener("click", (handleSecondChoice) => {
        handleSecondChoice.preventDefault()
        subChoice = "brownie"
        showMessage("I would like a brownie, please!", "user")
        setTimeout(() => handleThirdChoice(subChoice), 1000)
      })
  }
}

//Function handling the amount input from user
const handleThirdChoice = (subChoice) => {
  showMessage(`How many ${subChoice}s would you like?`, "bot")
  form.innerHTML = `<input id="amount-input" type="text" />
  <button class="send-btn" id="amount-btn" type="submit">Send</button>`
  const amountInput = document.getElementById("amount-input")
  document.getElementById("amount-btn").addEventListener("click", (event) => {
    event.preventDefault()
    const amount = amountInput.value
    showMessage(`${amount} ${subChoice}s, please!`, `user`)
    amountInput.value = ""
    setTimeout(() => handleFinalConfirmation(amount), 1000)
  })
}

//Function giving the final response from bot depending on amount input from user
const handleFinalConfirmation = (amount) => {
  if (amount >= 1 && amount <= 10) {
    showMessage(
      `Thank you for your order! It will be ready in 10 minutes! ❤️`,
      "bot"
    )
    setTimeout(shoot, 100)
    form.remove()
  } else if (amount > 10) {
    showMessage(
      `That's a lot! We take larger orders by phone, please call 000 123 456 ❤️`,
      "bot"
    )
    form.remove()
  } else if (amount === "0") {
    showMessage(`Are you sure you chose the right amount?`, "bot")
    setTimeout(() => handleThirdChoice(subChoice), 1000)
  } else {
    showMessage(`I didn't catch that, please try again! ❤️`, "bot")
    setTimeout(() => handleThirdChoice(subChoice), 1000)
  }
}

//confetti function
//setTimeout(shoot, 100);

const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
}

function shoot() {
  confetti({
    ...defaults,
    particleCount: 30,
    scalar: 1.2,
    shapes: ["circle", "square"],
    colors: ["#fa5a4e", "#e41304", "#a01b11", "#f7d6d3", "#ff6aa8"],
  })

  confetti({
    ...defaults,
    particleCount: 20,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🥰", "❤️", "💗"],
      },
    },
  })
}
