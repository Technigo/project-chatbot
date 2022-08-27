// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const popup = document.getElementById('popup');
const allButtons = document.getElementsByTagName('button');

// Sound effect
const msgSound = new Audio('assets/pop.mp3');
msgSound.volume = 0.6;

// Object to save user inputs and method to present the order back to the customer
const customerOrder = {
  serving: '',
  type: '',
  sprinkles: '',
  flavors: '',
  phone: '',
  presentOrder: () => {
    if (customerOrder.type === 'ice cream') {
      showMessage(
        `One ${customerOrder.serving} of ${customerOrder.flavors} ${customerOrder.type} is in the making!`,
        'bot'
      );
    } else {
      showMessage(
        `One ${customerOrder.serving} of ${customerOrder.type} with ${customerOrder.sprinkles} is in the making!`,
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

// User reply 1 – Cup or Cone
const reply1Greeting = () => {
  const coneBtn = document.getElementById('cone-btn');
  const cupBtn = document.getElementById('cup-btn');

  cupBtn.addEventListener('click', () => {
    customerOrder.serving = 'cup';
  
    showMessage('Cup', 'user');
  
    disableBtnAfterClick();
    setTimeout(() => question2IceOrSoft(), 1000);
    showLoading();
  });

  coneBtn.addEventListener('click', () => {
    customerOrder.serving = 'cone';

    showMessage('Cone', 'user');

    disableBtnAfterClick();
    setTimeout(() => question2IceOrSoft(), 1000);
    showLoading();
  });
};

//User reply 2 - Ice Cream or Soft Ice Cream
const reply2IceOrSoft = () => {
  const iceCreamBtn = document.getElementById('ice-cream-btn');
  const softIceCreamBtn = document.getElementById('soft-ice-cream-btn');

  iceCreamBtn.addEventListener('click', () => {
    customerOrder.type = 'ice cream';

    showMessage('Ice cream', 'user');

    disableBtnAfterClick();
    setTimeout(() => question3Flavors(), 1000);
    showLoading();
  });

  softIceCreamBtn.addEventListener('click', () => {
    customerOrder.type = 'soft ice cream';

    showMessage('Soft ice cream', 'user');

    disableBtnAfterClick();
    setTimeout(() => question3Sprinkles(), 1000);
    showLoading();
  });
};

//User reply 3 – Sprinkles (Soft Ice Cream)
const reply3Sprinkles = () => {
  const sprinkleNextBtn = document.getElementById('sprinkles-next');
  const sprinklesSelection = document.getElementById('sprinkles');

  sprinkleNextBtn.addEventListener('click', () => {
    customerOrder.sprinkles = sprinklesSelection.value;

    showMessage(
      `${sprinklesSelection.options[sprinklesSelection.selectedIndex].text}`,
      'user'
    );
    disableBtnAfterClick();
    setTimeout(() => question4PhoneNo(), 2000);
    showLoading();
  });
};

//User reply 3 – Flavors (Ice Cream)
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
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
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

// Bot question 1 - Greeting & Choose Cup/Cone
const question1Greeting = () => {
  showMessage('Hi there! Let me help you take your order.', 'bot');

  showLoading();
  setTimeout(() => {
    showMessage('Would you like your ice cream in a cup or a cone?', 'bot');

    removeLoading();
    inputWrapper.classList.toggle('active');
  }, 1000);

  reply1Greeting();
};

//Bot question 2 - Choose Ice Cream
const question2IceOrSoft = () => {
  inputWrapper.innerHTML = `
<button id="ice-cream-btn">Ice Cream</button>
<button id="soft-ice-cream-btn">Soft Ice Cream</button>
`;

  showMessage(`Do you want regular ice cream or soft?`, 'bot');
  reply2IceOrSoft();
  removeLoading();
};

//Bot question 3 - Sprinkles (Soft Ice Cream)
const question3Sprinkles = () => {
  inputWrapper.innerHTML = `
<select name="sprinkles" id="sprinkles">
<option value="rainbow sprinkles">Rainbow sprinkles</option>
<option value="chocolate sprinkles">Chocolate sprinkles</option>
<option value="liquorice sprinkles">Liquorice sprinkles</option>
<option value="no sprinkles">No sprinkles</option>
</select>

<button id="sprinkles-next">Next</button>`;
  showMessage(`Maybe with some sprinkles on top?`, 'bot');
  reply3Sprinkles();
  removeLoading();
};

//Bot question 3 - Flavors (Ice Cream)
const question3Flavors = () => {
  inputWrapper.innerHTML = `
  <div id="flavors">
  <form class="checkbox-form">
    <div>
    <input type="checkbox" class="flavors-boxes" id="vanilla" name="flavors" value="Vanilla" />
    <label for="vanilla" class="textbox-label">Vanilla</label>
    </div>
    <div>
    <input type="checkbox" class="flavors-boxes" id="mango" name="flavors" value="Mango"/>
    <label for="mango" class="textbox-label">Mango</label>
    </div>
    <div>
    <input type="checkbox" class="flavors-boxes" id="chocolate" name="flavors" value="Chocolate"/>
    <label for="chocolate" class="textbox-label">Chocolate</label>
    </div>
    <div>
    <input type="checkbox" class="flavors-boxes" id="elderflower" name="flavors" value="Elderflower"/>
    <label for="elderflower" class="textbox-label">Elderflower</label>
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