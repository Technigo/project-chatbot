// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const form = document.getElementById("name-form")
const input = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")
// Global variables, if you need any, declared here
let question = 1;
let userName = ""
let ticketNumber = ""
// Functions declared here
// This function will lead to the next question
const nxtQuestion = (answer) => {
  usrInput(answer)
  if (question === 1) {
    handleNameInput(answer)
    input.value = ""
  } 
  else if (question === 2) {
    askMovieOptions()
    input.value =""
  } 
  else if (question === 3) {
    askForTickets(answer)
    input.value =""
  } 
}

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
// Starts here
// First message
const greeting = () => {
  showMessage(`Welcome to Technigo Cinema! What is your name?`, 'bot')
}
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
//Answer from the user
const usrInput = (answer) => {
  showMessage(answer, 'user')
}
//Question 1
const handleNameInput = () => {
  let userName = document.getElementById('name-input').value;
  setTimeout (() => showMessage(`Hi ${userName}!`, 'bot'), 1000)
  setTimeout (() => askMovieOptions (), 2000)
  question = 2
};

//This function will listen for movie option click events
const handleEventSetup = (optionChosen, button1, button2, button3) => {
  document.getElementById(`${optionChosen}`).addEventListener("click", () => {
    setTimeout (() => showMessage(`I will go for ${optionChosen}.`, "user"), 1000)
    setTimeout (() => showMessage("Great choice! Go ahead and pick the best one.", "bot"), 2000)
    setTimeout(() => {
      whatMovie()
    }, 3000)
    let whatMovie = () => {
      inputWrapper.innerHTML =  `
        <button class="choice-btn">${button1}</button>
        <button class="choice-btn">${button2}</button>
        <button class="choice-btn">${button3}</button>`
      //Looping through each button and checking when it is clicked
      const choiceBtn = document.querySelectorAll(".choice-btn")
      for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].addEventListener("click", () => nxtQuestion(choiceBtn[i].textContent))
      }
    }
  })

}
//Question 2
const askMovieOptions = () => {
  showMessage(`What kind of movie would you like to see today? Choose from the list below: `, 'bot')
  inputWrapper.innerHTML = `
    <button id="animation">Animation</button>
    <button id="action">Action</button>
    <button id="comedy">Comedy</button>
    <button id="horror">Horror</button>
  `
  handleEventSetup("animation", "Toy Story 4", "Coco", "The Incredibles")
  handleEventSetup("action", "Honest Thief", "Tenet", "Bloodshot")
  handleEventSetup ("comedy", "Babyteeth", "Lucky You", "Meet The Parents 3")
  handleEventSetup ("horror", "Antebellum", "Brahms: The Boy 2", "Come Play")

  question = 3
};

