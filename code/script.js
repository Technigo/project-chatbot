
const chat = document.getElementById("chat")


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

// 1. Greeting and first question with submit button 'ok' to start the chat


const greetUser = () => {
  showMessage("Hello! Are you ready to start the order?", "bot")

  //Insert of confirm button
  main.innerHTML += `
  <form id="box-confirm-button" class="box-confirm-button">
        <button id="button" class="confirm-button" type="button">yes!</button>
      </form>
      `
  const sendButton = document.getElementById("button")
  //Event: when user clicks the button, 'ok' will be displayed in the chat

  sendButton.addEventListener("click", () => {
    console.log('hi')

  })

}
greetUser()