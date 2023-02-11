// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form')
const inputSection = document.getElementById('input-wrapper');


// This is the global variables
let myBurger = ""
let myDrink = ""
let myFries = ""
let myDip = ""

// This function consist of the html element <button> that that is the last button new order
const lastButton = () => {
  inputSection.innerHTML = `
  <button id="lastButton">New Order</button>`
  // This function invokes reload of the page after the lastButton is clicked
  document.getElementById('lastButton').addEventListener('click', () => location.reload());
  }

//This function contains the messages for dip selected, thank you text and summary of the whole order
const lastMessage = (dipValue) => {
  myDip=dipValue
  showMessage(dipValue, "user")
  showMessage("Thank you for your order!", "bot")
  showMessage(`ORDER SUMMARY:<br>- ${myBurger}<br>- ${myDrink}<br>- Fries: ${myFries}<br>- ${myDip}`, "bot")
  lastButton()
}
//This function contains the html elements <button> that is for the different dips
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
  // These eventlisteners invoke the function lastMessage 
  document.getElementById('garlicButton').addEventListener('click', () => lastMessage("Garlic"));
  document.getElementById('cheeseButton').addEventListener('click', () => lastMessage("Cheese"));
  document.getElementById('ketchupButton').addEventListener('click', () => lastMessage("Ketchup"));
  document.getElementById('noButton').addEventListener('click', () => lastMessage("No"));
}
//This function contains the if statements and else statements
const friesYN = (value) => {
  myFries=value
  if (value === "Yes" || value === "yes" || value === "YES" || value === "No" || value === "no" || value === "NO") {
    showMessage(value, "user")
    showMessage("Would you like to have a dip?", "bot")
    showDipButtonsInsteadOfFries()
  } else {
    showMessage("You can only type Yes or No", "bot")
  }
}
//This function contains the html elements <input> and <button> which is the text field and submit button
const showFriesButtonsInstedOfSelectDrink = () => {
  inputSection.innerHTML = `
  <input id="friesInput" type="text" />
  <button id="friesButton" type="submit">Send</button>
  `
//This function contain the html element <input> where you answer wtih text 
  let friesInputField = document.getElementById("friesInput")
  //This function invokes the function friesYN with the if and else statements (yes/no)
  document.getElementById('friesButton').addEventListener('click', () => friesYN(friesInputField.value));

}
//This function contains the two messages, first message is the drink the user selected and the second is confirmation from the bot with a follow up question
const selectDrink = (drink) => {
  myDrink=drink
  showMessage(drink, "user")
  showMessage(`Great you chose ${drink}! Would you like some fries with your ${myBurger}?`, "bot")
//This function invokes the function showFriesButtonsInstedOfSelectDrink
  showFriesButtonsInstedOfSelectDrink()
}

//Created a function with the element <select> which provides you with a list of drink otions
const showDropdownMenuInstedOfBurgerButtons = () => {
  inputSection.innerHTML = `
  <div class="flex drinkmenu box">
    <select id="selectDrink">  
      <option val="Water">Water</option>
      <option val="Cola">Cola</option>
      <option val="Fanta">Fanta</option>      
    </select>
    <button id="drinkButton">Select</button>  
  </div>
  `
  //Default drink is water in the select above so we set the option to water as well. This means that if we select the deafult then option should be water
  let option="water"
  let drinkmenu= document.getElementById("selectDrink")
  drinkmenu.addEventListener("change", (event)=> {
  option = event.target.value
  });

  document.getElementById("drinkButton").addEventListener('click', () => selectDrink(option))
}
//Created the variable drinkList that gets invoked by the burger buttons eventlistener. This shows the the message below
const drinkList = (burgerType) => {
  myBurger=burgerType
  showMessage(burgerType, "user")
  showMessage(`Great you choose ${burgerType}! What would you like to drink?`, "bot")

  
  //This function invokes the function showDropdownMenuInstedOfBurgerButtons(the list you can choose drinks from)
  showDropdownMenuInstedOfBurgerButtons()
}

//Created a function with the burger buttons
const showMenuButtonsInsteadOfForm = () => {
  inputSection.innerHTML = 
  `
  <div class="burgerButtons">
    <button id="cheeseButton">Cheese Burger</button>
    <button id="chickenButton">Chicken Burger</button>
    <button id="veggieButton">Veggie Burger</button>
  </div>
  `
  // Created eventlistener that invoke the drinkList variable when clicking on the burger buttons
  document.getElementById('cheeseButton').addEventListener('click', () => drinkList("Cheese Burger"));
  document.getElementById('chickenButton').addEventListener('click', () => drinkList("Chicken Burger"));
  document.getElementById('veggieButton').addEventListener('click', () => drinkList("Veggie Burger"));

}

//Created the function sendMessage 
const sendMessage = (event) => {
  //The row below prevents default functions, such as reload bot and clear input field.
  event.preventDefault()
  //Created the variable inputField  with the value html element name-input
  let inputField = document.getElementById("name-input")
  // Below we invoke the function with the values inputField.value(the message that the user enters in the input field) and sender is user
  showMessage(inputField.value, 'user');
  // Below we invoke the function showMessage and the sender is bot
  showMessage(`Hello ${inputField.value}! What would you like to order today?`, "bot");
  showMenuButtonsInsteadOfForm()
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(`User is sending a message. The message is: ${message}`)
    chat.innerHTML += 
    `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="userAvatar.gif" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(`Bot is sending a message. The message is: ${message}`)
    setTimeout(() => {
      chat.innerHTML += `
        <section class="bot-msg">
          <img src="chatbotAvatar.gif" alt="Bot" />
          <div class="bubble bot-bubble">
            <p>${message}</p>
          </div>
        </section>
      `
      chat.scrollTop = chat.scrollHeight;
    }, 400);
  }
}
// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello dear customer! What is your name?", 'bot');

}

// Set up your eventlisteners here

//Added a eventlistener that invoke the function sendMessage
form.addEventListener('submit', sendMessage);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
greetUser()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 500);

