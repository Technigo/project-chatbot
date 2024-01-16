// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const btn = document.getElementById("send-btn");
const foodBtn = document.getElementById("foodChoice");
const subFoodChoice = document.getElementById("subFoodChoice");
const portionPrice = document.getElementById("adultOrChild");
const confirm = document.getElementById("confirm");

// Declare the current question so we can use operator ++ to tell the bot we need to move on to the next question
let currerntQuestion = 1;

// Declare your functions after this comment
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    // console.log(showMessage("hello user",'bot'));
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

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};
setTimeout(greetUser, 1000);

//Ensure that the name contains only valid characters

const nameMsg = (event) => {
  //I spent almost half a day to figure out why the reply won't stay there, Google save my life
  event.preventDefault();
  // get user input
  const userName = nameInput.value;
  const isValidName = /^[a-zA-Z]+$/.test(userName);
  if (userName === "" || !isValidName) {
    setTimeout(() => {
      showMessage(
        "Please enter a valid name using only letters of the alphabet. :)",
        "bot"
      );
    }, 800);
  } else {
    showMessage(userName, "user");
    setTimeout(() => {
      showMessage(
        `Nice to meet you ${userName}. What type of food would you like to order?`,
        "bot"
      );
      // Hide the answer field after display the user name and ready for the next quesition
      nameForm.classList.add("hidden");
      // Show the buttons after the answer field is hidden
      foodChoice.classList.remove("hidden");
    }, 1000);
  }
  //empty the input field
  nameInput.value = "";
  currerntQuestion++;
};

//show message according to the user's choice
const displayFood = (event) => {
  switch (event.target.id) {
    case "pizza":
      showMessage("pizza", "user");
      break;
    case "pasta":
      showMessage("pasta", "user");
      break;
    case "salad":
      showMessage("salad", "user");
      break;
  }

  //Display different message and menu according to user'schoice
  const selectedChoice = event.target.id;
  //assign price to the menu
  let price;
  setTimeout(() => {
    if (selectedChoice === "pizza") {
      showMessage(
        "Oh so you're in the mood for pizza? Great choice. Select something from the menu!",
        "bot"
      );
      foodChoice.classList.add("hidden");
      subPizza.classList.remove("hidden");
      price = 110;
    } else if (selectedChoice === "pasta") {
      showMessage(
        "Oh so you're in the mood for pasta? Great choice. Select something from the menu!",
        "bot"
      );
      foodChoice.classList.add("hidden");
      subPasta.classList.remove("hidden");
      price = 130;
    } else if (selectedChoice === "salad") {
      showMessage(
        "Oh so you're in the mood for salad? Great choice. Select something from the menu!",
        "bot"
      );
      foodChoice.classList.add("hidden");
      subSalad.classList.remove("hidden");
      price = 120;
    } else if (selectedChoice === "") {
      showMessage("Please select from the menu", "bot");
      foodChoice.classList.add("hidden");
      subSalad.classList.remove("hidden");
    }
  }, 1000);

  //use event.target to get user's selection from the dropdown list instead of a block of long redundant code
  const finalChoice = (event) => {
    showMessage(event.target.selectedOptions[0].innerText, "user");
    subFoodChoice.classList.add("hidden");
    setTimeout(() => {
      showMessage(
        `One ${event.target.selectedOptions[0].innerText} coming up! Will that be for an adult or a child?`,
        "bot"
      );
      adultOrChild.classList.remove("hidden");
      chat.scrollTop = chat.scrollHeight;
    }, 1000);

    let childPrice = price / 2;
    const confirmation = (event) => {
      showMessage(event.target.id, "user");
      switch (event.target.id) {
        case "child":
          showMessage(
            `One child sized dish will be prepared for you. That'll be ${childPrice}kr. Are you sure you want to order this?`,
            "bot"
          );
          break;
        case "adult":
          showMessage(
            `One adult sized dish will be prepared for you. That'll be ${price}kr. Are you sure you want to order this?`,
            "bot"
          );
          break;
      }
      adultOrChild.classList.add("hidden");
      confirm.classList.remove("hidden");
    };
    portionPrice
      .querySelectorAll("button")
      .forEach((button) => button.addEventListener("click", confirmation));
  };
  subFoodChoice
    .querySelectorAll("select")
    .forEach((select) => select.addEventListener("input", finalChoice));
};

const yesno = (event) => {
  showMessage(event.target.id, "user");
  setTimeout(() => {
    switch (event.target.id) {
      case "yes":
        showMessage("Thank you for your order! See you soon 👋🏼", "bot");
        chat.innerHTML = "";
        return greetUser();
        break;
      case "no":
        showMessage("Ok! Please refresh and order again! ", "bot");
        break;
    }
  }, 1000);
};

// Set up your eventlisteners here
// Trigger event listener when user click the button "submit"
btn.addEventListener("click", (event) => {
  nameMsg(event);
});
// Trigger event listenner when user press enter
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") nameMsg(event);
});
confirm
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", yesno));
foodBtn
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", displayFood));

// Loop through the buttons and add a click to event listener to each button

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

// ------------------ DISCARDED CODE --------------------------------
//Try to simplify the code by selecting the dropdown menu as array
// const finalChoice = () => {
//   for (var i = 0; i < subPizza.options.length; i++) {
//     if (subPizza.options[i].value === "hawaiian") {
//       // Set the "selected" attribute to true for the desired option
//       subPizza.options[i].selected = true;
//       showMessage("hi", "user");
//       break; // Exit the loop once the option is selected
//     }
//   }
// }

// function finalChoice(optionValue) {
//   // Find the index of the desired option
//   var optionIndex = Array.from(finalChoice.options).findIndex(option => option.value === optionValue);

//   // Check if the option was found
//   if (optionIndex !== -1) {
//     // Set the "selected" attribute to true for the desired option
//     finalChoice.selectedIndex = optionIndex;
//     showMessage
//   } else {
//     console.log("Option not found");
//   }
// }
