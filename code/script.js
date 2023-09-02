// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const sendButton = document.getElementById('send-btn')
const activityBtn = document.getElementById('input-container')
const nameForm = document.getElementById('name-form')

//Variables created dynamically using JS

// If you need any global variables that you can use across different functions, declare them here:
// When user enters name
let userName = "";
let activitySelection = "";
// Declare your functions after this comment


//Iteration 1
//part 1
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
        <section class="user-msg" id="user-msg">
          <div class="bubble user-bubble">
            <p>${message}</p>
          </div>
          <img src="./assets/user.png" alt="user bot">
        </section>
    `

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
        <section class="bot-msg" id="bot-msg">
          <img src="./assets/bot.png" alt="chat bot">
          <div class="bubble bot-bubble">
            <p>${message}</p>
          </div>
        </section>
        `
  }
  chat.scrollTop = chat.scrollHeight
}

//part 2
// When website is loaded, chatbot asks first question.
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Greetings dearest customer.  To proceed, please enter your name.", 'bot')
}
// Just to check it out, change 'bot' to 'user' here

//Iteration 2
//username pops up on chat on user's side
const showName = (event) => {
  event.preventDefault();
  // when you submit a form, the default action is to send the form data to the server and reload the page.  By calling event.preventDefault() within an event handler, you can stop the browser from performing its default action and allow you to handle the event in a custom manner.
  userName = nameInput.value;
  showMessage(`${userName}`, "user");
  nameInput.value = ""; //clear nameInput's value 
  setTimeout(proposeActivity, 1000);
}


//Iteration 3
//part 1
//bot replies back using message proposing activities
const proposeActivity = () => {
  showMessage(`Welcome to our hotel Le Shandrani, ${userName}!`, "bot")
  showMessage(`This booking service is offered to you directly from your room, at your leisure.`, "bot")
  showMessage(`Which activity would you like to book today?`, "bot");
  setTimeout(hotelActivity, 2000);
}

//part 2
//buttons showing for choosing activity
const hotelActivity = () => {
  // clear input form
  nameForm.removeChild(nameInput)
  nameForm.removeChild(sendButton)
  // buttons appear for activity choice
  activityBtn.innerHTML += `
  <button id="spa" value="spa">Spa</button>
  <button id="golf" value="golf">Golf</button>
  <button id="boathouse" value="boathouse">Boathouse</button>
  <button id="diner" value="diner">Diner</button>
  `
  //Using addEventListener method on click event to call next function. "CURRYING" in programming lang.
  document.getElementById('spa').addEventListener('click', activityConfirmation);
  document.getElementById('golf').addEventListener('click', activityConfirmation);
  document.getElementById('boathouse').addEventListener('click', activityConfirmation);
  document.getElementById('diner').addEventListener('click', activityConfirmation);

  // old code - to understand the refactoring
  // const spaBtn = document.getElementById('spa')
  // const golfBtn = document.getElementById('golf')
  // const boathouseBtn = document.getElementById('boathouse')
  // const dinerBtn = document.getElementById('diner')

  // spaBtn.addEventListener('click', spaActivity);
  // golfBtn.addEventListener('click', golfActivity);
  // boathouseBtn.addEventListener('click', boathouseActivity);
  // dinerBtn.addEventListener('click', dinerReservation);
}

//Iteration 4
// Function to confirm chosen activity
const activityConfirmation = (event) => {
  event.preventDefault();
  activitySelection = event.target.value;
  showMessage(`Option chosen : ${activitySelection}`, "user");
  showMessage(`Do you confirm your ${activitySelection} choice, ${userName}?`, "bot")
  //remove irrelevant buttons
  activityBtn.innerHTML = "";
  activityBtn.innerHTML += `
  <button id= "yes" value= "yes">Yes</button>
  <button id = "no" value = "no" >No</button > `
  document.getElementById('yes').addEventListener('click', confirmationAnswer);
  document.getElementById('no').addEventListener('click', confirmationAnswer);
}

