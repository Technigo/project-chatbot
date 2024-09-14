
const chat = document.getElementById("chat")
const main = document.getElementById("main")



const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
        <section class="user-message">
          <div class="bubble user-bubble">
          <p>${message}</p>
          </div>
        </section>
        `
  } else if (sender === "bot") {
    chat.innerHTML += `
            <section class="bot-message">
              <div class="bubble bot-bubble">
                <p>${message}</p>
              </div>
            </section>
            `
  }
  chat.scrollTop = chat.scrollHeight
}


//3. Order Food

const orderFood = (username) => {
  showMessage(`Great, ${username}! What would you like to eat?`, "bot")

  // Food type choices
  form.innerHTML += `
 <div class="foodtype-container" id="foodtype-container">
        <button class="foodtype-button" id="fish-button" type="button">🐟 Fish</button>
        <button class="foodtype-button" id="shellfish-button" type="button">🦀 Shellfish</button>
        <button class="foodtype-button" id="mollusks-button" type="button">🦪 Mollusks</button>
        <button class="foodtype-button" id="soup-button" type="button">🥣 Soups and Stews</button>
      </div>
`
  // Selection of dish for foodtype fish

  const foodtype = document.getElementById("foodtype-container")
  document
    .getElementById("fish-button")
    .addEventListener("click", () => {
      showMessage("You like to order fish. Please choose a dish!", "bot")
      foodtype.style.display = "none"
      chooseShellfish()
    })

  document
    .getElementById("shellfish-button")
    .addEventListener("click", () => {
      showMessage("You like to order shellfish. Please choose a dish!", "bot")
      foodtype.style.display = "none"
      chooseShellfish()
    })
}


// Select fish dish
const dishContainer = document.getElementById("dish-container")
const choosefish = () => {
  form.innerHTML += `
  <div class="dish-container" id="dish-container">
         <button class="dish-button" id="salmon-button" type="button">Grilled Salmon</button>
         <button class="dish-button" id="fish-chips-button" type="button">Fish and Chips</button>
       </div>
 `
  document
    .getElementById("salmon-button")
    .addEventListener("click", () => {
      console.log("hi")
      showMessage("You like to order Salmon. Great!", "bot")
      dishContainer.style.display = "none"
    }
    )

  document
    .getElementById("fish-chips-button")
    .addEventListener("click", () => {
      showMessage("You like to order Fish and Chips. Great!", "bot")
      dishContainer.style.display = "none"
    })
}


//  select shellfish dish

const chooseShellfish = () => {

  form.innerHTML += `
   <div class="dish-container" id="dish-container">
          <button class="dish-button" id="shrimp-button" type="button">Shrimp</button>
          <button class="dish-button" id="lobster-button" type="button">Lobster</button>
        </div>
  `

  document
    .getElementById("shrimp-button")
    .addEventListener("click", () => {
      console.log("hi")
      showMessage("You like to order Shrimp. Great!", "bot")
      dishContainer.style.display = "none"
    }
    )

  document
    .getElementById("lobster-button")
    .addEventListener("click", () => {
      showMessage("You like to order Lobster. Great!", "bot")
      dishContainer.style.display = "none"
    })
}



// Dish choices for food type fish

//  Event listener für dishes

// const salmonButton = document.getElementById("salmon-button")
// const dishContainer = document.getElementById("dish-container")
// const fishChipsButton = document.getElementById("fish-chips-button")

// salmonButton.addEventListener("click", () => {
//   showMessage("Grilled Salmon! Great choice! Thank you for your order!", "bot")
//   dishContainer.style.display = "none"
// })

// fishChipsButton.addEventListener("click", () => {
//   showMessage("Fish and Chips! Great choice! Thank you for your order!", "bot")
//   dishContainer.style.display = "none"
// })

// }


// Dish choices for food type shellfish


// shellfishButton.addEventListener("click", () => {
//   showMessage("You like to order shellfish. Please choose a dish!", "bot")
//   foodtype.style.display = "none"

//   form.innerHTML += `
//  <div class="dish-container" id="dish-container">
//         <button class="dish-button" id="shrimp-button" type="button">Shrimp</button>
//         <button class="dish-button" id="lobster-button" type="button">Lobster</button>
//       </div>
// `
// })

//  Event listener für dishes

// const shrimpButton = document.getElementById("shrimp-button")
// const lobsterButton = document.getElementById("lobster-button")
// shrimpButton.addEventListener("click", () => {
//   showMessage("Shrimp! Great choice! Thank you for your order!", "bot")
//   dishContainer.style.display = "none"
// })

// lobsterButton.addEventListener("click", () => {
//   showMessage("Lobster! Great choice! Thank you for your oder!", "bot")
//   dishContainer.style.display = "none"
// })




//2. Asking for the users name and storing the name

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
    console.log("toll")

    const username = input.value

    showMessage(username, "user")
    input.style.display = "none"
    inputButton.style.display = "none"
    orderFood(username)
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
    sendButton.style.display = "none"
    showMessage("Yes!", "user")
    askName()
  })

}
greetUser()