// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')


// If you need any global variables that you can use across different functions, declare them here:
let name = ""; 
let gender = ""; 
let selectedPriceRange = ""; 
let selectedColour = "";
let select = ""; 

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
// Bot greets user
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi! I can help you find the perfect gift for anyone. <br><br>Please start by telling me your name.", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

//The user types name and name is saved
const handleNameInput = (event) => { 
  event.preventDefault(); 
  //name saved for later
  name = nameInput.value
  console.log(name)
  //the users name pops up as a message
  showMessage(name, "user")
  //name input is reset
  nameInput.value = ""; 
  //after 1s bot asks for gender
  setTimeout(() => askForGender(name), 1000);
}

const askForGender = (name) => {
  //Bot's welcome message with name pops up. Asks for gender.
  showMessage(`Nice to meet you ${name}! <br><br> Are you looking for a gift for a gentleman or a lady?`, "bot")
  //Buttons with gender choice appears
  inputWrapper.innerHTML =`
  <button class="gender-btn" id="lady-btn">👩‍🦰</button>
  <button class="gender-btn" id="gentleman-btn">🧔</button>
  `; 
  //Adding eventlisteners to gender buttons
  document.getElementById('lady-btn')
    .addEventListener('click', () => {
      //redeclaring global variable "gender"
      gender = "lady"
      //User reply comes up
      showMessage("It's for a lady.", "user")
      //Invokes bot's next message
      setTimeout(() => confirmGender(gender), 1000)
    })
  document.getElementById('gentleman-btn')
    .addEventListener('click', () => {
      //redeclaring global variable "gender"
      gender = "gentleman"
      //User reply comes up
      showMessage("It's for a gentleman.", "user")
      //Invokes bot's next message
      setTimeout(() => confirmGender (gender), 1000)
    })
}

const confirmGender = (gender) => {
  //if it's a lady the bot will confirm this
  if (gender === "lady") {
    showMessage (`${name}, I'm sure we'll find her a lovely gift!`, 'bot')
    //if it's a gentleman the bot will confirm this
  } else if (gender === "gentleman") {
    showMessage (`${name}, I'm sure we'll find him a lovely gift!`, 'bot')
  }
  //invoking bot's next message about price
  setTimeout(() => askPriceRange(), 1000)
}

const askPriceRange = () => {
  showMessage (`So, how much is this special gift supposed to cost?`, 'bot')
  //Drop down window with three options will show up
  inputWrapper.innerHTML =`
    <select id="price-select">
    <option value="">--Please choose a price range--</option>
    <option id="range-1" value="range-1">10-50€</option>
    <option id="range-2" value="range-2">50-100€</option>
    </select>
    `; 
    select = document.getElementById("price-select")
  const priceRangeBtns = inputWrapper.innerHTML
  //Adding eventlisteners to option range 1
  document.getElementById('price-select')
    .addEventListener('change', (event) => {
      //Storing the value of the event target by redeclaring global variabel
      selectedPriceRange = event.target.value
      //User reply comes up
      showMessage("This is what I can afford.", "user")
      select.remove() //Removing the buttons to make the chat look closed.
      //Invokes bot's next message
      setTimeout(() => confirmPriceRange(selectedPriceRange), 1000)
    })
}

const confirmPriceRange = (priceRange) => {
  //Bot replying to alternative 1
 if (priceRange === 'range-1') {
  selectedPriceRange = "10 to 50€"
  showMessage(`Is that all?`, 'bot')
  setTimeout(() => showMessage(`That's fine, I'm sure we'll come up with something nice!`, 'bot'), 2000)
  //Bot replying to alternative 2
 } else if (priceRange === 'range-2') {
  selectedPriceRange = "50 to 100€"
  showMessage (`Amazing! It must be quite a special friend!`, 'bot')
 } 
 //Invoking question about colour
 setTimeout(() => askColour(), 3000)
}

