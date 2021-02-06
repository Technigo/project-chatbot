// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('form') //Should be name-form?
//const inputText = document.getElementById('input-value');
const nameInput = document.getElementById("input-value")
const inputWrapper = document.getElementById('input-wrapper')


// Global variables, if you need any, declared here
chat.scrollTop = chat.scrollHeight

const topicChoice = `
<form class="topic-form" id="topic-form">
  <select id="select">
    <option value = "" selected disabled> Click here to chose subject</option>
    <option id="topicOption" value = "My childhood">My Childhood</option>
    <option id="topicOption" value = "My mother">My Mother</option>
    <option id="topicOption" value = "My partner">My Partner</option>
  </select>
</form>
` ;

const newTextInput = `
<form id="partner-form">
  <input id="input-value" type="text" />
    <button class="send-btn" type="submit">
        Send
   </button>
</form>`

// Functions declared here
const showMessage = (message, sender) => {
  if (sender === 'user') {  
  chat.innerHTML += `
    <section class="user-msg">
      <div class="bubble user-bubble">
        <p>${message}</p>
      </div>
      <img src="assets/user2.png" alt="User" />  
    </section>
  `
  } else if (sender === 'bot') {
   chat.innerHTML += `
    <section class="bot-msg">
      <img src="assets/bot2.png" alt="Bot" />
      <div class="bubble bot-bubble">
        <p>${message}</p>
      </div>
    </section>
  `
  }
}



//let step = 0;Steps
// Question 1 - Starts here with greeting an ask for name
const greeting = () => {
  showMessage(`Welcome to your first therapy session! What's your name?`, 'bot');
  form.addEventListener('submit', (event) => { 
    event.preventDefault();
    handleNameInput();
  })
};

setTimeout(greeting, 1000);


//Question 2 - Choose topic of session
const handleNameInput = (event) => {
  
  const userName = nameInput.value;
  showMessage(userName, 'user');
  nameInput.value = "";
  showMessage(`Hello ${userName}! What would you like to talk about today?`, "bot");
  inputWrapper.innerHTML = topicChoice; 
  const selectedTopic = document.getElementById('select')
 
  selectedTopic.addEventListener("change", () => {
  showMessage(selectedTopic.value, "user");
  tellMeMore(selectedTopic.value);
})}


//Question 3 - Tell me more
const tellMeMore = (selectedTopic) => {
  if (selectedTopic.value === 'My childhood') {
  showMessage("Could you tell me about your childhood?", "bot")
} else if (selectedTopic.value === 'My mother') {
  showMessage("Could you tell me about your mother?", "bot")
} else {
  showMessage("Could you tell me about your partner?", "bot")
};
inputWrapper.innerHTML = newTextInput; 
const partnerForm = document.getElementById('partner-form');
partnerForm.addEventListener('submit', (event) => { 
event.preventDefault();
const nameInput = document.getElementById("input-value");
const partnerInfo = nameInput.value;
  showMessage(partnerInfo, 'user');
showMessage("That's interesting. You should go home and think more about it... See you next week!", "bot");
})}








// Set up your eventlisteners here 

