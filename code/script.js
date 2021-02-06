const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')


let nameUser =''

const showMessage = (message, sender) => {
  
  if (sender === 'user') {   
    
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-two.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
  
     chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-two.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
 
  chat.scrollTop = chat.scrollHeight
}



// Question 1
function greeting() {
  showMessage(`Hi! What is your name?`, 'bot')
}

// Handle Name
const handleNameInput = (event) => {
  event.preventDefault()
  const nameUser = nameInput.value 
  nameInput.value = '' 
  showMessage(nameUser, 'user') 
  setTimeout(() => showMessage(`So nice to meet you ${nameUser}`, 'bot'), 1000)
  setTimeout(() => askForYes(nameUser), 2500)
}

//Question 2 
const askForYes = () => {
  showMessage(`My name is Yes-bot. I beleive that there is no such thing as a no-answer. And I am here to make you beleive the same. Are you up for that?`, 'bot')

  inputWrapper.innerHTML = `
    <button id="yesButton">Yes</button>
    <button id="yeahButton">Yeah</button>
  `

  document.getElementById("yesButton").addEventListener('click', () => {
    showMessage(`Yes`, 'user')
    inputWrapper.innerHTML =""
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
    setTimeout(() => askForPepp("Yas..."), 2000)
  })   

  document.getElementById("ouiButton").addEventListener('click', () => {
    showMessage(`Oui`, 'user')
    inputWrapper.innerHTML = ""
    setTimeout(() => askForPepp("Oui"), 2000)
  }) 
}

//Question 4
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
    setTimeout(() => getRandomPepp("Yes Pep"), 2000)
  })

  document.getElementById("noButton").addEventListener('click', () => {
    showMessage(`No because I'm boring`, 'user')
    inputWrapper.innerHTML =""
    setTimeout(() => thanksBye("No because I'm boring"), 2000)
  })

}

//Question 5
const getRandomPepp = () => {
  let random = Math.floor(Math.random() * 8);
  let pepp =''

  if (random === 0) {
    pepp = 'You rock! 🥇';

  } else if (random === 1) {
    pepp = 'You smell amazing 😻';

  } else if (random === 2) {
    pepp = 'You have beautiful eyes 😘';

  } else if (random === 3) {
    pepp = 'You are a very good chatter 🙋';

  } else if (random === 4) {
    pepp = 'You are a great listener 🥇';

  } else if (random === 5) {
    pepp = 'You got this! 🧡';

  } else if (random === 6) {
    pepp = 'I believe in you! 🙋';

  } else if (random === 7) {
    pepp = 'You can do whatever you put your mind to! 🦄';
  }
  
  showMessage(pepp, 'bot')
  setTimeout(() => thanksBye(), 3000)
}
 
// The end
const thanksBye = () => {
  showMessage (`We have come to the end of the road. If you feel like talking again, press the restart button`, 'bot') 
  inputWrapper.innerHTML =`
  <button id="restartButton">Actually i feel like talking again!</button>
  `

  document.getElementById("restartButton").addEventListener('click', () => {
    location.reload()
  })
  
}

nameForm.addEventListener('submit', handleNameInput)

setTimeout(greeting, 1000)
