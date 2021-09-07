document.getElementById('name-form').addEventListener('submit', (event) =>{
    event.preventDefault();
    showMessage(`${event.target[0].value}`, 'user');
    showMessage(`Welcome, ${event.target[0].value}! On a long journey, you are.  Where from are you, hmm?`, 'bot');
    setTimeout(() => offerPlanets(), 1000);

});

var offerPlanets= () =>{
    document.getElementById('input-wrapper').innerHTML=`
    <form id="name-form">
        <select name="home" id="home">
            <option value="Tatooine">Tatooine</option>
            <option value="Abafar">Abafar</option>
            <option value="Technigo">Technigo</option>
      </select>
            
      <button class="send-btn" type="submit">
          Send
      </button>
          
      </form>
      `;
}


