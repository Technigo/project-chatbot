// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const ourForm = document.getElementById("name-form");

// let userInput= document.getElementById("name-input");

// Global variables, if you need any, declared here
let question=1;


// Functions declared here
const whichPlanet = () =>{
  ourForm.innerHTML= `
  <select class='dropdown' id="name-input">
    <option name="planet" value="Technigo" id="technigo">Technigo</option>
    <option name="planet" value="Tatooine" id="tatooine">Tatooine</option>
    <option name="planet" value="Abafar" id="abafar">Abafar</option>
  </select>
  <button class="send-btn" type="submit">Select</button>
`
}

const threeButtons = () =>{
  ourForm.innerHTML=`
  <button class="send-btn" type="submit" id="lost-btn" value="lost">I´m lost</button>
  <button class="send-btn" type="submit" id="answer-btn" value="answer">Looking for an answer</button>
  <button class="send-btn" type="submit" id="good-btn" value="good">I´m good</button>
  `
  document.getElementById('answer-btn').addEventListener('submit', answer);
  document.getElementById('lost-btn').addEventListener('submit', answer);
  document.getElementById('good-btn').addEventListener('submit', answer);
}

const finalQuestion = () =>{
  ourForm.innerHTML=`
  <button class="send-btn" type="submit" id="final-btn" value="yes!">Is the JS force within me?</button>
  `
  document.getElementById('final-btn').addEventListener('click',answer);

}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-small.gif" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/yoda-small.gif" alt="Bot" />
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
  showMessage(`Your name traveler, what is, hmm?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}


const answer= (event)=>{
  event.preventDefault();
  // userInput.value vs. event.target[0].value
  if(question=== 1){
    if(event.target[0].value === ""){
      setTimeout(() => showMessage(`Insist for you to tell me your name, I must.  Only void, anonymous is.  Herh herh herh. ${event.target[0].value}?`, 'bot'), 1000);
      showMessage(event.target[0].value, "user");
    }
    else{
    showMessage(event.target[0].value, "user");
    setTimeout(() => showMessage(`Where come from do you, ${event.target[0].value}?`, 'bot'), 1000);
    setTimeout(whichPlanet, 1500);
    question=2
    }
  }
  else if (question===2){
    
    showMessage(event.target[0].value, "user");
    setTimeout(() => showMessage(`A great jedi masters in ${event.target[0].value} you have. What it is, you seek that? Hmm?` , 'bot'), 1000);
    setTimeout(threeButtons, 1500);
    question=3
  }
  else if (question===3){
      if (event.submitter.id === 'lost-btn') {
        showMessage("I am lost", "user");
        setTimeout(() => showMessage(`Patience you must have! To find to seek is. To seek to find is. I sense a question that ask you wish!`, 'bot'), 1000);
      } else if (event.submitter.id === 'answer-btn') {
        showMessage("Looking for an answer", "user");
        setTimeout(() => showMessage(`Ah, to the right place you come? I was expecting you and I sense a question that ask you wish!`, 'bot'), 1000);
      } else {
        showMessage("I am good", "user");
        setTimeout(() => showMessage(`Powerful you have become, the dark side I sense in you. Found themselves there, many people have. Yesss. I sense a question that ask you wish!`, 'bot'), 1000);
      }
    setTimeout(finalQuestion, 1500)
    question=4
  }
  else {
    showMessage("Is the JS force within me?", "user")
    setTimeout(() => showMessage(`Young jedi, a strong force I sense. You will find only what you bring in. A long way you have traveled and longer journey awaits you. Feel the force!`, 'bot'), 1000);
  }
}
// // Set up your eventlisteners here
document.getElementById('name-form').addEventListener('submit', answer);


setTimeout(greeting, 500)

