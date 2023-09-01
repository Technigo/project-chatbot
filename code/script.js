
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
const noSideBtn = document.getElementById("noside");
const sizeBtns = document.getElementById("size-btns");
const lastBtns = document.getElementById("last-btns");
const friesBtn = document.getElementById("fries");
const garlicBtn = document.getElementById("garlic");
const sweetBtn = document.getElementById("sweet");



let childBtn;
let adultBtn;
let price;
let confirmBtn;
let ignoreBtn;




btnsEl.style.display = "none";
nameFormEl.style.display = "flex";
pizzaMenue.style.display = "none";
pastaMenue.style.display = "none";
saladMenue.style.display = "none";
addBtns.style.display = "none";
sideBtns.style.display = "none";

const pizzaPrice = {
  Margarita: 120,
  Pepperoni: 150,
  Hawaian: 160
}
const pastaPrice = {
  Carbonara: 110,
  Alfredo: 180,
  Pesto: 100

}
const saladPrice = {
  Ceasar: 90,
  Greek: 85,
  Cobb: 70,
}
const sidePrice = 20;



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
 
  chat.scrollTop = chat.scrollHeight
}


const greetUser = () => {
  
  showMessage("Hello there, What's your name?", 'bot')

}


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



let selectedFood = "";
let selectedSide = "";

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
        price = pizzaPrice.Margarita

      },1000)
    }else if (valueOptionPizza === "Pepperoni"){
      showMessage("Pepperoni" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Pepperoni Pizaa would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Pepperoni Pizaa";
        price = pizzaPrice.Pepperoni

      },1000)
    }else if (valueOptionPizza === "Hawaian"){
      showMessage("Hawaian" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Hawaian Pizaa would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Hawaian Pizaa";
        price = pizzaPrice.Hawaian
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
        price = pastaPrice.Carbonara

      },1000)
    }else if (valueOptionPasta === "Alfredo"){
      showMessage("Alfredo" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Alfredo Pasta would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Alfredo Pasta";
        price = pastaPrice.Alfredo

      },1000)
    }else if (valueOptionPasta === "Pesto"){
      showMessage("Pesto" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Pesto Pasta would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Pesto Pasta";
        price = pastaPrice.Pesto

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
        price = saladPrice.Ceasar

      },1000)
    }else if (valueOptionSalad === "Greek"){
      showMessage("Greek" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Greek Salad would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Greek Salad";
        price = saladPrice.Greek

      },1000)
    }else if (valueOptionSalad === "Cobb"){
      showMessage("Cobb" , 'user');
      setTimeout(() =>{
        showMessage("please choose how many Cobb Salad would you like?" , 'bot');
        addBtns.style.display = "flex";
        selectedFood = "Cobb Salad";
        price = saladPrice.Cobb

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
let counter = 1;
let totalPrice = 0;


  plusBtn.addEventListener("click" , ()=>{
    counter++;
    sendBtn.innerHTML = `${counter}-Send`;
    sendBtn.disabled = false;

  });
  minusBtn.addEventListener("click" , ()=>{
    if(counter > 1){
      counter--;
      sendBtn.innerHTML = `${counter}-Send`;

    }else{
      sendBtn.disabled = true;
      alert("Oops! You have to choose at least one.");

    }
      

   
  });
    
    sendBtn.addEventListener("click" , ()=>{

      showMessage(`${counter}` , 'user');
      addBtns.style.display = "none";
      
      totalPrice = price * counter

      
      setTimeout(()=>{
        showMessage(`You have choosen ${counter} - ${selectedFood}.The total price will be ${totalPrice} SEK. would you like to add some sides? it wil be 20 SEK extra`, 'bot');
        sideBtns.style.display = "flex";
      },1000);
      
     
    });
   
    noSideBtn.addEventListener("click" , ()=>{
      sideBtns.style.display = "none";
      setTimeout(()=>{
        showMessage("what size would you like your food to be? Adult size or child size?" , 'bot');
        ageSize()
      },1000);
    });

    friesBtn.addEventListener("click" , ()=>{
      showMessage("French Fries" , 'user');
      sideBtns.style.display = "none";
      setTimeout(()=>{
        showMessage("what size would you like your food to be? Adult size or child size?" , 'bot');
        selectedSide = "French Fries";
        ageSizeWithSide();
      },1000);
    });
    garlicBtn.addEventListener("click" , ()=>{
      showMessage("Garlic Bread" , 'user');
      sideBtns.style.display = "none";
      setTimeout(()=>{
        showMessage("what size would you like your food to be? Adult size or child size?" , 'bot');
        selectedSide = "Garlic Bread";
        ageSizeWithSide();
      },1000);
    });
    sweetBtn.addEventListener("click" , ()=>{
      showMessage("Mashed Sweet Potato" , 'user');
      sideBtns.style.display = "none";
      setTimeout(()=>{
        showMessage("what size would you like your food to be? Adult size or child size?" , 'bot');
        selectedSide = "Mashed Sweet Potato";
        ageSizeWithSide();
      },1000);
    });

    const ageSize = ()=>{
      sizeBtns.innerHTML += `<button id="adult" class="send-btn" type="submit">Adult👱🏻‍♂️</button><button id="child"class="send-btn" type="submit">Child👶🏼</button>`;
      adultBtn = document.getElementById("adult");
      childBtn = document.getElementById("child");

      childBtn.addEventListener("click" , ()=>{
        showMessage("Child size" , 'user');
        sizeBtns.style.display = "none";
        let childTotalPrice = totalPrice - 20;
        setTimeout(()=>{
          showMessage(`Your order will be ${counter}-${selectedFood} Child size and the price would be ${childTotalPrice} SEK ` , 'bot')
          showConfirm()
        },1000);

      });

      adultBtn.addEventListener("click" , ()=>{
        showMessage("Adult size" , 'user');
        sizeBtns.style.display = "none";
        setTimeout(()=>{
          showMessage(`Your order will be ${counter}-${selectedFood} Adult size and the price would be ${totalPrice} SEK ` , 'bot')
          showConfirm()
        },1000);

      });
    } 
    const ageSizeWithSide = ()=>{
      sizeBtns.innerHTML += `<button id="adult" class="send-btn" type="submit">Adult👱🏻‍♂️</button><button id="child"class="send-btn" type="submit">Child👶🏼</button>`;
      adultBtn = document.getElementById("adult");
      childBtn = document.getElementById("child");

      childBtn.addEventListener("click" , ()=>{
        showMessage("Child size" , 'user');
        sizeBtns.style.display = "none";
        let childTotalPrice = totalPrice - 20
        setTimeout(()=>{
          showMessage(`Your order will be ${counter}-${selectedFood} Child size with one ${selectedSide}  and the price would be ${childTotalPrice + sidePrice} SEK ` , 'bot')
          showConfirm()
        },1000);

      });

      adultBtn.addEventListener("click" , ()=>{
        showMessage("Adult size" , 'user');
        sizeBtns.style.display = "none";
        setTimeout(()=>{
          showMessage(`Your order will be ${counter}-${selectedFood} Adult size with one ${selectedSide}  and the price would be ${totalPrice + sidePrice} SEK ` , 'bot')
          showConfirm()
        },1000);

      });

    }
  
    


const showConfirm = ()=>{
  lastBtns.innerHTML += `<button id="confirm" class="send-btn" type="submit">Confirm</button><button id="ignore" class="send-btn" type="submit">Ignore</button>`;
  confirmBtn = document.getElementById("confirm");
  ignoreBtn = document.getElementById("ignore");


  confirmBtn.addEventListener("click" , ()=>{
 
   showMessage("Confirm" , 'user');
   lastBtns.style.display = "none";
   setTimeout(()=>{
     showMessage("Thank you for choosing us, your meal will be prepared soon." , 'bot')
   },1000);
 });

 ignoreBtn.addEventListener("click" , ()=>{
  showMessage("Igonore" , 'user');
  lastBtns.style.display = "none";
  setTimeout(()=>{
    showMessage("Thank you for visiting us, maybe next time.bye" , 'bot')

  },1000);

});
}
   

  

  



setTimeout(greetUser, 1000)
