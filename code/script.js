// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.querySelector("#name-form")
const main = document.querySelector("main")
const beerOptions = document.querySelector("#beer-options")
const beerTypeOptions = document.querySelector("#beer-type-options")
const lightBtn = document.querySelector("#light-btn")
const darkBtn = document.querySelector("#dark-btn")
const heinBtn = document.querySelector("#hein-btn")
const carlBtn = document.querySelector("#carl-btn")
const guinBtn = document.querySelector("#guin-btn")
const bernBtn = document.querySelector("#bernbtn")
const backToOptionsBtn = document.querySelector("#back-to-options-btn")

const beers = ["Light", "Dark"]
const lightBeer = ["Heineken", "Carlsberg"]
const darkBeer = ["Guinness", "Bernard"]
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

  let nameUser = null;

  nameForm.addEventListener("submit", (event) => {
   event.preventDefault()
   nameUser = document.querySelector("#name-input").value 
   if (nameUser.length === 0 || nameUser === null) {
     showMessage('Please tell us your name', "bot")
   } else {
    showMessage(nameUser, "user")
    setTimeout(showBeer, 500)
   }
 })

 //Show beer options (buttons) bot ask user to pick beer option
 
  let isFirstTime = true

  const showBeer = () => {
    nameForm.classList.add('hide')
    beerOptions.classlist.add('active')
    beerTypeOptions.classList.remove('active')
   
    if (isFirstTime) {
     showMessage(`Pleased to meet you ${nameUser}! what would you like to order?`, 'bot')  
    isFirstTime = false
    } else {
    showMessage (`Choose another type, please`, "bot")
     for (beers of beers) {
       main.classList.remove(beers)
       carlBtn.classlist.remove(`${beers}-btn`)
      
     }
   }
 }
    

//Denna under funkarw
// const submitButton = document.querySelector(".send-btn")
// const inputField = document.querySelector("#name-input")
// submitButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   nameUser = inputField.value;
//   showMessage(`hi ${nameUser} what could I get you?`, 'bot')
  
// })

// if (nameUser.length === 0 || nameUser === null) {
//   showMessage('Please enter your name', 'bot')
// } 
// If the user doesnt type name:
// let nameUser = null;

// nameForm.addEventListener("submit", (event) => {
//   event.preventDefault()
//   nameUser = document.querySelector("#name-input").value 
//   if (nameUser.length === 0 || nameUser === null) {
//     showMessage('Please tell us your name', "bot")
//   } else {
//     showMessage(nameUser, "user")
//     setTimeout(showTypes, 500)
//   }
// })

// let isFirstTime = true

// const showBeer = () => {
//   nameForm.classList.add('hide')
//   buttonOptions.classList.remove('active')
//   beerOptions.classlist.add('active')
//   if (isFirstTime) {
//     showMessage(`Pleased to meet you ${nameUser}! what would you like to order?`, 'bot')  
//   isFirstTime = false
//   } else {
//     showMessage (`Choose another type, please`, "bot")
//     for (beer of beers) {
//       main.classList.remove(beers)
      
//     }
//   }
// }

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
