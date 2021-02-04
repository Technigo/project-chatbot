// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here
let stepNumber = 1

// Functions declared here

const botAnswer = (message) => {
  showMessage (message, 'bot')
}

const userAnswer = (message) => {
  showMessage (message, 'user') 
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  console.log(sender)
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img class="profile-pic" src="assets/user-img.jpeg" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img class="profile-pic" src="assets/bot-img.jpeg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

const nextStep = (message) => {
  console.log( 'stepNumber', stepNumber)

  if (answerNumber === 1) {
    userAnswer (message)
    setTimeout (() => showVibe(message),1000)
  } else if (answerNumber === 2) {
    userAnswer (message)
    setTimeout (() => showOutfit(message),1000)
  }
}


// Starts here
const showPlace = () => {
  answerNumber = 1
  botAnswer(`Hello, where's the party at?`)

  inputWrapper.innerHTML = `
    <button id="nightclubBtn">Nightclub</button>
    <button id="cocktailBtn">Cocktail bar</button>
  `
  document.getElementById('nightclubBtn')
  .addEventListener('click', () => nextStep('Nightclub'))
  document.getElementById('cocktailBtn')
  .addEventListener('click', () => nextStep('Cocktail bar'))
} 

const showVibe = (place) => {
  answerNumber++

  if (place === 'Nightclub') {
    botAnswer(`Are we talking Berghain or Studio54?`)

    inputWrapper.innerHTML = `
    <button id="berghainBtn">Berghain</button>
    <button id="studio54Btn">Studio 54</button>
  `
  document.getElementById('berghainBtn')
  .addEventListener('click', () => nextStep('Berghain'))
  document.getElementById('studio54Btn')
  .addEventListener('click', () => nextStep('Studio 54'))

  } else {
    botAnswer(`In the mood for Cosmopolitan or Old Fashioned?`)

    inputWrapper.innerHTML = `
    <button id="cosmoBtn">Cosmopolitan</button>
    <button id="oldfashionBtn">Old Fashioned</button>
  `
  document.getElementById('cosmoBtn')
  .addEventListener('click', () => nextStep('Cosmopolitan'))
  document.getElementById('oldfashionBtn')
  .addEventListener('click', () => nextStep('Old fashioned'))
  }

}

const showOutfit = (outfit) => {
  answerNumber++

  botAnswer(`I got the perfect outfit for you! Party on!`)

  const showFinalMessage = () => {
    chat.innerHTML += `
      <section class="bot-msg">
      <img class="profile-pic" src="assets/bot-img.jpeg" alt="Bot" /> 
        <div class="bubble bot-bubble final">
          <img class="outfit-gif" id="outfitGif" src=""/>
        </div> 
      </section>
    `
    chat.scrollTop = chat.scrollHeight
}

  if (outfit === 'Berghain') {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/partytest.gif"
  }

  else if (outfit === "Studio 54") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/studio54.gif"
  }

  else if (outfit === "Cosmopolitan") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/cocktail.gif"
  }

  else if (outfit === "Old fashioned") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/oldfashioned.gif"
  }

  inputWrapper.innerHTML = ""
}


// Set up your eventlisteners here


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(showPlace, 1000)