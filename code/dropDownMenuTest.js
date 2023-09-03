// Here are some code blocks from tests I did for the drop-down menu.

 // For the drop-down menu I tried different approaches and here's the progression of how I went about this.
  // I'm saving it here for learning purposes and if I wanna reuse them in the future.
  /* The first iteration gives the values of the option elements as an output which is not what I want since the text of the values is written in a way that doesn't look nice. 
  I could rewrite the values in a way that would look better such as Tapioka Pearl but I wanted to see if I could find a way to target the text of the option element.
   Eventlisteners for drop-down menu
    bobaPearlOptions.addEventListener('change', () => {
      teaPearlOption = bobaPearlOptions.value;
      showMessage(teaPearlOption, "user");
      setTimeout(() => handleBobaDrinkSize(), 1000);
    });
  */
  /* For the second iteration I tried a switch statement and while this worked and gave me the innerText of the option I wanted to see if it could be optimised and shortened.
  The switch statement is checking the value of bobaPearlOptions.value against the values of the different options. The variable teaPearlOption is assigned with the innerText of the selected option. 
  const tapiokaPearlOption = document.getElementById('tapiokaPearl');
  const brownSugarPearlOption = document.getElementById('brownSugarPearl');
  const grassJellyOption = document.getElementById('grassJelly');
  const coffeeJellyOption = document.getElementById('coffeeJelly');
  
  bobaPearlOptions.addEventListener('change', () => {
    switch (bobaPearlOptions.value) {
      case tapiokaPearlOption.value:
        teaPearlOption = tapiokaPearlOption.innerText;
        break;
      case brownSugarPearlOption.value:
        teaPearlOption = brownSugarPearlOption.innerText;
        break;
      case grassJellyOption.value:
        teaPearlOption = grassJellyOption.innerText;
        break;
      default:
        teaPearlOption = coffeeJellyOption.innerText;
        break;
    };  
    showMessage(teaPearlOption, "user");
    setTimeout(() => handleBobaDrinkSize(), 1000);
  });
  */
