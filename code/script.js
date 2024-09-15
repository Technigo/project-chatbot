// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat")
const inputWrapper = document.getElementById("input-wrapper")
const form = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")

let currentQuestionNumber = 1 // Start with Question 1
let score= 0 

// Question data
const Question1 = {
  question: "Who released a single in 1999 called Genie In a Bottle?",
  options: ["Britney Spears", "Christina Aguilera", "Robyn", "Corona"],
  correctAnswer: "Christina Aguilera"
}

const Question2 = {
  question: "Which song has the lyrics: 'It´s like ten thousand spoons when all you need is a knife'?",
  options: ["Torn", "Ironic", "Killing me softly", "You learn"],
  correctAnswer: "Ironic"
}

const Question3 = {
  question: "Who wrote the song 'I will always love you'?",
  options: ["Whitney Houston", "Celine Dion", "Dolly Parton", "Mariah Carey"],
  correctAnswer: "Dolly Parton"
}

const Question4= {
  question: "Which artist has not competed in the Eurovision Song Contest?",
  options: ["Celine Dion", "Julio Iglesias", "Bonnie Tyler", "Vanessa Paradis"],
  correctAnswer: "Vanessa Paradis"
}

const Question5= {
  question: "Who is the composer of 'Moonlight Sonata'?",
  options: ["Bach", "Beethoven", "Mozart", "Hendel"],
  correctAnswer: "Beethoven"
}

const Question6= {
  question: "What band was Kurt Cobain the lead singer of?",
  options: ["Pearl Jam", "Nirvana", "Soundgarden", "Hole"],
  correctAnswer: "Nirvana"
}

const Question7= {
  question: "Which artist had a 2019 hit with the song 'Bad Guy'?",
  options: ["Billie Eilish", "Ariana Grande", "Selena Gomez", "Lizzo"],
  correctAnswer: "Billie Eilish"
}

const Question8= {
  question: "Who won the first season of American Idol?",
  options: ["Jennifer Hudson", "Adam Lambert", "Kelly Clarkson", "Carrie Underwood"],
  correctAnswer: "Kelly Clarkson"
}


// Array of questions
const questions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8]

// A function that will add a chat bubble in the correct place based on who the sender is
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
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot')
  
  // Show the name input field
  inputWrapper.innerHTML = `
    <input id="name-input" placeholder="Enter name" />
    <button id="name-submit">Submit</button>
  `
  

  document.getElementById('name-submit').addEventListener('click', () => {
    const userName = document.getElementById('name-input').value
    if (userName) {
      showMessage(userName, 'user')
      setTimeout(() => {
        showMessage(`Nice to meet you, ${userName}! Are you ready for a quiz?`, 'bot')
        setTimeout(showYesNoButtons, 900)
      }, 700)
    }
  })
}

chat.scrollTop = chat.scrollHeight

// Show Yes/No buttons for quiz confirmation
const showYesNoButtons = () => {
  inputWrapper.innerHTML = `
    <button id="yes">Yes</button>
    <button id="no">No</button>
  `

  document.getElementById("yes").addEventListener('click', () => {
    showMessage("Yes", "user")
    inputWrapper.innerHTML = '' // Remove Yes/No buttons
    setTimeout(() => askQuestion(), 1000) // Start the quiz
  })

  document.getElementById('no').addEventListener('click', () => {
    showMessage("No", "user")
    setTimeout(() => {
      showMessage("Ok, see you another time!", 'bot')
      inputWrapper.innerHTML = '' // Clear buttons
    }, 700)
  })
}

// Scroll down the chat window after buttons have loaded
chat.scrollTop = chat.scrollHeight

// Ask the current question and show answer options
const askQuestion = () => {
  const currentQuestion = questions[currentQuestionNumber - 1]

  if (currentQuestion) {
    showMessage(currentQuestion.question, 'bot')

    // Show options as buttons. Each button has a unique id (option-0, option-1, option-2, option-3, for example for question nr 1-option 0 is Britney Spears, option1 is Christina Aguilera etc. ${currentQuestion.options[0]}, ${currentQuestion.options[1]}, etc., are placeholders that get replaced with the actual options for the current question.

    inputWrapper.innerHTML = `
      <div class="option-buttons">
      <button id="option-0">${currentQuestion.options[0]}</button>
      <button id="option-1">${currentQuestion.options[1]}</button>
      <button id="option-2">${currentQuestion.options[2]}</button>
      <button id="option-3">${currentQuestion.options[3]}</button>
      </div>
    `

    
// Scroll down the chat window after buttons have loaded
chat.scrollTop = chat.scrollHeight


    // Add event listeners to the buttons
    currentQuestion.options.forEach((option, index) => {
      document.getElementById(`option-${index}`).addEventListener('click', () => {
        showMessage(option, 'user')
        checkAnswer(option) // Check the selected answer
      })
    })
  } else {
    // If there are no more questions, end the quiz
    showMessage("Quiz finished! Thanks for playing.", 'bot')
    inputWrapper.innerHTML = '' // Clear buttons after the quiz ends
  }
}

// Check the user's answer and move to the next question
const checkAnswer = (selectedOption) => {
  const currentQuestion = questions[currentQuestionNumber - 1]

  if (selectedOption === currentQuestion.correctAnswer) {
    showMessage("Correct!", 'bot')
    score++ // Increment the score for a correct answer
  } else {
    showMessage(`Wrong! The correct answer is ${currentQuestion.correctAnswer}.`, 'bot')
  }

  // After answering, move to the next question if there are more questions
  setTimeout(() => {
    inputWrapper.innerHTML = '' // Clear buttons after selecting an answer
    currentQuestionNumber++ // Increment the question number

    if (currentQuestionNumber <= questions.length) {
      askQuestion() // Ask the next question
    } else {
      showFinalScore() // Show the final score at the end
     
    }
  }, 900) // Timeout
}

// Function to display the final score
const showFinalScore = () => {
  showMessage(`Quiz finished! You got ${score} out of ${questions.length} correct. Thanks for playing!`, 'bot')
  inputWrapper.innerHTML = '' // Clear buttons after the quiz ends
}

// Start the conversation
setTimeout(greetUser, 900)


































