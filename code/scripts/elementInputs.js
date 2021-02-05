// Collection of html elements variables (templates)

export const name = `
  <input class="input__text" id="inputName" type="text" />
  <button class="input__button" type="submit">Send</button>
`;
export const boolSelect = `
  <button class="input__button" type="submit" value="true">Yes</button>
  <button class="input__button" type="submit" value="false">No</button>
`;

// Function to dynamically generate a user message
export const userMessage = (msg, token) => {
  return `
  <section class="message__user">
  <div class="bubble bubble__user">
  <p class="message__text">${msg}</p>
  </div>
  <img src="assets/${token}.png" alt="User" />  
  </section>
  `;
};

// Function to dynamically generate a bot message
export const botMessage = (count) => {
  return `
    <section class="message__bot">
    <img src="assets/tokenDM.png" alt="token dungeon master" />
    <div class="bubble bubble__bot">
      <p class="message__text" id="botMessage${count}">...</p>
    </div>
    </section>
  `;
};

// Function to set the available class options based on difficulty
export const classSelect = (isEasy) => {
  let html = "";
  if (isEasy) {
    html += `
        <button class="input__button" type="submit" value="Fighter">Fighter</button>
        <button class="input__button" type="submit" value="Ranger">Ranger</button> 
        `;
  } else {
    html += `
        <button class="input__button" type="submit" value="Fighter">Fighter</button>
        <button class="input__button" type="submit" value="Ranger">Ranger</button>    
        <button class="input__button" type="submit" value="Sorcerer">Sorcerer</button>  
        `;
  }
  return html;
};

// Function to set the appropriate actions based on the hero type
export const setActionsSelect = (hero) => {
  let html = "";
  for (let i = 0; i < hero.actions.length; i++) {
    const action = hero.actions[i];
    // Show limited actions if they are not used
    if (action.limited) {
      html += `<button class="input__button" type="submit" ${
        action.used ? "disabled" : ""
      } value="${action.type}" data-msg="${action.msg}">${action.name}</button>`;
    }
    // Show not limited actions
    if (!action.limited) {
      html += `<button class="input__button" type="submit" value="${action.type}" data-msg="${action.msg}">${action.name}</button>`;
    }
  }
  return html;
};
