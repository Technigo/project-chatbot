// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const ourForm = document.getElementById("name-form");

// Global variables, if you need any, declared here
let question=1;


// Functions declared here
const whichPlanet = () =>{
  ourForm.innerHTML= `
  <select class='dropdown'>
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
  document.getElementById('answer-btn').addEventListener('click', answer);
  document.getElementById('lost-btn').addEventListener('click', answer);
  document.getElementById('good-btn').addEventListener('click', answer);
}

const finalQuestion = () =>{
  ourForm.innerHTML=`
  <button class="send-btn" type="submit" id="final-btn" value="yes!">Is the force within me?</button>
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
  if(question=== 1){
    if(event.target[0].value === ""){
      setTimeout(() => showMessage(`Insist for you to tell me your name, I must.  Only void, anonymous is.  Herh herh herh. ${event.target[0].value}?`, 'bot'), 1000);
      showMessage(`${event.target[0].value}`, "user");
    }
    else{
    showMessage(`${event.target[0].value}`, "user");
    setTimeout(() => showMessage(`Where do you come from ${event.target[0].value}?`, 'bot'), 1000);
    setTimeout(whichPlanet, 1500);
    question=2
    }
  }
  else if (question===2){
    
    showMessage(`${event.target[0].value}`, "user");
    setTimeout(() => showMessage(`${event.target[0].value}, a great school of jedi. What are you looking for?`, 'bot'), 1000);
    setTimeout(threeButtons, 1500);
    question=3
  }
  else if (question===3){
    showMessage(`${event.path[0].value}`, "user");
      if (event.path[0].value === 'lost') {
        setTimeout(() => showMessage(`To find, to seek is, to seek, to find is. I know your question!`, 'bot'), 1000);
      } else if (event.path[0].value === 'answer') {
        setTimeout(() => showMessage(`Ah, to the right place you come? I was expecting you and I know your question!`, 'bot'), 1000);
      } else {
        setTimeout(() => showMessage(`Of the dark side be aware. Found themselves there, many people have. Yesss. I know your question!`, 'bot'), 1000);
      }
    setTimeout(finalQuestion, 1500)
    question=4
  }
  else {
    console.log(event.path[0].value)
    showMessage(`${event.path[0].value}`, "user")
    setTimeout(() => showMessage(`Young jedi, a tickling of the force I sense. A long way you have traveled and longer journey awaits you. Good luck!`, 'bot'), 1000);
  }
}
// // Set up your eventlisteners here
document.getElementById('name-form').addEventListener('submit', answer);


setTimeout(greeting, 500)
