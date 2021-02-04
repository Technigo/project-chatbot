// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
let userName = ""

// Global variables, if you need any, declared here

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

//Question 1

const handleResponse = () => {
  let userName = document.getElementById('name-input').value;
  showMessage(`Nice to meet you ${userName}!`, 'bot')
   
}

//Question 2

const moodOptions = () => {
  let userName = document.getElementById('name-input').value;
  showMessage(`How are you feeling today ${userName}?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="option1">happy</button>
    <button id="option2">sad</button>
    <button id="option3">angry</button>
    `
    document.getElementById("option1").addEventListener("click", () => {
      showMessage("I see you are feeling happy!😊 Here's a list that suits your mood. Go ahead and choose one! 👇", "bot")
      setTimeout (() => inputWrapper.innerHTML=`
      <select id="select" name="songs">
      <option value selected disabled>Select a song</option>
      <option value="1">Happy by William Farrel</option>
      <option value="2">Here comes the sun by the Beatles</option>
      <option value="3">Shiny happy people by REM</option>
      </select>
    `, 1500)
    })

    document.getElementById("option2").addEventListener("click", () => {
      showMessage("I see that you are sad today😢. Here's a list that suits your mood. Go ahead and choose one! 👇" , "bot")
      setTimeout (() => inputWrapper.innerHTML=`
      <select id="select" name="songs">
      <option value selected disabled>Select a song</option>
      <option value="4">Don't worry, be happy by Bobby Mac Ferrin</option>
      <option value="5">Someone like you by Adele</option>
      <option value="6">Hey Jude by The Beatles</option>
      </select>
    `, 1000)
    })

    document.getElementById("option3").addEventListener("click", () => {
      showMessage("I see that you are angry today😡. Here's a list that suits your mood. Go ahead and choose one! 👇", "bot")
      setTimeout (() => inputWrapper.innerHTML=`
      <select id="select" name="songs">
      <option value selected disabled>Select a song</option>
      <option value="7">In the end by Linkin Park</option>
      <option value="8">Basket case by Green Day</option>
      <option value="9">Break Stuff by Limp Bizkit</option>
      </select>
    `, 1000)
  
    })
}

//Question 3
const greatChoice = () => {
  document.getElementById('select').addEventListener('change', () => {
  showMessage(`Great choice ${userName}! I love that song`, 'bot')
  setTimeout (() => greatChoice(value, 'bot'), 1000)
 })
}

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  



// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  showMessage(value, 'user')
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  showMessage(value, 'bot')
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  setTimeout (() => handleResponse(value, 'bot'), 1000)
  setTimeout (() => moodOptions(value, 'bot'), 2000)
});

form.addEventListener('select', (event) => {
  event.preventDefault();
  showMessage(value, 'bot')
  setTimeout (() => greatChoice(value, 'bot'), 1000)
});



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
