// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
//const emailForm = document.getElementById('email-form');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');//
const inputWrapper = document.getElementById('input-wrapper');
//const chatToggle = document.getElementById('js-chat-toggle');
//const chatContainer = document.getElementById('js-chat-container')

const chatToggle = document.getElementById('js-chat-toggle');
const chatContainer = document.getElementById('js-chat-container')

// If you need any global variables that you can use across different functions, declare them here:

//let userEmail = '';
let userName = '';
const choice = '';
const yourPrice = '';

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is. I think?
const showMessage = (message, sender) => {

  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user1.png" alt="User" />  
      </section>
    `
  }
  else if (sender === 'bot') {
    console.log(sender);
    console.log(message);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>`
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
// here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender

const greetUser = () => {
  showMessage(`Hello there!`, 'bot')
  showMessage(`I'm Anna, a chatbot.`, 'bot')
  showMessage(`What's your name?`, 'bot')
}

const userNameInput = event => {
  event.preventDefault();
  //I think the name is saved for later, but is it saved globally?
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(` ${userName}`, "user");
  setTimeout(() => reply(userName), 500);
  setTimeout(() => askForChoise(), 1200);
};


//Bot's welcome message with username pops up. Asks user to make a choise.
function reply(firstReply) {
  showMessage(`Welcome to 'Elbines-Plants' ${userName}!`, 'bot')
}

//I wanted a delay between the messages, thats why they are in two functions
const askForChoise = (YesNo) => {
  //Do I need to type anything in ()?
  showMessage(`We can help you by selecting some options for you based on your preferences. <br><br> Would you like to continue?`, 'bot')
  //Buttons Yes No  will appear

  inputWrapper.innerHTML = //(When) shoud i use value (or class) instead of ID?
    `
    <button class="send-btn" id="Yes">YES</button> 
    <button class="send-btn" id="No">NO</button>
    `;

  //Adding eventlisteners to buttons
  const choiseButtons = inputWrapper.querySelectorAll('.send-btn');
  choiseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const choicIsMade = event.target.id
      //console.log(choicIsMade)
      showMessage(`${choicIsMade}`, 'user')
      handleYesNoChoice(choicIsMade); //DID NOT WORK WITHOUT THIS
      //setTimeout(handleYesNoChoice, 1000)
      //setTimeout(() => handleYesNoChoice(choicIsMade), 1000)
    })
  })
  chat.scrollTop = chat.scrollHeight
}


function handleYesNoChoice(choice) {
  inputWrapper.innerHTML = ''


  if (choice === 'Yes') {
    showMessage(`Please select a catagory from below:`, 'bot')
    const plantCategory = ['Green Plants', 'Flowers', 'Plant Supplies']
    showOptionsPlantCat(plantCategory)
  } else if (choice === 'No') {
    showMessage(`Ok, I understand. Feel free to browse our webpage. If you need help be sure to ask!`, 'bot')
  }
  chat.scrollTop = chat.scrollHeight
}

function showOptionsPlantCat(options) {
  inputWrapper.innerHTML = '';

  options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'send-btn';
    button.textContent = option;
    button.addEventListener('click', () => {
      showMessage(`You have selected ${option}.`, 'bot');
      setTimeout(() => askPriceRange(option), 500)
      //So I can use selected oprion in the next function
    });
    inputWrapper.appendChild(button);
  });
}

function askPriceRange(option) {
  showMessage(`What is your price range for ${option}:`, 'bot')


  //Drop down menu 
  inputWrapper.innerHTML = `
  <select id="price-select">
  <option value="">Please choose an option:</option>
  <option value="PriceRange1">From 100 - 300,- </option>
  <option value="PriceRange2">From 300 - 500,- </option>
  <option value="PriceRange3">From 500 - 1000,- </option>
  <option value="PriceRange4">1000,- and up </option>
  </select>
  `;

  select = document.getElementById("price-select")

  const priceSelected = document.getElementById('price-select')
    //Adding eventlisteners to option range 1

    .addEventListener('change', (event) => {
      //Storing the value of the event target by redeclaring global variabel
      selectedPriRan = event.target.value


      //User reply comes up
      select.remove() //Removing the buttons to make the chat look closed.
      //Invokes bot's next message
      setTimeout(() => confirmPriceRange(priceSelected), 500)
    })
}

