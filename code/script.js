
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

const orderFood = () => {
  showMessage(`Great! What would you like to eat?`, "bot")


}


//2. Asking for the users name and storing the name

const askName = () => {
  showMessage("Wonderful! What is your name?", "bot")

  form.innerHTML += `
  <input class="input" id="name-input"></input>
      <button class="input-button" id="send-button" type="submit">ok</button>
  `
  const inputButton = document.getElementById("send-button")

  inputButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("toll")

    const input = document.getElementById('name-input')
    const username = input.value


    showMessage(username, "user")
    input.style.display = "none"
    inputButton.style.display = "none"
    orderFood()
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