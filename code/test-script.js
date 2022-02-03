// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const input = document.getElementById("name-input");
const sendButton = document.getElementById("send-btn");
const inputWrapper = document.getElementById("input-wrapper");
const form_ = document.getElementById("name-form")
let buttons = document.getElementsByTagName("button");

// Global variables, if you need any, declared here
let numberOfQuestionsAsked = 0
const greetingMessage = `Hello there, What's your name?`;
let userNameDict = {}
// Functions declared here

const form = document.getElementById("name-form");
form.addEventListener("submit", (event) => {
  //prevent reload of page
  event.preventDefault();
});

const buttonClicked = () => {
//   console.log(event.target)
  numberOfQuestionsAsked++
  

  if (numberOfQuestionsAsked < 5) {
    // console.log(numberOfQuestionsAsked)
    if (numberOfQuestionsAsked === 1) {
      showMessage(input.value, "user");
      //saves the user's name
      userNameDict["name"] = input.value
      questionAge(userNameDict["name"])
    } else if (numberOfQuestionsAsked === 2) {
      showMessage(event.target.innerHTML, "user");
      questionEnergy()
    } else if (numberOfQuestionsAsked === 3) {
        console.log(numberOfQuestionsAsked)
      showMessage(userNameDict["slider-value"], "user");
      questionMood()
    } else if (numberOfQuestionsAsked === 4) {
        
    }
    
  }
  input.value = '';
};


for (let button of buttons) {
button.addEventListener("click", buttonClicked)
// console.log(buttons);
};

const questionAge = (name) => {
    showMessage(`Hello ${name}! How old are you?`,"bot")
    input.type = "button"
    // form_.classList.toggle("display-none")
  
// create the buttons
    let buttonList = createNewElement("button", 3)

// array with the text for buttons with age options
    const ageButtonText = ["0-29", "30-59", "60+"]

//Send buttons to get their innerHTML changed to the ageButtonText array's content
    giveElementsText(buttonList, ageButtonText)

//Send buttons to be appended by their container
    for ( let button of buttonList ) {
        appendElementToParent(button, inputWrapper)
    }

//Send buttons to be clickable
    for ( let button of buttonList ) {
        makeClickable(button)
    }
}

const questionMood = () => {
    showMessage(`So, ${userNameDict["name"]}.. Which smiley best describes your mood?`,"bot")
    inputWrapper.innerHTML = ''

    const smileyDivs = createNewElement("div", 5); // Array with the divs that will hold the smileys
    
    const smileysText = ["&#128556", "&#128525", "&#128549", "&#128520", "&#128513"]; // array of smileydiv content
    
    giveElementsText(smileyDivs, smileysText); //Send divs to get their innerHTML changed to the smileysText array's content
    
    for ( let div of smileyDivs ) { //Send smileys to be appended by their container
        appendElementToParent(div, inputWrapper)
    }

    for ( let div of smileyDivs ) { //Send smileyDivs to be clickable and add a class for styling
        div.classList.add("smiley-div")
        makeClickable(div)
    }
}
const questionEnergy=()=>{
  showMessage(`What's your energy level?`,"bot")
  inputWrapper.innerHTML=""
  const slideContainer=document.createElement("div")
  slideContainer.className="slide-container"
  const slider =document.createElement("input")
  const pTag =document.createElement("p")
  pTag.id = "demo"
  slider.id = "myRange"
  slider.type="range"
  slider.min="1" 
  slider.max="10"
  slider.className="slider"
  slideContainer.appendChild(slider)
  inputWrapper.appendChild(slideContainer)
  inputWrapper.appendChild(sendButton)
  sendButton.classList.toggle("more-margin")
  userNameDict["slider-value"] = slider.value
//   userNameDict["energy-level"] = slider.value;
 // const slide = document.getElementById("myRange");
  const output = document.getElementById("demo");
//   output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    console.log(this.value)
    // output.innerHTML = this.value;
    userNameDict["slider-value"] = this.value
  }
}


const questionWeather = () => {
    showMessage(`Which word would best describe the current weather?`,"bot")

    inputWrapper.innerHTML=""

    const selecter = document.createElement("select")
    inputWrapper.appendChild(selecter)
}

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

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    // console.log(sender);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    // console.log(sender);
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
const greeting = () => {
  showMessage(greetingMessage, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

setTimeout(greeting, 500)



// function to change the background color into a random color
let values = [];
function makeColors () {
  
  for (let i = 0; i < 3; i++) {
    values.push(Math.floor(Math.random() * (256 - 0) + 0))
  }
}
makeColors();
document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${values[0]}, ${values[1]}, ${values[2]})`;


