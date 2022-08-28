document.addEventListener("DOMContentLoaded", () => {
  // Variables that point to selected DOM elements
  const chat = document.getElementById("chat");
  const input = document.getElementById("user-input");
  const form = document.getElementById("workout-form");
  const inputWrapper = document.getElementById("input-wrapper"); // this connects the js with the element in the html.

  input.focus(); // Makes the browser auto-select the input field so that the user doesn't have to click the field before writing

  // Declare your functions after this comment

  // This function will add a chat bubble in the correct place based on who the sender is
  const showMessage = (message, sender) => {
    // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
    if (sender === "user") {
      chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
      // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
    chat.scrollTop = chat.scrollHeight;
  };

  const greeting = () => {
    // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
    showMessage("Hello there, I'm your personal trainer bot", "bot");
  };

  const ageQuestion = () => {
    showMessage("First off, how old are you?", "bot");
  };

  const showAgeInput = (event) => {
    event.preventDefault();
    const ageInput = input.value; //input value will be stored in the variable
    showMessage(ageInput, "user");
    input.value = ""; // clear text field from the input
    setTimeout(() => handleAgeInput(ageInput), 1000);
  };

  //This function decide which message to show the user depending on the age input.
  const handleAgeInput = (ageInput) => {
    ageInput;
    if (ageInput >= 16) {
      musclegroupQuestion(ageInput);
    } else if (ageInput < 5) {
      showMessage(
        "You are just a baby! Try the Baby Gym, or maybe just have some 🍼 instead",
        "bot"
      );
    } else {
      showMessage(
        "Sorry, you are too young for our workouts! Go out and play 🏀",
        "bot"
      );
    }
  };

  // This function asks the user what to train and creates two buttons with alternatives.
  const musclegroupQuestion = (ageInput) => {
    showMessage(
      `${ageInput}, that's great! What muscle group would you like to focus on today?`,
      "bot"
    );
    inputWrapper.innerHTML = `
    <button id="lowerBtn">Lower body</button>
    <button id="upperBtn">Upper body</button>
  `;
    document
      .getElementById("lowerBtn")
      .addEventListener("click", () => lowerAnswer());
    document
      .getElementById("upperBtn")
      .addEventListener("click", () => upperAnswer());
  };

  // These two following functions create a message based on the alternative chosen by the user.
  const lowerAnswer = () => {
    showMessage("Lower Body", "user");
    lowerBtn.remove(); // Removes the buttons when user makes their choice
    upperBtn.remove();
    setTimeout(
      () =>
        showMessage(
          `Lower body, how fun! Here's a link to a workout you might like: <a href="https://darebee.com/images/workouts/muscle-factory-lowerbody-workout.jpg" target="_blank"> Click here</a>`,
          "bot"
        ),
      1000
    );
  };

  const upperAnswer = () => {
    showMessage("Upper Body", "user");
    lowerBtn.remove(); // Removes the buttons when user makes their choice
    upperBtn.remove();
    setTimeout(
      () =>
        showMessage(
          `Upper body, my favourite! Here's a link to a workout I think you'd like: <a href ="https://darebee.com/images/workouts/muscle-factory-upperbody-workout.jpg" taget="_blank"> Click here</a>`,
          "bot"
        ),
      1000
    );
  };

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.

  //setTimeout(() => showFoodOptions(name), 1000);

  // Set up your eventlisteners here

  form.addEventListener("submit", showAgeInput);

  // setTimeout(functionName, timeToWaitInMilliSeconds)
  setTimeout(greeting, 1000);
  setTimeout(ageQuestion, 2000);
});
