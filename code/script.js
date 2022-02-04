// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const sendBtn = document.getElementById('send')

// Global variables, if you need any, declared here
let username
let address
let area
let taxiType
// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-new-reversed.png" alt="User" />  
      </section>
    `

  } else if (sender === 'bot') {
    console.log(sender)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/robobot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Question 1
// Starts here
const askQuestion1 = () => {
  showMessage(`Hello, what's your name?`, 'bot')
}
setTimeout(askQuestion1, 500)

const handleQuestion1 = event => { //the handleQuestion is only used in event listeners ie if we want to do something when we click or submit
  event.preventDefault() //prevents refresh on submit
  const nameInput = document.getElementById('name-input')
  username = nameInput.value //store input value 
  showMessage(`My name is ${username}`, 'user')
  nameInput.value = '' //clears name input to empty string
  setTimeout(() => askQuestion2(), 1000)
  // setTimeout(() => selectDestination(name), 1000)  //pass arguments to selectDestination function with 1s delay --- update: no need to pass argument since we store it in global var
}

// Question 2
const askQuestion2 = () => {
  showMessage(`Where do you want to be picked up from ${username} ?`, 'bot') //show next quesiton from bot
  inputWrapper.innerHTML = //create a new form - the previous form is deleted ALSO added autofocus to the input so the cursor goes to the input and the user doesn't have to click to type an answer
    ` 
    <form id="address-form">
      <input id="address-input" type="text" autofocus /> 
      <button id= "send" class="send-btn" type="submit" >
        Send
      </button>
    </form>
  `;

  const addressForm = document.getElementById('address-form') //find the form with id = address-form (the one created above)
  // console.log(addressForm)
  addressForm.addEventListener('submit', handleQuestion2)//when submitting the address form run the handleQuestion2 function -- this is to run the next function
}

const handleQuestion2 = event => {
  event.preventDefault()
  const addressInput = document.getElementById('address-input')
  address = addressInput.value;
  showMessage(`My address is ${address}`, 'user')
  addressInput.value = ''
  setTimeout(() => askQuestion3(), 1000)
}

// Question 3
const askQuestion3 = () => {
  showMessage(`Which area do you want to go?`, 'bot')
  // console.log(`${username} address: ${address}`)
  inputWrapper.innerHTML = `
  <button id="northArea">North</button>
  <button id="southArea">South</button>
  <button id="eastArea">East</button>
  <button id="westArea">West</button>
`
  const northAreaButton = document.getElementById("northArea") //find HTML button and store it to northAreaButton const
  northAreaButton.addEventListener('click', () => setTimeout(() => handleQuestion3("North"), 1000)) //when button is clicked, run this function with this value and add a timeout - keeping the timeout here to have it as an example syntax
  const southAreaButton = document.getElementById("southArea")
  southAreaButton.addEventListener('click', () => handleQuestion3("South")) //when button is clicked, run this function with this value
  const eastAreaButton = document.getElementById("eastArea")
  eastAreaButton.addEventListener('click', () => handleQuestion3("East"))
  const westAreaButton = document.getElementById("westArea")
  westAreaButton.addEventListener('click', () => handleQuestion3("West"))
  // document.getElementById('westArea').addEventListener('click', () => areaOfDestination('West'))
}

const handleQuestion3 = (inputArea) => {
  showMessage(inputArea, 'user')
  area = inputArea
  inputWrapper.innerHTML = ""
  //CONDITIONAL
  // if (inputArea == "West") {
  //   setTimeout(declineMessage, 1000)

  // }else {
  //   setTimeout(confirmMessage, 1000)
  // }
  setTimeout(() => askQuestion4(), 1000)
}
// const declineMessage = () => {
//   showMessage(`Sorry ${username}
//   we cannot transport you to ${area} area
//   `, 'bot')
// }

// const confirmMessage = () => {
//   showMessage(`Ok ${username}
//   we will send a taxi at ${address} to transport you to ${area} 
//   `, 'bot')
// }

//Question 4
const askQuestion4 = () => {
  showMessage(`What type of car would you like?`, 'bot')
  inputWrapper.innerHTML = `
 
  <select class="box" name="cars" id="cars">
  <option value="" selected disabled>Select a car</option>
  <option value="Basic">Basic</option>
  <option value="Luxury">Luxury</option>
  <option value="Limousine">Limousine</option>
  </select>
  `
  const carSelection = document.getElementById("cars")
  carSelection.addEventListener('change', () => handleQuestion4(carSelection.value)) //Used the change eventlistener since it is a dropdown selection.Instead of writing code for every answer, get the value of the carSelection const
  // const luxury = document.getElementById("luxury")
  // cars.addEventListener('click', () => handleQuestion4("luxury"))
  // const limousine = document.getElementById("limousine")
  // cars.addEventListener('click', () => handleQuestion4("limousine"))
}

const handleQuestion4 = (inputCar) => {
  showMessage(inputCar, 'user')
  taxiType = inputCar
  //Conditional
  if (inputCar == "Limousine") {
    setTimeout(offerChampagne, 1000)
  } else {
    setTimeout(goodbyeMessage, 1000)
  }
}

const offerChampagne = () => {
  showMessage(`Beautiful choice ${username}! Here is a bottle of champagne for your ride &#127870, enjoy!`, 'bot')
  setTimeout(goodbyeMessage, 1000) //call the goodbyeMessage after someone has selected Limousine and is presented with the above message.
  inputWrapper.innerHTML = ""
}

const goodbyeMessage = () => {
  showMessage(`Thank you for booking your ride with Taxi Tomorrow, ${username}! We will send a ${taxiType} taxi to ${address} to transport you ${area}.`, 'bot')
  inputWrapper.innerHTML = ""
  
}
// //REPLY 2
// const areaOfDestination = (area) => {
//   console.log(area)
//   showMessage(area, 'user')
// }
// Set up your eventlisteners here
form.addEventListener('submit', handleQuestion1) //This is the first event listener. Code will not run until it gets to that line. After that, it goes to the top and runs the handleQuestion1 function