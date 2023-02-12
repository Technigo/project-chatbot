// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const popup = document.getElementById('popup');
const allButtons = document.getElementsByTagName('button');

// Sound effect
const msgSound = new Audio('assets/pop.mp3');
msgSound.volume = 0.6;

/* ice cream = hot beverage 
Cup = To Go
Cone = Sit In
Question 2 Ice cream = chocolate
Question 2 Soft Ice Cream = Licorice 
*/

// Object to save user inputs and method to present the order back to the customer
const customerOrder = {
  serving: '',
  type: '',
  topping: '',
  flavors: '',
  phone: '',
  presentOrder: () => {
    if (customerOrder.type === 'coffe') {
      showMessage(
        `One ${customerOrder.serving} of ${customerOrder.flavors} ${customerOrder.type} is in the making!`,
        'bot'
      );
    } else {
      showMessage(
        `One ${customerOrder.serving} of ${customerOrder.type} with ${customerOrder.topping} is in the making!`,
        'bot'
      );
    };
  },
};

// Functions

// disabling all buttons after click
const disableBtnAfterClick = () => {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }
};

// enable all buttons again
const enableBtnAfterClick = () => {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = false;
  }
};

// loading animation
const showLoading = () => {
  chat.innerHTML += `
  <div class="fa-1x loading">
    <i class="fa-solid fa-circle fa-bounce"></i>
    <i class="fa-solid fa-circle fa-bounce" style="--fa-animation-delay: 0.2s"></i>
    <i class="fa-solid fa-circle fa-bounce" style="--fa-animation-delay: 0.4s"></i>
  </div>
  `;
  chat.scrollTop = chat.scrollHeight;
};

// removes loading animation
const removeLoading = () => {
  const elements = document.getElementsByClassName('loading');
  Array.from(elements).forEach((el) => {
    el.parentNode.removeChild(el);
  });
};

// User replies & function logic/event listeners

// User reply 1 – To Go or Sit in 
const reply1Greeting = () => {
  const sitinBtn = document.getElementById('sitin-btn');
  const togoBtn = document.getElementById('togo-btn');

  togoBtn.addEventListener('click', () => {
    customerOrder.serving = 'togo';
  
    showMessage('To Go', 'user');
  
    disableBtnAfterClick();
    setTimeout(() => question2CoffeeOrChoc(), 1000);
    showLoading();
  });

  sitinBtn.addEventListener('click', () => {
    customerOrder.serving = 'sitin';

    showMessage('Sit In', 'user');

    disableBtnAfterClick();
    setTimeout(() => question2CoffeeOrChoc(), 1000);
    showLoading();
  });
};

//User reply 2 - To Go or Sit in - choose chocolate or coffee
const reply2CoffeeOrChoc = () => {
  const sitinBtn = document.getElementById('sitin-btn');
  const togoBtn = document.getElementById('togo-btn');
  //*  const coffeeBtn = document.getElementById('coffee-btn'); *//
  //* const chocolateBtn = document.getElementById('chocolate-btn');*//

  sitinBtn.addEventListener('click', () => {
    customerOrder.type = 'sitin';

    showMessage('Sit In', 'user');

    disableBtnAfterClick();
    setTimeout(() => question3Flavors(), 1000);
    showLoading();
  });

  togoBtn.addEventListener('click', () => {
    customerOrder.type = 'togo';

    showMessage('To Go', 'user');

    disableBtnAfterClick();
    setTimeout(() => question3Sprinkles(), 1000);
    showLoading();
  });
};

//User reply 3 – Topping for the chocolate
const reply3Topping = () => {
  const toppingNextBtn = document.getElementById('topping-next');
  const toppingSelection = document.getElementById('topping');

  toppingNextBtn.addEventListener('click', () => {
    customerOrder.topping = toppingSelection.value;

    showMessage(
      `${toppingSelection.options[toppingSelection.selectedIndex].text}`,
      'user'
    );
    disableBtnAfterClick();
    setTimeout(() => question4PhoneNo(), 2000);
    showLoading();
  });
};

