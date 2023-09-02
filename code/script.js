
// If you need any global variables that you can use across different functions, declare them here:
let treeChoice = "";
let userName = "";

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
        <img src="assets/icons8-acorn-100.png" alt="User" />  
      </section>
    `
   
  } else if (sender === 'bot') {
    console.log("botMessageSent")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/icons8-tree-100.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight
}

const greetUser = () => {
  showMessage(`Hi friend of Trees! Please enter your name below`, `bot`);
};

const handleNameInput = (event) => {
  event.preventDefault();

  const userName = nameInput.value; 
  showMessage(`My name is ${userName}!`, `user`);
  nameInput.value = "";
  setTimeout(() => treeType(userName), 1000);
};

nameForm.addEventListener("submit", handleNameInput);

const treeType = (userName) => {
  showMessage(`Nice to meet you ${userName}! <br><br> 
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
      setTimeout(() => confirmTreeType (treeChoice), 1000)
    })

document.getElementById(`pear`)
    .addEventListener(`click`, () => {
      treeChoice = "pear"
      showMessage("I want a Pear-tree!", `user`)
      setTimeout(() => confirmTreeType (treeChoice), 1000)
    })
}
// Se om det går att få till username nedan, varför funkar den inte globalt? Kolla Jennie-videon och om det inte funkar, skriv readme etc, ta bort taggen på username och lämna in

const confirmTreeType = (treeChoice) => {
  if (treeChoice === "apple") {
    showMessage (`An Apple-tree is an excellent choice ${userName}!`, `bot`)
  } else if (treeChoice === "pear") {
    showMessage (`A Pear-tree is an excellent choice ${userName}!`, `bot`)
  } 
 
  }




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