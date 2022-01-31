// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput  = document.getElementById('name-input');
const submitBtn = document.getElementById('btn');
const inputWrapper = document.getElementById('input-wrapper');
let name = 'apple';
// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('hello bot!');
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
const greeting = () => {
  showMessage(`Hello there, What is your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  // const name = nameInput.value;
   let name =  nameInput.value;
  console.log(name);
  showMessage(name, 'user')
  nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => showFoodOptions(name), 1000)
}


// Set up your eventlisteners here
submitBtn.addEventListener('click', handleNameInput);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)

const showButtons = () => {
  inputWrapper.innerHTML = `
    <button id="pizzaBtn">Pizza</button>
    <button id="pastaBtn">Pasta</button>
    <button id="saladBtn">Salad</button>
  `

  document
    .getElementById('pizzaBtn')
    .addEventListener('click', () => foodOptions('pizza'))
  document
    .getElementById('pastaBtn')
    .addEventListener('click', () => foodOptions('pasta'))
  document
    .getElementById('saladBtn')
    .addEventListener('click', () => foodOptions('salad'))
}

const showPrice = (menu) => {
  console.log(menu);
  showMessage(`${menu} will cost 100kr. Will you continue to checkout?`, 'bot');
  
  inputWrapper.innerHTML = `
  <button id="yes">Yes!</button>
  <button id="no">No</button>
 `
 const yesBtn = document.getElementById('yes');
 yesBtn.addEventListener('click', () => {showMessage(`thank you for your order!`, 'bot')});

 const noBtn= document.getElementById('no');
 noBtn.addEventListener('click', () =>{showMessage('Ooops, bye!', 'bot')});

}
const showFoodOptions = (name) => {
  showMessage(`hello, ${name} What a lovely day🍎 What do you want to eat today? `,'bot');
  //3 options in buttons
  showButtons();
}

const nextQuestion = (menu) => {
 console.log(menu);
 showMessage(`Would you like to order ${menu}?`, 'bot');

 inputWrapper.innerHTML = `
  <button id="yes">Yes!</button>
  <button id="no">No</button>
 `
 const yesBtn = document.getElementById('yes');
 yesBtn.addEventListener('click', () => {showPrice(menu)});

 const noBtn= document.getElementById('no');
 noBtn.addEventListener('click', () =>{showMessage('😭', 'bot')});
 
}

const foodOptions = (menu) => {
  if(menu === 'pizza') {
    showMessage('which pizza do you want?', 'bot');
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="Hawaii">Hawaii</option>
      <option value="Neapolitan">Neapolitan</option>
      <option value="Margarita">Margarita</option>
      </select>`;
  }else if(menu === 'pasta'){
    showMessage('which pasta do you want?', 'bot');
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="Ravioli">Ravioli pasta</option>
      <option value="Carbonara">Carbonara pasata</option>
      <option value="Spaghetti">Spaghetti</option>
      </select>`;
  }else{
    showMessage('which salad do you want?', 'bot');
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="Broccoli">Broccoli salad</option>
      <option value="Ceaser">Ceaser salad</option>
      <option value="leafgreen">Leafgreen salad</option>
      </select>`;
  }
  const select = document.getElementById('select')
select.addEventListener('change', () => nextQuestion(select.value)) 
}

