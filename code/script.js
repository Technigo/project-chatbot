/// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const input = document.getElementById("name-input");
const form = document.getElementById("name-form");
const submit = document.getElementById("submit");
const inputWrapper = document.getElementById("input-wrapper");

//the varible questionCounter starts on 1;
let questionCounter = 1;

//Functions to write what the bot and user say in shorter code
const botReply = (msg) => {
	showMessage(msg, "bot");
};

const userReply = (msg) => {
	showMessage(msg, "user");
};

const showMessage = (message, sender) => {
	// the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
	if (sender === "user") {
		chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/my-user.png" alt="User" />  
      </section>
    `;
		// the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
	} else if (sender === "bot") {
		chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/my-bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
	}
	//To make the chat scroll down when there are new messages
	chat.scrollTop = chat.scrollHeight;
};

//A function to count the questions and send to the next to next question based on that counting
const nextQuestion = (message) => {
	console.log("questionCounter", questionCounter);

	if (questionCounter === 1) {
		//user message will be display in the chat bubble (makes code shorter)
		userReply(message);
		//will display the user's name as a response to the helloUser function
		input.value = "";
		//Disables the function btnRemoveOnClick (in the end of the document) as I don't want the inputWrapper to be cleared after helloUser
		btnRemoveOnClick(false);
		setTimeout(() => ecoAnxietyOptions(message), 1000);
	} else if (questionCounter === 2) {
		userReply(message);
		setTimeout(() => rateAnxiety(message), 1000);
	} else if (questionCounter === 3) {
		userReply(message);
		setTimeout(() => nextStepOptions(message), 1000);
	} else if (questionCounter === 4) {
		userReply(message);
		setTimeout(() => takeActionOptions(message), 1000);
	} else if (questionCounter === 5) {
		userReply(message);
		setTimeout(() => finalStep(message), 1000);
	} else if (questionCounter === 6) {
		userReply(message);
		setTimeout(() => anythingElse(message), 1000);
	} else {
		userReply(message);
		setTimeout(thankYou, 1000);
	}
};

//The first message which show up when user enters the page
const helloUser = () => {
	questionCounter = 1;
	botReply(`Hello there, What's your name?`);
	//disables the page to be renewed when user puts in their name
	form.addEventListener("submit", (event) => {
		event.preventDefault()
	});
};

//2nd question from bot - carries the name value into the next question
const ecoAnxietyOptions = (name) => {
	questionCounter++;
	botReply(`Nice to meet you ${name}! Do you have climate anxiety?`);
	
	//3 ALTERNATIVES: YES - NO - MAYBE
	setTimeout(() => delayHTML(), 1000);
	//Delays the buttons to show + applies the same timout on the eventListener below (to make the code shorter)
	const delayHTML = () => {
		inputWrapper.innerHTML = `
			<form id="anxContainer">
				<button id="anxBtn1" class="anxBtn" type="submit" value="Yes">Yes</button>
				<button id="anxBtn2" class="anxBtn" type="submit" value="No">No</button>
				<button id="anxBtn3" class="anxBtn" type="submit" value="Maybe">Maybe</button>
			</form>
		`;
		//Depending on which button the user clicks on, that value is sent to next question, and displays which next question depending on that value
		document
			.querySelectorAll(".anxBtn")
			.forEach((button) => button.addEventListener("click", () => nextQuestion(button.value)));
	};
};

//3rd question
const rateAnxiety = (userResponse) => {
	questionCounter++;

	if (userResponse === "Yes" || userResponse === "Maybe") {
		//IF "YES" AND "MAYBE" - RATE YOUR ANXIETY
		botReply(`Please, rate your climate anxiety level!`);
		//Delays the radio buttons (+ same time out on eventListener below)
		setTimeout(() => delayHTML(), 1000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form id="radioRatingBtns" class="radioContainer">
				<label>Low</label>
				<input class="rate" type="radio" name="rate" value="1">
				<input class="rate" type="radio" name="rate" value="2">
				<input class="rate" type="radio" name="rate" value="3">
				<input class="rate" type="radio" name="rate" value="4">
				<input class="rate" type="radio" name="rate" value="5">
				<input class="rate" type="radio" name="rate" value="6">
				<input class="rate" type="radio" name="rate" value="7">
				<input class="rate" type="radio" name="rate" value="8">
				<input class="rate" type="radio" name="rate" value="9">
				<input class="rate" type="radio" name="rate" value="10">
				<label>High</label>
			</form>
		`;

			document
				.querySelectorAll(".rate")
				.forEach((button) =>
					button.addEventListener("click", () => nextQuestion(button.value))
				);
			//Prevents the btnRemoveOnClick function at the end of the document from being invoked
			inputWrapper.onclick = btnRemoveOnClick(); return false;
		};
	} else {
		// IF NO - FOLLOW UP QUESTION - WITH THREE BUTTONS
		botReply(`I understand. Why is you don't feel worried about the climate crisis?`);

		setTimeout(() => delayHTML(), 1000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<select id="noSelect">
				<option value="" selected disabled>👇 Select your reason...</option>
				<option id="noOption1" value="Being anxious doesn't help">Being anxious doesn't help</option>
				<option id="noOption2" value="Don't believe in climate change">Don't believe in climate change</option>
				<option id="noOption3" value="Other / I don't care">Other / I don't care</option>
			</select>
		`;
			document
				.getElementById("noSelect")
				.addEventListener("change", () => nextQuestion(noSelect.value));

			inputWrapper.onclick = btnRemoveOnClick(); return false;
		};
	}
};

//4th question
const nextStepOptions = (rating) => {
	questionCounter++;
	// IF RADIO-BUTTON 1-6 show messages:
	if (rating <= 6) {
		botReply(`You have mild to moderate anxiety.`);
		setTimeout(() => botReply(`I'm sorry to hear that.`), 1000);
		setTimeout(() => botReply(`What would make you feel better about your situation?`), 2000);

		setTimeout(() => delayHTML(), 2000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form id="nextStepContainer">
				<button class="nextStepBtn" type="submit" value="To take action">To take action</button>
				<button class="nextStepBtn" type="submit" value="Continue as usual">Continue as usual</button>
				<button class="nextStepBtn" type="submit" value="Get support from others">Get support from others</button>
			</form>
		`;

			document
				.querySelectorAll(".nextStepBtn")
				.forEach((button) =>
					button.addEventListener("click", () => nextQuestion(button.value))
				);
		};
	// IF RADIO-BUTTON 7-10 show messages:
	} else if (rating > 6 && rating <= 10) {
		botReply(`You have severe anxiety.`);
		setTimeout(() => botReply(`That's tough!`), 1000);
		setTimeout(() => botReply(`But you are not alone.`), 2000);
		setTimeout(() => botReply(`A study published by The Lancet found that 59% of children and young adults ages 16 to 25 are very or extremely worried about climate change.`), 3000);
		setTimeout(() => botReply(`What are you the most worried about?`), 6000);

		setTimeout(() => delayHTML(), 7000);

		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form class="worstCaseContainer" id="worstCaseBtns">
				<button class="worstCaseBtn" id="worstCaseBtn1" type="button" value="polar ice melting">Polar ice melting</button>
				<button class="worstCaseBtn" id="worstCaseBtn2" type="button" value="natural disasters">Natural disasters</button>
				<button class="worstCaseBtn" id="worstCaseBtn3" type="button" value="humanity itself">Humanity itself</button>
				<button class="worstCaseBtn" id="worstCaseBtn4" type="button" value="economic collapse">Economic collapse</button>
			</form>
		`;

			document
				.querySelectorAll(".worstCaseBtn")
				.forEach((button) => button.addEventListener("click", () => nextQuestion(button.value)));
		};

	} else {
	//When the user replied "no" and then picked a reason for not being worried in the "nextStepOptions"-option, display these messages:
		botReply(`I understand!`);
		setTimeout(() => botReply(`Hang on for a little bit!`), 1000);
		setTimeout(() => botReply(`I have something you could read.`), 3000);
		setTimeout(() => botReply(`To understand people with eco-anxiety better`), 4000);

		setTimeout(() => botReply(`
        <button class="chat-link" onclick=" window.open('https://earth.org/what-is-climate-anxiety/','_blank')">What is climate anxiety?#1</button>
        <button class="chat-link" onclick=" window.open('https://utforskasinnet.se/att-drabbas-av-klimatangest-vad-ar-det-egentligen/','_blank')">What is climate anxiety?#2</button>
    	`), 5000);

		setTimeout(() => botReply(`Do you get it now?`), 10000);

		setTimeout(() => delayHTML(), 11000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form class="getItConatainer">
				<button class="getItBtn" type="button" Value="Yes, maybe">Yes, maybe</button>
				<button class="getItBtn" type="button" Value="No, still don't get it">No, still don't get it</button>
			</form>
		`;
			//Send to anythingElse question at the end
			document
				.querySelectorAll(".getItBtn")
				.forEach((button) => button.addEventListener("click", () => anythingElse(button.value)));
		};
	}
};

//5th question
const takeActionOptions = (nextStep) => {
	questionCounter++;
	//If answer to prevous question was "To take action" OR "Get support from others", show these messages:
	if (nextStep === "To take action" || nextStep === "Get support from others") {
		botReply(`Sounds good`);
		setTimeout(() => botReply(`How do you want to get started?`), 1000);

		setTimeout(() => delayHTML(), 2000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form id="takeActionContainer">
				<button class="takeActionBtn" type="button" value="Visit a therapist">Visit a therapist</button>
				<button class="takeActionBtn" type="button" value="Join an activist group">Join an activist group</button>
				<button class="takeActionBtn" type="button" value="Join a political party">Join a political party</button>
			</form>
		`;

			document
				.querySelectorAll(".takeActionBtn")
				.forEach((button) => button.addEventListener("click", () => nextQuestion(button.value)));

		};
	//If answer to prevous question was "Continue as usual", show these messages:
	} else if (nextStep === "Continue as usual") {
		botReply(`Alright`);
		setTimeout(() => botReply(`Why is that?`), 1000);

		setTimeout(() => delayHTML(), 2000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<select id="usalSelect">
				<option value="" selected disabled>👇 Select your reason...</option>
				<option id="usualOpt1" value="Doing something feels pointless">Doing something feels pointless</option>
				<option id="usualOpt2" value="I don't have the time or energy">I don't have the time or energy</option>
				<option id="usualOpt3" value="I don't want to think about it">I don't want to think about it</option>
			</select>
		`;

			const usualSelect = document.getElementById("usalSelect");
			usualSelect.addEventListener("change", () => finalStep(usualSelect.value));

			inputWrapper.onclick = btnRemoveOnClick(); return false;
			
		};
	//If the user clicked a button as a response to "What are you the most worried about?" in the previous question section, show these messages:
	} else {
		botReply(`I hear you!`);
		setTimeout(() => botReply(`The ${nextStep} is super worrying. Maybe you should prioritize your health?`), 2000);
		setTimeout(() => botReply(`Or do something else which feels meaningful?`), 5000);
		setTimeout(() => botReply(`What do you want to do?`), 7000);
		setTimeout(() => delayHTML(), 8000);

		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form id="nextStepBtns" class="nextStepConatainer">
				<button id="nextStepBtn1" type="button" Value="Take care of my health">Take care of my health</button>
				<button class="nextStepBtn23" type="button" Value="To take action">To take action</button>
				<button class="nextStepBtn23" type="button" Value="Continue as usual">Continue as usual</button>
			</form>
		`;
			//If the user picked clicks "Take care of my health" send to nextQuestion (finalStep)
			document
				.getElementById("nextStepBtn1")
				.addEventListener("click", () => nextQuestion("Take care of my health"));

			//If the user picked clicks "Take action"/"Countinue" resend to question 5(takeActionOptions) - but here something goes really wrong, a bug - as the questionCounter/nextQuestion function is activated javascript can't go backwards in the counting, I didn't have time to figure out the syntax on how to go backwards.
			document
				.querySelectorAll(".nextStepBtn23")
				.forEach((button) => button.addEventListener("click", () => takeActionOptions(button.value)));
		};
	}
};

//6th question
const finalStep = (finalDecision) => {
	questionCounter++;
	//If answer to prevous question was "Take care of my health" OR "Visit a therapist", show these messages:
	if (finalDecision === "Take care of my health" || finalDecision === "Visit a therapist") {
		botReply(`Alright`);
		setTimeout(() => botReply(`Hold on`), 1000);
		setTimeout(() => botReply(`Here are some therapists working with climate anxiety`), 3000);
		setTimeout(() => botReply(`
              <button class="chat-link" onclick=" window.open('https://bokapsykolog.se/klimatangest/','_blank')">Book a psychologist</button>
              <button class="chat-link" onclick=" window.open('https://www.klimatpsykologerna.se/pageom/','_blank')">Climate therapists</button>
            `), 5000);
		setTimeout(() => botReply(`Do you feel better now?`), 10000);

		setTimeout(() => delayHTML(), 11000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form class="betterConatainer">
				<button class="betterBtn" type="button" Value="Yes, a little">Yes, a little</button>
				<button class="betterBtn" type="button" Value="No, not at all">No, not really</button>
			</form>
		`;

			document
				.querySelectorAll(".betterBtn")
				.forEach((button) => button.addEventListener("click", () => nextQuestion(button.value)));
		};
	//If answer to prevous question was "Join an activist group", show these messages:
	} else if (finalDecision === "Join an activist group") {
		botReply(`Interesting!`);
		setTimeout(() => botReply(`Just a second...`), 1000);
		setTimeout(() => botReply(`Here are some links to activist groups in Sweden`), 4000);

		setTimeout(() => botReply(`
		<button class="chat-link" onclick=" window.open('https://extinctionrebellion.se/','_blank')">Extinction Rebellion</button>
		<button class="chat-link" onclick=" window.open('https://xn--auroramlet-75a.se/','_blank')">Aurora</button>
		<button class="chat-link" onclick=" window.open('https://klimataktion.se//','_blank')">Klimataktion</button>
    `), 5000);

		setTimeout(() => botReply(`So will you do it?`), 10000);

		setTimeout(() => delayHTML(), 11000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form class="willConatainer">
				<button class="willBtn" type="button" Value="Yes, I'm about to sign up!">Yes, I'm about to sign up!</button>
				<button class="willBtn" type="button" Value="No, probably not">No, probably not</button>
			</form>
		`;

			document
				.querySelectorAll(".willBtn")
				.forEach((button) => button.addEventListener("click", () => nextQuestion(button.value)));
		};
	//If answer to prevous question was "Join a political party", show these messages:
	} else if (finalDecision === "Join a political party") {
		botReply(`Yes! Why not?`);
		setTimeout(() => botReply(`Just a second...`), 1000);
		setTimeout(() => botReply(`Here are some politacal parties focused on the environment`), 3000);

		setTimeout(() => botReply(`
                <button class="chat-link" onclick=" window.open('https://en.wikipedia.org/wiki/European_Green_Party/','_blank')">Green parties in Europe</button>
                <button class="chat-link" onclick=" window.open('https://europeangreens.eu/','_blank')">European Greens</button>
                <button class="chat-link" onclick=" window.open('https://www.riksdagen.se/sv/ledamoter-partier/miljopartiet/','_blank')">The Green Party</button>
    `), 4000);

		setTimeout(() => botReply(`So will you become politician now?`), 10000);
		setTimeout(() => delayHTML(), 11000);

		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form class="politicsConatainer">
				<button class="politicsBtn" type="button" Value="Yes, I will limit air traffic!">Yes, I will limit air traffic!</button>
				<button class="politicsBtn" type="button" Value="No, it's not going to happen">No, it's not going to happen</button>
			</form>
		`;

			document
				.querySelectorAll(".politicsBtn")
				.forEach((button) => button.addEventListener("click", () => nextQuestion(button.value)));
		};

	} else {
	//If user "select your reason..." for continue as usual in previous question, show these messages:
		botReply(`I see.`);
		setTimeout(() => botReply(`The climate crisis affects many people's psychological wellbeing.`), 1000);
		setTimeout(() => botReply(`Maybe this article could help you find some new perspectives.`), 3000);
		setTimeout(() => botReply(`<button class="chat-link" onclick=" window.open('https://www.health.harvard.edu/blog/is-climate-change-keeping-you-up-at-night-you-may-have-climate-anxiety-202206132761/','_blank')">Harvard Health</button>`), 5000);

		setTimeout(() => botReply(`Do you feel more enlightened now?`), 10000);

		setTimeout(() => delayHTML(), 11000);
		const delayHTML = () => {
			inputWrapper.innerHTML = `
			<form class="usefulConatainer">
					<button class="usefulBtn" type="button" Value="Yes!">Yes!</button>
					<button class="usefulBtn" type="button" Value="No.">No</button>
			</form>
		`;

			document
				.querySelectorAll(".usefulBtn")
				.forEach((button) => button.addEventListener("click", () => anythingElse(button.value)));
		};
	}
};

// 7th question - Final question 
const anythingElse = (anythingResponse) => {
	botReply(`Is there anything else we can help you with?`);

	setTimeout(() => delayHTML(), 1000);

	const delayHTML = () => {
		inputWrapper.innerHTML = `
			<form id="anythingBtns" >
				<button id="anythingYes" type="button">Yes</button>
				<button id="anythingNo" type="button">No</button>
			</form>
		`;

		document
			.getElementById("anythingYes")
			.addEventListener("click", () => rateAnxiety("Yes"));

		document
			.getElementById("anythingNo")
			.addEventListener("click", () => thankYou("No"));
	};
};

// Final message from bot with contact information
const thankYou = (value) => {
	botReply(`Thank you! Please, feel free to reach out to us if you have further questions`);

	setTimeout(() => (inputWrapper.innerHTML = `
			<form>
  				<button id="contact" class="contactUs" type="email"><a href="mailto:email@email.de" taget="_blank">Contact us</a></button>
			</form>
		`), 1000);
};

// A functions which removes buttons on click - it is deactivated on certain buttons, radio buttons and selections(bc selection don't work otherwise). I wanted to put this function at the top of the document but didn't dare in case of a bug. It works if stays here.
const btnRemoveOnClick = () => {
	inputWrapper.onclick = () => {
	inputWrapper.innerHTML = '';
	}
}	

// Set up your eventlisteners here

//Eventlistener invoking the btnRemove function on row 466
inputWrapper.addEventListener("click", btnRemoveOnClick);

//Makes sure the the user's name will be in the chat bubble as a response to helloUser
submit.addEventListener("click", () => nextQuestion(input.value));

// This means the greeting function will be called one second after the website is loaded.
setTimeout(helloUser, 1000);