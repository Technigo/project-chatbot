// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat-messages")
const inputWrapper = document.getElementById("input-wrapper") // Wrapper for input/buttons
const nameForm = document.getElementById("name-form") // Form to capture the user's name
const nameInput = document.getElementById("name-input") // Input for the name

// Store user choices
let userName = ""
const userChoices = {} // create an empty object to store several key-values

// Add audio elements for feedback sounds
const botAudio = new Audio()
botAudio.src = "./assets/bot.wav"

const userAudio = new Audio()
userAudio.src = "./assets/user.wav"

// Functions goes here 👇

// Function to show chat bubbles
const showMessage = (message, sender, delay = 0) => {
  setTimeout(() => {
    if (sender === "user") {
      // Play user sound and show message
      userAudio.currentTime = 0
      userAudio.play()
      chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    } else if (sender === "bot") {
      // Play bot sound and show message
      botAudio.currentTime = 0
      botAudio.play()
      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
    }
    chat.scrollTop = chat.scrollHeight // Scroll to the latest message
  }, delay)
}

// Function to handle name input and greeting
const saveUsername = (event) => {
  event.preventDefault() // Prevent page refresh
  userName = nameInput.value.toUpperCase().trim() // Capture the name and trim whitespace
  showMessage(`My name is ${userName}!`, "user") // Display user's name as a message
  nameInput.value = "" // Clear the input field
  setTimeout(() => showMessage(`${userName} is a wonderful name!`, "bot", 1000), 1000)
  setTimeout(() => askDestination(), 2000) // Proceed to the next question
}

// Ask the first question (dream destination)
const askDestination = () => {
  showMessage(`What’s your dream destination, ${userName}?`, "bot", 1000)
  setTimeout(() => renderOptions(["Paris", "Tokyo", "Dubai"], handleDestinationSelection), 1500)
}

// Handle the answer to the first question (destination)
const handleDestinationSelection = (answer) => {
  userChoices["Dream Destination"] = answer
  showMessage(answer, "user")
  let response = ""
  if (answer === "Paris") response = "Ah, the City of Light! You'd love its history and architecture."
  else if (answer === "Tokyo") response = "Tokyo is a vibrant metropolis, known for its cutting-edge technology and deep-rooted traditions. A perfect blend of modern and cultural experiences!"
  else response = "Dubai is known for its luxury and modern wonders!"
  setTimeout(() => showMessage(response, "bot", 1000), 1000)
  setTimeout(() => askPreference(), 2000) // Proceed to the next question
}

// Ask the second question (travel preference)
const askPreference = () => {
  showMessage("Do you prefer mountains, beaches, or cities?", "bot", 1000)
  setTimeout(() => renderOptions(["Mountains", "Beaches", "Cities"], handlePreferenceSelection), 1500)
}

// Handle the answer to the second question (preference)
const handlePreferenceSelection = (answer) => {
  userChoices["Preference"] = answer
  showMessage(answer, "user")
  let response = ""
  if (answer === "Mountains") response = "Mountains are breathtaking, consider the Alps or Rockies!"
  else if (answer === "Beaches") response = "Beaches are relaxing! You might love the Maldives."
  else response = "Cities have so much to offer! Think about visiting New York."
  setTimeout(() => showMessage(response, "bot", 1000), 1000)
  setTimeout(() => askBudget(), 2000) // Proceed to the third question
}

// Ask the third question (budget)
const askBudget = () => {
  showMessage("What’s your budget for the trip?", "bot", 1000)
  setTimeout(() => renderOptions(["Less than $1000", "$1000-$2000", "More than $2000"], handleBudgetSelection), 1500)
}

// Handle the answer to the third question (budget)
const handleBudgetSelection = (answer) => {
  userChoices["Budget"] = answer
  showMessage(answer, "user")
  let response = ""
  if (answer === "Less than $1000") response = "Southeast Asia offers amazing experiences for a low budget!"
  else if (answer === "$1000-$2000") response = "With that budget, Europe or South America could be perfect!"
  else response = "With a larger budget, luxury awaits you in places like Paris or Dubai!"
  setTimeout(() => showMessage(response, "bot", 1000), 1000)
  setTimeout(() => askTravelStyle(), 2000) // Proceed to the fourth question
}

