// Variables that point to selected DOM elements, in this case it's the HTML element named chat. It is also called chat when its a variable in this JS document.
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');



// If you need any global variables that you can use across different functions, declare them here:


//**FUNCTION** Handle name input
const handleNameInput = (event) => {
  event.preventDefault(); //prevents the page from refreshing
  //Store the value in a variable so we can access it after we clear it from the input
  const name = nameInput.value; //input of name is stored in variable in name
  showMessage(name, 'user'); //shows message that the user typed in
  nameInput.value = ''; //clears form

  //After 1 second, show the next question by invoking the next function. Passin the name into it to have access to the user's name if we want to use it in the next question from the bot. 
  setTimeout(() => showFoodOptions(name), 1000);
}

//**FUNCTION** Show Food options
const showFoodOptions = (name) => {
  showMessage(`Hello ${name}! What would you like to order?`, 'bot');
 //Buttons appear for cake, bun or sandwich option
  inputWrapper.innerHTML = `
    <button id='cakeBtn' value="cake">Cake</button>
    <button id='bunBtn' value="bun">Bun</button>
    <button id='sandwichBtn' value="sandwich">Sandwich</button>
    `

  //Listen for clicks on the buttons and trigger the next function, sends user to different function depending on the user's choiche
  document.getElementById('cakeBtn').addEventListener ('click', CakeOrder); 
  document.getElementById('bunBtn').addEventListener ('click', BunOrder);
  document.getElementById('sandwichBtn').addEventListener ('click', SandwichOrder); 

}

//**FUNCTION** Function for ordering cake with select (drop down menu of options)
const CakeOrder = () => {
  showMessage(`I want cake, please!`, 'user'); //message from the user about choice
  setTimeout(() => showMessage(`Okay, you want cake. What type of cake would you like? &#127856;`, 'bot'), 800); //question from bot

//Select with cake choices below
inputWrapper.innerHTML = `
<form id="cake-form">
  <select id="cake-type">
    <option value="carrot cake">Carrotcake</option>
    <option value="cheese cake">Cheesecake</option>
    <option value="chocolate cake">Chocolate cake</option>
  </select>
  <button id= "cakebtn"> Order cake </button>
</form>
  `  
  const cakeform = document.getElementById('cake-type'); //creating variable from cake choice

  //EventListener, sends user to next function. Takes the value of variable but leaves two empty spots in the index so other choices also could be entered in the next function.  
  cakebtn.addEventListener("click", () => { 
    const cake = cakeform.value; //creating new variable from cakeform variable
    Delivery(cake, undefined, undefined);
  });
  
}

//**FUNCTION** Bun order select (drop down menu)
const BunOrder = () => {
  showMessage(`I want a bun, please!`, 'user'); //message from the user about choice 
  setTimeout(() => showMessage(`Okay, you want a bun. What type of bun would you like?`, 'bot'), 800); //question from bot
  //Select with bun choices below
inputWrapper.innerHTML = `
  <form id="bun-form">
    <select id="bun-type">
      <option value="cinnamon bun">Cinnamon bun</option>
      <option value="cardamom bun">Cardamom bun</option>
      <option value="vanilla bun">Vanilla bun</option>
    </select>  
    <button id= "bunBtn"> Order bun </button>
  </form>
    `  
  const bunform = document.getElementById('bun-type'); //creating variable from bun choice
  
  //EventListener, sends user to next function. Takes the value of variable but leaves two empty spots in the index so other choices also could be entered in the next function.  
  bunBtn.addEventListener("click", () => { 
    const bun = bunform.value; //creating new variable from bunform variable
    Delivery(undefined, bun, undefined);
  });

}

