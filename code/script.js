// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const input = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');


// Global variables, if you need any, declared here
//declare that dish "exists"
var dish;
var fill;


// Functions declared here

const botReply = (msg) =>{
  showMessage (msg, "bot")
} 

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/rw.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/hp.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// const showOptions = (message, sender) => {
//   if (sender === 'bot') {
//     chat.innerHTML += `
//     <section class="bot-msg">
//       <img src="assets/bot.png" alt="Bot" />
//       <div class="bubble bot-bubble">
//         <p>${message}</p>
//       </div>
//     </section>
//   `
//     chat.scrollTop = chat.scrollHeight

//   }

// Starts here

const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
form.addEventListener('submit', (event)=>{
  event.preventDefault();
  const name = input.value
  input.value = '';

//Set time, 2 second
  const messageOne = () => {
  showMessage(`${name}`, "user")}
  setTimeout(messageOne, 1000)
  
//Set time, 3 second 
  const messageTwo = () => {
  showMessage(`Hello ${name}`, "bot")}
  setTimeout(messageTwo, 2000)
    
 //Set time, 4 second and food options 4
  const messageThree = () => {
  showMessage(`What would you like to order <br> <video loop autoplay>
  <source src="assets/wizard.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`, "bot")}
  setTimeout(messageThree, 3000)
  setTimeout(() => showFoodOptions(), 4000)


})

// Showing menu options on click, invoking showMenu function
const showFoodOptions = () => {
  inputWrapper.innerHTML =`
    <button id="hp-btn">Harry Potter Menu</button>
    <button id="hrg-btn">Harmione Granger Menu</button>
    <button id="rw-btn">Ron Weasley Menu</button>
   `
   document
    .getElementById('hp-btn')
    .addEventListener('click', () => showMenu("Harry Potter"))

    document
    .getElementById('hrg-btn')
    .addEventListener('click', () => showMenu("Harmione Granger"))

    document
    .getElementById('rw-btn')
    .addEventListener('click', () => showMenu("Ron Weasley"))

 }

// showMenu function that catches the choice through value "dish"
const showMenu = (dish) => {
    botReply(`${dish} burger is a great choice, please select your favorite filling`)
    window.dish=`${dish}` // this window method will tranform it from local variable to a global variable 
    inputWrapper.innerHTML =`
    <select id="select"> 
      <option value=" " selected disabled> your filling </option>
      <option value="meat"> Meat </option>
      <option value="chicken"> Chicken </option>
      <option value="fish"> Fish </option>
      <option value="vegitarian"> Vegitarian </option>
    </select>
    `
    //event change enable to choice between the options
    const select = document.getElementById('select')
    select.addEventListener('change', () => sideDish (select.value).fill) 
  }
    
const sideDish = (fill) => {
  botReply(`you have ordered ${dish} with ${fill} please chose your favorite side dish`)
  window.fill=`${fill}`
}
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)

