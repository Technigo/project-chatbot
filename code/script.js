// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendButton = document.getElementById('send-btn')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')


// Global variables, if you need any, declared here

let currentQuestionNumber = 1
let saveEvent = ""  // Saves a value outside the function

// Starts here
const greeting = () => {
  showMessage(`Hello there, Isn't it a flowery day today? What's your name?`, 'bot')
}
setTimeout(greeting, 500)

// Set up your eventlisteners here
sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  currentQuestion();
});

// Functions declared here
// DECIDES WHICH QUESTION WE ARE HANDLING
const currentQuestion = () => {
  if (currentQuestionNumber === 1) {
    handleNameInput();
  }
  else if (currentQuestionNumber === 2) {
    sizeQuestion();
  }
  else if (currentQuestionNumber === 3) {
    resetWindow()
  }
  else {
    console.log('doesntWork')
  }
  // Adds a number att current question
  currentQuestionNumber++
}

const handleNameInput = () => {
  const name = nameInput.value;
  showMessage(name, 'user')
  nameInput.value = '';
  setTimeout(() => showFlowerOptions(name), 500)

  // Function that changes layout to three buttons
  const showFlowerOptions = () => {
    showMessage(`Hi ${name} ,what kind of event do you need flowers for?`, 'bot')
    form.innerHTML =
      `<div class="btn-wrapper">
      <button id="wedding-btn" name="Wedding">WEDDING</button>
      <button id="funeral-btn" name="Funeral">FUNERAL</button>
      <button id="romantic-btn" name="Romantic" >ROMANTIC</button>
      </div>`

    const weddingBth = document.getElementById('wedding-btn')
    weddingBth.addEventListener('click', () => {
      const chosenEvent = weddingBth.name;
      saveEvent = weddingBth.name;
      showMessage(chosenEvent, 'user')
      currentQuestion()
      setTimeout(() => showMessage(`So you chosen ${chosenEvent} event. What size do you need on the bouquet?`, 'bot'), 500)

    })

    const funeralBth = document.getElementById('funeral-btn')
    funeralBth.addEventListener('click', () => {
      const chosenEvent = funeralBth.name;
      saveEvent = funeralBth.name;

      showMessage(chosenEvent, 'user')
      currentQuestion()
      setTimeout(() => showMessage(`So you chosen ${chosenEvent} event. What size do you need on the bouquet?`, 'bot'), 500)
    })
    const romanticBth = document.getElementById('romantic-btn')
    romanticBth.addEventListener('click', () => {
      const chosenEvent = romanticBth.name;
      saveEvent = romanticBth.name;
      console.log("This is", romanticBth.name)
      showMessage(chosenEvent, 'user')
      currentQuestion()
      setTimeout(() => showMessage(`So you chosen ${chosenEvent} event. What size do you need on the bouquet?`, 'bot'), 500)
    })

  }

};

const sizeQuestion = () => {
  // Function that changes layout to 2 buttons
  form.innerHTML =
    `<div class="btn-wrapper">
  <button id="medium-btn" class="size-btn" name="medium">MEDIUM</button>
  <button id="large-btn" class="size-btn"  name="large">LARGE</button>
  </div>`
  console.log(form.innerHTML)

  const mediumBtn = document.getElementById('medium-btn')
  console.log("This is the", mediumBtn)
  mediumBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenSize = mediumBtn.name;
    showMessage(chosenSize, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`So you chosen ${chosenSize} size. Thank you for your order`, 'bot'), 500)
  })

  const largeBtn = document.getElementById('large-btn')
  console.log("This is the", largeBtn)
  largeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenSize = largeBtn.name;
    console.log("This is", largeBtn.name)
    showMessage(chosenSize, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`So you chosen ${chosenSize} size. Thank you for your order`, 'bot'), 500)
  })
}
// Function that decides which picture to show the user
const resetWindow = () => {
  if (saveEvent === "Wedding") {
    form.innerHTML = `<div>
  <img class="bouquet-img" src="./assets/wedding.png" alt="">
  </div>`}
  else if (saveEvent === "Funeral") {
    form.innerHTML = `<div>
    <img class="bouquet-img" src="./assets/funeral.png" alt="">
    </div>`}
  else {
    form.innerHTML = `<div>
    <img class="bouquet-img" src="./assets/romantic.png" alt="">
    </div>`}
}



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">

        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user2.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}





// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

