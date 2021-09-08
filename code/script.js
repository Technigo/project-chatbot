// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById ('user-input')
const sendBtn = document.getElementById ('send-btn')
const nameForm = document.getElementById ('name-form')
const startButton = document.getElementById ('startButton')
const startPage = document.getElementById ('startPage')


// Global variables, if you need any, declared here
// Functions declared here
// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("Hello!")
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello stranger! What's your name?`, 'bot')

}
const userReply = (input) => { 
  showMessage(input, 'user')
}

const pickMusicStyle = () => {
  showMessage(`Nice color! Now choose your favorite music style for today.`, 'bot')
}


sendBtn.addEventListener('click',()  => {
userReply (userInput.value)
setTimeout (pickColor, 1000) 
})

const inputWrapper = document.getElementById ('input-wrapper')
const pickColor = () => {
  showMessage (`Nice to meet you ${userInput.value}. What is your favorite color?`, 'bot')
  inputWrapper.innerHTML = `
  <button id= "pinkBtn"> Pink </button>    
  <button id= "greenBtn"> Green </button>
  <button id= "blackBtn"> Black </button>
  `
  const pinkBtn = document.getElementById('pinkBtn')
  const greenBtn = document.getElementById('greenBtn')
  const blackBtn = document.getElementById('blackBtn')
  pinkBtn.onclick = () => {                                   
     //when user click on the Pink button, it's going to change background color to Pink. After 1s invoke function pickMusicStyle
  document.body.style.backgroundColor = "pink";
  userReply(`Pink`)                 //invoke userReply function with the input "Pink"
  setTimeout(pickMusicStyle, 1000)
  }
  greenBtn.onclick = () => {
  document.body.style.backgroundColor = "green";
  userReply(`Green`)
  setTimeout(pickMusicStyle, 1000)
  }
  blackBtn.onclick = () => {
  document.body.style.backgroundColor = "black";
  userReply(`Black`)
  setTimeout(pickMusicStyle, 1000)
  }
}




//nameInput.innerHTML = ""


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)


nameForm.addEventListener('submit',(event) => {
  event.preventDefault()
})

startButton.onclick = () => { 
  startPage.style.display="none"
  setTimeout(greeting, 1000)
}

