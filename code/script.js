// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('name-input')
const sendBtn = document.getElementById('send')
const form = document.getElementById('name-form')
const messageSound = new Audio ("assets/message-pop-alert.mp3");

// Global variables, if you need any, declared here
let questionNumber = 1 //variable for counting which question we are dealing (defined in Figma)
let flowers = "" //variable for flower to be used in the final message of the bot 
let address ="" //variable for address to be used in the final message of the bot 
let cardText ="" //variable for greeting card's greeting to be used in the final message of the bot 
let delTime = ""//variable for delivery time to be used in the final message of the bot 
let cardYes = "" //variable for card to be used in the final message of the bot 

// Functions declared here
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("user is speaking")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/smile_user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("bot is speaking")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/smile.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  //makes sound when sending a message 
  messageSound.currentTime = 0
  messageSound.play()

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//This function will check the questionNumber and what function call after that
const nextQuestion = (message) => {
  if (questionNumber === 1) {
    userReply (message)
    setTimeout(()=> deliveryAddress (message), 1000)
  }

  else if (questionNumber === 2) {
    userReply(message)
    setTimeout(()=> deliveryPerson (message), 1000)
  }

  else if (questionNumber === 3) {
    userReply(message)
    setTimeout(()=> card (message), 1000)
  }

  else if (questionNumber === 4) {
    userReply(message)
    setTimeout(()=> cardGreeting (message), 1000)
  }

  else if (questionNumber === 5) {
    userReply(message)
    setTimeout(()=> deliveryTime (message), 1000)
  }

  else if (questionNumber === 6) {
    userReply(message)
    setTimeout(()=> finalMessage (message), 1000)
  }
}

// Question number 1
const greeting = () => {
  questionNumber=1
  showMessage(`Hello there! Tomorrow's options are the following:`, 'bot')

inputWrapper.innerHTML=
`<button id="tulipsBtn">Bouquet of Tulips 15€</button>
<button id="rosesBtn">Bouquet of Roses 25€</button>
<button id="liliesBtn">Bouquet of Lilies 20€</button>`

// Set up your eventlisteners here
document.getElementById('tulipsBtn').addEventListener('click', () => {
  flowers="Bouquet of Tulips 15€";
  nextQuestion('Bouquet of Tulips 15€')
})
document.getElementById('rosesBtn').addEventListener('click', () => {
  flowers="Bouquet of Roses 25€";
  nextQuestion('Bouquet of Roses 25€')
})
document.getElementById('liliesBtn').addEventListener('click', () => {
  flowers="Bouquet of Lilies 20€";
  nextQuestion('Bouquet of Lilies 20€')
})
}

// Question number 2
const deliveryAddress = ()=> {
  questionNumber++
  botReply(`What is the delivery address?`)
  

  inputWrapper.innerHTML=
  `<form id="formAddress">
    <input id="inputAddress" type="text" />
    <button class="send-btn" type="submit" id="send">Send</button>
  </form>
  `
  document.getElementById('formAddress').addEventListener('submit', (event) => {
    event.preventDefault()
    address = inputAddress.value
    nextQuestion(inputAddress.value)
  })
}

// Question number 3
const deliveryPerson = ()=> {
  questionNumber++ //this is the same than writing questionNumber = questionNumber + 1
  botReply(`Are the flowers for yourself or someone else?`)

  inputWrapper.innerHTML=
`<button id="myselfBtn">Myself</button>
<button id="someoneElseBtn">Someone else</button>`

//if the flowers are for myself bot does not ask the card questions and goes straight to question number 5
document.getElementById('myselfBtn').addEventListener('click', () => {
  questionNumber=5;nextQuestion('myself')
})

document.getElementById('someoneElseBtn').addEventListener('click', () =>{
  nextQuestion('someone else')
})
} 
//Question 4
const card = () => {
  questionNumber++
  botReply(`Would you like to add a greeting card with your flowers?`)
  inputWrapper.innerHTML=
  `<button id="cardYesBtn">Yes</button>
  <button id="cardNoBtn">No</button>`

  document.getElementById('cardYesBtn').addEventListener('click', () => {
  cardYes="Yes"

  nextQuestion('Yes')
  })

  document.getElementById('cardNoBtn').addEventListener('click', () => {
    questionNumber=5;
    nextQuestion('No')
  }) 
}

// Question number 5
const cardGreeting = () => {
  questionNumber++
  botReply (`Type your greeting here, for example ''Happy Birthday Lisa, Love Tom''`)
  inputWrapper.innerHTML=
  `<form id="formCardGreeting">
    <input id="inputField" type="text"/>
    <button id="sendBtn" class="send-btn" type="submit">Send</button>
  </form>`
  document.getElementById('formCardGreeting').addEventListener('submit', (event) => {
    event.preventDefault()
    cardText= inputField.value
    nextQuestion(inputField.value)
  })
}

// Question number 6
const deliveryTime = () => {
  questionNumber++
  botReply (`What time would you like your delivery?`)
  inputWrapper.innerHTML=
  `<select id="deliveryTime">
    <option value="" selected disabled>👇 Select a delivery time...</option>
    <option value="10AM-12PM">10AM-12PM</option>
    <option value="12PM-2PM">12PM-2PM</option>
    <option value="2PM-4PM">2PM-4PM</option>
    <option value="4PM-6PM">4PM-6PM</option>
  </select>`
  let select = document.getElementById('deliveryTime')
  select.addEventListener('change', () => {
   delTime= select.value
   nextQuestion(select.value)
  })
}

//Question number 7 
const finalMessage = () => {
  if (cardYes === "Yes"){
    botReply(`Thank you for your order. We will deliver ${flowers} with 
    a card reading "${cardText}" to the address: ${address} between ${delTime}. 
    Please press "confirm" to continue with the order or "restart" to make changes`)
  }
  else {
    botReply(`Thank you for your order. We will deliver ${flowers} to the address: ${address} between ${delTime}. 
    Please press "confirm" to continue with the order or "restart" to make changes`)
  }
  inputWrapper.innerHTML=
  `<button id="confirmBtn">Confirm</button>
  <button id="restartBtn">Restart</button>`

  document.getElementById('confirmBtn').addEventListener('click', () => {
   document.getElementById('chatdiv').style.display="none"
   document.getElementById('confirmpage').style.display="block"
    // botReply(`Thank you for your order. We will now redirect you to the payment page`)
  })

  document.getElementById('restartBtn').addEventListener('click', () => {
    questionNumber=1
    flowers = "" //resetting variable to empty for new choices
    address = "" //resetting variable to empty for new choices
    cardText = "" //resetting variable to empty for new choices
    delTime = "" //resetting variable to empty for new choices 
    cardYes = "" //resetting variable to empty for new choices
    greeting()
    }) 
}


 // This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)