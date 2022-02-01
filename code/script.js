// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const sendButton = document.getElementById('send-button')
const nameInput = document.getElementById('name-input')

// Global variables, if you need any, declared here

let userName
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

// Starts here
const greeting = () => {
  showMessage(`Hey buddy, what's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}


const showName = () => {
 userName = nameInput.value
 showMessage(`${nameInput.value}!`,'user')  
 setTimeout(()=>howAreYou(userName), 1000)
}



const howAreYou = () => {
  showMessage (`Hello ${userName}, How do you feel today?`,'bot')

  inputWrapper.innerHTML = `
    <button id="goodButton">Good</button>
    <button id="badButton">Not so good</button>
    `
    document.getElementById('goodButton').addEventListener ('click',()=> feelingGood())
    document.getElementById('badButton').addEventListener ('click',()=> feelingBad())
}

const feelingGood = () => {
  showMessage (`I'm feeling super`,'user')
}

const feelingBad = () => {
  showMessage (`I'm feeling bad`,'user')
  setTimeout(() => showMessage(`I'm sorry that you're feeling that way ${userName}. Why are you feeling that way?`, 'bot'), 2000);

  setTimeout(() => {inputWrapper.innerHTML = `
    <button id="imLonely">Im Lonely</button>
    <button id="imHurt">Im Hurt</button>
    <button id="iDontWantToTalk">I dont want to talk about it</button>
    `

  document.getElementById('imLonely').addEventListener('click',()=> feelingLonely())
  document.getElementById('imHurt').addEventListener ('click',()=> feelingHurt())
  document.getElementById('iDontWantToTalk').addEventListener ('click',()=> dontWantToTalk())
  }, 2500)
}

const feelingLonely = () => {
  showMessage (`I'm feeling lonely`,'user')
  setTimeout (() => showMessage(`If you're feeling lonely ${userName}, please reach out to <a href="https://www.jourhavande-medmanniska.se/">Jourhavande Medmänniska</a> ` , 'bot'), 2000); 
  inputWrapper.innerHTML = '';
}

const feelingHurt = () => {
  showMessage (`I'm feeling hurt`,'user')
  setTimeout (() => showMessage(`If you're feeling hurt ${userName}, please reach out to <a href="https://www.1177.se/olyckor--skador/">Vårguiden</a>. If it's life threatening please call 911 immediately. ` , 'bot'), 2000); 
  inputWrapper.innerHTML = '';
}

const dontWantToTalk = () => {
  showMessage (`I don't want to talk`,'user')
  setTimeout (() => showMessage(`If you don't want to talk ${userName}, perhaps you want to play a game? <a href="https://pbskids.org/sesame/games/ramp-racers/">Play Sesam street ramp racers here</a>.` , 'bot'), 2000); 
  inputWrapper.innerHTML = '';
}

 

// Set up your eventlisteners here
sendButton.addEventListener('click', (event) => {
  console.log('hej');
  event.preventDefault()
  showName()
})



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
