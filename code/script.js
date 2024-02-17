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
  displayMain.style.display = "none" //hide chat
  
  const startButton = document.createElement("button") //Create a button
  startButton.textContent = "START"
  startButton.classList.add ("start-button")  

  document.body.appendChild(startButton) // Append the button to the document body
  
  startButton.addEventListener("click", () =>{ //Add event listener to the button
    displayMain.style.display = "flex" // Show the main element when the button es clicked
    startButton.remove() // Remove the button from the document
  })
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
  if (nameInput.value.trim() === '') {
    nameInput.placeholder = 'Type your name here'; // Change the placeholder to "Type your name here"
  } else { showMessage(userName, 'user') // Show user input in the chat as a user message
  
  setTimeout(() => {
    showMessage(`Wellcome ${userName}!`, "bot")
  }, 1500)

  setTimeout(() => {
    showMessage(`Live is short. What do you want to order?`, "bot")
  }, 2500)

  setTimeout(() => {
    nameForm.style.display = "none"
    inputWrapper.style.display = "flex"
    inputWrapper.style.justifyContent = "space-around" 
    
    const mainDishOptions = document.createElement("div")
    mainDishOptions.innerHTML = `
    <button id="pizza">Pizza</button>
    <button id="pasta">Pasta</button>
    <button id="salad">Salad</button>
    `
    inputWrapper.appendChild(mainDishOptions)
  }, 3000)
  }
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
  showMessage(`${selectedOption}`, 'user')

  setTimeout(() => {
  showMessage(`A delicious choice, which ${selectedOption} do you want?`, 'bot')
  // Remove main dish option buttons from inputWrapper
  const mainDishButtons = document.querySelectorAll('#pizza, #pasta, #salad')
  mainDishButtons.forEach(button => button.remove())   
  // Generate subdish options based on the selected main dish
  let subDishOptions;
  switch (selectedOption) {
    case 'Pizza':
      subDishOptions = `
        <button id="subDish1">Pepperoni</button>
        <button id="subDish2">Vegetarian</button>
        <button id="subDish3">Margherita</button>
        <button id="subDish4">Hawaiian</button>
      `;
      break;
    case 'Pasta':
      subDishOptions = `
        <button id="subDish1">Carbonara</button>
        <button id="subDish2">Arrabiata</button>
        <button id="subDish3">Alfredo</button>
        <button id="subDish4">Lasagna</button>
      `;
      break;
    case 'Salad':
      subDishOptions = `
        <button id="subDish1">Caesar</button>
        <button id="subDish2">Greek</button>
        <button id="subDish3">Caprese</button>
        <button id="subDish4">Cobb</button>
      `;
      break;
  }
  // Append subdish options to inputWrapper
  const subDishes = document.createElement("div");
  subDishes.innerHTML = subDishOptions
  inputWrapper.appendChild(subDishes)

  const subDishButtons = document.querySelectorAll('#subDish1, #subDish2, #subDish3, #subDish4');
  subDishButtons.forEach(button => {
    // Add event listeners to subdish option buttons
    button.addEventListener('click', function(event) {
      const selectedSubDish = event.target.textContent
      showMessage(`${selectedSubDish}`, 'user');
      setTimeout(() => {
      showMessage(`Which size do you want?`, "bot")    
    }, 1500)
    subDishButtons.forEach(button => button.remove())
   })
 })
}, 1500)}

/* const selectSize = document.createElement("div")
  selectSize.innerHTML = `
    <select name="cars" id="cars" placeholder="👇">
      <option value="child">Child</option>
      <option value="Medium">Medium</option>
      <option value="Adult">Adult</option>
    </select>
    <input type="submit" value="Submit">`

  inputWrapper.appendChild(selectSize) */