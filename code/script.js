// DOM selectors stored as short variables
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

// 1   Start - greeting and the bot asks a question about wine preference
const greeting = () => {
    showMessage(`Hello there! Do you prefer white or red wine?`, 'bot')
}

setTimeout(greeting, 1000); 


// 2   The user chooses red or white wine
const handleWineInput = (event) => {
    event.preventDefault();
    const wineChoice = wineInput.value;
    showMessage(wineChoice, 'user');
    wineInput.value = '';
    setTimeout(() => validateResponse(wineChoice), 1000);
};


// 3   The user's wine choice is validated and bot responds based on user's input
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


// RED WINE CONVERSATION
// 4   Red wine - user chooses the preferred wine country
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


// 4.1    Italy - user chooses the preferred grape from Italy
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


// 4.1.1    Italy - bot gives the last message based on user's choice on grape
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


// 4.2    Spain - user chooses the preferred grape from Spain
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


// 4.2.1    Spain - bot gives the last message based on user's choice on grape
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


// WHITE WINE CONVERSATION
// 4    The bot asks the user if the user is sure about choosing white wine + the user gets a chance to choose again
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


// 5    The bot sends a message to the user
const oneChance = () => {
    showMessage(`I hope you realize what you're missing out on...`, 'bot');
    setTimeout(() => lastChance(), 2000);
};


// 6    The bot gives the user a last chance to change
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


// 7    The bot ends the conversation
const endOfConvo = () => {
    showMessage(`OK. Then our conversation ends here.`, 'bot');
    inputWrapper.innerHTML = ``;
};


// Eventlisteners
wineForm.addEventListener('submit', handleWineInput);