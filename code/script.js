// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const input = document.getElementById("name-input");
const sendButton = document.getElementById("send-btn");
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");

// Global variables, if you need any, declared here
let numberOfQuestionsAsked = 0;

let allKnowingObj = {};

const ageAlternatives = ["0-29", "30-59", "60+"]

const smileyHTMLText = ["&#128520", "&#128525", "&#128549", "&#128556", "&#128513"];

//min and max values for the energy range slider
const min_ = document.createElement("p");
const max_ = document.createElement("p");

const weatherArray = ["Sunny", "Cloudy", "Rainy", "Snowy", "Stormy", "Windy", "Hail"];


const blueish = "linear-gradient(90deg, rgba(10,41,84,1) 0%, rgba(10,63,64,1) 30%, rgba(19,74,92,1) 53%, rgba(26,49,112,1) 72%, rgba(24,21,91,1) 88%)";
const greenish = "linear-gradient(90deg, rgba(18,8,80,1) 0%, rgba(11,52,9,1) 30%, rgba(50,92,19,1) 53%, rgba(26,112,49,1) 72%, rgba(21,91,73,1) 88%)";
const redish = "linear-gradient(90deg, rgba(84,10,10,1) 0%, rgba(64,25,10,1) 30%, rgba(92,76,19,1) 53%, rgba(96,112,26,1) 72%, rgba(91,64,21,1) 88%)";
const yellowish = "linear-gradient(90deg, rgba(51,48,11,1) 0%, rgba(75,64,14,1) 30%, rgba(90,92,19,1) 53%, rgba(131,158,55,1) 72%, rgba(176,190,34,1) 88%)";
const purpleish = "linear-gradient(90deg, rgba(48,11,51,1) 0%, rgba(21,14,75,1) 30%, rgba(75,19,92,1) 53%, rgba(78,26,70,1) 72%, rgba(131,27,49,1) 88%)";
const backgroundGradients = [blueish, redish, greenish, yellowish, purpleish];



// Functions declared here

//På firefox är texten från förra gången kvar när man laddar om sidan...
input.value = '';


const greeting = () => {
  showMessage(`Hello stranger! What's your name?`, 'bot');
  input.value = '';
};

setTimeout(greeting, 500);



const buttonClicked = () => {
  
  numberOfQuestionsAsked++;
  if (numberOfQuestionsAsked < 6) {
    if (numberOfQuestionsAsked === 1) {
      showMessage(input.value, "user");
      //saves the user's name
      allKnowingObj["name"] = input.value;
      setTimeout(() => {
        showMessage(`Hello ${allKnowingObj["name"]}! So you're wondering what your mood is? Let me help!
        I'm going to ask you a couple of questions to help deterine the right color for you!`, "bot")
      }, 500);
      setTimeout(questionAge, 2000)
    } else if (numberOfQuestionsAsked === 2) {
      showMessage(`I am ${allKnowingObj["age-range"]} years old`, "user");
      setTimeout(questionEnergy, 500);
    } else if (numberOfQuestionsAsked === 3) {
      showMessage(`I would say I'm at ${allKnowingObj["slider-value"]} out of 10`, "user");
      setTimeout(questionMood(), 2000);
    } else if (numberOfQuestionsAsked === 4) {
      showMessage(allKnowingObj["mood-smiley"], "user");
      setTimeout(questionWeather, 500);
    } else if (numberOfQuestionsAsked === 5) {
      showMessage(allKnowingObj["weather-choice"], "user");
      setTimeout(questionHappy, 500);
    };
  } else {
    setTimeout(() => {
      showMessage("Thank you for your input! Here is your mood colour!", "bot");
      if (allKnowingObj["happy"].includes("yes") || allKnowingObj["happy"].includes("oui")) {
        setTimeout(() => {
          changeBackground(backgroundGradients[randomIndex()]);
        }, 1500);
      } else {
        setTimeout(() => {
          changeBackground("black");
        }, 500);
      };
    }, 500);
    inputWrapper.innerHTML = "";
  };
  input.value = '';
};

