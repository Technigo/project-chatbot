// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.querySelector('.input-wrapper'); // Wrapper for the input field

// Show album options function
const showAlbumOptions = (name) => {
  showMessage(`Hello ${name}, welcome to Weverse! Which BTS album would you like to order?`, 'bot');

  // Hide the input form and show the album options
  form.style.display = 'none'; // Hide the input field and send button

  // Add album option buttons
  chat.innerHTML += `
    <section class="bot-msg">
      <div class="bubble bot-bubble">
        <button id="golden-btn">Golden</button>
        <button id="muse-btn">Muse</button>
        <button id="layover-btn">Layover</button>
      </div>
    </section>
  `;

  // Add event listeners to album option buttons
  document.getElementById('golden-btn').addEventListener('click', () => showSubtypes('Golden'));
  document.getElementById('muse-btn').addEventListener('click', () => showSubtypes('Muse'));
  document.getElementById('layover-btn').addEventListener('click', () => showSubtypes('Layover'));

  chat.scrollTop = chat.scrollHeight;
};

// Show subtypes based on album selection
const showSubtypes = (album) => {
  let subtypes = '';

  // Subtypes for each album category
  if (album === 'Golden') {
    subtypes = `
      <button id="golden-special-btn">Special edition</button>
      <button id="golden-vynil-btn">Vynil</button>
      <button id="golden-limited-btn">Limited edition</button>
    `;
  } else if (album === 'Muse') {
    subtypes = `
      <button id="muse-weverse-btn">Weverse version</button>
      <button id="muse-limited-btn">Limited edition</button>
      <button id="muse-vynil-btn">Vynil</button>
    `;
  } else if (album === 'Layover') {
    subtypes = `
      <button id="layover-vynil-btn">Vynil</button>
      <button id="layover-special-btn">Special edition</button>
      <button id="layover-limited-btn">Limited edition</button>
    `;
  }

  // Display the subtypes
  showMessage(`Which ${album} would you like to order?`, 'bot');
  chat.innerHTML += `
    <section class="bot-msg">
      <div class="bubble bot-bubble">
        ${subtypes}
      </div>
    </section>
  `;

  // Add event listeners to the subtype buttons
  if (album === 'Golden') {
    document.getElementById('golden-special-btn').addEventListener('click', () => askRandomOrSet('Special edition'));
    document.getElementById('golden-vynil-btn').addEventListener('click', () => askRandomOrSet('Vynil'));
    document.getElementById('golden-limited-btn').addEventListener('click', () => askRandomOrSet('Limited edition'));
  } else if (album === 'Muse') {
    document.getElementById('muse-weverse-btn').addEventListener('click', () => askRandomOrSet('Weverse edition'));
    document.getElementById('muse-limited-btn').addEventListener('click', () => askRandomOrSet('Limited edition'));
    document.getElementById('muse-vynil-btn').addEventListener('click', () => askRandomOrSet('Vynil'));
  } else if (album === 'Layover') {
    document.getElementById('layover-vynil-btn').addEventListener('click', () => askRandomOrSet('Vynil'));
    document.getElementById('layover-special-btn').addEventListener('click', () => askRandomOrSet('Special edition'));
    document.getElementById('layover-limited-btn').addEventListener('click', () => askRandomOrSet('Limited edition'));
  }

  chat.scrollTop = chat.scrollHeight;
};

// Ask if the order is for a Random or Set
const askRandomOrSet = (album) => {
  showMessage(`Do you want the random or set collection of the ${album} album?`, 'bot');

  chat.innerHTML += `
    <section class="bot-msg">
      <div class="bubble bot-bubble">
        <button id="random-btn">Random</button>
        <button id="set-btn">Set</button>
      </div>
    </section>
  `;

  document.getElementById('random-btn').addEventListener('click', () => finalizeOrder(album, 'Random', 150));
  document.getElementById('set-btn').addEventListener('click', () => finalizeOrder(album, 'Set', 200));

  chat.scrollTop = chat.scrollHeight;
};

// Finalize the order with the selected album and if it's for a Random or Set, and show the price
const finalizeOrder = (album, person, price) => {
  showMessage(`I'd like to order ${person} collection of the ${album}. Thank you!`, 'user');


  setTimeout(() => {
    showMessage(`You chose ${album} and ${person} option. The price is ${price} SEK.`, 'bot');
    askForDeliveryAddress(); // Ask for the delivery address after confirming the price
  }, 1000);
};

// Ask for the delivery address
const askForDeliveryAddress = () => {
  showMessage("Please enter your delivery address.", 'bot');

  // Show the input form to collect the address
  form.style.display = 'flex';
  nameInput.placeholder = 'Enter delivery address'; // Change the placeholder for address input
  nameInput.value = ''; // Clear the input field

  // Change the form submission handler to collect the address
  form.removeEventListener('submit', handleNameInput); // Remove the name input handler
  form.addEventListener('submit', handleAddressInput); // Add address input handler
};

// Handle delivery address input
const handleAddressInput = (event) => {
  event.preventDefault();

  const address = nameInput.value;  // Capture the address
  showMessage(`My delivery address is: ${address}`, 'user');

  // Clear the input field after the user submits the address
  nameInput.value = '';

  setTimeout(() => {
    showMessage(`Thank you! Your order will be delivered to ${address}.`, 'bot');
    displayContactInfo(); // Show contact info and hide the input bar after confirming the address
  }, 1000);
};

// Display contact information and hide the input bar
const displayContactInfo = () => {
  setTimeout(() => {
    showMessage("If you have any questions, reach out to questions@weverse.com", 'bot');
    form.style.display = 'none'; // Hide the input field and send button
  }, 1000);
};

// Handle name input submission
const handleNameInput = (event) => {
  event.preventDefault();

  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = '';

  // Show album options after 1 second delay
  setTimeout(() => showAlbumOptions(name), 1000);
};

// Show message function
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/bts-army-logo-angel-purpletete-transparent.png" alt="User" />
      </section>
    `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="https://e7.pngegg.com/pngimages/307/249/png-clipart-bts-love-yourself-her-k-pop-logo-korean-language-bts-logo-purple-angle.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  chat.scrollTop = chat.scrollHeight;
};

// Greet the user at the start
const greetUser = () => {
  showMessage("Hello BTS ARMY, welcome to Weverse! What's your name?", 'bot');
};

// Add event listener to the form submission
form.addEventListener('submit', handleNameInput);

// Initial greeting on page load
setTimeout(greetUser, 1000);
