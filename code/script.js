// DOM selectors (variables that point to selected DOM elements) go here 👇
const chat = document.getElementById('chat');
const nameForm = document.getElementById("name-form");

// Functions go here 👇

const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  chat.scrollTop = chat.scrollHeight;
}

const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot');
  nameForm.addEventListener("submit", handleNameInput);
}

const askAboutFavoriteColor = (name) => {
  showMessage(`Oh wow, what a lovely name, ${name}! I really want to know more about you. What is your favorite color?`, 'bot');

  // Remove the previous event listener and add a new one for color input
  nameForm.removeEventListener("submit", handleNameInput);
  nameForm.addEventListener("submit", handleColorInput);
};

const handleNameInput = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name-input");
  const userName = nameInput.value;
  showMessage(userName, "user");
  nameInput.value = "";

  setTimeout(() => askAboutFavoriteColor(userName), 1000);
};

const handleColorInput = (event) => {
  event.preventDefault();

  const colorInput = document.getElementById("name-input");
  const userColor = colorInput.value;
  showMessage(userColor, 'user');
  colorInput.value = "";

  setTimeout(() => askAboutFavoriteHobby(userColor), 1000);
};

const askAboutFavoriteHobby = (color) => {
  showMessage(`Nice choice! ${color} is a fantastic color. Now, can you tell me your favorite hobby?`, 'bot');

  // Remove the previous event listener and add a new one for hobby input
  nameForm.removeEventListener("submit", handleColorInput);
  nameForm.addEventListener("submit", handleHobbyInput);
};

const handleHobbyInput = (event) => {
  event.preventDefault();

  const hobbyInput = document.getElementById("name-input");
  const userHobby = hobbyInput.value;
  showMessage(userHobby, 'user');
  hobbyInput.value = "";

  // You can continue the conversation or perform any actions based on the hobby input
};

// Event listener for the initial form submission
nameForm.addEventListener("submit", handleNameInput);

// Initial greeting
setTimeout(greetUser, 1000);
