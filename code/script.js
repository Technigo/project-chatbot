// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendBtn = document.querySelector('.send-btn');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

const nickname = getRandomName(); // returns a name from the nameArray


// Declare your functions after this comment
function getRandomName() {
  const nameArray = ['Susan', 'Carol', 'Pumpkin', 'Muffin', 'Princess']
  const randomNumber = Math.trunc(Math.random() * 5); // Between 0 and 4
  return nameArray[randomNumber]
}

// 0.45 * 5 = 2.25 = 2
// 0.9 * 5 = 4.5 = 4

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/Hippo.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/Waiter3.png" alt="Bot" />
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
  showMessage("Why hello there, welcome to Wildebeest Burgers. What's your name", 'bot');
}


const showFoodOptions = (userName) => {
  showMessage(`Okay ${userName !== '' ? userName : 'Slim shady'}, I'm gonna call you ${nickname}. Can I take your order ${nickname}?`, 'bot')
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

  let option1, option2, option3;

  if(foodType === 'burger') {
    option1 = `"The beest" burger`
    option2 = `BBQ burger`
    option3 = `Fresh burger`
  } else if (foodType === 'veggie burger'){
    option1 = `Ketchup burger without burger`
    option2 = `Burger with Goat Cheese and Arugula`
    option3 = `Totally vegetarian burger ™`
  } else {
    option1 = `Wildebeest salad deluxe`
    option2 = `Green lettuce tasty salad`
    option3 = `Surprise salad with chicken-like meat`
  }

  inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a ${foodType}...</option>
        <option value='${option1}'>${option1}</option>
        <option value='${option2}'>${option2}</option>
        <option value='${option3}'>${option3}</option>
      </select>
    `;

  document.getElementById('select').addEventListener('change', () => {
    showMessage(select.value, 'user')
    setTimeout(showSideMenu, 1000)
  })
}


const showSideMenu = () => {
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
    setTimeout(() => showMessage('Thanks!', 'bot'), 1000)
    setTimeout(confirmOrder,3000)
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
    setTimeout(() => showMessage('Thanks!', 'bot'), 1000)
    setTimeout(confirmOrder,3000)
  } )

  // Punchline
  document.getElementById('europe').addEventListener('click', () => {
    showMessage("Europe who?", 'user')
    setTimeout(() => {
      showMessage("No YOU’RE A POO!", 'bot')
      }, 1000)
      setTimeout(confirmOrder,3000)
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
  // Punchline II
  document.getElementById('fine').addEventListener('click', () => {
    showMessage("Fine, Europe who?", 'user')
    setTimeout(() => {
      showMessage("No YOU’RE A POO!", 'bot')
      }, 1000)
      setTimeout(confirmOrder,3000)
  } )

  // Reload
  document.getElementById('ticked-off').addEventListener('click', () => {
    showMessage("Okay I’m going to Hippo Burgers across the street, bye.", 'user')
    setTimeout(reload, 1000)
  } )
}

// confirm order
const confirmOrder = () => {
  showMessage("Are you happy with this order?", 'bot')
  inputWrapper.innerHTML = `
  <button id="yes"> Yes, very happy! </button>
  <button id="no"> Not happy.. </button>
  `
  // The end
  document.getElementById('yes').addEventListener('click', () => {
    showMessage("Yes very happy!", 'user')
    setTimeout(end, 1000)
  })

  // Reload II
  document.getElementById('no').addEventListener('click', () => {
    showMessage("Not happy at all..", 'user')
    setTimeout(reload, 1000)
  })
}


const reload = () => location.reload()


const end = () => {
  showMessage(`Thank you ${nickname} your order will be ready in a jiff!`, 'bot')
  inputWrapper.innerHTML = ''
}

// Initial button click 
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
