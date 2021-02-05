const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const value = document.getElementById("name-input").value;

let pickedCoffee 
let pickedSize
let step = 1;


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
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  
  chat.scrollTop = chat.scrollHeight
}

const greeting = () => {
  step = 1;
  showMessage(`Hello! Would you like to order coffee?`, 'bot')
}

const coffeePicker = (event) => {
  event.preventDefault()
  step ++
  const value = document.getElementById("name-input").value;
  showMessage(value, "user")
  if(value === 'yes') {
    showMessage('Please select below', 'bot');   
    inputWrapper.innerHTML = `
      <div id="buttons" class="buttons">
        <button value="coffee" id="coffeeBtn">Coffee</button>
        <button value="latte" id="latteBtn">Latte</button>
        <button value="cappuccino" id="cappBtn">Cappuccino</button>
      </div>
      `
    document
    .getElementById("coffeeBtn")
    .addEventListener('click', () => { 
      showMessage('Coffee', 'user')
      showMessage('Ok, one coffee coming up for you', 'bot')
      pickedCoffee = "coffee"
      inputWrapper.innerHTML = ""
      setTimeout(() => chooseSize("coffee"), 1000)
    })

    document
    .getElementById("latteBtn")
    .addEventListener('click', () => {
      showMessage('Latte', 'user')
      showMessage('Ok, one latte coming up for you', 'bot')
      pickedCoffee = "latte"
      inputWrapper.innerHTML = ""
      setTimeout(() => chooseSize("latte"), 1000)
    })

    document
    .getElementById("cappBtn")
    .addEventListener('click', () => {
      showMessage('Cappuccino', 'user') 
      showMessage('Ok, one cappuccino coming up for you', 'bot')
      pickedCoffee = "cappuccino"
      inputWrapper.innerHTML = ""
      setTimeout(() => chooseSize("cappuccino"), 1000)
      })
  } else if(value === 'no'){
      showMessage('Ok, see you another time!', 'bot');
  } else {
      showMessage("I'm sorry, I didn't understand your answer. Please answer 'yes' or 'no'.", 'bot');
  }
}
 
const chooseSize = () => {
  step ++
  showMessage('What size do you want?', 'bot')
  inputWrapper.innerHTML = `
    <div id="sizeButtons" class="buttons">
      <button value="short" id="shortBtn">☕ short</button>
      <button value="tall" id="tallBtn">🥛 tall</button>
    </div>
    `
  document
  .getElementById("shortBtn")
  .addEventListener('click', () => {
    showMessage('Short', 'user')
    pickedSize = 'short'
    inputWrapper.innerHTML = ""
    setTimeout(() => showPrice("short"), 1000)  
  })

  document
  .getElementById("tallBtn")
  .addEventListener('click', () => {
    showMessage('Tall', 'user')
    pickedSize = 'tall'
    inputWrapper.innerHTML = ""
    setTimeout(() => showPrice("tall)"), 1000)  
  })
}

const showPrice = () => {
  step ++
  if (pickedSize === 'short' && pickedCoffee === 'coffee') {
    showMessage("One short coffee coming up, that will be 20 SEK", 'bot')
  } else if (pickedSize === "tall" && pickedCoffee === 'coffee') {
    showMessage("One tall coffee coming up, that will be 30 SEK", 'bot')
  } else if (pickedSize === "short" && pickedCoffee === 'latte') {
    showMessage("One short latte coming up, that will be 25 SEK", 'bot')
  } else if (pickedSize === "tall" && pickedCoffee === 'latte') {
    showMessage("One tall latte coming up, that will be 35 SEK", 'bot')
  } else if (pickedSize === "short" && pickedCoffee === 'cappuccino') {
    showMessage("One short cappuccino coming up, that will be 20 SEK", 'bot')
  } else if (pickedSize === "tall" && pickedCoffee === 'cappuccino') {
    showMessage("One tall cappuccino coming up, that will be 30 SEK", 'bot')
  }
}

nameForm.addEventListener("submit", coffeePicker)

setTimeout(greeting, 1000)