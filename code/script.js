// This are the variables that connect js with the html
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('inputWrapper')
const nameForm = document.getElementById('nameForm')
const nameInput = document.getElementById('nameInput')
const button = document.getElementById('button')

// List of fortunes for each card
var fortunes = [
  "The card for this reading is The Fool : You are about to embark on a new journey filled with excitement and opportunity.",
  "The card for this reading is The Magician: You have the power to make your dreams a reality. Focus your energy and make it happen.",
  "The card for this reading is The High Priestess: Listen to your intuition, it holds the key to unlocking your inner wisdom.",
  "The card for this reading is The Empress: Abundance and prosperity are on the horizon. Nurture your relationships and investments.",
  "The card for this reading is The Emperor: Take control of your life and make confident decisions. Leadership is within reach.",
  "The card for this reading is The Hierophant: Seek guidance from a trusted mentor or advisor. Tradition and structure will serve you well.",
  "The card for this reading is The Lovers: Love is in the air. Trust your instincts and let your heart guide you.",
  "The card for this reading is The Chariot: Victory is within reach. Stay focused and remain determined.",
  "The card for this reading is Strength: You possess inner strength and determination. Use it to overcome any obstacles that come your way.",
  "The card for this reading is The Hermit: Take time for introspection and self-discovery. The answers you seek are within.",
  "The card for this reading is Wheel of Fortune: Change is inevitable, embrace it and ride the wave of fate.",
  "The card for this reading is Justice: The truth will be revealed and balance will be restored. Trust in the universe to deliver justice.",
  "The card for this reading is The Hanged Man: Take a step back and let go of your current perspective. A new viewpoint is on the horizon.",
  "The card for this reading is Death: This is a time of transformation and renewal. Let go of the past and embrace the future.",
  "The card for this reading is Temperance: Moderation and balance are key. Find harmony in all aspects of your life.",
  "The card for this reading is The Devil: Beware of temptation and negativity. Stay true to your values and resist darkness.",
  "The card for this reading is The Tower: Expect the unexpected and be prepared for sudden change. Keep a level head and remain calm.",
  "The card for this reading is The Star: Hope and inspiration are on the horizon. Keep your eyes fixed on the stars and reach for your dreams.",
  "The card for this reading is The Moon: This is a time of emotional intensity. Trust your instincts and let your intuition guide you.",
  "The card for this reading is The Sun: This is a time of joy, success, and fulfillment. Soak up the sunshine and bask in your accomplishments.",
  "The card for this reading is Judgment: The universe is calling for reflection and self-evaluation. Be honest with yourself and make amends where necessary.",
  "The card for this reading is The World: Completion and fulfillment are within reach. Celebrate your journey and enjoy the fruits of your labor."
];



// here are the sound efect link

const chatSound = () => {
  let audio = new Audio("./assets/magic.mp3")
  audio.play();
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
  chatSound();
}

// Start chat / gretting question 1
const greeting = () => {
  showMessage("Hello my name is Marina, What's your name?", 'bot');
}

const greetingAnswer = (event) => {
  event.preventDefault();   // for not refresh website
  const userName = nameInput.value
  showMessage(`My name is ${userName}`, 'user');
  nameInput.value = ''          // setting the users answer 
  showMessage(`Hello! ${userName} Choose a topic you would like to know about?`, 'bot');
  setTimeout(() => questionTwo(userName), 1000) // time for the funtion to execute 
}

nameForm.addEventListener('submit', greetingAnswer)

//  Question 2 from the bot

const questionTwo = (userName) => {

  inputWrapper.innerHTML = `     
  <button id="Shop" type="submit">Shop</button>
  <button id="Astrology" type="submit">Astrology</button> 
  <button id="Fortune" type="submit">Fortune</button>
  `
  //choices for the user                              
  document.getElementById('Shop').addEventListener('click', () => {
    showMessage("Please show me the shop", 'user')
    setTimeout(() => answerTwo('Shop', 'user')), 1000
  })
  document.getElementById('Astrology').addEventListener('click', () => {
    showMessage("I would love to know about Atrology.", 'user')
    setTimeout(() => answerTwo('Astrology', 'user')), 1000
  })
  document.getElementById('Fortune').addEventListener('click', () => {
    showMessage("Give me the Fortune!", 'user')
    setTimeout(() => answerTwo('Fortune', 'user')), 1000
  })
}

