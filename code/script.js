// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputValue = document.getElementById('name-input')
const form = document.getElementById('name-form')
const factButtons = document.getElementById('fact-btn')
const yesNoButton = document.getElementById('yes-no-button')
//hon använder inputValue ist för userMessage på ovan för att få den klickbar utan att ladda om. 
//hon gör en till för forms här också

// Global variables, if you need any, declared here

// Functions declared here
console.log("hello")
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

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleInput = (event) => {
  event.preventDefault()
  const inputValue = document.getElementById('name-input').value
  showMessage(inputValue, 'user')

  //Why do we have to add the anonymous function to call showMessage, why can we not just call showMessage?
  setTimeout(function() {
    showMessage(`Hello ${inputValue}, nice name 🌞`, 'bot')
    form.style.display="none"}, 1000)
  

  setTimeout(function() {
    showMessage(`What cat fact do you want today?`, 'bot')
    factButtons.style.display="flex"}, 2000)
}

const factOne = () => {
  factButtons.style.display="none"
  setTimeout(function() {
    showMessage(`Fact 1`, 'user')}, 1000)
  setTimeout(function() {
    showMessage(`Cat whiskers are the same width as their body😸`, 'bot')}, 2000)
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
      showMessage(`Okay, thank you for today!`, 'bot')}, 1500)
  }
}
//här kan man sätta en console log så vi ser att form är submittet aka att vi vill det ska skickas iväg men vi måste prevent default
//const handleNameInput = (event) => {

//console.log('The form is submitted!')}

// Set up your eventlisteners here ex onClick
// för att det inte ska laddas om: form.selector.addEventlistener('submit',functionName)
form.addEventListener('submit',handleInput)
document.getElementById('cat-fact1').addEventListener('click', factOne)
document.getElementById('cat-fact2').addEventListener('click', factTwo)
document.getElementById('cat-fact3').addEventListener('click', factThree)
document.getElementById('yes-button').addEventListener('click', () => { moreFacts('yes')})
document.getElementById('no-button').addEventListener('click', () => { moreFacts('no')})

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
//setTimeout(response, 2000)

//javascript reads through. Sets a variable, builds the "machine" but never exectue it. 
//Javascript reads the code from top to bottom so some things you need to do in chronological order. like creating the machine
//Our main goal is to understand when stuff will happen and when they will not happen. and WHY 😁


//Lägger en listener på formuläret för att registrera när det sumbitas. När det submitas vill 
//vi hämta vad vi har skrivit. Behöver inte vara en global variabel. MEN eventlistener for form 
//kommer ju reagera varje gång man trycker på knappen! Hur hanterar man det? 

// Enklare att skapa flera funktioner för de olika meddelanden, så att funktioner för att chatta inte ändras utan endast tar 
// emot nya meddelandet från andra funktioner. I varje ny funktion kan svarsmeddelandet skapas.

// SKapa en funktion som läser av inkommet meddelande, och skickar respons baserat på vilken fråga man svarat på. Global variabel 
// som tickar uppåt efter varje fråga, så att den globala variabeln styr vart man är.

