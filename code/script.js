// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

// If you need any global variables that you can use across different functions, declare them here:
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const sendButton = document.querySelector(".send-btn");
const stew = document.getElementById("#stew");

let usersName, classChoice;

const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // Makes the chat scroll to the last message
  chat.scrollTop = chat.scrollHeight;
};

const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};

const showClassOptions = () => {
  inputWrapper.innerHTML += `
  <select id="class">
  <option value="Human">Human</option>
  <option value="elf">Elf</option>
  <option value="dwarf">Dwarf</option>
  <option value="orc">Orc</option>
</select>
<button id="options-btn" type="send">Chose your class</button>
  `;
  const optionButton = document.getElementById("options-btn");
  const classSelect = document.getElementById("class");
  optionButton.addEventListener("click", (e) => {
    e.preventDefault();
    classChoice = classSelect.value;
    // console.log(classChoise);
    classSelect.remove();
    optionButton.remove();
    showMessage(classChoice, "user");

    setTimeout(() => {
      showMessage(`So you are a ${classChoice}, interesting...`, "bot");
      setTimeout(() => {
        showMessage(
          "...I might have a nice adventure for you, there might be a big reward",
          "bot"
        );
        //Add next user option here
        AdventurePicker();
      }, 1000);
    }, 1000);
  });
};

const AdventurePicker = () => {
  inputWrapper.innerHTML += `
  <button value="save-the-queen">Save the Queen</button>
  <button value="find-the-arc">Find the lost arc</button>`;
};

function askNextQuestion() {
  setTimeout(
    () => showMessage(` ${nameInput.value} , second question `, "bot"),
    1000
  );
  nameForm.remove();
  /*  */
  setTimeout(() => showClassOptions(), 1000);
}

function askThirdQuestion() {
  showMessage(` ${nameInput.value} , Third question? `, "bot");
}

// Set up your eventlisteners here
sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  usersName = nameInput.value;
  console.log(usersName);
  showMessage(usersName, "user");
  setTimeout(() => askNextQuestion(), 1000);
});

setTimeout(greetUser, 1000);
