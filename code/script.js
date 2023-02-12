// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const chatInput = document.querySelector("#chat-input");
const chatForm = document.querySelector("#chat-form");
const inputWrapper = document.querySelector("#input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:

let userAnswers = {
  name: "",
  mood: "",
  drink: "",
  toppings: "",
  spoons: "",
  Location: "",
  phonenr: "",
  email: "",
};

const userSound = new Audio("assets/beep_sms.mp3");

const openModal = function () {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
};
// userSound.play();

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    userSound.play();
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/bobauser.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bobabot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage(
    "Hello there and welcome. My name is Boba The Bot, what's yours?",
    "bot"
  );
  // showMessage(
  //   (innerHTML = "<img src='assets/typing.gif' width='400px' height='70px'>"),
  //   "bot"
  // );
  showMessage("Don't be chai!", "bot");

  // Just to check it out, change 'bot' to 'user' here 👆
};

const handleInput1 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  if (chatInput.value === "") {
    greetUser();
  } else {
    userAnswers.name = chatInput.value;
    console.log(userAnswers.name);
    showMessage(`${userAnswers.name}`, "user");
    showMessage(`Hey ${userAnswers.name}`, "bot");
    console.log("Handle input name given");
    chatInput.value = ""; //erases the answer field
    showMessage(`...`, "bot");
    setTimeout(() => question1(userAnswers.name), 1000);
  }
};

const question1 = (userName) => {
  showMessage(`So ${userAnswers.name}! How are you today?`, "bot");
  chatForm.removeEventListener("submit", handleInput1);
  chatForm.addEventListener("submit", handleInput2);
  // console.log("user mood asking from bot"); //can be omitted
  // nameForm.removeEventListener("submit", handleInput);
  // nameForm.addEventListener("submit", handleInput2);
  // setTimeout(() => question2(userName), 1000);
};

const handleInput2 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  userAnswers.mood = chatInput.value;
  showMessage(`${userAnswers.mood}`, "user"); //calling on function
  console.log("User answering his mood"); //can be omitted
  chatInput.value = ""; //erases the answer field
  setTimeout(() => question2(), 1000);
};

const question2 = (userMood) => {
  console.log(userAnswers.mood);
  console.log(typeof userAnswers.mood);
  if (
    userAnswers.mood == "good" ||
    userAnswers.mood == "great" ||
    userAnswers.mood == "amazing"
  ) {
    showMessage(`That's great to hear!`, "bot");
    showMessage(
      `So I'm assuming you're here to make your day even better. What would you like to order?`,
      "bot"
    );
    inputWrapper.innerHTML = `
    <select id="teaSelect" class="teaChoice">
    <option value="None" selected disabled>Choose your tea! 💗</option>
    <option value="Matcha Tea">Matcha Tea!</option>
    <option value="Taro Tea">Taro Tea!</option>
    <option value="Thai Tea">Thai Tea!</option>
    <option value="Lychee Fruit Tea">Lychee Fruit Tea!</option>
    <option value="Tiger Milk Tea">Tiger Milk Tea!</option>
    <option value="Strawberry Milk Tea">Strawberry Milk Tea!</option>
    <option value="Black Milk Tea">Black Milk Tea! </option>
    </select>
    <button class="send-btn" id ="order" type="submit">Send</button>
     `;

    // inputWrapper.innerHTML = `
    //   <button id="matchaBtn">Matcha!</button>
    //   <button id="taroBtn">Taro!</button>
    //   <button id="thaiBtn">Thai tea!</button>
    //   `;
  } else if (
    userAnswers.mood === "bad" ||
    userAnswers.mood === "not good" ||
    userAnswers.mood === "not so good"
  ) {
    showMessage(
      `Sorry to hear that but I think we might just have the right thing to cheer you up!`,
      "bot"
    );
    inputWrapper.innerHTML = `
      <button id="randomBtn">Tea of the day!</button>
      <button id="mostPopularBtn">Our best-selling tea!</button>
      `;
  } else if (userAnswers.mood === "") {
    showMessage(`Sorry, I didn't catch that`, "bot");
  } else {
    setTimeout(() => {
      showMessage(
        `Well, we've got just the right thing to flavor up your day!`,
        "bot"
      );
    }, 600);

    setTimeout(() => {
      showMessage(`What would you like to order?`, "bot");
    }, 900);

    inputWrapper.innerHTML = `
    <select id="teaSelect" class="teaChoice">
    <option value="None" selected disabled>Choose your tea! 💗</option>
    <option value="Matcha Tea">Matcha Tea!</option>
    <option value="Taro Tea">Taro Tea!</option>
    <option value="Thai Tea">Thai Tea!</option>
    <option value="Lychee Fruit Tea">Lychee Fruit Tea!</option>
    <option value="Tiger Milk Tea">Tiger Milk Tea!</option>
    <option value="Strawberry Milk Tea">Strawberry Milk Tea!</option>
    <option value="Black Milk Tea">Black Milk Tea! </option>
    </select>
    <button class="send-btn" id ="order" type="submit">Send</button>
     `;
  }
  chatForm.removeEventListener("submit", handleInput2);
  document.getElementById("order").addEventListener("click", handleInput3);

  // console.log("user mood asking from bot"); //can be omitted
  // nameForm.removeEventListener("submit", handleInput);
  // nameForm.addEventListener("submit", handleInput2);
  // setTimeout(() => question2(userName), 1000);
};

