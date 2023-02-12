// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const chatInput = document.querySelector("#chat-input");
const chatForm = document.querySelector("#chat-form");
const inputWrapper = document.querySelector("#input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:

//Alexander: This is an object that will be used to store all

let userAnswers = {
  name: "",
  mood: "",
  drink: "",
  toppings: "",
  spoons: "",
  email: "",
};

//Alexander: this is a message sound, I chose to only have the user input make a sound to not be too noisy

const userSound = new Audio("assets/beep_sms.mp3");

//Alexander: This function is used to refresh at the end of the Chatbot to place another order

const refresh = function () {
  location.reload();
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
    showMessage(`Hey ${userAnswers.name}!`, "bot");
    console.log("Handle input name given");
    chatInput.value = ""; //erases the answer field
    showMessage(`...`, "bot");
    setTimeout(() => question1(userAnswers.name), 1000);
  }
};

//Alexander: Chatbot asking about user's mood

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

//Alexander: Chatbot handling user's mood and starting order process

const question2 = (userMood) => {
  console.log(userAnswers.mood);
  console.log(typeof userAnswers.mood);
  console.log(userAnswers.mood.toLowerCase()); //Alexander: to check if toLowerCase is working as intended
  if (
    userAnswers.mood.toLowerCase() == "good" ||
    userAnswers.mood.toLowerCase() == "very good" ||
    userAnswers.mood.toLowerCase() == "great" ||
    userAnswers.mood.toLowerCase() == "amazing" ||
    userAnswers.mood.toLowerCase() == "fantastic"
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

    ////Alexander: This is if the user is not feeling great, they will choose between two buttons, randomized or most popular
  } else if (
    userAnswers.mood.toLowerCase() === "bad" ||
    userAnswers.mood.toLowerCase() == "not great" ||
    userAnswers.mood.toLowerCase() === "not good" ||
    userAnswers.mood.toLowerCase() === "not so good"
  ) {
    showMessage(
      `Sorry to hear that but I think we might just have the right thing to cheer you up!`,
      "bot"
    );
    inputWrapper.innerHTML = `
      <button id="randomBtn">Tea of the day!</button>
      <button id="mostPopularBtn">Our best-selling tea!</button>
      `;
    document
      .getElementById("randomBtn")
      .addEventListener("click", randomTeaClicked);
    document
      .getElementById("mostPopularBtn")
      .addEventListener("click", mostPopularClicked);
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

//Alexander: If the user clicks on random order. The code is not finished but I didn't want to complicated it by coding a randomizer but it's possible.
const randomTeaClicked = (event) => {
  event.preventDefault(); //prevents refreshing the page
  showMessage(
    `You're a gambler ${userAnswers.name}! your random order is Taro tea with tapioca topping, and it's being prepared with love by the Tealicious Lab. See you soon!`,
    "bot"
  );
  setTimeout(
    () =>
      (chat.innerHTML = `<h3>Have a good day now!</h3><video src="assets/BubbleTea Commercial video.mp4" width=80% height="552" muted autoplay loop playsinline></video>`),
    9000
  );
  inputWrapper.innerHTML = `
  <button id="newOrder" value="">Make a new order! 😍</button>
  `;

  document.querySelector("#newOrder").addEventListener("click", refresh);
};

//Alexander: If the user clicks on the most popular order, which is a fixed order updaed in the code directly
const mostPopularClicked = (event) => {
  event.preventDefault(); //prevents refreshing the page
  showMessage(
    `What's popular is popular for a reason ${userAnswers.name}! our most popular is Black Milk tea with tapioca topping, and it's being prepared with love by the Tealicious Lab. See you soon!`,
    "bot"
  );
  setTimeout(
    () =>
      (chat.innerHTML = `<h3>Have a good day now!</h3><video src="assets/BubbleTea Commercial video.mp4" width=80% height="552" muted autoplay loop playsinline></video>`),
    9000
  );
  inputWrapper.innerHTML = `
  <button id="newOrder" value="">Make a new order! 😍</button>
  `;

  document.querySelector("#newOrder").addEventListener("click", refresh);
};

//Alexander: This is the next step after choosing your drink of choice.
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

//Alexander: User chooses their topping of choice
const question3 = () => {
  showMessage("What kind of tealicious toppings are you craving?", "bot");
  inputWrapper.innerHTML = `
      <button id="option1" value="Tapioca pearls">Tapioca pearls</button>
      <button id="option2" value="Jellies">Jellies</button>
      <button id="option3" value="Popping bubbles">Popping bubbles</button>
      `;
  document.getElementById("option1").addEventListener("click", option1Clicked);
  document.getElementById("option2").addEventListener("click", option2Clicked);
  document.getElementById("option3").addEventListener("click", option3Clicked);
};

//Alexander: When the option of drink is clicked, the user will get a fun fact to match the option made

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

const option2Clicked = (event) => {
  event.preventDefault();
  userAnswers.toppings = option2.value;
  console.log(userAnswers.toppings);
  showMessage(userAnswers.toppings, "user");
  setTimeout(() => {
    showMessage("...", "bot");
  }, 300);
  setTimeout(() => {
    showMessage(
      "Fan va gött! funfact: Our jellies are made from coconut meat (konjar).",
      "bot"
    );
  }, 1000);

  setTimeout(() => question4(), 5000);
};

const option3Clicked = (event) => {
  event.preventDefault();
  userAnswers.toppings = option3.value;
  console.log(userAnswers.toppings);
  showMessage(userAnswers.toppings, "user");
  setTimeout(() => {
    showMessage("...", "bot");
  }, 300);
  setTimeout(() => {
    showMessage(
      "Nice! funfact: Popping bubbles are made from a trendy new way of cooking called 'Molecular Gastronomy'.",
      "bot"
    );
  }, 1000);

  setTimeout(() => question4(), 5000);
};

//Alexander: This gives the option to choose the quantity of toppings
const question4 = () => {
  showMessage("How many spoons of toppings would you like?", "bot");

  inputWrapper.innerHTML = `
      <button id="option1Spoon" value="1 spoon">1 spoon!</button>
      <button id="option2Spoon" value="2 spoons">2 spoons! (+ 10 Kr)</button>
      `;

  document
    .getElementById("option1Spoon")
    .addEventListener("click", option1SpoonClicked);
  document
    .getElementById("option2Spoon")
    .addEventListener("click", option2SpoonClicked);
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

const option2SpoonClicked = (event) => {
  event.preventDefault();
  userAnswers.spoons = option2Spoon.value;
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

//Alexander: User is asked to enter their email
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

//Alexander: Chatbot prints a confirmation message with the user's name and order

const handleInput4 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  userAnswers.email = emailInput.value;
  emailInput.value = "";
  showMessage(
    `Thanks a lot for your order ${userAnswers.name}, your ${userAnswers.order} with ${userAnswers.spoons} of ${userAnswers.toppings} topping is being prepared with love by the Tealicious Lab. See you soon!`,
    "bot"
  );
  setTimeout(
    () =>
      (chat.innerHTML = `<h3>Have a good day now!</h3> <video src="assets/BubbleTea Commercial video.mp4" width=80% height="552" muted autoplay loop playsinline></video>`),
    9000
  );
  inputWrapper.innerHTML = `
  <button id="newOrder" value="">Make a new order! 😍</button>
  `;

  document.querySelector("#newOrder").addEventListener("click", refresh);

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
