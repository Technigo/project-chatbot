
// If you need any global variables that you can use across different functions, declare them here:
let treeChoice = "";

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
  showMessage(`Hi friend of Trees, can we get your name, please?`, `bot`);
};

const handleNameInput = (event) => {
  event.preventDefault();

  const userName = nameInput.value; 
  showMessage(`For sure, my name is ${userName}`, `user`);
  nameInput.value = "";
  setTimeout(() => treeType(userName), 1000);
};

nameForm.addEventListener("submit", handleNameInput);

const treeType = (userName) => {
  showMessage(`Nice to meet you, ${userName}! <br><br> 
  What tree would you like in your garden?`, `bot`);
 inputWrapper.innerHTML =`
    <button class="send-btn" id="apple">Apple</button>
    <button class="send-btn" id="pear">Pear</button>
  `;
// Ovanför är svaret på user-svaret av namn - och följaktligen även frågan om vilket träd user vill välja. Nedan följer kopplingen till att user trycker på knappen och user's svar som confirmerar valet för tryckaren.

document.getElementById(`apple`)
    .addEventListener(`click`, () => {
      treeChoice = "apple"
      showMessage("I want an Apple-tree!", `user`)
      setTimeout(() => confirmTreeType(treeChoice), 1000)
    })

document.getElementById(`pear`)
    .addEventListener(`click`, () => {
      treeChoice = "pear"
      showMessage("I want a Pear-tree!", `user`)
      setTimeout(() => confirmTreeType(treeChoice), 1000)
    })
}
const confirmTreeType = (treeChoice) => {
  if (treeChoice === "apple") {
    showMessage (`An Apple-tree is an excellent choice, ${userName}!`, `bot`)
  } else if (treeChoice === "pear") {
    showMessage (`A Pear-tree is an excellent choice, ${userName}!`, `bot`)
  } 
  
  }

// setTimeout(() => ciderLemonade)



//   const treeButtons = inputWrapper.querySelectorAll('send-btn');
//     treeButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//       const selectedTree = event.target.id;
//       showMessage(`Excellent choice! You selected ${selectedTree}.`, 'bot');
//       handleSpecificFoodChoice(selectedFood);
//     });
//   });
// }
// This is where the code starts to run
setTimeout(greetUser, 800)