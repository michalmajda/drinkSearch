const drinkList = document.querySelectorAll('li')
const input = document.querySelector('.search')







checkDrinks = e => {
    drinkList.forEach((item) => {
        if(item.textContent.toLowerCase().indexOf(input.value.toLowerCase()) == -1){
            item.style.display = "none"
        
        }
        else {
            item.style.display = "block"
        }
    })
}


input.addEventListener('keyup', checkDrinks)