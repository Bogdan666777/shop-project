
//Add to cart 
let productsCountEl = document.getElementById("product-count")
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

//modal
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
let moreDetailsBtn = document.querySelectorAll(".btn-more-details");

moreDetailsBtn.forEach(btn => {
    btn.addEventListener("click", openModal)
})

closeBtn.addEventListener("click", closeModal)

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
})

function showModalByScroll() {
    if (window.pageYOffset > document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
}
window.addEventListener("scroll", showModalByScroll);

//change like
let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

likeBtns.forEach((item) =>
    item.addEventListener("click", function () {
        item.classList.toggle("liked");
    })
);

//slick slider
$(".slider-block").slick({
    dots:true,
});
//change product quantify
let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let quantityInputs = document.querySelectorAll(".products-quantity input")[0];

console.log(decrementBtns);
console.log(incrementBtns);
console.log(quantityInputs.value);

function toggleButtonsState(count) {
  decrementBtns.disabled = count <= 1;
  incrementBtns.disabled = count >= 5;
}
incrementBtns.addEventListener("click", function () {
    let currentCount = +quantityInputs.value;
    let nextCount = currentCount + 1;
    quantityInputs.value = nextCount;
    toggleButtonsState(nextCount);
  });
  decrementBtns.addEventListener("click", function () {
    let currentCount = +quantityInputs.value;
    let nextCount = currentCount - 1;
    quantityInputs.value = nextCount;
    toggleButtonsState(nextCount);
  });