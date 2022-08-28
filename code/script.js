// Variables that point to selected DOM elements
const sendNameButton = document.querySelector('.send-btn')
const nameInput = document.querySelector('#name-input')
const inputWrapper = document.querySelector('#input-wrapper')

sendNameButton.addEventListener('click', handleNameInput)

// OLD
// const chat = document.getElementById('chat');
// const form = document.getElementById('name-form')
// const nameForm = document.querySelector("#name-form")
// const main = document.querySelector("main")
// const beerOptions = document.querySelector("#beer-options")
// const beerTypeOptions = document.querySelector("#beer-type-options")
// const lightBtn = document.querySelector("#light-btn")
// const darkBtn = document.querySelector("#dark-btn")
// const heinBtn = document.querySelector("#hein-btn")
// const carlBtn = document.querySelector("#carl-btn")
// const guinBtn = document.querySelector("#guin-btn")
// const bernBtn = document.querySelector("#bernbtn")
// const backToOptionsBtn = document.querySelector("#back-to-options-btn")

// const beers = ["Light", "Dark"]
// const lightBeer = ["Heineken", "Carlsberg"]
// const darkBeer = ["Guinness", "Bernard"]
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
        <img src="assets/user1.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
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

//Funcion for user name
function handleNameInput (event) {
  // event.preventDefult()
  let name = nameInput.value
// //If user name is left empty bot will ask for name again
  if (name === '') {
    showMessage('Please enter your name..', 'bot')
  } else {
    showMessage(`My name is ${name}`, 'user' )
    showWhatKindOfBeer(name)
  }
  nameInput.value = ''
}
//Bot asks what type of beer user would like
const showWhatKindOfBeer = (name) => {
  setTimeout(() => showMessage (`Hello ${name}! What type of beer would you like?`, 'bot'), 1000)
  setTimeout(showBeerButtons, 2000)
}
//Beer buttons are shown
const showBeerButtons = () => {
  inputWrapper.innerHTML = `
  <button id="Light-btn" class="Light-btn">Light Beer</button>
  <button id="Dark-btn" class="Dark-btn">Dark Beer</button>
  <button id="Pale Ale-btn" class="Pale Ale-btn">Pale Ale</button>
  `
  document.getElementById('Light-btn').addEventListener('click', () => showBeerAlternatives('Light Beer'));
  document.getElementById('Dark-btn').addEventListener('click', () => showBeerAlternatives('Dark Beer'));
  document.getElementById('Pale Ale-btn').addEventListener('click', () => showBeerAlternatives('Pale Ale'));
}
//Beer choices are presented
function showBeerAlternatives(beerType) {
  if(beerType === 'Light Beer') {
    inputWrapper.innerHTML = `
    <button id="Heineken-btn" class="Heineken-btn">Heineken</button>
    <button id="Carlberg-btn" class="Carlberg-btn">Carlberg</button>
    `
    document.getElementById('Heineken-btn').addEventListener('click', () => {
      showMessage("Good choice, Heineken is a great beer. That'll be $6", 'bot')
      inputWrapper.innerHTML = ''
    });
    document.getElementById('Carlberg-btn').addEventListener('click', () => {
      showMessage("Good choice, Carlsberg is a great beer. That'll be $5", 'bot')
      inputWrapper.innerHTML = ''
    });
  } else if(beerType === 'Dark Beer') {
    inputWrapper.innerHTML = `
    <button id="Guinness-btn" class="Guinness-btn">Guinness</button>
    <button id="Bernard-btn" class="Bernard-btn">Bernard</button>
    `
    document.getElementById('Guinness-btn').addEventListener('click', () => {
      showMessage("Good choice, Guinness is a great beer. That'll be $11", 'bot')
      inputWrapper.innerHTML = ''
    });
    document.getElementById('Bernard-btn').addEventListener('click', () => {
      showMessage("Good choice, Bernard is a great beer. That'll be $6", 'bot')
      inputWrapper.innerHTML = ''
    });
  } else {
    inputWrapper.innerHTML = `
    <button id="Camden Pale Ale-btn" class="Camden Pale Ale-btn">Camden Pale Ale</button>
    <button id="Brooklyn Easy IPA-btn" class="Brooklyn Easy IPA-btn">Brooklyn Easy IPA</button>
    `
    document.getElementById('Camden Pale Ale-btn').addEventListener('click', () => {
      showMessage("Good choice, Camden Pale Ale is a great beer. That'll be $8", 'bot')
      inputWrapper.innerHTML = ''
    });
    document.getElementById('Brooklyn Easy IPA-btn').addEventListener('click', () => {
      showMessage("Good choice, Brooklyn Easy IPA is a great beer. That'll be $7", 'bot')
      inputWrapper.innerHTML = ''
    }); 
  }
}





// function createButtonWithClickListener(name, callback) {
//   const button = document.createElement('button')
//   button.innerText = name
//   button.addEventListener('click', callback);
//   return button
// }

// const showBeerButtons = () => {
//   inputWrapper.innerHTML = ''
//   inputWrapper.appendChild(createButtonWithClickListener('Light Beer', () => {
//     inputWrapper.innerHTML = ''
//     showBeerAlternatives('Light Beer')
//   }))
//   inputWrapper.appendChild(createButtonWithClickListener('Dark Beer', () => {
//     inputWrapper.innerHTML = ''
//     showBeerAlternatives('Dark Beer')
//   }))
// }

// function showBeerAlternatives(beerType) {
//   if(beerType === 'Light Beer') {
//     inputWrapper.appendChild(createButtonWithClickListener('Heineken', () => {
//       showMessage("Good choice, Heineken is a great beer. That'll be $10", 'bot')
//       inputWrapper.innerHTML = ''
//     }))
//     inputWrapper.appendChild(createButtonWithClickListener('Carlsberg', () => {
//       showMessage("Good choice, Carlsberg is a great beer. That'll be $11", 'bot')
//       inputWrapper.innerHTML = ''
//     }))
//   } else {
//     inputWrapper.appendChild(createButtonWithClickListener('Hej', () => {
//       showMessage("Good choice, Hej is a great beer. That'll be $10", 'bot')
//       inputWrapper.innerHTML = ''
//     }))
//     inputWrapper.appendChild(createButtonWithClickListener('DÅ', () => {
//       showMessage("Good choice, DÅ is a great beer. That'll be $11", 'bot')
//       inputWrapper.innerHTML = ''
//     }))

//   }
// }


 //Show beer options (buttons) bot ask user to pick beer option
 //Not sure about bellow but //it out for now
//   let isFirstTime = true

//   const showBeer = () => {
//     nameForm.classList.add('hide')
//     beerOptions.classlist.add('active')
//     beerTypeOptions.classList.remove('active')
   
//     if (isFirstTime) {
//      showMessage(`Pleased to meet you ${nameUser}! what would you like to order?`, 'bot')  
//     isFirstTime = false
//     } else {
//     showMessage (`Choose another type, please`, "bot")
//      for (beers of beers) {
//        main.classList.remove(beers)
//        carlBtn.classlist.remove(`${beers}-btn`)
      
//      }
//    }
//  }
    

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
