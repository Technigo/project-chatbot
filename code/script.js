// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const mountain = document.getElementById('mountain')
const beach = document.getElementById('beach')
const city = document.getElementById('city')
const input = document.getElementById("user-input").value
let questionNumber = 0;
// Global variables, if you need any, declared here

// Functions declared here

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const nxtQuestion = (message) => {
    usrInput()
    if (questionNumber === 1) {
      persons()
      input.value = ""
    } else if (questionNumber === 2) {
      where()
    } else if (questionNumber === 3) {
      place(message)
    } else {
      fail()
    }
  }
})

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log();
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(greeting);
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


const where = () => {
  questionNumber++
  showMessage(`Where do you want to go?`, 'bot');

  inputWrapper.innerHTML = `
  <button id="mountain">Mountain</button>
  <button id="beach">Beach</button>
  <button id="city">City</button>`

  mountain.addEventListener('click', () => {
    nxtQuestion("mountain")
  })
  beach.addEventListener('click', () => {
    nxtQuestion("beach")
  })
  city.addEventListener('click', () => {
    nxtQuestion("city")
  })
}

const place = (plc) => {
  if (plc === "mountain") {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="Schweiz">Schweiz</option>
      <option value="Chile">Chile</option>
      <option value="Tibet">Tibet</option>`
  } else if (plc === "beach") {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="Miami">Miami</option>
      <option value="Bali">Bali</option>
      <option value="Las Palmas">Las Palmas</option>
      `
  } else if (plc === "city") {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="NewYork">New York</option>
      <option value="Barcelona">Barcelona</option>
      <option value="Tokyo">Tokyo</option>`
  }
}


// Starts here
const greeting = () => {
  questionNumber = 1;
  showMessage(`Hi, how many nights do you want to book?`, 'bot');
}
const persons = () => {
  questionNumber++
  showMessage(`How many are going to travel?`, 'bot');
}

const fail = () => {
  showMessage(`Tryinput again`, 'bot');
}

const usrInput = (input) => {
  showMessage(input, "user");
}


// Set up your eventlisteners here

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1500)











