// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
const sendBtn = document.getElementById('send')

// Global variables, if you need any, declared here
let name
// Functions declared here

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

// Starts here
const greeting = () => {
showMessage(`Hello there, What's your name?`, 'bot')


  // Just to check it out, change 'bot' to 'user' here 👆
}


const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value
  showMessage(`My name is ${nameInput.value}`, 'user')
  
  setTimeout(() => showFoodOptions(name), 1000)

}

const showFoodOptions = () => {
  showMessage(`Nice to meet you ${nameInput.value}! What fika would you like?`, 'bot')

inputWrapper.innerHTML = `
<button id="cinamonnrollBtn">Cinnamon roll</button>
<button id="semlaBtn">Semla</button>
<button id="prinsesscakeBtn">Prinsess cake</button>
`
document.getElementById("cinamonnrollBtn").addEventListener("click", () => {
  showMessage('Cinnamon roll', 'user')
  setTimeout(showQuantity,1000)
})
document.getElementById("semlaBtn").addEventListener("click" , () => {
  showMessage('Semla', 'user')
  setTimeout(showQuantity,1000)
})
document.getElementById("prinsesscakeBtn").addEventListener("click", () => {
   showMessage('Prinsess cake' , 'user')
   setTimeout(showQuantity,1000)
})

//setTimeout(() => showQuantity(), 1000)
}

const showQuantity = () => {
  showMessage(`Good choice! How many would you like?`, 'bot')
  inputWrapper.innerHTML = `
  <select id="select">
    <option value=""> Select quantity</option>
    <option value="one">1</option>
    <option value="two">2</option>
    <option value="three">3</option>
    <option value="four">4</option>
  </select>
  `
document.getElementById("select").addEventListener("change", () => { 
  showMessage(`I would like ${select.value}`, 'user')
  setTimeout(showPrice,1000)
})

}

//document.getElementById('1').addEventListener('click', () => {

//document.getElementById('2').addEventListener('click', () => ))


const showPrice = () => {
  let price 
if (select.value === 'one') {
  price = '10SEK'
} else if (select.value === 'two') {
  price = '20SEK'
} else if (select.value === 'three') {
  price = '30SEK'
} else  {
  price = '40SEK'
}
showMessage(`That will be ${price}. Are you sure you want this?`, 'bot')



 inputWrapper.innerHTML = `
 <button id="yesBtn">Yes</button>
 <button id="noBtn">No</button>
  `
  document.getElementById("yesBtn").addEventListener("click", () => {
    showMessage('Yes', 'user')
    setTimeout(confirm,1000)
  })
  document.getElementById("noBtn").addEventListener("click", () => {
    location.reload()
    return false  
  })
}

const confirm = () => {  
  showMessage('Thank you ', 'bot')
//}
}



//const amountInput = () => {
 // const = amountInput.value
  //showMessage(`I would like ${amountInput.value}`, 'user')
  //setTimeout(() => (name), 1000)

//b}

//const select = document.getElementById('select')
//select addEventListener('change', () => nextQuestion(select.value))

// Set up your eventlisteners here
form.addEventListener('submit', handleNameInput)




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)