//User reply 3 – Flavors (Coffe)
const reply3Flavors = () => {
  const flavorsNextBtn = document.getElementById('flavors-next');

  flavorsNextBtn.addEventListener('click', () => {
    disableBtnAfterClick();
    const chosenFlavors = document.querySelectorAll(
      '#flavors input[type=checkbox]:checked'
    );

    for (let i = 0; i < chosenFlavors.length; i++) {
      customerOrder.flavors += `${chosenFlavors[i].value} `;
    };

    if (customerOrder.flavors) {
      setTimeout(() => question4PhoneNo(), 2000);
      showMessage(`${customerOrder.flavors}`, 'user');
      showLoading();
    } else {
      showMessage('Pick at least one flavor, please.', 'bot');
      setTimeout(() => enableBtnAfterClick(), 2000);
    };
  });
};

//User reply 4 - Phone Number and Thank you-popup
const reply4PhoneNo = () => {
  const phoneForm = document.getElementById('phone-form');

  phoneForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    customerOrder.phone = formData.get('phone');

    popup.classList.toggle('hide');
  
    // OK-button for popup
    const refreshButton = document.getElementById('refresh-button');
   
    const refreshPage = () => {
      location.reload();
    };
    enableBtnAfterClick();
    
    refreshButton.addEventListener('click', () => {
      refreshPage();
    });
  });
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user2.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot2.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
    msgSound.play();
  };
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Bot questions & DOM manipulation:

// Bot question 1 - Greeting & Choose To Go/Sit In
const question1Greeting = () => {
  showMessage('Hi there! Let me help you take your order.', 'bot');

  showLoading();
  setTimeout(() => {
    showMessage('Would you like your drink to go or sit in?', 'bot');

    removeLoading();
    inputWrapper.classList.toggle('active');
  }, 1000);

  reply1Greeting();
};

//Bot question 2 - Choose Coffee or Chocolate
const question2CoffeeOrChoc = () => {
  inputWrapper.innerHTML = `
<button id="coffee-btn">Coffee</button>
<button id="chocolate-btn">Chocolate</button>
`;

  showMessage(`Do you want regular coffee or chocolate?`, 'bot');
  reply2CoffeeOrChoc();
  removeLoading();
};

//Bot question 3 - Topping (For hot chocolate)
const question3Topping = () => {
  inputWrapper.innerHTML = `
<select name="topping" id="topping">
<option value="marschmallow topping">Marscmallow topping</option>
<option value="chocolate cookie crumb topping">Chocolate Cookie Crumb topping</option>
<option value="deluxe topping">Deluxe topping</option>
<option value="no topping">No topping</option>
</select>
<button id="topping-next">Next</button>`;
  showMessage(`Maybe with some topping on?`, 'bot');
  reply3Topping();
  removeLoading();
};

//Bot question 3 - Flavors (For Coffee)
const question3Flavors = () => {
  inputWrapper.innerHTML = `
  <div id="flavors">
  <form class="checkbox-form">
    <div>
    <input type="checkbox" class="flavors-boxes" id="vanilla" name="flavors" value="Vanilla" />
    <label for="vanilla" class="textbox-label">Vanilla</label>
    </div>
    <div>
    <input type="checkbox" class="flavors-boxes" id="caramel" name="flavors" value="Caramel"/>
    <label for="caramel" class="textbox-label">Caramel</label>
    </div>
    <div>
    <input type="checkbox" class="flavors-boxes" id="chai" name="flavors" value="chai"/>
    <label for="chai" class="textbox-label">Chai</label>
    </div>
    <button id="flavors-next" type="submit">Next</button> 
    </form>
  </div>
`;
  showMessage(`What flavors would you like?`, 'bot');
  reply3Flavors();
  removeLoading();
};

//Bot question 4 - Phone Number
const question4PhoneNo = () => {
  inputWrapper.innerHTML = `
  <form id="phone-form">
  <input type="tel" class="phone-number" name="phone" maxlength="12" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required> 
  <button type="submit" id="confirm-btn">Confirm</button>
  <button id="cancel-btn" onClick="window.location.reload();">Cancel</button>
  </form>
  `;

  customerOrder.presentOrder();
  showMessage(
    `Please type in your phone number below and we'll notify you as soon as your ${customerOrder.type} is ready.`,
    'bot'
  );
  reply4PhoneNo();
  removeLoading();
};

// When website loaded, chatbot asks first question.
setTimeout(question1Greeting, 500);