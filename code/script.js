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
  console.log(chat.scrollTop, "scrollTop")
  console.log(chat.scrollHeight, "scrollHeight")
}

const nextStep = (message) => {
  console.log( 'stepNumber', stepNumber)
  if (answerNumber === 1) {
    userAnswer (message)
    setTimeout (() => showPlace(message),1000)
  } else if (answerNumber === 2) {
    userAnswer (message)
    setTimeout (() => showVibe(message),1000)
  } else if (answerNumber === 3) {
    userAnswer (message)
    setTimeout (() => showOutfit(message),1000)
  }
}


// Starts here

const showMood = () => {
  answerNumber = 1
  botAnswer(`Welcome! How's the party mood?`)

  inputWrapper.innerHTML = `
  <div class="slider-container">
  <div class="emoji-container">
  <p class="emoji">&#127866;</p> 
  <p class="emoji">&#127867;</p> 
  <p class="emoji">&#127865;</p> 
  <p class="emoji">&#127864;</p> 
  <p class="emoji">&#127863;</p>
  <p class="emoji">&#127870;</p>
  </div>
  <input id="sliderinput" type="range" min="1" max="100" value="50" class="slider">
  </div>
  `
  document.getElementById('sliderinput')
  .addEventListener('mouseup', () => nextStep ('This is my mood!'))
}


const showPlace = () => {
  answerNumber++
  botAnswer(`Good to know! But where's the party at?`)

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
    botAnswer(`Which club?`)

    inputWrapper.innerHTML = `
    <select class="dropdown" id="select">
      <option class="dropdown-item" value="" selected disabled>Pick your place! &#11015;</option>
      <option class="dropdown-item" value="Berghain">Berghain</option>
      <option class="dropdown-item" value="Studio 54">Studio 54</option>
      <option class="dropdown-item" value="Nikki Beach">Nikki Beach</option>
      <option class="dropdown-item" value="Cavalli Club">Cavalli Club</option>
    </select>
  `
  } else if (place === "Cocktail bar") {
    botAnswer(`What's your favourite cocktail?`)

    inputWrapper.innerHTML = `
    <select class="dropdown" id="select">
      <option value="" selected disabled>Choose your poision &#11015;</option>
      <option value="Cosmopolitan">Cosmopolitan</option>
      <option value="Old fashioned">Old fashioned</option>
      <option value="Moscow Mule">Moscow Mule</option>
      <option value="Mojito">Mojito</option>
    </select>
  `
  }

  const outfit = document.getElementById('select')
  outfit.addEventListener('change', () => nextStep(outfit.value))

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
    console.log(chat.scrollTop)
}

  if (outfit === 'Berghain') {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/berghain.gif"
  }

  else if (outfit === "Studio 54") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/studio54.gif"
  }

  else if (outfit === "Nikki Beach") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/nikkibeach.gif"
  }

  else if (outfit === "Cavalli Club") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/cavalliclub.gif"
  }

  else if (outfit === "Cosmopolitan") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/cocktail.gif"
  }

  else if (outfit === "Old fashioned") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/oldfashioned.gif"
  }

  else if (outfit === "Moscow Mule") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/mosow.gif"
  }

  else if (outfit === "Mojito") {
    showFinalMessage()
    document.getElementById("outfitGif").src = "assets/mojito.gif"
  }

  inputWrapper.innerHTML = ""
}

setTimeout(showMood, 1000)