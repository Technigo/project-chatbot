// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputValue = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

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
        <img src="./assets/user.jpeg" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./assets/bartender.jpeg" alt="Bot" />
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
  showMessage(`Hey! I'm your virtual bartender. What's your name?`, 'bot') 
  // Just to check it out, change 'bot' to 'user' here 👆
}

const textInput = (event) => {
  event.preventDefault() //prevents the page from refreshing
  const name = inputValue.value  //input from user gets stored in name
  showMessage(name, 'user') //shows the msg the user typed in
  inputValue.value = '' //clears form

  if (name === ""){ //If no user name
    setTimeout(() => showMessage(`That's rude! Please give me your name.`, 'bot'), 1000)
  }
  else{ //If user puts in name... continue...
    setTimeout(() => showMessage(`Hey ${name}!`, 'bot'), 1000) //bot says Hey to 'name'
    setTimeout(() => drinkMenu(), 2000) // continues to drinkMenu
  }
}

const drinkMenu = () => {
  showMessage(`Whats your poison?`, 'bot')
  //Create buttons for drinkMenu
  inputWrapper.innerHTML = `
  <button id='whiskeyButton'>Whiskey</button>
  <button id='rumButton'>Rum</button>
  <button id='vodkaButton'>Vodka</button>
  `
  //Whiskey button pressed
  document.getElementById('whiskeyButton').addEventListener('click', () =>  {
    showMessage('Whiskey', 'user')
    setTimeout(() => showMessage(`Ah, Whiskey... good choice! How many glasses?`, 'bot'), 1000)
    setTimeout(() => drinkNumberFunc(), 1000)
    })

  //Rum button pressed
  document.getElementById('rumButton').addEventListener('click', () =>  {
    showMessage('Rum', 'user')
    setTimeout(() => showMessage(`Aye! Rum for my matey. How many glasses?`, 'bot'), 1000)
    setTimeout(() => drinkNumberFunc(), 1000)
    })

  //Vodka button pressed
  document.getElementById('vodkaButton').addEventListener('click', () =>  {
    showMessage('Vodka', 'user')
    setTimeout(() => showMessage(`Da! Vodka for my comrade. How many glasses?`, 'bot'), 1000)
    setTimeout(() => drinkNumberFunc(), 1000)
    })
}

//Drink number function
const drinkNumberFunc = () => {
  //Clears previous buttons and insert form field again
  inputWrapper.innerHTML = `
  <form id='name-form'>
  <input id='drink-input' type='text'/>
  <button class='send-btn' id='send-btn' type='submit'>
          Send
  </button>
  </form>
  `
  //Stores value in drinkNumber, listens to if button gets pressed
  document.getElementById('send-btn').addEventListener('click', (event) => {
    event.preventDefault()
    let drinkNumber = document.getElementById('drink-input').value
    showMessage(drinkNumber, 'user')
    document.getElementById('drink-input').value = ''
    const audio = new Audio('./assets/Clink-sound.mp3') //For drink clink audio

    //Depending on nr of drinks, diffrent bot answers
    if ( drinkNumber === '' || drinkNumber === '0' ) {
      setTimeout(() => showMessage("Can't order 0 drinks. Please say again.", 'bot'), 1000)
      drinkNumberFunc()
    }
    else if ( drinkNumber > '0' && drinkNumber < '2'){
      setTimeout(() => showMessage(`Alright, ${drinkNumber} glass coming up!`, 'bot'), 1000)
      setTimeout(() => showMessage('Thanks for the order, come back if you need a refill!', 'bot'), 3000)
      setTimeout(() => audio.play(), 2000) //Plays drink clink

      setTimeout(() =>
      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bartender.jpeg" alt="Bot" />
        <div class="bubble bot-bubble">
        <img src="./assets/whiskey-glass.jpeg" id="glass" alt="glass" />
        </div>
      </section>
    ` , 1000)

      setTimeout(() => audio.play(), 2000) //Plays drink clink
    }
    else {
      setTimeout(() => showMessage(`Oh, heavy drinker eh? ${drinkNumber} glasses coming up!`, 'bot'), 1000)
      setTimeout(() => audio.play(), 2000) //Plays drink clink
      
      setTimeout(() =>
      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bartender.jpeg" alt="Bot" />
        <div class="bubble bot-bubble">
        <img src="./assets/whiskey-glass.jpeg" id="glass" alt="glass" />
        </div>
      </section>
    ` , 1000)

      setTimeout(() => showMessage('Thanks for the order! Come back if you need a refill.', 'bot'), 4000)
    }
  
  })
}

// Set up your eventlisteners here

form.addEventListener('submit', textInput) //listens to submit button, goes to textInput func.


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1000)