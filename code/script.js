// Variables that point to selected DOM elements
const chat = document.getElementById('chat');

// If you need any global variables that you can use across different functions, declare them here:
let userAnswered = false;
let usersName = "Jane Doe";
let questionCount = 0;
let continentSelected = "Africa";
let areaOptions = "Himalayas";
let areaChoice = "";

//---------------- Declare your functions after this comment -------------------------//


//----------This function will add a chat bubble in the correct place based on who the sender is-----//
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


//---------------- Bot Question 1 - Ask for the user's name -------------------------//

const botQuestion1 = () => {
  console.log("You have entered Question 1 function"); //reference for me to help me track the flow
  showMessage("Welcome to Mayhem Mystery Flights &#9992", 'bot');
  showMessage("To get us started, what is your name?", 'bot');
  //event listener for this question is logSubmit
}


//---------------- Bot question 2 - Are you interested in booking a flight -------------------------//

const botQuestion2 = (name) => {
  console.log("You have entered Question 2 function"); //reference for me to help me track the flow
  showMessage(`Welcome!, ${usersName}. Are you interested in finding out more about booking a mystery flight with us today?`, 'bot');
  showMessage(`Type YES or NO`, 'bot');
  //event listener for this question is logSubmit
}


//---------------- Bot Question 3 - Choose destination continent -------------------------//

const botQuestion3 = (yesOrNo) => {
  console.log("You have entered Question 3 function"); //reference for me to help me track the flow
  let userEntersYN = usersName.toLowerCase(); //changes user input into all lowercase so it can be verified

  if (userEntersYN === "yes") {
    showMessage(`Fantastic! &#128578 We have a few questions that will help us choose the best destination for your flight.`, 'bot');
    showMessage(`Where would you rather go?`, 'bot');

    //remove input bar and create 2 buttons - Africa and Asia
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
  } else if (userEntersYN === "no") {
    showMessage(`We hope you visit again soon, Good bye`, 'bot');
  } else {
    showMessage(`I don't understand your answer &#129335`, 'bot')
    showMessage(`Please reload the page and try chatting with us again`, 'bot')
  }
}


//---------------- Bot Question 4 - Drop down select to choose an area -------------------------//

const botQuestion4 = (continent) => {
  console.log("You have entered Question 4 function"); //reference for me to help me track the flow
  showMessage(`${continentSelected} is a great choice! 	&#128512`, 'bot');
  showMessage(`There are so many amazing countries to visit in ${continentSelected}, so let's narrow it down...`, 'bot');
  showMessage(`What area in ${continentSelected} most interests you?`, 'bot');

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
      <option value="britishIsles">The British Isles, and Ireland</option>
      <option value="scandinavia">Scandinavia, The Baltic and North Seas</option>
      <option value="theAlps">Central Uplands, The Alps and the Mediterranean</option>
    </select>
`
  }
  const areaOptionsSelect = document.getElementById('q4-dropdown') //I'm not sure why I need this and can't remember why I put it here

  //event listener for when user changes/selects one of the dropdown options
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
      case "britishIsles":
        showMessage(`The British Isles, and Ireland`, 'user');
        console.log("area Choice is:", areaChoice);
        setTimeout(botQuestion5, 1000);
        break;
      case "scandinavia":
        showMessage(`Scandinavia, The Baltic and North Sea`, 'user');
        console.log("area Choice is:", areaChoice);
        setTimeout(botQuestion5, 1000);
        break;
      case "theAlps":
        showMessage(`Central Uplands, The Alps and the Mediterranean`, 'user');
        console.log("area Choice is:", areaChoice);
        setTimeout(botQuestion5, 1000);
        break;
    }
  }, { once: true });  //function only used once
}


//---------------- Bot Question 5 - Date to travel -------------------------//

const botQuestion5 = () => {
  console.log("You have entered Question 5 function"); //reference for me to help me track the flow
  showMessage(`We have some amazing locations in this area`, 'bot');
  showMessage(`Please use the date picker on the right to choose the date you wish to travel`, 'bot');

  //create date input field to choose date
  const chooseDate = document.getElementById("input-wrapper")
  chooseDate.innerHTML = `
    <input type="date" id="trip-start" name="trip-start" value="2023-09-03" min="2023-09-03" max="2024-12-31" />
    `
  //document.getElementById("name-input").readOnly = true; My attempt at getting the input field for the date working. At this stage the date field only works when the user users the date picker and NOT when they enter a date into the input field//

  //event listener for when user input's date
  chooseDate.addEventListener("change", function (whichButton) {
    let usersDate = document.getElementById("trip-start").value;
    console.log(usersDate)
    showMessage(`${usersDate}`, 'user');
    setTimeout(botQuestion6, 1000);
  })
}


//---------------- Bot Question 6 - Confirmation to proceed -------------------------//

const botQuestion6 = () => {
  console.log("You have entered Question 6 function"); //reference for me to help me track the flow
  showMessage(`Our team now have enough information to prepare some options for you`, 'bot');
  showMessage(`We will leave you with a reference number that will help you access more details for your journey`, 'bot');
  setTimeout(showMessage(`Would you like as to procceed?`, 'bot'), 1000); //this setTimeout doesn't seem to work?

  //create 2 buttons - for confirmation (YES or NO)
  const q6Buttons = document.getElementById("input-wrapper")
  q6Buttons.innerHTML = `
 <button id="yesBtn" value="yes">YES</button>
 <button id="noBtn" value="no">NO</button>
  `
  //event listener for when user clicks on their selected button (YES or NO)
  q6Buttons.addEventListener("click", function (q6Buttons) {
    if (q6Buttons.target.value == "yes") {
      let userConfirmation = "yes"
      showMessage(`${userConfirmation}`, 'user');
      showMessage(`Great! You should receive an email from us shortly`, 'bot');
      showMessage(`Your reference number is : 34534212`, 'bot');
      showMessage(`Thank you for visiting us, and happy flying`, 'bot');
      setTimeout(botChatEnd, 1000);
    } else if (q6Buttons.target.value === "no") {
      let userConfirmation = "no"
      showMessage(`${userConfirmation}`, 'user');
      showMessage(`You're request has been cancelled`, 'bot');
      showMessage(`We hope you visit again soon, Good bye`, 'bot');
      setTimeout(botChatEnd, 1000);
    }
  })
}


