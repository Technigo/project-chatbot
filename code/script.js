//Global variables

const chat = document.getElementById('chat')
const sendBtn = document.querySelector(".send-btn");
const inputWrapper = document.querySelector(".input-wrapper");
let defaultForm = document.getElementById("name-form");

//Global variables - to store address and time bookig from user
let address = "";
let time = "";


//Music
const pop = new Audio("pop.flac");

//Video control
const videoBtn = document.querySelector(".video-btn");
const video = document.querySelector(".video")

videoBtn.addEventListener("click", function(){
    videoBtn.classList.toggle("slide")
    if (videoBtn.classList.contains("slide")){
      video.pause()} 
      else {
        video.play() } 
    })


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
  

  
const botReply = (msg) => {
    showMessage(msg,"bot");
}

const userReply = (msg) => {
    showMessage(msg,"user");
}


//////////////////

let questionNumber = 1;

//If user choose ambulance case - the answer will return to the message here
const ambulanceAnswer = (message) => {
   if (questionNumber === 1) {
       userReply(message);
       setTimeout(() => ambulanceCase(message), 500);
   } else if (questionNumber === 2) {
       userReply(message);
       setTimeout(() => confirmAmbulance(message),500 ) 
       restart();
   } 
}

//If user choose minor injury - the answer will return to the message here
const injuryAnswer = (message) => {
    if (questionNumber === 1) {
        userReply(message);
        setTimeout(() => bookingDoctor(message), 1000); // quesion 2
    } else if (questionNumber === 2) {
        userReply(message)
        setTimeout(() => bookingTime(message), 1000);
    } else if (questionNumber === 3) {
        userReply(message);
        setTimeout(() => doctorOption(message), 1000);
    } else if (questionNumber === 4) {
        setTimeout(() => userReply(message), 300);
        setTimeout(() => confirmDoctor(message), 1000);
        setTimeout(restart, 1500);
    }
}



///////////////////////////// QUESTION 1 FOR BOTH CASES - START HERE
//Question 1 - Default Greeting - Show 2 different cases
const greeting = (message) => {
    questionNumber = 1;
    botReply(`Hi, I am Dr.Strange, what can I help with today?`);
    showInjuryCase();
  } 

//This function is to be added in question 1 - Show 2 different cases
function showInjuryCase(message) {

    //Show two button
    inputWrapper.innerHTML = `
    <button type="button" id="ambulance"> 🚑 In need of an ambulance</button>
    <button type="button" id="minor-injury"> 🤕 Minor Injury </button>
  `; 
  
    //Add event listener for "in need of ambulance" button
     const ambulanceBtn = document.getElementById("ambulance");
     ambulanceBtn.addEventListener("click", () => {
      ambulanceAnswer("In need of an ambulance");
     pop.play();
   });
  
     //Add event lisner for "minor injury" case
     const injuryBtn = document.getElementById("minor-injury");
     injuryBtn.addEventListener("click", ()=> {
     
     //injuryAnswer
     injuryAnswer("Minor Injury");
     pop.play();
  });
  }


///////////////////////// IN NEED OF AMBULANCE

// Question 2 - Ambulance - Request address from user
 function ambulanceCase (message) {
    questionNumber++;
   
       setTimeout(() => botReply(`oh, you are ${message} 🥺`),300);
       setTimeout(() => botReply(`Where can we pick you up? 🤔🏡`), 800);

      //Change the buttons to address input
      inputWrapper.innerHTML = `
      <form id="address-form">
      <input id="address-input" type="text" />
      <button class="send-btn" type="submit"> Send </button>
      </form>`;

      //Create variables for the input form and input field
      const addressInput = document.querySelector("#address-input");
      const addressForm = document.getElementById("address-form");

      //Set condition for address input
      addressForm.addEventListener("submit", (e) => {
      pop.play();
      //To prevent page reloading when submitting form
      e.preventDefault();

      //If user leaves the address input empty
      if (addressInput.value == ""){
        botReply(`RIP 🥲`);
        //Sending user message to the next ambulance-case question
        ambulanceAnswer("😒");
      }     

      //If user enters his address
      else {
        address = addressInput.value;

        //Sending user message to the next ambulance-case question
        ambulanceAnswer(address);
        addressInput.value ="";
        }

        //texting sound
        pop.play();
       })
  } 

// Question 3 - Ambulance - Bot confirm address - end chat
function confirmAmbulance (message) {
      if (message === "😒") {
          restart();
      } else {
          botReply(`Thank you we will pick you up at ${message}`);
      }
  }


