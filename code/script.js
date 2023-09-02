// Variables that point to selected DOM elements
const chat = document.getElementById('chat');


// If you need any global variables that you can use across different functions, declare them here:
let userAnswered = false;
let usersName = "Jane Doe";
let questionCount = 0;
let continentSelected = "Africa";
let areaOptions = "Himalayas";
let areaChoice = "does this change?";


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    console.log(sender); //Step 1 - added to check value
    userAnswered = true;
    console.log(userAnswered); //Step 1 - added to check value
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p> 
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log(sender); //Step 1 - added to check value, if we remove the ${} from line 29 it displays the word message
    console.log(userAnswered); //Step 1 - added to check value
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
  return (userAnswered);
}
// Starts here - these are the bot's questions
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome to Mayhem Mystery Flights &#9992", 'bot');
  showMessage("To get us started, what is your name?", 'bot');
  console.log(`question count is:`, questionCount)
}


//ask user if they are interested in a flight, yes/no answer
const botQuestion2 = (name) => {
  console.log("botQuestion2 function is entered")
  showMessage(`Welcome, ${usersName}. Are you interested in booking a mystery flight with us today?`, 'bot');
  showMessage(`Type YES or NO`, 'bot');
}

//ask user which 3 continents they are interested in
const botQuestion3 = (yesOrNo) => {
  console.log("we have entered question 3 function")

  if (usersName === "yes") {
    showMessage(`Fantastic! &#128578 We have a few questions that will help us choose the best destination for your flight.`, 'bot')
    showMessage(`Where would you rather go?`, 'bot');

    questionCount = 2

    //create 3 buttons - africa, asia, europe
    const q3Buttons = document.getElementById("input-wrapper")
    q3Buttons.innerHTML = `
   <button id="africa" value="africa">Africa</button>
   <button id="europe" value="europe">Europe</button>
    `
    //event listener for when user clicks on their selected button
    q3Buttons.addEventListener("click", function (whichButton) {
      if (whichButton.target.value == "africa") {
        continentSelected = "Africa"
        console.log("continent selected is:", continentSelected);
        showMessage(`${continentSelected}`, 'user');
        setTimeout(botQuestion4, 1000);
      } else if (whichButton.target.value == "europe") {
        continentSelected = "Europe"
        console.log("continent selected is:", continentSelected);
        showMessage(`${continentSelected}`, 'user');
        setTimeout(botQuestion4, 1000);
      }
    })
  } else if (usersName === "no") {
    showMessage(`We hope you visit again soon, Good bye`, 'bot');
  } else {
    showMessage(`I don't understand your answer &#129335`, 'bot')
    showMessage(`Please reload the page and try chatting with us again`, 'bot')
  }
}

const botQuestion4 = (continent) => {
  showMessage(`${continentSelected} is a great choice! 	&#128512`, 'bot');
  showMessage(`There are so many amazing countries to visit in ${continentSelected}, so let's narrow it down...`, 'bot');
  showMessage(`What area in ${continentSelected} most interests you?`, 'bot');

  questionCount = 3
  //create 3 dropdown selections based on continent choice
  if (continentSelected === "Africa") {
    const areaOptions = document.getElementById("input-wrapper")
    areaOptions.innerHTML = `
    <select id="q4-dropdown">
      <option value="" selected disabled>&#128071 Select an area of interest here</option>
      <option value="westAfrica">West Africa and the Sahara</option>
      <option value="eastAfrica">East Africa and the Serengeti</option>
      <option value="southAfrica">Southern Africa, Namib Desert, and The Cape of Good Hope</option>
    </select>
  `
  } else if (continentSelected === "Europe") {
    const areaOptions = document.getElementById("input-wrapper")
    areaOptions.innerHTML = `
<select id="q4-dropdown">
  <option value="" selected disabled>&#128071 Select an area of interest here</option>
  <option value="britishIsles">The British Isles</option>
  <option value="scandinavia">Scandinavia, The Baltic and North Seas</option>
  <option value="theAlps">Central Uplands, The Alps and the Mediterranean</option>
</select>
`
  }
  const areaOptionsSelect = document.getElementById('q4-dropdown')

  areaOptionsSelect.addEventListener("change", function () {
    const areaChoice = areaOptionsSelect.value;
    switch (areaChoice) {
      case "westAfrica":
        showMessage(`West Africa and the Sahara`, 'user');
        console.log("area Choice is:", areaChoice);
        setTimeout(botQuestion5, 1000);
        break;
      case "eastAfrica":
        showMessage(`East Africa and the Serengeti`, 'user');
        console.log("area Choice is:", areaChoice);
        setTimeout(botQuestion5, 1000);
        break;
      case "southAfrica":
        showMessage(`Southern Africa, Namib Desert, and The Cape of Good Hope`, 'user');
        console.log("area Choice is:", areaChoice);
        setTimeout(botQuestion5, 1000);
        break;
    }

  }, { once: true });  //function only used once

} //end of botQuestion4

const botQuestion5 = () => {
  console.log("botQuestion5 function is entered")
  showMessage(`We have some amazing locations in this area`, 'bot');
  showMessage(`How many tickets do you require?`, 'bot');

  //re-create the input field we started with
  const inputReturns = document.getElementById("input-wrapper")
  inputReturns.innerHTML = `
  <form id="name-form">
  <input id="name-input" type="text" placeholder="Type here...." autofocus="autofocus" />
  <button class="send-btn" type="submit">
    Send
  </button>
</form>
`
}


//
//
//
//
//
//
//
//
//
// Set up your eventlisteners here

//listen for when form is submitted(submit button or enter is pressed)
logSubmit = (event) => {
  console.log(`Question count inside logsubmit:`, questionCount)
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const nameSubmitted = document.getElementById("name-input")
  console.log(nameSubmitted.value)
  usersName = nameSubmitted.value;
  showMessage(`${usersName}`, 'user');
  nameSubmitted.value = "";
  if (questionCount == 0) {
    questionCount = 1;
    setTimeout(botQuestion2, 1000); //I had problems with where to put this, got help from a code snippet in our Slack :-)
  } else if (questionCount == 1) {
    questionCount = 2;
    setTimeout(botQuestion3, 1000);
  }
}

//when form is submitted
const form = document.getElementById("name-form");
form.addEventListener("submit", logSubmit);

// When website loaded, chatbot asks first question.
setTimeout(greetUser, 1000) //Step 1 - played around with the value

// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.
