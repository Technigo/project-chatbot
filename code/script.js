// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const sendBtn = document.getElementById('send')

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
  let userName = document.getElementById('user-input');
  showMessage(`How are you feeling today?`, 'bot')
  inputWrapper.innerHTML = `
  <button id="option1">happy</button>
  <button id="option2">sad</button>
  <button id="option3">angry</button>
  `
  
  
    document.getElementById("option1").addEventListener("click", () => {
      showMessage("I see you are feeling happy!😊 Here's a list that suits your mood. Go ahead and choose one! 👇", "bot")
      inpt = () => { 
      inputWrapper.innerHTML= `
      <select id="select" name="songs">
      <option value selected disabled>Select a song</option>
      <option id="select">Happy by William Farrel</option>
      <option id="select">Here comes the sun by the Beatles</option>
      <option id="select">Shiny happy people by REM</option>
      </select>
    `
    const select = document.getElementById("select");
    let userName = document.getElementById('user-input');
    select.addEventListener("change", () =>
    greatChoice(select.value))
      }
    })

    document.getElementById("option2").addEventListener("click", () => {
      showMessage("I see that you are sad today😢. Here's a list that suits your mood. Go ahead and choose one! 👇" , "bot")
      inpt = () => {
      inputWrapper.innerHTML= `
      <select id="select" name="songs">
      <option value selected disabled>Select a song</option>
      <option id="select">Don't worry, be happy by Bobby Mac Ferrin</option>
      <option id="select">Someone like you by Adele</option>
      <option id="select">Hey Jude by The Beatles</option>
      </select>
    ` 
    const select = document.getElementById("select");
    select.addEventListener("change", () =>
    greatChoice(select.value))
      }
    })

    document.getElementById("option3").addEventListener("click", () => {
      showMessage("I see that you are angry today😡. Here's a list that suits your mood. Go ahead and choose one! 👇", "bot")
      inpt = () => {
      inputWrapper.innerHTML=`
      <select id="select" name="songs">
      <option value selected disabled>Select a song</option>
      <option id="">In the end by Linkin Park</option>
      <option id="">Basket case by Green Day</option>
      <option id="">Break Stuff by Limp Bizkit</option>
      </select>
    `
      const select = document.getElementById("select");
      select.addEventListener("change", () =>
        greatChoice(select.value))
      }
    })
   //trying to add the choice to listen to now/later in response to former question

    /*document.getElementById("forme").addEventListener("click", () => {
      showMessage("So, this song is for you.Do you want to listen to it now or later?", "bot")
      inpt = () => {
      inputWrapper.innerHTML = `
      <button id="now">NOW</button>
      <button id="later">LATER</button>
      `
      document.getElementById("forafriend").addEventListener("click", () => {
        showMessage("So, this song is for a friend. Do you want to listen to it now or later?", "bot")
        inpt = () => {
        inputWrapper.innerHTML = `
        <button id="now">NOW</button>
        <button id="later">LATER</button>
        `
      }
    })*/
   
    setTimeout(() => {
      inpt();
    }, 2000)
  
}


//Question 3
const greatChoice = () => {
showMessage(`Great choice! I love that song ❤ Is this for you or for a friend?`, 'bot')
setTimeout(() => greatChoice(value, 'bot'), 2000)
inputWrapper.innerHTML = `
<button id="forme">For me</button>
<button id="forafriend">For a friend</button>
`
}

//Question 4
const whoIsThesongFor = () => {
document.getElementById('select');
showMessage(`Is this song for you or for a friend? ❤`, 'bot')
setTimeout(() => whoIsThesongFor(value, 'bot'), 2000)
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

form.addEventListener('change', (event) => {
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
