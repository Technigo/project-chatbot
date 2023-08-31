// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const form = document.getElementById('name-form');
const inputSection = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:
let myPizza = ""

const showDropdownMenuInsteadOfPizzaButtons = () => {
  inputSection.innerHTML = `
  <div class="sizeOptions">
  <select id="selectSize">
    <option val="Small">Small</option>
    <option val="Medium">Medium</option>
    <option val="Large">Large</option>
  </select>
  <button id="sizeButton">Select</button>
  </div>
  `

//Default size is medium in the select above so we set the option to medium as well. This means that if we select the default then option should be medium.

let option="medium"
let sizeList= document.getElementById('selectSize')
sizeList.addEventListener('change', (event)=> {option = event.target.value});
}

const pizzaSize = (pizzaSizes) => {
  myPizza=pizzaSizes
  showMessage(pizzaSizes, 'user')
  showMessage(`Fantastico, you choose ${pizzaSizes}! What size would you like ${myPizza}?`, 'bot');

 //This function invokes the function showDropdownMenuInsteadOfPizzaButton(the list you can choose size from)
 showDropdownMenuInsteadOfPizzaButtons()
}


const showMenuButtonsInsteadOfForm = () => {
  inputSection.innerHTML = `
  <div class="pizzaButton">
    <button id="MargheritaButton">Margherita</button>
    <button id="FungiButton">Fungi</button>
    <button id="CapricciosaButton">Capricciosa</button>
  </div>
`
document.getElementById('MargheritaButton').addEventListener('click', () => pizzaSize("Margherita"));
document.getElementById('FungiButton').addEventListener('click', () => pizzaSize("Fungi"));
document.getElementById('CapricciosaButton"').addEventListener('click', () => pizzaSize("Capricciosa"));
}

// Declare your functions after this comment

const sendMessage = (event) => {

// This row prevents default functions, such as reload bot och clear input fiend.

event.preventDefault()

//Created the variable inputField with the value html element name-input

let inputField = document.getElementById('name-input');

// Below we invoke the function with the values inputField.value(the message that the user enters in the input field) and sender is user

showMessage(inputField.value, 'user');

// Below we invoke the function showMessage and the sender is bot

showMessage(`Ciao ${inputField.value}! What would you like to order today?`, 'bot')
showMenuButtonsInsteadOfForm()
}
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
    console.log("Hiya!")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/pizzaman.png" alt="Bot" />
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

const greetUser = () => {

  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender

  showMessage("Ciao, What's your name?", 'bot')
  
}

// Set up your eventlisteners here
// Added a eventlistener that invoke the function sendMessage

form.addEventListener('submit', sendMessage);

setTimeout(greetUser, 1000);
