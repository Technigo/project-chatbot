// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="img/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="img/bot.png" alt="Bot" />
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
  showMessage(`Hello, <br>What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
//display time
const getTime = ()=> {
  let today = new Date();
  let hours =  today.getHours();
  let minutes = today.getMinutes();
  
  if(hours < 10){
    hours = "0" + hours;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  let time = hours + ":" + minutes

   return time;
}

let displayTime = document.getElementById("chat")
displayTime.append (getTime())

/*audio sound*/
let sound = document.getElementById("myAudio");
/*take user input */
let user1 = document.getElementById("send-btn");
let userText = document.getElementById("name-input");
user1.addEventListener("click", sendText);

function sendText(event){
  event.preventDefault();
let txt = userText.value;
  if(txt){
    showMessage(`${txt}`, 'user');
    userText.value = "";
    sound.play();
    setTimeout(() => showMessage(`Thanks ${txt}<br> Select a course that you want!`, 'bot'), 2000)
    /*setTimeout(() => document.getElementById('course').removeAttribute('class','course'),2000)
    document.getElementById('send-btn').setAttribute('disabled','true')
    document.getElementById('name-input').setAttribute('disabled','true')*/
    setTimeout(() => document.getElementById('name-form').innerHTML =`<div id="course" class="course">
    <input id="html" type="button" value="HTML">
    <input id="css" type="button" value="CSS">
    <input id="javascript" type="button" value="JavaScript">
  </div>`,2000)
    
    
    //select course
    let htmlBtn = document.getElementById('html')
    let cssBtn = document.getElementById('css')
    let javascriptBtn = document.getElementById('javascript')
    
    
    htmlBtn.addEventListener('click', () =>{
      htmlBtn = htmlBtn.value
      console.log(htmlBtn)
      showMessage(`${htmlBtn}`, 'user');
      setTimeout(() => showMessage(`Thanks <br> Select price!`, 'bot'), 2000)
      setTimeout(() => document.getElementById('name-form').innerHTML =`<div id="priceSlect" class="priceSelect">
      <input id="priceSelect-one" type="button" value="3500 Kr">
      <input id="priceSelect-two" type="button" value="4000 Kr">
      <input id="priceSelect-three" type="button" value="10000 Kr">
    </div>`,2000)
      /*
      setTimeout(() => document.getElementById('course').setAttribute('class','course'),2000)
      setTimeout(() => document.getElementById('priceSlect').removeAttribute('class','priceSlect'),2000)
      document.getElementById('send-btn').setAttribute('disabled','true')
      document.getElementById('name-input').setAttribute('disabled','true')*/


    })
    
    cssBtn.addEventListener('click', () =>{
      cssBtn = cssBtn.value
      showMessage(`${cssBtn}`, 'user');
      setTimeout(() => showMessage(`Thanks <br> Select price!`, 'bot'), 2000)
      setTimeout(() => document.getElementById('course').setAttribute('class','course'),2000)
    })
    
    javascriptBtn.addEventListener('click', () =>{
      javascriptBtn = javascriptBtn.value
      showMessage(`${javascriptBtn}`, 'user');
      setTimeout(() => showMessage(`Thanks <br> Select price!`, 'bot'), 2000)
      setTimeout(() => document.getElementById('course').setAttribute('class','course'),2000)
    })
  
  
  
  }
}
/*
const courseSelect = ()=>{
  let htmlBtn = document.getElementById('html')
  let cssBtn = document.getElementById('css')
  let javascriptBtn = document.getElementById('javascript')
  htmlBtn.addEventListener('click', () =>{
    htmlBtn = htmlBtn.value
  })
  
}*/



// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
