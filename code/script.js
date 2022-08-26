// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
const submit = document.getElementsByClassName('send-btn')


// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello and welcome to your personal Pep Bot! What's your name? 🌞", 'bot');
  
}

//Greeting + name
const handleNameInput = (event) => {
  event.preventDefault()
  let userName = nameInput.value
  showMessage(userName, 'user')
  nameInput.value = ''
  setTimeout(() => howAreYou(userName), 1000);
}


//Question 1
const howAreYou = () => {
  showMessage(`Nice to meet you, ${nameInput.value}! How are you feeling today?`, 'bot')
  inputWrapper.innerHTML=`
  <button id="happyBtn" type="submit">Happy! 😀</button>
  <button id="sadBtn" type="submit">Sad 😢</button>
  <button id="hungryBtn" type ="submit">Hungry 🍔</button>`
  document.getElementById('happyBtn').addEventListener('click', () => {
    showMessage('Happy', 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForHelp('happy'), 1000)
   })
 
   document.getElementById('sadBtn').addEventListener('click', () => {
    showMessage('Sad', 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForHelp('sad'), 1000)
   })

   document.getElementById('hungryBtn').addEventListener('click', () => {
    showMessage('Hungry', 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForHelp('hungry'), 1000)
   })
   
}

//Question 2 do we need to keep "information" can we change it?
  const askForHelp = (information) => {
      /*showMessage(`Ok`, 'bot')*/
  
    if (information === "happy") {
    showMessage(`Wow, it is awesome that you are happy! Happiness: protects your heart and strengthens your immune system. 
    So, keep up the happiness, it is certainly good for you 😍 `, 'bot')
    setTimeout(() => askForMore('happy'), 1000) 

  } else if (information === "sad") {
    showMessage(`Oh no! I’m sad to hear so. I found you <a href="https://www.youtube.com/watch?v=mbfiE40az_0"> a video</a> that I hope will cheer you up!`
    , 'bot')
    showMessage(`If that didn’t do the trick, look at <a href="https://www.rd.com/list/happy-facts/">these spectacular facts</a> that'll make you smile!`, 'bot')
    setTimeout(() => askForMore('sad'), 1000)

  } else {
    showMessage(`Text hungry`, 'bot')
    setTimeout(() => askForMore('hungry'), 1000)
  }
}


//Eventlistener
/*nameForm.addEventListener('submit', handleNameInput);*/








/*In the starter code, the first event is asking for the user's name. 
The starter code asks the first question from the bot, and we've got the 
input field in the page ready for the user to type their name. 
So the first task is to listen to the form being submitted, 
(by clicking send or hitting the enter key), and to react to it.

**We want to:**

1. Listen for the form submit event
2. When the form is submitted, post the value from the text input as a message from the user
3. Progress the app to the next question.*/ 





// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
nameForm.addEventListener('submit', handleNameInput);
setTimeout(greeting, 1000);




/*Hej vad heter du
Hur mår du idag?
 - Glad, Ledsen, Hungrig

*Glad
  - Vad roligt! Visste du att... (fakta om glädje)
  - Vill du ha ett till fakta?
 
*Ledsen
  - Länk till klipp på YouTube
  - Länk till annat klipp

*Hungrig
 - Oj! Här är din närmsta matbutik...
 - Väldigt hungrig? Här är närmsta restaurang...


Tack för ditt besök - hoppas vi kunde hjälpa till! Välommen åter.
 
*/