const answerTwo = (choice, userName) => {      //answer , passing the parameter
  if (choice === 'Shop') {
    setTimeout(() => showMessage("Let me guide you to our catalogue. Please click in the item to buy", 'bot'), 0)

    inputWrapper.innerHTML = `
        <button id = "cards" type = "submit">Cards</button>
        <button id = "Stones" type = "submit">Stones</button>
        <button id = "Crystal ball" type = "submit">Crystal ball</button>
        <button id = "Palmestry book" type = "submit">Palmestry book</button>

        `
    document.getElementById('cards').addEventListener('click', () => {
      showMessage("I want to buy some cards", 'user')
      setTimeout(() => answerShop('Cards', 'user')), 1000
    })
    document.getElementById('Stones').addEventListener('click', () => {
      showMessage("I want to buy stones.", 'user')
      setTimeout(() => answerShop('Stones', 'user')), 1000
    })
    document.getElementById('Crystal ball').addEventListener('click', () => {
      showMessage("I want to buy a crystal ball", 'user')
      setTimeout(() => answerShop('Crystal ball', 'user')), 1000
    })
    document.getElementById('Palmestry book').addEventListener('click', () => {
      showMessage("I want to buy a book of palmestry.", 'user')
      setTimeout(() => answerShop('Palmestry book', 'user')), 1000
    })

  }

  else if (choice === 'Astrology') {
    setTimeout(() => showMessage("Let me give you your zodiac sign, based on your date of birth!", 'bot'), 1000)

    inputWrapper.innerHTML = `
    <select id="month" class="dropDown">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>

    <select id="day"  class="dropDown">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </select>

    <button id="ZodiacButton" class="button" type="submit">
      Select 
    </button>
      `
     
      // create function to guess the zodiac sign based on the month and day 

    document.getElementById('ZodiacButton').addEventListener('click', () => {
      showMessage("So exiting!", 'user')
      const zodiacMonth = Number(document.getElementById("month").value);
      const zodiacDay = Number(document.getElementById("day").value);
      const zodiacSign = getZodiac(zodiacMonth, zodiacDay)

      setTimeout(() => showMessage(`Your zodiac sign is ${zodiacSign}`, "bot")), 1000  // calling out the next answer in a new function named facts
    })

  }


  else if (choice === 'Fortune') {

    setTimeout(() => showMessage("Fortune how exiting!", 'bot'), 1000)

    inputWrapper.innerHTML = `
      <button id="Past" type="submit">Past</button>
      <button id="Present" type="submit">Present</button>
      <button id="Future" type="submit">Future</button>
    
      `
    document.getElementById('Past').addEventListener('click', () => {
      showMessage("Tell me something about my past!", 'user')
      setTimeout(() => answerFortune('Past', 'user')), 1000  // calling out the next answer in a new function named facts
    })

    document.getElementById('Present').addEventListener('click', () => {
      showMessage("Tell me something about my present!", 'user')
      setTimeout(() => answerFortune('Present', 'user')), 1000  // calling out the next answer in a new function named facts
    })

    document.getElementById('Future').addEventListener('click', () => {
      showMessage("Tell me something about my future!", 'user')
      setTimeout(() => answerFortune('Future', 'user')), 1000  // calling out the next answer in a new function named facts
    })

  }
}

const answerShop = (shopItem, sender) => {
  showMessage(`We are packing your ${shopItem} order!, Please wait....`, "bot")
  inputWrapper.innerHTML = ""
  setTimeout(() =>
    chat.innerHTML = `
    <video src="./assets/thankyou.mp4" width=100% height="552" autoplay></video>
  `, 2000)
}

// this function will display a video of marina picking a card after the user
// chose a button-past-present-future

