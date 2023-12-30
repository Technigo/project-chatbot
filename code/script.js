let treeChoice = "";
let orderChoice = "";

const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const sendButton = document.querySelector(".send-btn");
const nameForm = document.getElementById("name-form");

const showMessage = (message, sender) => {
  if (sender === "user") {
    console.log("userMessageSent");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/icons8-acorn-100.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    console.log("botMessageSent");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/icons8-tree-100.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight;
};
//The start-greeting from the bot

const greetUser = () => {
  showMessage(`Hi friend of Trees! Please enter your name below`, `bot`);
};
setTimeout(greetUser, 800);

//The name-input from the user and subsequent reply

const handleNameInput = (event) => {
  event.preventDefault();

  const userName = nameInput.value;
  showMessage(`My name is ${userName}!`, `user`);
  nameInput.value = "";
  setTimeout(() => treeType(userName), 1000);
};

nameForm.addEventListener("submit", handleNameInput);

//Bot-reply on name-input and follow up question on choice of trees with button options

const treeType = (userName) => {
  showMessage(
    `Nice to greet you ${userName}! <br><br> 
  What tree would you like in your garden?`,
    `bot`
  );
  inputWrapper.innerHTML = `
    <button class="send-btn" id="apple">Apple</button>
    <button class="send-btn" id="pear">Pear</button>
  `;

  // User choose their tree by clicking button which invokes a user reply after their choice

  document.getElementById(`apple`).addEventListener(`click`, () => {
    treeChoice = "apple";
    showMessage("I want an Apple-tree!", `user`);
    setTimeout(() => confirmTreeType(treeChoice), 1000);
  });

  document.getElementById(`pear`).addEventListener(`click`, () => {
    treeChoice = "pear";
    showMessage("I want a Pear-tree!", `user`);
    setTimeout(() => confirmTreeType(treeChoice), 1000);
  });
};
// Bot confirms the choice with an encouraging response with info and gives the confirm button option

const confirmTreeType = (treeChoice) => {
  if (treeChoice === "apple") {
    showMessage(
      `An Apple-tree is an excellent choice!<br>Apples have been eaten for as long as we know, <br> with cultivation going back to pre-historic times. <br> The fruit is big, sweet and plenty and the flowers are beautiful. Should we proceed with the Apple-tree?`,
      `bot`
    );
    inputWrapper.innerHTML = `
    <button class="send-btn" id="confirm">Yes please, I'd love an Apple-tree!!</button>
    <button class="send-btn" id="back">No thank you</button>
  `;
    document.getElementById(`confirm`).addEventListener(`click`, () => {
      orderChoice = "confirm";
      showMessage("I'm happy with my choice!", `user`);
      inputWrapper.style.display = "none";
      setTimeout(() => confirmOrder(orderChoice), 1000);
    });

    document.getElementById(`back`).addEventListener(`click`, () => {
      orderChoice = "back";
      showMessage("No, I'm not sure", `user`);
      inputWrapper.style.display = "none";
      setTimeout(() => confirmOrder(orderChoice), 1000);
    });
  } else if (treeChoice === "pear") {
    showMessage(
      `A Pear-tree is an excellent choice! <br>Pears have been eaten for as long as we know, <br> with cultivation going back to pre-historic times. <br> The fruit is big, sweet and plentyful and the flowers are beautiful. Should we proceed with the Pear-tree?`,
      `bot`
    );
    inputWrapper.innerHTML = `
    <button class="send-btn" id="confirm">Yes please!</button>
    <button class="send-btn" id="back">No thank you</button>
  `;

    document.getElementById(`confirm`).addEventListener(`click`, () => {
      orderChoice = "confirm";
      showMessage("I'm happy with my choice!", `user`);
      inputWrapper.style.display = "none";
      setTimeout(() => confirmOrder(orderChoice), 1000);
    });

    document.getElementById(`back`).addEventListener(`click`, () => {
      orderChoice = "back";
      showMessage("No, I'm not sure", `user`);
      inputWrapper.style.display = "none";
      setTimeout(() => confirmOrder(orderChoice), 1000);
    });
  }
};

const confirmOrder = (orderChoice) => {
  if (orderChoice === "confirm") {
    showMessage(
      `Happy to hear it - your garden will be a beautiful (and tasty!) place!`,
      `bot`
    );
  } else if (orderChoice === "back") {
    showMessage(
      `We understand, what tree to get is a big choice! <br> Please feel free to come back at any time!`,
      `bot`
    );
  }
};
