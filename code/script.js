// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputValue = document.getElementById('name-input')
const form = document.getElementById('name-form')
const factButtons = document.getElementById('fact-btn')
const yesNoButton = document.getElementById('yes-no-button')
const purrAudio = document.getElementById('purr')



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("hello from the user")
    chat.innerHTML += /*html*/ `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("hello from the bot")
    chat.innerHTML += /*html*/ `
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

// Bot Starts talking here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  
}
//This first setTimeout 
setTimeout(greeting, 1000)

//here is the information on what name you have 
const handleInput = (event) => {
  event.preventDefault()
  const inputValue = document.getElementById('name-input').value
  showMessage(inputValue, 'user')

//and here it will be displayed by the bot🤖
  setTimeout(function() {
    showMessage(`Hello ${inputValue}, nice name 🌞`, 'bot')
    form.style.display="none"}, 1000)
  

  setTimeout(function() {
    showMessage(`What cat fact do you want today?`, 'bot')
    factButtons.style.display="flex"}, 2000)
}
//Here we have our facts buttons. After we are more comfortable with JS it would be fun putting these buttons all in one conditional statement!
const factOne = () => {
  factButtons.style.display="none"
  setTimeout(function() {
    showMessage(`Fact 1`, 'user')}, 1000)
  setTimeout(function() {
    showMessage(`Cat whiskers are the same width as their body😸`, 'bot')
    }, 2000)
  setTimeout(() => showMessage(`Do you want another epic cat fact?`, 'bot'), 3000)
  setTimeout(() => yesNoButton.style.display="flex", 4000) 
}

const factTwo = () => {
  factButtons.style.display="none"
  setTimeout(function() {
    showMessage(`Fact 2`, 'user')}, 1000)
  setTimeout(function() {
    showMessage(`While us humans have 206 bones, cats on average have 244. It ranges between 230-250 depending on how long a cat’s tail is and how many toes the cat has🐈`, 'bot')}, 2000)
  setTimeout(() => showMessage(`Do you want another epic cat fact?`, 'bot'), 3000)
  setTimeout(() => yesNoButton.style.display="flex", 4000) 
}

const factThree = () => {
  factButtons.style.display="none"
  setTimeout(function() {
    showMessage(`Fact 3`, 'user')}, 1000)
  setTimeout(function() {
    showMessage(`Cats sleep 12-16 hours per day, and spend 1/3 of their awake hours grooming😻`, 'bot')}, 2000)
  setTimeout(() => showMessage(`Do you want another epic cat fact?`, 'bot'), 2000)
  setTimeout(() => yesNoButton.style.display="flex", 4000) 
}
//here we made conditional statements for when they either press yes or no
const moreFacts = (answer) =>{
  yesNoButton.style.display="none"
  if(answer === 'yes') {
    setTimeout(function() {
      showMessage(`Yes`, 'user')}, 1000)
    setTimeout(function() {
      showMessage(`What fact do you want now?`, 'bot')}, 1500)
      setTimeout(function() {factButtons.style.display="flex"}, 1500)
  }
  else if(answer === 'no'){
    setTimeout(function() {
      showMessage(`No`, 'user')}, 1000)
    setTimeout(function() {
      showMessage(`Okay, thank you for today!😽`, 'bot')

      //here is our audio for when the user presses no and the last message shows up
      chat.innerHTML += '<audio autoplay src="./assets/cat-purr.mp3"></audio>'}, 1500
      )
  }
}

// here is our eventlisteners
form.addEventListener('submit',handleInput)
document.getElementById('cat-fact1').addEventListener('click', factOne)
document.getElementById('cat-fact2').addEventListener('click', factTwo)
document.getElementById('cat-fact3').addEventListener('click', factThree)
document.getElementById('yes-button').addEventListener('click', () => { moreFacts('yes')})
document.getElementById('no-button').addEventListener('click', () => { moreFacts('no')})

//thank you for reading our code! 😁