// Ask the fourth question (travel style)
const askTravelStyle = () => {
  showMessage("Are you traveling solo or with others?", "bot", 1000)
  setTimeout(() => renderOptions(["Solo", "With family", "With friends"], handleTravelStyleSelection), 1500)
}

// Handle the answer to the fourth question (travel style)
const handleTravelStyleSelection = (answer) => {
  userChoices["Travel Style"] = answer
  showMessage(answer, "user")
  let response = ""
  if (answer === "Solo") response = "Solo travel is a great way to discover yourself!"
  else if (answer === "With family") response = "Family trips can create unforgettable memories!"
  else response = "Trips with friends are always full of fun!"
  setTimeout(() => showMessage(response, "bot", 1000), 1000)
  setTimeout(() => askTripPriority(), 2000) // Proceed to the fifth question
}

// Ask the fifth question (trip priority)
const askTripPriority = () => {
  showMessage("What's the most important part of your trip: adventure, culture, or relaxation?", "bot", 1000)
  setTimeout(() => renderOptions(["Adventure", "Culture", "Relaxation"], handleTripPrioritySelection), 1500)
}

// Handle the answer to the fifth question (trip priority)
const handleTripPrioritySelection = (answer) => {
  userChoices["Trip Priority"] = answer
  showMessage(answer, "user")
  let response = ""
  if (answer === "Adventure") response = "Adventure seekers love places like New Zealand!"
  else if (answer === "Culture") response = "Culture enthusiasts enjoy historic cities like Rome."
  else response = "Relaxation awaits you at serene beach getaways like the Maldives."
  setTimeout(() => showMessage(response, "bot", 1000), 1000)
  setTimeout(() => showTripSummary(), 2000) // Proceed to the summary
}

// Function to show a summary
const showTripSummary = () => {
  const { "Dream Destination": destination, Preference: preference, Budget: budget, "Travel Style": travelStyle, "Trip Priority": priority } = userChoices
  const summaryMessage = `Here's a summary of your trip: 
  You're planning to visit ${destination}, where you'll enjoy ${preference.toLowerCase()} activities. You'll be traveling ${travelStyle.toLowerCase()} with a budget of ${budget}, and your main focus is on ${priority.toLowerCase()}.`
  showMessage(summaryMessage, "bot", 1000)
  setTimeout(() => feedbackRequest(), 1000)
  
  // setTimeout(() => showMessage(`Thanks for chatting, ${userName}! Enjoy planning your adventure!`, "bot", 2000), 2000)
}

// Function to ask for feedback
const feedbackRequest = () => {
  showMessage(`Thank you ${userName} for asking me about your trip adventure! How did you feel about my response?`, "bot", 1000)
  setTimeout(() => renderOptions(["It helps a lot👍", "Not useful 💔"], handleFeedback), 1500)
}

// Handle the answer to the feedback (if else)
const handleFeedback = (feedback) => {
  // Display the user's feedback as a message
  showMessage(feedback, "user")

  // Prepare the bot's response based on the feedback
  let response = ""
  if (feedback === "It helps a lot👍") {
    response = "Thank you so much, it means a lot to me❤️"
  } else {
    response = "Sorry to hear that. I'll learn more and try to give better suggestions next time😊"
  }

  inputWrapper.innerHTML = "" // Clear the inputWrapper to hide the buttons after the final question
  
  setTimeout(() => showMessage(response, "bot", 1000), 1000)
}


// Helper function to render options as buttons
const renderOptions = (options, callback) => {
  inputWrapper.innerHTML = "" // Clear previous options
  options.forEach(option => {
    const button = document.createElement("button")
    button.classList.add("option-btn")
    button.innerText = option
    button.addEventListener("click", () => callback(option))
    inputWrapper.appendChild(button)
  })  //👈🏻 A loop that iterates over each item in the options array. For each option, the following steps are executed.
}

// Event listener for form submission
nameForm.addEventListener("submit", saveUsername)

// Start the conversation with a greeting after a brief delay
setTimeout(() => showMessage("Welcome to Travel Adventure Chatbot! May I get your name?😊", "bot"), 1000)