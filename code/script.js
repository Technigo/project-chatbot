// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')
const yesButton = document.getElementById('yes-btn')
const noButton = document.getElementById('no-btn')

//Makes a function for showMessage 'user' (cleaner code)
const userReply = (msg) => {
  showMessage(msg, 'user');
}
//Makes a function for showMessage 'bot' (cleaner)
const botReply = (msg) => {
  showMessage(msg, 'bot');
}

// Global variables, if you need any, declared here
//Numerically labels questions so nextQuestion function can find them.
let indexDoggos = 1
// Functions declared here
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(sender);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(sender);
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

const reloadBot = () => {
  showMessage('Fy fan nej!', 'user')
  
  botReply(`see ya`)
  
  inputWrapper.innerHTML = 
  `<div>
    <button id="reloadBtn">Restart</button>
  </div>`

  document.getElementById('reloadBtn').addEventListener('click', () => {
    location.reload()

})
}

const nextQuestion = (message) => {
  console.log(indexDoggos);
  if (indexDoggos === 1){
    userReply(message)
    setTimeout(() => dogSize(message), 1000);
   } else if (indexDoggos === 2) {
     userReply(message)
     setTimeout(() => typeOfDog(message), 1000);
   }
 else {
  setTimeout(() => greeting(message), 1000);
}
}
 
// Starts here
const greeting = () => {
  indexDoggos = 1
  botReply('Hello there! Are you here for a doggo friend?')

  yesButton.addEventListener('click', () => nextQuestion('Hells yes!')) 
  noButton.addEventListener('click', () => reloadBot())
  }

const dogSize = (message) => {
    indexDoggos++
    botReply('What size doggo friend would you like?')
  
     
      inputWrapper.innerHTML = ` 
        <button id="small-btn">Small</button>
        <button id="medium-btn">Medium</button>
        <button id="large-btn">Large</button>  
    `
  
    document
      .getElementById('small-btn')
      .addEventListener('click', () => nextQuestion('Small'))
    document
      .getElementById('medium-btn')
      .addEventListener('click', () => nextQuestion('Medium'))
    document
      .getElementById('large-btn')
      .addEventListener('click', () => nextQuestion('Large'))
  }

  const typeOfDog = (type) => {
    indexDoggos++
    botReply(`Excellent! A ${type} Based on that please choose a breed below!`)

    if (type === 'Small') {
      inputWrapper.innerHTML = `
        <select id='select'>
          <option value="">Select Here</option>
          <option value="yorkshire-terrier">Yorkshire Terrier</option>
          <option value="chihuahua">Chihauhua</option>
          <option value="pomeranian">Pomeranian</option>
          <option value="dachshund">Dachshund aka Sausage dog!</option>
        </select>`
    } else if (type === 'Medium'){
      inputWrapper.innerHTML = `
        <select id='select'>
          <option value="">Select Here</option>
          <option value="welsh-cardigan-pembroke-corgi">Welsh Cardigan or Pembroke Corgi (Yes there 2 diff. breeds)</option>
          <option value="beagle">Beagle</option>
          <option value="poodle">Poodle</option>
          <option value="american-pit-bull">American PitBull</option>
        </select>`
    } else {
      inputWrapper.innerHTML = `
        <select id='select'>
          <option value="">Select Here</option>
          <option value="great-dane">Great Dane</option>
          <option value="st-bernard">St. Bernard</option>
          <option value="goldie">"Goldie" Golden Retriever</option>
          <option value="german-shepard">German Shepard</option>
        </select>`
    }
  }

  const giftWrapDog = () => {
    botReply()
  }



// Set up your eventlisteners here - user answer yes when click




// Set up your eventlisteners here - user answer no when clicked






// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
