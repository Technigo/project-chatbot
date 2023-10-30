console.log('script.js is running');
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
const chatContainer = document.getElementById('js-chat-container');

// If you need any global variables that you can use across different functions, declare them here:

//let userEmail = '';
let userName = '';
const choice = '';
const yourPrice = '';
let answer = '';

// Declare your functions after this comment

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
    //console.log(sender);
    //console.log(message);
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


const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
//Changes first letter in name to capital letter

const greetUser = () => {
  showMessage(`Hello there!`, 'bot')
  showMessage(`I'm Elbine, a chatbot.`, 'bot')
  showMessage(`What's your name?`, 'bot')
}

const userNameInput = event => {
  event.preventDefault();
  let userName = nameInput.value.trim()
  //trim(): to remove any leading or trailing spaces from the user's input to ensure consistent capitalization.

  if (userName !== "") {
    userName = capitalizeFirstLetter(userName);

    nameForm.remove(); //removes imputfield after writing the name

    nameInput.value = "";
    showMessage(` ${userName}`, "user");
    setTimeout(() => reply(userName), 700);
    setTimeout(() => askForChoise(), 1800);
  }
};

function reply(userName) {
  showMessage(`Welcome to 'Elbines-Plants' ${userName}!`, 'bot')
}

const askForChoise = (YesNo) => {
  showMessage(`We can help you by selecting some options for you based on your preferences. <br><br> Would you like to continue?`, 'bot')

  inputWrapper.innerHTML =
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
    })
  })
  chat.scrollTop = chat.scrollHeight
}


function handleYesNoChoice(choice) {
  inputWrapper.innerHTML = ''


  if (choice === 'Yes') {
    showMessage(`Please select a catagory from below:`, 'bot')
    const plantCategory = ['Green Plants 🌱 ', 'Flowers 🌻 ', 'Plant Supplies 🧰 ']
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
      showMessage(`${option}`, 'user');
      setTimeout(() => askPriceRange(option), 700)
      //So I can use selected option in the next function
    });
    inputWrapper.appendChild(button);
  });
}

function askPriceRange(option) {
  showMessage(`What is your price range for<br> ${option}?`, 'bot')


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

    .addEventListener('change', (event) => {
      //Storing the value of the event target by redeclaring global variabel
      selectedPriRan = event.target.value

      select.remove() //Removing the buttons to make the input look clean.
      setTimeout(() => confirmPriceRange(priceSelected), 700)
    })
}

const confirmPriceRange = (priceRange) => {
  if (selectedPriRan === 'PriceRange1') {
    selectedPriRan = "100 - 300kr"
    showMessage(`My price range is ${selectedPriRan}`, 'user')
    setTimeout(() => showMessage(`Great! I will select some great options (in the price range ${selectedPriRan}) for you. I hope you love them as much as I do!`, 'bot'), 500)
  }
  else if
    (selectedPriRan === 'PriceRange2') {
    selectedPriRan = "300 - 500kr"
    showMessage(`My price range is  ${selectedPriRan}`, 'user')
    setTimeout(() => showMessage(`How fun! I will select some great options (in the price range ${selectedPriRan}) for you. I hope you love them as much as I do!`, 'bot'), 500)
  }
  else if
    (selectedPriRan === 'PriceRange3') {
    selectedPriRan = "500 - 1000kr"
    showMessage(`My price range is  ${selectedPriRan}`, 'user')
    setTimeout(() => showMessage(`How exciting! I will select some great options (in the price range ${selectedPriRan}) for you. I hope you love them as much as I do!`, 'bot'), 500)
  }
  else if
    (selectedPriRan === 'PriceRange4') {
    selectedPriRan = "1000kr and up"
    showMessage(`My price range is ${selectedPriRan}`, 'user')
    setTimeout(() => showMessage(`Wow, now we're talking! I will select some amazing options (in the price range ${selectedPriRan}) for you. I just know you'll love them!`, 'bot'), 500)
  }

  setTimeout(() => deliveryStepBtn(), 1300)
}


// how tehy want it deliviered
const deliveryStepBtn = () => {
  showMessage(`If you were to place an order, would you prefer pick-up or delivery?`, 'bot');
  inputWrapper.innerHTML = `
    <button class="send-btn" id="pick-up">PICK UP</button> 
    <button class="send-btn" id="delivery">DELIVERY</button>
  `;
  chat.scrollTop = chat.scrollHeight;

  const confirmBtndelivery = inputWrapper.querySelectorAll('.send-btn');
  confirmBtndelivery.forEach(button => {
    button.addEventListener('click', (event) => {
      let deliveryChoice = event.target.id;
      inputWrapper.innerHTML = ''; // clean up buttons

      if (deliveryChoice === 'pick-up') {
        showMessage(`I want to pick up myself.`, 'user');
        showMessage(`Great! Orders can be picked up at our store.`, `bot`);
      } else if (deliveryChoice === 'delivery') {
        showMessage(`I would like a delivery.`, 'user');
        showMessage(`Perfect! We offer next-day delivery.`, `bot`);
      }
      setTimeout(emailYesNo, 1000);
    });
  });
};

// Ask if they want an email
const emailYesNo = () => {
  showMessage(`Would you like us to send you an e-mail with options based on your preferences?<br><br>Please enter Yes or No`, "bot");
  document.getElementById("input-wrapper").innerHTML = `
    <form id="yes-no-form">
      <label for="yes-no-input"></label>
      <input id="yes-no-input" type="text" placeholder="Type here...." autofocus="autofocus" />
      <button class="send-btn" type="submit">Send</button>
    </form>`;
  document.getElementById("yes-no-form").addEventListener("submit", emailSubmit);
  chat.scrollTop = chat.scrollHeight;
};

function emailSubmit(event) {
  event.preventDefault();
  const userInput = document.getElementById("yes-no-input").value.trim().toLowerCase();
  showMessage(userInput, 'user');
  if (userInput === "yes") {
    enterEmailForPreferences();
  } else if (userInput === "no") {
    setTimeout(() => showMessage("No problem, feel free to browse our site!", "bot"), 700);
  } else {
    setTimeout(() => showMessage("Invalid answer, please enter Yes or No.", "bot"), 700);
  }
};


// Ask for email
const enterEmailForPreferences = () => {
  showMessage(`Please enter your e-mail`, "bot");
  document.getElementById("input-wrapper").innerHTML = `
    <form id="preferences-email-form">
      <label for="preferences-email-input"></label>
      <input id="preferences-email-input" type="text" placeholder="Enter your email..." required autofocus="autofocus" />
      <button class="send-btn" type="submit">Send</button>
    </form>`;
  document.getElementById("preferences-email-form").addEventListener("submit", submitPreferencesEmail);
  chat.scrollTop = chat.scrollHeight;
};

function submitPreferencesEmail(event) {
  event.preventDefault();
  const email = document.getElementById("preferences-email-input").value;
  showMessage(email, 'user');
  if (validateEmail(email)) {
    setTimeout(() => showMessage(`Thank you! You will soon receive an email from us at ${email}.`, "bot"), 700);
    // where can I save and later use and email like this?
  } else {
    setTimeout(() => showMessage("Please enter a valid email address.", "bot"), 700);
  }
};

// Validate that email is typed
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};



// Set up your eventlisteners here ??

nameForm.addEventListener('submit', userNameInput)

chatToggle.addEventListener('click', function () {
  chatContainer.classList.toggle('open');
});
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 700)
