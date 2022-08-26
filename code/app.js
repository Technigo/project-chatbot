document.addEventListener('DOMContentLoaded', () => {
  
  const chat = document.getElementById('chat');
  const inputWrapper = document.getElementById('input-wrapper');
  const nameInput = document.getElementById('name-input');
  const form = document.getElementById('name-form')
  const sendButton = document.querySelector('.send-btn');


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
  
    // if (nameInput.value === pizza){
    //   showMessage(pizza)

    // }
    // else if (nameInput.value ===pasta){
    //   showMessage(pasta)
    // }
    // else{
    //   showMessage(salad)
    // }

  })


  const pizza = () => {
    inputWrapper.innerHTML = `
  <select id="pizza" >
  <option> Select A Pizza from menu 👇 </option>
  <option value="Margarita">Margarita</option>
  <option value="Peperoni">Peperoni</option>
  <option value="Salami">Salami</option>
  </select>

  `
  
  }

  const pasta = () => {
    inputWrapper.innerHTML = `
  <select id="pasta">
  <option value="">Select A Pasta from menu 👇 </option>
  <option value="carbonara">Pasta Carbonara</option>
  <option value="pomodoro">Pasta Pomodoro </option>
  <option value="langon">Langon Pasta</option>
  </select>
  `
  }

  const salad = () => {
    inputWrapper.innerHTML = `
  <select id="salad">
  <option value="">Select A Salad from menu 👇 </option>
  <option value="green">Green Salad</option>
  <option value="been">Been Salad</option>
  <option value="chicken">Chicken Salad</option>
  </select>
  `
  }
 

  const buttonAdultChlid= ()=>{
    inputWrapper.innerHTML = `
   <button id="adult">👨🏽‍🦳</button>
     <button id="child">🧒🏽</button>`
  }

  const buttonYesNo= ()=>{
    inputWrapper.innerHTML = `
    <button>Yes</button>
    <button>No</button>
    `
    
  }
  
  function askNextQuestion() {
showMessage(` ${ nameInput.value } , What do you want to eat today? `, 'bot');
 nameInput.value = '';
sendButton.remove();

inputWrapper.innerHTML = `
<button id="pizzabtn">Pizza</button>
<button id="pastabtn">Pasta</button>
<button id="saladbtn">Salad</button>
`
  
    document.getElementById('pizzabtn').addEventListener('click', () => {
      showMessage('Pizza', 'user');
      setTimeout(() => {

      }, 2000); 

      showMessage('Nice choice! Which kind of pizza do you want? Select from Menu ', 'bot');
      setTimeout(() => {

      }, 2000)

      pizza()
      setTimeout(() => {

      }, 1000);

      // showMessage('', 'user');
      // setTimeout(()=>{

      // }, 2000)

      // showMessage('One ${}coming up! It is for an adult or a chlid? ', 'bot')
      // setTimeout(()=>{

      // }, 1000);
      // buttonAdultChlid();
      // showMessage('', 'user');
      // showMessage('One adult will be prepared for you. That would be 15$. Are you sure you want to order it? ', 'bot');
      // buttonYesNo();
      

      


    })
 
    document.getElementById('pastabtn').addEventListener('click', () => {
      showMessage('Pasta', 'user')
      showMessage('Oh , So you are in the mood for Pasta! Check menu... ', 'bot');
      setTimeout(() => {
        pasta()
      })
    })

      document.getElementById('saladbtn').addEventListener('click', () => {
        showMessage('Salad', 'user');
        showMessage('Oh , So you are in the mood for Salad! Check menu... ', 'bot');
        setTimeout(() => {
          salad()
        }, 1000)
      })



setTimeout(() => 1000)
  }
  
  


  // When website loaded, chatbot asks first question.
  // normally we would invoke a function like this:
  // greeting()
  // But if we want to add a little delay to it, we can wrap it in a setTimeout:
  // setTimeout(functionName, timeToWaitInMilliSeconds)
  // This means the greeting function will be called one second after the website is loaded.
  setTimeout(greeting, 1000);

})