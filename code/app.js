let order = {
    dish: "",
    fill: "",
  }

  const showMenu = (dish) => {
    botReply(`${dish} burger is a great choice 🍔, please select your favorite filling👇<br>
    
    `)
    order.dish=dish // this window method will tranform it from local variable to a global variable 
    inputWrapper.innerHTML =`
    <select id="select"> 
      <option value=" " selected disabled> your filling </option>
      <option value="meat"> Meat </option>
      <option value="chicken"> Chicken </option>
      <option value="fish"> Fish </option>
      <option value="vegitarian"> Vegitarian </option>
    </select>
    `
    //event change enable to choice between the options
    const fill = document.getElementById('select')
    select.addEventListener('change', () => sideDish (fill.value)) 
  }
    
const sideDish = (fill) => {
  botReply(`you have ordered ${order.dish} with ${fill}👌 please chose your favorite side dish)
  