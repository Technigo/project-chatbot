Categorie - buttons

 <form id ="order-option">
          <div class="categories">
          <button class="order-btn" id="coffee-btn" type="submit">
            Coffee
          </button>
          <button class="order-btn" id="bread-btn" type="submit">
            Bread
          </button>
          <button class="order-btn" id="pastry-btn" type="submit">
            Pastry
          </button>
          </div>
</form>

inputWrapper.addEventListener("click", (event) => {
event.preventDefault()
if (event.target.classList.contains("order-btn")) {
const choice = event.target.id;
showMessage(`I would like a ${choice}, please!`, "user")
orderOption.remove()
setTimeout(() => secondChoice(choice), 1000)
}
})