const confirmPriceRange = (priceRange) => {
  //Bot replying to alternative 1
  if (selectedPriRan === 'PriceRange1') {
    selectedPriRan = "100 - 300kr"
    showMessage(`I'm thinking between ${selectedPriRan}`, 'user')
    setTimeout(() => showMessage(`Great! I will select some great options (in the price range ${selectedPriRan}) for you. I hope you love them as much as I do!`, 'bot'), 700)
  }
  else if
    (selectedPriRan === 'PriceRange2') {
    selectedPriRan = "300 - 500kr"
    showMessage(`I'm thinking between ${selectedPriRan}`, 'user')
    setTimeout(() => showMessage(`How fun! I will select some great options (in the price range ${selectedPriRan}) for you. I hope you love them as much as I do!`, 'bot'), 700)
  }
  else if
    (selectedPriRan === 'PriceRange3') {
    selectedPriRan = "500 - 1000kr"
    showMessage(`I'm thinking between ${selectedPriRan}`, 'user')
    setTimeout(() => showMessage(`How exciting! I will select some great options (in the price range ${selectedPriRan}) for you. I hope you love them as much as I do!`, 'bot'), 700)
  }
  else if
    (selectedPriRan === 'PriceRange4') {
    selectedPriRan = "1000kr and up"
    showMessage(`I'm thinking between ${selectedPriRan}`, 'user')
    setTimeout(() => showMessage(`Wow, now we're talking! I will select some amazing options (in the price range ${selectedPriRan}) for you. I just know you'll love them!`, 'bot'), 700)
  }
  /*
  
      //Bot replying to alternative 2
    } else if (priceRange === 'range-2') {
      selectedPriceRange = "50 to 100€"
      showMessage(`Amazing! It must be quite a special friend!`, 'bot')
    }*/

  //Invoking question about colour
  setTimeout(() => lastStepBtn(), 1000)
}


const lastStepBtn = () => {

  //event listener for this question is logSubmit
  //setTimeout(lastStep, 1000);


  inputWrapper.innerHTML = //(When) shoud i use value (or class) instead of ID?
    `
    <button class="send-btn" id="pick-up">PICK UP</button> 
    <button class="send-btn" id="delivery">DELIVERY</button>
    `;
  chat.scrollTop = chat.scrollHeight

  const confirmBtndelivery = inputWrapper.querySelectorAll('.send-btn');
  confirmBtndelivery.forEach(button => {
    button.addEventListener('click', (event) => {
      let delPickUpchoise = event.target.id
      console.log(delPickUpchoise)
      inputWrapper.innerHTML = '' //clear buttons

      if (delPickUpchoise === `pick-up`) {
        delPickUpchoise = "pick up"
        showMessage(`I want to ${delPickUpchoise} myself.`, 'user')
        showMessage(`I will arrange that for you!`, `bot`)
        showMessage(`Just one last thing:<br><br>I will need your e-mail and your full name so that I can send you the options I selected for you.`, 'bot')
      }
      else if (delPickUpchoise === `delivery`) {
        delPickUpchoise = "delivery"
        showMessage(`I would like a ${delPickUpchoise}.`, 'user')
        showMessage(`I will arrange that for you!`, `bot`)
        showMessage(`Just one last thing:<br><br>I will need your e-mail and your full name so that I can send you the options I selected for you.`, 'bot')
      }
    })
  })
}

// Set up your eventlisteners here


nameForm.addEventListener('submit', userNameInput)
//emailForm.addEventListener('submit', enterEmailInput)

chatToggle.addEventListener('click', function () {
  chatContainer.classList.toggle('open')
})
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500)

//font, emoji, colors, background photo