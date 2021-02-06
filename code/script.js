// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper'); //input sektion + submit
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input'); //User input sektion

// Global variables, if you need any, declared here
let nameUser =''

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
// Question 1
function greeting() {
  showMessage(`Hi! What is your name?`, 'bot')
  
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Handle Name
const handleNameInput = (event) => {
  event.preventDefault()
  const nameUser = nameInput.value //sparar namnet
  nameInput.value = '' //rensar text rutan
  showMessage(nameUser, 'user') //visar userinput i chatten
  setTimeout(() => showMessage(`So nice to meet you ${nameUser}`, 'bot'), 1000)
  setTimeout(() => askForYes(nameUser), 2500)
}

//Question 2 
const askForYes = () => {
  setTimeout (showMessage(`Hello! My name is Yes-bot. I beleive that there is no such thing as a no-answer. And I am here to make you beleive the same. Are you up for that?`, 'bot'), 1000)

  inputWrapper.innerHTML = `
    <button id="yesButton">Yes</button>
    <button id="yeahButton">Yeah</button>
  `
  document.getElementById("yesButton").addEventListener('click', () => {
    showMessage(`Yes`, 'user')
    inputWrapper.innerHTML = ""
    setTimeout(() => askForFeeling("Yes"), 2000)
  })

  document.getElementById("yeahButton").addEventListener('click', () => {
    showMessage(`Yeah`, 'user')
    inputWrapper.innerHTML =""
    setTimeout(() => askForFeeling("Yeah"), 2000)
  })
}

//Question 3
const askForFeeling = (answer) => {
  showMessage(`So your answer is ${answer}. Of course, I'm so happy you are up for that. You rock!🤘`, 'bot')
  showMessage(`Are you feeling happy?`, 'bot')

  inputWrapper.innerHTML =`
    <button id="yasButton">Yas...</button>
    <button id="ouiButton">Oui</button> 
  `
  
  document.getElementById("yasButton").addEventListener('click', () => {
      showMessage(`Yas...`, 'user')
      inputWrapper.innerHTML = ""
      setTimeout(() => askForPepp("Yas..."), 1000)
  })   

  document.getElementById("ouiButton").addEventListener('click', () => {
     showMessage(`Oui`, 'user')
     inputWrapper.innerHTML = ""
     setTimeout(() => askForPepp("Oui"), 1000)
  }) 
}

const askForPepp = (feeling) => {
  if (feeling === "Oui") {
    showMessage(`Cool, you're confident! If you're happy than I'm happy`, 'bot')
    showMessage(`Would you like a pep talk? Even though you don't seem to need it 😜`, 'bot')
  } else {
    showMessage(`That seems a bit modest, don't you think?🙊`, 'bot')
    showMessage(`Maybe you need a pep talk?`, 'bot')
  }

  inputWrapper.innerHTML =`
    <button id="pepButton">Yes Pep</button>
    <button id="noButton">No because I'm boring</button> 
  `
  document.getElementById("pepButton").addEventListener('click', () => {
    showMessage(`Yes Pep`, 'user')
    inputWrapper.innerHTML =""
    setTimeout(() => showPepp("Yes Pep"), 1000)
  })

  document.getElementById("noButton").addEventListener('click', () => {
    showMessage(`No because I'm boring`, 'user')
    inputWrapper.innerHTML =""
    setTimeout(() => thanksBye("No because I'm boring"), 1000)
  })

}


const getRandomPepp = () => {
  const random = Math.floor(Math.random() * 8);
  if (random === 0) {
    return "You rock!";

  } else if (random === 1) {
    return "You smell amazing";

  } else if (random === 2) {
    return "You have beautiful eyes";

  } else if (random === 3) {
    return "You're a very good chatter";

  } else if (random === 4) {
    return "You're a great listener";

  } else if (random === 5) {
    return "You got this!";

  } else if (random === 6) {
    return "I believe in you!";

  } else if (random === 7) {
    return "You can do whatever you put you min to!";
  }
}

const showPepp = () => {
  showMessage(`I knew you where up for some pep talk!`, 'bot')
}


//Last thing the user see.
const thanksBye = () => {
  showMessage(`Its shame that you dont want to talk 😔... `, 'bot')
  showMessage (`If you feel like talking again, press the restart button`, 'bot') //avslutar programmet
  inputWrapper.innerHTML =`
  <button id="restartButton">Actually i feel like talking again!</button>
  `

  document.getElementById("restartButton").addEventListener('click', () => {
    location.reload()
  })
  
}

// Set up your eventlisteners here
nameForm.addEventListener('submit', handleNameInput)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
