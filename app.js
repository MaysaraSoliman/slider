const sliderWrapper = document.querySelector("#slider .slider-wrapper");
const sliderPagination = document.querySelector("#slider .slider-wrapper .slider-pagination");
const colImage = document.querySelectorAll("#slider .container .slider-wrapper .col");
const buttonLeft = document.querySelector("#slider .container .slider-wrapper .fa-angle-left");
const buttonRight = document.querySelector("#slider .container .slider-wrapper .fa-angle-right");
let currentCol = 0;
let sliderPaginationItem;
let counting = document.querySelector("#slider .slider-wrapper .counting");
counting.innerHTML = `${currentCol + 1} / ${colImage.length}`;

setup();

buttonRight.addEventListener("click", () => {
    removeActiveClass();
    currentCol++;
    if (currentCol >= colImage.length) {
        currentCol = 0;
    }
    addActiveClass();
})

buttonLeft.addEventListener("click", () => {
    removeActiveClass();
    currentCol--;
    if (currentCol <= -1) {
        currentCol = colImage.length - 1;
    }
    addActiveClass();
})

function addActiveClass() {
    colImage[currentCol].classList.add("col-active");
    sliderPaginationItem[currentCol].classList.add("slider-pagination-item-active");
    counting.innerHTML = `${currentCol + 1} / ${colImage.length}`;
}

function removeActiveClass() {
    colImage[currentCol].classList.remove("col-active");
    sliderPaginationItem[currentCol].classList.remove("slider-pagination-item-active");
}

function setup() {
    colImage.forEach(() => {
        sliderPagination.innerHTML += ` <div class="slider-pagination-item"></div>`;
    })
    sliderPaginationItem = document.querySelectorAll("#slider .slider-wrapper .slider-pagination .slider-pagination-item");
    sliderPaginationItem[currentCol].classList.add("slider-pagination-item-active");

    sliderPaginationItem.forEach(function (item, index) {
        item.addEventListener("click", function () {
            removeActiveClass();
            currentCol = index;
            addActiveClass();
        })
    })
}



