// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send')

// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1

// Declare your functions after this comment
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./images/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./images/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}
const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)
    if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showFoodTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showRecipe (message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showRecipe(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 5000)
  }
}
// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Howdy hungry human! What's your name?`)
}

const showFoodTypes = (msg) => {
  questionNumber++
  botReply(`Nice to meet you ${msg}! What kind of recipe are you looking for?`)

  inputWrapper.innerHTML = `
  <button id="pastaBtn">Pasta</button>
  <button id="texmexBtn">TexMex</button>
  <button id="pizzaBtn">Pizza</button>
  <button id="vegBtn">Vegetarian</button>
  ` 
  document
  .getElementById('pastaBtn')
  .addEventListener('click', () => nextQuestion ('Pasta'))
  document
  .getElementById('texmexBtn')
  .addEventListener('click', () => nextQuestion ('TexMex'))
  document
  .getElementById('pizzaBtn')
  .addEventListener('click', () => nextQuestion ('Pizza'))
  document
  .getElementById('vegBtn')
  .addEventListener('click', () => nextQuestion ('Vegetarian'))
}

const showRecipe = (food) => {
  questionNumber++
  
  if (food === 'Pasta') {
    botReply(`Pasta, huh? Molto bene! Please click on the dish you'd like to try.`)
    inputWrapper.innerHTML = `
    <button id="carBtn"><a href="https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/" target="_blank">Pasta Carbonara</a></button>
    <button id="fetBtn"><a href="https://www.simplyrecipes.com/recipes/fettuccine_with_creamy_tomato_italian_sausage_sauce/" target="_blank">Pasta Fettuccine</a></button>
    <button id="penBtn"><a href="https://www.simplyrecipes.com/penne-alla-vodka-recipe-5324148/" target="_blank">Pasta Penne</a></button>
    `
  } else if (food === 'TexMex') {
    botReply(`TexMex, huh? Muy picante! Please click on the dish you'd like to try.`)
    inputWrapper.innerHTML = `
    <button id="taqBtn"><a href="https://www.simplyrecipes.com/recipes/baked_chicken_taquitos/" target="_blank">Taquitos</a></button>
    <button id="tacBtn"><a href="https://www.simplyrecipes.com/recipes/bbq_pulled_jackfruit_tacos/" target="_blank">Tacos</a></button>
    <button id="chiBtn"><a href="https://www.simplyrecipes.com/recipes/moms_chili_beans/" target="_blank">Chili Beans with Rice</a></button>
    `
  } else if (food === 'Pizza') {
    botReply(`Pizza, huh? Buon appetito! Please click on the dish you'd like to try.`)
    inputWrapper.innerHTML = `
    <button id="pepBtn"><a href="https://www.simplyrecipes.com/heart-shaped-pepperoni-pizza-recipe-6835896/" target="_blank">Heart-shaped Pepperoni Pizza</a></button>
    <button id="musBtn"><a href="https://www.simplyrecipes.com/recipes/homemade_pizza/" target="_blank">Pizza with mushrooms</a></button>
    <button id="hawBtn"><a href="https://www.simplyrecipes.com/recipes/hawaiian_pizza_with_cauliflower_crust/" target="_blank">Pizza Hawaii</a></button>
    `
// Had an else here, but then the next question kept skipping to this option
  } else if (food === 'Vegetarian'){
    botReply(`In a veggie mood? Sounds good! Please click on the dish you'd like to try.`)
    inputWrapper.innerHTML = `
    <button id="burBtn"><a href="https://www.simplyrecipes.com/black-bean-smash-burgers-recipe-6979384/" target="_blank">Veggie Burger</a></button>
    <button id="souBtn"><a href="https://www.simplyrecipes.com/sweet-and-sour-cabbage-soup-recipe-6835442/" target="_blank">Sweet-and-sour Cabbage Soup</a></button>
    <button id="nooBtn"><a href="https://www.simplyrecipes.com/recipes/thai_noodle_salad_with_peanut_sauce/" target="_blank">Thai Noodle Salad</a></button>
    `
  }
}
// Didn't succeed in calling this event
const thankYou = () => {
  botReply(`Thank you for choosing Kiss the Cook-bot! Enjoy your meal!`)
  inputWrapper.innerHTML = ``
}
// Set up your eventlisteners here}
sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})
// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000);
