// All the DOM selectors stored as short variables

const chat = document.getElementById("chat")
const userInput = document.getElementById("user-input")
const sendBtn = document.getElementById("send-btn")
const nameForm = document.getElementById("name-form")
const startButton = document.getElementById("startButton")
const startPage = document.getElementById("startPage")
const inputWrapper = document.getElementById("input-wrapper")
const messageAudio = new Audio ("Audio/popsound.wav");

//FUNCTIONS

// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  if (sender === "user") {
    console.log("Hello!")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="img/traveler.png" alt="User" />
      </section>
    `
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="img/agent.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

// add a sound to each sending message

messageAudio.currentTime = 0
messageAudio.play()

// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  
chat.scrollTop = chat.scrollHeight
}

//to update the option for travel duration

const updateLess = () => {
  const selectLess = document.getElementById("selectLess")
  if (selectLess.value === "week2") {
    userReply(`1 week`)
    setTimeout(showTravelTime, 1000)
  } else if (selectLess.value === "month2") {
    userReply(`1 month`)
    setTimeout(showTravelTime, 1000)
  } else if (selectLess.value === "months2") {
    userReply(`3 months`)
    setTimeout(showTravelTime, 1000)
  } else {
    alert("Not a valid option!")
  }
}

//to update the option for travel duration

const updateMore = () => {
  const selectMore = document.getElementById("selectMore")
  if (selectMore.value === "week") {
    userReply(`1 week`)
    setTimeout(showTravelTime, 1000)
  } else if (selectMore.value === "month") {
    userReply(`1 month`)
    setTimeout(showTravelTime, 1000)
  } else if (selectMore.value === "months") {
    userReply(`3 months`)
    setTimeout(showTravelTime, 1000)
  } else {
    alert("Not a valid option!")
  }
}

// QUESTIONS
// show the first question after clicking to the start button

startButton.onclick = () => {
  startPage.style.display = "none"
  setTimeout(greeting, 1000)
}

// Question 1

const greeting = () => {
  showMessage(`Welcome stranger! What's your name?`, "bot")
}
const userReply = (input) => {
  showMessage(input, "user")
}
sendBtn.addEventListener("click", () => {
  userReply(userInput.value)
  setTimeout(pickDestination, 1000)
})

// Question 2

const pickDestination = () => {
  showMessage(`Nice to meet you ${userInput.value}! Choose one of the below options!`, "bot")
  inputWrapper.innerHTML = `
  <button id= "beachBtn"> Beach </button>
  <button id= "skiBtn"> Ski </button>
  <button id= "cityBtn"> City </button>
  `
  const beachBtn = document.getElementById("beachBtn")
  const skiBtn = document.getElementById("skiBtn")
  const cityBtn = document.getElementById("cityBtn")
  beachBtn.onclick = () => {

    //when user click on the Ski button, it's going to change background img to snowimage.
    
    document.body.style.backgroundImage = "url('IMG/beach.jpg')";
    userReply(`beach`)                 //invoke userReply function with the input "beach"
    setTimeout(pickTravelDuration, 1000)  // After 1s invoke function pickTravelDuration
  }
  skiBtn.onclick = () => {
    document.body.style.backgroundImage = "url('IMG/sky.jpg')";
    userReply(`ski`)
    setTimeout(pickTravelDuration, 1000)
  }
  cityBtn.onclick = () => {
    document.body.style.backgroundImage = "url('IMG/city.jpg')";
    userReply(`city`)
    setTimeout(pickTravelDuration, 1000)
  }
} 

// Question 3

const pickTravelDuration = () => {
  showMessage(`Nice choise! Now choose how far you want to travel?`, "bot")
  inputWrapper.innerHTML = `
  <button id= "lessBtn"> Less than 8 hours </button>
  <button id= "moreBtn"> More than 8 hours </button>
  `
  const lessBtn = document.getElementById("lessBtn")
  const moreBtn = document.getElementById("moreBtn")
  lessBtn.onclick = () => {
    inputWrapper.innerHTML = `
      <select id="selectLess" onchange="updateLess()" >
        <option value="" selected disabled>When do you want to leave?</option>
        <option id= "week2" value="week2">In 1 week</option>
        <option id= "month2" value="month2">In 1 month</option>
        <option id= "months2" value="months2">In 3 months</option>
      </select>
      `
    userReply(`Less than 8 hours`)
  }
  moreBtn.onclick = () => {
    inputWrapper.innerHTML = `
      <select id="selectMore" onchange= "updateMore ()">
        <option value="" selected disabled>When do you want to leave?</option>
        <option id= "week" value="week">In 1 week</option>
        <option id= "month" value="month">In 1 month</option>
        <option id= "months" value="months">In 3 months</option>
      </select>
      `
    userReply(`More than 8 hours`)
  }
}

// Question 4

const showTravelTime = () => {
  showMessage(`Great!`, "bot")
  setTimeout(() => showMessage(`Unfortunately it´s fully booked but we will send you here instead! \uD83C\uDF32 \uD83C\uDF32
  `, "bot") , 1000)
  document.body.style.backgroundImage = "url('IMG/nature.jpg')";
}

// prevent page refresh

nameForm.addEventListener("submit", (event) => {
  event.preventDefault()
})
