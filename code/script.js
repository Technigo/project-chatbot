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
    setTimeout(() => {
      persons(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 2)) {
    setTimeout(() => {
      where(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 3)) {
    setTimeout(() => {
      place(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 4)) {
    setTimeout(() => {
      interest(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 5)) {
    setTimeout(() => {
      booking(answer)
    }, 1000)
    input.value = ""
  } else if (ifEqual(questionNumber, 6)) {
    setTimeout(() => {
      confirmation(answer)
    }, 1000)
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

    console.log();
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div> 
      </section>
    `
  } else if (sender === 'bot') {
    console.log();
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./assets/chatbot.png" alt="Bot" />
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
    showMessage(`How many are going to travel?`, 'bot');
    questionNumber++
    bookingSentence += `We're booking a ${nights} day/s trip`
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
      <div class="where-btn" id="mountain">
        <img src="./assets/mountains.png" alt="mountains"></div>
      <div class="where-btn" id="beach">
        <img src="./assets/beach.png" alt="beach"></div>
      <div class="where-btn" id="city">
        <img src="./assets/city.png" alt="city"></div>
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
        <option>Choose a destination</option>
        <option value="Schweiz">Schweiz</option>
        <option value="Chile">Chile</option>
        <option value="Tibet">Tibet</option>
      </select>
    `
  } else if (plc === 'beach') {
    inputWrapper.innerHTML = `
      <select class="select-beach" id="select">
        <option>Choose a destination</option>
        <option value="Miami">Miami</option>
        <option value="Bali">Bali</option>
        <option value="Las Palmas">Las Palmas</option>
      </select>
    `
  } else if (plc === 'city') {
    inputWrapper.innerHTML = `
      <select class="select-city" id="select">
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


// .4 
const interest = (plc) => {
  questionNumber++
  bookingSentence += ` to ${plc} for you.`
  showMessage(`What do you want to do during your vacation?`, 'bot');
  if (plc === 'New York' || plc === 'Barcelona' || plc === 'Tokyo') {
    inputWrapper.innerHTML = `
      <form id="interest-form">
        <label for="culture" class="container">Culture
        <input class="checkbox" type="checkbox"  id="culture" name="culture">
        <span class="checkmark"></span>
        </label>
        <label for="food" class="container">Food
        <input class="checkbox" type="checkbox"  id="food" name="food">
        <span class="checkmark"></span>
        </label>
        <label for="shopping" class="container">Shopping
        <input class="checkbox" type="checkbox"  id="shopping" name="shopping">
        <span class="checkmark"></span>
        </label>
        <button type="submit" class="interest-btn">Choose</button>
      </form>
    `
  } else if (plc === 'Miami' || plc === 'Las Palmas' || plc === 'Bali') {
    inputWrapper.innerHTML = `
      <form id="interest-form">
        <label for="water-sports" class="container">Water sports
        <input class="checkbox" type="checkbox"  id="water-sports" name="water sports">
        <span class="checkmark"></span>
        </label>
        <label for="relax" class="container">Relax in the sun
        <input class="checkbox" type="checkbox"  id="relax" name="relaxing">
        <span class="checkmark"></span>
        </label>
        <label for="party" class="container">Beachparty
        <input class="checkbox" type="checkbox"  id="party" name="beach parties">
        <span class="checkmark"></span>
        <button type="submit" class="interest-btn">Choose</button>
        </label>
      </form>
    `
  } else {
    inputWrapper.innerHTML = `
    <form id="interest-form">
      <label for="extreme" class="container">Extreme sports
      <input class="checkbox" type="checkbox"  id="extreme" name="extreme sports">
      <span class="checkmark"></span>
      </label>
      <label for="hiking" class="container">Hiking
      <input class="checkbox" type="checkbox"  id="hiking" name="hiking">
      <span class="checkmark"></span>
      </label>
      <label for="spiritual" class="container">Spiritual journey
      <input class="checkbox" type="checkbox"  id="spiritual" name="spiritual pursuits">
      <span class="checkmark"></span>
      </label>
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
  inputWrapper.innerHTML = `<form id="name-form">
  <input id="user-input" type="text" />
  <button id="send-btn" class="send-btn" type="submit">
    Send
  </button>
</form>`

  const bookForm = document.getElementById("name-form")
  const userForm = document.getElementById("user-input")
  bookForm.addEventListener('submit', (event) => {
    event.preventDefault()
    nxtQuestion(userForm.value)
    userForm.value=""
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

const startForm=document.getElementById("start-form")
startForm.addEventListener('submit', (event) => {
  event.preventDefault()
})

// This means the nights function will be called one second after the website is loaded.
setTimeout(nights, 1500)