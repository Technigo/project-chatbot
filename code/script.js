// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const input = document.getElementById('name-input').value;
const inputWrapper = document.getElementById('input-wrapper');
const soundEffect = document.getElementById('sound-effect');

//TO-DO:
//[X] imported HTML DOM
//[X] fix global variable
//[X] get submit button to work
//[X] [_] [_] [_] import nextQuestion and hook it up to showMessage
//[_] understand why clearing the input field works in our old file but not here. what is the difference?
//[X] fix chat bubble bug
//[X] fix the set time between each answer
//[X] style the layout
//[X] remove yes/no from close tag
//[X] sound effects
//[_] clean up code
//[X] readme
//[_] publish netlify and add link in readme
//[_] push to github




// Global variables, if you need any, declared here
let questionNumber = 1; 
let globalFloor = "";
let globalRoom = "";
let globalMinutes = "";
let globalName ="";

// Functions declared here
const nextQuestion = (message) => {
  /*console.log('questionNumber', questionNumber) */
  let question = ""; //bara deklaration, så att alla if och elses inte behöver deklarera om
  let user = "";          //^samma som ovanstående :P

  if (questionNumber === 1) {

    questionOne(message)

    //questionOne(message)
    

  } else if (questionNumber === 2) { 
      //questionTwo(message)
     questionTwo(message);

  } else if (questionNumber === 3) {
      //questionThree(message)
      questionThree(message);
  } else if (questionNumber === 4) {
    questionFour(message);
  } else if (questionNumber === 5) {
    questionFive(message);
  } 
}



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  soundEffect.play()
  if (sender === 'user') {    //enda skillnaden mellan user och bot är css styling :) samma message-variabel
    console.log(message)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/noun_User_305942.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/noun_Chatbot_1596689.png" alt="Bot" />
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
  //setTimeout(() => makeButton(),1)
  //const makeButton = () => {}
  questionNumber++;
  setTimeout(() => showMessage(`Hi ${globalName}, please select which floor you'd like your room on`, 'bot') ,2000)
  setTimeout(() => makeButton(),2000)
  const makeButton = () => {
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
  //question = "Please select what floor you would like to book your room in number, (1 for floor 1, 2 for floor 2, 3 for floor 3)";
  //user = "bot";
  //showMessage (question, user);
  
}

const questionTwo = (floor) => {
  //setTimeout(() => makeButton(),1)
  //const makeButton = () => {}
  //message.value = ''
  //setTimeout(showMessage, 10000)
  setTimeout(() => showMessage(`Floor ${floor}, please`, "user"),1000)
  setTimeout(() => showMessage(`Please select a room`, 'bot'),2000)
  
 
  
  
   if (floor == 1) {
        globalFloor = 1
        questionNumber++;
        setTimeout(() => makeButton(),2000)
        const makeButton = () => {
        inputWrapper.innerHTML = `
        <button id="option-btn-1" class="option-btn" type="option" value="Zebra">\uD83E\uDD93</button>
        <button id="option-btn-2" class="option-btn" type="option" value="Lion">\uD83E\uDD81</button>
        <button id="option-btn-3" class="option-btn" type="option" value="Tiger">\uD83D\uDC2F</button>
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
        

    } else if (floor == 2) {
      globalFloor = 2;
      questionNumber++;
      setTimeout(() => makeButton(),2000)
      const makeButton = () =>{
      inputWrapper.innerHTML = `
        <button id="option-btn-1" class="option-btn" type="option" value="Crocodile">\uD83D\uDC0A</button>
        <button id="option-btn-2" class="option-btn" type="option" value="Monkey">\uD83D\uDC12</button>
        <button id="option-btn-3" class="option-btn" type="option" value="Bob">\uD83D\uDC08</button>
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
    
    } else if (floor == 3) {
      globalFloor = 3;
      questionNumber++;
      setTimeout(() => makeButton(),2000)
      const makeButton = () =>{
      inputWrapper.innerHTML = `
        <button id="option-btn-1" class="option-btn" type="option" value="Kangaroo">\uD83E\uDD98</button>
        <button id="option-btn-2" class="option-btn" type="option" value="Honey Badger">\uD83E\uDDA1</button>
        <button id="option-btn-3" class="option-btn" type="option" value="Polar Bear">\uD83D\uDC3B</button>
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
    
    } 
      
}


const questionThree = (room) => {
  //message.value = ''
  questionNumber++;
  setTimeout(() => showMessage (`Room ${room}, please`, "user"),1000)
  setTimeout(() => showMessage (`Great! For how long would you like to book it?`, "bot"),2000)
  globalRoom = room;
  
  setTimeout(() => makeButton(),2000)
  const makeButton = () =>{

  inputWrapper.innerHTML = `
    <button id="option-btn-1" class="option-btn" type="option" value="30">30 minutes \u23F1\uFE0F</button>
    <button id="option-btn-2" class="option-btn" type="option" value="60">60 minutes \u23F1\uFE0F</button>
    <button id="option-btn-3" class="option-btn" type="option" value="90">90 minutes \u23F1\uFE0F</button>
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
}

const questionFour = (minutes) => {
  globalMinutes = minutes;
  //message.value = ''
  questionNumber++;
  setTimeout(() => showMessage (`I'd like to book it for ${minutes}, please`, "user"),1000)
  setTimeout(() => showMessage (`Perfect!`, "bot"),2000)
  setTimeout(() => showMessage (`So all in all, you'd like to book room ${globalRoom} on floor ${globalFloor} for ${globalMinutes} minutes. Is that correct?`, "bot"),3000)
  
  setTimeout(() => makeButton(),3000)
  const makeButton = () =>{
  inputWrapper.innerHTML = `
  <button id="option-btn-1" class="option-btn" type="option" value="Yes">Yes \u2714\uFE0F</button>
  <button id="option-btn-2" class="option-btn" type="option" value="No">No \u274C</button>
  `;

  document.getElementById("option-btn-1").addEventListener("click", () => {
  nextQuestion(document.getElementById("option-btn-1").value)
  })

  document.getElementById("option-btn-2").addEventListener("click", () => {
  nextQuestion(document.getElementById("option-btn-2").value)
  })
  }
}

const questionFive = (answer) => {
  //message.value = ''
  questionNumber++;

  if (answer == "Yes") {
    setTimeout(() => showMessage (`${answer}`, "user"),1000)
    setTimeout(() => showMessage (`Perfect, your room has been booked! Would you like to book another room?`, "bot"),3000)
    setTimeout(() => makeButton(),3000)
    const makeButton = () => {
    
    inputWrapper.innerHTML = `
    <button id="option-btn-1" class="option-btn" type="option" value="Yes">Yes \u2714\uFE0F</button>
    <button id="option-btn-2" class="option-btn" type="option" value="No">No \u274C</button>
    `;

    document.getElementById("option-btn-1").addEventListener("click", () => {
      questionNumber = 1; 
      nextQuestion();
      })
    
      document.getElementById("option-btn-2").addEventListener("click", () => {
      showMessage (`Thank you, your booking is complete`, "bot");
      inputWrapper.innerHTML=``;
      })
    }

    

  } else {
    setTimeout(() => showMessage (`${answer}`, "user"),1000)
    questionNumber = 1; 
    setTimeout(() => showMessage (`We will now restart`, "bot"),2000)
    nextQuestion();
  }  
  

}






// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default 

  const sender = "user";
  const newInput = document.getElementById('name-input').value
  globalName = newInput;
  form.innerHTML = "";
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
