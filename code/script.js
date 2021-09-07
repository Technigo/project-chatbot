// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
const sendBtn = document.getElementById('send')



let questionNumber = 1


// Global variables, if you need any, declared here

// Functions declared here
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}


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
 const nextQuestion = (message) => {
   console.log('questionNumber', questionNumber)

   if (questionNumber === 1) {
     userReply(message)
     userInput.value = ''
     setTimeout(() => showFoodTypes(message), 1000)
   } else if (questionNumber === 2) {
     userReply(message)
     setTimeout(() => showCakePieses(message), 1000)
   } else if (questionNumber === 3) {
     userReply(message)
     setTimeout(() => showDishSize(message), 1000)
   } else if (questionNumber === 4) {
     userReply(message)
     setTimeout(() => showPrice(message), 1000)
   } else {
     userReply(message)
     setTimeout(thankYou, 1000)
   }
 }

// Starts here
const greeting = () => {
  questionNumber = 1 
 showMessage(`Hello and welcome to the cake factory &#x1F370 What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = userInput.value 
  console.log(name)  
 showMessage(name, 'user')
 userInput.value = ''
 setTimeout(() => showFoodOptions(name), 1000)
 });

 const showFoodOptions = (name) => {
   questionNumber++ 
   showMessage(`Wish cake are you upp to mode for today ${name}`, 'bot')
   form.innerHTML = `
   <button id="princessBtn">Princess Cake</button>
   <button id="pancakeBtn">Pancake Cake</button>
   <button id="strawberryBtn">Strawberry Cake</button>
 `

 document
   .getElementById('princessBtn')
   .addEventListener('click', () => nextQuestion('princess Cake'))
 document
   .getElementById('pancakeBtn')
   .addEventListener('click', () => nextQuestion('pancake Cake'))
 document
   .getElementById('strawberryBtn')
   .addEventListener('click', () => nextQuestion('strawberry Cake'))
   setTimeout(() => showCakePieses(type), 1000)
} 

const showCakePieses = (type) => {
  questionNumber++ 
  showMessage(`Yummy in my tummy! I also love ${type} How many pieces would you like to have?`, 'bot')
  form.innerHTML = `
     <select id="select"> 
     <option value="" selected disabled>👇 Select a pizza...</option>
     <option value="margerita">Margerita</option>
     <option value="vesuvio">Vesuvio</option>
     <option value="peperoni">Peperoni</option>
     </select> `
  // if (type === 'princess Cake') {
  //   form.innerHTML = `
  //   <select id="select"> 
  //   <option value="" selected disabled>👇 Select a pizza...</option>
  //   <option value="margerita">Margerita</option>
  //   <option value="vesuvio">Vesuvio</option>
  //   <option value="peperoni">Peperoni</option>
  //   </select> `
  // }
  // else if (type === 'pancake Cake') {
  //   form.innerHTML = `
  //     <select id="select">
  //       <option value="" selected disabled>👇 Select a pasta...</option>
  //       <option value="Carbonara">Pasta Carbonara</option>
  //       <option value="Pomodoro">Pasta Pomodoro</option>
  //       <option value="Frutti di Mare">Frutti di Mare</option>
  //     </select>
  //   `
  // } else {
  //   form.innerHTML = `
  //     <select id="select">
  //       <option value="" selected disabled>👇 Select a salad...</option>
  //       <option value="Greek Salad">Greek Salad</option>
  //       <option value="Caesar Salad">Caesar Salad</option>
  //       <option value="Chicken Salad">Chicken Salad</option>
  //     </select>
  //   `
  // }

  const select = document.getElementById('select')
  select.addEventListener('click', () => nextQuestion(select.value))
}


 

  

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 900);


           


  