//variables
const chat = document.getElementById('chat');
const sendBtn = document.getElementById('send');
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("form");
const body = document.getElementById("body");

//lets
let QuestionNumber = 0;
let score = 0;
let input = document.getElementById("input");

//Objects
const botAnswers = {
    greeting:  "Greetings stranger! What's your name?",
    wannaPlay: `Nice to meet you ${name}! Do you wanna play a little quiz?`,
    question1: "Awesome! Let's start... What's the name of the Swedish Prime Minister?",
    question2: "Interesting choice... Next question: What is the population size of Sweden?",
    question3: "What's the name of the highest mountain in Sweden?",
    question4: "What's the fourth largest city in Sweden?",
    question5: "What's the name of the Swedish king?",
    scoreReport: "Thank you for playing! This is your score...",
    };


//hmtl modifications for different questions
const htmlMod = {
  modWannaPlay: `
   <button id="yesButton" class= "yesno-button yes-button">Yes</button>
   <button id="noButton" class= "yesno-button no-button">No</button>
  `,
  modNoPlay: `
  <div class = "dogwrap">
  <img class="dog" src="sad dog.jpg" alt="sad dog">
  </div>
  `,
  modQ1: `<button id="olof" class="question-button">Olof Palme</button>
  <button id="magdalena" class="question-button">Magdalena Andersson</button>
  <button id="ulf" class="question-button">Ulf Kristersson</button>
</div>`,
  modQ2: `
  <button id="8,2" class="question-button">8,2 million</button>
  <button id="10,4" class="question-button">10,4 million</button>
  <button id="13,6" class="question-button">13,6 million</button>
  </div>`,

  modQ3: `
  <button id="kebne" class="question-button">Kebnekaise</button>
  <button id="åre" class="question-button">Åreskutan</button>
  <button id="hammarby" class="question-button">Hammarbybacken</button>
  </div>`,
  modQ4: `
  <button id="linköping" class="question-button">Linköping</button>
  <button id="uppsala" class="question-button">Uppsala</button>
  <button id="örebro" class="question-button">Örebro</button>
  </div>`,
  modQ5: `
  <button id="GustavVasa" class="question-button">Gustav Vasa</button>
  <button id="KarlXII" class="question-button">Karl XII</button>
  <button id="CarlXVIGustaf" class="question-button">Carl XVI Gustaf</button>
  </div>`,
  modScoreBoard: "",
}
  
