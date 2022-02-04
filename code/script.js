
// DOM selectors
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')

// Chat function
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/newuser.jpg" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot2.jfif" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // Chatt scroll
  chat.scrollTop = chat.scrollHeight
}

// GREETING
const greeting = () => {
  showMessage(`Hello there ice cream lover 😉 what's your name?`, 'bot')
  
}

const handleNameQuestion = (event) => {event.preventDefault()
    const name = nameInput.value 
    showMessage(`I'm ${name} and i love ice cream! 🍧`, 'user')
    nameInput.value = ''
    setTimeout(() => showIcecreamOptions(), 1000)

}

// QUESTION: What flavour?

const showIcecreamOptions = () => {
  showMessage(`Sounds lovley 😄 what icecream would you like today? `, 'bot')
    
  inputWrapper.innerHTML=
    `<button id="vanilla">Vanilla</button>
    <button id="strawberry">Strawberry</button>`
  
  document
  .getElementById('vanilla')
  .addEventListener('click', () => {
    showMessage('I want vanilla!', 'user')
    setTimeout(() => showSizeOptions('vanilla'), 1000)
  })

  document
    .getElementById('strawberry')
    .addEventListener('click', () => {
      showMessage('I want strawberry! 🍓', 'user')
      setTimeout(() => showSizeOptions('strawberry'), 1000)
  })

}



// QUESTION: What size?

const showSizeOptions = () => {
  showMessage(`Great, what size would you like 📏`, 'bot')
  
  inputWrapper.innerHTML=
    `<button id="small" type="button">Small</button>
      <button id="large" type="button">Large</button>`

  document
    .getElementById('small')
    .addEventListener('click', () => {
      showMessage('Small 🐜', 'user')
      setTimeout( () => deliveryQuestion(), 1000)
  })

  document
    .getElementById('large')
    .addEventListener('click', () => {
      showMessage('Large 🐘', 'user')
      setTimeout( () => deliveryQuestion(), 1000) 

  })   

}

// QUESTION: Delivery?

const deliveryQuestion = () => {showMessage (`Would you like that delivered?`, 'bot')
 
  inputWrapper.innerHTML=
    `<button id="yes" type="button">Yes</button>
      <button id="no" type="button">No</button>`
  
  document
    .getElementById('yes')
    .addEventListener('click', () =>{
      showMessage(`Yes`,'user')
      setTimeout(() => deliveryChoice ('yes'), 1000)
  })
  
  document
    .getElementById('no')
    .addEventListener('click', () =>{
      showMessage(`No`,'user')
      setTimeout(() => deliveryChoice ('no'), 1000)
  })

}

// QUESTION: Closing

const deliveryChoice = (delivery) => {
  if (delivery === 'yes') {
    showMessage(`Great we'll be there in 5 min 🚀`, 'bot')
    setTimeout(1000)
  }
  else {
    showMessage(`Ok, it's ready for pickup in 1 min. HURRY! 🏃`, 'bot')
    setTimeout(1000)
  }
  inputWrapper.innerHTML=""
}

// Eventlistener
form.addEventListener('submit', handleNameQuestion)


setTimeout(greeting, 1000) 