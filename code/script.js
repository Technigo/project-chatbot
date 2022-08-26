// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendBtn = document.querySelector('.send-btn');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
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
// greeting from Wiledbeest Burgers
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Why hello there, welcome to Wildebeest Burgers. What's your name", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

const showFoodOptions = (userName) => {
  showMessage(`Okay ${userName}, I'm gonna call you Susan. Can I take your order Susan?`, 'bot')
  inputWrapper.innerHTML = `
    <button class="burgersBtn">Burgers</button>
    <button class="veggieBtn">Veggie Burgers</button>
    <button class="saladBtn">Salad</button>
  `
  document.querySelector('.burgersBtn').addEventListener('click', () => {
  showMessage('Yes, I would like a burger', 'user')
  setTimeout(() => showMenu('burger'), 1000)
  })
  document.querySelector('.veggieBtn').addEventListener('click', () => {
  showMessage('Yes, I would like a veggie burger', 'user')
  setTimeout(() => showMenu('veggie burger'), 1000)
  })
  document.querySelector('.saladBtn').addEventListener('click', () => {
  showMessage('Yes, I would like a salad', 'user')
  setTimeout(() => showMenu('salad'), 1000)
  })
}

const showMenu = foodType => {
  showMessage(`Which ${foodType} would you like?`, 'bot')

  if (foodType === 'burger') {
  inputWrapper.innerHTML = `
  <select id="select">
    <option value selected disabled>👇 Select a burger...</option>
    <option value='"The beest" burger'>"The beest" burger</option>
    <option value="BBQ burger">BBQ burger</option>
    <option value="Fresh burger">Fresh burger</option>
  </select>
  `
  }
  if (foodType === 'veggie burger') {
  inputWrapper.innerHTML = `
  <select id="select">
    <option value selected disabled>👇 Select a veggie burger...</option>
    <option value="Ketchup burger without burger">Ketchup burger without burger</option>
    <option value="Burger with Goat Cheese and Arugula">Burger with Goat Cheese and Arugula</option>
    <option value="Totally vegetarian burger ™">Totally vegetarian burger ™</option>
  </select>
  `
  }
  if (foodType === 'salad') {
  inputWrapper.innerHTML = `
  <select id="select">
    <option value selected disabled>👇 Select a salad...</option>
    <option value='Wildebeest salad deluxe'>Wildebeest salad deluxe</option>
    <option value="Green lettuce tasty salad">Green lettuce tasty salad</option>
    <option value="Surprise salad with chicken-like meat">Surprise salad with chicken-like meat</option>
  </select>
  `
  }
  // user answer
  // eventListner on all buttons
  // call next function set timeOut
  document.getElementById('select').addEventListener('change', () => {
    showMessage(select.value, 'user')
    setTimeout(showSideMenu, 1000)
  })
}

const showSideMenu = () => {
  // bot reply
  // new buttons for sideOrders
  // eventListner buttons
  // call on knock knock joke =)
  showMessage('Excellent choice, and also my personal favorite! What side order would you like with that?', 'bot')
  inputWrapper.innerHTML = `
  <button id="fries">🥤🍟 </but ton>
  <button id="apple">🥤🍏 </button>
  <button id="carrots">🥤🥕</button>
  `
  const replySides = sideOrder => {
    showMessage(sideOrder, 'user')
    setTimeout(knockJoke, 2500)
  }
  document.getElementById('fries').addEventListener('click', ()=> replySides('I would like drink and fries'))
  document.getElementById('apple').addEventListener('click', ()=> replySides('I would like drink and apple slices'))
  document.getElementById('carrots').addEventListener('click', ()=> replySides('I would like drink and baby carrots'))

}

const knockJoke =() => {
  showMessage('Knock, knock', 'bot')
  inputWrapper.innerHTML = `
  <button id="come-in"> Come in! </button>
  <button id="who-there"> Who's there? </button>
  <button id="what"> I'm sorry, what? </button>
  `
  // sorry, what
  document.getElementById('what').addEventListener('click', () => {
  showMessage("I'm sorry, what?", 'user')
  setTimeout(knockJoke, 1000)  
  } )

  // come in
  document.getElementById('come-in').addEventListener('click', () => {
    showMessage("Come in!", 'user')
    setTimeout(() => {
      showMessage('Thanks!', 'bot')
      setTimeout(confirmOrder,1000)
      }, 1000)
  } )
  // Who's there

  document.getElementById('who-there').addEventListener('click', () => {
    showMessage("Who's there?", 'user')
    setTimeout(joke, 1000)
  })
}

const joke = () => {
  showMessage('Europe', 'bot')
  inputWrapper.innerHTML = `
  <button id="come-in"> Come in! </button>
  <button id="europe"> Europe who? </button>
  <button id="order"> Can we get back to my order? </button>
  `
  // come in II
  document.getElementById('come-in').addEventListener('click', () => {
    showMessage("Come in!", 'user')
    setTimeout(() => {
      showMessage('Thanks!', 'bot')
      setTimeout(confirmOrder,1000)
      }, 1000)
  } )
  // Joke
  document.getElementById('europe').addEventListener('click', () => {
    showMessage("Europe who?", 'user')
    setTimeout(() => {
      showMessage("No YOU’RE A POO!", 'bot')
      setTimeout(confirmOrder,1000)
      }, 1000)
  } )
  // Get back to order
  document.getElementById('order').addEventListener('click', () => {
    showMessage("Can we get back to my order?", 'user')
    setTimeout(sassyBot, 1000)
  })

}

const sassyBot = () => {
  showMessage("If you’re gonna be like that then I don’t want to help you", 'bot')
  inputWrapper.innerHTML = `
  <button id="fine"> Fine, Europe who? </button>
  <button id="ticked-off"> Okay I’m going to Hippo Burgers across the street, bye. </button>
  `
  document.getElementById('fine').addEventListener('click', () => {
    showMessage("Europe who?", 'user')
    setTimeout(() => {
      showMessage("No YOU’RE A POO!", 'bot')
      setTimeout(confirmOrder,1000)
      }, 1000)
  } )

  document.getElementById('ticked-off').addEventListener('click', () => {
    showMessage("Okay I’m going to Hippo Burgers across the street, bye.", 'user')
    setTimeout(reload, 1000)
  } )
}

// confirm order
// readback total order

const confirmOrder = () => {
  showMessage("Are you happy with this order?", 'bot')
  inputWrapper.innerHTML = `
  <button id="yes"> Yes, very happy! </button>
  <button id="no"> Not happy.. </button>
  `
  document.getElementById('yes').addEventListener('click', () => {
    showMessage("Yes very happy!", 'user')
    setTimeout(end, 1000)
  })

  document.getElementById('no').addEventListener('click', () => {
    showMessage("Not happy at all..", 'user')
    setTimeout(reload, 1000)
  })
}

// Reload

const reload = () => location.reload()

// The End

const end = () => {
  showMessage('Thank you Susan your order will be ready in a jiff!', 'bot')
  inputWrapper.innerHTML = ''
}

// Set up your eventlisteners here
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const userName = nameInput.value
  showMessage(`My name is ${userName}`,'user');

  // Clears the input field
  nameInput.value = '' 

  setTimeout(() => showFoodOptions(userName), 1000)
})


// Starts the initial greeting
setTimeout(greeting, 1000);
// knockJoke()

//lördag, fördröjning punchline
// css buttons, css ändra style bakgrund, stl ruta osv 
// ta bort onödiga komentarer
// refaktorering