// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const sendButton = document.getElementById('send-button')
const nameInput = document.getElementById('name-input')

// Global variables, if you need any, declared here
let userName
const today = new Date()
const curHr = today.getHours()

// Functions declared here
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('user is sender');
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('bot is sender');

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

const greeting = () => {
  let goodX

  // Greetings based on time of the day
  if (curHr < 12) {
    goodX = 'Good morning'
  } else if (curHr < 18) {
    goodX = 'Good afternoon'
  } else {
    goodX = 'Good evening'
  }
  showMessage(`${goodX} buddy, what's your name?`, 'bot')
}

// Reads and shows the value from the input field 
const showName = () => {
  userName = nameInput.value
  showMessage(`${nameInput.value}!`, 'user')
  setTimeout(() => howAreYou(userName), 1000)
}

const howAreYou = () => {
  showMessage(`Hello ${userName}, how do you feel today?`, 'bot')

  inputWrapper.innerHTML = `
    <button id="goodButton">I feel good</button>
    <button id="badButton">Not so good</button>
    `
  document.getElementById('goodButton').addEventListener('click', () => feelingGood())
  document.getElementById('badButton').addEventListener('click', () => feelingBad())
}

const feelingGood = () => {
  showMessage(`I'm feeling super`, 'user')
  setTimeout(() => showMessage(` Yaay ${userName}! If you want to spread your happiness, follow this link to our <a href="https://jamboard.google.com/d/1Jr0VPHAZ9leYBqf77Iqp-6DFdM4-2GSYYJ-b9JZVtvY/edit?usp=sharing">wall</a> and share your thoughts .`, 'bot'), 2000);
  inputWrapper.innerHTML = '';
}

const feelingBad = () => {
  showMessage(`Not so good`, 'user')
  setTimeout(() => showMessage(`I'm sorry that you're feeling that way ${userName} 😢. Do you want to tell me why are you feeling that way?`, 'bot'), 2000);

  setTimeout(() => {
    inputWrapper.innerHTML = `
    <button id="imLonely">I'm Lonely</button>
    <button id="imHurt">I'm injured</button>
    <button id="iDontWantToTalk">I don't want to talk about it</button>
    `

    document.getElementById('imLonely').addEventListener('click', () => feelingLonely())
    document.getElementById('imHurt').addEventListener('click', () => feelingHurt())
    document.getElementById('iDontWantToTalk').addEventListener('click', () => dontWantToTalk())
  }, 2500)
}

const feelingLonely = () => {
  showMessage(`I am feeling lonely`, 'user')
  setTimeout(() => showMessage(`No one should feel that way ${userName}, please reach out to <a href="https://www.jourhavande-medmanniska.se/">Jourhavande Medmänniska</a> if you want to have a chat with a real person`, 'bot'), 2000);
  inputWrapper.innerHTML = '';
}

const feelingHurt = () => {
  showMessage(`I am injured`, 'user')
  setTimeout(() => showMessage(`Oh no! If you're injured ${userName}, please contact <a href="https://www.1177.se/olyckor--skador/">Vårdguiden</a>. And if it's life threatening please call 911 immediately. `, 'bot'), 2000);
  inputWrapper.innerHTML = '';
}

const dontWantToTalk = () => {
  showMessage(`I dont want to talk`, 'user')
  setTimeout(() => showMessage(`If you don't want to talk ${userName}, perhaps you want to play a game? <a href="https://pbskids.org/sesame/games/ramp-racers/">Play Sesam street ramp racers here</a>.`, 'bot'), 2000);
  inputWrapper.innerHTML = '';
}

// Set up your eventlisteners here
sendButton.addEventListener('click', (event) => {
  event.preventDefault()
  showName()
})

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1500)
