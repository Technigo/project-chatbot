// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

let questionNumber = 1



// Starts here
const greeting = () => {
    questionNumber = 1
    botReply(`Hello there, What's your name?`)
}

const userReply = (msg) => {
    showMessage(msg, 'user')
}

const botReply = (msg) => {
    showMessage(msg, 'bot')
}
  

  
  
sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})
  
  // When website loaded, chatbot asks first question.
  setTimeout(greeting, 1000)

  const thankYou = () => {
    botReply(`Thank you for your order! See you soon 👋🏼`)
    inputWrapper.innerHTML = ``
  }


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

const nextQuestion = (message) => {
  /*console.log('questionNumber', questionNumber) */

  if (questionNumber === 1) {
    userReply(message)

    input.value = ''
    setTimeout(() => showFoodTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}





/*--------------- ShowFoodTypes------------*/
const showFoodTypes = (msg) => {
    questionNumber++
    botReply(
      `Nice to meet you ${msg}. What type of food would you like to order?`
    )
  
    inputWrapper.innerHTML = `
      <button id="pizzaBtn">Pizza</button>
      <button id="pastaBtn">Pasta</button>
      <button id="saladBtn">Salad</button>
    `
  
    document
      .getElementById('pizzaBtn')
      .addEventListener('click', () => nextQuestion('pizza'))
    document
      .getElementById('pastaBtn')
      .addEventListener('click', () => nextQuestion('pasta'))
    document
      .getElementById('saladBtn')
      .addEventListener('click', () => nextQuestion('salad'))
  }
  /*--------------- ShowFoodTypes------------*/
  
  /*--------------- ShowMenu-----------------*/
  const showMenu = (type) => {
    questionNumber++
  
    botReply(
      /*`Oh so you're in the mood for ${type}? Great choice. Select something from the menu!` */
      `Oh so you're in the mood for floor ${type}? Great choice. Select Room`
    ) 
  
    if (type === 'pizza') {
      inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled>👇 Select a pizza...</option>
          <option value="margerita">Margerita</option>
          <option value="vesuvio">Vesuvio</option>
          <option value="peperoni">Peperoni</option>
        </select>
      `
    } else if (type === 'pasta') {
      inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled>👇 Select a pasta...</option>
          <option value="Carbonara">Pasta Carbonara</option>
          <option value="Pomodoro">Pasta Pomodoro</option>
          <option value="Frutti di Mare">Frutti di Mare</option>
        </select>
      `
    } else {
      inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled>👇 Select a salad...</option>
          <option value="Greek Salad">Greek Salad</option>
          <option value="Caesar Salad">Caesar Salad</option>
          <option value="Chicken Salad">Chicken Salad</option>
        </select>
      `
    }
  
    const select = document.getElementById('select')
    select.addEventListener('change', () => nextQuestion(select.value))
  }
  /*--------------- ShowMenu-----------------*/