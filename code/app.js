document.addEventListener('DOMContentLoaded', () => {
  
  const chat = document.getElementById('chat');
  const inputWrapper = document.getElementById('input-wrapper');
  const nameInput = document.getElementById('name-input');
  // const form = document.getElementById('name-form')
  const sendButton = document.querySelector('.send-btn');

  let questionNumber = 1

  const userResponse= ()=>{
    showMessage (msg,'user')
  }

  const botResponse = ()=>{
    showMessage (msg,'bot')
  }


  const allQuestions=(message) =>{
    if(questionNumber ===1){
      userResponse(message)
      input.value= ''
    setTimeout(()=>showFoodAlternative(message),1000)
    }
    else if(questionNumber ===2){
      userResponse(message)
      setTimeout(()=> showMenu(message),1000)
          }
          else if(questionNumber ===3){
            userResponse(message)
            setTimeout(()=> showOption(message),1000)
          }
          else if(questionNumber ===4){
            userResponse(message)
            setTimeout(()=>yesNoButtons(message),1000) 
          }
          else{
            userResponse(message)
            setTimeout(ThnakYou,1000)
          }
  }



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
  const greeting = () => {
    // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender

    showMessage("Hello there, What's your name?", 'bot');
  
  }

  // Eventlisteners here
  sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    showMessage(name, 'user');

    setTimeout(() => askNextQuestion(name), 2000)  
  
  })



      // Next function or If statment for YES or NO ! 
      const nextFunction =(option)=>{
if(option === 'yes') {
  showMessage('Thank you for your order! See you soon 👋🏼', 'bot')
}
else{
  showMessage('bye', 'bot')
}
    
      }

  function askNextQuestion() {
    setTimeout(() => showMessage(` ${nameInput.value} , What do you want to eat today? `, 'bot'), 1000)

 sendButton.remove();
setTimeout(showButtons, 1000);

  } 
  const showButtons =()=>{

inputWrapper.innerHTML = `
<button id="pizzabtn">Pizza</button>
<button id="pastabtn">Pasta</button>
<button id="saladbtn">Salad</button>
`

    document.getElementById('pizzabtn').addEventListener('click', () => ShowFoodAlternative('Pizza')); 

    document.getElementById('pastabtn').addEventListener('click', () => ShowFoodAlternative('pasta'));

    document.getElementById('saladbtn').addEventListener('click', () => ShowFoodAlternative('salad'))

  } 


  const ShowFoodAlternative= (food)=>{
    showMessage(`${food}`, 'user')
    setTimeout(() => showMessage(`Nice choice! Which kind of ${food} do you want ? Select from Menu `, 'bot'), 2000);
    setTimeout(()=>
      showMenu(food), 2000)
     }

     const showMenu = (food)=>{
      inputWrapper.innerHTML = `
      <button id="salad">
        <select id="salad">
        <option value="">Select A Salad from menu 👇 </option>
        <option value="green">Green Salad</option>
        <option value="been">Been Salad</option>
        <option value="chicken">Chicken Salad</option>
        </select>
      </button>
  
      
      <button id="pasta">
        <select id="pasta">
        <option value="">Select A Pasta from menu 👇 </option>
        <option value="carbonara">Pasta Carbonara</option>
        <option value="pomodoro">Pasta Pomodoro </option>
        <option value="langon">Langon Pasta</option>
        </select>
      </button>

      <button>

      <select id="pizza" >
        <option> Select A Pizza from menu 👇 </option>
        <option value="Margarita" class="dropDown" id="Margarita>Margarita</option>
        <option value="Peperoni" class="dropDown" id="Peperoni">Peperoni</option>
        <option value="Salami" class="dropDown" id="Salami">Salami</option>
      </select>
  
      </button>
      `

      //  document.getElementById('salad'.addEventListener('click', () =>
      //    buttonAdultChlid('adult', food)))

       buttonAdultChlid()
   }
// Adult , Child btn
  const buttonAdultChlid= ()=>{
    inputWrapper.innerHTML = `
   <button id="adult">👨🏽‍🦳</button>
     <button id="child">🧒🏽</button>`

     let adult= document.getElementById('adult')
     .addEventListener('click',()=>{
      showMessage('For an adult', 'user')
      
      adultChildOption('adult')
     })
     
     let child= document.getElementById('child')
     .addEventListener('click',()=>{
      showMessage('For a child', 'user')

      adultChildOption()
     })
   
  }

  //  If statment for Child or adult
  const adultChildOption= (chooseOption) =>{
    if (chooseOption === adult){
      showMessage('For an adult', 'user')
    }else{
      showMessage('For a child', 'user')
    }
    buttonYesNo()
  }
  

//  Yes, No btn
  const buttonYesNo= ()=>{
    inputWrapper.innerHTML = `
    <button id="yes">Yes</button>
    <button id="no">No</button>
    `
    document.getElementById('yes').addEventListener('click', () => {
      showMessage('One adult will be prepared for you. That would be 15$. Are you sure you want to order it? ', 'bot')
      // Call next function with a parameter for yes
      nextFunction('yes')

    })

    document.getElementById('no').addEventListener('click', () => {
      showMessage('No problem ! See u another time', 'bot')
      //call next function with a parameter for no
      nextFunction('no')
    })

  }

  // This means the greeting function will be called one second after the website is loaded.
  setTimeout(greeting, 1000);

})