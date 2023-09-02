"use strict";

// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const inputField = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const formInputField = document.getElementById('name-form');
let teaBaseOption = "";
let teaPearlOption = "";
let drinkSizeOption = "";
let totalOrderPrice = "";
let customerName = "";


const drinkOption = {
  teaBase: ["Matcha", "Black Tea", "Oolong Tea"],
  bobaPearlOption: ["Tapioca Pearls", "Brown Sugar Pearls", "Grass Jelly", "Coffee Jelly"],
  drinkSize: ["Regular", "Large"],
  drinkPrice: ["50", "60"],   // Regular size (sek), Large size (sek)
};


// FUNCTIONS are declared below

// Function to clear the input field
// Since the input field needs to be cleared after every input I created a function for this.
const clearInputField = () => {
  inputField.value = "";
};


function removeChildrenFunction() {
  while (inputWrapper.hasChildNodes()) {
    inputWrapper.removeChild(inputWrapper.firstChild);
  }
};

const reloadPage = () => {
  setTimeout(() => {
    location.reload();
  }, 5000);
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log('Message is:', message);
    console.log('Sender is:', sender);
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
    console.log('Message is:', message);
    console.log('Sender is:', sender);
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

// Function to greet the user
// The function showMessage is called with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
const greetUser = () => {

  showMessage("Hi, welcome to the BubblePop Café!", 'bot')
  setTimeout(() => {
    showMessage("First things first. Who is this order for?", 'bot');
  }, 500);
  sendBtn.addEventListener('click', handleNameInput);
}
// Function for the name input from the user

const handleNameInput = (event) => {
  event.preventDefault();

  // the dot . means that we're accessing an attribute/method of the variable left of the dot.
  // Here we are accessing the value that exists in the input element with the id "name-input". 

  customerName = inputField.value;


  // If the function that is being called was defined with parameters, like showMessage = (message, sender), they need to be added when said function is called/used.
  // the showMessage function is called and passes on the arguments name (which is the value of the input field) and the sender (which depends on the if statement).
  if (customerName === "") {
    alert(`Oops! Looks like you missed entering your name. Could you please provide it for your order?`);
  } else {
    showMessage(customerName, "user");

    //Function that clears the input field.
    clearInputField();

    // After 1 second, show the next question by invoking the next function.
    // passing the name into it to have access to the user's name if we want to use it in the next question from the bot.
    // To pass parameter values to a function, that is itself passed as a parameter to another function, use an "anonymous function" () => {}
    // Meaning, when a function is a parameter and needs a parameter itself, you need to use an anonymous function
    setTimeout(() => handleBobaBaseOptions(customerName), 1000);
  };
};


// Function that gives drink options to the user.
const handleBobaBaseOptions = (customerName) => {

  removeChildrenFunction();
  showMessage(`Let's start creating your Boba drink ${customerName}!
  What kind of tea do you want to have?`, 'bot');

  inputWrapper.innerHTML += `
    <button id="matcha" type="submit">Matcha</button>
    <button id="blackTea" type="submit">Black Tea</button>
    <button id="oolongTea" type="submit">Oolong Tea</button>
  `;


  //Eventlisteners for buttons
  document.getElementById('matcha').addEventListener('click', () => {
    teaBaseOption = drinkOption.teaBase[0];
    showMessage(`I want to order ${teaBaseOption.toLowerCase()}.`, "user");
    setTimeout(() => handleBobaPearls(teaBaseOption), 1000);
  });
  document.getElementById('blackTea').addEventListener('click', () => {
    teaBaseOption = drinkOption.teaBase[1];
    showMessage(`I want to order ${teaBaseOption.toLowerCase()}.`, "user");
    setTimeout(() => handleBobaPearls(teaBaseOption), 1000);
  });
  document.getElementById('oolongTea').addEventListener('click', () => {
    teaBaseOption = drinkOption.teaBase[2];
    showMessage(`I want to order ${teaBaseOption.toLowerCase()}.`, "user");
    setTimeout(() => handleBobaPearls(teaBaseOption), 1000);
  });
};


const handleBobaPearls = (teaBaseOption) => {
  removeChildrenFunction();
  showMessage(`Great! For your ${teaBaseOption.toLowerCase()}, what type of boba pearls do you want to add?`, 'bot');

  inputWrapper.innerHTML += `
    <select name="bobaPearlOptions" class="bobaPearlOptions" id="bobaPearlOptions" required>
      <option value="" disabled selected>--Select one option--</option>
      <option id="tapiokaPearl" value="tapiokaPearl">Tapioka Pearls</option>
      <option id="brownSugarPearl" value="brownSugarPearl">Brown Sugar Pearls</option>
      <option id="grassJelly" value="grassJelly">Grass Jelly</option> 
      <option id="coffeeJelly" value="coffeeJelly">Coffee Jelly</option>   
    </select>
  `;

  // For the drop-down menu I tried different approaces and here's the progression of how I went about this.
  // I'm saving it here for learning purposes.

  // This iteration gives the values of the option elements as an output which is not what I want since the text of the values is written in a way that doesn't look nice. I could rewrite the values in a way that would look better such as Tapioka Pearl but I wanted to see if I could find a way to target the text of the option element.
  /* Eventlisteners for drop-down menu
    bobaPearlOptions.addEventListener('change', () => {
      teaPearlOption = bobaPearlOptions.value;
      showMessage(teaPearlOption, "user");
      setTimeout(() => handleBobaDrinkSize(), 1000);
    });
  */

  /* For this iteration I tried a switch statement and while this worked and gave me the innerText of the option I wanted to see if it could be optimised and shortened.
  The switch statement is checking the value of bobaPearlOptions.value against the values of the different options. The variable teaPearlOption is assigned with the innerText of the selected option. 
  const tapiokaPearlOption = document.getElementById('tapiokaPearl');
  const brownSugarPearlOption = document.getElementById('brownSugarPearl');
  const grassJellyOption = document.getElementById('grassJelly');
  const coffeeJellyOption = document.getElementById('coffeeJelly');
  
  bobaPearlOptions.addEventListener('change', () => {
    switch (bobaPearlOptions.value) {
      case tapiokaPearlOption.value:
        teaPearlOption = tapiokaPearlOption.innerText;
        break;
      case brownSugarPearlOption.value:
        teaPearlOption = brownSugarPearlOption.innerText;
        break;
      case grassJellyOption.value:
        teaPearlOption = grassJellyOption.innerText;
        break;
      default:
        teaPearlOption = coffeeJellyOption.innerText;
        break;
    };  
    showMessage(teaPearlOption, "user");
    setTimeout(() => handleBobaDrinkSize(), 1000);
  });
  */

  // This is the iteration I chose after some research on Stackoverflow. It is very concise and if the dropdown menu changes I don't have to update at multiple places so it's easier to maintain and scale.

  const bobaPearlOptions = document.getElementById('bobaPearlOptions');
  bobaPearlOptions.addEventListener('change', (event) => {
    /*
    (event) represents the 'change' event that occurred on the bobaPearlOptions element.
    event.target refers to the element that triggered the event, which, in this case, is the bobaPearlOptions <select> element. It's the element that the user interacted with.
    event.target.selectedOptions is an HTMLCollection of all the <option> elements that are currently selected within the <select> element. 
    By adding [0] we are specifying that we're only interested in the first selected option.
    event.target.selectedOptions[0].text retrieves the text content of the first selected <option> element. 
    */
    teaPearlOption = event.target.selectedOptions[0].text;
    showMessage(`I want to add ${teaPearlOption.toLowerCase()} to my ${teaBaseOption.toLowerCase()}.`, "user");
    setTimeout(() => handleBobaDrinkSize(), 1000);
  });
};

const handleBobaDrinkSize = () => {
  removeChildrenFunction();
  showMessage(`Nice! Which size do you want to choose?`, 'bot');

  inputWrapper.innerHTML += `
    <button id="regularSize" type="submit">Regular (500 mL)  -  50 kr</button>
    <button id="largeSize" type="submit">Large (700 mL)  -  60kr</button>`;

  //Eventlisteners for buttons
  document.getElementById('regularSize').addEventListener('click', () => {
    drinkSizeOption = drinkOption.drinkSize[0];
    totalOrderPrice = drinkOption.drinkPrice[0];
    showMessage(`I want a ${drinkSizeOption.toLowerCase()} size drink.`, "user");
    setTimeout(() => handleOrderConfirmation(), 1000);
  });
  document.getElementById('largeSize').addEventListener('click', () => {
    drinkSizeOption = drinkOption.drinkSize[1];
    totalOrderPrice = drinkOption.drinkPrice[1];
    showMessage(`I want a ${drinkSizeOption.toLowerCase()} size drink.`, "user");
    setTimeout(() => handleOrderConfirmation(), 1000);
  });
};




const handleOrderConfirmation = () => {
  removeChildrenFunction();

  showMessage(`Nice ${customerName}! You have chosen a ${drinkSizeOption.toLowerCase()} size ${teaBaseOption.toLowerCase()} with ${teaPearlOption.toLowerCase()}!
  That will be ${totalOrderPrice} kr.`, "bot");
  setTimeout(() => {
    showMessage(`Would you like to confirm your order?`, "bot");
  }, 500);

  inputWrapper.innerHTML += `
    <button id="positiveOrderConfirmation" type="submit">Yes</button>
    <button id="negativeOrderConfirmation" type="submit">No</button>`;

  document.getElementById('positiveOrderConfirmation').addEventListener('click', () => {
    showMessage(`Awesome! We're whipping up your order now. Enjoy your boba!`, "bot");
    reloadPage();
  });
  document.getElementById('negativeOrderConfirmation').addEventListener('click', () => {
    showMessage(`No Problem! Looking forward to seeing you again!`, "bot");
    reloadPage();
  });

};

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500)
