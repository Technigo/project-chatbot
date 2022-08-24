// Variables that point to selected DOM elements  //declaring these elements from html
const chat = document.getElementById('chat')                  //this the whole chatbox area
const inputWrapper = document.getElementById('inputWrapper')   //the whole chat-box
const nameForm = document.getElementById('nameForm')          //input field
const nameInput = document.getElementById ('nameInput')     
const button = document.getElementById('button')            //button

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {          //the answering part from the chatbox in placement
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
        <img src="<img src="https://img.icons8.com/search"/>
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

const greeting = () => {
  showMessage("Hello there, What's your name?", 'bot');  
}

let greetingAnswer = (event) => {
  event.preventDefault()   //prevent website refresh at submit 
  const answer = nameInput.value //storing the answer in a variable
  showMessage(`${answer}`, 'user')   //the greeting answer with name from user 
  nameInput.value = ''           //setting the users answer into an empty string
  setTimeout(() => questionTwo(answer), 1000) //excecuting the function upon completion of timer in milliseconds
}

nameForm.addEventListener('submit', greetingAnswer) //event listenr, in this order:  variable of inputfield,listener,submit,function call

const questionTwo = () => { //second question ,BOT
    showMessage(`Hello! choose a topic of what you would like to know about?`, 'bot')
    inputWrapper.innerHTML = `     
    <button id = "romance" type = "submit">Romance</button>
    <button id = "nature" type = "submit">Nature</button> 
    <button id = "unicorns" type = "submit">Unicorns</button>
    <button id = "food" type = "submit">Food</button> `   

    //eventlisteners for choices                                
    document.getElementById('romance').addEventListener('click' , () => setTimeout(() => answerTwo('romance' , 'user')),1000 )  
    document.getElementById('nature').addEventListener('click' , () => setTimeout(() => answerTwo('nature' , 'user')),1000 ) 
    document.getElementById('unicorns').addEventListener('click' , () => setTimeout(() => answerTwo('unicorns' , 'user')),1000 )  
    document.getElementById('food').addEventListener('click' , () => setTimeout(() => answerTwo('food' , 'user')),1000 )                
} 

const answerTwo = (choice) => {      //answer , passing the parameter
            
    if ( choice === 'romance' ) { 
        setTimeout(() => showMessage("Ah, romance my favorite choice! Choose your category.", 'bot'),2000)
        inputWrapper.innerHTML = `
        <button id = "single" type = "submit">single</button>
        <button id = "marriage" type = "submit">marriage</button>
        `
        document.getElementById('single').addEventListener('click', () => setTimeout(() => showMessage (`Here's why you may be better off single: There are 80 million germs exchanged in every kiss.` , 'bot')),1000 )
        document.getElementById('marriage').addEventListener('click', () => setTimeout(() => showMessage (`The fact is that an average married couple has sex 68.5 times a year` , 'bot')),1000 )
    }
    else if ( choice === 'nature') {
        setTimeout(() => showMessage("Let's give you some nature wisdom, category?", 'bot'),1000)
        inputWrapper.innerHTML = `
        <button id = "ocean" type = "submit">ocean</button>
        <button id = "animals" type = "submit">animals</button>
        `
        document.getElementById('ocean').addEventListener('click', () => setTimeout(() => showMessage (`Did you know that the ocean releases more oxygon than the forests?` , 'bot')),1000 )
        document.getElementById('animals').addEventListener('click', () => setTimeout(() => showMessage (`I will tell you the truth: An ostrich's eyes are bigger than its brain!` , 'bot')),1000 )
    }

    else if ( choice === 'unicorns') {
        setTimeout(() => showMessage("DID YOU KNOW THAT UNICORNS ARE REAL!?!", 'bot'),1000)
        inputWrapper.innerHTML = `
        <button id = "superpower" type = "submit">superpower</button>
        <button id = "hunting" type = "submit">hunting</button>
        `
        document.getElementById('superpower').addEventListener('click', () => setTimeout(() => showMessage (`With their horns, unicorn can neutralize posion, how cool!?` , 'bot')),1000 )
        document.getElementById('hunting').addEventListener('click', () => setTimeout(() => showMessage (`In Michigan you can get a licence to hunt unicorns, well god luck...` , 'bot')),1000 )
    }
    else if ( choice === 'food') {
        setTimeout(() => showMessage("Food is life, fastfood fact or something about health themed perhaps?", 'bot'),1000)
        
        inputWrapper.innerHTML = `
        <button id = "fastfood" type = "submit">fastfood</button>
        <button id = "health" type = "submit">health themed</button>
        `
        document.getElementById('fastfood').addEventListener('click', () => setTimeout(() => showMessage (`The world's largest toy distributor is none other than McDonald's, thanks to their Happy Meals` , 'bot')),1000 )
        document.getElementById('health').addEventListener('click', () => setTimeout(() => showMessage (`There Is No Perfect Diet for Everyone.` , 'bot')),1000 )  
        
    }
    //}
    //else if (choice === 'nature') {
       // showMessage ("We all need nature healing powers! Did you know that the ocean releases more oxygen that the forests?"   //}
}

const questionThree = () => { //third question ,BOT
  showMessage(`Please chose a new topic`, 'bot')
  inputWrapper.innerHTML = `     
  
   `   

  //eventlisteners for choices                                
  document.getElementById('romance').addEventListener('click' , () => setTimeout(() => answerTwo('romance' , 'user')),1000 )  
               
} 
// ******* To  add **********//

// choose new topic or end (go back to work) function

//if (choice === 'new topic') {
  //show the topics again. except for the choosen previous  one? }

//else (choice === end/back to work) {
 // Happy I could teach you some about "choosen topics-collect chosen topics" }













 //eventlisteners
// setTimeout( () => functiontwo(nameInput), 1000) //maybe we have to set time to invoke, otherways maybe the chat setns on hold?? must decide if the inwoke shoul be by time or button--> check it up what to do with time
//const nameF = document.querySelector("nameInput")
//nameInput.addEventListener('click', greetingAnswer() => { console.log(true)})



// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
 
