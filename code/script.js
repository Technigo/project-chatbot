const chat = document.getElementById('chat')
const sendBtn = document.querySelector(".send-btn");
const inputWrapper = document.getElementById("input-wrapper");

  


// Functions declared here

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
        <img src="https://images.unsplash.com/photo-1634909924531-4daae117dbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to th/e last 
  //message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hi, I am Dr.Strange, what can I help with today?`, 'bot')
  inputWrapper.innerHTML = `
  <button type="button" id="ambulance"> 🚑 I need an ambulance</button>
  <button type="button" id="minor-injury"> 🤕 Minor Injury </button>
`;
  
 //Add event lisnner to Ambulance button
 const ambulanceBtn = document.getElementById("ambulance");

 ambulanceBtn.addEventListener("click", function(){
   showMessage(`🚑 I need an ambulance`, 'user')
   showMessage(`oh, you need an ambulance! <br> Please write your address`, 'bot')

  inputWrapper.innerHTML = `
  <form id="address-form">
  <input id="address-input" type="text" />
  <button class="send-btn" type="submit">
    Send
  </button>
</form>
`;
document.getElementById("address-form").addEventListener("submit",(e)=>{
  e.preventDefault()
let addressInput = document.querySelector("#address-input").value;
if (addressInput == "") {
showMessage(`RIP 🥲`, 'bot')} 

else {
  showMessage(`We will pick you up at ${addressInput}, 
  when we feel like it`, 'bot')
}
})
 });

 //Injury Button
 const injuryBtn = document.getElementById("minor-injury");
 injuryBtn.addEventListener("click", function(){


});
}


// 1. First question

/*
 //Add event lisnner to button
 const ambulanceBtn = document.getElementById("ambulance");
 ambulanceBtn.addEventListener("click", function(){
   
 });
 const saladBtn = document.getElementById("salad");
 saladBtn.addEventListener("click", function(){


});
}*/

/*
const handleNameInput = (e) => {
    const name = nameInput.value;
    //This is to prevent page reloading when user submit input
    e.preventDefault(); 
    if (name === "suki") {
      setTimeout(() =>  showMessage(`Hi, Please try again`, "bot"), 1000)   
     } else {
    //Show message on User side
    setTimeout(() =>  showMessage(`${name}`, "user"), 500);

    //Show message on Bot side
    setTimeout(() =>  showMessage(`Hi ${name}, what would 
    you like to order`, "bot"), 1000);
     
    //Question 2
    }


    //clear input
    nameInput.value = "";
 
    }
    
form.addEventListener("submit", handleNameInput);

// Trigger handleNameInput function when user click Send

*/







// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);


// 1. Asking user name
     // User input Name

// 2. Hi ${userName}, what do you want to order?
// 2a. Pop up button (pizza || salad)
     // User choose one btn