///////////////////////// MINOR INJURY CASE

// Question 2 - Minor Injury - Ask if user wants to book a doctor
  function bookingDoctor (message) {
    questionNumber++;
    setTimeout(() =>  botReply(`oh, you have ${message}`), 300);
    setTimeout(() =>  botReply(`Do you want to see a doctor today?`),800);

    inputWrapper.innerHTML = `
    <button type="button" id="yes"> Yes </button>
    <button type="button" id="no"> No </button>
    `
     
    document.getElementById("no").addEventListener("click", () => {
      injuryAnswer("no");
      pop.play();

    })
     document.getElementById("yes").addEventListener("click",() => {
      injuryAnswer("yes");
     pop.play();

  })

 }

// Question 3 - Minor Injury - User said yes - Bot asks for the time
 function bookingTime (message) {
     questionNumber++;

     //If user said that they want to book meeting with doctor
     if(message === "yes") {
        botReply("Please choose a day");

        //Update the HTML to date input form
        inputWrapper.innerHTML = `
        <form id="schedule-form">
        <label for="date"></label>
        <input type="date" id="date" name="date"
          min="01-01-2022" max="01-06-2022">
        <button type="submit"> Send </button>
        </form>
        `

        //Add event when user submit the time
        const date = document.getElementById("date");
        document.getElementById("schedule-form").addEventListener("submit", (e) => {
         
          //Store time in global variable
          time = date.value;
          e.preventDefault();
          injuryAnswer(time);
          date.value ="";

          //Play sound
          pop.play();
        })

     } 
     //If user said that they do not want to book a meeting
     else {
         botReply(`I am sad that you said ${message}`);
         botReply(`Goodluck 🤒`)
         restart();
     }
 }

// Question 4 - Minor Injury - User booked time - Bot asks user to choose a doctor
 function doctorOption (message) {
  questionNumber++;
  botReply(`We have 2 doctors available in ${message}`)
  setTimeout(() => botReply(`Which doctor do you prefer?`), 1500);
      const doctorImg =  document.querySelector(".user-bubble");

        inputWrapper.innerHTML = `
        <button type="button" id="doctor-1">
          <img class="doctor-img" src="https://images.fashionmodeldirectory.com/images/editorials/54563/54563-2356-8303-4706-single.jpg" alt="Christ"> 
        </button>
        <button type="button" id="doctor-2">
        <img class="doctor-img" src="https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/239839722_1735615073291652_4563461806268443519_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=sfIYRryD8CMAX94jJcj&_nc_ht=scontent-hel3-1.xx&oh=00_AT-88It-xCDxUDWjVKwDktXVtnLHm3_okBmq8AfQyTslcA&oe=62029ACF" alt="Henry">
        </button>
       `
       document.getElementById("doctor-1").addEventListener("click",() => {
        doctorImg.innerHTML = `
        <img src= "https://images.fashionmodeldirectory.com/images/editorials/54563/54563-2356-8303-4706-single.jpg"/>`
        userReply(doctorImg.innerHTML);
        injuryAnswer("Dr.Chris");
        pop.play();
    
       })
       document.getElementById("doctor-2").addEventListener("click", () => {
      
       //Update html content inside user bubble 
       doctorImg.innerHTML = `
       <img src= "https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/239839722_1735615073291652_4563461806268443519_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=sfIYRryD8CMAX94jJcj&_nc_ht=scontent-hel3-1.xx&oh=00_AT-88It-xCDxUDWjVKwDktXVtnLHm3_okBmq8AfQyTslcA&oe=62029ACF"/>
      `
       userReply(doctorImg.innerHTML);
       injuryAnswer("Dr.Henry");
       pop.play();
       })
}

// Question 5 - Minor Injury - User chose the doctor - Bot sends confirm message - end chat
function confirmDoctor (message) {
    botReply(`Aha, ${message} is one of the best 😉`)
    setTimeout(() => botReply(`He will be seeing you in ${time} 😘`), 200) ;
}


// To restart 
function restart() {
  inputWrapper.innerHTML = `
  <button type="button" id="restart-btn"> Restart 👀 </button>
  `

  document.getElementById("restart-btn").addEventListener("click", () => {
    pop.play();
    document.querySelector(".chat").innerHTML = "";  
    greeting();    
  })
}


setTimeout(greeting, 1000);
