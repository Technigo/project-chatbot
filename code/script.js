// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('user-input')
let questionNumber = 0;
let bookingSentence = "";


const nxtQuestion = (response) => {
  handleResponse(response)
  switch (questionNumber) {
    case 1:
      setTimeout(() => {
        persons(response)
      }, 1000)
      input.value = ""
      break;
    case 2:
      setTimeout(() => {
        where(response)
      }, 1000)
      input.value = ""
      break;
    case 3:
      setTimeout(() => {
        place(response)
      }, 1000)
      input.value = ""
      break;
    case 4:
      setTimeout(() => {
        interest(response)
      }, 1000)
      input.value = ""
      break;
    case 5:
      setTimeout(() => {
        booking(response)
      }, 1000)
      input.value = ""
      break;
    case 6:
      setTimeout(() => {
        confirmation(response)
      }, 1000)
      break;
  }
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div> 
      </section>
    `
  } else if (sender === 'bot') {
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

//input from user
const handleResponse = (response) => {
  showMessage(response, 'user');
}

// Bot chat messages
// .0
const nights = (fName) => {
  questionNumber = 1;
  showMessage(`Hi ${fName}, how many nights do you want to book?`, 'bot');
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
          <img src="./assets/mountains.png" alt="mountains">
        </div>
        <div class="where-btn" id="beach">
          <img src="./assets/beach.png" alt="beach">
        </div>
        <div class="where-btn" id="city">
          <img src="./assets/city.png" alt="city">
        </div>      
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
const place = (place) => {
  questionNumber++
  showMessage(`Where do you want to go?`, 'bot');
  if (place === 'mountain') {
    inputWrapper.innerHTML = `
      <select class="select-mountain" id="select">
        <option selected disabled>Choose a destination</option>
        <option value="Schweiz">Schweiz</option>
        <option value="Chile">Chile</option>
        <option value="Tibet">Tibet</option>
      </select>
    `
  } else if (place === 'beach') {
    inputWrapper.innerHTML = `
      <select class="select-beach" id="select">
        <option selected disabled>Choose a destination</option>
        <option value="Miami">Miami</option>
        <option value="Bali">Bali</option>
        <option value="Las Palmas">Las Palmas</option>
      </select>
    `
  } else if (place === 'city') {
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


// .4 checkboxes where you can choose interests
const interest = (place) => {
  bookingSentence += ` to ${place}.`
  questionNumber++
  showMessage(`What do you want to do during your vacation?`, 'bot');
  if (place === 'New York' || place === 'Barcelona' || place === 'Tokyo') {
    inputWrapper.innerHTML = `
      <form id="interest-form">
        <div class="interest-wrapper">
          <label for="culture" class="interest-container">Culture
            <input class="checkbox" type="checkbox"  id="culture" name="culture" value="culture">
            <span class="checkmark"></span>
          </label>
          <label for="food" class="interest-container">Food
            <input class="checkbox" type="checkbox"  id="food" name="food" value="food">
            <span class="checkmark"></span>
          </label>
          <label for="shopping" class="interest-container">Shopping
            <input class="checkbox" type="checkbox"  id="shopping" name="shopping" value="shopping">
            <span class="checkmark"></span>
          </label>
        <div>
        <button type="submit" class="interest-btn">Choose</button>
      </form>
    `
  } else if (place === 'Miami' || place === 'Las Palmas' || place === 'Bali') {
    inputWrapper.innerHTML = `
      <form id="interest-form">
        <div class="interest-wrapper">
          <label for="wsports" class="interest-container">Water sports
            <input class="checkbox" type="checkbox"  id="wsports" name="wports" value="water sports">
            <span class="checkmark"></span>
          </label>
          <label for="relax" class="interest-container">Relax in the sun
            <input class="checkbox" type="checkbox"  id="relax" name="relax" value="relaxing">
            <span class="checkmark"></span>
          </label>
          <label for="party" class="interest-container">Beachparty
            <input class="checkbox" type="checkbox"  id="party" name="party" value="beach parties">
            <span class="checkmark"></span>
          </label>
          <button type="submit" class="interest-btn">Choose</button>
        <div>
      </form>
    `
  } else {
    inputWrapper.innerHTML = `
      <form id="interest-form">
        <div class="interest-wrapper">
          <label for="extreme" class="interest-container">Extreme sports
            <input class="checkbox" type="checkbox" id="extreme" name="extreme" value="extreme sports">
            <span class="checkmark"></span>
          </label>
          <label for="hiking" class="interest-container">Hiking
            <input class="checkbox" type="checkbox"  id="hiking" name="hiking" value="hiking">
            <span class="checkmark"></span>
          </label>
          <label for="spiritual" class="interest-container">Spiritual journey
            <input class="checkbox" type="checkbox"  id="spiritual" name="spiritual" value="spiritual pursuits">
            <span class="checkmark"></span>
          </label>
        <div>
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
        interestString = `${checked[i].value}`
      } else {
        interestString += `/${checked[i].value}`
      }
    }
    nxtQuestion(interestString)
    interestForm.innerHTML = ""
  })
}

// .5 
const booking = (interest) => {
  questionNumber++
  bookingSentence += ` Enjoy a wonderful time with lots of ${interest}! Info will be sent to <div class="email">${sessionStorage.getItem("email")}</div>. Au revoir!`
  showMessage(`Do you want to book this?`, 'bot')
  textInput()
}

const textInput = () => {
  inputWrapper.innerHTML = `
    <form id="name-form">
      <input id="user-input" type="text" />
      <button id="send-btn" class="send-btn" type="submit">
        Send
      </button>
    </form>`

  const bookingForm = document.getElementById("name-form")
  const handleBooking = document.getElementById("user-input")
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault()
    nxtQuestion(handleBooking.value)
    handleBooking.value = ""
  })
}

// .6 Asks if user wants to book and if yes writes out a sentence with information about the trip
const confirmation = (answer) => {
  if (answer.toLowerCase() === 'yes') {
    showMessage(bookingSentence, "bot")
    setTimeout(() => {
      window.open("./index.html")
    }, 8000)
  } else if (answer.toLowerCase() === 'no') {
    showMessage(`Thanks for your time and hope we'll meet again soon!`, 'bot')
    setTimeout(() => {
      window.open("./index.html")
    }, 3000)
  } else {
    showMessage(`Please response yes or no.`, 'bot')
  }
}

// if the button has the id "start-btn" (index site) then open the chatbot on submit and stores the name/email from the index page form
if (document.getElementById("start-btn")) {
  const startForm = document.getElementById("start-form")
  const fName = document.getElementById("fname")
  const eMail = document.getElementById("email")
  startForm.addEventListener('submit', (event) => {
    sessionStorage.setItem("name", fName.value);
    sessionStorage.setItem("email", eMail.value);
    event.preventDefault()
    window.open("./chatbot.html")
  })
}

//eventlistener for when the submit in the chatbot  clicked
form.addEventListener('submit', (event) => {
  event.preventDefault()
  nxtQuestion(input.value)
})

// This means the nights function will be called one second after the website is loaded 
setTimeout(() => {
  nights(sessionStorage.getItem("name"))
}, 1500)