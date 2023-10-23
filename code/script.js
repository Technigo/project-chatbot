//This was a struggle, I still don't get what I did right but I did it. I was thinking 
//of doing a christmas thing first but decided to do the pzza continued

// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementsByClassName('send-btn');

let userName = '';

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
        <img src="assets/user.png" alt="user bot" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="chat bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  };
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here

const greetUser = () => {
  showMessage("Hi I'm Buddy the elf, who do I have the pleasure of speaking to?", "bot");
};

const handleNameInput = event => {
  event.preventDefault();
  userName = nameInput.value.trim(); // Remove leading/trailing spaces
  nameInput.value = "";

  if (/^\d+$/.test(userName)) {
    showMessage("That's not a valid answer. Please enter a name, not just numbers.", "bot");
  } else if (userName === "") {
    showMessage("That's not a valid answer. Please enter your name.", "bot");
  } else {
    showMessage(`I'm ${userName}! Nice to meet you`, "user");
    setTimeout(reply, 1000);
  }
};

nameForm.addEventListener("submit", handleNameInput);


function reply() {
  showMessage(`What's your craving today, ${userName}?`, 'bot');

  inputWrapper.innerHTML = `
    <button class="send-btn" id="pizza">Pizza</button>
    <button class="send-btn" id="pasta">Pasta</button>
    <button class="send-btn" id="salad">Salad</button>
  `;

  const foodButtons = inputWrapper.querySelectorAll('.send-btn');
  foodButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedFood = event.target.id;
      showMessage(`Excellent choice! You selected ${selectedFood}.`, 'bot');
      handleSpecificFoodChoice(selectedFood);
    });
  });
}

function handleSpecificFoodChoice(choice) {
  inputWrapper.innerHTML = '';

  if (choice === 'pizza') {
    showMessage(`What type of pizza would you like?`, 'bot');
    const pizzaOptions = ['Margherita', 'Shrimps Ahoy', 'Vegan Delight'];
    showOptions(pizzaOptions);
  } else if (choice === 'pasta') {
    showMessage(`What type of pasta would you like?`, 'bot');
    const pastaOptions = ['Shrimp', 'Meat Me in Napoli', 'Buddy the Elf Special'];
    showOptions(pastaOptions);
  } else if (choice === 'salad') {
    showMessage(`What type of salad would you like?`, 'bot');
    const saladOptions = ['Shrimp', 'Greek', 'You Say Tomato'];
    showOptions(saladOptions);
  }
}

function showOptions(options) {
  inputWrapper.innerHTML = '';

  options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'send-btn';
    button.textContent = option;
    button.addEventListener('click', () => {
      showMessage(`You selected ${option}.`, 'bot');
      age();
    });
    inputWrapper.appendChild(button);
  });
}

function age() {
  showMessage(`Amazing order ${userName}, do you want an adult-sized portion for 150 SEK or kids size for 100 SEK?`, 'bot');
  inputWrapper.innerHTML = ''; // Clear previous content

  const ageButtons = document.createElement('div');
  ageButtons.innerHTML = `
    <button class="send-btn" id="adult">Adult</button>
    <button class="send-btn" id="kid">Kid</button>
  `;
  inputWrapper.appendChild(ageButtons);

  const ageButtonElements = ageButtons.querySelectorAll('.send-btn');
  ageButtonElements.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedSize = event.target.id;
      showMessage(`You chose ${selectedSize} size.`, 'bot');
      handleSpecificAge(selectedSize);
    });
  });
}

function handleSpecificAge(choice) {
  inputWrapper.innerHTML = '';

  if (choice === 'adult') {
    showMessage(`The price for adult size is 150 SEK.`, 'bot');
    confirmOrder('Adult', 'Adult');
  } else if (choice === 'kid') {
    showMessage(`The price for kid size is 100 SEK.`, 'bot');
    confirmOrder('Pizza', 'Kid');
  }
}
//This one, gaaa, if I change Food to Choice of food the code stops working. Why? Makes no sense? It's just a showmessage+
function confirmOrder(foodChoice, sizeChoice) {
  showMessage(`Here's your order summary, ${userName}:<br>Food: ${foodChoice}<br>Size: ${sizeChoice}`, 'bot');

  inputWrapper.innerHTML = `
    <button class="send-btn" id="confirm">Yes, I'm ready to order</button>
    <button class="send-btn" id="cancel">No, I changed my mind</button>
  `;

  const confirmButton = document.getElementById('confirm');
  const cancelButton = document.getElementById('cancel');

  confirmButton.addEventListener('click', () => {
    showMessage('Your order has been confirmed. Thank you for choosing us!', 'bot');
    inputWrapper.innerHTML = ''; 
  });

  cancelButton.addEventListener('click', () => {
    showMessage('Your order has been canceled. Feel free to order again later.', 'bot');
    inputWrapper.innerHTML = ''; 
  });
}



  
  setTimeout(greetUser, 500)








  // Handle the user's food choice here
  // You can continue the conversation based on the selected choice


   //const responsesubType
   //showMessag("Amazing! Do you want an adultsizepizza or a kids size portion?")

   //eventlisteners depending on choice above
   //Adult Kid

   //const endMessage
   //showMessage ("Magical choice! You chose a ... style .... for the sum of.... Do ypu want to place an order?")

   //eventlisteners
   //yes/no

   //const Orderdone
   //showMessage 
   //if (....===yes) ("Thank you for your order. Enjoy your meal!")
   //else (...===no) ("Hope we will see you again soon")

// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