//Iteration 5
//part 1
//If user confirms (answer is yes)
const confirmationAnswer = (event) => {
  event.preventDefault();
  const answer = event.target.value;

  //Ternary not functioning when answer is no, calling activitySelection oavsett -using if else instead, old code:
  // const handleConfirmation = (answer === "yes") ? showMessage(`Great!`, "bot") : setTimeout(() => {
  //   showMessage(`This page will reload automatically`, "bot");
  //   setTimeout(() => { location.reload(); }, 2000);
  // }, 1000);

  if (answer === "yes") {
    showMessage(`Great!  Let's proceed.`, "bot");
    //Call function based on activitySelection when answer is yes
    activityBtn.innerHTML = "";

    if (activitySelection === "spa") {
      showMessage(`You have chosen to experience our spa.  Please select your spa treatment: `, "bot")
      // buttons appear for spa treatment choice
      activityBtn.innerHTML += `
            <button id= "foot" value="foot">Foot massage</button >
            <button id= "reiki" value="reiki">Reiki</button>
            <button id= "oil" value="oil">Oil massage</button>
          `
      document.getElementById('foot').addEventListener('click', spaBooking);
      document.getElementById('reiki').addEventListener('click', spaBooking);
      document.getElementById('oil').addEventListener('click', spaBooking);

    } else if (activitySelection === "golf") {
      showMessage(`A golf break?  Excellent choice! Please select your golf course:`, "bot")
      activityBtn.innerHTML += `
          <button id= "practice" value="Golf practice">Golf Practice</button>
          <button id= "nine" value="Nine holes">9-holes</button>
          <button id= "eighteen" value="Eighteen holes">18-holes</button>
          `
      document.getElementById('practice').addEventListener('click', golfCourseTime);
      document.getElementById('nine').addEventListener('click', golfCourseTime);
      document.getElementById('eighteen').addEventListener('click', golfCourseTime);

    } else if (activitySelection === "boathouse") {
      showMessage(`A day by the seaside, wonderful choice!  Please select your water activity: `, "bot")
      activityBtn.innerHTML += `
        <button id= "kite" value="Kite Surfing">Kite Surfing</button>
        <button id= "glass" value="Glass bottom">Glassbottom tour</button>
        <button id= "catamaran" value="Catamaran">Catamaran Tour</button>
        `
      document.getElementById('kite').addEventListener('click', boatHouseGroup);
      document.getElementById('glass').addEventListener('click', boatHouseGroup);
      document.getElementById('catamaran').addEventListener('click', boatHouseGroup);

    } else if (activitySelection === "diner") {
      showMessage(`Our hotel offers you 3 restaurant choices.  Please select one: `, "bot")
      activityBtn.innerHTML += `
        <button id="italian" value="italian">Italian restaurant</button>
        <button id="buffet" value="buffet">International Buffet</button>
        <button id="indian" value="indian">Indian Restaurant</button>
        `
      document.getElementById('italian').addEventListener('click', restaurantBooking);
      document.getElementById('buffet').addEventListener('click', restaurantBooking);
      document.getElementById('indian').addEventListener('click', restaurantBooking);

    } else {
      showMessage(`For further help, please call the reception 08 124 9669`, "bot")
    }
    //part 2- if user does not confirm (answer is no)
  } else {
    showMessage(`This page will reload automatically in 2s`, "bot");
    //Not confirming reloads the page
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}

//Iteration 6

// part 1- Spa alternatives
const spaBooking = (event, spaActivity) => {
  event.preventDefault();
  activityBtn.innerHTML = "";
  spaActivity = event.target.value;

  //1st alternative -foot massage
  if (spaActivity === "foot") {
    showMessage(`${spaActivity} Massage`, "user");
    showMessage(`You have chosen a ${spaActivity} massage treatment.  Please book a time slot:`, "bot");
    //select form appears for time booking
    nameForm.innerHTML += `
      <label for="foot-time-slot"></label>
        <select id= "foot-time-slot">
          <option value="" selected disabled>Select:</option>
          <option value="morning">11 - 11:30 a.m.</option>
          <option value="afternoon">2 - 2:30 p.m.</option>
        </select>`
    document.getElementById('foot-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, spaActivity)
    })) // you want to invoke summarisingMessage 
    // anonymous funtion mandatory to solve how to pass the parameters event and activity in the addEventListener

    //2nd alternative- reiki massage
  } else if (spaActivity === "reiki") {
    showMessage(`${spaActivity} Massage`, "user");
    showMessage(`You have chosen the ${spaActivity} treatment.  Please book a time slot:`, "bot");
    nameForm.innerHTML += `
      <label for="reiki-time-slot"></label>
        <select id= "reiki-time-slot">
          <option value="" selected disabled>Select:</option>
          <option value="morning">8 - 9 a.m.</option>
          <option value="afternoon">4:30 - 5:30 p.m.</option>
        </select>`
    document.getElementById('reiki-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, spaActivity)
    }))

    //3rd alternative - oil massage
  } else if (spaActivity === "oil") {
    showMessage(`${spaActivity} Massage`, "user");
    showMessage(`You have chosen a whole body ${spaActivity} massage treatment.  Please book a time slot:`, "bot");
    nameForm.innerHTML += `
      <label for="oil-time-slot"></label>
        <select id= "oil-time-slot">
          <option value="" selected disabled>Selected:</option>
          <option value="morning">9:30 - 10:30 a.m.</option>
          <option value="evening">3 - 4 p.m.</option>
        </select>`
    document.getElementById('oil-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, spaActivity)
    }))
  }
}

