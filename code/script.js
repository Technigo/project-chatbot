// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const form = document.getElementById ('name')
// Global variables, if you need any, declared here



// Functions declared here






const welcomeMessage = (userName) => {
//userName.preventDefault()
showMessage(`Hello ${userName}, welcome to color picker!`, 'bot')

setTimeout(() => colorOptions(userName), 1000)
}


const colorOptions = (userName) => {

showMessage(`${userName}, what color is your favorite?`, 'bot' )


inputWrapper.innerHTML = `
    <button id="redBtn">Red</button>
    <button id="greenBtn">Green</button>
    <button id="blueBtn">Blue</button>
  `

  document
    .getElementById('redBtn')
    .addEventListener('click', redAnswer)
  document
    .getElementById('greenBtn')
    .addEventListener('click', greenAnswer)
  document
    .getElementById('blueBtn')
    .addEventListener('click', blueAnswer)
}


const redAnswer= () => {
 
  showMessage(`Red is a nice color`, 'bot' )
   setTimeout(()=>birthSeason (), 1000)
  }
   
   
  const greenAnswer= () =>{
    showMessage(`green is a ok color`, 'bot' )
    setTimeout(()=>birthSeason (), 1000)
   
  }
   
   
  const blueAnswer=() =>{
    showMessage(`blue is a very pretty color`, 'bot' )
    setTimeout(()=>birthSeason (), 1000)
   
  }
  
const birthSeason = () => {
showMessage (`What season are you born in?`, `bot`)


inputWrapper.innerHTML = `
    <button id="springBtn">Spring</button>
    <button id="summerBtn">Summer</button>
    <button id="autumnBtn">Autumn</button>
    <button id="winterBtn">Winter</button>
  `

  document
    .getElementById('springBtn')
    .addEventListener('click', springAnswer)
  document
    .getElementById('summerBtn')
    .addEventListener('click', summerAnswer)
  document
    .getElementById('autumnBtn')
    .addEventListener('click', autumnAnswer)
    document
    .getElementById('winterBtn')
    .addEventListener('click', winterAnswer)

}


const springAnswer= () => {
 
  showMessage(`Spring is a green season 🌳`, 'bot' )
   setTimeout(()=>birthSeason (), 1000)
  }
   
   
  const summerAnswer= () =>{
    showMessage(`Summer is a blue season 🌊`, 'bot' )
    setTimeout(()=>birthSeason (), 1000)
   
  }
   
   
  const autumnAnswer=() =>{
    showMessage(`autumn is a red season 🍂`, 'bot' )
    setTimeout(()=>birthSeason (), 1000)
  }


     
  const winterAnswer=() =>{
    showMessage(`winter is a white season ❄ `, 'bot' )
    setTimeout(()=>birthSeason (), 1000)
  }




const handleNameInput = (event) => {
event.preventDefault()


  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => welcomeMessage(name), 1000)
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {

    console.log('Checks if user is sender!')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `//it shows only "message" and not the (Hello there, What's your name?)
  } else if (sender === 'bot') {
   
    console.log('bot is sending')
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



// Set up your eventlisteners here

document.getElementById("name-form").addEventListener("submit", handleNameInput)



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
