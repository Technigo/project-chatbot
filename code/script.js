// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
let option = '';


// Global variables, if you need any, declared here



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
    console.log(message);

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

// Bot starts here - first interaction - asks question and give 2 alternatives
const greeting = () => {
  showMessage(`- Hello there! Welcome to the Java Place. What kind of coffee are you up for?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="hotBtn">Hot</button>
    <button id="coldBtn">Cold</button>
  `

// Bot gives 2 alternatives via buttons - hot or cold coffee
  document.getElementById('hotBtn').addEventListener('click', () => handleCoffeeKindInput('Hot'));
  document.getElementById('coldBtn').addEventListener('click', () => handleCoffeeKindInput('Cold'));

}

// User answer after click on button - hot or cold coffee
const handleCoffeeKindInput = (coffeeKind) => {
showMessage(coffeeKind, 'user')


setTimeout(() => showCoffeeOptions(coffeeKind), 1000)

}

// Bot shows list of hot alternatives. I named the value and name the same way to make the answer from bot match the list answer (row 70,71,72). 
// Used if condition - if user chose HOT the showMessage will be different from COLD . 
const showCoffeeOptions = (coffeeKind) => {
  if (coffeeKind === 'Hot') {
    showMessage('Cold out there? Chose your hot beverage down below!', 'bot');
    inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled> Chose your hot coffee</option>
    <option value="Cappuccino">Cappuccino</option>
    <option value="Caffé Latte">Caffé Latte</option>
    <option value="Americano">Americano</option>
  </select>
`
// Bot shows list of cold alternatives. I named the value and name the same way to make the answer from bot match the list answer. 
//Used else if condition - if user chose COLD the showMessage will be differenT from HOT. 
  }
  else if (coffeeKind === 'Cold') {
    showMessage('Hot out there? Chose your cold beverage down below!', 'bot');
    inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled> Chose your cold coffee</option>
    <option value="Iced Americano">Iced Americano</option>
    <option value="Iced Espresso">Iced Espresso</option>
    <option value="Iced Caffé Latte">Iced Caffé Latte</option>
  </select>
`

// User makes selection
  }
  const coffeeKindSelect = document.getElementById('select');
  coffeeKindSelect.addEventListener('change', () => {
    showMessage(coffeeKindSelect.value, 'user');
    
    setTimeout(() => handleCoffeeOptionInput(coffeeKindSelect.value), 1000)
  });
}


// Bot answer based up on selection I added template literal: `${coffeeOption} so the bot begin answer with the option that user choosed.
// Added 3 buttons of size alternatives (108,109,110). Same code as for hot and cold button in the start.
const handleCoffeeOptionInput = (coffeeOption) => {
  option = coffeeOption;
  console.log(coffeeOption);
  showMessage(`${coffeeOption}, excellent choice! What size do you want?`, 'bot');
  inputWrapper.innerHTML = `
    <button id="smallBtn">Small</button>
    <button id="mediumBtn">Medium</button>
    <button id="largeBtn">Large</button>
  `
   //When user click on size button it triggers answer from user: small, medium or large
  document.getElementById('smallBtn').addEventListener('click', () => {
    showMessage('Small', 'user');
    setTimeout(() => handleCoffeeSizeInput ('Small'), 1000);
  });
  
  document.getElementById('mediumBtn').addEventListener('click', () => {
    showMessage('Medium', 'user');
    setTimeout(() => handleCoffeeSizeInput ('Medium'), 1000);
  });
 
  document.getElementById('largeBtn').addEventListener('click', () =>{
    showMessage('Large', 'user');
    setTimeout(() => handleCoffeeSizeInput ('Large'), 1000);
  }); 
}

   //When user click on size button it triggers answer from user: small, medium or large
const handleCoffeeSizeInput = (coffeeSize) => {  
  showMessage(`A ${coffeeSize} ${option} coming up. Are you satisfied with your order?`, 'bot');
  inputWrapper.innerHTML =
    `<input id="confirm-input" type="text" />
  <button class="send-btn" id="send" type="submit">
    Send
  </button>`

  // document.getElementById('send').addEventListener('click', () => nextQuestion(input.value))

  // document.getElementById('confirm-input').addEventListener('keypress', (event) => {
  //   if (event.key === 'Enter') nextQuestion(input.value)
  // })

}





setTimeout(greeting, 1000)
