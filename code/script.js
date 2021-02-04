// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('user-input')
let questionNumber = 0;
let bookingSentence = "";

const nxtQuestion = (answer) => {
  onInput(answer)
  if (ifEqual(questionNumber, 1)) {
    setTimeout(function () {
      persons(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 2)) {
    setTimeout(function () {
      where(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 3)) {
    setTimeout(function () {
      place(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 4)) {
    setTimeout(function () {
      interest(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 5)) {
    setTimeout(function () {
      booking(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 6)) {
    setTimeout(function () {
      confirmation(answer)
    }, 1000)
    input.value = ""
  } else {
    setTimeout(fail, 1000)
    input.value = ""
  }
}

const ifEqual = (qNumber, number) => {
  return qNumber === number;
}


// This function will add a chat bubble in the correct place based on who the sender is
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

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//
const onInput = (answer) => {
  showMessage(answer, 'user');
}

// Bot chat messages
// .0
const nights = () => {
  questionNumber = 1;
  showMessage(`Hi, how many nights do you want to book?`, 'bot');
}
// .1
const persons = (nights) => {
  if (Number(nights) > 0 && Number(nights) <= 28) {
    questionNumber++
    bookingSentence += `You're booking a ${nights} day/s trip`
    showMessage(`How many are going to travel?`, 'bot');
  } else {
    showMessage(`That is not a valid number, try again.`, 'bot');
  }
}

// .2 with buttons instead of text input
const where = (persons) => {
  if (Number(persons) > 0 && Number(persons) <= 14) {
    questionNumber++
    bookingSentence += ` for ${persons} person/s`
    showMessage(`What settings are you looking for?`, 'bot');

    inputWrapper.innerHTML = `
      <div class="where-btn-wrapper">
        <div class="where-btn" id="mountain"><img src="./assets/mountains.png"></div>
        <div class="where-btn" id="beach"><img src="./assets/beach.png"></div>
        <div class="where-btn" id="city"><img src="./assets/city.png"></div>
      </div>
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
  } else {
    showMessage(`That is not a valid number, try again.`, 'bot');
  }
}

// .3 after choosing mountain/beach/city - a list to select 
const place = (plc) => {
  questionNumber++
  showMessage(`Where do you want to go?`, 'bot');
  if (plc === 'mountain') {
    inputWrapper.innerHTML = `
      <select class="select-mountain" id="select">
        <option selected disabled>Choose a destination</option>
        <option value="Schweiz">Schweiz</option>
        <option value="Chile">Chile</option>
        <option value="Tibet">Tibet</option>
      </select>
    `
  } else if (plc === 'beach') {
    inputWrapper.innerHTML = `
      <select class="select-beach" id="select">
        <option selected disabled>Choose a destination</option>
        <option value="Miami">Miami</option>
        <option value="Bali">Bali</option>
        <option value="Las Palmas">Las Palmas</option>
      </select>
    `
  } else if (plc === 'city') {
    inputWrapper.innerHTML = `
      <select class="select-city" id="select">
        <option selected disabled>Choose a destination</option>
        <option value="New York">New York</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Tokyo">Tokyo</option>
      </select>
    `
  }
  const select = document.getElementById('select')
  select.addEventListener('change', () => nxtQuestion(select.value))
}


// .4 
const interest = (plc) => {
  bookingSentence += ` to ${plc}.`
  questionNumber++
  showMessage(`What do you want to do during your vacation?`, 'bot');
  if (plc === 'New York' || plc === 'Barcelona' || plc === 'Tokyo') {
    inputWrapper.innerHTML = `
      <form id="interest-form">
        <input class="checkbox" type="checkbox" id="culture" name="culture">
        <label for="culture">Culture</label>
        <input class="checkbox" type="checkbox" id="food" name="food">
        <label for="food">Food</label>
        <input class="checkbox" type="checkbox" id="shopping" name="shopping">
        <label for="shopping">Shopping</label>
        <button type="submit" class="interest-btn">Choose</button>
      </form>
      `
  } else if (plc === 'Miami' || plc === 'Las Palmas' || plc === 'Bali') {
    inputWrapper.innerHTML = `
        <form id="interest-form">
          <input class="checkbox" type="checkbox" id="water-sports" name="water sports">
          <label for="water-sports">Water sports</label>
          <input class="checkbox" type="checkbox" id="relax" name="relax">
          <label for="relax">Relax in the sun</label>
          <input class="checkbox" type="checkbox" id="party" name="party">
          <label for="party">Party on the beach</label>
          <button type="submit" class="interest-btn">Choose</button>
        </form>
        `
  } else {
    inputWrapper.innerHTML = `
        <form id="interest-form">
          <input class="checkbox" type="checkbox" id="hiking" name="hiking">
          <label for="hiking">Hiking</label>
          <input class="checkbox" class="checkbox" type="checkbox" id="extreme" name="extreme sports">
          <label for="extreme">Extreme sports</label>
          <input class="checkbox" class="checkbox" type="checkbox" id="spiritual" name="spiritual pursuits">
          <label for="spiritual">Spiritual journey</label>
          <button type="submit" class="interest-btn">Choose</button>
        </form>
        `
  }
  const interestForm = document.getElementById("interest-form")
  interestForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const checked = document.querySelectorAll(".checkbox:checked")
    let interestString;
    for (let i = 0; i < checked.length; i++) {
      if (i === 0) {
        interestString = `${checked[i].name}`
      } else {
        interestString += `/${checked[i].name}`
      }
    }
    nxtQuestion(interestString)
    interestForm.innerHTML = ""
  })
}

// .5
const booking = (interest) => {
  questionNumber++
  bookingSentence += ` Enjoy a wonderful time with lots of ${interest}! Au revoir!`
  showMessage(`Do you want to book this?`, 'bot')
  inputWrapper.innerHTML = `
  <form id="name-form">
    <input id="user-input" type="text" />
    <button id="send-btn" class="send-btn" type="submit">
      Send
    </button>
  </form>`

  const bookingForm = document.getElementById("name-form")
  const bookingInput = document.getElementById("user-input")
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault()
    nxtQuestion(bookingInput.value)
    bookingInput.value = ""
  })
}

// .6
const confirmation = (answer) => {
  if (answer.toLowerCase() === 'yes') {
    showMessage(bookingSentence, "bot")
  } else if (answer.toLowerCase() === 'no') {
    showMessage(`Thanks for your time and hope we'll meet again soon!`, 'bot')
  } else {
    showMessage(`Please answer yes or no.`, 'bot')
  }
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

// This means the nights function will be called one second after the website is loaded.
setTimeout(nights, 1500)
