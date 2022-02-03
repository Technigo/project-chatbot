// All the DOM selectors stored as short variables 
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper') 

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

/*take user input */
let sendBtn = document.getElementById("send-btn");
let userText = document.getElementById("name-input");

sendBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  userText = userText.value;
  sound.play()
  if (userText == ""){
    alert('You must write your name!')
    location.reload()
  }else if(isNaN(userText) == false){
    alert('Please only use letters!')
    location.reload()
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
      <input id="fullstackAutumnEmail" type ="email" value="" placeholder="info@abc.com"/>
      <input id="fullstackemailSend" type="button" value="send" >
      `
      let fullstackAutumnEmail = document.querySelector("#fullstackAutumnEmail")
      let fullstackemailSend = document.querySelector("#fullstackemailSend")

      fullstackemailSend.addEventListener('click', ()=>{
        fullstackAutumnEmail = fullstackAutumnEmail.value
        sound.play()

        if(fullstackAutumnEmail){
          setTimeout(()=> showMessage(`Thank you! You will recieve a full info-package at ${fullstackAutumnEmail}`, 'bot'),1000)
          inputWrapper.innerHTML =`
          <input type="button" value="Thanks">
          `
        setTimeout(()=>window.location.href = window.location.href, 5000) //back to beginning

          }
      })
    })
    //fullstack winter
    fullstackWinter.addEventListener('click', ()=>{
      fullstackWinter = fullstackWinter.value
      sound.play()
      showMessage(`${fullstackWinter}`,'user')
      setTimeout(()=>showMessage(`Our winter session begins on January 22.<br> Please enter your e-mail.`, 'bot'),1000 ) 
      
      inputWrapper.innerHTML =`
      <input id="fullstackWinterEmail" type ="email" value="" placeholder="info@abc.com"/>
      <input id="fullstackWinterEmailSend" type="button" value="send" >
      `
      let fullstackWinterEmail = document.querySelector("#fullstackWinterEmail")
      let fullstackWinterEmailSend = document.querySelector("#fullstackWinterEmailSend")

      fullstackWinterEmailSend.addEventListener('click', ()=>{
        fullstackWinterEmail = fullstackWinterEmail.value
        sound.play()

        if(fullstackWinterEmail){
          setTimeout(()=> showMessage(`Thank you! You will recieve a full info-package at ${fullstackWinterEmail}`, 'bot'),1000)
          inputWrapper.innerHTML =`
          <input type="button" value="Thanks">
          `
        setTimeout(()=>location.reload(), 5000) //back to beginning

          }

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
      <input id="netAutumnEmail" type ="email" placeholder="info@abc.com"/>
      <button id="emailSend" type="submit" >Send </button>
      `
      let netAutumnEmail = document.getElementById("netAutumnEmail")
      let emailSend = document.getElementById("emailSend")

      emailSend.addEventListener('click',()=>{
        netAutumnEmail = netAutumnEmail.value
        sound.play()
    
      if(netAutumnEmail){
      setTimeout(()=>showMessage(`Thank you! You will recieve a full info-package at ${netAutumnEmail}`, 'bot'),2000)
      inputWrapper.innerHTML =`
      <input type="button" value="Thanks">
      `
      setTimeout(()=>location.reload(), 5000)//back to beginning
      }
  
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
