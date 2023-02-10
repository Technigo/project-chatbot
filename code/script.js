// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const form = document.getElementById("form")
const inputWrapper = document.getElementById("input-wrapper")
const sendBtn = document.getElementById("submit")

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
<button id='Carribean'>Carribean</button>
<button id='Maldives'>Maldives</button>
<button id='Swedish'>Swedish West Coast</button>`
}
const emailInput =()=>{
inputWrapper.innerHTML =`
<button id="emailInput">Email</button>`}

//Questions


form.addEventListener("submit",(event)=>{
event.preventDefault ()
const nameInput = document.getElementById("name-input").value
console.log(nameInput)
showMessage(nameInput, "user")
setTimeout(()=> showMessage(`Hello ${nameInput} nice to meet you. Please choose from the vacation options below.` , "bot"),1000)
nameInput.value = ""
setTimeout(()=> buttonsFunction(), 1000)
});

// clicking on buttons


inputWrapper.addEventListener('click',(e)=>{
console.log(e.target)
console.log(e.target.id)
const selectedValue=e.target

if(selectedValue.id==="boring"){
showMessage('I think your mouse slipped would you like to try again?', "bot")
alert("Ha ha your kidding right? ")
console.log("iclicked on the boring button")
} 
else if(selectedValue.id==="sun"){
console.log("iclicked on the sun button")
showMessage("Sun n Fun", "user")
setTimeout(()=> showMessage("Lets make that dream a reality! See the options below ","bot"),1000)
pickVacation()
} 
else if(selectedValue.id==="Carribean"){
console.log("iclicked on the Carribean button")
showMessage("Carribean", "user")
setTimeout(()=> showMessage("Good decision enter your email below so we can send you more details and soon you will be on your way to paradise. ","bot"),1000)
pickVacation()
inputWrapper.innerHTML = ""

} 
else if(selectedValue.id==="Maldives"){
console.log("iclicked on the Maldives button")
showMessage("Maldives", "user")
setTimeout(()=> showMessage("Good decision enter your email below so we can send you more details and soon you will be on your way to paradise. ","bot"),1000)
pickVacation()
inputWrapper.innerHTML = ""
emailInput()

} 
else if(selectedValue.id==="Swedish"){
console.log("iclicked on the Swedish button")
showMessage("Swedish West Coast", "user")
setTimeout(()=> showMessage("Good decision enter your email below so we can send you more details and soon you will be on your way to paradise. ","bot"),1000)
alert("Check our website for cheap deals on rain gear")
inputWrapper.innerHTML = ""


} 
})


//const emailInput = (event) => {
  //event.preventDefault(); //prevents refreshing the page
  //let emailInput = inputWrapper.value;
  //showMessage(`Thank you! We will be in touch`, "bot");
  //inputWrapper.value = "";
  //console.log("Thank you! We will be in touch"); //can be omitted
  //setTimeout(() => question5(coffeeAnswer), 1000);
//};







 /*/ 

//     setTimeout(() => showMessage("I think your mouse slipped would you like to try from the beginning?","bot"),500)

//     setTimeout(() => showMessage("Lets make that dream a reality! See the menu below ","bot"),500)
 
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded*/