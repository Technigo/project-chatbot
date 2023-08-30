// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const btn = document.getElementById("btn");
const nameInput = document.getElementById("name-input");
const btnsEl = document.getElementById("buttons");
const nameFormEl = document.getElementById("name-form");
const pizzaBtn = document.getElementById("pizzabtn");
const pastaBtn = document.getElementById("pastabtn");
const saladBtn = document.getElementById("saladbtn");
const pizzaMenue = document.getElementById("pizza-menue");
const pastaMenue = document.getElementById("pasta-menue");
const saladMenue = document.getElementById("salad-menue");
const addBtns = document.getElementById("add-btns");
const sendBtn = document.getElementById("send");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const sideBtns = document.getElementById("side-btns");


btnsEl.style.display = "none";
nameFormEl.style.display = "flex";
pizzaMenue.style.display = "none";
pastaMenue.style.display = "none";
saladMenue.style.display = "none";
addBtns.style.display = "none";
sideBtns.style.display = "none";

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}


// Set up your eventlisteners here
btn.addEventListener("click" , (e) => {
  e.preventDefault();

  const enterName = nameInput.value.trim();
  
  if(enterName !== ""){
    message = nameInput.value;
    showMessage(enterName , 'user');
    clearInput();
    setTimeout(() => {
      showMessage(`Nice to meet you ${enterName}.what type of food would you like to order?` , 'bot')
      btnsEl.style.display = "flex";
      nameFormEl.style.display = "none";
    },1000);

  }else{
    alert("Inavlid Name , please enter your name")
  }
 

});

const clearInput = () =>{
  nameInput.value = "";
}

// When website loaded, chatbot asks first question.

// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)

let selectedFood = ""
pizzaBtn.addEventListener("click" , () =>{
  showMessage(`Pizza` , 'user');
  btnsEl.style.display = "none";
  setTimeout(()=>{
    showMessage(`oh so you are in the mood for Pizza? Great choice! please select something from menue `, 'bot')
    pizzaMenue.style.display = "flex";
    pastaMenue.style.display = "none";
    saladMenue.style.display = "none";
  },1000);

  pizzaMenue.addEventListener("change" , ()=>{
    let valueOptionPizza = pizzaMenue.value;

    if(valueOptionPizza === "Margarita"){
      showMessage("Margarita" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Margarita Pizaa would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Margarita Pizaa";

      },1000)
    }else if (valueOptionPizza === "Pepperoni"){
      showMessage("Pepperoni" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Pepperoni Pizaa would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Pepperoni Pizaa";

      },1000)
    }else if (valueOptionPizza === "Hawaian"){
      showMessage("Hawaian" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Hawaian Pizaa would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Hawaian Pizaa";
      },1000)
    }
   displayNone();
  });

  
});
pastaBtn.addEventListener("click" , () =>{
  showMessage(`Pasta` , 'user');
  btnsEl.style.display = "none";
  setTimeout(()=>{
    showMessage(`oh so you are in the mood for Pasta? Great choice! please select something from menue `, 'bot')
    pastaMenue.style.display = "flex";
    pizzaMenue.style.display = "none";
    saladMenue.style.display = "none";
  },1000);

  pastaMenue.addEventListener("change" , ()=>{
    let valueOptionPasta = pastaMenue.value;

    if(valueOptionPasta === "Carbonara"){
      showMessage("Carbonara" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Carbonara Pasta would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Carbonara Pasta";

      },1000)
    }else if (valueOptionPasta === "Alfredo"){
      showMessage("Alfredo" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Alfredo Pasta would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Alfredo Pasta";

      },1000)
    }else if (valueOptionPasta === "Pesto"){
      showMessage("Pesto" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Pesto Pasta would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Pesto Pasta";

      },1000)
    }
   displayNone();
  });
  
});

saladBtn.addEventListener("click" , () =>{
  showMessage(`Salad` , 'user');
  btnsEl.style.display = "none";
  setTimeout(()=>{
    showMessage(`oh so you are in the mood for Salad? Great choice! please select something from menue `, 'bot')
    saladMenue.style.display = "flex";
    pizzaMenue.style.display = "none";
    pastaMenue.style.display = "none";
  },1000);


  saladMenue.addEventListener("change" , ()=>{
    let valueOptionSalad = saladMenue.value;

    if(valueOptionSalad === "Ceasar"){
      showMessage("Ceasar" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Ceasar Salad would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Ceasar Salad";

      },1000)
    }else if (valueOptionSalad === "Greek"){
      showMessage("Greek" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Greek Salad would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Greek Salad";

      },1000)
    }else if (valueOptionSalad === "Cobb"){
      showMessage("Cobb" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Cobb Salad would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Cobb Salad";

      },1000)
    }
    displayNone()
   
  });
});

function displayNone(){
  pizzaMenue.style.display = "none";
  pastaMenue.style.display = "none";
  saladMenue.style.display = "none";

};
let counter = 0;

  plusBtn.addEventListener("click" , ()=>{
    counter++;
    sendBtn.innerHTML = `${counter}-Send`;
    sendBtn.disabled = false;

  });
  minusBtn.addEventListener("click" , ()=>{
    if(counter > 0){
      counter--;
      sendBtn.innerHTML = `${counter}-Send`;

    }else if(counter < 1){
      sendBtn.disabled = true;
      alert("Oops! You have to choose at least one.");
    }else if(counter === 0){
      sendBtn.innerHTML = `Send`;
      sendBtn.disabled = true;
      alert("Oops! You have to choose at least one.");
    }
   
  });
    
    sendBtn.addEventListener("click" , ()=>{
      showMessage(`${counter}` , 'user');
      addBtns.style.display = "none";
      setTimeout(()=>{
        showMessage(`You have choosen ${counter} - ${selectedFood}. would you like to add some sides?`, 'bot');
        sideBtns.style.display = "flex";
      },1000);
      
     
    });

   

  

  


// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