//Iteration 6
//part 2 - Golf alternatives
const golfCourseTime = (event, golfCourse) => {
  event.preventDefault();
  activityBtn.innerHTML = ""; // erasing previous buttons
  golfCourse = event.target.value;

  //1st golf alternative
  if (golfCourse === "Golf practice") {
    showMessage(`${golfCourse}`, "user")
    showMessage(`You went for ${golfCourse}!  Please reserve a time slot: `, "bot")
    nameForm.innerHTML += `
      <label for="practice-time-slot"></label>
        <select id= "practice-time-slot">
          <option value="" selected disabled>Select:</option>
          <option value="morning">7 - 9 a.m.</option>
          <option value="afternoon">2 - 4 p.m.</option>
        </select>`
    document.getElementById('practice-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, golfCourse)
    }))

    //2nd golf alternative
  } else if (golfCourse === "Nine holes") {
    showMessage(`${golfCourse}`, "user")
    showMessage(`You chose to play the ${golfCourse} course.  Please reserve a time slot:`, "bot")
    nameForm.innerHTML += `
      <label for="nine-time-slot"></label>
        <select id= "nine-time-slot">
          <option value="" selected disabled>Select:</option>
          <option value="morning">7 - 10 a.m.</option>
          <option value="afternoon">2 - 5 p.m.</option>
        </select>`
    document.getElementById('nine-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, golfCourse)
    }))

    //3rd golf alternative
  } else if (golfCourse === "Eighteen holes") {
    showMessage(`${golfCourse}`, "user")
    showMessage(`Welcome dearest ${userName} to our ${golfCourse} golf course!  Please reserve your lodge:`, "bot")
    nameForm.innerHTML += `
      <label for="eighteen-time-slot"></label>
        <select id= "eighteen-time-slot">
          <option value="" selected disabled>Select:</option>
          <option value="morning">07:00 - 12:00</option>
          <option value="afternoon">13:00 - 18:00</option>
        </select>`
    document.getElementById('eighteen-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, golfCourse)
    }))
  }
}


//Iteration 6

