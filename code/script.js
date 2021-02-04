// All the DOM selectors stored as short variables
const theWholeForm = document.getElementById('form-wrapper');
const submitButton = document.getElementById('submit-ID') 

//global variable
let questionNumber = 1;

//questionHandler function, passes the input from the user, 
//plays sound effect and calls the functiond depending on the question number 
const questionHandler = (message) => {
  showMessage(message, 'user');
  playSound ()
  switch (questionNumber) {
  case 1: 
    showFlowerChoice(message); 
    break;
  case 2: 
    showTypeOfArrangement(message);
    break;
  case 3: 
    showFlowerSelector (message);
    break;
  case 4: 
    showFinalConfirmation (message);
    break;
  default:
    thankYou()
    break;
  }
};
//Function that plays sound effect
const playSound = () => {
  const soundEffect = document.getElementById('message-sound')
  soundEffect.play()
}
//Function that shows messages
const showMessage = (message, sender) => {
  const chat = document.getElementById('chat');
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
  chat.scrollTop = chat.scrollHeight
}
//Greeting function
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot');
}
// Function that takes adds event listener to the form submission
const initFncn = () => {
  const inputFromForm = document.getElementById('input-ID');
  theWholeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    questionNumber = 1;
    const name = inputFromForm.value;
    questionHandler (name);
  })
}

// Function that shows flower arrangement choices
const showFlowerChoice = (message) =>{
  questionNumber++; 
  showMessage (`Hello, ${message}, What flower arrangement would you like today?`,'bot'); 
  theWholeForm.innerHTML = `
    <button class="arrangement-button" id="bouquet">Bouquet</button>
    <button class="arrangement-button" id="basket">Basket</button>
    <button class="arrangement-button" id="box">Box</button>
  `
  document.getElementById("bouquet").addEventListener('click', () => {
    questionHandler('bouquet');
  });
  document.getElementById("basket").addEventListener('click', () => {
    questionHandler('basket');
  });
  document.getElementById("box").addEventListener('click', () => {
    questionHandler('box');;
  }); 
};

//Function that shows different types of flower arrangements depending on the choice of bouquet/basket/box
const showTypeOfArrangement = (type) => {
  questionNumber++;
  showMessage (`Wonderful! I always loved flowes in a ${type}. We have the following options for the ${type}`, 'bot');
  if (type === 'bouquet'){
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="" selected disabled>&#8681 Choose bouquet</option>  
        <option value="Cascade bouquet">Cascade bouquet</option>
        <option value="Round bouquet">Round bouquet</option>
        <option value="Hand-Tied bouquet">Hand-Tied bouquet</option>
      </select>  `
  } else if (type === 'basket') {
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="" selected disabled>&#8681 Choose basket</option>
        <option value="Classic basket">Classic basket</option>
        <option value="Vintage basket">Vintage basket</option>
        <option value="Village basket">Village basket</option>
      </select>  `
  } else {
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="" selected disabled>&#8681 Choose box</option>  
        <option value="Round-shaped box">Round-shaped box</option>
        <option value="Heart-shaped box">Heart-shaped box</option>
        <option value="Square-shaped box">Square-shaped box</option>
      </select>  `
  }
  const selectorChoice = document.getElementById('selector');
  selectorChoice.addEventListener('change', () => questionHandler(selectorChoice.value))
};

//Function shows selection of flowers available
const showFlowerSelector = (arrangement) => {
  questionNumber++;
  showMessage (`What flowers would you like in your ${arrangement}? We have the following options`, 'bot');
  theWholeForm.innerHTML = `
    <select id="flower-selector" class="general-selector"> 
      <option value="" selected disabled>&#8681 Choose flowers</option> 
      <option value="roses">&#x1F339 Roses</option>
      <option value="tulips">&#x1F337 Tulips</option>
      <option value="lilies">&#x1F33ALilies</option>
      <option value="sunflowers">&#x1F33B Sunflowers</option>
    </select>
    `
  const selectorChoiceTwo = document.getElementById('flower-selector');
  selectorChoiceTwo.addEventListener('change', () => questionHandler(selectorChoiceTwo.value))
}; 

//Function that shows the price and asks for final confirmation or restart of the order
const showFinalConfirmation = (flowers) => {
  questionNumber++;
  showMessage (`Oh, aren't ${flowers} beautiful!!!`, 'bot');
  let price 
  const showPrice = (flowers_) => {
      if (flowers_ === 'roses'){
        price = 'SEK500';
      } else if(flowers_ === 'tulips') {
        price = 'SEK200';
      } else if(flowers_ === 'lilies') {
        price = 'SEK700';
      } else {
        price = 'SEK900';
      }
    }
    showPrice(flowers)
  showMessage (`The price for your ${flowers} will be ${price}. 
                Do you want to place an order?`, 'bot')
  theWholeForm.innerHTML = `
    <button class="confirmation-button" id="yes-button">Yes</button>
    <button class="confirmation-button" id="no-button">No</button>
    `
              
  document.getElementById("yes-button").addEventListener('click', () => { 
    questionHandler('Yes');
  });  
  document.getElementById("no-button").addEventListener('click', () => { 
    location.reload('No');
    //added location.reload to reload page
  });
};


//Function that shows the "thank you message and gif"
const thankYou = () => {
  theWholeForm.innerHTML = `
  <img class="final-flower" src = "./assets/4bXC.gif"> `;
  //put picture instead. 
  showMessage('Thank you for your order. Have a great day!', 'bot');
  //added this function - not sure if it's ok?
}


// Starts here with the greeting function on timeout
initFncn();
setTimeout(greeting, 1000);

