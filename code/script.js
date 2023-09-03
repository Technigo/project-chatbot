"use strict";

// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const inputField = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const formInputField = document.getElementById('name-form');

// Variables where the user's choices will be stored.
let teaBaseOption = "";
let teaPearlOption = "";
let drinkSizeOption = "";
let totalOrderPrice = "";
let customerName = "";
let price = "";

// Information about the different drink choices and prices
const drinkOption = {
  teaBase: ["Matcha", "Black Tea", "Oolong Tea"],
  bobaPearlOption: ["Tapioca Pearls", "Brown Sugar Pearls", "Grass Jelly", "Coffee Jelly"],
  drinkSize: ["Regular", "Large"],
};

const teaPrices = {  // in sek
  matchaTeaPrice: [45],
  blackTeaPrice: [40],
  oolongTeaPrice: [43],
}

// FUNCTIONS

// Function to clear the input field.
const clearInputField = () => {
  inputField.value = "";
};

/* Function to remove all child elements from a specified parent element. 
"While" loop that continues as long as the inputWrapper element has child nodes. 
The hasChildNodes() method checks if the inputWrapper element has any child nodes.
inputWrapper.removeChild(inputWrapper.firstChild) inside the while loop removes the first child node/element of the parent element and does this iteratively until there are no more child nodes left.
*/
function removeChildrenFunction() {
  while (inputWrapper.hasChildNodes()) {
    inputWrapper.removeChild(inputWrapper.firstChild);
  }
};

// Function that causes the page to refresh.
const reloadPage = () => {
  setTimeout(() => {
    location.reload();
  }, 5000);
};

// Function for bot sounds
const playAudio = () => {
  const notificationSound = document.getElementById('notificationSound');
  notificationSound.volume = 0.5; // Set the volume to 50%
  notificationSound.play();
};

// This function will add a chat bubble in the correct place based on who the sender is (user/bot).
const showMessage = (message, sender) => {
  playAudio();
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
  // Properties that makes the chat scroll to the last message when there are too many to be shown in the chat box.
  chat.scrollTop = chat.scrollHeight
}

// Function to greet the user
// I tried to add audio for the greetUser function but it's not working. After some googling it might be due to audio autoplay restrictions. It works for the other functions so it should work here as well. One way to get around this is to add a start button so the user interacts with the webpage. I might do this in the future.
const greetUser = () => {
  playAudio();
  showMessage("Hi, welcome to The BubblePop Café!", 'bot')
  setTimeout(() => {
    playAudio();
    showMessage("First things first. Who is this order for?", 'bot');
  }, 500);
  sendBtn.addEventListener('click', handleNameInput);
}

// Function for the name input from the user
const handleNameInput = (event) => {
  event.preventDefault();
  // Accessing the value that exists within the input element with the id "name-input", and storing the name input from the user in a variable.
  customerName = inputField.value;
  // If the user doesn't enter a name a pop-up dialogue will be displayed asking the user to enter a name. If they enter their name the showMessage function will pass on two arguments; the value of the inputfield (the user's name) and who the sender is (user).
  if (customerName === "") {
    alert(`Oops! Looks like you missed entering your name. Could you please provide it for your order?`);
  } else {
    showMessage(customerName, "user");
    //Function that clears the input field.
    clearInputField();
    // The setTimeout function sets a timer to execute the code inside, which is the next question, after a delay of 1000 milliseconds (1 second). 
    setTimeout(() => handleBobaBaseOptions(), 1000);
  };
};

// Function that gives drink options to the user.
const handleBobaBaseOptions = () => {
  removeChildrenFunction();
  showMessage(`Let's start creating your Boba drink ${customerName}!
  What kind of tea do you want to have?`, 'bot');
  // Addition of three buttons for tea choices.
  inputWrapper.innerHTML += `
    <button id="matcha" type="submit">Matcha</button>
    <button id="blackTea" type="submit">Black Tea</button>
    <button id="oolongTea" type="submit">Oolong Tea</button>
  `;
  // Variables that store references to the three added buttons. 
  const matchaBtn = document.getElementById('matcha');
  const blackTeaBtn = document.getElementById('blackTea');
  const oolongTeaBtn = document.getElementById('oolongTea');
  //Eventlisteners for the buttons. 
  matchaBtn.addEventListener('click', () => {
    teaBaseOption = drinkOption.teaBase[0];
    price = teaPrices.matchaTeaPrice[0];
    teaBaseOrderFunction();
  });
  blackTeaBtn.addEventListener('click', () => {
    teaBaseOption = drinkOption.teaBase[1];
    price = teaPrices.blackTeaPrice[0];
    teaBaseOrderFunction();
  });
  oolongTeaBtn.addEventListener('click', () => {
    teaBaseOption = drinkOption.teaBase[2];
    price = teaPrices.oolongTeaPrice[0];
    teaBaseOrderFunction();
  });
  // Function that shows a message with the user's order and also calls the function for the next question.
  const teaBaseOrderFunction = () => {
    showMessage(`I want to order ${teaBaseOption.toLowerCase()}.`, "user");
    setTimeout(() => handleBobaPearls(teaBaseOption), 1000);
  };
};

