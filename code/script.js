// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper')
const submit = document.getElementById('submit') 
const main = document.getElementById('main')


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
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hey, you look like a moviestar today! What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆 
}

setTimeout(greetUser, 1000);




const handleNameInput = (event) => { // at submit this function will be invoked
 event.preventDefault() // prevents website refresh at submit
 const name = nameInput.value // input value will be stored in the const name
  showMessage(`My name is ${name}.`, 'user') // users answer 
  nameInput.value = '' // clearing name input setting it to an empty string


setTimeout (() => coffeeOptions(name) , 1000) 
}






//---- Second intention ----//
 const coffeeOptions = (name) => { 
  showMessage(`Hi ${name}! What are you up for today?`, 'bot') //sends second message from bot
  inputWrapper.innerHTML = // add buttons
   `<button id="espressoBtn" type="submit">Espresso</button>
    <button id="latteBtn" type="submit">Latte</button>
    <button id="cappuchinoBtn" type="submit">Cappuchino</button>`

document
  .getElementById('espressoBtn')
  .addEventListener('click', () => { 
  showMessage('I would like an espresso, please', 'user')
   extraS ('extraS')
    })

document
  .getElementById('latteBtn')
  .addEventListener('click', () => {
    showMessage('A latte would be nice!', 'user')
    extraS ('extraS')
  }) 

  document
  .getElementById('cappuchinoBtn')
  .addEventListener('click', () => {
    showMessage('Prettyplease! A cappuchino', 'user')
    extraS ('extraS')
  }) 

setTimeout (() => extraS , 1000) ;
}
//--- Third intention ---//

const extraS = (option) => {


showMessage ('Would you like some extra', 'bot')
  inputWrapper.innerHTML =
`<button id= "xtraShotBtn" type="submit">Xtra shot espresso</button>
  button id= "milkBtn" type="submit">Milk</button>
  utton id= "sugarBtn" type="submit">Sugar</button>`

  document
  .getElementById('xtraShotBtn')
  .addEventListener('click', () => {
    showMessage('Make it doubble!', 'user')
  })

document
  .getElementById('milkBtn')
  .addEventListener('click', () => {
    showMessage('Just a splash, please', 'user')
  }) 

  document
  .getElementById('sugarBtn')
  .addEventListener('click', () => {
    showMessage('So sweet of you', 'user')
  }) 


}
const youareDone = (name) => {
showMessage (` ${name} , your order is ready to pick up. Have a nice day!` , 'bot' )
}





// Set up your eventlisteners here
  
form.addEventListener('submit', handleNameInput)


 // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box

  chat.scrollTop = chat.scrollHeight; 

//Well, this is as far as I come for now i guess..... 
















// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 1000);


