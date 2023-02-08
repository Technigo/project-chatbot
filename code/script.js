// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form')
const inputSection = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:
let myBurger=""
// Declare your functions after this comment
const drinkList = (burgerType) => {
  myBurger=burgerType
  showMessage(burgerType, "user")
  showMessage(`Great you choose ${burgerType}! What would you like to drink?`, "bot")
  showDropdownMenuInstedOfBurgerButtons()
}
const showMenuButtonsInsteadOfForm = () => {
  inputSection.innerHTML = 
  `
  <div class="burgerButtons">
  
  <button id="cheeseButton">Cheese Burger</button>
  <button id="chickenButton">Chicken Burger</button>
  <button id="veggieButton">Veggie Burger</button>
  </div>
  `
  document.getElementById('cheeseButton').addEventListener('click', () => drinkList("Cheese Burger"));
  document.getElementById('chickenButton').addEventListener('click', () => drinkList("Chicken Burger"));
  document.getElementById('veggieButton').addEventListener('click', () => drinkList("Veggie Burger"));

}
const friesYN = (value) => {
  if (value === "Yes" || value === "yes" || value === "No" || value === "no" ) {
    showMessage(value, "user")
    showMessage("Would you like to have a dip?", "bot")
    showDipButtonsInsteadOfFries()
  } else {
    showMessage("You can only type Yes or No", "bot")
  }

}
const lastMessage = (dipValue) => {
  showMessage(dipValue, "user")
  showMessage("Thank you for your order!", "bot")
  inputSection.innerHTML = ""
}
const showDipButtonsInsteadOfFries = () => {
  inputSection.innerHTML = 
  `
  <div class="dipButtons">
  
  <button id="garlicButton">Garlic</button>
  <button id="cheeseButton">Cheese</button>
  <button id="ketchupButton">Ketchup</button>
  <button id="noButton">No</button>
  </div>
  `
  document.getElementById('garlicButton').addEventListener('click', () => lastMessage("Garlic"));
  document.getElementById('cheeseButton').addEventListener('click', () => lastMessage("Cheese"));
  document.getElementById('ketchupButton').addEventListener('click', () => lastMessage("Ketchup"));
  document.getElementById('noButton').addEventListener('click', () => lastMessage("No"));
}

const showFriesButtonsInstedOfSelectDrink = () => {
  inputSection.innerHTML = `
  <input id="friesInput" type="text" />
  <button id="friesButton" type="submit">Send</button>
  `

  let friesInputField = document.getElementById("friesInput")
  document.getElementById('friesButton').addEventListener('click', () => friesYN(friesInputField.value));

}
const selectDrink = (option) => {
  showMessage(option, "user")
  showMessage(`Great you chose ${option}! Would you like some fries with your ${myBurger}?`, "bot")
  showFriesButtonsInstedOfSelectDrink()
}

const showDropdownMenuInstedOfBurgerButtons = () => {
  inputSection.innerHTML = `
  <div class="flex drinkmenu box">
    <select id="selectDrink">  
      <option val="water">Water</option>
      <option val="cola">Cola</option>
      <option val="fanta">Fanta</option>      
    </select>
    <button id="drinkButton">Select</button>  
  </div>
  `
  //Default drink is water in the select abpove so we set the option to water as well. This means that if we select the deafult then option should be water
  let option="water"
  let drinkmenu= document.getElementById("selectDrink")
  drinkmenu.addEventListener("change", (event)=> {
    option = event.target.value
  });

  document.getElementById("drinkButton").addEventListener('click', () => selectDrink(option))
}
//CREATED THE FUNCTION sendMessage 
const sendMessage = (event) => {
  //the row below prevents default functions, such as reload bot and clear input field. REMOVE THIS LINE
  event.preventDefault()
  //CREATED THE VARIABLE inputField WITH THE VALUE HTML ELEMENT name-input
  let inputField = document.getElementById("name-input")
  // BELOW WE INVOKE THE FUNCTION WITH THE VALUES inputField.value(the message that the user enters in the input field) AND user
  showMessage(inputField.value, 'user');
  // BELOW WE INVOKE THE FUNCTION showMessage BUT WITH A DIFFERENT MESSAGE AND THE SENDER IS THE BOT
  showMessage(`Hello ${inputField.value}! What would you like to order today?`, "bot");

  showMenuButtonsInsteadOfForm()
  //CLEARS THE INPUTFIELD
  inputField.value = ""
  
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log(`User is sending a message. The message is: ${message}`)
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
    console.log(`Bot is sending a message. The message is: ${message}`)
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
  showMessage("Hello dear customer! What is your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

//ADDED A EVENTLISTENER THAT INVOKE THE FUNCTION sendMessage
form.addEventListener('submit', sendMessage);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
