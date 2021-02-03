// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const theWholeForm = document.getElementById('form-wrapper');
const inputFromForm = document.getElementById('input-ID')
const submitFormButton = document.getElementById('send-btn')

// Global variables, if you need any, declared here
// let questionNumber = 1;
const FLOWER_CHOICE = 1
const TYPE_OF_ARRANGEMENT = 2
const FLOWER_SELECTOR = 3
const FINAL_CONFIRMATION = 4

const questionHandler = (message, questionNumber) => {
  showMessage(message, 'user');
  if (questionNumber === 1) {
    showFlowerChoice(message);

  } else if (questionNumber === 2) {
    // showMessage(message,'user');
    showTypeOfArrangement(message) ;
  }
  else if(questionNumber === 3) {
    // showMessage(message, 'user');
    showFlowerSelector (message);
  }
  else if (questionNumber === 4) {
    // showMessage(message, 'user');
    showFinalConfirmation (message);

  } else {
    // showMessage(message, 'user');
    thankYou()
  }
};

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  // questionNumber = 1;
  showMessage(`Hello there, What's your name?`, 'bot');
  theWholeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = inputFromForm.value;
    questionHandler (name, 1);
  });
}


const showFlowerChoice = (message) =>{
  // questionNumber++; 
  showMessage (`Hello, ${message}, What flower arrangement would you like today?`,'bot'); 
  theWholeForm.innerHTML = `
    <button class="arrangement-button" id="bouquet">Bouquet</button>
    <button class="arrangement-button" id="basket">Basket</button>
    <button class="arrangement-button" id="box">Box</button>
  `
  const questionNumber = 2
  document.getElementById("bouquet").addEventListener('click', () => {
    questionHandler('bouquet', questionNumber);
  });
  document.getElementById("basket").addEventListener('click', () => {
    questionHandler('basket', questionNumber);
  });
  document.getElementById("box").addEventListener('click', () => {
    questionHandler('box', questionNumber);;
  }); 
};

const showTypeOfArrangement = (type) => {
  // questionNumber++;
  showMessage (`Wonderful! I always loved flowes in a ${type}. We have the following options for the ${type}`, 'bot');
  if (type === 'bouquet'){
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="Cascade bouquet">Cascade bouquet</option>
        <option value="Round bouquet">Round bouquet</option>
        <option value="Hand-Tied bouquet">Hand-Tied bouquet</option>
      </select>  `
  } else if (type === 'basket') {
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="Classic">Classic basket</option>
        <option value="Vintage basket">Vintage basket</option>
        <option value="Village basket">Village basket</option>
      </select>  `
  } else {
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="Round-shaped box">Round-shaped box</option>
        <option value="Heart-haped box">Heart-haped box</option>
        <option value="Square-shaped box">Square-shaped box</option>
      </select>  `
  }
  const selectorChoice = document.getElementById('selector');
  selectorChoice.addEventListener('change', () => questionHandler(selectorChoice.value, 3))
};

const showFlowerSelector = (arrangement) => {
  // questionNumber++;
  showMessage (`What flowers would you like in you ${arrangement}? We have the following options`, 'bot');
  theWholeForm.innerHTML = `
    <select id="flower-selector"> 
      <option value="" selected disabled>Choose flowers</option> 
      <option value="roses">Roses</option>
      <option value="tulips">Tulips</option>
      <option value="lilies">Lilies</option>
      <option value="sunflowers">Sunflowers</option>
    </select>
    `
  const selectorChoiceTwo = document.getElementById('flower-selector');
  selectorChoiceTwo.addEventListener('change', () => questionHandler(selectorChoiceTwo.value, 4))
}; 

const showFinalConfirmation = (flowers) => {
  // questionNumber++;
  showMessage (`Oh, aren't ${flowers} beautiful!!!. I will prepare your order shortly`, 'bot');
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
  showMessage (`Great! The price for your ${flowers} will be ${price}`, 'bot')
  theWholeForm.innerHTML = `
    <button class="confirmation-button" id="yes-button">Yes</button>
    <button class="confirmation-button" id="no-button" type="reset">No</button>
  `
  document.getElementById("yes-button").addEventListener('click', () => { 
    questionHandler ('Yes', 5)
  });
  };



// Starts here with the greeting function on timeout

setTimeout(greeting, 1000);
// Set up your eventlisteners here



// showMessage (formInputMessage, 'user');
//   setTimeout (() => showMessage(`Hello, ${formInputMessage}, what flower arrangement would you like today?`, 'bot'), 1000);
//   setTimeout (() => showFlowerChoice(), 2000);
//   formAnswer.addEventListener('submit', () => {
//     showFlowerSelector();})
// });


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.