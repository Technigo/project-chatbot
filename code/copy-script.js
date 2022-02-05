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
// const notAllowed = [1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "?", "@", ":", ";"];

const blueish = "linear-gradient(90deg, rgba(10,41,84,1) 0%, rgba(10,63,64,1) 30%, rgba(19,74,92,1) 53%, rgba(26,49,112,1) 72%, rgba(24,21,91,1) 88%)";
const greenish = "linear-gradient(90deg, rgba(18,8,80,1) 0%, rgba(11,52,9,1) 30%, rgba(50,92,19,1) 53%, rgba(26,112,49,1) 72%, rgba(21,91,73,1) 88%)";
const redish = "linear-gradient(90deg, rgba(84,10,10,1) 0%, rgba(64,25,10,1) 30%, rgba(92,76,19,1) 53%, rgba(96,112,26,1) 72%, rgba(91,64,21,1) 88%)";
const yellowish = "linear-gradient(90deg, rgba(51,48,11,1) 0%, rgba(75,64,14,1) 30%, rgba(90,92,19,1) 53%, rgba(131,158,55,1) 72%, rgba(176,190,34,1) 88%)";
const purpleish = "linear-gradient(90deg, rgba(48,11,51,1) 0%, rgba(21,14,75,1) 30%, rgba(75,19,92,1) 53%, rgba(78,26,70,1) 72%, rgba(131,27,49,1) 88%)";
const backgroundGradients = [blueish, redish, greenish, yellowish, purpleish];

// Functions declared here

const greeting = () => {
  showMessage(`Hello stranger! What's your name?`, 'bot');
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
      showMessage(`I am between ${allKnowingObj["age-range"]}`, "user");
      setTimeout(questionEnergy, 500);
    } else if (numberOfQuestionsAsked === 3) {
      showMessage(allKnowingObj["slider-value"], "user");
      setTimeout(questionMood(), 2000);
    } else if (numberOfQuestionsAsked === 4) {
      showMessage(allKnowingObj["mood-smiley"], "user");
      setTimeout(questionWeather, 500);
    } else if (numberOfQuestionsAsked === 5) {
      showMessage(allKnowingObj["weather-choice"], "user");
      setTimeout(questionHappy, 500);
    };
  } else {
      if (allKnowingObj["happy"].includes("yes") || allKnowingObj["happy"].includes("oui")) {
        changeBackground(backgroundGradients[randomIndex()]);
      } else {
        changeBackground("black");
      };
    inputWrapper.innerHTML = "";
  };
  input.value = '';
};

form.addEventListener("submit", (event) => {
  //prevent reload of page
  event.preventDefault();
});

const changeBackground = (value) => {
  document.getElementsByTagName("body")[0].style.background = value;
}

sendButton.addEventListener("click", buttonClicked);

const questionAge = () => {
  showMessage("How old are you?", "bot");
  inputWrapper.innerHTML = '';

  let button1 = document.createElement('button');
  let button2 = document.createElement('button');
  let button3 = document.createElement('button');

  button1.innerHTML = '0-29';
  button2.innerHTML = '30-59';
  button3.innerHTML = '60+';

  const buttonsToAppend = [button1, button2, button3];
  


  for (let button of buttonsToAppend) {
    inputWrapper.appendChild(button);
    button.onclick = function () {
      allKnowingObj["age-range"] = this.innerHTML;
      buttonClicked();
    };
  };
};

const ageButtons = createNewElement("button", 3);
  giveElementsText(ageButtons, ageAlternatives);
  
  for (let button of ageButtons) {
    appendElementToParent(button, inputWrapper)
    makeClickable(button);
  };

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

const appendElementToParent = (element, parent) => {
  parent.appendChild(element)
}

const makeClickable = (element) => {
  element.addEventListener("click", buttonClicked)
}


const questionMood = () => {
  showMessage(`So, ${allKnowingObj["name"]}.. Which smiley best describes your mood?`,"bot")
  inputWrapper.innerHTML = ''
  
  let smileyDiv1 = document.createElement('div')
  let smileyDiv2 = document.createElement('div')
  let smileyDiv3 = document.createElement('div')
  let smileyDiv4 = document.createElement('div')
  let smileyDiv5 = document.createElement('div')

  smileyDiv1.innerHTML = '&#128520'
  smileyDiv2.innerHTML = '&#128525'
  smileyDiv3.innerHTML = '&#128549'
  smileyDiv4.innerHTML = '&#128556'
  smileyDiv5.innerHTML = '&#128513'

  let smileys = [smileyDiv1, smileyDiv2, smileyDiv3, smileyDiv4, smileyDiv5]
  for (let smiley of smileys) {
    smiley.classList.add("smiley-div")
    smiley.onclick = function (smiley) {
      allKnowingObj["mood-smiley"] = this.innerHTML;
      buttonClicked()
    }
    inputWrapper.appendChild(smiley)
  }
}

