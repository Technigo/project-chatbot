// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('nameInput')
const sendBtn = document.getElementById('sendBtn')

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}




// Global variables, if you need any, declared here



// Functions declared here



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('Hej user')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />
      </section>
    `
  } else if (sender === 'bot') {
    console.log("Hej bot")
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
// const greeting = () => {
//   showMessage(`Good day and welcome to Bot Theatre! What is your name?`, 'bot')
//   // Just to check it out, change 'bot' to 'user' here 👆
// }

 const greeting = () => {
  questionNumber = 1
  botReply(`Good day and welcome to Bot Theatre! What is your name?`, 'bot')
}

 const nextQuestion = (message) => {
 console.log('questionNumber', questionNumber)
 
if (questionNumber === 1) {
userReply(message)
nameInput.value = ''
setTimeout(() => showFoodTypes(message), 1000)
}
else if (questionNumber === 2) {
  userReply(message)
  setTimeout(() => showMenu(message), 1000)
} else if (questionNumber === 3) {
  userReply(message)
  setTimeout(() => showDishSize(message), 1000)
} else if (questionNumber === 4) {
  userReply(message)
  setTimeout(() => showPrice(message), 1000)
} else {
  userReply(message)
  setTimeout(thankYou, 1000)
}
}


 const showFoodTypes = (msg) => {
 questionNumber++
  botReply(
    `Nice to meet you ${msg}. What mood are you in?`
  )
  }
 
 
 sendBtn.addEventListener('click', () => nextQuestion(input.value))



 //const handleNameInput = (event) => {
  //event.preventDefault()
  // Store the value in a variable so we can access it after we 
 //clear it from the input
  // const name = nameInput.value
  // showMessage(name, 'user')
  // nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  //setTimeout(() => showFoodOptions(name), 1000)
//}


 

// const showFoodTypes = (msg) => {
//   questionNumber++
//   botReply(
//     `Hello ${msg}. What type of mood are you in?`
//   )

//   inputWrapper.innerHTML = `
//   <button id="happyBtn">🤣</button>
//   <button id="romanticBtn">🥰</button>
//   <button id="horrorBtn">😱</button>
//   <button id="bollywoodBtn">💃🏼</button>
//   `

// document
//   .getElementById('pizzaBtn')
//   .addEventListener('click', () => nextQuestion('pizza'))
// document
//   .getElementById('pastaBtn')
//   .addEventListener('click', () => nextQuestion('pasta'))
// document
//   .getElementById('saladBtn')
//   .addEventListener('click', () => nextQuestion('salad'))
// }


// Set up your eventlisteners here




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)