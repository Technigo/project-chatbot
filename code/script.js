// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const chatPopUp = document.getElementById("chat-popup");
const chatBtn = document.getElementById("chat-button");
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('room-form');
const roomInput = document.getElementById('room-input'); //user writes their room
const sendBtn = document.getElementById('send-btn'); //user writes their wake-up time


// Toggle effect
chatBtn.addEventListener("click", ()=>{
  chatPopUp.classList.toggle("show");
});
  
// Sound effect

const messageSound = () => {
  let audio = new Audio("https://notificationsounds.com/storage/sounds/file-sounds-1233-elegant.mp3")
  audio.play();
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p class="p-bubble-msg">${message}</p>
        </div>
        <img src="assets/bot-guest.svg" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    //console.log('bot-message') //added console log
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-hotel.svg" alt="Bot" />

        <div class="bot-input-wrapper" id="bot-input-wrapper">
           <div class="preload-bubble" id="preloader">
             <ul class="bot-typing">
               <li></li>
               <li></li>
               <li></li>
             </ul> 
           </div>

           <div class="bubble bot-bubble">
              <p class="p-bubble-msg">${message}</p>
           </div>
        </div>
      </section>
    `
  } 
    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box and adds sound
  chat.scrollTop = chat.scrollHeight;
  messageSound();
}


// Conversations starts here

// Question 1 - Bot asks 'What is your room number'?
function loadingDots(){
  const preloader= document.getElementById("preloader");
  preloader.style.display = "none";
}

const greeting = () => {
      setTimeout((loadingDots),1500);
      showMessage("Welcome to Hotel Vosje. What is your room number?", 'bot'),2000; 
    };
  

// User answers with room number

const handleFormInput = (event) => {        // at submit this function will be invoked
  event.preventDefault();        // prevents website refresh at submit
  const room = roomInput.value;        // input value will be stored in the const name
  showMessage(`My room number is ${room}`, 'user');      // users answer 
  roomInput.value = '';        // clearing room input setting it to an empty string

  if (room === '') {       // this will prompt the user to answer correctly
    showMessage(`Please, give me your room number.`, 'bot');
  } else {
    greetingLoop(room);
  }
}

// The bot answers hello room #. This const will also be used as loop back selections if guest needs something else

const greetingLoop = (room) => {
  showMessage(`Hello room ${room}`, 'bot');
  setTimeout(() => helpSelection(), 600)
}

// Question 2 - Bot asks 'What do you need help with today?' and sends selection-buttons

const helpSelection = () => {
  showMessage('What can I help you with?', 'bot');
  inputWrapper.innerHTML = `
  <button id="amenities" type="sbumit" class="chat-btn">Amenities </button>
  <button id="room-service" type="submit" class="chat-btn">Room service </button>
  <button id="wake-up" type="submit" class="chat-btn">Wake-up call </button>
  `
  document.getElementById('amenities').addEventListener('click',() => {
    showMessage(`I need amenities, please`, 'user')
    setTimeout( ()=> {
      preloader.style.display = "none";
     }, 2000);
    setTimeout(() => selectionAnswer('amenities'),2500);
})

  document.getElementById('room-service').addEventListener('click',() => {
    showMessage(`I need food, please`, 'user');
    setTimeout(() => selectionAnswer('room-service'),1500);
})

  document.getElementById('wake-up').addEventListener('click',() => {
    showMessage(`I need a wake-up-call.`, 'user')
    setTimeout(() => selectionAnswer('wake-up'),1500);
  })

}

// Question 3 - Bot asks what guest needs depending on what guest chose in helpselection

const selectionAnswer = (selection) => {
  if (selection === 'amenities') {         // If guest needs amenities 
    showMessage(`Sure, what do you need?`, 'bot');
    inputWrapper.innerHTML = `
    <button id="toothbrush" type="submit" class="chat-btn">Toothbrush & paste </button>
    <button id="shampoo" type="submit" class="chat-btn">Schampoo & Conditioner </button>
    <button id="toiletrykit" type="submit" class="chat-btn">Toiletry Kit </button>
    <button id="shavingkit" type="submit" class="chat-btn">Shaving Kit </button>
    `
    document.getElementById('toothbrush').addEventListener('click',() => {
      showMessage(`I need toothbrush and toothpaste`, 'user')
      setTimeout(() => goodbye('amenities'), 1800)
    })

    document.getElementById('shampoo').addEventListener('click',() => {
      showMessage(`I need shampoo and conditioner`, 'user')
      setTimeout(() => goodbye('amenities'), 1800)
    })

    document.getElementById('toiletrykit').addEventListener('click',() => {
      showMessage(`I need a toiletry kit`, 'user')
      setTimeout(() => goodbye('amenities'), 1800)
    })

    document.getElementById('shavingkit').addEventListener('click',() => {
      showMessage(`I need a shaving kit`, 'user')
      setTimeout(() => goodbye('amenities'), 1800)
    })
  }


  else if (selection === 'room-service') {      // If guest needs room-service
    showMessage(`Of course, what are you in the mood for?`, 'bot');
    inputWrapper.innerHTML = `
    <button id="pasta" type="submit" class="chat-btn">Pasta Carbonara </button>
    <button id="sallad" type="submit" class="chat-btn">Ceasar Salad</button>
    <button id="tomatoesoup" type="submit" class="chat-btn">Tomatoe Soup </button>
   `
    document.getElementById('pasta').addEventListener('click', () => {
      showMessage(`I would love some Pasta Carbonara`, 'user')
      setTimeout(() => goodbye('room-service'), 1800)
    }) 

    document.getElementById('sallad').addEventListener('click', () => {
      showMessage(`I would love a Ceasar Salad`, 'user')
      setTimeout(() => goodbye('room-service'), 1800)
    })

    document.getElementById('tomatoesoup').addEventListener('click', () => {
      showMessage(`I crave some Tomatoe Soup`, 'user')
      setTimeout(() => goodbye('room-service'), 1800)
    })
  }

  else if (selection === 'wake-up') {        // If guest needs a wake-up call
    showMessage('Sure, at what time?', 'bot');
    inputWrapper.innerHTML = `
      <form id="wakeUpForm"> 
        <input id="wakeUpInput" type="text" placeholder="wake-up time.."/>  
        <button id="send-btn" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  }
  
      document.getElementById('wakeUpForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const wakeUp = wakeUpInput.value
      showMessage(`Wake me up at ${wakeUp}`, 'user');
      wakeUpInput.value = '';
      
      if (wakeUp === '') {       // this will prompt the user to answer correctly
      setTimeout(() => showMessage(`Please, give me a time.`, 'bot'), 1500);
      } else {
      setTimeout(()=> goodbye('wake-up'), 1800);
  }
})

}