const answerFortune = (shopItem, sender) => {
  showMessage(`I will choose card from the tarot, Please wait....`, "bot")
  inputWrapper.innerHTML = "" // this is to disapear the inputwrapper (past-present-future buttons)
  setTimeout(() =>
    chat.innerHTML = `
    <video src="./assets/readingtarot.mp4" width=100% height="552" autoplay></video>
    `, 4000);

 
  // this make visible the result of the function getfortune on the chat
  setTimeout(() =>
  chat.innerHTML = `<p id="chosenFortune">${getFortune()}</p>`, 14000);


}
 // function that pick a random fortune string 
const getFortune = () => {
  const selectedIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[selectedIndex];
}

// function that display the video of choosing your zodiac sign 

const getZodiac = (month, day) => {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Aries: Aries are confident, adventurous, and energetic individuals who are always eager for new challenges and experiences. They have a natural charisma that attracts others to them and a pioneering spirit that drives them to be the first to try new things. Aries are natural leaders and are not afraid to take the initiative and make things happen.";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "Taurus: Tauruses are practical, reliable, and dependable individuals who value stability and security in their lives. They have a strong work ethic and are committed to achieving their goals, no matter how long it takes. Tauruses are also known for their love of luxury and the finer things in life, and they enjoy indulging in the things that bring them pleasure and comfort.";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "Gemini: Geminis are intelligent, curious, and versatile individuals who are always seeking new knowledge and experiences. They are known for their quick wit and ability to adapt to any situation, making them excellent communicators and natural problem-solvers. Geminis are always on the go and enjoy keeping their minds and bodies active and engaged.";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return "Cancer: Cancers are nurturing, empathetic, and caring individuals who have a strong sense of family and community. They are deeply intuitive and have a natural ability to understand the emotional needs of others. Cancers are also known for their strong memories and ability to hold on to the past, making them sentimental and nostalgic individuals.";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "Leo: Leos are charismatic, confident, and creative individuals who love to be in the spotlight and inspire others. They have a natural charm and magnetism that draws people to them, and their infectious energy and positive outlook make them a joy to be around. Leos are also known for their generosity and desire to help others, making them true leaders in their communities.";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Virgo: Virgos are analytical, detail-oriented, and organized individuals who are always striving for excellence and improvement. They have a keen mind and a natural ability to see patterns and identify problems, making them excellent problem-solvers and critical thinkers. Virgos are also known for their perfectionism and desire to create order and harmony in their lives.";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "Libra: Libras are fair-minded, cooperative, and diplomatic individuals who value balance and harmony in all aspects of their lives. They have a natural ability to see both sides of an issue and find common ground, making them excellent mediators and peacekeepers. Libras are also known for their love of beauty and the arts, and they enjoy bringing a sense of balance and harmony to their environments.";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return "Scorpio: Scorpios are passionate, determined, and resourceful individuals who are not afraid to take risks and pursue their passions. They have a strong intuition and are able to see through surface appearances to the underlying truth, making them excellent detectives and problem-solvers. Scorpios are also known for their intense emotions and ability to navigate even the most challenging of situations with grace and poise.";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "Sagittarius: Sagittarians are optimistic, adventurous, and spontaneous individuals who are always seeking new experiences and exploring new cultures. They have a thirst for knowledge and a natural wanderlust that drives them to travel and experience new things. Sagittarians are also known for their honesty and directness, and they are not afraid to speak their minds and tell it like it is.";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    return "Capricorn: Capricorns are ambitious, disciplined, and practical individuals who are always working towards their long-term goals and success. They have a strong work ethic and are known for their determination and persistence, and they are not easily discouraged or dissuaded from their goals.";
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return "Aquarius: Aquarius is the eleventh sign of the zodiac, and it is associated with independence, originality, and humanitarianism. People born under this sign are known for their innovative ideas, progressive attitudes, and the ability to see the bigger picture. They are often described as eccentric, non-conformist, and quirky, and they value freedom and individuality above all else.";
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "Pisces: Pisces is the twelfth and final sign of the zodiac, and it is associated with empathy, intuition, and creativity. People born under this sign are known for their compassionate and empathetic nature, and they have a strong connection to their emotions and the emotions of others.Pisces people are often drawn to the arts, and they have a natural talent for music, dance, and other creative pursuits.";
  } else {
    return "Invalid date";
  }
}





//funtion that says goodbye and thank you with vide 



//for the greeting to start after 1000
setTimeout(greeting, 1000);