//**FUNCTION Sandwich order  select (drop down menu)
const SandwichOrder = () => {
  showMessage(`I want a sandwich, please!`, 'user'); //message from the user about choice 
  setTimeout(() => showMessage(`Okay, you want sandwich. What would you like on your sandwich? &#129386;`, 'bot'), 800); //question from bot
    //Select with bun choices below  
  inputWrapper.innerHTML = `
    <form id="sandwich-form">
      <select id="sandwich-type">
        <option value="chicken curry sandwich">Chicken curry topping</option>
        <option value="cheese and ham sandwich">Ham and cheese</option>
        <option value="cream cheese sandwich">Cream cheese</option>  
      </select>
      <button id= "sandwichBtn"> Order sandwich </button>
    </form>
      `  
  const sandwichform = document.getElementById('sandwich-type'); //creating variable from bun choice

  //EventListener, sends user to next function. Takes the value of variable but leaves two empty spots in the index so other choices also could be entered in the next function. 
  sandwichBtn.addEventListener("click", () => { 
    const sandwich = sandwichform.value; //creating new variable from bunform variable
    Delivery(undefined, undefined, sandwich);
  });
      
}



//**FUNCTION** Delivery adress 
const Delivery = (cake, bun, sandwich) => {

  //If-statement for messages depending of users choice
  if (bun) {
    showMessage(`I would like a ${bun}, please!`, 'user');
    setTimeout(() => showMessage(`So, you want a ${bun}!`, 'bot'), 1500);
  }
  else if (cake) {
    showMessage(`I would like ${cake}, please!`, 'user');
    setTimeout(() => showMessage(`So, you want ${cake}!`, 'bot'), 1500);
  }
  else {
    showMessage(`I would like a ${sandwich}, please!`, 'user');
    setTimeout(() => showMessage(`So, you want a ${sandwich}!`, 'bot'), 1500);
  }

  setTimeout(() => showMessage(`To which adress to you want the delivery? &#128757;`, 'bot'), 1800);

//Textfield for entering adress
  inputWrapper.innerHTML = `
    <form id = "delivery-adress">
        <input type="text" input id="adress" placeholder="Please enter adress here" name="adress" required>
      </form>
      <button id= "adressBtn"> Submit </button>
      `  
  const userAdress = document.getElementById('adress'); //creating variable form input from user

  adressBtn.addEventListener("click", () => { 
    const adress = userAdress.value; //creating adress variable

    //If-statement if user fails to enter anything in textfield.
    if (adress === '' || null || 0){
      showMessage("You have to enter an adress! Try again.", 'bot');
    }
    else {
    GoodBye(cake, bun, sandwich, adress);
    }
  });

}

const GoodBye = (cake, bun, sandwich, adress) => {

  showMessage(`${adress}`, 'user');
  if (bun && adress) {
    setTimeout(() => showMessage(`Okay, we will deliver your ${bun} to the following adress: <br> ${adress}`, 'bot'), 1000);
  }

  else if (cake && adress) {
    setTimeout(() => showMessage(`Okay, we will deliver your ${cake} to the following adress: <br> ${adress}`, 'bot'), 1000);
  }

  else {
    setTimeout(() => showMessage(`Okay, we will deliver your ${sandwich} to the following adress: <br> ${adress}`, 'bot'), 1000);
  }

  setTimeout(() => showMessage("Thank you for shopping at Fast Fika! &#127856;", 'bot'), 1800);

inputWrapper.innerHTML = ``  

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
        <img src="assets/anime.png" alt="User" />  
      </section>
    `
    //Above, we get ahold of chat and add som innerHTML using += (add something to it). The show message function will be re-used several times. The innerHTML section will be added to the chat-section in the HTML-dokument. 
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } 
  else if (sender === 'bot') {
    
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/kawaii.png" alt="Kawaii" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// The program actually starts over here, above are the functions that are being called.
// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello welcome to Fast Fika! What's your name? &#127856;", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
  showMessage("");
}

setTimeout(greetUser, 1000);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

// Set up your eventlisteners here
//eventlistener for the submit-button of the form. Starts the function handleNameInput
form.addEventListener("submit", handleNameInput);