const handleInput3 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  //userAnswers.order = chatInput.value;
  userAnswers.order = teaSelect.value;
  console.log(teaSelect.value);
  showMessage(`${userAnswers.order}`, "user"); //calling on function
  console.log("User chose his drink!"); //can be omitted
  showMessage("...", "bot");
  setTimeout(() => {
    showMessage("Great choice!", "bot");
  }, 1000);
  // chatInput.value = ""; //erases the answer field
  setTimeout(() => question3(), 2000);
};

const question3 = () => {
  showMessage("What kind of tealicious toppings are you craving?", "bot");
  inputWrapper.innerHTML = `
      <button id="option1" value="Tapioca pearls">Tapioca pearls</button>
      <button id="option2" value="Jellies">Jellies</button>
      <button id="option2" value="Popping bubbles">Popping bubbles</button>
      `;
  document.getElementById("option1").addEventListener("click", option1Clicked);
};

const option1Clicked = (event) => {
  event.preventDefault();
  userAnswers.toppings = option1.value;
  console.log(userAnswers.toppings);
  showMessage(userAnswers.toppings, "user");
  setTimeout(() => {
    showMessage("...", "bot");
  }, 300);
  setTimeout(() => {
    showMessage(
      "Tasty! funfact: The roots of the plant we extract Tapioca from are poisonous until they are thoroughly processed.",
      "bot"
    );
  }, 1000);

  setTimeout(() => question4(), 5000);
};

const question4 = () => {
  showMessage("How many spoons of toppings would you like?", "bot");

  inputWrapper.innerHTML = `
      <button id="option1Spoon" value="1 spoon">1 spoon!</button>
      <button id="option2Spoon" value="2 spoon">2 spoons! (+ 10 Kr)</button>
      `;

  document
    .getElementById("option1Spoon")
    .addEventListener("click", option1SpoonClicked);
};

const option1SpoonClicked = (event) => {
  event.preventDefault();
  userAnswers.spoons = option1Spoon.value;
  console.log(userAnswers.spoons);
  showMessage(userAnswers.spoons, "user");
  setTimeout(() => {
    showMessage("...", "bot");
  }, 600);

  setTimeout(() => {
    showMessage(`${userAnswers.spoons} it is!`, "bot");
  }, 800);
  setTimeout(() => question5(), 3000);
};

const question5 = () => {
  showMessage(
    "Please enter your email, you'll get a notification once it's ready to pick up!",
    "bot"
  );

  inputWrapper.innerHTML = `
  <form id="email">
  <input id="emailInput" type="email" />
  <button class="send-btn" type="submit">Send</button>
  </form>
      `;
  document.getElementById("email").addEventListener("submit", handleInput4);
  //   .addEventListener("click", option1SpoonClicked);
};

const handleInput4 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  userAnswers.email = emailInput.value;
  emailInput.value = "";
  showMessage(
    `Thanks a lot for your order ${userAnswers.name}, your ${userAnswers.order} with ${userAnswers.spoons} of ${userAnswers.toppings} topping is being prepared with love by the Tealicious Lab. See you soon!`,
    "bot"
  );
  document.querySelector(".send-btn").addEventListener("click", openModal);

  //userAnswers.order = chatInput.value;
  // userAnswers.order = teaSelect.value;
  // console.log(teaSelect.value);
  // showMessage(`${userAnswers.order}`, "user"); //calling on function
  // console.log("User chose his drink!"); //can be omitted
  // showMessage("...", "bot");
  // setTimeout(() => {
  //   showMessage("Great choice!", "bot");
  // }, 1000);
  // // chatInput.value = ""; //erases the answer field
  // setTimeout(() => question3(), 2000);
};

console.log(userAnswers);

// Set up your eventlisteners here
chatForm.addEventListener("submit", handleInput1);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
