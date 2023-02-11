// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const inputWrapper = document.getElementById('input-wrapper');


// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log (`the user responds with: "${message}"`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log(`The bot asks: "${message}"`)
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
  chat.scrollTop = chat.scrollHeight;
}


// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there! What's your name?", 'bot');

}

setTimeout(greetUser, 1000);

//This function listens to name-input and deals with the name-input
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('User has types their name');
  //Variable that stores the nameInput as name.
  const name = nameInput.value
  showMessage(`${name}`, 'user')
  //clears input field
  nameInput.value = ''
  //Here, I call the next functions
  setTimeout(() => howAreYouFeeling(name), 1500)
})

//This function asks a new qustion with 3 possible answers.
const howAreYouFeeling = (name) => {
  showMessage(`Good to have you here, ${name}! Are you feeling anxious or stressed today?`, 'bot')
  console.log('Bot asks about mood')
  inputWrapper.innerHTML = `
      <div class="input-wrapper" id="input-wrapper">
        <form id="name-form">
          <button id="little-stressed" class="mood-btn" type="submit">
            Yes, a little.
          </button>
          <button id="very-stressed" class="mood-btn" type="submit">
            Yes, very much!
          </button>
          <button id="calm" class="mood-btn" type="submit">
            No, I'm calm.
          </button>
        </form>
      </div>
      `
  //eventListeners for the 3 buttoms, each with a call to the next function
  document
    .getElementById('little-stressed')
    .addEventListener('click', (event) => {
      event.preventDefault()
      showMessage('Yes, a little.', 'user')
      setTimeout(() => startQuestion(), 1500)
  })
  document
    .getElementById('very-stressed')
    .addEventListener('click', (event) => {
      event.preventDefault()
      showMessage('Yes, very much.', 'user')
      setTimeout(() => startQuestion(), 1500)
  })
  document
    .getElementById('calm')
    .addEventListener('click', (event) => {
      event.preventDefault()
      showMessage(`No, I'm calm`, 'user')
      setTimeout(() => startQuestion(calm), 1500);
   })
     } 


//A function for question that starts the exercise by asking for a colour.
const startQuestion = (mood) => {
  if (mood === calm) {
    showMessage(`Happy to hear that! Let's try some grounding techniques anyways.`, 'bot')
    setTimeout(() => showMessage("First, choose a colour", "bot"), 1000);
    inputWrapper.innerHTML =
    `<div class="input wrapper" id="input-wrapper">
      <form id="name-form">
        <button id="green-btn" class="green-btn" type="submit">Green</button>
        <button id="blue-btn" class="blue-btn" type="submit">Blue</button>
        <button id="red-btn" class="red-btn" type="submit">Red</button>
      </form>
     </div>
    `
  } else {
    showMessage(`Sorry to hear that! Let's try some grounding techniques together.`, 'bot')
    setTimeout(() => showMessage("First, choose a colour", "bot"), 1000);
    inputWrapper.innerHTML =
    `<div class="input wrapper" id="input-wrapper">
      <form id="name-form">
        <button id="green-btn" class="green-btn" type="submit">Green</button>
        <button id="blue-btn" class="blue-btn" type="submit">Blue</button>
        <button id="red-btn" class="red-btn" type="submit">Red</button>
      </form>
     </div>
    `
  }

  document
    .getElementById('green-btn')
    .addEventListener('click', (event) => {
      event.preventDefault()
      showMessage("Green", "user");
      setTimeout(() => sightQuestion("green"), 1500);
    })

  document
    .getElementById('blue-btn')
    .addEventListener('click', (event) => {
      event.preventDefault()
      showMessage("Blue", "user")
      setTimeout(() => sightQuestion("blue"), 1500);
    })

  document
    .getElementById('red-btn')
    .addEventListener('click', (event) => {
      event.preventDefault()
      showMessage("Red", "user")
      setTimeout(() => sightQuestion("red"), 1500);
    }) 
}

//A function for question that activates SIGHT
const sightQuestion = (color) => {
  showMessage(`Good choice! Look around you. How many ${color} things can you see?`, "bot");
  inputWrapper.innerHTML = `      
    <div class="input-wrapper" id="input-wrapper">
      <form id="number-form">
        <input id="number-input" type="number"/>
      <button id="sight-btn" class="send-btn" type="submit">
        Send
      </button>
    </form>
  </div>
  `  
  const numberInput = document.getElementById("number-input")

  //event listener for number input
  document
  .getElementById("sight-btn")
  .addEventListener('click', (event) => {
    event.preventDefault()
    const number = numberInput.value
    showMessage(`${number}`, "user")
    numberInput.value = ""
    setTimeout(() => hearingQuestion(`${number}`, `${color}`), 1500)
  })
  }
  
//A function for question that activates hearing
const hearingQuestion = (numberOfSights, color) => {
  if (numberOfSights == 0) {
    showMessage(`That's okay. Maybe you can find some sounds instead. Take a moment to listen. How many different sounds do you hear right now?`, "bot")
  } 
  else if (numberOfSights > 3) {
    showMessage(`${numberOfSights}? That's is a lot of ${color} things!`, "bot")
    setTimeout(() => showMessage("Now, take a moment to listen. How many different sounds do you hear?", "bot"), 900)
  }
  else {
    showMessage(`Good. Now, take a moment to listen. How many different sounds do you hear?`, "bot")
  }
  inputWrapper.innerHTML = `
   <div class="input-wrapper" id="input-wrapper">
    <form id="number-form">
      <input id="number-input" type="number"/>
    <button id="smell-btn" class="send-btn" type="submit">
     Send
    </button>
    </form>
   </div>
  `

  //eventlistener that deals with smell input
  const numberInput = document.getElementById("number-input")
  document
  .getElementById("smell-btn")
  .addEventListener('click', (event) => {
    event.preventDefault()
    const number = numberInput.value
    showMessage(`${number}`, "user")
    numberInput.value = ""
    setTimeout(() => smellQuestion(`${number}`), 1500)
  })
}

//a function that reacts to sound question, and asks question that actives smell, and leads onto 
const smellQuestion = (numberOfSounds) => {
  showMessage(`${numberOfSounds}!!! Test`, "bot")
  //if there are 0 sounds, say nice and quiet, huh?

  //Otherwise, "awesome, your ears are sharp!"

  //new message: Now, sniff the air. WHat smell do you notice most?

  //New HTML: text input for most noticable smell.

}


//A function that reacts to smell question, and calls question that encourages self-care
//Bot: "Time to take big sniff of that INSERT SMELL". Take 3 deep breaths.
//Bot: Delayed message: "Before you leave, choose what you need most"
//Drop down menu: rest, food and water, fun, fresh air.

//Response: Alright! Make "INSERT THINGS" a priority today.
