// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('user-input')
let questionNumber = 0;

// Global variables, if you need any, declared here

// Functions declared here


// function nxtQuestion takes usrInput and checks for questionNumber
// based on number 

const nxtQuestion = (answer) => {
  usrInput(answer)
  if (questionNumber === 1) {
    persons(answer)
    input.value = ""
  } else if (questionNumber === 2) {
    where(answer)
    input.value = ""
  } else if (questionNumber === 3) {
    place(answer)
    input.value =""
  } else if (questionNumber === 4) {
    interest(answer)
    input.value = ""
  }
  else if (questionNumber === 5) {
    input.value = ""
  } else {
    fail(answer)
    input.value =""
    }
  }

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
    //??ska console.log(greeting) vara här??
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

// usrInput has input as parameter
//??sen fattar jag inte varför input finns som parameter på båda ställena?? 
const usrInput = (answer) => {
  showMessage(answer, 'user');
}

// Bot chat messages
// .1
const greeting = () => {
  questionNumber = 1;
  showMessage(`Hi, how many nights do you want to book?`, 'bot');
}
// .2
const persons = () => {
  questionNumber++
  showMessage(`How many are going to travel?`, 'bot');
}

// .3 with buttons instead of text input
const where = () => {
  questionNumber++
  showMessage(`What settings are you looking for?`, 'bot');

  inputWrapper.innerHTML = `
  <button id="mountain">Mountain</button>
  <button id="beach">Beach</button>
  <button id="city">City</button>
  `
  const mountain = document.getElementById('mountain')
  const beach = document.getElementById('beach')
  const city = document.getElementById('city')

  mountain.addEventListener('click', () => {
    nxtQuestion('mountain')
  })
  beach.addEventListener('click', () => {
    nxtQuestion('beach')
  })
  city.addEventListener('click', () => {
    nxtQuestion('city')
  })
}

// .4 after choosing mountain/beach/city - a list to select 
const place = (plc) => {
  questionNumber++
  showMessage(`Where do you want to go?`, 'bot');
  if (plc === 'mountain') {
    inputWrapper.innerHTML = `
    <select class="mountain" id="select">
      <option>Choose a destination</option>
      <option value="Schweiz">Schweiz</option>
      <option value="Chile">Chile</option>
      <option value="Tibet">Tibet</option>
      </select>
      `
  } else if (plc === 'beach') {
    inputWrapper.innerHTML = `
    <select id="select">
      <option>Choose a destination</option>
      <option value="Miami">Miami</option>
      <option value="Bali">Bali</option>
      <option value="Las Palmas">Las Palmas</option>
      </select>
      `
  } else if (plc === 'city') {
    inputWrapper.innerHTML = `
    <select id="select">
      <option>Choose a destination</option>
      <option value="New York">New York</option>
      <option value="Barcelona">Barcelona</option>
      <option value="Tokyo">Tokyo</option>
      </select>
      `
    }
      const select = document.getElementById('select')
      select.addEventListener('change', () => nxtQuestion(select.value))
}
  

// .5 
const interest = (plc) => {
  questionNumber++
  showMessage(`What do you want to do during your vacation?`, 'bot');
  if (plc === 'New York' || plc==='Barcelona' || plc === 'Tokyo') {
    inputWrapper.innerHTML = `
    <form id="interest-form">
    <input type="checkbox" id="culture" name="culture">
      <label for="culture">Culture</label>
    <input type="checkbox" id="food" name="food">
      <label for="food">Food</label>
    <input type="checkbox" id="shopping" name="shopping">
      <label for="shopping">Shopping</label>
    <button type="submit" class="interest-btn">Choose</button>
    </form>
      `
  } else if (plc === 'Miami' || plc==='Las Palmas' || plc === 'Bali') {
      inputWrapper.innerHTML = `
      <form id="interest-form">
      <input type="checkbox" id="water-sports" name="water-sports">
        <label for="water-sports">Water sports</label>
      <input type="checkbox" id="relax" name="relax">
        <label for="relax">Relax in the sun</label>
      <input type="checkbox" id="party" name="party">
        <label for="party">Party on the beach</label>
        <button type="submit" class="interest-btn">Choose</button>
        </form>
        `
    } else {
      inputWrapper.innerHTML = `
      <form id="interest-form">
      <input type="checkbox" id="hiking" name="hiking">
        <label for="hiking">Hiking</label>
      <input type="checkbox" id="extreme" name="extreme">
        <label for="extreme">Extreme sports</label>
      <input type="checkbox" id="spiritual" name="spiritual">
        <label for="spiritual">Spiritual journey</label>
        <button type="submit" class="interest-btn">Choose</button>
        </form>
        `
    }
    const interestForm = document.getElementById("interest-form")
    interestForm.addEventListener('submit', (event) => {
    event.preventDefault()
    nxtQuestion()
  })
}

// fail
const fail = () => {
  showMessage(`Try input again`, 'bot');
}

// Action when submitting form
form.addEventListener('submit', (event) => {
  event.preventDefault()
  nxtQuestion(input.value)
})

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1500)