// Question 4 - Bot sends thank you message and ask 'Do you need anything else?'

const goodbye = (selection) => {

  if (selection === 'amenities') {
    showMessage(`We will send up those amenities for you right away. Do you need anything else?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="yes" type="sbumit" class="chat-btn">Yes, please </button>
    <button id="no" type="submit" class="chat-btn">No, thank you</button>
  `
   
  document.getElementById('yes').addEventListener('click', () => {      // If guest says yes
    showMessage(`Yes, I need something else`, 'user')
    setTimeout(() => helpSelection(), 1500)
  })

  document.getElementById('no').addEventListener('click', () => {     // If guest says no 
    showMessage(`No, thank you`, 'user')
    setTimeout(() => confirmation(), 1500)

  })

   }

  else if (selection === 'room-service') {
    showMessage(`Great choice! We will serve you room-service shortly. Do you need anything else?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="yes" type="sbumit" class="chat-btn">Yes, please </button>
    <button id="no" type="submit" class="chat-btn">No, thank you</button>
  `

  document.getElementById('yes').addEventListener('click', () => {   // If guest says yes
    showMessage(`Yes, I need something else`, 'user')
    setTimeout(() => helpSelection(), 1500)
  }) 

  document.getElementById('no').addEventListener('click', () => {    // If guest says no 
    showMessage(`No, thank you`, 'user')
    setTimeout(() => confirmation(), 1500)

  })

    
  }

  else if (selection === 'wake-up') {
    showMessage(`We will call you at the chosen time tomorrow. Do you need anything else?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="yes" type="sbumit" class="chat-btn">Yes, please </button>
    <button id="no" type="submit" class="chat-btn">No, thank you</button>
  `
  document.getElementById('yes').addEventListener('click', () => {   // If guest says yes
    showMessage(`Yes, I need something else`, 'user')
    setTimeout(() => helpSelection(), 1500)
  }) 

  document.getElementById('no').addEventListener('click', () => {   // If guest says no 
    showMessage(`No, thank you`, 'user')
    setTimeout(() => confirmation(), 1500)

  })

  }

  }


// Final confirmation message


const confirmation = () => {
  showMessage('Ok, thank you for using our chat. Have a nice day!', 'bot')
  inputWrapper.innerHTML = `
  <p class="p-bye-msg"> Bye bye </p>
  `
}



// Set up your eventlisteners here

form.addEventListener('submit', handleFormInput) 


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 600)