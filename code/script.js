// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
// const inputWrapper = document.getElementById('input-wrapper')
// const input = document.getElementById('input')
// const sendBtn = document.getElementById('send')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')

// Global variables, if you need any, declared here
let currentQuestion = 1

// // Functions declared here
// // const botReply = (msg) => {
// //   showMessage(msg, 'bot')
// // }
// // const userReply = (msg) => {
// //   showMessage(msg, 'user')
// }
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("I am user!")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("I am bot!")
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

// Starts here, create functions here
const greeting = () => {
    showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
const questionOne = () => {
  showMessage(`Do you like dogs`, 'bot')
} 

  const questionTwo = () => {
  showMessage(`fråga2`, 'bot')
} 

//Here we handle all the user input answers. 
//We change the currentQuestion varible. I moved it to the end as it's more logic to change to next question AFTER you've answered it.
const handleInput = (event) => {
  event.preventDefault()
  
  console.log('our currentQuestion variable is:', currentQuestion)

  if (currentQuestion === 2) {
    handleQuestionOne()
  } else if (currentQuestion === 3) {
    handleQuestionTwo()
  }
  
  currentQuestion++
  console.log('handing over to the bot with a new currentQuestion value', currentQuestion)
}

   //Here we passing the next bot question. This could also be setup more generic, for example with a botQuestion function.


// Set up your eventlisteners here

nameForm.addEventListener('submit', (event) => {
    event.preventDefault ()
    const name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''

    const answerOne = (`Hi ${name}`) 
    showMessage(answerOne, 'bot')
    setTimeout(questionOne, 1000)
    })

  nameForm.addEventListener('submit', handleInput)



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