const askColour = () => {
  //Bot asks about colour
  showMessage (`My next question, ${name}, is what colour the gift should have?`, 'bot')
  //Buttons with colour choice appears
  inputWrapper.innerHTML =`
  <button class="colour-btn" id="yellow-btn" value='Yellow'>Yellow</button>
  <button class="colour-btn" id="green-btn" value='Green'>Green</button>
  `; 

  //Adding eventlisteners to colour buttons using for...of loop
  const allColourButtons =
  document.getElementsByClassName('colour-btn')
      for (const colourButton of allColourButtons){
        colourButton.addEventListener('click', (event) => {
          //Storing colour value by redeclaring global variabel
          selectedColour = event.target.value
          console.log (selectedColour)
          //User reply comes up
          showMessage(`${selectedColour}, please.`, 'user')
          //Invokes bot's next message
          setTimeout(()=> confirmColour(selectedColour), 1000)
        })
      }
}

const confirmColour = (colour) => {
  //Bot confirming colour choice
  showMessage(`${colour} is definitely a great choice!`, 'bot')
   //Invoking confirmation of all choices
  setTimeout(() => confirmAllChoices(), 2000)
}

const confirmAllChoices = () => {
  showMessage(`So, ${name}, is it correct that you want to find a ${selectedColour.toLocaleLowerCase()} gift for a ${gender} in the price range of ${selectedPriceRange}? `, 'bot')

  //Buttons with confirmation choice appears
  inputWrapper.innerHTML =`
  <button class="confirm-btn" id="yes-btn" value='yes'>Yes</button>
  <button class="confirm-btn" id="no-btn" value='no'>No</button>
  `; 
  //Adding eventlisteners to choice buttons
  document.getElementById('yes-btn')
    .addEventListener('click', () => {
      //User reply comes up
      showMessage("Yes, you got it right!", "user")
      //Invokes bot's next message
      setTimeout(() => reactConfirmation("yes"), 1000)
    })
  document.getElementById('no-btn')
    .addEventListener('click', () => {
      //User reply comes up
      showMessage("No, you got it wrong.", "user")
      //Invokes bot's next message
      setTimeout(() => reactConfirmation ("no"), 1000)
    })
}

const reactConfirmation = (answer) => {
switch(answer) {
  case "yes":
  console.log ("Ill give you this suggestion")
  setTimeout(() => suggestion (), 1000)
  break
  case "no":
  showMessage("Sorry about that. Reload the page and try again.", 'bot')
  inputWrapper.remove() //Removing the buttons to make the chat look closed.
  break
}
}

const suggestion = () => {
  if (gender === "lady" && selectedPriceRange === "10 to 50€" && selectedColour === "Yellow") 
    {showMessage("How about a vibrant yellow mug? It can brighten her mornings with her favorite hot beverage.", 'bot')
  } else if (gender === "lady" && selectedPriceRange === "10 to 50€" && selectedColour === "Green")       {showMessage("How about a potted green succulent? It is a low-maintenance and aesthetically pleasing gift.", 'bot');
  } else if (gender === "lady" && selectedPriceRange === "10 to 50€" && selectedColour === "Yellow")
  {showMessage ("How about a yellow toaster? It can add a pop of color to her kitchen.", 'bot')
  } else if (gender === "lady" && selectedPriceRange === "50 to 100€" && selectedColour === "Green")
  {showMessage ("How about a soft green throw blanket? It could add comfort and style to her home.", 'bot')
  } else if (gender === "gentleman" && selectedPriceRange === "10 to 50€" && selectedColour === "Yellow") 
  {showMessage ("How about a yellow baseball cap with a cool design or logo? This could be a practical and fashionable accessory.", 'bot')
  } else if (gender === "gentleman" && selectedPriceRange === "10 to 50€" && selectedColour === "Green") 
  {showMessage ("How about a green-themed notebook or journal? Those are great for jotting down thoughts, notes, or sketches.", 'bot')
  } else if (gender === "gentleman" && selectedPriceRange === "50 to 100€" && selectedColour === "Yellow") 
  {showMessage ("How about a yellow hoodie? It could be a comfortable and trendy addition to his casual wardrobe.", 'bot')
  } else if (gender === "gentleman" && selectedPriceRange === "50 to 100€" && selectedColour === "Green") 
  {showMessage ("How about a green backpack? Especially a durable and stylish one - it can be practical for everyday use or travel.", 'bot')
  }
  
}

// Set up your eventlisteners here
nameForm.addEventListener ('submit', handleNameInput)

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)