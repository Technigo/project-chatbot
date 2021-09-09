// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')

// Global variables, if you need any, declared here
let currentQuestion = 1
console.log('HEJ')

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
  currentQuestion = 1
    showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
const dogQuestion = () => {
  currentQuestion++
  showMessage(`Do you like dogs`, 'bot')
  inputWrapper.innerHTML =  `
  <button id="yes">YES</button>
  <button id="no">NO</button>
  `
 document.getElementById('yes').addEventListener('click', () => {
    console.log('Yes-knapp')
    showMessage('Yes I like dogs!', 'user')
    handleInput()
  }
  )
  document.getElementById('no').addEventListener('click', () => {
    console.log('no-knapp')
    showMessage('No I dont like dogs!', 'user')
    showMessage('to bad', 'bot')
  }
  )
} 

  const breedQuestion = () => {
    currentQuestion++
  showMessage(`What breed do you like`, 'bot')
  handleInput()
} 

//Here we handle all the user input answers. 
nameForm.addEventListener('submit', (event) => {
    event.preventDefault ()
    handleInput ()
    })

  const handleName = () => {
  const name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''

    const answerOne = (`Hi ${name}`) 
    showMessage(answerOne, 'bot')
    setTimeout(dogQuestion, 1000)
    console.log('Answer')
  }


//We change the currentQuestion varible. I moved it to the end as it's more logic to change to next question AFTER you've answered it.
const handleInput = (event) => {
  // event.preventDefault()
  
  console.log('our currentQuestion variable is:', currentQuestion)

  if (currentQuestion === 1) {
    handleName() }
    else if (currentQuestion === 2){
    dogQuestion()
  } else if (currentQuestion === 3) {
    console.log ('nu fungerar det!')
    breedQuestion()
  }
  
  currentQuestion++
  console.log('handing over to the bot with a new currentQuestion value', currentQuestion)
}

   //Here we passing the next bot question. This could also be setup more generic, for example with a botQuestion function.


// Set up your eventlisteners here




  
    

  // nameForm.addEventListener('submit', handleInput)



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
