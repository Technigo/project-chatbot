// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const welcomeButton = document.getElementById('welcomeBtn')
const sendBtn = document.getElementsByClassName('send-btn')
const input = document.getElementById('input')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById("name-form");


// Global variables, if you need any, declared here
//let nextQuestion = 0
// Functions declared here

let questionNumber = 1
//botReply to show message at bot side
const botReply = (message) => {
  showMessage(message, 'bot')
}
//userReply to show message at bot side
const userReply = (message) => {
  showMessage(message, 'user')
}

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
const greeting = () => {
 questionNumber = 1
  showMessage(`Hello there Beat Bot!`, 'user')
  setTimeout (() => botGreeting(), 1000)
}
//starts conversation with button
welcomeButton.onclick = function () {
  if (welcomeButton.style.display !== 'none') {
    welcomeButton.style.display = 'none'; {
      greeting(showMessage, 'user')
      }
    };
}
//
const botGreeting = () => {
  showMessage(`Hello there human, what's your name?`, 'bot')
  //handleNameInput()
}


const handleNameInput = (event) => {
  event.preventDefault()
  
  const name = input.value
  questionNumber = 2
  input.value = ''
  nextQuestion(name)

}

const whatMood = (name) => {
  questionNumber = 3
  showMessage(`Oh ${name} describe your mood in one word!`, 'bot')
  console.log('whatMood() ', input.value)
  nextQuestion()
}

const moodAnswer = (event) => {
  console.log('moodAnswer() ', input.value)
  event.sender('user')
  const inputMood = input.value
  questionNumber = 4
  showMessage(`I am ${inputMood}`, 'user')
  input.value = ''
  nextQuestion()
}


const songSelection = () => {
  questionNumber = 5
  //showMessage(`So you are ${inputMood}, here are some song recommendations`, 'bot')
  nextQuestion()
}

const nextQuestion = (message) => {
  console.log();
  if (questionNumber === 2){
    showMessage(`My name is ${message}`, 'user')
    input.value = ''
   setTimeout(() => whatMood(message), 1000);
   } else if (questionNumber === 3) {
     input.value = ''
     setTimeout(() => moodAnswer(message), 2000);
   } else if (questionNumber === 4) {
    input.value = ''
     setTimeout(() => songSelection(message), 1000);
   } } /*else if (indexDoggos === 4) {
     console.log()
     userReply(message)
     setTimeout(() => nameofDog(message), 2000);           
} else {  
    userReply(message);
    setTimeout(() => goodbye(message), 2000);
}*/


// Set up your eventlisteners here

form.addEventListener('submit', handleNameInput)

/*sendBtn.addEventListener('click', () => nextQuestion(input.value))*/


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greeting, 1000)
