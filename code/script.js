// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper')
const sendBtn = document.getElementById('send-btn')



//------------------------------MESSAGE ON CHAT ---------//
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

// -------------------------SHOW THE FIRST MESSAGE HALLO---------------//
// Starts here
const greetUser = () => {
  showMessage("Hello there, What's your name?", 'bot')
}



//--------------------NAME AND CHOICE FOOD--------------------------//

// Set up your eventlisteners here
const handleNameInput = (event) => {
  event.preventDefault(); //prevents calling other functions that listen for submit
  const name = nameInput.value;
  showMessage(`Hej, my name is  ${ name }`, "user");
  nameInput.value = ""; // clear the text field
  setTimeout( showFoodOptions(name), 1000);
};

nameForm.addEventListener('submit', handleNameInput); // we sign up for the submit event on the form- the handleNameInput function will be called


const showFoodOptions = (name) => {
  
  showMessage(`Nice to meet you, ${name}! What kind of food would you like?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" id="pizza" type="submit">Pizza</button>
  <button class="send-btn" id="pasta" type="submit">Pasta</button>
  <button class="send-btn" id="salad" type="submit">Salad</button>
`



//--------------------CHOICE FOOD  AND CHOICE TYPE OF FOOD--------------------------//

const foodButton = inputWrapper.querySelectorAll('.send-btn') // finds all elements with class "send-btn"
foodButton.forEach (button => {
  button.addEventListener('click', (event) => {
    const selectedFood = event.target.id;
    showMessage(`I choose ${selectedFood}`, 'user');
    showMessage(`Good choice! You selected ${selectedFood}.`, 'bot');
    showTypeOfFood(selectedFood);
  });
});
};

  



//-------------show type of food ------------------------------------////
const showTypeOfFood = (choice) => {
  
  if (choice === 'pizza') {
    showMessage(`What type of pizza would you like?`, 'bot');
    inputWrapper.innerHTML = `
    <label for="food-select">Select your pizza:</label>
    <select id="food-select" class="send-select">
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
      <option value="Caesar">Caesar</option>
      <option value="Greek">Greek</option>
      <option value="Garden">Garden</option>
    </select>
    `
  } else {
    showMessage(`You need chose again`, 'bot');
  }
  const foodSelect = inputWrapper.querySelector('#food-select');
  foodSelect.addEventListener('change', (event) => {
    const selectedTypeOfFood = event.target.value;
    showMessage(` ${selectedTypeOfFood}.`, 'user');
    showMessage(`You choose : ${selectedTypeOfFood}.`, 'bot');
  });
}

//----------------- Select age ----------//

const selectAge = () => {
  switch (true) {
    case ageChoice >= 18:
      orderMessage = `You've ordered a adult size. That will be 130 SEK`;
      break;
      case ageChoice < 18:
        orderMessage = `You've ordered a child size. That will be 100 SEK`;
        break;
    default:
      orderMessage = `Invalid choice. Please specify your age'.`;
    }
}

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
  setTimeout(greetUser, 1000);