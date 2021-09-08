const chat = document.getElementById('chat')
const inputValue = document.getElementById('name-input')
const form = document.getElementById('name-form')
const factButtons = document.getElementById('fact-btn')



// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  if (sender === 'user') {
   
    console.log("hello from the user")
   
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    
    console.log("hello from the bot")
    
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
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleInput = (event) => {
  event.preventDefault()
  const inputValue = document.getElementById('name-input').value
  showMessage(inputValue, 'user')
  inputValue.value = ''

  //google-svar på denna funktion 

setTimeout(function() {
  showMessage(`Hello ${inputValue}, nice name.`, 'bot')
  form.style.display='none'}, 1000)

setTimeout(function() {
showMessage(`What do you want?`, 'bot')
factButtons.style.display='flex'}, 2000)
}

const factOne = () => {
  showMessage(`Fact 1`, 'user')
  showMessage(`Cat whiskers are the same width as their body`, 'bot')
}

const factTwo = () => {
  showMessage(`Fact 2`, 'user')
  showMessage(`While us humans have 206 bones, cats on average have 244. It ranges between 230-250 depending on how long a cat’s tail is and how many toes the cat has`, 'bot')
}

const factThree = () => {
  showMessage(`Fact 3`, 'user')
  showMessage(`Hello there, What's your name?`, 'bot')
}


//console.log('The form is submitted!')}

// Set up your eventlisteners here ex onClick

form.addEventListener('submit',handleInput)
document.getElementById('cat-fact1').addEventListener('click', factOne)
document.getElementById('cat-fact2').addEventListener('click', factTwo)
document.getElementById('cat-fact3').addEventListener('click', factThree)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
//setTimeout(response, 2000)
