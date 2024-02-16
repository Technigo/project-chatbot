// DOM selectors 
const chat = document.getElementById('chat')
const displayMain = document.querySelector("main") //for start button purposes
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

// A MAIN FUNCTION that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  // The else if statement checks if the sender is the bot and if that's the case it inserts an HTML section inside the chat with the posted message from the bot
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
  chat.scrollTop = chat.scrollHeight // This makes the chat scroll to the last message when there are too many to be shown 
}

//FUNCTIONS START HERE////////////////////////////////////////////////////////////////////////

// 1 Start screen, hide chat section, just h1 and start button.
const startScreen = () => {  
  displayMain.style.display = "none"
  
  const startButton = document.createElement("button") //Create a button
  startButton.textContent = "START"
  startButton.classList.add ("start-button")
  
  startButton.addEventListener("click", () =>{ //Add event listener to the button
    displayMain.style.display = "flex" // Show the main element when the button es clicked
    // Remove the button from the document
    startButton.remove()
  })
  // Append the button to the document body
  document.body.appendChild(startButton)
}
startScreen()

// 2 A function to start the conversation
const greetUser = () => {
  showMessage("Wellcome to this amazing chat bot! What's your name?", "bot")
  }

setTimeout(greetUser, 1800)

// 4 Function to greet the user and ask if he would like to order
// 5 Function to handle name input
// 6 Function to handle form submission
nameForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const userName = nameInput.value
  showMessage(userName, 'user') // Show user input in the chat as a user message
  
  setTimeout(() => {
    showMessage(`Wellcome ${userName}!`, "bot")
  }, 1500)

  setTimeout(() => {
    showMessage(`Live is short ${userName}. What do you want to order?`, "bot")
  }, 2500)

  setTimeout(() => {
    nameForm.style.display = "none"
    
    const mainDishOptions = document.createElement("div")
    mainDishOptions.innerHTML = `
    <button id="pizza">Pizza</button>
    <button id="pasta">Pasta</button>
    <button id="salad">Salad</button>
    `
    inputWrapper.style.display = "flex"
    inputWrapper.style.justifyContent = "space-around" 
    inputWrapper.appendChild(mainDishOptions)
  }, 3000)
})

// Add event listeners to mainDishOption buttons
document.addEventListener('click', (event) => {
  if (event.target.matches('#pizza')) {
    handleMainDishSelection('Pizza');
  } else if (event.target.matches('#pasta')) {
    handleMainDishSelection('Pasta');
  } else if (event.target.matches('#salad')) {
    handleMainDishSelection('Salad');
  }
});

// Function to handle the user's selection of a main dish option
const handleMainDishSelection = (selectedOption) => {
  showMessage(`${selectedOption}.`, 'user');
  setTimeout(() => {
    showMessage(`A delicious choice, which ${selectedOption} do you want?`, 'bot');
  })
}
  // Remove main dish option buttons from inputWrapper
  const mainDishButtons = document.querySelectorAll('#pizza, #pasta, #salad');
  mainDishButtons.forEach(button => button.remove());    
// Generate subdish options based on the selected main dish che


const showSubDishOptions = (selectedOption) => {
let subDishOptions;

switch (selectedOption) {
  case 'Pizza':
    subDishOptions = `
      <button id="subDish1" value="Pepperoni">Pepperoni</button>
      <button id="subDish2" value="Vegetarian">Vegetarian</button>
      <button id="subDish3" value="Margherita">Margherita</button>
      <button id="subDish4" value="Hawaian">Hawaian</button>
    `;
    break;
  case 'Pasta':
    subDishOptions = `
      <button id="subDish1" value = "Spaghetti Carbonara">Spaghetti Carbonara</button>
      <button id="subDish2" value = "Penne Arrabiata">Penne Arrabiata</button>
      <button id="subDish3" value = "Fettuccine Alfredo">Fettuccine Alfredo</button>
      <button id="subDish4" value = "Lasagna">Lasagna</button>
    `;
    break;
  case 'Salad':
    subDishOptions = `
      <button id="subDish1" value = "Caesar">Caesar</button>
      <button id="subDish2" value = "Greek">Greek</button>
      <button id="subDish3" value = "Caprese">Caprese</button> 
      <button id="subDish4" value = "Cobb">Cobb</button>
    `;
    break;
  }

// Append subdish options to inputWrapper
const subDishes = document.createElement("div");
subDishes.innerHTML = subDishOptions;
inputWrapper.appendChild(subDishes);


// Add event listeners to subdish buttons
subDishButtons = subDishes.querySelectorAll('button');
subDishButtons.forEach(button => {
  button.addEventListener('click', handleSubDishSelection);
});
}

// Function to handle subdish selection
const handleSubDishSelection = (event) => {
const subDish = event.target.value;
showMessage(`Subdish chosen: ${subDish}`, 'user');
setTimeout(() => {
  showMessage(`Do you confirm your choice of ${subDish}, ${userName}?`, 'bot');
  showConfirmationButtons();
}, 1500)
};
