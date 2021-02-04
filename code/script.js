// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const value = document.getElementById("name-input").value;
// const value = document.getElementById("name-input")
let step = 1;

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

  // Let's clear user input value every time after sending message
  // document.getElementById('name-input').value = "";
}

// Starts here
const greeting = () => {
  step = 1;
  showMessage(`Hello! Would you like to order coffee?`, 'bot')
  console.log('Hello');
}

const coffeePicker = (event) => {
  event.preventDefault()
  step ++
  const value = document.getElementById("name-input").value;
  showMessage(value, "user")
  if(value === 'yes') {
    showMessage('Please select below', 'bot'); /// Choose coffee
    // setTimeout(() => coffeePicker(), 1000);   
    inputWrapper.innerHTML = `
    <div id="buttons" class="buttons">
      <button value="coffee" id="coffeeBtn">Coffee</button>
      <button value="latte" id="latteBtn">Latte</button>
      <button value="cappuccino" id="cappBtn">Cappuccino</button>
    </div>
    `
    document
    .getElementById("coffeeBtn")
    .addEventListener('click', () => { 
    showMessage('Ok, one coffee coming up for you', 'bot')  
    inputWrapper.innerHTML = ""
    setTimeout(() => chooseSize("coffee"), 1000)
    })

    document
    .getElementById("latteBtn")
    .addEventListener('click', () => {
    showMessage('Ok, one latte coming up for you', 'bot')
    inputWrapper.innerHTML = ""
    setTimeout(() => chooseSize("latte"), 1000)
    })

    document
    .getElementById("cappBtn")
    .addEventListener('click', () => {
    showMessage('Ok, one cappuccino coming up for you', 'bot')
    inputWrapper.innerHTML = ""
    setTimeout(() => chooseSize("cappuccino"), 1000)
    })
  } else if(value === 'no'){
    showMessage('Ok, see you another time!', 'bot');
  } else {
    showMessage("I'm sorry, I didn't understand your answer. Please try again.", 'bot');
  }
}
 
const chooseSize = () => {
  step ++
  console.log('choose size')
  // inputWrapper.innerHTML = ""
  showMessage('What size do you want?', 'bot')
  inputWrapper.innerHTML = `
  <div id="sizeButtons" class="buttons">
    <button value="short" id="shortBtn> ☕ short </button>
    <button value="tall" id="tallBtn> 🥛 large </button>
  </div> 
  `
  document.getElementById("shortBtn").addEventListener('click', () => 
    showPrize("short"))
  document.getElementById("tallBtn").addEventListener('click', () => 
    showPrize("tall"))
  }

// Set up your eventlisteners here
// nameForm.addEventListener("submit", (event) => {
//   event.preventDefault();
// })
nameForm.addEventListener("submit", coffeePicker)

  // if (step === 1) {
  //   showMessage(value, "user")
 
//   } else if (step === 2) {
//       if(value === 'latte' || value === 'cappuccino') {
//         showMessage('Great, short or tall?', 'bot');
//         step ++
//       } else {
//         showMessage('Sorry, I do not understand.', 'bot');
//       }
//   } else if (step === 3) {
//       if(value === 'short') {
//         showMessage('That will be 20 kronors', 'bot');
//         step ++
//       } else if (value === 'tall'){
//         showMessage('That will be 30 kronors', 'bot');
//         step ++
//       } else {
//         showMessage('Sorry, I can only prepare short or tall', 'bot');
//       } 
//   } else if (step === 4) {
//       showMessage('Thank you. Have a good day!', 'bot');
//   }
  
// });


// }

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
// setTimeout(showMessage, 1000)