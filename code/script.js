// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

const form = document.getElementById("form")
const inputWrapper = document.getElementById("input-wrapper")
const sendBtn = document.getElementById("submit")

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = (event) => { 
  showMessage("Do you need a vacation? Enter your name below to get started.", "bot");
}

setTimeout(greetUser, 1000);

// Functions for creating elements

const buttonsFunction=()=>{
   inputWrapper.innerHTML = `      
     <button id='sun'>Sun n Fun</button>
     <button id='boring'>Boring Vacation</button>`;
}
const pickVacation = () =>{
  inputWrapper.innerHTML= `
  <select class='dropdown' id="vacation-input">
    <option name="Caribean" value="Caribean" id="Caribean">Caribean</option>
    <option name="Maldives" value="Maldives" id="Maldives">Maldives</option>
    <option name="Fiji" value="Fiji" id="Fiji">Fiji</option>
  </select>
`
}

//Questions


form.addEventListener("submit",(event)=>{
event.preventDefault ()
const nameInput = document.getElementById("name-input").value
console.log(nameInput)
showMessage(nameInput, "user")
showMessage(`Hello ${nameInput} nice to meet you.` , "bot")

nameInput.value = ""
buttonsFunction()
});

// clicking on buttons


inputWrapper.addEventListener('click',(e)=>{
console.log(e.target)
console.log(e.target.id)
const selectedValue=e.target

if(selectedValue.id==="boring"){
showMessage('I think your mouse slipped would you like to try from the beginning?', "bot")
console.log("iclicked on the boring button")
} 
else if(selectedValue.id==="sun"){
console.log("iclicked on the sun button")
showMessage("Lets make that dream a reality! See the menu below ","bot")
pickVacation()
}
// dropdown
else if(selectedValue.id==="vacation-input"){
  // change event listener
if(selectedValue.id==="Carribean" || selectedValue.id==="Maldives" || selectedValue.id==="Fiji"){
  console.log("vacation is selected")
}

}


})






// const botResponseOne = () => {
//   showMessage(`Please choose from the options below`, "bot"); //bot says Hey to 'name'
//   inputWrapper.innerHTML = `      
//      <button id='sun'>Sun n Fun</button>
//      <button id='boring'>Boring Vacation</button>`;

  
//   const boringBtn = document.getElementById("boring");
//   boringBtn.addEventListener("click", (event)  => {
//     const boringVacation = boringBtn.name;
//     showMessage(boringVacation, "user")
//     currentQuestion ()
//     setTimeout(() => showMessage("I think your mouse slipped would you like to try from the beginning?","bot"),500)
//     alert("wrong button")
//   })
  
//   const funBtn = document.getElementById("sun");
//   funBtn.addEventListener("click", () => {
//     const funVacation = funBtn.name;
//     showMessage(funVacation, "user")
//     currentQuestion ()
//     setTimeout(() => showMessage("Lets make that dream a reality! See the menu below ","bot"),500)
//   } )
// }
  
// const pickVacation = () =>{
//   form.innerHTML= `
//   <select class='dropdown' id="name-input">
//     <option name="Caribean" value="Caribean" id="Caribean">Caribean</option>
//     <option name="Maldives" value="Maldives" id="Maldives">Maldives</option>
//     <option name="Fiji" value="Fiji" id="Fiji">Fiji</option>
//   </select>
//   <button class="send-btn" type="submit">Select</button>
// `
// showMessage("Good decision now lets get those bank details and you will be on your way to paradise.", "bot")
// }



  
    

//document.getElementById('boring').addEventListener('click', (event) => botResponseOne ('Boring Vacation'));
//document.getElementById('sun').addEventListener('click', (event) => botResponseOne ('Sun n Fun'));


  
  //Event listeners
  //nameInput.addEventListener('submit', handleNameInput) //listens to submit button, goes to textInput func.
  //questionOne.addEventListener('submit', handleNameInput);


  
  
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded*/