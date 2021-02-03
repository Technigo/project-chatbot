export const name = `
    <input class="input__text" id="inputName" type="text" />
    <button class="input__button" type="submit">Send</button>
`;
export const boolSelect = `
    <button class="input__button" type="submit" value="true">Yes</button>
    <button class="input__button" type="submit" value="false">No</button>
    `;

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
    html += `<button class="input__button" type="submit" value="${action.type}" data-msg="${action.msg}">${action.name}</button>`;
  }
  return html;
};
