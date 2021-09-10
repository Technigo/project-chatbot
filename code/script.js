// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
const sendBtn = document.getElementById('send')
let cakeType = ''
let pieces = ''
let date = ''
let names = ''

// Global variables, if you need any, declared here
// let currentQuestion = 0

// Functions declared here
// 14-20 taget från exempel chat bot 
// const botReply = (msg) => {
//   showMessage(msg, 'bot')
// }

// const userReply = (msg) => {
//   showMessage(msg, 'user')
// }


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(message)
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//To jump to the next question

// 51-71 taget från exempel chat bot 
//  const nextQuestion = (message) => {
//    console.log('questionNumber', questionNumber)

//    if (questionNumber === 1) {
//      userReply(message)
//      userInput.value = ''
//      setTimeout(() => showFoodTypes(message), 1000)
//    } else if (questionNumber === 2) {
//      userReply(message)
//      setTimeout(() => showCakePieses(message), 1000)
//    } else if (questionNumber === 3) {
//      userReply(message)
//      setTimeout(() => showDishSize(message), 1000)
//    } else if (questionNumber === 4) {
//      userReply(message)
//      setTimeout(() => showPrice(message), 1000)
//    } else {
//      userReply(message)
//      setTimeout(thankYou, 1000)
//    }
//  }
// const handleInput = (event) => {
//   event.preventDefault()
//   currentQuestion++

//   console.log('question = ', currentQuestion)
//   if (currentQuestion === 0) {
//     handleNameInput()
//   }else if (currentQuestion === 1) {
//     showFoodOptions()
//   }
// }

// Starts here
const greeting = () => {
   
 showMessage(`Hello and welcome to the cake factory &#x1F370 What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// tidigare testat 
// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//   const name = userInput.value 
//   console.log(name)  
//  showMessage(name, 'user')
//  userInput.value = ''
//  setTimeout(() => showFoodOptions(name), 1000)
//  });

 //från lektion 8/9 
  const handleNameInput = (event) => {
  event.preventDefault()
  names = userInput.value
  console.log (names)
  showMessage (names, 'user')
  userInput.value = ''
  setTimeout(showFoodOptions, 900);
 }

 //från lektion 8/9 
 form.addEventListener ('submit' , handleNameInput)

  const showFoodOptions = () => { 
    
    showMessage(`What type of yummy cake are you in the mood for today ${names}?`, 'bot')
    form.innerHTML = `
    <button id="princessBtn">Princess Cake</button>
    <button id="pancakeBtn">Pancake Cake</button>
    <button id="strawberryBtn">Strawberry Cake</button>
  `

  document
    .getElementById('princessBtn')
    .addEventListener('click', () => topping('Princess Cake'))
  document
    .getElementById('pancakeBtn')
    .addEventListener('click', () => topping('Pancake Cake'))
  document
    .getElementById('strawberryBtn')
    .addEventListener('click', () => topping('Strawberry Cake'))

    

    // setTimeout(() => showCakePieses(), 1000)
 } 

 const topping = (type) => {
   cakeType = type
   showMessage(type, 'user') 
   showMessage(`Yummy in my tummy! I also love ${type} What kind of topping would you like?`, 'bot') 
  

    if (type === 'Princess Cake') {
      form.innerHTML = `
      <select id="select" class="topping"> 
      <option value="" selected disabled>Pick your topping!</option>
      <option value="sugar">icing sugar</option>
      <option value="strawberries">Strawberries</option>
      <option value="pigs">marzipan pigs</option>
      </select> 
      `
    }
    else if (type === 'Pancake Cake') {
      form.innerHTML = `
        <select id="select" class= topping>
          <option value="" selected disabled>Pick your topping!</option>
          <option value="chocolate">Chocolate sauce</option>
          <option value="sprinkles">Sprinkles</option>
          <option value="cream">Whipped Cream</option>
        </select>
      `
    } else {
      form.innerHTML = `
        <select id="select" class="topping">
          <option value="" selected disabled>Pick your topping!</option>
          <option value="blueberries">Blue berries</option>
          <option value="chocolatesprinkles">Chocolate sprinkles</option>
          <option value="banana">Banana</option>
        </select>
      `
    }
    const select = document.getElementById('select')
    select.addEventListener('change', () => cakePieces(select.value))
  }
    const cakePieces = (event) => {
    event.preventDefault
    showMessage(`That´s a great choice of topping! How many pieces would you like? ${names}`, 'bot')
    form.innerHTML = `
    <button id="fourBtn">Four</button>
    <button id="sixBtn">Six</button>
    <button id="twelveBtn">Twelve</button>
  `

  document
    .getElementById('fourBtn')
    .addEventListener('click', () => delivery('four', 100))
  document
    .getElementById('sixBtn')
    .addEventListener('click', () => delivery('six', 150))
  document
    .getElementById('twelveBtn')
    .addEventListener('click', () => delivery('twelve', 200))
  }

 const delivery = (pieces, price) => {
  showMessage(pieces, 'user')
  showMessage(`You have ordered ${pieces} pieces of ${cakeType}. That will cost you ${price}$. When do you like the delivery?`, 'bot')
   form.innerHTML = `
   <label for="start" id="dateForm">Start date:</label>

  <input type="date" id="dateInput" name="trip-start">
  <button id="sendDate">send</button>
   `
   document.getElementById("dateInput").addEventListener("change", function() {
     const input = this.value;
     var dateEntered = new Date(input);
    console.log(input); //e.g. 2015-11-13
    console.log(dateEntered);
    
});
const dateform = document.getElementById(input)
dateform.addEventListener('change', () => godBye())


   const input = document.getElementById('input')
    input.addEventListener('change', () => godBye(input.value))}
 

 const godBye = () => {
  showMessage('what date would you like the delivery?', 'bot')
 
  
 }
// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 900);


           
  
