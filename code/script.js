// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const form = document.getElementById ('name')
// Global variables, if you need any, declared here



// Functions declared here


const welcomeMessage = (userName) => {
//userName.preventDefault()

if (userName == "") {
showMessage(`Name must be filled out, please enter your name!` ,'bot');
  return false;
}

else {
showMessage(`Hello ${userName}, welcome to color picker!`, 'bot')
}
setTimeout(() => colorOptions(userName), 1000)
}


const colorOptions = (userName) => {

showMessage(`${userName}, what is your favorite color ?`, 'bot' )


inputWrapper.innerHTML = `
    <button id="redBtn">🔴</button>
    <button id="greenBtn">🟢</button>
    <button id="blueBtn">🔵</button>
    <button id="yellowBtn">🟡</button>
  `

  document
    .getElementById('redBtn')
    .addEventListener('click', redAnswer)
  document
    .getElementById('greenBtn')
    .addEventListener('click', greenAnswer)
  document
    .getElementById('yellowBtn')
    .addEventListener('click', yellowAnswer)
  document
    .getElementById('blueBtn')
    .addEventListener('click', blueAnswer)
    
}


const redAnswer= () => {
 
  showMessage(`Red is a Gryffindor color 🦁`, 'bot' )
   setTimeout(()=>pickSpell (), 2000)
   
  }
   
   
  const greenAnswer= () =>{
    showMessage(`green is a Slytherin color 🐍`, 'bot' )
    setTimeout(()=>pickSpell (), 2000)
 
    
   
  }

  const yellowAnswer=() =>{
    showMessage(`yellow is a Hufflepuff color 🦡`, 'bot' )
    setTimeout(()=>pickSpell (), 2000)
   
}
  
  const blueAnswer=() =>{
    showMessage(`blue is a Ravenclaw color 🦅`, 'bot' )
    setTimeout(()=>pickSpell (), 2000)
    
    

  }

  
  
const pickSpell = () => {
showMessage (`Pick your spell 🧙!`, `bot`)

inputWrapper.innerHTML = `
    <button id="lumosBtn">Light up</button>
    <button id="disarmBtn">Disarm </button>
    <button id="accioBtn">Summoning</button>
    <button id="avadakedavraBtn">The unforgivable curse</button>
  `

  document
    .getElementById('lumosBtn')
    .addEventListener('click', lumosAnswer)
  document
    .getElementById('disarmBtn')
    .addEventListener('click', expelliarAnswer)
  document
    .getElementById('accioBtn')
    .addEventListener('click', accioAnswer)
    document
    .getElementById('avadakedavraBtn')
    .addEventListener('click', avadakedavraAnswer)

}


const lumosAnswer= () => {
 
  showMessage(`You have picked Lumos 💡 `, 'bot' )
   setTimeout(()=>thankYou (), 3000)
  
  }
   
  const expelliarAnswer= () =>{
    showMessage(`You have picked Expelliarmus 💥`, 'bot' )
    setTimeout(()=>thankYou (), 2000)
   
   
  }
   
  const accioAnswer=() =>{
    showMessage(`You have picked accio 🧹`, 'bot' )
    setTimeout(()=>thankYou (), 2000)
   
  }

     
  const avadakedavraAnswer=() =>{
    showMessage(`You have picked Avada Kedavra 💀 `, 'bot' )
    setTimeout(()=>thankYou (), 2000)
    
  }


const thankYou = () => {
  showMessage (`Thank you for engaging in our bot-chat, Have a good day wizard! 🧙👋🏼`, 'bot' )
  inputWrapper.innerHTML = ``
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
  showMessage(`Hello there wizard, what's your name?`, 'bot')
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
