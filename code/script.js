"use strict"

// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper')
const sendBtn = document.getElementById('send-btn')

//------------------------------ MESSAGE ON CHAT ------------------------------//

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

//------------------------------ SHOW THE FIRST MESSAGE HALLO ------------------------------//
const greetUser = () => {
  showMessage("Hello there, What's your name?", 'bot')
}

//------------------------------ NAME AND CHOICE FOOD ------------------------------//

const handleNameInput = (event) => {
  event.preventDefault(); // Prevents triggering other functions listening for the submit event
  const name = nameInput.value;
  
  if (name !== "" && isNaN(name)) { // Check if the name field is not empty and does not contain only numbers
    showMessage(`Hey, my name is ${name}`, "user");
    nameInput.value = ""; // Clear the text field
    setTimeout(() => {
      showFoodOptions(name);
    }, 1000);
  } else {
    showMessage(`"${name}" - this is not a name. Please enter a valid name.`, "bot"); // If the name field is empty or contains only numbers, 
  }
};


nameForm.addEventListener('submit', handleNameInput); // we sign up for the submit event on the form- the handleNameInput function will be called


const showFoodOptions = (name) => {
  
  showMessage(`Nice to meet you, ${name}! What kind of food would you like?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" id="pizza" type="submit">Pizza</button>
  <button class="send-btn" id="pasta" type="submit">Pasta</button>
  <button class="send-btn" id="salad" type="submit">Salad</button>
`
//------------------------------ CHOICE FOOD  AND CHOICE TYPE OF FOOD ------------------------------//

const foodButton = inputWrapper.querySelectorAll('.send-btn') // finds all elements with class "send-btn"
foodButton.forEach (button => {
  button.addEventListener('click', (event) => {
    const selectedFood = event.target.id;
    showMessage(`I choose ${selectedFood}`, 'user');
    showMessage(`Good choice! You selected ${selectedFood}.`, 'bot');
    setTimeout(() => {
      showTypeOfFood(selectedFood); 
    }, 1000);
  });
});
};

//------------------------------ show type of food ------------------------------//

const showTypeOfFood = (choice) => {
  
  if (choice === 'pizza') {
    showMessage(`What type of pizza would you like?`, 'bot');
    inputWrapper.innerHTML = `
    <label for="food-select">Select your pizza:</label>
    <select id="food-select" class="send-select">
    <option disabled selected value> Select a pizza  🍕  </option>
      <option value="Margherita">Margherita</option>
      <option value="Pepperoni">Pepperoni</option>
      <option value="Hawaiian">Hawaiian</option>
    </select>
    `
  } else if
    (choice === 'pasta') {
    showMessage(`What type of pasta would you like?`, 'bot');
    inputWrapper.innerHTML = `
    <label for="food-select">Select your pasta:</label>
    <select id="food-select" class="send-select">
    <option disabled selected value> Select a pasta 🍝</option>
      <option value="Spaghetti">Spaghetti</option>
      <option value="Alfredo">Alfredo</option>
      <option value="Penne">Penne</option>
    </select>
    `
  } else if
    (choice === 'salad') {
    showMessage(`What type of salad would you like?`, 'bot');
    inputWrapper.innerHTML = `
    <label for="food-select">Select your salad:</label>
    <select id="food-select" class="send-select">
    <option disabled selected value> Select a salad 🥗</option>
      <option value="Caesar">Caesar</option>
      <option value="Greek">Greek</option>
      <option value="Garden">Garden</option>
    </select>
    `
  } else {
    showMessage(`You need to choose again.`, 'bot');
  }
  const foodSelect = inputWrapper.querySelector('#food-select');
  foodSelect.addEventListener('change', (event) => {
    const selectedTypeOfFood = event.target.value;
    showMessage(` ${selectedTypeOfFood}.`, 'user');
    showMessage(`You chose : ${selectedTypeOfFood}.`, 'bot');
    setTimeout(() => {
      selectAge(selectedTypeOfFood); 
    }, 1000);
  });
}

//------------------------------ Select age ------------------------------//

const selectAge = () => {
  showMessage(`Will that be for an adult or a child?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" id="adult" type="submit">Adult</button>
  <button class="send-btn" id="child" type="submit">Child</button>
`
const ageButton = inputWrapper.querySelectorAll('.send-btn') // finds all elements with class "send-btn"
ageButton.forEach (button => {
  button.addEventListener('click', (event) => {
    const selectedAge = event.target.id;
    showMessage(` ${selectedAge}`, 'user');
    if (selectedAge === "Adult"){
      showMessage(`You have selected that this order will be for a ${selectedAge}. That will be  130 SEK`, 'bot');
    } else {
      showMessage(`You have selected that this order will be for a ${selectedAge}. That will be 100 SEK`, 'bot');
    }
    setTimeout(() => {
      confirmOrder(selectedAge);
    }, 1000);
  });
});
}

//------------------------------ CONFIRM ORDER ------------------------------//

const confirmOrder = () => {
  showMessage(`Would you like to confirm your order? (yes/no)`, 'bot')
  inputWrapper.innerHTML = `
  <button class="send-btn" id="no" type="submit">No</button>
  <button class="send-btn" id="yes" type="submit">Yes</button>
`
const confirmButton = inputWrapper.querySelectorAll('.send-btn') // finds all elements with class "send-btn"
confirmButton.forEach (button => {
  button.addEventListener('click', (event) => {
  const selectedConfirm = event.target.id;
  showMessage(` ${selectedConfirm}`, 'user');
  if (selectedConfirm === "yes"){
    showMessage(`Thank you for your order !`, 'bot');
    inputWrapper.innerHTML = ''; 
  } else {
    showMessage(`We hope to serve you again in the future.`, 'bot');
    inputWrapper.innerHTML = ''; 
  }
  });
});
}

setTimeout(greetUser, 1000);