// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const wineForm = document.getElementById('wine-form');
const wineInput = document.getElementById('wine-input');
const inputWrapper = document.getElementById('input-wrapper');
const sound = document.getElementById('sound'); 

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
    if (sender === 'user') {
        console.log(showMessage);
        chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/wine-man.svg" alt="User" />  
      </section>
    `
    } else if (sender === 'bot') {
        console.log(showMessage);
        chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/wine-maiden.svg" alt="Bot" />
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
    showMessage(`Hello there! Do you prefer white or red wine?`, 'bot')
}

setTimeout(greeting, 1000); //Fundera på placering


//Question 1
const handleWineInput = (event) => {
    event.preventDefault();
    const wineChoice = wineInput.value;
    showMessage(wineChoice, 'user');
    wineInput.value = '';
    setTimeout(() => validateResponse(wineChoice), 1000);
};


//Question 2
const validateResponse = (wineChoice) => {

    if (wineChoice.toLowerCase() === 'red') {
        showMessage(`${wineChoice} is it?`, 'bot');
        setTimeout(() => questionRed(), 2000);
    } else if (wineChoice.toLowerCase() === 'white') {
        showMessage(`${wineChoice}... Are you sure?`, 'bot');
        setTimeout(() => questionWhite(), 2000);
    } else {
        showMessage(`Please answer if you prefer red or white!`, 'bot');
    }
};


//RED CONVERSATION
//Question 3 - Red wine (questionRed) 

const questionRed = () => {
    showMessage(`Great choice! Which of the following countries would you say that you prefer when it comes to red wine?`, 'bot');

    inputWrapper.innerHTML = `
        <button id="italy">Italy</button>
        <button id="spain">Spain</button>
    `

    document.getElementById('italy').addEventListener('click', () => {
        showMessage('Italy', 'user');
        setTimeout(() => questionGrapeItaly(), 2000);
    })


    document.getElementById('spain').addEventListener('click', () => {
        showMessage('Spain', 'user');
        setTimeout(() => questionGrapeSpain(), 2000);
    })
};


//Question 4 - Italy

const questionGrapeItaly = () => {
    showMessage(`Perfect! Might as well! Which of the following grapes do you prefer?`, 'bot');

    inputWrapper.innerHTML = `
        <button id="neroDavola">Nero d'Avola</button>
        <button id="barbera">Barbera</button>
        <button id="amarone">Amarone</button>
    `

    document.getElementById('neroDavola').addEventListener('click', () => {
        showMessage("Nero d'Avola", 'user');
        setTimeout(() => wineRecoNero(), 2000);
    })

    document.getElementById('barbera').addEventListener('click', () => {
        showMessage('Barbera', 'user');
        setTimeout(() => wineRecoBarbera(), 2000);
    })

    document.getElementById('amarone').addEventListener('click', () => {
        showMessage('Amarone', 'user');
        setTimeout(() => wineRecoAmarone(), 2000);
    })
};

//Question 5 - Italy

const wineRecoNero = () => {
    showMessage(`Fantastic choice! The finest Nero d'Avola can be found on Sicily! Enjoy!`, 'bot');
    sound.play();
    inputWrapper.innerHTML = ``;
}

const wineRecoBarbera = () => {
    showMessage(`An amazing grape! It's the most planted grape in all of Italy! Enjoy!`, 'bot');
    sound.play();
    inputWrapper.innerHTML = ``;
}

const wineRecoAmarone = () => {
    showMessage(`Exclusive taste, eh? It's worth every penny! Enjoy!`, 'bot');
    sound.play();
    inputWrapper.innerHTML = ``;
}



//Question 4 - Spain

const questionGrapeSpain = () => {
    showMessage(`Perfect! Might as well! Which of the following grapes to you prefer?`, 'bot');

    inputWrapper.innerHTML = `
        <button id="tempranillo">Tempranillo</button>
        <button id="granache">Granache</button>
        <button id="syrah">Syrah</button>
    `

    document.getElementById('tempranillo').addEventListener('click', () => {
        showMessage('Tempranillo', 'user');
        setTimeout(() => wineRecoTemp(), 2000);
    })

    document.getElementById('granache').addEventListener('click', () => {
        showMessage('Granache', 'user');
        setTimeout(() => wineRecoGran(), 2000);
    })

    document.getElementById('syrah').addEventListener('click', () => {
        showMessage('Syrah', 'user');
        setTimeout(() => wineRecoSyrah(), 2000);
    })
};

//Question 5 - Spain

const wineRecoTemp = () => {
    showMessage(`Woho! It´s the best known quality red wine grape in Spain. Enjoy!`, 'bot');
    sound.play();
    inputWrapper.innerHTML = ``;
}

const wineRecoGran = () => {
    showMessage(`Yummie! A very fruity wine with lots of raspberry aromas. Enjoy!`, 'bot');
    sound.play();
    inputWrapper.innerHTML = ``;
}

const wineRecoSyrah = () => {
    showMessage(`You´re in for a treat! A full bodied wine from Galicia. Enjoy!`, 'bot');
    sound.play();
    inputWrapper.innerHTML = ``;
}


//WHITE CONVERSATION
//Question 3 - White wine (questionWhite) 

const questionWhite = () => {
    showMessage(`I mean, are you really sure about it? Red is pretty popular and the taste is absolutely fantastic. I'll ask again; red or white?`, 'bot');

    inputWrapper.innerHTML = `
        <button id="continue">Red</button>
        <button id="theEnd">White</button>
    `

    document.getElementById('continue').addEventListener('click', () => {
        showMessage('red', 'user');
        setTimeout(() => questionRed(), 2000);
    })

    document.getElementById('theEnd').addEventListener('click', () => {
        showMessage('white', 'user');
        setTimeout(() => oneChance(), 2000);
    })
};


//Question 4 - White wine (oneChance)

const oneChance = () => {
    showMessage(`I hope you realize what you're missing out on...`, 'bot');
    setTimeout(() => lastChance(), 2000);
};


//Question 5 - White wine (lastChance)

const lastChance = () => {
    showMessage(`Last chance. What's your final answer?`, 'bot');

    inputWrapper.innerHTML = `
  <button id="regretChoice">I've changed my mind. Red it is!</button>
  <button id="itsFinal">White, it's final!</button>
  `

    document.getElementById('regretChoice').addEventListener('click', () => {
        showMessage("Wait! I've changed my mind! I want red!", 'user');
        setTimeout(() => questionRed(), 2000);
    })

    document.getElementById('itsFinal').addEventListener('click', () => {
        showMessage('White is my final answer.', 'user');
        setTimeout(() => endOfConvo(), 2000);
    })
};

//Question 6 - White wine (endOfConvo)

const endOfConvo = () => {
    showMessage(`OK. Then our conversation ends here.`, 'bot');
    inputWrapper.innerHTML = ``;
};


// Eventlisteners

wineForm.addEventListener('submit', handleWineInput);