// Function that adds a drop-down menu with different toppings to choose between
const handleBobaPearls = (teaBaseOption) => {
  removeChildrenFunction();
  showMessage(`Great! For your ${teaBaseOption.toLowerCase()}, what type of topping do you want to add?`, 'bot');
  // adds a drop-down menu
  inputWrapper.innerHTML += `
    <select name="bobaPearlOptions" class="bobaPearlOptions" id="bobaPearlOptions" required>
      <option value="" disabled selected>--Select one option--</option>
      <option id="tapiokaPearl" value="tapiokaPearl">Tapioka Pearls</option>
      <option id="brownSugarPearl" value="brownSugarPearl">Brown Sugar Pearls</option>
      <option id="grassJelly" value="grassJelly">Grass Jelly</option> 
      <option id="coffeeJelly" value="coffeeJelly">Coffee Jelly</option>   
    </select>
  `;
  // For the drop-down menu I tried different approaches and here's the progression of how I went about this.
  // I'm saving it here for learning purposes and if I wanna reuse them in the future.
  /* The first iteration gives the values of the option elements as an output which is not what I want since the text of the values is written in a way that doesn't look nice. 
  I could rewrite the values in a way that would look better such as Tapioka Pearl but I wanted to see if I could find a way to target the text of the option element.
   Eventlisteners for drop-down menu
    bobaPearlOptions.addEventListener('change', () => {
      teaPearlOption = bobaPearlOptions.value;
      showMessage(teaPearlOption, "user");
      setTimeout(() => handleBobaDrinkSize(), 1000);
    });
  */
  /* For the second iteration I tried a switch statement and while this worked and gave me the innerText of the option I wanted to see if it could be optimised and shortened.
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

  // This is the iteration I chose after some research on Stackoverflow. 
  // It is very concise and if the dropdown menu options change I don't have to update at multiple places so it's easier to maintain and scale.
  const bobaPearlOptions = document.getElementById('bobaPearlOptions');
  /* Explanation to event.target.selectedOptions[0].text; 
    (event) represents the 'change' event that occurred on the bobaPearlOptions element.
    event.target refers to the element that triggered the event, which, in this case, is the bobaPearlOptions <select> element. It's the element that the user interacted with.
    event.target.selectedOptions is a collection of all the <option> elements that are currently selected within the <select> element. 
    By adding [0] we are specifying that we're only interested in the first selected option.
    event.target.selectedOptions[0].text retrieves the text content of the first selected <option> element. 
    */
  bobaPearlOptions.addEventListener('change', (event) => {
    teaPearlOption = event.target.selectedOptions[0].text;
    price += 5; // Price increase for adding toppings.
    showMessage(`I want to add ${teaPearlOption.toLowerCase()} to my ${teaBaseOption.toLowerCase()}.`, "user");
    setTimeout(() => handleBobaDrinkSize(), 1000);
  });
};

// Function for drink size choices.
const handleBobaDrinkSize = () => {
  removeChildrenFunction();
  showMessage(`Nice! Which size do you want to choose?`, 'bot');
  // Adds two buttons
  inputWrapper.innerHTML += `
    <button id="regularSize" type="submit">Regular (500 mL)</button>
    <button id="largeSize" type="submit">Large (700 mL)</button>`;
  const regularDrinkSize = document.getElementById('regularSize');
  const largeDrinkSize = document.getElementById('largeSize');
  //Eventlisteners for buttons
  regularDrinkSize.addEventListener('click', () => {
    drinkSizeOption = drinkOption.drinkSize[0];
    totalOrderPrice = price;
    drinkSizeOrderFunction();
  });
  largeDrinkSize.addEventListener('click', () => {
    drinkSizeOption = drinkOption.drinkSize[1];
    totalOrderPrice = Math.round(price *= 1.2); // This function rounds to the nearest integer, with half-values rounding to the nearest even integer (round half to even).
    drinkSizeOrderFunction();
  });
  // Function that shows a message with the user's order and also calls the function for the next question.
  const drinkSizeOrderFunction = () => {
    showMessage(`I want a ${drinkSizeOption.toLowerCase()} size drink.`, "user");
    setTimeout(() => handleOrderConfirmation(), 1000);
  };
};

// Function to ask the user for a confirmation.
const handleOrderConfirmation = () => {
  removeChildrenFunction();
  showMessage(`Nice ${customerName}! You have chosen a ${drinkSizeOption.toLowerCase()} size ${teaBaseOption.toLowerCase()} with ${teaPearlOption.toLowerCase()}!
  That will be ${totalOrderPrice} kr.`, "bot");
  setTimeout(() => {
    showMessage(`Would you like to confirm your order?`, "bot");
  }, 1000);
  inputWrapper.innerHTML += `
    <button id="positiveOrderConfirmation" type="submit">Yes</button>
    <button id="negativeOrderConfirmation" type="submit">No</button>`;
  document.getElementById('positiveOrderConfirmation').addEventListener('click', () => {
    showMessage(`Awesome! We're whipping up your order now. Enjoy your boba!`, "bot");
    reloadPage(); // this function reloads the page after 5 seconds.
  });
  document.getElementById('negativeOrderConfirmation').addEventListener('click', () => {
    showMessage(`No Problem! Looking forward to seeing you again!`, "bot");
    reloadPage();
  });
};

/* When the website is loaded, the chatbot asks the first question with a delay of a half second but using this function:
setTimeout(functionName, timeToWaitInMilliSeconds)*/
setTimeout(greetUser, 500)
