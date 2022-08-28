// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
const submit = document.getElementsByClassName('send-btn')

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/ai.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/ai2.png" alt="Bot" />
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
  showMessage(`Nice to meet you${nameInput.value}! How are you feeling today?`, 'bot')
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
   if (information === "happy") {
    showMessage(`Wow, it is awesome that you are happy! Happiness: protects your heart and strengthens your immune system. 
    So, keep up the happiness, it is certainly good for you 😍 `, 'bot')
    showMessage(`Here is a video to celebrate that you are happy today <a href="https://www.youtube.com/watch?v=aL2nYsXNfMI">share your happiness!</a> `, 'bot')
    setTimeout(() => askForMore('happy'), 3000) 

  } else if (information === "sad") {
    showMessage(`Oh no! I’m sad to hear so. I found you <a href="https://www.youtube.com/watch?v=mbfiE40az_0"> a video</a> that I hope will cheer you up!`
    , 'bot')
    showMessage(`If that didn’t do the trick, look at <a href="https://www.rd.com/list/happy-facts/">these spectacular facts</a> that'll make you smile!`, 'bot')
    setTimeout(() => askForMore('sad'), 3000)

  } else {
    showMessage(`Being hungry is not a way to live, check out these top-level restaurants around the world! <a href="https://guide.michelin.com/en">Guide Michelin.</a>`, 'bot')
    setTimeout(() => askForMore('hungry'), 2000)
  }
}

//Question 3
const askForMore = () => {
  showMessage(`Now that we have your attention, can we ask you an additional question?`, 'bot')
  inputWrapper.innerHTML=`
  <button id="yesBtn" type="submit">YES! 😊</button>
  <button id="noBtn" type="submit">NO 😐</button>`

  document.getElementById('yesBtn').addEventListener('click', () => {
    showMessage(`Which is the funniest animal in the world?`, 'bot')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForExtra('yes'), 1000)
   })
 
   document.getElementById('noBtn').addEventListener('click', () => {
    showMessage(`No worries, we know you are a busy person. Thank you for hanging with us and welcome back anytime! 
    If you want some happiness on your way out click <a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs"> here! </a>`, 'bot')
    inputWrapper.innerHTML = ''
    clearTimeout(() => askForExtra('no'), 1000)
   })
}


 //Question 5
const askForExtra = () => {
  inputWrapper.innerHTML=`
    <button id="catBtn" type="submit">CAT! 😺</button>
    <button id="giraffeBtn" type="submit">GIRAFFE 🦒 </button>
    <button id="elephantBtn" type="submit">ELEPHANT 🐘 </button>`
    
  document.getElementById('catBtn').addEventListener('click', () => {
    showMessage(`Cat`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForNew('cat'), 1000)
  })
     
  document.getElementById('giraffeBtn').addEventListener('click', () => {
    showMessage(`Giraffe`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForNew('giraffe'), 1000)
  })

  document.getElementById('elephantBtn').addEventListener('click', () => {
    showMessage(`Elephant`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForNew('elephant'), 1000)
  })
}

const askForNew = (information) => {
  if (information === "cat") {
  showMessage(`Yes you are absolutely right! of course it is cats, here is a picture to prove it: <br> <img src="assets/cyrus-chew-Dl39g6QhOIM-unsplash.jpg" alt="Cat" /> `, 'bot' )
  setTimeout(() => askForAnswer('cat'), 3000);

  } else if (information === "giraffe") {
    showMessage(`Sorry no, we believe that it is clearly CATS! Thank you for hanging with us and welcome back anytime! 
    If you want some happiness on your way out click <a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs"> here! </a>`, 'bot')
    setTimeout(() => askForAnswer('giraffe'), 3000);

  } else {
    showMessage(`Sorry no, we believe that it is clearly CATS! Thank you for hanging with us and welcome back anytime! 
    If you want some happiness on your way out click <a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs"> here! </a>`, 'bot')
    setTimeout(() => askForAnswer('elephant'), 3000);
  }
}



// Eventlisteners here
nameForm.addEventListener('submit', handleNameInput);
setTimeout(greeting, 1000);

window.open(URL, '_blank');

