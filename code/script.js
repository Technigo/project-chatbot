// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const theWholeForm = document.getElementById('form-wrapper');
const inputFromForm = document.getElementById('input-ID')
const submitFormButton = document.getElementById('send-btn')
const soundEffect = document.getElementById('message-sound')

let questionNumber = 1;
// const FlowerChoice = 1;
// const typeOfArrangement = 2;
// const flowerSelector = 3;
// const finalConfirmation = 4;

const questionHandler = (message) => {
  showMessage(message, 'user');
  playSound ()
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

const playSound = () => {
  soundEffect.play()
}

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
  questionNumber = 1;
  showMessage(`Hello there, What's your name?`, 'bot');
  theWholeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = inputFromForm.value;
    questionHandler (name);
  });
}


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

const showTypeOfArrangement = (type) => {
  questionNumber++;
  showMessage (`Wonderful! I always loved flowes in a ${type}. We have the following options for the ${type}`, 'bot');
  if (type === 'bouquet'){
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="" selected disabled>Choose bouquet</option>  
        <option value="Cascade bouquet">Cascade bouquet</option>
        <option value="Round bouquet">Round bouquet</option>
        <option value="Hand-Tied bouquet">Hand-Tied bouquet</option>
      </select>  `
  } else if (type === 'basket') {
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="" selected disabled>Choose basket</option>
        <option value="Classic basket">Classic basket</option>
        <option value="Vintage basket">Vintage basket</option>
        <option value="Village basket">Village basket</option>
      </select>  `
  } else {
    theWholeForm.innerHTML = `
      <select id="selector" class="general-selector">
        <option value="" selected disabled>Choose box</option>  
        <option value="Round-shaped box">Round-shaped box</option>
        <option value="Heart-haped box">Heart-haped box</option>
        <option value="Square-shaped box">Square-shaped box</option>
      </select>  `
  }
  const selectorChoice = document.getElementById('selector');
  selectorChoice.addEventListener('change', () => questionHandler(selectorChoice.value))
};

const showFlowerSelector = (arrangement) => {
  questionNumber++;
  showMessage (`What flowers would you like in your ${arrangement}? We have the following options`, 'bot');
  theWholeForm.innerHTML = `
    <select id="flower-selector"> 
      <option value="" selected disabled>Choose flowers</option> 
      <option value="roses">&#x1F339 Roses</option>
      <option value="tulips">&#x1F337 Tulips</option>
      <option value="lilies">&#x1F33ALilies</option>
      <option value="sunflowers">&#x1F33B Sunflowers</option>
    </select>
    `
  const selectorChoiceTwo = document.getElementById('flower-selector');
  selectorChoiceTwo.addEventListener('change', () => questionHandler(selectorChoiceTwo.value))
}; 

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
    console.log('clickyes');
    //another console log :----)
    questionHandler('Yes');
  });  
  document.getElementById("no-button").addEventListener('click', () => { 
    location.reload('No');
    //added location.reload to reload page
  });
};

const thankYou = () => {
  theWholeForm.innerHTML = `
  <img class="final-flower" src = "./assets/6IQS.gif"> `;
  //removed the buttons by changing the content to '' ie nothing. Not sure if that's
  //the right approach. 
  showMessage('Thank you for your order. Have a great day!', 'bot');
  //added this function - not sure if it's ok?
}


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