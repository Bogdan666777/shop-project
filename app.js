let productCountEL = document.getElementById("product-count")
console.log(productCountEL)

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart")
console.log(addToCartBtns)

for(let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener("click", function(){
        productCountEL.textContent = +productCountEL.textContent +1
    })
}

let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn-close")
let moreDetailsBtns = document.querySelectorAll(".btn-more-details")

moreDetailsBtns.forEach(btn => {
    btn.addEventListener("click", openModal)
})


closeBtn.addEventListener("click", closeModal)

function openModal(){
     modal.classList.add("show");
     modal.classList.remove("hide");
}

function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function(e){
    if(e.target === modal) {
        closeModal();
    }
})