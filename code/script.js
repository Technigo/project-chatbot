const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementById(`submit`)

// Declare your functions after this comment

const showMessage = (message, sender) => {  
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight
}

const greetUser = () => {
  showMessage("Hello there, What's your name?", 'bot')  
}
const handleNameInput = event => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage( `${userName}`, `user`);
  setTimeout(reply, 1000)
}

nameForm.addEventListener (`submit`, handleNameInput);

function reply () {
  showMessage (`Hi ${userName}, what can I help you with today?` , `bot`)
}


// Set up your eventlisteners here


setTimeout(greetUser, 1000)
