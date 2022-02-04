const chat = document.getElementById('chat')
const sendBtn = document.querySelector(".send-btn");
const inputWrapper = document.getElementById("input-wrapper");
const music = new Audio ("music.mp3");
  
// Functions declared here



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="https://images.pexels.com/photos/4113971/pexels-photo-4113971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="https://images.unsplash.com/photo-1634909924531-4daae117dbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80" alt="Bot" />
        <div class="bubble bot-bubble">
          <p class="bot-text">${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to th/e last 
  //message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

let questionNumber = 1;


const botReply = (msg) => {
    showMessage(msg,"bot");
}

const userReply = (msg) => {
    showMessage(msg,"user");
}

// Starts here



const nextQuestion = (message) => {
    if (questionNumber === 1) {
        userReply(message);
        setTimeout(() => (ambulanceCase(message)), 500); 
    } else if (questionNumber === 2) {
        userReply(message);
        setTimeout(() => (confirmMessage(message)), 800); 
    } else if (questionNumber=== 3) {
       setTimeout(() => botReply(message),500);
        setTimeout(() => (restart()), 500); 
    } 
}


// greeting
 const greeting = (message) => {
  questionNumber = 1;
  botReply(`Hi, I am Dr.Strange, what can I help with today?`);
  showInjuryCase();
}
  
 //Question 1 -- show Injury Case
 function showInjuryCase(message) {

  //Show two button
  inputWrapper.innerHTML = `
  <button type="button" id="ambulance"> 🚑 In need of an ambulance</button>
  <button type="button" id="minor-injury"> 🤕 Minor Injury </button>
`; 

   //Add event listener for emergency button
   const ambulanceBtn = document.getElementById("ambulance");
   ambulanceBtn.addEventListener("click", () => {
   nextQuestion("In need of an ambulance");
 });

   //Add event lisner for injury case
   const injuryBtn = document.getElementById("minor-injury");
   injuryBtn.addEventListener("click", ()=> {
   nextQuestion("Minor Injury");

});
}

 // Question 2 - Ambulance - Input address
 function ambulanceCase (message) {
    questionNumber++;
   
    // Type 1
    if (message === "In need of an ambulance") {
       setTimeout(() =>  botReply(`oh, you are ${message} 🥺`),300);
       setTimeout(() => botReply(`Where can we pick you up? 🤔🏡`), 800);

        inputWrapper.innerHTML = `
        <form id="address-form">
        <input id="address-input" type="text" />
        <button class="send-btn" type="submit"> Send </button>
        </form>`;

        //Add eventlistner to the address form
        const addressInput = document.querySelector("#address-input");
        const addressForm = document.getElementById("address-form");

        //Set condition for address input
        addressForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (addressInput.value == ""){
          showMessage(`RIP 🥲`, 'bot')}     
        else {
          nextQuestion(`${addressInput.value}`)
          botReply(`We will pick you up at ${addressInput.value}, when we feel we like it 🤷`); 
          addressInput.value ="";
        }
       })
  } 
   else if (message === "Minor Injury") {
    setTimeout(() =>  botReply(`oh, you have ${message}`), 300);
    setTimeout(() =>  botReply(`Do you want to see a doctor today?`),800);

    inputWrapper.innerHTML = `
    <button type="button" id="yes"> Yes </button>
    <button type="button" id="no"> No </button>
    `
     
    document.getElementById("no").addEventListener("click", () => {
      nextQuestion("no");
    })
     document.getElementById("yes").addEventListener("click",() => {
     nextQuestion("yes");
  })

 }

 }

 function confirmMessage (message) { 
  questionNumber++;     
  if (message === "yes") {
    botReply(`Which doctor do you prefer?`);
    inputWrapper.innerHTML = `
    <button type="button" id="doctor-1">
      <img class="doctor-img" src="https://www.esquireme.com/cloud/2021/09/09/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg" alt="Christ"> 
    </button>
    <button type="button" id="doctor-2">
    <img class="doctor-img" src="https://theubj.com/wp-content/uploads/2021/12/Henry-Cavill.jpg" alt="Henry">
    </button>
   `
   document.getElementById("doctor-1").addEventListener("click",() => {
    botReply(`Dr.Chris will see later today 😘`);
    nextQuestion("Thank you ❤️");

   })
   document.getElementById("doctor-2").addEventListener("click", () => {
   botReply(`Dr.Henry will see later today 😘`);
   nextQuestion("Thank you ❤️");

   })
   } 
   else {
   nextQuestion("Thank you ❤️");
   }
  }

function restart() {
  inputWrapper.innerHTML = `
  <button type="button" id="restart-btn"> Restart 👀 </button>
  `
  document.getElementById("restart-btn").addEventListener("click", () => {
      location.reload()
  })
}

setTimeout(greeting, 1000);















