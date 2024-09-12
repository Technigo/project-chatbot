const button = document.getElementById('submit-button')
const main = document.getElementById('main')
const header = document.getElementById('header')
const chat = document.getElementById('chat')

const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
            <section class="user-message">
              <div class="bubble user-bubble">
                <p>${message}</p>
              </div>
             
            </section>
            `
  } else if (sender === 'bot') {
    chat.innerHTML += `
            <section class="bot-message">
              <div class="bubble bot-bubble">
                <p>${message}</p>
                 <img src="assets/crab.png" class="bot-image" alt="Bot"/img>
              </div>
            </section>
            `
  }
  chat.scrollTop = chat.scrollHeight
}

showMessage(`Are you ready to start the order?`, 'bot')


const confirmButton = document.getElementById('confirm-button')
confirmButton.addEventListener('click', () => {
  showMessage('Wonderful! What is your name?', 'bot')
  confirmButton.style.display = 'none'

}
)

