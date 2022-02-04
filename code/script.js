// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendButton = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')
const userInput = document.getElementById('user-input')
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

  showMessage(`Hello Skiier, what's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 900)

const reply = (input) => {
  showMessage(input, 'user')
}


// Set up your eventlisteners here
sendButton.addEventListener('click', () => {
  reply(userInput.value)
  setTimeout(skiStyle, 900)
  })

// Question 1: 

const skiStyle = ()  => {
  showMessage(`Thank you for your interest ${userInput.value}. What style of ski would you like to try?`, 'bot') 
    inputWrapper.innerHTML = `
      <button id="downhill-btn"> Downhill </button>    
      <button id="crosscountry-btn"> Crosscountry </button>`

      document
      .getElementById('downhill-btn')
      .addEventListener('click', () => {
        showMessage('Downhill', 'user')
        setTimeout(() => downhillLevel('downhill-btn'), 900)
      })

      document
      .getElementById('crosscountry-btn')
      .addEventListener('click', () => {
        showMessage('Cross-country', 'user')
        setTimeout(() => downhillLevel('crosscountry-btn'), 900)
      })
  }


  // Question 2:

const downhillLevel = ()  => {
  showMessage(`Great choice! Now time to choose your level. Have you skiied before?`, 'bot')
      inputWrapper.innerHTML = `
      <button id="yes-btn"> Yes </button>    
      <button id="no-btn"> No </button>`

      document
      .getElementById('yes-btn')
      .addEventListener('click', () => {
        showMessage('Yes', 'user')
        setTimeout(() => downhillLevel('downhill-btn'), 900)
      })
}
// const downHill = document.getElementById('downhill')
// // const crossCountry = document.getElementById('crosscountry')
// downHill.onclick = () => {
//     showMessage(`Great choice! Now time to choose your level`, 'bot')
//     inputWrapper.innerHTML = `
//     <button id="lv1"> Level 1 (you have never skiied before) </button>    
//     <button id="lv2"> Level 2: (you have skiied before) </button>`
//   }





//       showMessage(`Great!`, 'bot')
//         }
// return showMessage (`Sorry ${userInput.value}! We recommend checking out other schools that may suit your need better!`, 'bot');
// }


// inputWrapper.innerHTML = `
// <button id= "studyBtn"> Study </button>    
// <button id= "partyBtn"> Party </button>


// prevent page refresh

