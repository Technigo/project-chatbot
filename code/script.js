// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');
const sendBtn = document.getElementById('send-btn');

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    // add a console.log here to see when it's being logged and not
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

const greetUser = () => {  
  showMessage("Hello there, What's your name?", 'bot');  
}

// Set up your eventlisteners here
form.addEventListener('submit', (event)=> {
  event.preventDefault() // Prevents form to autorefresh

const nameInput = document.getElementById('name-input').value;
showMessage(nameInput, 'user');

// Bot greets nameInput and ask for what drink
chat.innerHTML += `<section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
        <p>Nice to meet you ${nameInput}. What type of drink would you like to order?</p>
    </div>
</section>`

inputWrapper.innerHTML = `
<button id="colaBtn" type="submit">Cola</button>
<button id="fantaBtn" type="submit">Fanta</button>
<button id="spriteBtn" type="submit">Sprite</button>
`
//eventlisteners for choices                                
document.getElementById('colaBtn').addEventListener('click' , () => { showMessage("I would like to order Cola", 'user') 
}) 
document.getElementById('fantaBtn').addEventListener('click' , () => { showMessage("I would like to order Fanta", 'user')
}) 
document.getElementById('spriteBtn').addEventListener('click' , () => { showMessage("I would like to order Sprite", 'user')
})
})

/*const showMenu = (type) => {
  botReply(
    `Oh so you're in the mood for ${type}? Great choice. Select something from the menu below!`
  )
  if (type === 'colaBtn')
  inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled>👇 Select a what kind...</option>
    <option value="regular">Regular Cola</option>
    <option value="zero">Cola Zero</option>
    <option value="vanilla">Vanilla Cola</option>
  </select>
`*/



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 100);
