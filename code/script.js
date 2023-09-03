// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn')
const inputWrapper = document.getElementById('input-wrapper')
// If you need any global variables that you can use across different functions, declare them here:



let userName = '';
let name = "";
const choise = "";
const buyOrBrowse = "";
let selectedShopping = "";
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
    console.log(sender);
    console.log(message);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>`
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
// here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender

const greetUser = () => {
  showMessage(`Hello there!`, 'bot')
  showMessage(`I'm Anna, a chatbot.`, 'bot')
  showMessage(`What's your name?`, 'bot')
}

const userNameInput = event => {
  event.preventDefault();
  //I think the name is saved for later, but is it saved globally?
  userName = nameInput.value;
  //name input is reset?
  nameInput.value = "";
  //makes the users name pops up as a message
  showMessage(` ${userName}`, "user");
  //bot will ask for a choise to be made after 0,5 sek.
  setTimeout(() => reply(userName), 500);
  setTimeout(() => askForChoise(), 1200);
};

function reply(firstReply) {
  showMessage(`Welcome to 'Elbines-Plants' ${userName}!`, 'bot')
}

const askForChoise = (name) => {
  //Bot's welcome message with username pops up. Asks user to make a choise.
  showMessage(`What would you like to explore today?`, 'bot')
  //Buttons with test choice will appear


  inputWrapper.innerHTML = `
    <button class="send-btn" id="Green Plants">Green Plants</button>
    <button class="send-btn" id="Flowers">Flowers</button>
    <button class="send-btn" id="Plant Supplies">Plant Supplies</button>
    `;

  //Adding eventlisteners to buttons
  const plantButtons = inputWrapper.querySelectorAll('.send-btn');
  plantButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const chosenPlantType = event.target.id
      console.log(chosenPlantType)
      showMessage(`You have chosen ${chosenPlantType}.`, 'bot')

      if (chosenPlantType === "Green Plants") {
        showMessage(`To clarify ${userName}, would you like to buy a plant or just browse?`, 'bot')
      }
      else if (chosenPlantType === "Flowers") {
        showMessage(`To clarify ${userName}, would you like to buy flowers or just browse?`, 'bot')
      }
      else if (chosenPlantType === "Plant Supplies") {
        showMessage(`To clarify ${userName}, would you like to buy plant supplies or just browse?`, 'bot')

      }
      //this will remove the buttons after making a choise, and just show the messages

      setTimeout(() => askShopSty(), 0)


    })

    //NOT WORKING setTimeout(() => chosenPlantType(), 3000)
  })
}

//.remove() Couldn't figure out this function. where and how to use it to remove buttons without messing up the code

const askShopSty = () => {

  //Buttons with colour choice appears

  inputWrapper.innerHTML = `
      <button class="send-btn" id="buy-btn">BUY</button>
      <button class="send-btn" id="browse-btn">BROWSE</button>
      `;

  //Adding eventlisteners to colour buttons using for...of loop
  const allShoppingButtons =
    document.getElementsByClassName('shopping-btn')
  for (const shoppingButton of allShoppingButtons) {
    shoppingButton.addEventListener('click', (event) => {

      selectedShopping = event.target.value
      console.log(selectedShopping)
      //User reply, do i need this? 

      //showMessage(`${selectedShopping}, please.`, 'user')
      setTimeout(() => confirmShopping(selectedShopping), 1000)
    })
  }
}






// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
nameForm.addEventListener('submit', userNameInput)

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500)
