let carts = document.querySelectorAll('.add-cart');


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
       
        let n = parseInt(localStorage.getItem("nbRobes"));
        if (n) {
            localStorage.setItem("nbRobes", n + 1);
            document.querySelector('.cart span').textContent = n + 1;
        }else{ // Premier achat
            localStorage.setItem("nbRobes", 1);
            document.querySelector('.cart span').textContent = 1;
        }
        
    });
}