const questionAge = () => {
  showMessage("How old are you?", "bot");
  inputWrapper.innerHTML = '';

  const ageButtons = createNewElement("button", 3);
  giveElementsText(ageButtons, ageAlternatives);
  
  for (let button of ageButtons) {
    inputWrapper.appendChild(button);
    button.onclick = function () {
      allKnowingObj["age-range"] = this.innerHTML;
      buttonClicked();
    };
  };
};

const questionEnergy = () => {
  inputWrapper.innerHTML = "";

  if (allKnowingObj["age-range"] == "0-29") {
    showMessage(`Alright young one, what's your energy level?`,"bot"); //Vi kanske kan ändra vilket meddelande som ska postas utifrån vilket svar vi får
  } else if (allKnowingObj["age-range"] == "30-59") {
    showMessage(`What's your energy level?`,"bot");
  } else {
    showMessage(`What's your energy level?`,"bot");
  };

  inputWrapper.appendChild(form);
  form.appendChild(min_);
  form.appendChild(input);
  form.appendChild(max_);
  form.appendChild(sendButton);

  form.classList.add("slide-container");
  input.classList.add("slider");
  sendButton.classList.add("more-margin");
  input.type = "range";
  input.max = "10";
  input.min = "0";
  min_.innerHTML = input.min;
  max_.innerHTML = input.max;
  allKnowingObj["slider-value"] = input.value;

  // Update the current slider value (each time you drag the slider handle)
  input.oninput = function () {
    allKnowingObj["slider-value"] = this.value;
  };
};

const questionMood = () => {
  showMessage(`So, ${allKnowingObj["name"]}.. Which smiley best describes your mood?`,"bot");
  inputWrapper.innerHTML = '';
  const smileyDivs = createNewElement("div", 5);
  giveElementsText(smileyDivs, smileyHTMLText);
  
  for (let smiley of smileyDivs) {
    inputWrapper.appendChild(smiley);
    smiley.classList.add("smiley-div");
    smiley.onclick = function () {
      allKnowingObj["mood-smiley"] = this.innerHTML;
      buttonClicked();
      input.value = '';
    };
  };
};

const questionWeather = () => {
  showMessage(`Which word would best describe the current weather?`,"bot");
  inputWrapper.innerHTML = ""

  const selecter = document.createElement("select")
  inputWrapper.appendChild(selecter);
  inputWrapper.append(sendButton);

  const options = createNewElement("option", 7);
  giveElementsText(options, weatherArray)
  for (let option of options) {
    selecter.appendChild(option);
  }

  allKnowingObj["weather-choice"] = selecter.value;
  selecter.oninput = function () {
    allKnowingObj["weather-choice"] = this.value;
  };
}

const questionHappy = () => {
  showMessage("Ah, how lovely!", "bot")
  showMessage("I only have one final question before revealing your mood color! Are you happy with our service?","bot");
  
  form.removeChild(min_);
  form.removeChild(max_);
  inputWrapper.innerHTML = "";
  
 
  inputWrapper.appendChild(form);
  form.appendChild(input);
  form.appendChild(sendButton);
  input.type = "text";
  input.value = '';
  input.classList.remove("slider");
  // sendButton.onclick = buttonClicked;
  input.oninput = function() {
    allKnowingObj["happy"] = this.value;
  };
};


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
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
}

//Helper functions

const createNewElement = (type, numberOfTimes) => {
  let elementList = []
  for (let i= 0; i < numberOfTimes; i++) {
      elementList.push(document.createElement(type))
  }
  return elementList
}

const giveElementsText = (elements, text) => {
  for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = text[i]
  }
}

const changeBackground = (value) => {
  document.getElementsByTagName("body")[0].style.background = value;
}

const randomIndex = () => {
  return (Math.floor(Math.random() * (5 - 0) + 0))
}

// Set up your eventlisteners here

//prevent reload of page
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

sendButton.addEventListener("click", buttonClicked);
