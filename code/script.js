// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const userName = document.getElementById('name-input')
const sendBtn = document.getElementById('send-btn')

// Global variables, if you need any, declared here
let currentQuestion = 1 //tracks the bot questions
let userInput  //handles user input, button, text, menu
// DOM selectors for all dynamically created elements are stored in the following variables
let foodSelected 
let serving
let drink
let selectedDrink
 
// Functions declared here
//changes color of drop down menu and displays options
function toggleMenu() {
  this.classList.toggle('open')
}
//handles all the user inputs
const handelInput = (event) => {
  event.preventDefault()
  event.stopPropagation()

  if (currentQuestion===1) {  //first question
   userInput = userName.value  //storing the entered text in UserInput variable
  userName.value = ""  //clearing the text entered by user
  showMessage(userInput, 'user')  //displays user input in user bobble
  setTimeout(nextQuestion, 500)  //timeout before displaying next question bot
    
  } else if (currentQuestion === 2) {  // second question
     userInput= event.target.textContent  //targeting the text content of the clicked element and storing the content of the button in userInput variable
    showMessage(userInput, 'user')
    setTimeout(nextQuestion, 500)

  } else if (currentQuestion === 3) {  //third question
    userInput = event.target.value
    showMessage(userInput, 'user')
    setTimeout(nextQuestion, 500)
  
  } else if (currentQuestion === 4) { //fourth question
    userInput= event.target.textContent
    showMessage(userInput, 'user')
    setTimeout(nextQuestion, 500)
  
  } else if (currentQuestion === 5) {  //fifth question
    userInput= event.target.value
    showMessage(userInput, 'user')
    setTimeout(nextQuestion, 500)
  }
  
  
}

const nextQuestion = () => {  //this function creates the bot questions and the new elements to handle those question
  
  if (currentQuestion === 1) {  //first question
    showMessage(`Welcome ${userInput}! What are you craving today?`, 'bot') //${userInput} inserts the value of the variable into the string and uses userInput to display new question
    userName.style.display = "none" //hides text box
    sendBtn.style.display = "none" // hides send button
    
    //creating new elements on run time, in this case three buttons
    form.innerHTML += ` 

   <div class="food-options" id="food-options">
    <button class="phad-thai" id="phad-thai">Phad Thai</button>
    <button class="paneng-curry" id="paneng-curry">Paneng Curry</button>
    <button class="paneng-curry" id="tom-kha-gai">Tom Kha Gai</button>
    </div>
   `
    foodSelected = document.getElementById('food-options') //dom selector for the element div above
    foodSelected.addEventListener('click', handelInput) //calls handelInput function on click
    
  } else if(currentQuestion === 2){ //question 2
    showMessage(`Yes, ${userInput} is the best! Now select your serving size...`, 'bot')
    foodSelected.style.display = "none" //hides the food buttons
    
    // creating new elements on run time, in this case a drop down menu
    
    form.innerHTML += `
    <select class="askServing" id="askServing">
    <option selected disabled>Please Select</option>
      <option value="Single"> Single </option>
      <option value="Double"> Double </option>
      <option value="Family"> Family </option>
    </select>
        
    `

    //document.getElementById("serving-size").onclick = toggleMenu //call to toggleMenu function
    serving = document.getElementById('askServing') //dom selector for the ul element above
    serving.addEventListener('change', handelInput) //calls handelInput function on click

  } else if (currentQuestion === 3) { //thirs question
    showMessage(`Wonderful, ${userInput} serving is 100kr. Would you like to add drinks?`, 'bot')
    serving.style.display = "none" //hides all of drop-down menu

    //creating new elements on run time, in this case two buttons
    form.innerHTML += `

   <div class="askDrink" id="askDrink">
    <button class="addDrink" id="addDrink">Yes</button>
    <button class="noDrink" id="noDrink">No</button>
    
    </div>
  
   `
   drink = document.getElementById('askDrink') //dom selector for the buttons above
   drink.addEventListener('click', handelInput) //calls handelInput function on click

  } else if (currentQuestion === 4) { //fourth question
    drink.style.display = 'none'  //hides buttons
    if (userInput === 'Yes'){  //if answer is yes this message is shown
      showMessage('Great, please choose a beverage below', 'bot')

      //creates new elements on run tume, in this case a drop-down menu
      form.innerHTML += `
    <select class="drink-menu" id="drink-menu">
    <option selected disabled>Please Select</option>
      <option value="Coca-Cola"> Coca-Cola </option>
      <option value="Fanta"> Fanta </option>
      <option value="Sprite"> Sprite </option>
    </select>
      `
      // document.getElementById("drink-choice").onclick = toggleMenu  //call to toggleMenu function
      selectedDrink = document.getElementById('drink-menu') //dom selector for the ul element above
      selectedDrink.addEventListener('change', handelInput) //calls handelInput on click

    } else {
      showMessage('Okay, your order is on your way', 'bot')  //if answer is no, this message shows
    }
  
  } else if (currentQuestion === 5) {
    selectedDrink.style.display = "none" //hides all of drop-down menu
    showMessage('Okay, your order is on your way', 'bot')  //if answer is no, this message shows
  }

    currentQuestion++  //updating the question number automatically
  }

 



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
  setTimeout(() => {chat.scrollTop = chat.scrollHeight}, 100) 
}

// Starts here
const greeting = () => {
  showMessage(`Hello there! What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

form.addEventListener('submit', handelInput)





// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
