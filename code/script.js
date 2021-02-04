// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const input = document.getElementById('name-input').value;
const inputWrapper = document.getElementById('input-wrapper');


//TO-DO:
//[X] imported HTML DOM
//[X] fix global variable
//[X] get submit button to work
//[X] [_] [_] [_] import nextQuestion and hook it up to showMessage
//[_] understand why clearing the input field works in our old file but not here. what is the difference?
//[_] fix chat bubble bug

// Global variables, if you need any, declared here
let questionNumber = 1; 
let globalFloor = "";
let globalRoom = "";
let globalMinutes = "";


// Functions declared here
const nextQuestion = (message) => {
  /*console.log('questionNumber', questionNumber) */
  let question = ""; //bara deklaration, så att alla if och elses inte behöver deklarera om
  let user = "";          //^samma som ovanstående :P

  if (questionNumber === 1) {

    setTimeout(() => questionOne(message), 1000);

    //questionOne(message)
    

  } else if (questionNumber === 2) { 
      //questionTwo(message)
      setTimeout(() => questionTwo(message), 1000);

  } else if (questionNumber === 3) {
      //questionThree(message)
      setTimeout(() => questionThree(message), 1000);
  } else if (questionNumber === 4) {
    questionFour(message)
  } else if (questionNumber === 5) {
    questionFive(message)
  } else {
      input.value = ''
        setTimeout(() => questionFour(message), 1000)
    }
}



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {    //enda skillnaden mellan user och bot är css styling :) samma message-variabel
    console.log(message)
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
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}


const questionOne = (name) => { 

  questionNumber++;
  showMessage(`Please select which floor you'd like your room on`, 'bot')
  //question = "Please select what floor you would like to book your room in number, (1 for floor 1, 2 for floor 2, 3 for floor 3)";
  //user = "bot";
  //showMessage (question, user);
  inputWrapper.innerHTML = `
    <button id="option-btn-1" class="option-btn" type="option" value="1">1</button>
    <button id="option-btn-2" class="option-btn" type="option" value="2">2</button>
    <button id="option-btn-3" class="option-btn" type="option" value="3">3</button>
    `;

  document.getElementById("option-btn-1").addEventListener("click", () => {
    nextQuestion(document.getElementById("option-btn-1").value)
  })
  
  document.getElementById("option-btn-2").addEventListener("click", () => {
    nextQuestion(document.getElementById("option-btn-2").value)
  })
  
  document.getElementById("option-btn-3").addEventListener("click", () => {
    nextQuestion(document.getElementById("option-btn-3").value)
  })

  
  
}

const questionTwo = (floor) => {
  //message.value = ''
  //setTimeout(showMessage, 10000)
  showMessage(`Floor ${floor}, please.`, "user")
  showMessage(`Please select a room`, 'bot')
  
   if (floor == 1) {
        globalFloor = 1
        questionNumber++;
        inputWrapper.innerHTML = `
          <button id="option-btn-1" class="option-btn" type="option" value="Zebra">Zebra</button>
          <button id="option-btn-2" class="option-btn" type="option" value="Lion">Lion</button>
          <button id="option-btn-3" class="option-btn" type="option" value="Tiger">Tiger</button>
        `;

        document.getElementById("option-btn-1").addEventListener("click", () => {
          nextQuestion(document.getElementById("option-btn-1").value)
        })
        
        document.getElementById("option-btn-2").addEventListener("click", () => {
          nextQuestion(document.getElementById("option-btn-2").value)
        })
        
        document.getElementById("option-btn-3").addEventListener("click", () => {
          nextQuestion(document.getElementById("option-btn-3").value)
        })

    } else if (floor == 2) {
      globalFloor = 2;
      questionNumber++;
      inputWrapper.innerHTML = `
        <button id="option-btn-1" class="option-btn" type="option" value="Crocodile">Crocodile</button>
        <button id="option-btn-2" class="option-btn" type="option" value="Monkey">Monkey</button>
        <button id="option-btn-3" class="option-btn" type="option" value="Bob">Bob</button>
      `;

      document.getElementById("option-btn-1").addEventListener("click", () => {
        nextQuestion(document.getElementById("option-btn-1").value)
      })
      
      document.getElementById("option-btn-2").addEventListener("click", () => {
        nextQuestion(document.getElementById("option-btn-2").value)
      })
      
      document.getElementById("option-btn-3").addEventListener("click", () => {
        nextQuestion(document.getElementById("option-btn-3").value)
      })
    
    } else if (floor == 3) {
      globalFloor = 3;
      questionNumber++;
      inputWrapper.innerHTML = `
        <button id="option-btn-1" class="option-btn" type="option" value="Kangaroo">Kangaroo</button>
        <button id="option-btn-2" class="option-btn" type="option" value="Honey Badger">Honey Badger</button>
        <button id="option-btn-3" class="option-btn" type="option" value="Polar Bear">Polar Bear</button>
      `;

      document.getElementById("option-btn-1").addEventListener("click", () => {
        nextQuestion(document.getElementById("option-btn-1").value)
      })
      
      document.getElementById("option-btn-2").addEventListener("click", () => {
        nextQuestion(document.getElementById("option-btn-2").value)
      })
      
      document.getElementById("option-btn-3").addEventListener("click", () => {
        nextQuestion(document.getElementById("option-btn-3").value)
      })
    
    } else {
            chat.innerHTML += `
            <div>
                <p>Select a number vvvvvbetween 1-3 QUESTION 2</p>
            </div>
        `;}
      
}