//message-function
/* const showMessage = (message, sender) => {
    if (sender === 'user') {
      chat.innerHTML += `
        <section class="user-msg">
          <div class="bubble user-bubble">
            <p>${message}</p>
          </div>
          <img src="assets/user.png" alt="User" />  
        </section>
      `} else if (sender === 'bot') {
      chat.innerHTML += `
        <section class="bot-msg">
          <img src="assets/bot.png" alt="Bot" />
          <div class="bubble bot-bubble">
            <p id="message">${message}</p>
          </div>
        </section>
      `
    }
    chat.scrollTop = chat.scrollHeight;
  } */

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
          <img class="horse" src="./dalahast.jpg" alt="Dala horse" />
          <div class="bubble bot-bubble">
            <p>${message}</p>
          </div>
        </section>
      `
    }
    chat.scrollTop = chat.scrollHeight
  }


//question flow based on questionNumber
const questionOrder = (message) => {
    console.log('questionNumber', questionNumber);
    if (questionNumber === 0) {
      let name = input.value
      showMessage(name, "user");
     input.value = "";
      setTimeout(() => niceToMeetYou(name), 1000)
    } else if (questionNumber === 1) {
      setTimeout(() => q1(message), 1000)
    } else if (questionNumber === 2) {
      setTimeout(() => q2(message), 1000)
    } else if (questionNumber === 3) {
      setTimeout(() => q3(message), 1000)
    } else if (questionNumber === 4){
      setTimeout(q4, 1000)
    } else if (questionNumber === 5){
        setTimeout(q5, 1000)
    } else if (questionNumber === 6){
        setTimeout(scoreBoard, 1000)}
    };

//event triggered when submitting form
form.addEventListener("submit", (event) => {
    event.preventDefault();
    questionOrder();
});

//starting messsage
  const greetUser = () => {
    questionNumber = 0;
    showMessage( botAnswers.greeting, 'bot');
  };
  setTimeout(() => {
    greetUser()
  }, 1000);



 //Start of quiz
 const niceToMeetYou = (name) => {
    questionNumber ++;
    showMessage(`Nice to meet you ${name}! Do you wanna play a little quiz?`, 'bot');
    setTimeout(() => {
    inputWrapper.innerHTML =
    htmlMod.modWannaPlay;
    document.getElementById("yesButton").addEventListener("click", questionOrder);
    document.getElementById("noButton").addEventListener("click", noPlay); 
    }, 1000);  
  };

//no-click
const noPlay = () => {
  showMessage("That's too bad :(", "bot")
  chat.innerHTML += `
  <div class = "dogwrap">
  <img class="dog" src="sad dog.jpg" alt="sad dog">
  </div>
  `;
};
  
//First quiz-question
const q1 = () => {
  questionNumber ++;
  showMessage(botAnswers.question1, 'bot');
  inputWrapper.innerHTML =
  htmlMod.modQ1;
  document.getElementById("olof").addEventListener("click", questionOrder);
  document.getElementById("magdalena").addEventListener("click", questionOrder);
  document.getElementById("ulf").addEventListener("click", () => {
    score ++;
    console.log(score);
    questionOrder()});
};

//2nd 
  const q2 = () => {
    questionNumber ++;
    showMessage(botAnswers.question2, "bot");
    console.log(score);
    inputWrapper.innerHTML =
    htmlMod.modQ2;
    document.getElementById("8,2").addEventListener("click", questionOrder);
    document.getElementById("13,6").addEventListener("click", questionOrder);
    document.getElementById("10,4").addEventListener("click",() => {
      score ++;
      console.log(score);
      questionOrder()});
  };
  
//3rd
const q3 = () => {
    questionNumber ++;
    showMessage(botAnswers.question3, "bot");
    console.log(score);
    inputWrapper.innerHTML =
    htmlMod.modQ3;
    document.getElementById("åre").addEventListener("click", questionOrder);
    document.getElementById("hammarby").addEventListener("click", questionOrder);
    document.getElementById("kebne").addEventListener("click",() => {
    score ++;
    console.log(score);
    questionOrder()});
  };

  //4th
  const q4 = () => {
    questionNumber ++;
    showMessage(botAnswers.question4, "bot");
    console.log(score);
    inputWrapper.innerHTML =
    htmlMod.modQ4;
    document.getElementById("linköping").addEventListener("click", questionOrder);
    document.getElementById("örebro").addEventListener("click", questionOrder);
    document.getElementById("uppsala").addEventListener("click",() => {
    score ++;
    console.log(score);
    questionOrder()});
  };

  //5th
  const q5 = () => {
    questionNumber ++;
    showMessage(botAnswers.question5, "bot");
    console.log(score);
    inputWrapper.innerHTML =
    htmlMod.modQ5;
    document.getElementById("GustavVasa").addEventListener("click", questionOrder);
    document.getElementById("KarlXII").addEventListener("click", questionOrder);
    document.getElementById("CarlXVIGustaf").addEventListener("click",() => {
    score ++;
    console.log(score);
    questionOrder()});
  };


//Scoreboard
const scoreBoard = () => {
    console.log(`Your score: ${score}`);
    showMessage(botAnswers.scoreReport, "bot");
    setTimeout(() => {
      inputWrapper.innerHTML =`
      <div class="scoreboard">
          <h3>Congratulations!</h3>
          <p>You scored: ${score}</p>
      </div>
      `
    }, 500);
  
}


