// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper'); //input sektion + submit
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input'); //User input sektion

// Global variables, if you need any, declared here
let nameUser =''

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}


// Starts here
function greeting() {
  questionNumber = 1
  showMessage(`Hi! What is your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  event.preventDefault()
  const nameUser = nameInput.value //sparar namnet
  nameInput.value = '' //rensar text rutan
  showMessage(nameUser, 'user') //visar userinput i chatten
  setTimeout(() => showMessage(`So nice to meet you ${nameUser}`, 'bot'), 1000)
  setTimeout(() => askForYes(nameUser), 2500)
}

const askForYes = () => {
  showMessage(`My name is Yes-bot. I beleive that there is no such thing as a no-answer. And I am here to see if you beleive the same. Do you agree?`, 'bot')

  inputWrapper.innerHTML = `
    <button id="yesButton">Yes</button>
    <button id="noButton">No</button>
  `
  document.getElementById("yesButton").addEventListener('click', () => {
    showMessage(`Yes`, 'user')
    inputWrapper.innerHTML = ""
    setTimeout(() => askForFeeling("Yes"), 1000)
  })

  document.getElementById("noButton").addEventListener('click', () => {
    showMessage(`No`, 'user')
    inputWrapper.innerHTML =""
    setTimeout(() => thanksBye("No"), 1000)
  })
}

const askForFeeling = (answer) => {
  showMessage(`So your answer is ${answer}`, 'bot')

  inputWrapper.innerHTML =`
  <button id="yeahButton">Heck Yeah</button>
  <button id="notButton">Not really</button> 
`

  if (answer === "Yes"){
  showMessage(`Thats what i wanted to hear. Do you feel like a winner today?`, 'bot')

  document.getElementById("yeahButton").addEventListener('click', () => {
    showMessage(`Heck Yeah`, 'user')
    inputWrapper.innerHTML = ""
    setTimeout(() => askForPepp("Heck Yeah"), 1000)
  })
  } else //We deleted curlybracket or else it did not work(?)
    showMessage(`That was not the answer i expected`, 'bot')

    document.getElementById("notButton").addEventListener('click', () => {
      showMessage(`Not really`, 'user')
      inputWrapper.innerHTML = ""
      setTimeout(() => thanksBye(), 1000)
    })
}

const thanksBye = () => {
  showMessage (`It was lovely to speak with you, bye`, 'bot') //avslutar programmet
  inputWrapper.innerHTML =``
}



// Set up your eventlisteners here

nameForm.addEventListener('submit', handleNameInput)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
