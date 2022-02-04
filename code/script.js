// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const inputValue = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')


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
        <img src="assets/shopping.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/papercandy.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>`
  } 



  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// ------- GREETING --------//
const greeting = () => {
  showMessage(`Hello Sweetie, who's there?`, 'bot')
}

const textInput = (event) => {
  event.preventDefault()
  const name = inputValue.value  
  showMessage(name, 'user') 
  inputValue.value = '' 

  if (name === ""){
    setTimeout(() => showMessage(`Please, give me your name.`, 'bot'), 1000)
  }
  else{
    setTimeout(() => showMessage(`Hey ${name}!`, 'bot'), 1000)
    setTimeout(() => options(),2000)
  }
}

//----- FIRST QUESTION WHAT DO YOU WANT TO ORDER -------//

const options = () => {
showMessage(`What do you want to order?`, 'bot')

inputWrapper.innerHTML = `
<button id="candyButton">Candy 🍬</button>
<button id="icecreamButton">Ice cream 🍦</button>
<button id="popcornButton">Popcorn 🍿</button>
`
document.getElementById("candyButton").addEventListener("click", () =>{
  showMessage(`Candy, please!`, 'user')
  setTimeout(() => showMessage(`Okey, candy it is! How much you would like?`, 'bot'),1000)
  setTimeout(() => amount (), 2000)  
})

document.getElementById("icecreamButton").addEventListener("click", () =>{
  showMessage(`Ice cream, please!`, 'user')
  setTimeout(() => showMessage(`Okey,ice cream it is! How much you would like?`, 'bot'),1000)
  setTimeout(() => amount (), 2000)
})

document.getElementById("popcornButton").addEventListener("click", () =>{
  showMessage(`Popcorn, please!`, 'user')
  setTimeout(() => showMessage(`Okey,popcorn it is! How much you would like?`, 'bot'),1000)
  setTimeout(() => amount (),)
})

}

//------HOW MUCH YOU WANT ORDER-------//

const amount = () => {

  inputWrapper.innerHTML = `
<button id="oneBox"> One Box </button>
<button id="threeBox"> Three Boxes </button>
<button id="fiveBox"> Five Boxes </button>
`
document.getElementById("oneBox").addEventListener("click", () =>{
  showMessage(`One box is enough for me, thanks!`, 'user')
  setTimeout(() => showMessage(`Oh just one box!`, 'bot'), 1000)  
  setTimeout(() => showMessage(`Would you like to pay with card or swish?`, 'bot'), 3000)
  setTimeout(() => paymentMethods (), 3000)
})

document.getElementById("threeBox").addEventListener("click", () =>{
  showMessage(`Three boxes, thanks!`, 'user')
  setTimeout(() => showMessage(`Oh three boxes, someone is going to have a good day!`, 'bot'), 1000)
  setTimeout(() => showMessage(`Would you like to pay with card or swish?`, 'bot'), 3000)
  setTimeout(() => paymentMethods (), 3000)
})

document.getElementById("fiveBox").addEventListener("click", () =>{
  showMessage(`Maybe five boxes is enough for me, thanks!`, 'user')
  setTimeout(() => showMessage(`Ou mama, someone is gonna have a big party!`, 'bot'), 1000)
  setTimeout(() => showMessage(`Would you like to pay with card or swish?`, 'bot'), 3000)
  setTimeout(() => paymentMethods (), 3000)
})

}

//--------PAYMENT METHODS---------//

const paymentMethods = () => {

  inputWrapper.innerHTML = `
<button id='card'> Card </button>
<button id="swish"> Swish </button>
`
document.getElementById('card').addEventListener("click", () =>{ 
  setTimeout(() => paymentChoice ('card'), 1000)
})

document.getElementById("swish").addEventListener("click", () =>{
  setTimeout(() => paymentChoice (), 1000)
})

}

const paymentChoice = (paymethod) => {
  if (paymethod === 'card') {
   showMessage(`Card`, 'user')
   setTimeout(() => cardPicture (), 1000)
  } else  {
    showMessage(`Swish`, 'user')
   setTimeout (() => swishPicture (), 1000)
   
  }
 }

 //--------CARD PICTURES AND SOUNDEFFECT-------//

 const cardPicture = () => {
  chat.innerHTML += `
  <section class="bot-msg">
    <img src="assets/papercandy.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <img src="https://www.pngkit.com/png/detail/579-5792480_credit-card-emoji-png.png" id="moneyPicture" alt="money"/>
    </div>
  </section>`
  const audio = new Audio('./assets/cashregister.mp3')
  setTimeout(() => audio.play(), 500)
  setTimeout (() => showMessage(`You can pay with card when the sweets arrives to you!`, 'bot'), 2000)
  setTimeout (() => thankYou (), 3000)
 }

 const swishPicture = () => {
  chat.innerHTML += `
  <section class="bot-msg">
    <img src="assets/papercandy.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <img src="https://www.kindpng.com/picc/m/133-1331851_cell-phone-emoji-png-transparent-png.png" id="moneyPicture" alt="money"/>
    </div>
  </section>`
  const audio = new Audio('./assets/cashregister.mp3')
  setTimeout(() => audio.play(), 500)
  setTimeout (() => showMessage(`Please swish to the number "12345"`, 'bot'), 2000)
  setTimeout (() => thankYou (), 3000)
 }

//-------THANK YOU MESSAGE------//

 const thankYou = () => {
 chat.innerHTML += `
 <body class="thank-you">
   <h1> Thank you for your order! </h1>
  </body>`
  inputWrapper.innerHTML = `
  <form id='name-form'>
  </form>
  `
}

//-------ADD EVENT LISTENER------//

nameForm.addEventListener('submit', textInput)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
