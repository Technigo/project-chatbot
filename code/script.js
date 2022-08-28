// Variables that point to selected DOM elements  //declaring these elements from html
const chat = document.getElementById('chat')                  //this the whole chatbox area
const inputWrapper = document.getElementById('inputWrapper')   //the whole chat-box
const nameForm = document.getElementById('nameForm')          //input field
const nameInput = document.getElementById ('nameInput')      //typed input
const button = document.getElementById('button')            //button


  // Sound effect for chat
  const chatSound = () => {
    let audio = new Audio("chatTone.mp3")
    audio.play();
  }



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {          //the answering part from the chatbox in placement
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="IconUser.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="IconBot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;   
  chatSound();          // this inside the function for sounds
}


const greeting = () => {                  // Chat functions starts here    
  showMessage("Hello there, What's your name?", 'bot');  
}

const greetingAnswer = (event) => { 
  event.preventDefault();   //prevent website refresh at submit 
  const answer = nameInput.value //storing the answer in a variable
  showMessage(`My name is ${answer}`, 'user');   //the greeting answer with name from user 
  nameInput.value = ''          //setting the users answer into an empty string
  showMessage(`Hello! ${answer} Show a topic you would like to know about?` ,  'bot');
  setTimeout(() => questionTwo(answer), 1000) //excecuting the function upon completion of timer in milliseconds
}

nameForm.addEventListener('submit', greetingAnswer) //event listenr, in this order:variable of inputfield,listener,submit,function call


const questionTwo = () => { //second question ,BOT
    
    inputWrapper.innerHTML = `     
    <button id = "romance" type = "submit">Romance</button>
    <button id = "nature" type = "submit">Nature</button> 
    <button id = "unicorns" type = "submit">Unicorns</button>
    <button id = "food" type = "submit">Food</button> `

    //eventlisteners for choices                                
    document.getElementById('romance').addEventListener('click' , () => { showMessage("I would like to know more about romance", 'user')
    setTimeout(() => answerTwo('romance' , 'user')),1000  
    }) 
    document.getElementById('nature').addEventListener('click' , () => { showMessage("Nature is my favourite choice!", 'user')
    setTimeout(() => answerTwo('nature' , 'user')),1000  
    }) 
    document.getElementById('unicorns').addEventListener('click' , () => { showMessage("Give me the magic, picking unicorns ofc!", 'user')
    setTimeout(() => answerTwo('unicorns' , 'user')),1000  
    }) 
    document.getElementById('food').addEventListener('click' , () => { showMessage("I'm excited to know about food.", 'user')
    setTimeout(() => answerTwo('food' , 'user')),1000  
    }) 

} 

