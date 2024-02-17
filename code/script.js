// Variables that point to the selected DOM elements
const chat = document.getElementById(`chat`);
const nameInput = document.getElementById(`name-input`);
const inputWrapper = document.getElementById(`input-wrapper`);
const sendButton = document.querySelector(`.send-btn`);
const nameForm = document.getElementById(`name-form`);

let username = "";
/*let question1 = "";*/

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  //the if statement checks if the sender is user and if that's the case outputs the message
  if (sender === "user") {
    console.log(sender);
    console.log(message);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-crab.jpg" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    //the else if statement checks if the sender is bot and if that's the case outputs the message
    console.log(message);
    console.log(sender);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-fish.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // makes the chat scroll to the last message when there are too many
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  showMessage(
    `Hello. I'm Finnly. Nice to meet you. Wanna find out what kind of sea creature you are?`,
    `bot`
  );
  showMessage(`Let's get started. But first, let me get your name.`, `bot`);
};

//invoke the first function to get the chatbot to ask the first question
setTimeout(greetUser, 1000);

//user types in name
const saveUsername = (event) => {
  event.preventDefault();
  //store the value in a variable so we can acces it later
  username = nameInput.value;
  showMessage(`Hi, I'm ${username}!`, `user`);
  nameInput.value = "";
  chooseIntroExtro();
};

// Event listener
nameForm.addEventListener("submit", saveUsername);

//bot asks first question, 2 options (introvert vs extrovert) to chose from
const chooseIntroExtro = () => {
  showMessage(
    `Nice to meet you ${username}. Let's find out wat sea creature is mostly like you.`,
    "bot"
  );
  showMessage(`Are you more of an introvert or an extrovert?`, "bot");

  //create new form with buttons for first question (intro/extro)
  inputWrapper.innerHTML = `
    <div id="options">
      <button id="intro-btn">Introvert</button>
      <button id="extro-btn">Extrovert</button>
    </div>`;

  //get buttons, define variable
  const introvertButton = document.getElementById(`intro-btn`);
  const extrovertButton = document.getElementById(`extro-btn`);
  //event listeners for buttons
  introvertButton.addEventListener("click", () =>
    handleSelection1("introvert")
  );
  extrovertButton.addEventListener("click", () =>
    handleSelection1("extrovert")
  );
};

//function to display selection
const handleSelection1 = (option) => {
  showMessage(`I'm more of an ${option}`, "user");
  //handle option selection (e.g. move to the next question)
  chooseDayNight();
};

//bot asks second question, 2 options (day vs night) to chose from
const chooseDayNight = () => {
  showMessage(`Amazing! Now, are you a night owl or a early bird?`, "bot");

  //create new form with buttons for second question (day/night)
  inputWrapper.innerHTML = `
<div id="options">
  <button id="day-btn">Earyl Bird</button>
  <button id="night-btn">Night Owl</button>
</div>`;

  //get buttons, define variable
  const dayButton = document.getElementById(`day-btn`);
  const nightButton = document.getElementById(`night-btn`);

  //event listeners for buttons
  dayButton.addEventListener("click", () => handleSelection2("I prefer days"));
  nightButton.addEventListener("click", () =>
    handleSelection2("I prefer nights")
  );
};

//function to display selection
const handleSelection2 = (option) => {
  showMessage(`${option}`, "user");
  //handle option selection (e.g. move to the next question)
  chooseOutIn();
};

//bot asks third question, 2 options (Stand out vs Blend in) to chose from
const chooseOutIn = () => {
  showMessage(
    `Interesting! I have one last question for you, before I assign you a sea creature.`,
    "bot"
  );
  showMessage(`Do you rather stand out or blend in?`, "bot");

  //create new form with buttons for third question (intro/extro)
  inputWrapper.innerHTML = `
    <div id="options">
      <button id="out-btn">Stand Out</button>
      <button id="in-btn">Blend In</button>
    </div>`;

  //get buttons, define variable
  const outButton = document.getElementById(`out-btn`);
  const inButton = document.getElementById(`in-btn`);

  //event listeners for buttons
  outButton.addEventListener("click", () =>
    handleSelection3("I'm funky. I stand out")
  );
  inButton.addEventListener("click", () =>
    handleSelection3("I'm shy, I blend in.")
  );
};

const handleSelection3 = (option) => {
  showMessage(`${option}`, "user");
  defineSeaCreature();
};

//function to define the sea creature based on users selections
const defineSeaCreature = () => {
  let seaCreature = "Based on your selections, I think you are a ";
  //switch
  if (
    handleSelection1 === "introvert" &&
    handleSelection2 === "I prefer nights" &&
    handleSelection3 === "I'm shy, I blend in."
  ) {
    showMessage(seaCreature, "bot");
  }

  //switch or if - else

  //response
  /*showMessage(seaCreature, "bot")*/
};