const questionThree = (room) => {
  //message.value = ''
  questionNumber++;
  showMessage (`Room ${room}, please`, "user");
  globalRoom = room;
  showMessage (`Great! For how long would you like to book it?`, "bot");

  inputWrapper.innerHTML = `
    <button id="option-btn-1" class="option-btn" type="option" value="30">30 minutes</button>
    <button id="option-btn-2" class="option-btn" type="option" value="60">60 minutes</button>
    <button id="option-btn-3" class="option-btn" type="option" value="90">90 minutes</button>
    `;

  document.getElementById("option-btn-1").addEventListener("click", () => {
    nextQuestion(document.getElementById("option-btn-1").value)
  })
  
  document.getElementById("option-btn-2").addEventListener("click", () => {
    nextQuestion(document.getElementById("option-btn-2").value)
  })
  
  document.getElementById("option-btn-3").addEventListener("click", () => {
    nextQuestion(document.getElementById("option-btn-3").value)
  })
  
}

const questionFour = (minutes) => {
  globalMinutes = minutes;
  //message.value = ''
  questionNumber++;
  showMessage (`I'd like to book it for ${minutes}, please`, "user");
  showMessage (`Perfect!`, "bot");
  showMessage (`So all in all, you'd like to book room ${globalRoom} on floor ${globalFloor} for ${globalMinutes} minutes. Is that correct?`, "bot");

  inputWrapper.innerHTML = `
  <button id="option-btn-1" class="option-btn" type="option" value="Yes">Yes</button>
  <button id="option-btn-2" class="option-btn" type="option" value="No">No</button>
  `;

  document.getElementById("option-btn-1").addEventListener("click", () => {
  nextQuestion(document.getElementById("option-btn-1").value)
  })

  document.getElementById("option-btn-2").addEventListener("click", () => {
  nextQuestion(document.getElementById("option-btn-2").value)
  })

}

const questionFive = (answer) => {
  //message.value = ''
  questionNumber++;

  if (answer == "Yes") {
    showMessage (`${answer}`, "user");
    showMessage (`Perfect, your room has been booked! Would you like to book another room?`, "bot");
    
    inputWrapper.innerHTML = `
    <button id="option-btn-1" class="option-btn" type="option" value="Yes">Yes</button>
    <button id="option-btn-2" class="option-btn" type="option" value="No">No</button>
    `;

    document.getElementById("option-btn-1").addEventListener("click", () => {
      questionNumber = 1; 
      nextQuestion();
      })
    
      document.getElementById("option-btn-2").addEventListener("click", () => {
      showMessage (`Thank you, please close this tab`, "bot");
      })

    

  } else {
    showMessage (`${answer}`, "user");
    questionNumber = 1; 
    showMessage (`We will now restart`, "bot");
    nextQuestion();
  }  
  

}






// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default 

  const sender = "user";
  const newInput = document.getElementById('name-input').value

  showMessage(newInput, sender);

  nextQuestion(newInput);

}
);  




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1)
