
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const sendButton = document.querySelector("send-btn");
const nameForm = document.getElementById("name-form");

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // setTimeout(showMessage, 800)
  if (sender === 'user') {
    console.log("userMessageSent")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
   
  } else if (sender === 'bot') {
    console.log("botMessageSent")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight
}

// const botResponse = (msg) => {
//   showMessage(msg, 'bot');
// }
// const userResponse = (msg) => {
//   showMessage(msg, 'user');
// }

const greetUser = () => {
  showMessage(`Hi friends of Trees, can we get your name, please?`, `bot`);
};

const handleNameInput = (event) => {
  event.preventDefault();

  const userName = nameInput.value; 
  showMessage(`For sure, my name is ${userName}`, `user`);
  nameInput.value = "";
  setTimeout(() => showTreeOptions(userName), 800);
};

nameForm.addEventListener("submit", handleNameInput);

function replyBot() {
  showMessage(`Nice to meet you, ${userName}! What tree would you like in your garden?`, 'bot');
 inputWrapper.innerHTML = `
    <button class="send-btn" id="apple">Apple-Tree</button>
    <button class="send-btn" id="birch">Birch-Tree</button>
    <button class="send-btn" id="plum">Plum-Tree</button>
  `;

  const treeButtons = inputWrapper.querySelectorAll('send-btn');
    treeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedTree = event.target.id;
      showMessage(`Excellent choice! You selected ${selectedTree}.`, 'bot');
      handleSpecificFoodChoice(selectedFood);
    });
  });
}
// This is where the code starts to run
setTimeout(greetUser, 800)