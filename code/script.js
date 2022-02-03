// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const send = document.getElementById('send')

// Global variables, if you need any, declared here

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
const greeting = () => {
  showMessage(`Hello, what is your name?`, 'bot') // denna är kopplad till <p>message</p>
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {  
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''
  setTimeout(() => showDecade(name), 1000)
}

const showDecade = (name) => {
  showMessage(`Welcome ${name}, what decade do feel like today?`, 'bot');

  inputWrapper.innerHTML = `
    <button id="1980Btn">1980s</button>
    <button id="1990Btn">1990s</button>
    <button id="2000Btn">2000s</button>
  `

  document.getElementById('1980Btn').addEventListener('click', () => chooseGenre('1980s'))
  document.getElementById('1990Btn').addEventListener('click', () => chooseGenre('1990s'))
  document.getElementById('2000Btn').addEventListener('click', () => chooseGenre('2000s'))
  setTimeout(() => showGenre(type), 1000)
}

const chooseGenre = (type) => {
  showMessage(type, 'user')
  showMessage(`${type}? Good taste. Please pick a preferred category`, 'bot') 

  inputWrapper.innerHTML = `
  <button id="comedyBtn">Comedy</button>
  <button id="horrorBtn">Horror</button>
  <button id="documentaryBtn">Documentary</button>
`
  document.getElementById('comedyBtn').addEventListener('click', () => selectMovie('Comedy'))
  document.getElementById('horrorBtn').addEventListener('click', () => selectMovie('Horror'))
  document.getElementById('documentaryBtn').addEventListener('click', () => selectMovie('Documentary'))
  setTimeout(() => selectMovie(genre), 1000)
}


const selectMovie = (genre) => {
  showMessage(genre, 'user')
  showMessage (`${genre} you say! Cool, here are my top three choices, please pick the one you want to watch!`, 'bot')
  
  inputWrapper.innerHTML = `
    <button id="movieOne">Jaws</button>
    <button id="movieTwo">Movie two</button>
    <button id="movieThree">Movie three</button>
    `

  document.getElementById('movieOne').addEventListener('click', () => movieChoice('Jaws'))
  document.getElementById('movieTwo').addEventListener('click', () => movieChoice('Movie two'))
  document.getElementById('movieThree').addEventListener('click', () => movieChoice('Movie three'))
  setTimeout(() => movieChoice(choice), 1000)

}


const movieChoice = (choice) => {
  showMessage(choice, 'user')
  showMessage (`${choice}!! You're too fancy! Here's the link to that, enjoy!`, 'bot')
  
  inputWrapper.innerHTML = `
<button id="jaws"><a href="https://www.netflix.com/watch/60001220?trackId=253863245&tctx=0%2C3%2Ce680cd6d-886b-40f6-92fc-fdde43f8e78a-293626776%2C6b3ee427-8d85-4938-8904-492c18bee7be_35566007X19XX1643892807490%2C6b3ee427-8d85-4938-8904-492c18bee7be_ROOT%2C%2C%2C" target="_blank">JAWS</a></button>

`
}

// Set up your eventlisteners here. 

form.addEventListener('submit', handleNameInput);
 
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1200) 