const answerTwo = (choice) => {      //answer , passing the parameter
    if ( choice === 'romance' ) { 
        setTimeout(() => showMessage("Ah, romance my favorite choice! Choose your category.", 'bot'),1000)
        inputWrapper.innerHTML = `
        <button id = "single" type = "submit">single</button>
        <button id = "marriage" type = "submit">marriage</button>
        `
        document.getElementById('single').addEventListener('click' , () => { showMessage("Dying to know about singleness.", 'user')
        setTimeout(() => facts('single' , 'user')),1000  // calling out the next answer in a new function named facts
        }) 
        document.getElementById('marriage').addEventListener('click' , () => { showMessage("Married facts for married people.", 'user')
        setTimeout(() => facts('marriage' , 'user')),1000  // calling out the next answer in a new function named facts
        }) 

       
    }
    else if ( choice === 'nature') {
        setTimeout(() => showMessage("Let's give you some nature wisdom, category?", 'bot'),1000)
        inputWrapper.innerHTML = `
        <button id = "ocean" type = "submit">ocean</button>
        <button id = "animals" type = "submit">animals</button>
        `
        document.getElementById('ocean').addEventListener('click' , () => { showMessage("Tell me about this, please", 'user')
        setTimeout(() => facts('ocean' , 'user')),1000  // calling out the next answer in a new function named facts
        }) 
        document.getElementById('animals').addEventListener('click' , () => { showMessage("Animals, are my fave! Give me the info!", 'user')
        setTimeout(() => facts('animals' , 'user')),1000  // calling out the next answer in a new function named facts
        }) 
    
   
    }
    else if ( choice === 'unicorns') {      

        setTimeout(() => showMessage("You did know unicorns are real?! Choose a magic category", 'bot'),1000)
     
        inputWrapper.innerHTML = `
        <button id = "superpower" type = "submit">superpower</button>
        <button id = "wings" type = "submit">wings</button>
        `
        document.getElementById('superpower').addEventListener('click' , () => { showMessage("Tell me something about their superpower!", 'user')
        setTimeout(() => facts('superpower' , 'user')),1000  // calling out the next answer in a new function named facts
        }) 

        document.getElementById('wings').addEventListener('click' , () => { showMessage("Tell me something about their wings!", 'user')
        setTimeout(() => facts('wings' , 'user')),1000  // calling out the next answer in a new function named facts
        }) 

    }
    else if ( choice === 'food') {
        setTimeout(() => showMessage("Food is life, fastfood fact or something about health themed perhaps?", 'bot'),1000)
        
        inputWrapper.innerHTML = `
        <button id = "fastfood" type = "submit">fastfood</button>
        <button id = "health" type = "submit">health themed</button>
        `
       
        document.getElementById('fastfood').addEventListener('click' , () => { showMessage("Tell me about fastfood, please.", 'user')
        setTimeout(() => facts('fastfood' , 'user')),1000  // calling out the next answer in a new function named facts
        }) 
        document.getElementById('health').addEventListener('click' , () => { showMessage("Health info for the healthbuff!", 'user')
        setTimeout(() => facts('health' , 'user')),1000  // calling out the next answer in a new function named facts
        }) 
       
    }


    const facts = (lastChoice) => {
        if (lastChoice === 'single'){
        setTimeout(() => showMessage("Fact for you: You may be better off single because... There are 80 million germs exchanged in every kiss.", 'bot'),1000)
        setTimeout(() => closure('single', 'bot')),1000  // calling out the next answer in a new function named CLOSURE
        
        }
        else if (lastChoice === 'marriage') {
        setTimeout(() => showMessage("Fact: The average married couple has sex 68.5 times a year", 'bot'),1000)
        setTimeout(() => closure('single', 'bot')),1000  // calling out the next answer in a new function named CLOSURE   
        }
        else if (lastChoice === 'ocean'){
        setTimeout(() => showMessage("Did you know that the ocean releases more oxygen than the forests?", 'bot'),1000) 
        setTimeout(() => closure('single', 'bot')),1000  // calling out the next answer in a new function named CLOSURE
        }
        else if (lastChoice === 'superpower'){
          setTimeout(() => showMessage("Fact: Did you know that with their horns they can neutralize poison. How cool?!!", 'bot'),1000)
          setTimeout(() => closure('single', 'bot')),1000  // calling out the next answer in a new function named CLOSURE   
        }

        else if (lastChoice === 'wings'){
        setTimeout(() => showMessage("Fact: Unicorns actually don't have wings - thats Pegasus!", 'bot'),1000)
        setTimeout(() => closure('single', 'bot')),1000  // calling out the next answer in a new function named CLOSURE   
        }
        else if (lastChoice === 'animals'){
            setTimeout(() => showMessage("I will tell you the truth: An ostrich's eyes are bigger than its brain!", 'bot'),1000)   
            setTimeout(() => closure('single', 'bot')),1000  // calling out the next answer in a new function named CLOSURE
        }
        else if (lastChoice === 'fastfood'){
            setTimeout(() => showMessage("Fact: The world's largest toy distributor is none other than McDonald's, thanks to their Happy Meals", 'bot'),1000)  
            setTimeout(() => closure('single', 'bot')),1000  // calling out the next answer in a new function named CLOSURE 
        }
        else if (lastChoice === 'health'){
            setTimeout(() => showMessage("Fact: There Is No Perfect Diet for Everyone.", 'bot'),1000)   
            setTimeout(() => closure('single', 'bot')),1000  // calling out the next answer in a new function named CLOSURE
        }

    
    }

    const closure = (end) => {
        setTimeout(() => showMessage("Hope you had a good time, would you like to know more facts or end this chat?", 'bot'),3000)

        inputWrapper.innerHTML = `
        <button id = "yes" type = "submit">Yes, more facts.</button>
        <button id = "no" type = "submit">End, chat.</button>
        `
        document.getElementById('yes').addEventListener('click' , () => { showMessage("I want to know more!", 'user')
        setTimeout(() => questionTwo('yes' , 'user')),1000  // calling out the next answer in a new function named facts
        })
        document.getElementById('no').addEventListener('click' , () => { showMessage("No thank you, had fun though!", 'user')
        setTimeout(() => bye('no' , 'user')),1000  // calling out the next answer in a new function named facts
        })
    }

    const bye = (end) => {
        
        setTimeout(() => showMessage("Goodbye, thank you for your time!", 'bot'),1000)
        inputWrapper.innerHTML = `
        <h1>Chat closed<h1>
        `
        }

    }
// When website loaded, chatbot asks first question.
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);