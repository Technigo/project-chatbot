// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('room-form');
const roomInput = document.getElementById('room-input'); //user writes their room
const sendBtn = document.getElementById('send-btn');
const collapse = document.getElementsByClassName("main-collapse");
const wakeUpInput = document.getElementById('wakeUpinput');
const wakeUpForm = document.getElementById('wakeUp-form');

  
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will open and close chatbar //not workning right now
  
  for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}
// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/guest.svg" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log('bot-message') //added console log
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/hotel-svgrepo-com.svg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Conversations starts here

// Question 1 - What is your room number?

const greeting = () => {
  showMessage("Welcome to Hotel Vosje. What is your room number?", 'bot'); 
};

// Answer with room number from user 

const handleFormInput = (event) => {        // at submit this function will be invoked
  event.preventDefault()        // prevents website refresh at submit
  const room = roomInput.value        // input value will be stored in the const name
  showMessage(`My room number is ${room}`, 'user')      // users answer 
  roomInput.value = ''        // clearing room input setting it to an empty string

  if (room === '') {       // this will prompt the user to answer correctly
    setTimeout(() => showMessage(`Please, give me your room number.`, 'bot'), 1000) 
  }
  else{
    setTimeout(() => helpSelection(room), 1000)
  }
}


// Question 2 - What do you need help with today?

const helpSelection = (room) => {
  showMessage(`Hello room ${room}, what can I help you with today?`, 'bot');
  inputWrapper.innerHTML = `
  <button id="amenities" type="sbumit" class="chat-btn">Amenities </button>
  <button id="room-service" type="submit" class="chat-btn">Room service </button>
  <button id="wake-up-call" type="submit" class="chat-btn">Wake-up call </button>
  `
  document.getElementById('amenities').addEventListener('click',() => {
    showMessage(`I need amenities, please`, 'user')
    setTimeout(() => selectionAnswer ('amenities'),1000);
})

  document.getElementById('room-service').addEventListener('click',() => {
    showMessage(`I need food, please`, 'user')
    setTimeout(() => selectionAnswer ('room-service'),1000)
})

  document.getElementById('wake-up-call').addEventListener('click',() => {
    showMessage(`I need a wake-up-call.`, 'user')
    setTimemout(() => selectionAnswer ('wake-up-call'),1000);
  })

}

// functions for what the guest chooses

const selectionAnswer = (selection) => {

  if (selection === 'amenities') {
    showMessage(`Sure, what do you need?`, 'bot');
    inputWrapper.innerHTML = `
    <button id="toothbrush" type="submit" class="chat-btn">Toothbrush & paste </button>
    <button id="shampoo" type="submit" class="chat-btn">Schampoo & Conditioner </button>
    <button id="toiletrykit" type="submit" class="chat-btn">Toiletry Kit </button>
    <button id="shavingkit" type="submit" class="chat-btn">Shaving Kit </button>
    `
    document.getElementById('toothbrush').addEventListener('click',() => {
      showMessage(`I need toothbrush and toothpaste`, 'user')
      setTimeout(() => goodbye ('amenities'), 2000)
    })

    document.getElementById('shampoo').addEventListener('click',() => {
      showMessage(`I need shampoo and conditioner`, 'user')
      setTimeout(() => goodbye ('amenities'), 2000)
    })

    document.getElementById('toiletrykit').addEventListener('click',() => {
      showMessage(`I need a toiletry kit`, 'user')
      setTimeout(() => goodbye ('amenities'), 2000)
    })

    document.getElementById('shavingkit').addEventListener('click',() => {
      showMessage(`I need a shaving kit`, 'user')
      setTimeout(() => goodbye('amenities'), 2000)
    })
    

  }

  else if (selection === 'room-service') {
    showMessage(`Of course, what are you in the mood for?`, 'bot');
    inputWrapper.innerHTML = `
    <button id="pasta" type="submit" class="chat-btn">Pasta Carbonara </button>
    <button id="sallad" type="submit" class="chat-btn">Ceasar Salad</button>
    <button id="tomatoesoup" type="submit" class="chat-btn">Tomatoe Soup </button>
   `
    document.getElementById('pasta').addEventListener('click', () => {
      showMessage(`I would love some Pasta Carbonara`, 'user')
      setTimeout(() => goodbye('room-service'), 2000)
    }) 

    document.getElementById('sallad').addEventListener('click', () => {
      showMessage(`I would love a Ceasar Salad`, 'user')
      setTimeout(() => goodbye ('room-service'), 2000)
    })

    document.getElementById('tomatoesoup').addEventListener('click', () => {
      showMessage(`I crave some Tomatoe Soup`, 'user')
      setTimeout(() => goodbye('room-service'), 2000)
    })
  }

  else if (selection === 'wake-up-call') {   
    showMessage(`Sure, at what time?`, 'bot');
    inputWrapper.innerHTML = `
      <form id="wakeUp-form"> 
        <input id="wakeUpInput" type="text" placeholder="wake-up time.."/>  
        <button id="send-btn" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
    document.getElementById(wakeUpInput).addEventListener('submit', () => {
      showMessage(`Wake me up at ${wakeUpInput.value}`, 'user')
      setTimeout(() => goodbye('wake-up-call'), 1000)
    })
  }
  
}

// Thank you message and asking if anything else is needed?

const goodbye = (selection) => {

  if (selection === 'amenities') {
    showMessage(`We will send up those amenities for you right away. Do you need anything else?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="yes" type="sbumit" class="chat-btn">Yes, please </button>
    <button id="no" type="submit" class="chat-btn">No, thank you</button>
  `
    setTimeout(() => anythingElse(goodbye), 2000)
  }

  else if (selection === 'room-service') {
    showMessage(`Great choice! We will serve you room-service shortly. Do you need anything else?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="yes" type="sbumit" class="chat-btn">Yes, please </button>
    <button id="no" type="submit" class="chat-btn">No, thank you</button>
  `
    setTimeout(() => anythingElse(goodbye), 2000)
  }

  else if (selection === 'wake-up-call') {
    showMessage(`We will call you at the chosen time tomorrow. Do you need anything else?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="yes" type="sbumit" class="chat-btn">Yes, please </button>
    <button id="no" type="submit" class="chat-btn">No, thank you</button>
  `
    setTimeout(() => anythingElse(goodbye), 2000)
  }

}

// Yes and no buttons for anything else? 

const anythingElse = (goodbye) => {
  inputWrapper.innerHTML = `
  <button id="yes" type="sbumit" class="chat-btn">Yes, please </button>
  <button id="no" type="submit" class="chat-btn">No, thank you</button>
`
document.getElementById('yes').addEventListener('click',() => goodbye ('yes'));
document.getElementById('no').addEventListener('click',() => goodbye ('no'));

}


// If the guest needs something else 


// if the guest don't need something else

const confirmation = (anythingElse) => {
  showMessage(`${anythingElse === 'no'}`, 'user')
  setTimeout(() => showMessage('Thank you for using our chatbot. Have a nice day!', 'bot'))
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