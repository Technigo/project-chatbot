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
    // nameInput.value = ''; 
  })


  const pizza = () => {
    inputWrapper.innerHTML = `
  <select id="pizza" >
  <option> Select A Pizza from menu 👇 </option>
  <option value="Margarita" class="dropDown" id="Margarita>Margarita</option>
  <option value="Peperoni" class="dropDown" id="Peperoni">Peperoni</option>
  <option value="Salami" class="dropDown" id="Salami">Salami</option>
  </select>
  `
    }

  const choosePizza = () => {
    const pizzaArray = ['Margarita', 'Peperoni', 'Salami'];

    for (let i = 0; i < pizzaArray.length; i++) {
       console.log('you choose', pizzaArray[i], 'We gonna make it ! ')
    }
  }
  choosePizza()

   
    // function myFunction() {
      //   let elem = document.querySelectorAll(".dropDown");
      //   elem.forEach(element => {
      //     element.addEventListener("click", () => {
      //       // console.log(e.target.innerHTML)
      //       // console.log(`Nice , you choose ${e.target.innerHTML}`)
      //       console.log(element)
      //     })
      //   })
      // }




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

  //  const choosePasta = () =>{
  //    const passaArray = ['Carbonara', 'Pomodoro', 'Langon'];

  //    for (let i = 0; i < passaArray.length; i++) {
  //     //  console.log('you choose', passaArray[i], 'We gonna make it ! ')
  //    }
  //  }


  const choosePasta = () =>{
     let text;
     const passaArray = ['Carbonara', 'Pomodoro', 'Langon'];
     switch(passaArray){
      case 'Carbonara':
        text="Nice you want Carbonara";
        break;
        case 'Pomodoro':
         text ="Nice you want Pomodoro";
         break;
       default: "Nice you want Langon"
     }
    }
   choosePasta()


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

      adultChildOption('child')
     })

  }

  //  If statment for Child or adult
  const adultChildOption= (chooseOption) =>{
    if (chooseOption === adult){
      showMessage('For an adult', 'user')
    }else{
      showMessage('For a child', 'user')
    }
  }
  

  // Yes, No btn
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

      setTimeout(() => {
        pizza()
      }, 2000);
      
   

      setTimeout(() =>{
        showMessage(`One Pizza is coming Up! Is it for an Adult or a Child?`, 'bot');
      }, 2000)

      setTimeout(() => {
        buttonAdultChlid();
      }, 4000);

      setTimeout(() =>{
        adultChildOption()
      }, 5000)

      setTimeout(() =>{
     buttonYesNo()
      }, 7000)
  setTimeout(() =>{
 
  })
    })
 
    document.getElementById('pastabtn').addEventListener('click', () => {
      showMessage('Pasta', 'user')
      showMessage('Oh , So you are in the mood for Pasta! Check menu... ', 'bot');
      setTimeout(() => {
        pasta()
      })

    setTimeout(() => {
      choosePasta()
    },1000)
    showMessage('text', 'user')

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

  // This means the greeting function will be called one second after the website is loaded.
  setTimeout(greeting, 1000);

})