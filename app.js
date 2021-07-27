
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
    dots: true,
});
//change product quantify



// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(quantityInputs.value);


// incrementBtns.addEventListener("click", function () {
//     let currentCount = +quantityInputs.value;
//     let nextCount = currentCount + 1;
//     quantityInputs.value = nextCount;
//     toggleButtonsState(nextCount);
//   });
//   decrementBtns.addEventListener("click", function () {
//     let currentCount = +quantityInputs.value;
//     let nextCount = currentCount - 1;
//     quantityInputs.value = nextCount;
//     toggleButtonsState(nextCount);
//   });



//   let currentCount = +quantityInputs.value;

//   toggleButtonsState(currentCount);

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInputs = document.querySelectorAll(".products-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField
    };
    this.toggleButtonsState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 5;
    };

    this.toggleButtonsState();

    this.increment = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonsState(nextCount);
    };

    this.decrement = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonsState(nextCount);
    };

    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));

    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

quantityInputs.forEach((quantity, i) => {
    new Counter(incrementBtns[i], decrementBtns[i], quantity);
});

// let counter = new Counter(incrementBtns, decrementBtns, quantityInputs);
// console.log(counter);



