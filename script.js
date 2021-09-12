// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input')
const form = document.getElementById('chat-form')
const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here
let questionNumber = 0

// Functions declared here
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="https://images.vexels.com/media/users/3/232355/isolated/preview/2d9853778878b3fe4099b52d7411eb1f-cute-baby-caterpillar-illustration.png" alt="User" />  
      </section>
    ` 
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="https://static.vecteezy.com/system/resources/previews/002/571/082/non_2x/cute-cactus-plant-in-pot-kawaii-character-icon-free-vector.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here, introducing Plot the plant bot
const greeting = () => {
  showMessage(`Hello there! I'm Plot, the plant bot. What's your name?`, 'bot')
}

const whatPlant = (name) => {
  showMessage(`Nice to meet you ${name}!`, 'bot') 
  setTimeout (() => {showMessage(`What kind of plants do you like?`, 'bot')

    inputWrapper.innerHTML = `
    <button id="flowers">🌺</button>
    <button id="edibles">🌶</button>
    <button id="thorny">🌵</button>
  `
    document.getElementById('flowers')
    .addEventListener('click', () => plantSelection('flowers 🌺'))
    document.getElementById('edibles')
    .addEventListener('click', () => plantSelection('edibles 🌶'))
    document.getElementById('thorny')
    .addEventListener('click', () => plantSelection('thorny 🌵'))
  }, 1500)
  }

const plantSelection = (plantChoice) => {
  questionNumber++
  showMessage(`I prefer ${plantChoice}!`, 'user')
  const editedText = plantChoice.slice(0, -2) //removes the last two characters in the information sent through plantChoice.
  setTimeout (() => {showMessage(`Aha... ${editedText} you say.. let's find out more!`, 'bot')

    if (plantChoice === 'flowers 🌺') {
      inputWrapper.innerHTML = `
      <button id="oneBig">One BIG flower 🌸</button>
      <button id="plentySmall">A bouquet 💐</button>
      `
      document.getElementById('oneBig')
      .addEventListener('click', () => lastChoice('One BIG flower 🌸'))
      document.getElementById('plentySmall')
      .addEventListener('click', () => lastChoice('A bouquet 💐'))
    } else if (plantChoice === 'edibles 🌶') {
      inputWrapper.innerHTML = `
      <button id="sweet">I have sweet tooth 🍓</button>
      <button id="hot">I like it ZINGY 🔥</button>
      `
      document.getElementById('sweet')
      .addEventListener('click', () => lastChoice('I have sweet tooth 🍓'))
      document.getElementById('hot')
      .addEventListener('click', () => lastChoice('I like it ZINGY 🔥'))
    } else {
      inputWrapper.innerHTML = `
      <button id="cactus">Low maintenance 🌵</button>
      <button id="rose">Something deceivingly beautiful 🌹</button>
      ` 
      document.getElementById('cactus')
      .addEventListener('click', () => lastChoice('Low maintenance 🌵'))
      document.getElementById('rose')
      .addEventListener('click', () => lastChoice('Something deceivingly beautiful 🌹')) 
    }
  }, 1000)
  }

  const lastChoice = (finalChoice) => {
    questionNumber++
    showMessage(finalChoice, 'user')
    setTimeout (() => {
    if (finalChoice === 'One BIG flower 🌸') {
      showMessage(`Based on your fondness for big flowers I suggest a SUNFLOWER 🌻`, 'bot')
    } else if (finalChoice === 'A bouquet 💐') {
      showMessage(`Cool, you want it all... How about a hip bouqet of dried flowers? 🌾`, 'bot')
    } else if (finalChoice === 'I have sweet tooth 🍓') {
      showMessage(`I found this seed for a cherry tree 🍒...`, 'bot')
      setTimeout (() => {showMessage(`It might take a couple of years to give fruit but good things comes to those who wait!`, 'bot')}, 1000)
    } else if (finalChoice === 'I like it ZINGY 🔥') {
      showMessage(`Wow, a little edgy I see.. Here you have some sprouted cloves of garlic to plant 🧄`, 'bot')
    } else if (finalChoice === 'Low maintenance 🌵') {
      showMessage(`If you have the patience you can grow your own christmas tree.. Here is a baby spruce to get you started 🌲`, 'bot')
    } else {
      showMessage(`Alright, a plant with a touch of poison for you my dear...`, 'bot')
      setTimeout (() => {showMessage(`Hmm.... I suggest a carnivorous plant for you 🐲`, 'bot')}, 1000)
    }
    }, 1500)

     setTimeout (() => {inputWrapper.innerHTML =`
      <button id="yes">I'm happy with your choice!</button>
      <button id="no">Naah, try again!</button>`
 
      document.getElementById('yes')
      .addEventListener('click', () => playAgain(`I'm very satisfied with your expertise!`))
      document.getElementById('no')
      .addEventListener('click', () => playAgain(`It seems like you don't know me at all...`))
     }, 3000)
  }

    const playAgain = (happy) => {
    questionNumber++
    showMessage(happy, 'user')
    // trying out a different approach to the if/else statement
    
    if (happy === `I'm very satisfied with your expertise!`) {
      showMessage(`Perfect! Let's wrap it up in paper for you!`, 'bot') 
      inputWrapper.innerHTML = ''
      setTimeout (() => {
        showMessage(`Great, here you go! 🎁`, 'bot')
      }, 1500)
     } else {
       showMessage(`I'm sorry to hear that... let's try again, then 🙄`, 'bot')
       setTimeout (() => {location.reload()
       return false
     }, 2500)
    }
  }


const handleInput = (event) => {
  event.preventDefault()
  questionNumber++
    if (questionNumber === 1) {
      handleNameQuestion()
    } else if (questionNumber === 2) {
      setTimeout(plantSelection, 1500)
    } else if (questionNumber === 3) {
      setTimeout(lastChoice, 1500)
    } else if (questionNumber === 4) { 
      setTimeout(playAgain, 1500) 
    } 
}

const handleNameQuestion = () => {
  const name = userInput.value 
  showMessage(`My name is ${name}!`, 'user')
  inputWrapper.innerHTML = ``
  setTimeout (() => {whatPlant(name)},1000)
}

// Set up your eventlisteners here

form.addEventListener('submit', handleInput)


// When website loaded, chatbot asks first question.
// setTimeout makes the greeting take 0.5 seconds to show after the page is loaded
setTimeout(greeting, 500)