// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById ('user-input')
const sendBtn = document.getElementById ('send-btn')
const nameForm = document.getElementById ('name-form')
const startButton = document.getElementById ('startButton')
const startPage = document.getElementById ('startPage')
const inputWrapper = document.getElementById ('input-wrapper')


// Global variables, if you need any, declared here
// Functions declared here
// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("Hello!")
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
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

const updateStudy = () => {
const selectStudy = document.getElementById('selectStudy')
  if (selectStudy.value === 'brain') {
    userReply(`Brain Power`)
    setTimeout(playMusic, 1000)
   } 
    else if (selectStudy.value === 'relaxing') {
    userReply(`Relaxing`)
    setTimeout(playMusic, 1000)
  }
    else if (selectStudy.value === 'focus') {
      userReply(`Focus`)
      setTimeout(playMusic, 1000)
    }
    else {
      alert('Not a valid option!')
    }
}

const updateParty = () => {
const selectParty = document.getElementById ('selectParty')
  if (selectParty.value === 'ninety') {
    userReply (`90’s party`)
    setTimeout(playMusic, 1000)
  }

  else if (selectParty.value === 'eighty') {
    userReply (`80’s party`)
    setTimeout(playMusic, 1000)
  }

  else if (selectParty.value === 'millenium') {
    userReply (`2000’s hits`)
    setTimeout(playMusic, 1000)
  }
  else {
    alert('Not a valid option!')
  }
}



// Starts here
const greeting = () => {
  showMessage(`Hello stranger! What's your name?`, 'bot')

}
const userReply = (input) => { 
  showMessage(input, 'user')
}




//////




const playMusic = () => {
  showMessage(`Your choice is a good one. But I will play this instead 🤖`, 'bot')
  inputWrapper.innerHTML = `
  
  <audio controls loop> 
  <source src="./funnyjazz.mp3" type= "audio/mp3"> Your browser does not support the audio tag. 
  </audio>
    `
}

/* <audio controls autoplay loop>
<source src="./SLOWVERSION_2019-10-13_-_The_Biggest_Smile_-_David_Fesliyan.mp3" type="audio/mp3">
Your browser does not support the audio tag. 
</audio> */


const pickMusicStyle = () => {
  showMessage(`Nice color! Now choose your favorite music style for today.`, 'bot')
  inputWrapper.innerHTML = `
  <button id= "studyBtn"> Study </button>    
  <button id= "partyBtn"> Party </button>
  `
  const studyBtn = document.getElementById('studyBtn')
  const partyBtn = document.getElementById('partyBtn')
  studyBtn.onclick = () => {                                   
    inputWrapper.innerHTML = ` 
      <select id="selectStudy" onchange="updateStudy()" >
        <option value="" selected disabled>👇 Select one...</option>
        <option id= "brain" value="brain">Brain Power</option>
        <option id= "relaxing" value="relaxing">Relaxing</option>
        <option id= "focus" value="focus">Focus</option>
      </select> 
      `
  userReply(`Study`)               
  // setTimeout(playMusic, 5000)
  }



  partyBtn.onclick = () => {
    inputWrapper.innerHTML = `
      <select id="selectParty" onchange= "updateParty ()">
        <option value="" selected disabled>👇 Select one...</option>
        <option id= "ninety" value="ninety"> 90’s party </option>
        <option id= "eighty" value="eighty">80’s party </option>
        <option id= "millenium" value="millenium">2000’s hits</option>
      </select>
      `
    
  userReply(`Party`)
  // setTimeout(playMusic, 5000)
  }


  const brain = document.getElementById ('brain')
  const relaxing = document.getElementById ('relaxing')
  const focus = document.getElementById ('focus')
  const eighty = document.getElementById ('eighty')
  const ninety = document.getElementById ('ninety')
  const millenium = document.getElementById ('millenium')

  
  // power.addEventListener ('onclick',() => {
  //   userReply(`Power`)
  //   setTimeout(playMusic, 1000)
  // })

  // relaxing.onchange = () => {
  //   userReply(`Relaxing`)
  //   setTimeout(playMusic, 1000)
  // }





  // const select = document.getElementById('select')
  // select.addEventListener('change', () => (playMusic))

  // setTimeout(playMusic, 1000)


}





//////

sendBtn.addEventListener('click',()  => {
userReply (userInput.value)
setTimeout (pickColor, 1000) 
})


const pickColor = () => {
  showMessage (`Nice to meet you ${userInput.value}. What is your favorite color?`, 'bot')
  inputWrapper.innerHTML = `
  <button id= "pinkBtn"> Pink </button>    
  <button id= "greenBtn"> Green </button>
  <button id= "blackBtn"> Black </button>
  `
  const pinkBtn = document.getElementById('pinkBtn')
  const greenBtn = document.getElementById('greenBtn')
  const blackBtn = document.getElementById('blackBtn')
  pinkBtn.onclick = () => {                                   
     //when user click on the Pink button, it's going to change background color to Pink. After 1s invoke function pickMusicStyle
  document.body.style.backgroundColor = "pink";
  userReply(`Pink`)                 //invoke userReply function with the input "Pink"
  setTimeout(pickMusicStyle, 1000)
  }
  greenBtn.onclick = () => {
  document.body.style.backgroundColor = "green";
  userReply(`Green`)
  setTimeout(pickMusicStyle, 1000)
  }
  blackBtn.onclick = () => {
  document.body.style.backgroundColor = "black";
  userReply(`Black`)
  setTimeout(pickMusicStyle, 1000)
  }
}



//nameInput.innerHTML = ""


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)


nameForm.addEventListener('submit',(event) => {
  event.preventDefault()
})

startButton.onclick = () => { 
  startPage.style.display="none"
  setTimeout(greeting, 1000)
}

