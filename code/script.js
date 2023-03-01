
// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendBtn = document.getElementById('send-btn');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
const popup = document.getElementById('popup');
let userAnsweredSecondQuestion = false;

//SOUND FOR MESSAGE// 
const msgSound = new Audio('assets/chatpop.mp3');
msgSound.volume = 0.6;

// If you need any global variables that you can use across different functions, declare them here:
//let typeOfCandy

// Declare your functions after this comment
// loading animation
const showLoading = () => {
  chat.innerHTML += `
  <div class="fa-1x loading">
    <i class="fa-solid fa-circle fa-bounce"></i>
    <i class="fa-solid fa-circle fa-bounce" style="--fa-animation-delay: 0.2s"></i>
    <i class="fa-solid fa-circle fa-bounce" style="--fa-animation-delay: 0.4s"></i>
  </div>
  `;
  chat.scrollTop = chat.scrollHeight;
};

// removes loading animation
const removeLoading = () => {
  const elements = document.getElementsByClassName('loading');
  Array.from(elements).forEach((el) => {
    el.parentNode.removeChild(el);
  });
};

//Removes the chocolate or licorice buttons


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    //*KOM IHÅG ATT LÄGGA IN BILDER PÅ GODIS i img source nedan*//
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user2.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot2.png" alt="Bot" />
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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}
sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let userName = nameInput.value;
  if (userName === "") {
    showMessage('Please enter your name', 'bot');
  } else {
    showMessage(`${userName}`, 'user');
    showMessage(`Hello ${userName}, which one is your favorite type of candy?`, 'bot');
    nameForm.remove()
    showCandyOptions()
    setTimeout(()=>{secondQuestion() },5000);
    showLoading(); /*NEW*/
  }
})

//Second Question
const secondQuestion = () => {
  if (userAnsweredSecondQuestion === false) {

    showMessage("Please choose - Chocolate or Licorice?", 'bot');
  }
}
//This shows the options for the chocolate or licorice buttons
const showCandyOptions = () => {
inputWrapper.innerHTML +=`<div><button id="chocolate-btn" value="chocolate">Chocolate</button>
<button id="licorice-btn" value="licorice">Licorice</button></div>`;
const chocolateBtn = document.getElementById('chocolate-btn');
const licoriceBtn = document.getElementById('licorice-btn');
chocolateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  userAnsweredSecondQuestion = true;
  let typeOfCandy = chocolateBtn.value;
  console.log(typeOfCandy);
  showMessage(`I chose ${typeOfCandy}`, 'user');
  chocolateBtn.remove()
  licoriceBtn.remove()
  showChocolateOptions()
  setTimeout(()=>{thirdQuestion(typeOfCandy)},1000);
  showLoading(); /*NEW*/
  
})
licoriceBtn.addEventListener('click', (e) => {
  e.preventDefault();
  userAnsweredSecondQuestion = true;
  let typeOfCandy = licoriceBtn.value;
  console.log(typeOfCandy);
  showMessage(`I chose ${typeOfCandy}`, 'user');
  chocolateBtn.remove()
  licoriceBtn.remove()
  showLicoriceOptions()
  setTimeout(()=>{thirdQuestion(typeOfCandy)},1000);
  showLoading();/*NEW*/
 })
}
const showChocolateOptions = () => {
  inputWrapper.innerHTML = `<div>
  <select id="input-chocolate-type" name="chocolate">
    <option value="Dark Chocolate">Dark chocolate</option>
    <option value="Milk Chocolate">Milk chocolate</option>
    <option value="White Chocolate">White chocolate</option>
  </select>
  <button id="chocolate-option-btn" type="submit">Choose</button>
</div>`;
  const chocolateOptionBtn = document.getElementById('chocolate-option-btn')
  chocolateOptionBtn.addEventListener('click', (e) => {
    let candySubtype = document.getElementById("input-chocolate-type").value
    showMessage(`I feel like having ${candySubtype} today!`, 'user');
    console.log(`${candySubtype}`)
    placeOrderMessage(candySubtype)
    showOrderOptions(candySubtype)
    showLoading(); /*NEW*/

  })
}

const showLicoriceOptions = () => {
  inputWrapper.innerHTML = `<div>
  <select id="input-licorice-type" name="licorice">
    <option value="Salty Licorice">Salty licorice</option>
    <option value="Sweet Licorice">Sweet licorice</option>
    <option value="Mixed Licorice">Mix of sweet and salt licorice</option>
  </select>
  <button id="licorice-option-btn" type="submit">Choose</button>
</div>`;
const licoriceOptionBtn = document.getElementById('licorice-option-btn')
  licoriceOptionBtn.addEventListener('click', (e) => {
    let candySubtype = document.getElementById("input-licorice-type").value
    showMessage(`I feel like having ${candySubtype} today!`, 'user');
    console.log(`${candySubtype}`)
    placeOrderMessage(candySubtype)
    showOrderOptions(candySubtype)
    showLoading(); /*NEW*/
    
  })
}

//Third question
const thirdQuestion = (typeOfCandy) => {
  showMessage(`Woooow you also love ${typeOfCandy}! Great choice!`, 'bot');
  showMessage(`Pick your favorite kind of ${typeOfCandy} in the list!`, 'bot');
}

const placeOrderMessage = (candySubtype) => {
  showMessage(`Let's help you place your order for ${candySubtype}.`, 'bot');
  
}

const showOrderOptions = (candySubtype) => {
  inputWrapper.innerHTML = `<div>
  <select id="input-amount-to-order" name="order-amount-picker">
    <option value="500 g">500 grams</option>
    <option value="1,5 kg">1,5 kilograms</option>
    <option value="5 kg">5 kilograms</option>
  </select>
  <button id="order-option-btn" type="submit">Place order</button>
</div>`;
  const orderOptionBtn = document.getElementById('order-option-btn')
  orderOptionBtn.addEventListener('click', (e) => {
    let orderAmount = document.getElementById("input-amount-to-order").value
    showMessage(`I want ${orderAmount}, please!`, 'user');
    console.log(`${orderAmount}`)
    question4PhoneNo(candySubtype, orderAmount)
  })
}

//Bot Order confirmation - Phone Number
const question4PhoneNo = (candySubtype, orderAmount) => {
  showMessage(`Please type your phone number so we can let you know when your order is ready!`, 'bot')
  inputWrapper.innerHTML = `
  <form id="phone-form">
  <input type="tel" class="phone-number" name="phone" maxlength="12" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required>
  <button type="submit" id="confirm-btn">Confirm</button>
  <button id="cancel-btn" onClick="window.location.reload();">Cancel</button>
  </form>
  `;
  document.getElementById("confirm-btn").addEventListener("click", (e) => {
    e.preventDefault()
    popup.classList.toggle('hide');
  })
  console.log(candySubtype,orderAmount)
}
// Set up your eventlisteners here
//my eventlisteners are in the code instead of one place - this might be wrong but I'm not sure...


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);