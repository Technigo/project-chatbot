// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')
const yesButton = document.getElementById('yes-btn')
const noButton = document.getElementById('no-btn')

//Makes a function for showMessage 'user' (cleaner code)
const userReply = (msg) => {
  showMessage(msg, 'user');
}
//Makes a function for showMessage 'bot' (cleaner)
const botReply = (msg) => {
  showMessage(msg, 'bot');
}

// Global variables, if you need any, declared here
//Numerically labels questions so nextQuestion function can find them.
let indexDoggos = 1
// Functions declared here
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(sender);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(sender);
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

const reloadBot = () => {
  botReply(`see ya`)
  
  inputWrapper.innerHTML = 
  `<div>
    <button id="reloadBtn">Restart</button>
  </div>`

  document.getElementById('reloadBtn').addEventListener('click', () => {
    location.reload()

})
}

const nextQuestion = (message) => {
  console.log(indexDoggos);
  if (indexDoggos === 1){
    userReply(message)
    setTimeout(() => dogSize(message), 1000);
  } 
 else {
  setTimeout(() => greeting(message), 1000);
}
}
 
// Starts here
const greeting = () => {
  indexDoggos = 1
  botReply('Hello there! Are you ready to see some bestest doggos?!')
}

//Functions to answer yes to the first question
/* const answerYes = () => {
  userReply('Hell yes!');
} */


// Set up your eventlisteners here - user answer yes when click
yesButton.addEventListener('click', () => nextQuestion('Hells yes!')) 
noButton.addEventListener('click', () => reloadBot('Fy fan nej'))

//Functions to answer no to the first question

/* const answerNo = () => {
  showMessage('Fy fan nej!', 'user')
}
*/
// Set up your eventlisteners here - user answer no when clicked


const dogSize = () => {
  indexDoggos++
  botReply('Do you want to see a small, medium, or large doggo?')

  inputWrapper.innerHTML = `
    <button id="small-btn">Small</button>
    <button id="medium-btn">Medium</button>
    <button id="large-btn">Large</button>  
  `
}



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
