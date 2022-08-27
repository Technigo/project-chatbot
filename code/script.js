// Creating an empty Object to store user inputs
const userFormInputs = {};

// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const handleNameInput = document.getElementById('name-form');
//const form = document.getElementById('name-form');
//const submit = document.getElementById('submit');
//const main = document.getElementById('main');

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
  setTimeout(() => chat.scrollTop = chat.scrollHeight, 300)
};

// Starts here
//Question 1
const greeting = () => {
  showMessage("Welcome! Let's brighten someones day with flowers &#127804; &#127802 Who would you like to send them to?", 'bot');
};

handleNameInput.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name-input');
  const userName = nameInput.value; 
  userFormInputs.name = userName;
    showMessage(`I'd like to send ${userName} flowers.`, 'user');
    setTimeout(() => showColorOptions(userName), 1000)
  });

//Question 2
const showColorOptions = (userName) => {
  showMessage(`That's so nice of you! Choose a color ${userName} would like.`, 'bot')
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
  showMessage(`I choose ${flowerType}.`, 'user'); 

    setTimeout(() => showMessage(`Great choice! What type of ${flowerType} flowers?`, 'bot'), 1000);
  
    setTimeout(() => {
      if (flowerType === 'Red') {
        inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled> &#127801; Select a flower type: </option>
          <option value="Rose">Rose</option>
          <option value="Coronation">Coronation</option>
          <option value="Poppy">Poppy</option>
        </select>
      `;
      } else if (flowerType === 'Yellow') {
        inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled> &#127803; Select a flower type:</option>
          <option value="Sunflower">Sunflower</option>
          <option value="Daffodil">Daffodil</option>
          <option value="Daisies">Daisies</option>
        </select>
      `;
      } else {
        inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled> &#127809; Select a flower type:</option>
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
    }, 1500);
  };

  // Question 4
    const bouquetSize = (select) => {
      userFormInputs.size = select;
      showMessage(`I pick ${select}.`, 'user');
      setTimeout(() => showMessage(`Sweet! What size of bouquet for those ${select}?`, 'bot'), 1000);
    
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
          setTimeout(() => paymentSize('Large'), 1000);
        });
      }, 1500);
    };

      const paymentSize = (size) => {
        userFormInputs.payment = size;
        showMessage(`I want a ${size}.`, 'user');
        
        if (size === 'Small') {
          price = '150kr';
        } else if (size === 'Medium') {
          price = '250kr';
        } else {
          price = '350kr'; 
        }

        setTimeout(() => { 
        showMessage(`${size} it is! That will be ${price}. Please review and confirm below:`, 'bot');

        showMessage(
          `Name: ${userFormInputs.name}<br> Color: ${userFormInputs.color}<br> Type: ${userFormInputs.size}<br>
           Size: ${userFormInputs.payment}<br>`, 'bot');
      }, 1000);
      
        setTimeout(() => {
          inputWrapper.innerHTML = `
          <button id="agree">Agree &#128515</button>
          <button id="reload">Disagree &#129344</button>`;

          document.getElementById('agree').addEventListener('click', () => {
            inputWrapper.innerHTML = "";
            setTimeout(() => order('Agree'), 1000);
          });
          document.getElementById('reload').addEventListener('click', () => {
            location.reload();
            });
          }, 1500);
      };

        const order = (completed) => {
          userFormInputs.order = completed;
          showMessage(`${completed}`, 'user');

          setTimeout(() => showMessage('Thank you for the order. It will soon be sent out; &#128171', 'bot'), 1000);

          inputWrapper.innerHTML = "";
        };

        setTimeout(greeting, 1000);