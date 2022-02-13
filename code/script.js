// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendButton = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')
let userInput = document.getElementById('user-input')
const inputWrapper = document.getElementById('input-wrapper')

nameForm.addEventListener('submit', (event) => {
  event.preventDefault()
})

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/ski.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("Hello!")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/snowman.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {

  showMessage(`Hello Skier, what's your name?`, 'bot')
}

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 900)

const reply = (input) => {
  showMessage(input, 'user')
}


let flag = 'name'
sendButton.addEventListener('click', () => {
  if (flag === 'name') {
    reply(userInput.value)
    showMessage(`Thank you for your interest, ${userInput.value}. May I know your age?`, 'bot')
    flag = 'age'
    userInput.value = ''
  }
  else if (flag = 'age') {
    reply(userInput.value)
    if (isNumeric(userInput.value) === false) {
      showMessage(`Sorry, please only add digits.`, 'bot')
      showMessage(` May I know your age?`, 'bot')
      userInput.value = ''
    } else {
      if (userInput.value <= 25) {
        showMessage(`Sorry, we only offer courses for adultier adults who are older than 25 years old. :)`, 'bot')
        setTimeout(() => location.reload(), 1000)
        return false;
      } else {
        return setTimeout(skiStyle, 900)
      }
    }
  }
})

function isNumeric(val) {
  return /^-?\d+$/.test(val);
}

// // Question 1: Select ski track 
const skiStyle = ()  => {
  showMessage(`What type of skiing would you like to try?`, 'bot') 
    inputWrapper.innerHTML = `
      <button id="downhill-btn"> Downhill </button>    
      <button id="crosscountry-btn"> Cross-country </button>
      `

      document
      .getElementById('downhill-btn')
      .addEventListener('click', () => {
        showMessage('Downhill', 'user')
        downHillTrack()
      })

      document
      .getElementById('crosscountry-btn')
      .addEventListener('click', () => {
        showMessage('Cross-country', 'user')
        crossCountryTrack()
      })
      }

// Question 2: this will categorize users into 2 levels based on their answers (beginner (bgn) and intermediate (int))

const downHillTrack = ()  => {
  showMessage('Great choice! Now time to choose your level. Have you tried downhill skiing before?', 'bot')
        inputWrapper.innerHTML = `
        <button id="dh-yes-btn"> Yes </button>    
        <button id="dh-no-btn"> No </button>
        `
        document
        .getElementById('dh-yes-btn')
        .addEventListener('click', () => {
          showMessage('Yes', 'user')
          downHillTrackNext()
        })

        document
        .getElementById('dh-no-btn')
        .addEventListener('click', () => {
          showMessage('No', 'user')
          downHillTrackBgn()
        })
}

const crossCountryTrack = ()  => {
  showMessage('Great choice! Now time to choose your level. Have you tried cross-country skiing before?', 'bot')
        inputWrapper.innerHTML = `
        <button id="cc-yes-btn"> Yes </button>    
        <button id="cc-no-btn"> No </button>
        `
        document
      .getElementById('cc-yes-btn')
      .addEventListener('click', () => {
        showMessage('Yes', 'user')
        crossCountryTrackNext()
      })

      document
      .getElementById('cc-no-btn')
      .addEventListener('click', () => {
        showMessage('No', 'user')
        crossCountryTrackBgn()
      })
}
const downHillTrackNext = ()  => {
  showMessage('When was the last time you have skiied?', 'bot')
        inputWrapper.innerHTML = `
        <button id="dh-more-than-5"> More than 5 years </button>    
        <button id="dh-less-than-5"> Less than 5 years </button>
        `
        document
        .getElementById('dh-more-than-5')
        .addEventListener('click', () => {
          showMessage('More than 5 years', 'user')
          downHillTrackBgn()
        })

        document
        .getElementById('dh-less-than-5')
        .addEventListener('click', () => {
          showMessage('Less than 5 years', 'user')
          downHillTrackInt()
        })
}

const crossCountryTrackNext = ()  => {
  showMessage('When was the last time you have skiied?', 'bot')
        inputWrapper.innerHTML = `
        <button id="cc-more-than-5"> More than 5 years </button>    
        <button id="cc-less-than-5"> Less than 5 years </button>
        `
        document
        .getElementById('cc-more-than-5')
        .addEventListener('click', () => {
          showMessage('More than 5 years', 'user')
          crossCountryTrackBgn()
        })

        document
        .getElementById('cc-less-than-5')
        .addEventListener('click', () => {
          showMessage('Less than 5 years', 'user')
          crossCountryTrackInt()
        })
}

// The suitable course for the user

const downHillTrackBgn = ()  => {
  showMessage('We recommend checking out our "Fearless Downhill Beginner course"', 'bot')
  inputWrapper.innerHTML = `
  <p> Read about this course <a href="#">here</a></p>
  `
}
const downHillTrackInt = ()  => {
  showMessage('We recommend checking out our "Rusty Downhill Skier course"', 'bot')
  inputWrapper.innerHTML = `
  <p> Read about this course <a href="#">here</a></p>
  `
}
const crossCountryTrackBgn = ()  => {
  showMessage('We recommend checking out our "Fearless Cross-country Beginner course"', 'bot')
  inputWrapper.innerHTML = `
  <p> Read about this course <a href="#">here</a></p>
  `
}
const crossCountryTrackInt = ()  => {
  showMessage('We recommend checking out our "Rusty Cross-country Skier course"', 'bot')
  inputWrapper.innerHTML = `
  <p> Read about this course <a href="#">here</a></p>
  `
}