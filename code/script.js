  //Open the chatbot while clicking on the button
  document.getElementById("buttonmain").addEventListener("click", function(){
  buttonmain.style.visibility="hidden";
  document.querySelector("main").style.display = "flex";
})

// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
const submit = document.getElementById('submit')
const main = document.getElementById('main')
const inputWrapper = document.getElementById('input-wrapper')

const compliment = ["You're all that and a super-size bag of chips.", "On a scale from 1 to 10, you're an 11.", "Aside From Food, You're My Favorite.", 
"Is that your picture next to “charming” in the dictionary?", "You’re a smart cookie.", "I know this is corny, but you are a-maize-ing!", 
"You're like sunshine on a rainy day.", "I bet you sweat glitter.", "You're better than a triple-scoop ice cream cone. With sprinkles." ];

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('user')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user1.png" alt="User" />  
      </section>
    `

  } else if (sender === 'bot') {
    console.log('bot') 
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  else if (sender === 'botrandom') {
    console.log('botrandom') 
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
        <div class="bubblerandom bot-bubblerandom">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // Makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}


// Starts here
  const greeting = () => {
  showMessage(`Hello and welcome to the Compliment Bot, what's your name?`, 'bot')


//---- First intention ----// 
}
  const handleNameInput = (event) => { // at submit this function will be invoked
  event.preventDefault() // prevents website refresh at submit

  const name = nameInput.value // input value will be stored in the const name
  console.log(name)

  showMessage(`My name is ${name}`, 'user') // users answer 
  nameInput.value = '' // clearing name input setting it to an empty string

  setTimeout(() => complimentOptions(name), 1000) // passing the arguments to complimentOptions function with 1s delay
}


//---- Second intention ----//
  const complimentOptions = (name) => { 
  showMessage(`Nice to meet you ${name}! Do you want a compliment?`, 'bot') //sends second message from bot
  
  
  inputWrapper.innerHTML = // add Yes No button
  `<button id="yesBtn" type="submit">Yes</button>
  <button id="noBtn" type="submit">No</button>`

  document
  .getElementById('yesBtn')
  .addEventListener('click', () => {
    showMessage('I would love to get a compliment', 'user')
    setTimeout(() => chooseCompliment(submit), 1000) // After clicking the button; passing the arguments to complimentOptions function with 1s delay 
    // Also add some code in here to add answer options for next message
  })

  document
  .getElementById('noBtn').addEventListener('click', () => {
    showMessage('No thank you, goodbye', 'user')
    setTimeout(() => chooseDefault(submit), 1000) // After clicking the button; passing the arguments to complimentOptions function with 1s delay 
    document.getElementById("input-wrapper").style.display = "none"; // Button dissapears 
    // Also add some code in here to add answer options for next message
  }) 
}


//------ Third intention ------//

  const chooseCompliment = (submit) => {
  showMessage(`Nice! Click on the button below to get a random compliment`, 'bot') // When clicking YES on the second intention 
  
  inputWrapper.innerHTML = // add Yes No button
  `<button id="randomBtn" type="submit">Get a Compliment</button>`
  
  document.getElementById('randomBtn').addEventListener('click', () => {

    //randomSentence = Math.floor(Math.random() * 3);
   
    setTimeout(() =>  showMessage(compliment[Math.floor(Math.random() * 9)], 'botrandom'), 1000) // Returns a random integer from 0 to 10:
    
    clearTimeout(setTimeout);
    
    setTimeout(() => moreCompliment(compliment), 3000) // After clicking the button; passing the arguments to complimentOptions function with 1s delay 

  })
}


//------ Default - No Button ------// 

const chooseDefault = (submit) => { // When clicking NO on the second intention the chat bot closes
  showMessage(`Buuuuuu :(`, 'bot')
  setTimeout(() => location.reload(), 2000)
  return false;
}


//------ Default - New compliment? ------//

const moreCompliment = (name) => { 
   showMessage(`Do you want another compliment?`, 'bot') //sends second message from bot
  
  
  inputWrapper.innerHTML = // add Yes No button
  `<button id="yesBtn" type="submit">Yes</button>
  <button id="noBtn" type="submit">No</button>`

  document
  .getElementById('yesBtn')
  .addEventListener('click', () => {
    showMessage('I would love to get a compliment', 'user')
    setTimeout(() => chooseCompliment(submit), 1000) // After clicking the button; passing the arguments to complimentOptions function with 1s delay 
    // Also add some code in here to add answer options for next message
  })

  document
  .getElementById('noBtn')
  .addEventListener('click', () => {
    showMessage('No thank you, goodbye', 'user')
    setTimeout(() => chooseDefault(submit), 1000) // After clicking the button; passing the arguments to complimentOptions function with 1s delay 
    document.getElementById("input-wrapper").style.display = "none"; // Button dissapears 
    // Also add some code in here to add answer options for next message
  }) 
}


// Set up your eventlisteners here
form.addEventListener('submit', handleNameInput)


  // Store the value in a variable so we can access it after we 
  // clear it from the input
  

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  //
 


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)


