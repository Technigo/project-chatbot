// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const input = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

// Global variables, if you need any, declared here
//declare that dish etc. "exists"
// var dish;
// var fill;
// var side;
// var drink;
// var delivery;
// var adress;

let order = {
  dish: "",
  fill: "",
  side: "",
  adress: ""
}

// Functions declared here

const botReply = (msg) =>{
  showMessage (msg, "bot")
} 

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/rw.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/hp.png" alt="Bot" />
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
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
form.addEventListener('submit', (event)=>{
  event.preventDefault();
  const name = input.value
  input.value = '';

//Set time, 2 second
  const messageOne = () => {
  showMessage(`${name}`, "user")}
  setTimeout(messageOne, 1000)
  
//Set time, 3 second 
  const messageTwo = () => {
  showMessage(`Hello ${name}`, "bot")}
  setTimeout(messageTwo, 2000)
    
 //Set time, 4 second and food options 
  const messageThree = () => {
   showMessage(`
    What would you like to order <br> <video loop autoplay>
    <source src="assets/wizard.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`, "bot")
  }
   setTimeout(messageThree, 3000)
   setTimeout(() => showFoodOptions(), 4000)

})

// Showing menu options on click, invoking showMenu function
const showFoodOptions = () => {
  inputWrapper.innerHTML =`
    <button id="hp-btn">Harry Potter Menu</button>
    <button id="hrg-btn">Harmione Granger Menu</button>
    <button id="rw-btn">Ron Weasley Menu</button>
   `
   document
    .getElementById('hp-btn')
    .addEventListener('click', () => showMenu("Harry Potter"))

    document
    .getElementById('hrg-btn')
    .addEventListener('click', () => showMenu("Harmione Granger"))

    document
    .getElementById('rw-btn')
    .addEventListener('click', () => showMenu("Ron Weasley"))

 }

// showMenu function that catches the choice through value "dish"
const showMenu = (dish) => {
    botReply(`${dish} burger is a great choice, please select your favorite filling`)
    order.dish=dish // this window method will tranform it from local variable to a global variable 
    inputWrapper.innerHTML =`
    <select id="select"> 
      <option value=" " selected disabled> your filling </option>
      <option value="meat"> Meat </option>
      <option value="chicken"> Chicken </option>
      <option value="fish"> Fish </option>
      <option value="vegitarian"> Vegitarian </option>
    </select>
    `
    //event change enable to choice between the options
    const fill = document.getElementById('select')
    select.addEventListener('change', () => sideDish (fill.value)) 
  }
    
const sideDish = (fill) => {
  botReply(`you have ordered ${order.dish} with ${fill} please chose your favorite side dish`)
  order.fill=fill
  inputWrapper.innerHTML = `
    <button id="fries-btn">Fries</button>
    <button id="sallad-btn">Sallad</button>
    <button id="dragon-btn">Dragon egg</button>
    ` 
   document
      .getElementById("fries-btn")
      .addEventListener("click", () => botReply("You have added fires, Please choose your drink",
     setTimeout(() => showDrinkOptions("fries"), 2000)))
    
    
   document
   .getElementById("sallad-btn")
   .addEventListener("click",() => botReply("You have added Sallad, Please choose your drink",
    setTimeout(() => showDrinkOptions("sallad"), 2000)))
   document
   .getElementById("dragon-btn")
   .addEventListener("click",() => botReply("You have added Dragon egg, Please choose your drink",
    setTimeout(() => showDrinkOptions("dragon egg"), 2000)))
}

const showDrinkOptions = (side) => {
  inputWrapper.innerHTML=`
    <select id="choose_drink">
      <option value="" selected disabled>Your drink</option>
      <option value="cola">cola</option>
      <option value="magic-juice">Magic Juice</option>
      <option value="brandy">Dragon Brandy</option>
      <option value="beer">Beer</option>
      <option value="freak">Freaky shake</option>
    </select>
    `
    order.side=side

  const drink = document.getElementById("choose_drink")
  choose_drink.addEventListener("change",() => summaryOfOrder(drink.value))
   
}
const summaryOfOrder = (drink) => {
  
  botReply(`You have ordered ${order.dish} with ${order.fill} with ${order.side} and ${drink}`)
  deliveryOption()
}


const deliveryOption=() => {
  inputWrapper.innerHTML =`
    <button id="eathere-btn">I eat in your place</button>
    <button id="takeout-btn">I pick up order</button>
    <button id="homedel-btn">Home delivery</button>
   `
    document
    .getElementById('eathere-btn')
    .addEventListener('click', () => showFinal("eathere"))

    document
    .getElementById('takeout-btn')
    .addEventListener('click', () => showFinal("takeout"))

    document
    .getElementById('homedel-btn')
    .addEventListener('click', () => showFinal("homedel"))

}

const showFinal = (delivery) => {
  if (delivery === "eathere") {
    botReply("welcome to HP burgers, your order will be ready in 20 min")
  }else if (delivery === "takeout") {
    botReply("you can pick up your order in 20 min")
  }else if (delivery === "homedel") {
    botReply("please write your adress for home delivery and press ENTER")
    inputWrapper.innerHTML=`
      <input class="info" type="text" id="adress"/>
    `
      
    //const submission = document.getElementById("btn")

    const adress = document.getElementById("adress") 
    adress.addEventListener("keypress", function (e) {
      if (e.key === "Enter") { 
        showDelivery(adress.value)
      }
    })
    
  }  
  
}  
  

const showDelivery = (adress) => {
  showMessage(`${adress}`, "user")  
  order.adress=adress
  setTimeout(() => botReply(`We will deliver your order in 35 min to ${order.adress}`) , 2000)
}
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
