const chat = document.getElementById("chat")
const main = document.getElementById("main")

const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
        <section class="user-message">
          <div class="bubble user-bubble">
          <p>${message}</p>
          </div>
          <img src="./assets/user-chat.png" alt="user image" class="user-message-img"/>
        </section>
        `
  } else if (sender === "bot") {
    chat.innerHTML += `
            <section class="bot-message">
               <img src="./assets/bot-chat.png" alt="user image" class="bot-message-img"/>
              <div class="bubble bot-bubble">
                <p>${message}</p>
              </div>
            </section>
            `
  }
  chat.scrollTop = chat.scrollHeight
}

// 5. Confirm order with yes/no
// Confirm order shrimp
const confirmOrder = (username) => {
  form.innerHTML += `
  <div class="confirm-container" id="confirm-container">
         <button class="confirm-button" id="yes-button" type="button">Yes</button>
         <button class="confirm-button" id="no-button" type="button">No</button>
       </div>
  `
  document
    .getElementById("yes-button")
    .addEventListener("click", () => {
      showMessage("yes", "user")
      showMessage(`Thank you,  for your order, ${username}!`, "bot")
      form.innerHTML = ""
    })
  document
    .getElementById("no-button")
    .addEventListener("click", () => {
      showMessage("no", "user")
      showMessage("Maybe another time", "bot")
      form.innerHTML = ""
    })
}

// 4. Select dish and display message 
// Select fish dish
const chooseFish = (username) => {
  form.innerHTML += `
  <div class="dish-container" id="dish-container">
         <button class="dish-button" id="salmon-button" type="button">Grilled Salmon</button>
         <button class="dish-button" id="fish-chips-button" type="button">Fish and Chips</button>
       </div>
 `
  document
    .getElementById("salmon-button")
    .addEventListener("click", () => {
      showMessage("salmon", "user")
      showMessage(`The Salmon for you. That will be $15. Are you sure you want to order this?`, "bot")
      form.innerHTML = ""
      confirmOrder(username)
    })
  document
    .getElementById("fish-chips-button")
    .addEventListener("click", () => {
      showMessage("fish and chips", "user")
      showMessage(`${username}, you like to order Fish and Chips. Great! That will be $15. Are you sure you want to order this?`, "bot")
      form.innerHTML = ""
      confirmOrder(username)
    })
}


//  select shellfish dish

const chooseShellfish = (username) => {

  form.innerHTML += `
   <div class="dish-container" id="dish-container">
          <button class="dish-button" id="shrimp-button" type="button">Shrimp</button>
          <button class="dish-button" id="lobster-button" type="button">Lobster</button>
        </div>
  `

  document
    .getElementById("shrimp-button")
    .addEventListener("click", () => {
      showMessage("shrimp", "user")
      showMessage(`${username}You like to order Shrimp. Great choice! That will be $15. Are you sure you want to order this?`, "bot")
      form.innerHTML = ""
      confirmOrder(username)
    }
    )

  document
    .getElementById("lobster-button")
    .addEventListener("click", () => {
      showMessage("lobster", "user")
      showMessage(`Great choice, ${username}! That will be $15. Are you sure you want to order this?`, "bot")
      form.innerHTML = ""
      confirmOrder(username)
    })
}

const chooseMollusks = (username) => {

  form.innerHTML += `
   <div class="dish-container" id="dish-container">
          <button class="dish-button" id="paella-button" type="button">Paella</button>
          <button class="dish-button" id="calamari-button" type="button">Calamari</button>
        </div>
  `

  document
    .getElementById("paella-button")
    .addEventListener("click", () => {
      showMessage("paella", "user")
      showMessage(`Great choice, ${username}! That will be $15. Are you sure you want to order this?`, "bot")
      form.innerHTML = ""
      confirmOrder(username)
    }
    )

  document
    .getElementById("calamari-button")
    .addEventListener("click", () => {
      showMessage("calamari", "user")
      showMessage(`Great choice, ${username}! That will be $15. Are you sure you want to order this?`, "bot")
      form.innerHTML = ""
      confirmOrder(username)
    })
}


//3. Select Foodtype

const selectFoodtype = (username) => {
  showMessage(`Nice to meet you, ${username}! What type of food would you like to eat?`, "bot")

  // Buttons to select the food type
  form.innerHTML += `
 <div class="foodtype-container" id="foodtype-container">
        <button class="foodtype-button" id="fish-button" type="button">🐟 Fish</button>
        <button class="foodtype-button" id="shellfish-button" type="button">🦀 Shellfish</button>
        <button class="foodtype-button" id="mollusks-button" type="button">🦪 Mollusks</button>
      </div>
`
  //  Buttons to select the dishes & message

  document
    .getElementById("fish-button")
    .addEventListener("click", () => {
      showMessage("fish", "user")
      showMessage("Great choice! Select something from the menu!", "bot")
      form.innerHTML = ""
      chooseFish(username)
    })

  document
    .getElementById("shellfish-button")
    .addEventListener("click", () => {
      showMessage("shellfish", "user")
      showMessage("Great choice! Select something from the menu!", "bot")
      form.innerHTML = ""
      chooseShellfish(username)
    })

  document
    .getElementById("mollusks-button")
    .addEventListener("click", () => {
      showMessage("mollusks", "user")
      showMessage(`${username}, you like to order mullusks. Please choose a dish!`, "bot")
      form.innerHTML = ""
      chooseMollusks(username)
    })
}

//2. Asking for the users name, storing the name and display in chat

const askName = () => {
  showMessage("Wonderful! What is your name?", "bot")

  form.innerHTML += `
  <input class="input" id="name-input"></input>
      <button class="input-button" id="send-button" type="submit">ok</button>
  `

  const inputButton = document.getElementById("send-button")
  const input = document.getElementById('name-input')


  inputButton.addEventListener("click", (event) => {
    event.preventDefault()

    const username = input.value

    if (username) {
      showMessage(username, "user")
      input.style.display = "none"
      form.innerHTML = ""
      selectFoodtype(username)
    }
    else {
      showMessage("Please enter your name.", "bot")
    }
  }
  )
}


// 1. Greeting and displaying the button

const greetUser = () => {
  showMessage("Hello! Are you ready to start the order?", "bot")

  form.innerHTML += `
  
        <button id="button" class="confirm-button" type="button">yes!</button>
      `

  const sendButton = document.getElementById("button")
  //Event: when user clicks the button, 'ok' will be displayed in the chat and the button will be taken off the screene

  sendButton.addEventListener("click", () => {
    showMessage("Yes!", "user")
    form.innerHTML = ""
    askName()
  })

}
greetUser()