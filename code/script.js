/// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const input = document.getElementById("name-input");
const form = document.getElementById("name-form");
const submit = document.getElementById("submit");
const inputWrapper = document.getElementById("input-wrapper");

let questionCounter = 1;

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
	chat.scrollTop = chat.scrollHeight;
};

const nextQuestion = (message) => {
	console.log("questionCounter", questionCounter);

	if (questionCounter === 1) {
		userReply(message);
		input.value = "";
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

const helloUser = () => {
	questionCounter = 1;
	botReply(`Hello there, What's your name?`);
	form.addEventListener("submit", (event) => {
		event.preventDefault()
	});
};

const ecoAnxietyOptions = (name) => {
	questionCounter++;
	botReply(`Nice to meet you ${name}! Do you have climate anxiety?`);
	//3 ALTERNATIVES: YES - NO - MAYBE

	setTimeout(() => delayHTML(), 1000);
	const delayHTML = () => {
		inputWrapper.innerHTML = `
			<form id="anxContainer">
				<button id="anxBtn1" class="anxBtn" type="submit" value="Yes">Yes</button>
				<button id="anxBtn2" class="anxBtn" type="submit" value="No">No</button>
				<button id="anxBtn3" class="anxBtn" type="submit" value="Maybe">Maybe</button>
			</form>
		`;

		document
			.querySelectorAll(".anxBtn")
			.forEach((button) => button.addEventListener("click", () => nextQuestion(button.value)));

		document
			.getElementById("anxContainer")
			.addEventListener("click", () => {
				anxContainer.remove();
			});
	};
};

const rateAnxiety = (userResponse) => {
	questionCounter++;

	if (userResponse === "Yes" || userResponse === "Maybe") {
		//IF "YES" AND "MAYBE" - RATE YOUR ANXIETY
		botReply(`Please, rate your climate anxiety level!`);

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

const nextStepOptions = (rating) => {
	questionCounter++;
	// IF RADIO-BUTTON 1-3 show message:
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

	} else if (rating > 6 && rating <= 10) {
		// IF RADIO-BUTTON 7-10 show message:
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
				<button class="worstCaseBtn" id="worstCaseBtn3" type="button" value="numanity itself">Humanity itself</button>
				<button class="worstCaseBtn" id="worstCaseBtn4" type="button" value="economic collapse">Economic collapse</button>
			</form>
		`;

			document
				.querySelectorAll(".worstCaseBtn")
				.forEach((button) => button.addEventListener("click", () => nextQuestion(button.value)));
		};

	} else {
		inputWrapper.innerHTML = "";
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

			document
				.querySelectorAll(".getItBtn")
				.forEach((button) => button.addEventListener("click", () => anythingElse(button.value)));
		};
	}
};

const takeActionOptions = (nextStep) => {
	questionCounter++;

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

			document
				.getElementById("nextStepBtn1")
				.addEventListener("click", () => nextQuestion("Take care of my health"));

			document
				.querySelectorAll(".nextStepBtn23")
				.forEach((button) => button.addEventListener("click", () => takeActionOptions(button.value)));
		};
	}
};

const finalStep = (finalDecision) => {
	questionCounter++;

	if (finalDecision === "Take care of my health" || finalDecision === "Visit a therapist") {
		botReply(`Alright`);
		setTimeout(() => botReply(`Hold on`), 1000);
		setTimeout(() => botReply(`Here are some therapists working with climate anxiety`), 3000);
		setTimeout(() => botReply(`
              <button class="chat-link" onclick=" window.open('https://bokapsykolog.se/klimatangest/','_blank')">Book a psykologist</button>
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

const thankYou = (value) => {
	botReply(`Thank you! Please, feel free to reach out to us if you have further questions`);

	setTimeout(() => (inputWrapper.innerHTML = `
  			<button id="contact" class="contactUs" type="email"><a href="mailto:email@email.de" taget="_blank">Contact us</a></button>
		`), 1000);
};

// Set up your eventlisteners here

const btnRemoveOnClick = () => {
	inputWrapper.onclick = () => {
		inputWrapper.innerHTML = '';
	}
}	

inputWrapper.addEventListener("click", btnRemoveOnClick);

submit.addEventListener("click", () => nextQuestion(input.value));

// This means the greeting function will be called one second after the website is loaded.
setTimeout(helloUser, 1000);