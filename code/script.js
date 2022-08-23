// Variables that point to selected DOM elements
const chat = document.getElementById('chat');


// If you need any global variables that you can use across different functions, declare them here:
let heroName;
let heroHp = 2
const heroInventory = [];//🅰️ 2 is the nuber HP you start with


//Tänker att vi kan deklarera inventoryn här, typ let invemtory = [item1, item2]

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
  showMessage("Hello adventurer, what is your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


setTimeout(greeting, 1);

//START OF OUR CODE
const submitButton = document.querySelector(".send-btn");
const inputField = document.querySelector("#name-input");
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    heroName = inputField.value; //defines the heros name 
    showMessage(`My name is ${heroName}`, "user"); 

    // Hide the input line and send button 
    const inputWrapper = document.querySelector(".input-wrapper");
    inputWrapper.classList.add("hidden-wrapper");

   //After showMessages is called, setTimout waits 1000 ms to call nameReply 
  setTimeout(nameReply, 0);
})

/* This is the first reply from the bot */
const nameReply = () => {
  showMessage(`${heroName}, you are about to embark on an adventure! Choose one item below to aid you on you quest. I advise you to choose wisely!`, "bot");
  setTimeout(showButtons, 0);
}

// Make buttons visible for next step
const showButtons = () => {
      const buttonWrapper = document.querySelector("#button-wrapper");
      buttonWrapper.classList.add("visible-wrapper");   
}

// Add items to Hero Inventory choosing between button options
  let itemButton = document.querySelectorAll(".answer-button");
  
//When the items are clicked and selected, they will be added to the inventory
itemButton.forEach(button => button.addEventListener("click", function (event) {
  event.preventDefault();
  heroInventory.push(this.innerHTML); 
  console.log(`Added ${this.innerHTML} to backpack`);
  console.log("inventory", heroInventory);
}))
  
  
  
  /* 
    e.preventDefault();
  }
    /*console.log(hero);
    if (hero.includes("Rope🪢")) {
      console.log("yay")    
    }
    else if (!hero.includes("Rope🪢")) {
      console.log("you died")
    }
  )}

 */