// All the DOM selectors stored as short variables 
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper') 
const form = document.getElementById('name-form') 

/*audio sound*/
let sound = document.getElementById("myAudio");
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${getTime()} ${message}</p>
        </div>
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
      <div class="bubble bot-bubble">
      <p>${getTime()} ${message}</p>
      </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}
// Starts here
const greeting = () => {
  showMessage(`Welcome to our online bootcamp, <br>What is your name?`, 'bot')
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
//display error message
const errorDisplay = (errorMessage)=>{
  inputWrapper.innerHTML =`
  <label>${errorMessage}</label> 
  `
}


//email validation
const emailValidation = (emailMessage,courseTerm)=>{
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailMessage.match(emailFormat)){
    setTimeout(()=>showMessage(`Thank you! You will recieve a full info-package at ${emailMessage}`, 'bot'),1000)
    inputWrapper.innerHTML =`
    <input type="button" value="Thanks">
    `
    setTimeout(()=>location.reload(), 6000)
  }else{
    errorDisplay(`${emailMessage} is wrong email format`)
    setTimeout(()=>location.reload(), 6000)
  }
}

/*take user input */
let userText = document.getElementById("name-input");

form.addEventListener("submit", (event)=> {
  event.preventDefault();
  userText = userText.value;
  sound.play()
  if (userText == ""){
    errorDisplay ('Please enter your name')
    setTimeout(()=> location.reload(),2000)
  }else if(isNaN(userText) == false){
    errorDisplay ('Please use letters only')
    setTimeout(()=> location.reload(),2000)
  }else{
    showMessage(`${userText}`, 'user');
    setTimeout(()=>  showMessage(`Thank you ${userText}<br> So I understand you want to change career?`, 'bot'),1000)
    //Show YES NO button
    inputWrapper.innerHTML =`
    <input id="yes" type="button" value="YES">
    <input id="no" type="button" value="NO">
    `

    let yesBtn = document.querySelector('#yes')
    let noBtn = document.querySelector('#no')
    // if choose yes
    yesBtn.addEventListener('click', () =>{
      yesBtn = yesBtn.value
      sound.play()
      showMessage(`${yesBtn}`, 'user');
      setTimeout(()=>  showMessage(`We provide two programs.<br> Please choose One`, 'bot'),1000)
      //display course
      inputWrapper.innerHTML =`
      <input id="fullstackDeveloper" type="button" value="Fullstack developer">
      <input id="netDeveloper" type="button" value=".Net developer">
      `

    //connect HTML DOM
    let fullstackDeveloper = document.querySelector('#fullstackDeveloper')
    let netDeveloper = document.querySelector('#netDeveloper')
      // choose fullstack program
    fullstackDeveloper.addEventListener('click',()=>{
      fullstackDeveloper = fullstackDeveloper.value
      sound.play()
      showMessage(`${fullstackDeveloper}`, 'user');
      setTimeout(()=> showMessage(`When would you like to start?.<br> Please choose one option`, 'bot'),1000)

      //add term of program
      inputWrapper.innerHTML =`
      <input id="fullstackAutumn" type="button" value="Autumn">
      <input id="fullstackWinter" type="button" value="Winter">
      `

    let fullstackAutumn = document.querySelector('#fullstackAutumn')
    let fullstackWinter = document.querySelector('#fullstackWinter')
      //fullstack Autumn
    fullstackAutumn.addEventListener('click',()=>{
      fullstackAutumn = fullstackAutumn.value
      sound.play()
      showMessage(`${fullstackAutumn}`, 'user');
      setTimeout(()=> showMessage(`Our autumn session begins on August 10.<br> Please enter your e-mail.`, 'bot'),1000)
      
      inputWrapper.innerHTML =`
      <input id="AutumnEmail" type ="email" value="" placeholder="info@abc.com"/>
      <input id="AutumnEmailSend" type="button" value="Send" >
      `
      let fullstackAutumnEmail = document.querySelector("#AutumnEmail")
      let fullstackemailSend = document.querySelector("#AutumnEmailSend")

      fullstackemailSend.addEventListener('click', ()=>{
        fullstackAutumnEmail = fullstackAutumnEmail.value
        sound.play()

        emailValidation(fullstackAutumnEmail,fullstackAutumn)
      })
    })
    //fullstack winter
    fullstackWinter.addEventListener('click', ()=>{
      fullstackWinter = fullstackWinter.value
      sound.play()
      showMessage(`${fullstackWinter}`,'user')
      setTimeout(()=>showMessage(`Our winter session begins on January 22.<br> Please enter your e-mail.`, 'bot'),1000 ) 
      
      inputWrapper.innerHTML =`
      <input id="WinterEmail" type ="email" value="" placeholder="info@abc.com"/>
      <input id="WinterEmailSend" type="button" value="Send" >
      `
      let fullstackWinterEmail = document.querySelector("#WinterEmail")
      let fullstackWinterEmailSend = document.querySelector("#WinterEmailSend")

      fullstackWinterEmailSend.addEventListener('click', ()=>{
        fullstackWinterEmail = fullstackWinterEmail.value
        sound.play()

        emailValidation(fullstackWinterEmail,fullstackWinter)
      })
    })
    })
    // choose .NET program
    netDeveloper.addEventListener('click',()=>{
      netDeveloper = netDeveloper.value
      sound.play()
      showMessage(`${netDeveloper}`, 'user');
      setTimeout(()=> showMessage(`Each year we have only one session`, 'bot'),1000)

      inputWrapper.innerHTML =`
      <input id="netAutumn" type="button" value="Autumn">
      `
      let netAutumn = document.querySelector("#netAutumn")

      netAutumn.addEventListener('click',()=>{
      netAutumn = netAutumn.value
      sound.play()

      showMessage(`${netAutumn}`, 'user');
      setTimeout(()=> showMessage(`Our autumn session begins on August 10.<br> Please enter your e-mail.`, 'bot'),1000)
        //add email input
        inputWrapper.innerHTML =`
      <input id="AutumnEmail" type ="email" placeholder="info@abc.com"/>
      <button id="AutumnEmailSend" type="submit" >Send </button>
      `
      let netAutumnEmail = document.getElementById("AutumnEmail")
      let emailSend = document.getElementById("AutumnEmailSend")

      emailSend.addEventListener('click',()=>{
        netAutumnEmail = netAutumnEmail.value
        sound.play()
    
        emailValidation(netAutumnEmail, netAutumn)
    })

    })
    })

    }) 
    // if choose NO
    noBtn.addEventListener('click', () =>{
      noBtn = noBtn.value
      sound.play()
      showMessage(`${noBtn}`, 'user');
      setTimeout(()=>showMessage(`Oh! That's sad <br>Good Luck in your current job`, 'bot'),2000)
      inputWrapper.innerHTML =` `

      setTimeout(()=>location.reload(), 5000)//back to beginning
    })
  


  }
})

setTimeout(greeting, 1000)
