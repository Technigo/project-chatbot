// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const popup = document.getElementById('popup');
const allButtons = document.getElementsByTagName('button');

// If you need any global variables that you can use across different functions, declare them here:
const customerOrder = {
  type: '',
  serving: '',
  flavors: '',
  sprinkles: '',
  phone: '',
  /* getReceipt: () => {
    if (this.type === ice cream)
    `One ${this.serving} of ${this.type}`
  }, */
};

// Declare your functions after this comment

// Disabling all buttons after first click
const disableBtnAfterClick = () => {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }
};

// Starts here:

// User replies & function logic:

// Question 1 – Cup or Cone
const chooseCupCone = () => {
  const cupBtn = document.getElementById('cup-btn');
  const coneBtn = document.getElementById('cone-btn');

  cupBtn.addEventListener('click', () => {
    customerOrder.serving = 'Cup';
    showMessage(`In a ${customerOrder.serving}, please`, 'user');

    disableBtnAfterClick();
    setTimeout(() => question2IceOrSoft(), 2000);
  });

  coneBtn.addEventListener('click', () => {
    customerOrder.serving = 'Cone';
    showMessage(
      `I would like it in a ${customerOrder.serving}, please`,
      'user'
    );

    disableBtnAfterClick();
    setTimeout(() => question2IceOrSoft(), 2000);
  });
};

//Question 2 - Ice Cream or Soft Ice Cream
const chooseIceCream = () => {
  const iceCreamBtn = document.getElementById('ice-cream-btn');
  const softIceCreamBtn = document.getElementById('soft-ice-cream-btn');

  iceCreamBtn.addEventListener('click', () => {
    customerOrder.type = 'Ice Cream';

    showMessage(`I scream: ${customerOrder.type}`, 'user');
    disableBtnAfterClick();
    setTimeout(() => question3Flavors(), 800);
  });

  softIceCreamBtn.addEventListener('click', () => {
    customerOrder.type = 'Soft Ice Cream';

    showMessage(`${customerOrder.type}`, 'user');
    disableBtnAfterClick();
    setTimeout(() => question3Sprinkles(), 500);
  });
};

//Question 3 – Sprinkles (Soft Ice Cream)
const chooseSprinkles = () => {
  const sprinkleNextBtn = document.getElementById('sprinkles-next');
  const sprinklesSelection = document.getElementById('sprinkles');

  sprinkleNextBtn.addEventListener('click', () => {
    customerOrder.sprinkles = sprinklesSelection.value;

    showMessage(
      `${
        sprinklesSelection.options[sprinklesSelection.selectedIndex].text
      }, please`,
      'user'
    );
    disableBtnAfterClick();
    setTimeout(() => question4PhoneNo(), 500);
  });
};

//Question 3 – Flavors (Ice Cream)
const chooseFlavors = () => {
  const flavorsNextBtn = document.getElementById('flavors-next');

  flavorsNextBtn.addEventListener('click', () => {
    const chosenFlavors = document.querySelectorAll(
      '#flavors input[type=checkbox]:checked'
    );

    for (let i = 0; i < chosenFlavors.length; i++) {
      customerOrder.flavors += `${chosenFlavors[i].value} `;
    }

    showMessage(`${customerOrder.flavors} , please`, 'user');
    disableBtnAfterClick();
    setTimeout(() => question4PhoneNo(), 1000);
  });
};

//Question 4 - Phone Number and Thank you
const phoneNumber = () => {
  const confirmPhoneBtn = document.getElementById('confirm-btn');

  confirmPhoneBtn.addEventListener('click', () => {
    disableBtnAfterClick();
    showMessage(`Phone number`, 'user');
    showMessage(`Thank you for your order`, 'bot');
    popup.classList.toggle('hide');
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
        <img src="assets/icon.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Bot questions & HTML structure manipulation:

// Question 1 - Greeting & Choose Cup/Cone
const question1Greeting = () => {
  showMessage('Welcome to The Ice Cream Shop! Let me take your order.', 'bot');
  setTimeout(() => {
    showMessage('Would you like your ice cream in a cup or a cone?', 'bot');

    inputWrapper.classList.toggle('active');
  }, 2000);
};

// Question 2 - Choose Ice Cream
const question2IceOrSoft = () => {
  inputWrapper.innerHTML = `
<button id="ice-cream-btn">Ice cream</button>
<button id="soft-ice-cream-btn">Soft ice cream</button>
`;

  showMessage(`Would you like:`, 'bot');
  chooseIceCream();
};

//Question 3 - Sprinkles (Soft Ice Cream)
const question3Sprinkles = () => {
  inputWrapper.innerHTML = `
<select name="sprinkles" id="sprinkles">
<option value="rainbow">Rainbow sprinkles</option>
<option value="chocolate">Chocolate sprinkles</option>
<option value="liquorice">Liquorice sprinkles</option>
<option value="none">No sprinkles</option>
</select>

<button id="sprinkles-next">Next</button>`;
  showMessage(`Sprinkles?`, 'bot');
  chooseSprinkles();
};

//Question 3 - Flavors (Ice Cream)
const question3Flavors = () => {
  inputWrapper.innerHTML = `
  <div id="flavors">

    <div>
      <label for="vanilla" class="textbox-label">Vanilla</label>
      <input type="checkbox" class="flavors-boxes" id="vanilla" name="flavors" value="Vanilla" />
    </div>
    <div>
      <label for="mango" class="textbox-label">Mango</label>
      <input type="checkbox" class="flavors-boxes" id="mango" name="flavors" value="Mango"/>
    </div>
    <div>
      <label for="chocolate" class="textbox-label">Chocolate</label>
      <input type="checkbox" class="flavors-boxes" id="chocolate" name="flavors" value="Chocolate"/>
    </div>
    <div>
      <label for="elderflower" class="textbox-label">Elderflower</label>
      <input type="checkbox" class="flavors-boxes" id="elderflower" name="flavors" value="Elderflower"/>
    </div>
    <button id="flavors-next" type="submit">Next</button>  

  </div>
`;
  showMessage(`What flavors?`, 'bot');
  chooseFlavors();
};

//Question 4 - Phone Number
const question4PhoneNo = () => {
  inputWrapper.innerHTML = `
  <input type="tel" class="phone-number" required> 
  <button id="confirm-btn">Confirm</button>
  <button id="cancel-btn" onClick="window.location.reload();">Cancel</button>`;
  console.log();

  showMessage(`Phone number please`, 'bot');
  phoneNumber();
};

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(question1Greeting, 1000);