//---------------- Bot Chat End -------------------------//

const botChatEnd = () => {
  console.log("You have entered the end function"); //reference for me to help me track the flow

  //remove buttons and re-create the input field so it looks the same as beginning
  const areaOptions = document.getElementById("input-wrapper")
  areaOptions.innerHTML = `
    <form id="name-form">
    <input id="name-input" type="text" placeholder="Type here...." autofocus="autofocus" />
    <button class="send-btn" type="submit">
      Send
    </button>
  </form>
  `
  //site will reload when user types any input into the text and presses the submit button
}

// Set up your eventlisteners here - I have ONLY ONE event listener OUTSIDE my functions. The following is suggested in the instructions.md...I could use it to validate the first 2 questions (that use the input text bar) but after that I have eventlisteners in each function to handle events from buttons, date, and dropdown menu. I don't think this is neat code, but it works.

//---------------- Event Listener for Input text, Question 1 and 2 only -------------------------//

logSubmit = (event) => {  //listen for when form is submitted (submit button or enter is pressed)
  console.log(`Question count inside logsubmit:`, questionCount) //reference for me to help me track the flow, I had issues with this

  event.preventDefault(); //still trying to understand how this works
  const nameSubmitted = document.getElementById("name-input")
  usersName = nameSubmitted.value;
  showMessage(`${usersName}`, 'user');
  nameSubmitted.value = "";
  if (questionCount == 0) {
    questionCount = 1;
    setTimeout(botQuestion2, 1000); //I had problems with where to put this, got help from a code snippet in our Slack :-)
  } else if (questionCount == 1) {
    questionCount = 2;
    setTimeout(botQuestion3, 1000);

    //----after Question 3 this function is no longer used, I have added eventlisteners INSIDE the functons for further questions as I could not work out how to call this one again when using buttons, date, or select dropdown as inout. I realise this isn't a good flow (Q1 and Q2 share their eventlistener which is outside their function) but this is how I got it to work :-)-----//
  }
}

//when form is submitted
const form = document.getElementById("name-form");
form.addEventListener("submit", logSubmit);

//----- First function - When the website is loaded, the chatbot asks first question, after a 1 second delay ------//

setTimeout(botQuestion1, 1000) //Step 1 - played around with the value

