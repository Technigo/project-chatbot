// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')



// Global variables, if you need any, declared here
let currentQuestion = 1 


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('user is sending') 

    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/fox.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('bot is sending') 

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/barneywine.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// all the bot questions

const greeting = () => {
    currentQuestion = 1 
  showMessage('Waddup fellow BROgrammer! What\'s yo name?','bot')    
  console.log('bot')
}
const complimentQuestion = () => {
 currentQuestion++
 setTimeout(() => showMessage('Do you want a compliment on you looks or personality?', 'bot'), 1000)     //something about beer
  
 inputWrapper.innerHTML = `
 <button id="personality">Personality</button>
 <button id="looks">Looks</button>
 `
 document.getElementById('personality').addEventListener('click', () => {
     showMessage('Personality', 'user')
     setTimeout(() => showMessage('Not the superficial type i see. Well.. You’re more fun than a ball pit filled with candy. 🍬 (And seriously, what could be more fun than that?)', 'bot'), 1000)
     //setTimeout(() => showMessage('', 'bot'), 2000)
     handleInput()
 })
 document.getElementById('looks').addEventListener('click', () => {
     showMessage('Looks', 'user')
    setTimeout(() => showMessage('So you\'re a little superficial, are ya? Well aren\'t we all?', 'bot'), 1000)
    setTimeout(() => showMessage('You have a good head on your shoulders, and that color is perfect on you 😍', 'bot'), 1000)
    handleInput()
 })
}

const anotherCompliment = () => {
    currentQuestion++
  setTimeout(() => showMessage('Would you like another random compliment?', 'bot'), 3000) 
  console.log('another compliment?')  
  inputWrapper.innerHTML = `
  <button id="yes">Yes, give me an ego boost</button>
  <button id="no">No, i have hubris now</button>
  `
  console.log('buttons')
  document.getElementById('yes').addEventListener('click', () => {
      showMessage('Yes!', 'user')
      setTimeout(() => showMessage('Okay, last one. Is that your picture next to “charming” in the dictionary?', 'bot'))
      bye()
  })
  document.getElementById('no')
  .addEventListener('click', () => {
      showMessage('Nah, i am good', 'user')
      setTimeout(() => showMessage('Look at you being all confident already.', 'bot'), 1000)
      bye()
  })

  const bye = () => {
      currentQuestion++
        setTimeout(() => showMessage('Hope this helped, keep on keeping on!', 'bot'), 1000)
        setTimeout(() => showMessage('👊', 'bot'), 1000)
        inputWrapper.innerHTML = `
        <button id="bye">Bye!</button>
        `
        document.getElementById('bye').addEventListener('click', () => {
            
            location.reload()
        })
  }
   // the if..else statement that loops the questions
}
const handleInput = (event) => {
    // preventDefault funkade inte här, varför? rad 123-124
  if (currentQuestion === 1) {
    nameQuestion()
  } else if (currentQuestion === 2) {
    complimentQuestion()
  } else if (currentQuestion === 3) {
    anotherCompliment()
  } else {
      bye()
  }
  currentQuestion++
}

// input user answers

form.addEventListener('submit', (event) => {
    event.preventDefault()
    handleInput()
})


const nameQuestion = () => {
    const name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''

    if (name === '') { 
        showMessage('Not a name, bro. Please give me your real name', 'bot')
        bye()
    }
// första svaret när vi har skrivit vårt namn

    const firstAnswer = (`Hi ${name}! I\'m here to BROost your confidence`)
    setTimeout(() => showMessage(firstAnswer, 'bot'), 1000)
    setTimeout(complimentQuestion, 1000)
}







// Set up your eventlisteners here



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)