//Part 3 - Boat House alternatives
const boatHouseGroup = (event, waterActivity) => {
  event.preventDefault();
  activityBtn.innerHTML = ""; // erasing previous buttons
  waterActivity = event.target.value;

  //1st alternative
  if (waterActivity === "Kite Surfing") {
    showMessage(`${waterActivity}`, "user")
    showMessage(`You have chosen ${waterActivity}, great choice!  Please book a time slot:`, "bot")
    nameForm.innerHTML += `
      <label for="kite-time-slot"></label>
        <select id= "kite-time-slot">
          <option value="" selected disabled>Select:</option>
          <option value="morning">10 - 11 a.m.</option>
          <option value="afternoon">2 - 3 p.m.</option>
        </select>`
    document.getElementById('kite-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, waterActivity)
    }))

    //2nd alternative
  } else if (waterActivity === "Glass bottom") {
    showMessage(`${waterActivity}`, "user")
    showMessage(`The ${waterActivity} tour, nice choice!  Please book your time slot:`, "bot")
    nameForm.innerHTML += `
      <label for="glassbottom-time-slot"></label>
        <select id= "glassbottom-time-slot">
          <option value="" selected disabled>Select:</option>
          <option value="morning">10 - 11 a.m.</option>
          <option value="afternoon">1 - 2 p.m.</option>
        </select>`
    document.getElementById('glassbottom-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, waterActivity)
    }))
    //3rd alternative
  } else if (waterActivity === "Catamaran") {
    showMessage(`${waterActivity}`, "user")
    showMessage(`During the ${waterActivity} tour (approx.4h), you will be offered a barbecue and refreshments.  Select your departure time:`, "bot")
    nameForm.innerHTML += `
      <label for="catamaran-time-slot"></label>
        <select id= "catamaran-time-slot">
          <option value="" selected disabled>Select:</option>
          <option value="morning">8 a.m.</option>
          <option value="afternoon">1 p.m.</option>
        </select>`
    document.getElementById('catamaran-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, waterActivity)
    }))
  }
}


//Iteration 6

//Part 4 - Diner reservations at different restaurants
const restaurantBooking = (event, dinerType) => {
  event.preventDefault();
  activityBtn.innerHTML = ""; // erasing previous buttons
  dinerType = event.target.value;
  const addingBtn = () => {
    nameForm.innerHTML += `
    <label for="restaurant-time-slot"></label>
      <select id= "restaurant-time-slot">
        <option value="" selected disabled>Select:</option>
        <option value="first service">5 - 7.30 p.m.</option>
        <option value="second service">8 - 9.30 p.m.</option>
      </select>
      `
  }
  //1st alternative
  if (dinerType === "italian") {
    showMessage(`${dinerType} restaurant`, "user")
    showMessage(`The ${dinerType} restaurant is situated on the beach front.  Book your sitting time:`, "bot")
    // Closure to avoid repetition of same button creation

    addingBtn()

    //2nd alternative
  } else if (dinerType === "buffet") {
    showMessage(`International ${dinerType}`, "user")
    showMessage(`The International ${dinerType} restaurant offers different themes everyday.  Book your sitting time:`, "bot")
    addingBtn()

    //3rd alternative
  } else if (dinerType === "indian") {
    showMessage(`${dinerType} restaurant`, "user")
    showMessage(`The ${dinerType} restaurant offers you a beautiful mountain range sight.  Book your sitting time: `, "bot")
    addingBtn()
  }
  document.getElementById('restaurant-time-slot').addEventListener('change', ((event) => {
    summarisingMessage(event, dinerType)
  }))
}

//Message summarising the booked activity
const summarisingMessage = (event, bookedActivity) => {
  nameForm.innerHTML = "";
  const timeSlot = event.target.value
  event.preventDefault();
  showMessage(`${timeSlot}`, "user")
  showMessage(`Thank you ${userName}, we have booked the activity "${bookedActivity}" during the ${timeSlot}`, "bot");
  showMessage(`A confirmation message will be sent to you on your device through our downloaded hotel app.`, "bot");
  showMessage(`Enjoy your stay at Le Shandrani!`, "bot")
}


// Set up your eventlisteners here

// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWait(ms))
// This means the greeting function will be called 1s=1000ms after the website is loaded.
setTimeout(greetUser, 1000);


// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
chat.scrollTop = chat.scrollHeight

// setTimeout(showName, 2000) 
sendButton.addEventListener('click', showName);
// sendButton.addEventListener('click', showName(event)): deprecated.  When you add an event listener in JavaScript, you specify a function that will be executed when a specific event occurs on the selected element. The event itself is automatically passed as an argument to the event handler function when the event is triggered. You don't need to explicitly specify the event when calling the function in the event listener because the browser handles passing the event object to the function for you.