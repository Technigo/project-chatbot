// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const welcomeButton = document.getElementById('welcomeBtn')
const sendBtn = document.getElementsByClassName('send-btn')
const input = document.getElementById('input')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const select1 = document.getElementById('select1')
// Global variables, if you need any, declared here

// Functions declared here
let questionNumber = 1
//botReply to show message at bot side
const botReply = (message) => {
  showMessage(message, 'bot')
}
//userReply to show message at bot side
const userReply = (message) => {
  showMessage(message, 'user')
}
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
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
// Starts here
const greeting = () => {
  questionNumber = 1
  showMessage(`Hello there Beat Bot!`, 'user')
  setTimeout(() => botGreeting(), 1000)
}
//starts conversation with button
welcomeButton.onclick = function () {
  if (welcomeButton.style.display !== 'none') {
    welcomeButton.style.display = 'none'; {
      greeting(showMessage, 'user')
    }
  };
}

//Bot greets human
const botGreeting = () => {
  showMessage(`Hello there human, what's your name?`, 'bot')
  questionNumber = 1
}
//gives the h
const handleNameInput = () => {
  console.log('handleNameInput')
  showMessage(`My name is ${input.value}`, 'user');
  setTimeout(() => whatMood(), 1000);
}

//Pick your mood
const whatMood = () => {
  console.log('whatMood')
  showMessage(`Oh ${input.value} describe your mood in one word!`, 'bot')
  questionNumber = 3
  input.value=''
}
//User choose their mood
const moodAnswer = () => {
  console.log('moodAnswer');

  console.log('moodAnswer() ', input.value)
  const inputMood = input.value
  questionNumber = 4
  showMessage(`I am ${inputMood}`, 'user')
  setTimeout(() => songSelection(input.value), 1000);
}

