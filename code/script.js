// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')
const yesButton = document.getElementById('yes-btn')
const noButton = document.getElementById('no-btn')
const nameInput = document.getElementById('name-input')

//Makes a function for showMessage 'user' (cleaner code)
const userReply = (msg) => {
  showMessage(msg, 'user');
}
//Makes a function for showMessage 'bot' (cleaner)
const botReply = (msg) => {
  showMessage(msg, 'bot');
}

// Global variables
//Numerically labels questions so nextQuestion function can find them.
let indexDoggos = 1
let chatDelayOneSecond = 1000 //1 second delay

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
  console.log(userReply)
  showMessage('Fy fan nej!', 'user')
  setTimeout(() => botReply('No Doggos is a sad doggo-less day for us... but maybe you\'ve changed your mind?')      //your code to be executed after 1 second
  , 1000);

  
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
   } else if (indexDoggos === 3) {
     userReply(message)
     setTimeout(() => giftWrapDog(message), 1000);
   } else if (indexDoggos === 4) {
     console.log()
     userReply(message)
     setTimeout(() => nameofDog(message), 1000);
           
} else {  
    userReply(message);
    setTimeout(() => goodbye(message), 1000);
}
}
 
// Starts here
const greeting = () => {
  indexDoggos = 1
  botReply('Hello there! Are you here for a doggo friend?')

  yesButton.addEventListener('click', () => nextQuestion('Hells yes!')) 
  noButton.addEventListener('click', () =>  reloadBot())
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
    botReply(`Excellent! A ${type} doggo! Based on that please choose a breed below!`)

    if (type === 'Small') {
      inputWrapper.innerHTML = `
        <select id='select'>
          <option value="">Select Here</option>
          <option value="Yorkshire Terrier">Yorkshire Terrier</option>
          <option value="Chihuahua">Chihauhua</option>
          <option value="Pomeranian">Pomeranian</option>
          <option value="Dachshund the sausage doggo">Dachshund aka Sausage dog!</option>
        </select>`
    } else if (type === 'Medium'){
      inputWrapper.innerHTML = `
        <select id='select'>
          <option value="">Select Here</option>
          <option value="Welsh Cardigan/Pembroke Corgi">Welsh Cardigan or Pembroke Corgi (Yes there 2 diff. breeds)</option>
          <option value="Beagle">Beagle</option>
          <option value="Poodle">Poodle</option>
          <option value="American Pit Bull">American PitBull</option>
        </select>`
    } else {
      inputWrapper.innerHTML = `
        <select id='select'>
          <option value="">Select Here</option>
          <option value="Great Dane">Great Dane</option>
          <option value="St. Bernard">St. Bernard</option>
          <option value="Golden Retriever">"Goldie" Golden Retriever</option>
          <option value="German Shepard">German Shepard</option>
        </select>`
    }

    const select = 
      document
        .getElementById('select')
      select
        .addEventListener('change', () => nextQuestion(select.value))
  }


  const giftWrapDog = (gift) => {
    indexDoggos++
    botReply(`Great choice! Would you like us to gift wrap your doggo?`)

      inputWrapper.innerHTML = `
        <button id="yes-pls-btn">Yes, please.</button>
        <button id="wtf-btn">Wtf... no!!</button>
      ` 
    document
      .getElementById('yes-pls-btn')
      .addEventListener('click', () => nextQuestion('Yes, please.'))
    document
      .getElementById('wtf-btn')
      .addEventListener('click', () => nextQuestion('Wtf... no!'))
  }
  
  const nameofDog = (message) => {indexDoggos++
    botReply(`We don't gift wrap doggos, we're not evil!
    What would you like to name your doggo friend?`)

      inputWrapper.innerHTML = `
        <form id="name-form">
           <input id="name-input" type="text" />
           <button id="send-btn" type="submit"> 
           Send 
           </button>
        </form> `

    const userInput = 
      document.getElementById("name-input")
          
    const form =      
      document.getElementById("name-form")
      form.addEventListener("submit", (event) => {event.preventDefault()
      nextQuestion(userInput.value)
      userInput.value=""})  
  }


  const goodbye = (message) => {
  
    botReply(`${message}? Cute name! ${message} will be on the way to you shortly!
    Thank you for using Doggo Bot! Here for all your Doggo and Best Boi/Gurl needs.`)
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
