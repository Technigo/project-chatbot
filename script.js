// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");

let questionNumber = 1;

const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};

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
  chat.scrollTop = chat.scrollHeight;
};

const nextQuestion = (message) => {
  console.log("questionNumber", questionNumber);

  if (questionNumber === 1) {
    userReply(message);
    input.value = "";
    setTimeout(() => animal(message), 1000);
  } else if (questionNumber === 2) {
    userReply(message);
    setTimeout(() => showWeather(message), 1000);
  } else if (questionNumber === 3) {
    userReply(message);
    setTimeout(() => showDestination(message), 1000);
  } else if (questionNumber === 4) {
    userReply(message);
    setTimeout(() => GoTravel(message), 1000);
  }
};

// Starts here
const greeting = () => {
  questionNumber = 1;
  botReply(`Hello there, What's your name?`);
};

const animal = (msg) => {
  questionNumber++;
  botReply(
    `Nice to meet you ${msg}! Do you like tigers 🐯, elephants 🐘 or bears 🐻?`
  );

  inputWrapper.innerHTML = `
  <button  id="tiger" value="tiger">🐯</button>
  <button  id="elephants" value="elephants">🐘</button>
  <button  id="bears" value="bears">🐻</button>

`;

  document
    .getElementById("tiger")
    .addEventListener("click", (animal) => nextQuestion("🐯"));

  document
    .getElementById("elephants")
    .addEventListener("click", (animal) => nextQuestion("🐘"));

  document
    .getElementById("bears")
    .addEventListener("click", (animal) => nextQuestion("🐻"));
};

const showWeather = (animal) => {
  questionNumber++;

  botReply(`oh good choice ${animal}! Do you like warm ☀️ or cold ❄️ places?`);

  if (`${animal}` === "🐯") {
    inputWrapper.innerHTML = `<button id="warmtiger" value="warmtiger">☀️</button>
    <button id="coldtiger" value="coldtiger">❄️</button>`;

    document
      .getElementById("warmtiger")
      .addEventListener("click", (weather) => nextQuestion("warm ☀️"));

    document
      .getElementById("coldtiger")
      .addEventListener("click", (weather) => nextQuestion("cold ❄️"));
  } else if (`${animal}` === "🐘") {
    inputWrapper.innerHTML = `<button id="warmElephants" value="warmElephants">☀️</button>
    <button id="coldElephants" value="coldElephants">❄️</button>`;

    document
      .getElementById("warmElephants")
      .addEventListener("click", (weather) => nextQuestion("warm ☀️ "));

    document
      .getElementById("coldElephants")
      .addEventListener("click", (weather) => nextQuestion("cold ❄️ "));
  } else if (`${animal}` === "🐻") {
    inputWrapper.innerHTML = `<button id="warmBears" value="warmBears">☀️</button>
    <button id="coldBears" value="coldBears">❄️</button>`;

    document
      .getElementById("warmBears")
      .addEventListener("click", (weather) => nextQuestion("warm ☀️  "));

    document
      .getElementById("coldBears")
      .addEventListener("click", (weather) => nextQuestion("cold ❄️  "));
  }
};

const showDestination = (weather) => {
  questionNumber++;

  if (`${weather}` === "warm ☀️") {
    botReply(`oh good choice, you like ☀️ and 🐯! You should go to India!`);

    inputWrapper.innerHTML = `<button id="goOnVaccay" value="goOnVaccay">Bye bye ✈️ I'm going on vaccay</button>
    `;
    document
      .getElementById("goOnVaccay")
      .addEventListener("click", () => nextQuestion(`swichhhhhh ✈️`));
  } else if (`${weather}` === "cold ❄️") {
    botReply(`oh good choice, you like ❄️ and 🐯! You should go to Russia!`);
    inputWrapper.innerHTML = `<button id="goOnVaccay" value="goOnVaccay">Bye bye ✈️ I'm going on vaccay</button>
    `;
    document
      .getElementById("goOnVaccay")
      .addEventListener("click", () => nextQuestion(`swichhhhhh ✈️`));
  } else if (`${weather}` === "warm ☀️ ") {
    botReply(`oh good choice, you like ☀️ and 🐘! You should go to Mars!`);
    inputWrapper.innerHTML = `<button id="goOnVaccay" value="goOnVaccay">Bye bye ✈️ I'm going on vaccay</button>
      `;
    document
      .getElementById("goOnVaccay")
      .addEventListener("click", () => nextQuestion(`swichhhhhh ✈️`));
  } else if (`${weather}` === "cold ❄️ ") {
    botReply(`oh good choice, you like ❄️ and 🐘! You should go to Venus!`);
    inputWrapper.innerHTML = `<button id="goOnVaccay" value="goOnVaccay">Bye bye ✈️ I'm going on vaccay</button>
        `;
    document
      .getElementById("goOnVaccay")
      .addEventListener("click", () => nextQuestion(`swichhhhhh ✈️`));
  } else if (`${weather}` === "warm ☀️  ") {
    botReply(
      `oh good choice, you like ☀️ and 🐻! You should go .... NO IM KAREN SO U CAN STAY HOME, and please let me talk to your manager :P !`
    );
    inputWrapper.innerHTML = `<button id="goOnVaccay" value="goOnVaccay">Bye bye ✈️ I'm going on vaccay</button>
    `;
    document
      .getElementById("goOnVaccay")
      .addEventListener("click", () => nextQuestion(`swichhhhhh ✈️`));
  } else if (`${weather}` === "cold ❄️  ") {
    botReply(`oh good choice, you like ❄️ and 🐻! You should go to Sweden!`);

    inputWrapper.innerHTML = `<button id="goOnVaccay" value="goOnVaccay">Bye bye ✈️ I'm going on vaccay</button>
      `;
    document
      .getElementById("goOnVaccay")
      .addEventListener("click", () => nextQuestion(`swichhhhhh ✈️`));
  }
};

const GoTravel = () => {
  let audio = document.createElement("audio");
  audio.src = "./assets/sound.wav";
  audio.play();

  audio();

  botReply(`Have a nice trip!`);
  inputWrapper.innerHTML += ``;
};

sendBtn.addEventListener("click", () => nextQuestion(input.value));
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && input.value) nextQuestion(input.value);
});

// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000);
