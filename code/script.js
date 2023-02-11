// Variables that point to selected DOM elements
const chat = document.getElementById('chat'); 
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');
const sendBtn = document.getElementById('send-btn');
const main = document.getElementById('main');
const inputWrapper = document.getElementById('input-wrapper');


const time = new Date().getHours();

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
    console.log("Hello YOU!");
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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage((timeOfDay(), 'What is your name?'), 'bot');
}

const timeOfDay = () => {
  if (time < 10) {
    showMessage("Good morning!", 'bot');
  } else if (time < 20) {
    showMessage('Good day', 'bot');
  } else {
    showMessage('Good evening', 'bot');
  }

}

const handleNameInput = (event) => {
  event.preventDefault()  // prevents website refresh at submit
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value

  console.log(name)
  showMessage(`${name}`, 'user') //Name the user typed in shows up in a bubble.
  
  nameInput.value = '' //resets the input value, clears the field
  
  setTimeout(() => showMessage(`Hello ${name}, what kind of drink would you like?`, 'bot'), 1000)
  setTimeout(() => hotOrCold(), 2000)
 
}


//Now I want two buttons to show på - hot and cold

const hotOrCold = (event) => {
//Adds hot and cold button
inputWrapper.innerHTML=
`<button id="hotBtn" type="submit">Hot<button>
<button id="coldBtn" type="submit">Cold<button>`
console.log("buttons");


document
.getElementById('hotBtn')
.addEventListener('click', () => {
  showMessage ('Hot', 'user')
  setTimeout(() =>showMessage('Hot drink it is!', 'bot'), 1000)
  setTimeout(() =>hotDrinksList(),3000)
})


document
.getElementById('coldBtn')
.addEventListener('click', () => {
  showMessage('Cold', 'user')
  setTimeout(() =>showMessage('Cold drink it is!', 'bot'), 1000)
  setTimeout(() =>coldDrinksList(),3000)
}) 
}


const hotDrinksList =() => {
  showMessage('Please choose your favorite hot drink in the list', 'bot')

 inputWrapper.innerHTML=`
  <select id="hotDrinksDropDown">
  <option disabled selected value="">Pick a hot drink</option>
  <option value="Coffee">Coffee</option>
  <option value="Te">Te</option>
  <option value="Cafe latte">Cafe Latte</option>
  <option value="Apple cider">Apple cider</option>
  <option value="Broth">Broth</option>
  <option value="Hot water">Hot water</option>
  <option value="Hot milk">Hot milk</option>
</select>
`
hotDrinksDropDown.addEventListener('change', (event) => {
  showMessage(event.target.value, 'user')
  console.log('sending hot drink option answer')
  placeHotOrder()
  clearThePage()
})

const placeHotOrder =()=> {
  setTimeout(() => showMessage('Excellent choice! I will now place your order. Give me one moment', 'bot'), 1000);
  setTimeout(() => showMessage('Your order is ready! Please come get it at the bar. Be careful it is HOT!', 'bot'), 6000);
}

}


const coldDrinksList =() => {
  showMessage('Please choose your favorite cold drink in the list', 'bot')

 inputWrapper.innerHTML=`
  <select id="coldDrinksDropDown">
  <option disabled selected value="">Pick a cold drink</option>
  <option value="Soda">Soda</option>
  <option value="Lemonade">Lemonade</option>
  <option value="Ice Coffee">Ica coffee</option>
  <option value="Champagne">Champagne</option>
  <option value="Beer">Beer</option>
  <option value="water">Water</option>
  <option value="Juice">Juice</option>
</select>
`

coldDrinksDropDown.addEventListener('change', (event) => {
  showMessage(event.target.value, 'user')
  console.log('sending cold drink option answer')
  placeOrder()
  clearThePage()
})

  const placeOrder =()=> {
    setTimeout(() => showMessage('Excellent choice! I will now place your order. Give me one moment', 'bot'), 1000);
    setTimeout(() => showMessage('Your order is ready! Please come get it at the bar', 'bot'), 6000);
  }

}    

form.addEventListener('submit', handleNameInput)
setTimeout(greetUser, 1500); 


const clearThePage =() =>{
  inputWrapper.innerHTML = ""
}


  


  


