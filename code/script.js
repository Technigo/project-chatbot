// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const ourForm = document.getElementById("name-form");

// Global variable shows which question it is and gets updated after each iteration
let question=1;


// For the second question we add a dropdown which is declared here
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

//For the third question we add three different buttons which are declared here
const threeButtons = () =>{
  ourForm.innerHTML=`
  <button class="send-btn" type="submit" id="lost-btn" value="lost">I´m lost</button>
  <button class="send-btn" type="submit" id="answer-btn" value="answer">Looking for an answer</button>
  <button class="send-btn" type="submit" id="good-btn" value="good">I´m good</button>
  `
  document.getElementById('answer-btn').addEventListener('click', answer);
  document.getElementById('lost-btn').addEventListener('click', answer);
  document.getElementById('good-btn').addEventListener('click', answer);
}

//For the forth question we add a button which is declared here
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

// This funkction show the first question from the bot
const greeting = () => {
  showMessage(`Your name traveler, what is, hmm?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

//Here the main conversation between bot and user starts. 
//This function checks the number of the question and displays the messages 
//in each iteration it also runs the function, which asks for the input in regard to the next question.
const answer= (event)=>{
  event.preventDefault();
  if(question=== 1){
    console.log(event.target[0].value);
    if(event.target[0].value === ""){
      showMessage(event.target[0].value, "user");
      setTimeout(() => showMessage(`Insist for you to tell me your name, I must.  Only void, anonymous is.  Herh herh herh. ${event.target[0].value}?`, 'bot'), 1000);
    }
    else{
    showMessage(event.target[0].value, "user");
    setTimeout(() => showMessage(`Where come from do you, ${event.target[0].value}?`, 'bot'), 1000);
    setTimeout(whichPlanet, 1500);
    question++
    }
  }
  else if (question===2){
    showMessage(event.target[0].value, "user");
    setTimeout(() => showMessage(`A great jedi masters in ${event.target[0].value} you have. What it is, you seek that? Hmm?` , 'bot'), 1000);
    setTimeout(threeButtons, 1500);
    question++
  }
  else if (question===3){
    // we are checking which of the buttons was clicked and display different answers accordingly.
    console.log(event.target.id);
      if (event.target.id === 'lost-btn') {
        showMessage("I am lost", "user");
        setTimeout(() => showMessage(`Patience you must have! To find to seek is. To seek to find is. I sense a question that ask you wish!`, 'bot'), 1000);
      } else if (event.target.id === 'answer-btn') {
        showMessage("Looking for an answer", "user");
        setTimeout(() => showMessage(`Ah, to the right place you come? I was expecting you and I sense a question that ask you wish!`, 'bot'), 1000);
      } else {
        showMessage("I am good", "user");
        setTimeout(() => showMessage(`Powerful you have become, the dark side I sense in you. Found themselves there, many people have. Yesss. I sense a question that ask you wish!`, 'bot'), 1000);
      }
    setTimeout(finalQuestion, 1500)
    question++
  }
  else {
    showMessage("Is the JS force within me?", "user")
    setTimeout(() => showMessage(`Young jedi, a strong force I sense. You will find only what you bring in. A long way you have traveled and longer journey awaits you. Feel the force!`, 'bot'), 1000);
  }
}
// // Set up your eventlisteners here
document.getElementById('name-form').addEventListener('submit', answer);



setTimeout(greeting, 500)