//Question 3
const askForTickets = () => {
  setTimeout (() => showMessage (`How many tickets would you like to have?`, 'bot'), 1000)
  setTimeout(() => {
    numberOfTickets()
  }, 2000) 
  let numberOfTickets = () => {
    inputWrapper.innerHTML = `
    <button id="one">1</button>
    <button id="two">2</button>
    <button id="three">3</button>
    <button id="four">4</button>
    <button id="five">5</button>` 
    //When user chooses to have one ticket
    document.getElementById("one").addEventListener("click", () => {
      setTimeout (() => showMessage("1 ticket, please.", "user"), 1000)
      setTimeout (() => showMessage("1 ticket, the price will be 100 SEK. Would you like proceed to checkout?", "bot"), 2000)
      setTimeout(() => {
        confirm()
      }, 3000) 
      let confirm = () => {
        inputWrapper.innerHTML = `
          <button id="yes">Yes</button>
          <button id="no">No</button> `
        document.getElementById("yes").addEventListener("click", () => {
          showMessage("Yes, please.", "user")
          setTimeout (() => showMessage("Yay! Your ticket has been reserved for you. Welcome to Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
        document.getElementById("no").addEventListener("click", () => {
          showMessage("Not today, thank you.", "user")
          setTimeout (() => showMessage("OK! Hope to see you some other day at Technigo Cinema!", "bot"), 1000)
         inputWrapper.innerHTML = ""
        })
      }
    })
    //When user chooses to have two tickets
    document.getElementById("two").addEventListener("click", () => {
      setTimeout (() => showMessage("2 tickets, please.", "user"), 1000)
      setTimeout (() => showMessage("2 tickets, the price will be 200 SEK. Would you like proceed to checkout?", "bot"), 2000)
      setTimeout(() => {
       confirm()
      }, 3000) 
      let confirm = () => {
        inputWrapper.innerHTML = `
          <button id="yes">Yes</button>
          <button id="no">No</button> `
        document.getElementById("yes").addEventListener("click", () => {
          showMessage("Yes, please.", "user")
          setTimeout (() => showMessage("Yay! Your tickets has been reserved for you. Welcome to Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
        document.getElementById("no").addEventListener("click", () => {
          showMessage("Not today, thank you.", "user")
          setTimeout (() => showMessage("OK! Hope to see you some other day at Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
      }
    })
    //When user chooses to have three tickets
    document.getElementById("three").addEventListener("click", () => {
      setTimeout (() => showMessage("3 tickets, please.", "user"), 1000)
      setTimeout (() => showMessage("3 tickets, the price will be 300 SEK. Would you like proceed to checkout?", "bot"), 2000)
      setTimeout(() => {
       confirm()
      }, 3000) 
      let confirm = () => {
        inputWrapper.innerHTML = `
          <button id="yes">Yes</button>
          <button id="no">No</button> `
        document.getElementById("yes").addEventListener("click", () => {
          showMessage("Yes, please.", "user")
          setTimeout (() => showMessage("Yay! Your tickets has been reserved for you. Welcome to Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
        document.getElementById("no").addEventListener("click", () => {
          showMessage("Not today, thank you.", "user")
          setTimeout (() => showMessage("OK! Hope to see you some other day at Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
      }
    })
    //When user chooses to have four tickets
    document.getElementById("four").addEventListener("click", () => {
      setTimeout (() => showMessage("4 tickets, please.", "user"), 1000)
      setTimeout (() => showMessage("4 tickets, the price will be 400 SEK. Would you like proceed to checkout?", "bot"), 2000)
      setTimeout(() => {
        confirm()
      }, 3000) 
      let confirm = () => {
        inputWrapper.innerHTML = `
          <button id="yes">Yes</button>
          <button id="no">No</button> `
        document.getElementById("yes").addEventListener("click", () => {
          showMessage("Yes, please.", "user")
          setTimeout (() => showMessage("Yay! Your tickets has been reserved for you. Welcome to Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
        document.getElementById("no").addEventListener("click", () => {
          showMessage("Not today, thank you.", "user")
          setTimeout (() => showMessage("OK! Hope to see you some other day at Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
      }
    })
    //When user chooses to have five tickets
    document.getElementById("five").addEventListener("click", () => {
      setTimeout (() => showMessage("5 tickets, please.", "user"), 1000)
      setTimeout (() => showMessage("5 tickets, the price will be 500 SEK. Would you like proceed to checkout?", "bot"), 2000)
      setTimeout(() => {
        confirm()
      }, 3000) 
      let confirm = () => {
        inputWrapper.innerHTML = `
          <button id="yes">Yes</button>
          <button id="no">No</button> `
        document.getElementById("yes").addEventListener("click", () => {
          showMessage("Yes, please.", "user")
          setTimeout (() => showMessage("Yay! Your tickets has been reserved for you. Welcome to Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
        document.getElementById("no").addEventListener("click", () => {
          showMessage("Not today, thank you.", "user")
          setTimeout (() => showMessage("OK! Hope to see you some other day at Technigo Cinema!", "bot"), 1000)
          inputWrapper.innerHTML = ""
        })
      }
    })
  }
}

// Even listener to listen for submitt button
form.addEventListener("submit", (event) => {
  event.preventDefault()
  nxtQuestion(input.value)
})


 