const questionEnergy=()=>{
  showMessage(`What's your energy level?`,"bot")
  inputWrapper.innerHTML=""
  const slideContainer=document.createElement("div")
  slideContainer.className="slide-container"
  const slider =document.createElement("input")
  slider.type="range"
  slider.min="1" 
  slider.max="5"
  slider.className="slider"
  slideContainer.appendChild(slider)
  inputWrapper.appendChild(slideContainer)
  inputWrapper.appendChild(sendButton)
  sendButton.classList.toggle("more-margin")
  allKnowingObj["slider-value"] = slider.value
 
  // const output = document.getElementById("demo");

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    // output.innerHTML = this.value;
    allKnowingObj["slider-value"] = this.value
    // showMessage(this.value, "user")
  }
}

const questionWeather = () => {
  showMessage(`Which word would best describe the current weather?`,"bot")

  inputWrapper.innerHTML=""

  const selecter = document.createElement("select")
  
  const weatherArray = ["Sunny", "Cloudy", "Rainy", "Snowy", "Stormy", "Windy", "Hail"]

  for (let i = 0; i < 7; i++) {
    let optionX = document.createElement("option");
    optionX.innerHTML = weatherArray[i];
    selecter.appendChild(optionX);
  }
  inputWrapper.appendChild(selecter)
  inputWrapper.append(sendButton)
  allKnowingObj["weather-choice"] = selecter.value
  selecter.oninput = function () {
    allKnowingObj["weather-choice"] = this.value
  }
  sendButton.onclick = buttonClicked
}

const questionHappy = () => {
  showMessage("Ah, how lovely!", "bot")
  showMessage("I only have one final question before revealing your mood color! Are you happy with our service","bot")
  
  // const newForm = document.createElement("form")
  inputWrapper.innerHTML = ""
  // const newInput = document.createElement("input")
  // newInput.type = "text"
  inputWrapper.appendChild(form)
  form.appendChild(input)
  form.appendChild(sendButton)
  sendButton.onclick = buttonClicked
  input.oninput = function() {
    // output.innerHTML = this.value;
    allKnowingObj["happy"] = this.value
  }
}



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(sender);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(sender);
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

// Starts here

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.





// function to change the background color into a random color
let values = [];
function makeColors () {
  
  for (let i = 0; i < 3; i++) {
    values.push(Math.floor(Math.random() * (256 - 0) + 0))
  }
}
// makeColors();
// document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${values[0]}, ${values[1]}, ${values[2]})`;


const randomIndex = () => {
  return (Math.floor(Math.random() * (5 - 0) + 0))
}

//______________________________________________________________





// form.addEventListener("submit", (event) => {
//   //prevent reload of page
//   event.preventDefault()
//   numberOfQuestionsAsked++
//   //posts user's message
//   showMessage(input.value, "user")
  
//   if (numberOfQuestionsAsked < 6) {
//     console.log(numberOfQuestionsAsked)
//     if (numberOfQuestionsAsked === 1) {
//       //saves the user's name
//       let userName = input.value
//       questionAge(userName)
//     } else if (numberOfQuestionsAsked === 2) {
//       console.log(numberOfQuestionsAsked)
//     } else if (numberOfQuestionsAsked === 3) {
//       console.log(numberOfQuestionsAsked)
//     } else if (numberOfQuestionsAsked === 4) {
//       console.log(numberOfQuestionsAsked)
//     } else if (numberOfQuestionsAsked === 5) {
//       console.log(numberOfQuestionsAsked)
//     }
    
//   }
//   input.value = '';
// })




// const checkForYes = (inputValue) => {
//   console.log(inputValue)
// }

// const form = document.getElementById("name-form");
// form.addEventListener("submit", handleNameInput);

// const handleNameInput = (event) => {
//   event.preventDefault();
//   let userName = input.value;
//   showMessage(userName, "user");
//   input.value = '';
// };




// const handleNameInput = (event) => {
//   event.preventDefault()
//   // Store the value in a variable so we can access it after we 
// 	// clear it from the input
//   const name = nameInput.value
//   showMessage(name, 'user')
//   nameInput.value = ''
// }

// sendButton.addEventListener("click", function () {
  
// })