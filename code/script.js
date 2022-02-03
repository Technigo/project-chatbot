// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const input = document.getElementById("name-input");
const sendButton = document.getElementById("send-btn");
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");
let buttons = document.getElementsByTagName("button"); // tjänar syfte?? se rad 53
const notAllowed = [1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "?", "@", ":", ";"]

// Global variables, if you need any, declared here
let numberOfQuestionsAsked = 0
const greetingMessage = `Hello there, What's your name?`;
let userNameDict = {}
// Functions declared here


form.addEventListener("submit", (event) => {
  //prevent reload of page
  event.preventDefault();
});

const buttonClicked = () => {
  numberOfQuestionsAsked++
  
  if (numberOfQuestionsAsked < 6) {
    console.log(numberOfQuestionsAsked)
    if (numberOfQuestionsAsked === 1) {
      showMessage(input.value, "user")
      //saves the user's name
      userNameDict["name"] = input.value
      questionAge()
    } else if (numberOfQuestionsAsked === 2) {
      showMessage(event.target.innerHTML, "user")
      questionEnergy()
    } else if (numberOfQuestionsAsked === 3) {
      showMessage(userNameDict["slider-value"], "user");
      questionMood()
    } else if (numberOfQuestionsAsked === 4) {
      // console.log("sista frågan")
      showMessage(userNameDict["slider-value"], "user");
      questionWeather();
    } else if (numberOfQuestionsAsked === 5) {
      questionHappy()
      // console.log(numberOfQuestionsAsked)
    }
  } else {
    
    let statement = userNameDict["happy"].includes("yes")
    let statement2 = userNameDict["happy"].includes("oui")
      if (statement || statement2) {
        makeColors();
        document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${values[0]}, ${values[1]}, ${values[2]})`;
      } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "black"
      }
  }


  input.value = '';
};


for (let button of buttons) {
button.addEventListener("click", buttonClicked)
console.log(buttons);
};




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

const questionAge = () => {
  showMessage(`Hello ${userNameDict["name"]}! How old are you?`,"bot")
  inputWrapper.innerHTML = ''
  // input.type = "button"

  let button1 = document.createElement('button')
  let button2 = document.createElement('button')
  let button3 = document.createElement('button')

  button1.innerHTML = '0-29'
  button2.innerHTML = '30-59'
  button3.innerHTML = '60+'

  let buttonsToAppend = [button1, button2, button3]

  for (let button of buttonsToAppend) {
    inputWrapper.appendChild(button)
    button.onclick = buttonClicked
  }

}

const questionMood = () => {
  showMessage(`So, ${userNameDict["name"]}.. Which smiley best describes your mood?`,"bot")
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
    smiley.onclick = buttonClicked
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
  userNameDict["slider-value"] = slider.value
 // const slide = document.getElementById("myRange");
  const output = document.getElementById("demo");
  // output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    // output.innerHTML = this.value;
    userNameDict["slider-value"] = this.value
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
  sendButton.onclick = buttonClicked
}

const questionHappy = () => {
  showMessage(`Are you happy with our service`,"bot")
  
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
    userNameDict["happy"] = this.value
  }
}

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
const greeting = () => {
  showMessage(greetingMessage, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 0)



// function to change the background color into a random color
let values = [];
function makeColors () {
  
  for (let i = 0; i < 3; i++) {
    values.push(Math.floor(Math.random() * (256 - 0) + 0))
  }
}
// makeColors();
// document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${values[0]}, ${values[1]}, ${values[2]})`;


