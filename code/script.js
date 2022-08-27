// Creating an empty Object to store user inputs
const userFormInputs = {};

// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');
const submit = document.getElementById('submit');
const main = document.getElementById('main');

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
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log('showMessage', showMessage)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  };
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  setTimeout(() => chat.scrollTop = chat.scrollHeight, 500)
};

// Starts here
//Question 1
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome! Let's brighten someones day with flowers! Who would you like to send them too?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
};
// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()

const handleNameInput = document.getElementById('name-form').addEventListener('submit', (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
 const name = nameInput.value
  //console.log(name)
  userFormInputs.name = name;
 
 showMessage(`I'd like to send some too ${name}.`, 'user')
  nameInput.value = ''

  setTimeout(() => showColorOptions(name), 2000)
});

//Question 2

const showColorOptions = (name) => {
  showMessage(`Thats so nice of you! Let's start by choosing a color ${name} would like!`, 'bot')

  inputWrapper.innerHTML = `
<button id="redBtn">Red</button>
<button id="yellowBtn">Yellow</button>
<button id="orangeBtn">Orange</button>
`;

document.getElementById('redBtn').addEventListener('click', () => {
    inputWrapper.innerHTML = "";
    setTimeout(() => showTypesOptions('Red'), 500)
  });

  document.getElementById('yellowBtn').addEventListener('click', () => {
    inputWrapper.innerHTML = "";
    setTimeout(() => showTypesOptions('Yellow'), 500)
  });

  document.getElementById('orangeBtn').addEventListener('click', () => {
    inputWrapper.innerHTML = "";
    setTimeout(() => showTypesOptions('Orange'), 500)
  });
}; 

// Question 3 
// För att ja emoji vid alternativen kolla upp emojis ID
//Listan måste stylas i CSS
const showTypesOptions = (flowerType) => {
  userFormInputs.color = flowerType;
  //console.log(type); 
  showMessage(`I choose the color ${flowerType}!`, 'user'); 

    setTimeout(() => showMessage(`Great choice! Let's choose a type of ${flowerType} flowers?`, 'bot'), 2000);
  
    setTimeout(() => {
      if (flowerType === 'Red') {
        inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled>Select a flower type: </option>
          <option value="Rose">Rose</option>
          <option value="Coronation">Coronation</option>
          <option value="Daisies">Daisies</option>
        </select>
      `;
      } else if (flowerType === 'Yellow') {
        inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled>Select an flower type:</option>
          <option value="Sunflower">Sunflower</option>
          <option value="Daffodil">Daffodil</option>
          <option value="Poppy">Poppy</option>
        </select>
      `;
      } else {
        inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled>Select a flower type:</option>
          <option value="Dahlia">Dhalia</option>
          <option value="Tulip">Tulip</option>
          <option value="Lily">Lily</option>
        </select>
      `;
      }
      const select = document.getElementById('select');
      select.addEventListener('change', () => {
        inputWrapper.innerHTML = "";
        setTimeout(() => bouquetSize(select.value), 1000);
      });
    }, 2000);
  };

  // Question 4
    const bouquetSize = (select) => {
      userFormInputs.size = select;
      showMessage(`My choice is ${select}!`, 'user');
      setTimeout(() => showMessage(`Sweet! What size of bouquet for those ${select}?`, 'bot'), 2500);
    
      setTimeout(() => {
        inputWrapper.innerHTML = `
        <button id="small">Small</button>
        <button id="medium">Medium</button>
        <button id="large">Large</button>
        `;
    
        document.getElementById('small').addEventListener('click', () => {
          inputWrapper.innerHTML = "";
          setTimeout(() => paymentSize('Small'), 1000);
        });
        document.getElementById('medium').addEventListener('click', () => {
          inputWrapper.innerHTML = "";
          setTimeout(() => paymentSize('Medium'), 1000);
        });
        document.getElementById('large').addEventListener('click', () => {
          inputWrapper.innerHTML = "";
          setTimeout(() => paymentSize('Large'), 1500);
        });
      }, 2500);
    };

      const paymentSize = (size) => {
        userFormInputs.payment = size;
        showMessage(`I want a ${size}.`, 'user');
        
        let price;
        if (size === 'small') {
          price = '150kr';
        } else if (size === 'medium') {
          price = '250kr';
        } else {
          price = '350kr';

        setTimeout(() => { 
          
        showMessage(`${size} it is! That will cost you ${price}. Please review and confirm below:`, 'bot');

        showMessage(
          `Name : ${userFormInputs.name}<br> Color : ${userFormInputs.color}<br> Type : ${userFormInputs.size}<br>
           Size : ${userFormInputs.payment}<br> Price : ${price}`, 'bot');
      }, 2000);
      
        setTimeout(() => {
          inputWrapper.innerHTML = `
          <button id="agree">Agree</button>
          <button id="reload">Disagree</button>`;

          document.getElementById('agree').addEventListener('click', () => {
            inputWrapper.innerHTML = "";
            setTimeout(() => orderCompleted('agree'), 1000);
          });
          document.getElementById('reload').addEventListener('click', () => {
            location.reload();
            });
          }, 2500);
      }};

        const order = (completed) => {
          userFormInputs.confirmation = completed;
          showMessage(`${completed}`, 'user');

          setTimeout(() => showMessage('Thank you for the order. It will soon be sent out', 'bot'), 1000);

          inputWrapper.innerHTML = "";
        };

        setTimeout(greeting, 1000);