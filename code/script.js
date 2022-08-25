// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendBtn = document.querySelector('.send-btn')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
// If you need any global variables that you can use across different functions, declare them here:


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
    console.log('Bot is the sender')
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
// greeting from Wiledbeest Burgers
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Why hello there, welcome to Wildebeest Burgers. What's your name", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

const showFoodOptions = (userName) => {
  showMessage(`Okay ${userName}, I'm gonna call you Susan. Can I take your order Susan?`, 'bot')
  inputWrapper.innerHTML = `
    <button class="burgersBtn">Burgers</button>
    <button class="veggieBtn">Veggie Burgers</button>
    <button class="saladBtn">Salad</button>
  `
  document.querySelector('.burgersBtn').addEventListener('click', () => {
  showMessage('Yes, I would like a burger', 'user')
  setTimeout(() => showMenu('burger'), 1000)
  })
  document.querySelector('.veggieBtn').addEventListener('click', () => {
  showMessage('Yes, I would like a veggie burger', 'user')
  setTimeout(() => showMenu('veggie burger'), 1000)
  })
  document.querySelector('.saladBtn').addEventListener('click', () => {
  showMessage('Yes, I would like a salad', 'user')
  setTimeout(() => showMenu('salad'), 1000)
  })
}

const showMenu = foodType => {
  showMessage(`Which ${foodType} would you like?`, 'bot')

  if (foodType === 'burger') {
  inputWrapper.innerHTML = `
  <select id="select">
    <option value selected disabled>👇 Select a burger...</option>
    <option value='"The beest" burger'>"The beest" burger</option>
    <option value="BBQ burger">BBQ burger</option>
    <option value="Fresh burger">Fresh burger</option>
  </select>
  `
  }
  if (foodType === 'veggie burger') {
  inputWrapper.innerHTML = `
  <select id="select">
    <option value selected disabled>👇 Select a veggie burger...</option>
    <option value="Ketchup burger without burger">Ketchup burger without burger</option>
    <option value="Burger with Goat Cheese and Arugula">Burger with Goat Cheese and Arugula</option>
    <option value="Totally vegetarian burger ™">Totally vegetarian burger ™</option>
  </select>
  `
  }
  if (foodType === 'salad') {
  inputWrapper.innerHTML = `
  <select id="select">
    <option value selected disabled>👇 Select a salad...</option>
    <option value='Wildebeest salad deluxe'>Wildebeest salad deluxe</option>
    <option value="Green lettuce tasty salad">Green lettuce tasty salad</option>
    <option value="Surprise salad with chicken-like meat">Surprise salad with chicken-like meat</option>
  </select>
  `
  }
}


// Set up your eventlisteners here
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const userName = nameInput.value
  showMessage(`My name is ${userName}`,'user');

  // Clears the input field
  nameInput.value = '' 

  setTimeout(() => showFoodOptions(userName), 1000)
})


// Starts the initial greeting
setTimeout(greeting, 1000);