//Select a song from the list
const songSelection = (input) => {
  questionNumber = 5
  

  if(input ==='sad'|| input === 'depressed'|| input === 'blue') {
    showMessage(`So you are ${input}, here are some song recommendations`, 'bot')

    inputWrapper.innerHTML = `
    <select id="select1">
     <option value="" selected disabled> Select a beat..</option>
     <option value="Hassle">Erik Hassle - Hurtful</option>
     <option value="TheFray">The Fray - How to save a life</option>
     <option value="Coldplay">Coldplay - Fix you</option>
   </select>
   `
   const songDropDown = document.getElementById('select1')
   songDropDown.addEventListener('change', (event) => {
     setTimeout (() => showMessage(`Great choice, we're now listening to ${event.target.value}! Do you like the song?`, 'bot'),1000);

      
     if (event.target.value === 'Coldplay') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/Coldplay_-_Fix_You_Official_Video_1.mp3" type="audio/mp3">
        </audio>
    `

  inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })

    } else if (event.target.value === 'Hassle') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/Erik Hassle - Hurtful.mp3" type="audio/mp3">
        </audio>
    `
    inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
    } else if (event.target.value === 'TheFray') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/The Fray - How to Save a Life.mp3" type="audio/mp3">
        </audio>
    `
    inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
    }
   
   })

   } else if (input === 'happy'|| input === 'glad'|| input === 'excited') {
     showMessage(`So you are ${input}, here are some song recommendations`, 'bot')
     inputWrapper.innerHTML = `
    <select id="select2">
     <option value="" selected disabled> Select a beat..</option>
     <option value="Pharell">Pharell Williams - Happy</option>
     <option value="Timberlake">Justin Timberlake - Can't stop the feeling</option>
     <option value="Beyonce">Beyonce - Single ladies</option>
   </select>
   `
   const songDropDown = document.getElementById('select2')
   songDropDown.addEventListener('change', (event) => {
    setTimeout (() => showMessage(`Great choice, we're now listening to ${event.target.value}!`, 'bot'),5000);
    setTimeout(() => ending(), 10000);
    

      
     if (event.target.value === 'Pharell') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/Pharrell Williams - Happy.mp3" type="audio/mp3">
        </audio>
    `
    inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
    }
    else if (event.target.value === 'Timberlake') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/Justin Timberlake - Can't Stop The Feeling.mp3" type="audio/mp3">
        </audio>
    `
    inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
    }
    else if (event.target.value === 'Beyonce') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/Beyoncé - Single Ladies (Put a Ring on It).mp3" type="audio/mp3">
        </audio>
    `
    inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
    }
   })
  
   } else if (input === 'angry'|| input === 'mad'|| input === 'frustrated'|| input === 'irritated') {
    showMessage(`So you are ${input}, here are some song recommendations`, 'bot')

     inputWrapper.innerHTML = `
    <select id="select3">
     <option value="" selected disabled> Select a beat..</option>
     <option value="Pink">Pink - So what</option>
     <option value="Swift">Taylor Swift - I knew you were trouble</option>
     <option value="CudiWest">Kid Cudi, Kanye West - Erase Me</option>
   </select>
   `
   const songDropDown = document.getElementById('select3')
   songDropDown.addEventListener('change', (event) => {
    setTimeout (() => showMessage(`Are you happy with the choice of ${event.target.value}?`, 'bot'),5000);
    setTimeout(() => ending(), 10000);
      
     if (event.target.value === 'Pink') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/P!nk - So What (Official Video).mp3" type="audio/mp3">
        </audio>
    `
    inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
    }
    else if (event.target.value === 'Swift') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/Taylor Swift - I Knew You Were Trouble.mp3" type="audio/mp3">
        </audio>
    `
    inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
    }
    else if (event.target.value === 'CudiWest') {
      inputWrapper.innerHTML += `
        <audio autoplay> 
          <source src="./assets/Kid Cudi - Erase Me ft Kanye West.mp3" type="audio/mp3">
        </audio>
    `
    inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
    }
   })

  } else if (input === 'in love'|| input === 'love'|| input === 'romantic') {
    showMessage(`So you are ${input}, here are some song recommendations`, 'bot')

   inputWrapper.innerHTML = `
  <select id="select4">
   <option value="" selected disabled> Select a beat..</option>
   <option value="Legend">John Legend - All of me</option>
   <option value="Houston">Whitney Houston - I will always love you</option>
   <option value="Carey">Mariah Carey - We Belong Together</option>
 </select>
 `
 const songDropDown = document.getElementById('select4')
 songDropDown.addEventListener('change', (event) => {
  setTimeout (() => showMessage(`Are you happy with the choice of ${event.target.value}?`, 'bot'),5000);
  setTimeout(() => ending(), 10000);
    
   if (event.target.value === 'Legend') {
    inputWrapper.innerHTML += `
      <audio autoplay> 
        <source src="./assets/John Legend - All of Me.mp3">
      </audio>
  `
  inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
  }
  else if (event.target.value === 'Houston') {
    inputWrapper.innerHTML += `
      <audio autoplay> 
        <source src="./assets/Whitney Houston - I Will Always Love You.mp3" type="audio/mp3">
      </audio>
  `
  inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
  }
  else if (event.target.value === 'Carey') {
    inputWrapper.innerHTML += `
      <audio autoplay> 
        <source src="./assets/Mariah Carey - We Belong Together.mp3" type="audio/mp3">
      </audio>
  `
  inputWrapper.innerHTML += `
    <button type="submit" id="yes">Yes</button>
    <button type="submit" id="no">No</button>
    `

    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
  
    yesBtn.addEventListener('click', () => {
      showMessage(`Yes!`, 'user')
      ending()
    })

    yesBtn.onclick = function () {
      if (yesBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }
    noBtn.onclick = function () {
      if (noBtn.style.display !== 'none') {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      };
    }

    noBtn.addEventListener('click', () => {
      input.value=''
      setTimeout (() => showMessage(`Too bad! I will make you start over`, 'bot'),1000);
      setTimeout(() => beginAgain(), 5000);
    })
  }
 })

  } else { //if the bot does not recognize the mood
    console.log('im here')
    showMessage(`I don't recognize that mood..`,'bot')
    inputWrapper.innerHTML = `
    <select id="select5">
     <option value="" selected disabled> Select a mood..</option>
     <option value="happy">happy</option>
     <option value="glad">glad</option>
     <option value="excited">excited</option>
     <option value="angry">angry</option>
     <option value="mad">mad</option>
     <option value="frustrated">fustrated</option>
     <option value="irritated">irritated</option>
     <option value="sad">sad</option>
     <option value="depressed">depressed</option>
     <option value="blue">blue</option>
     <option value="in-love">in love</option>
     <option value="love">love</option>
     <option value="romantic">romantic</option>
   </select>
   <button id="rerun"> Go </button>
   `
  // const selectedValue = document.getElementById('select5').value
   document.getElementById('rerun').onclick = function() {
     //songSelection(document.getElementById('select5').value)
     console.log('now I have clicked', document.getElementById('select5').value);
     songSelection(document.getElementById('select5').value)
   }
  
  }

}

    const ending = () => {
      questionNumber = 6
      showMessage(`Thank you for chatting with me!`, 'bot')
    }

    const beginAgain = () => {
      questionNumber = 7
      location.reload();
    }
    

const handleInput = (event) => {
  event.preventDefault()
  console.log(questionNumber)
  if (questionNumber === 1) {
    handleNameInput()
  }
  else if (questionNumber === 2) {
    console.log(2)
    setTimeout(() => whatMood(event), 1000);
  } else if (questionNumber === 3) {
    console.log(3);
    setTimeout(() => moodAnswer(event), 1000);
  } else if (questionNumber === 4) {
    setTimeout(() => songSelection(event), 1000);
  } else if (questionNumber === 6) {
    setTimeout(() => ending(event), 5000);
  } else { (questionNumber === 7) 
    setTimeout (() => beginAgain(), 1000); 
  }
  }

// Set up your eventlisteners here
form.addEventListener('submit', handleInput)

