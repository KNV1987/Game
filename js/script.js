let arr = [1, 2, 3, 4]

let cards = document.querySelector(".cards");


function addCards(arr) {
    let arr1 = arr.map(el => `<div class="card">
    <div class="front"><span>Front</span></div>
    <div class="back" data-value=${el}>${el}</div>
    </div>`).join("");
    cards.insertAdjacentHTML("afterbegin", arr1)
}
addCards(arr);
let fronts = document.querySelectorAll(".front");
let backs = document.querySelectorAll(".back");
let count = 0
fronts.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.add("rotate__front");
        el.nextElementSibling.classList.add("rotate__back");
       
        count++;
        if (count === 2) {
            cards.classList.add("disabled")
           setTimeout(coup, 3000)
            count = 0;
        }
        console.log(el.nextElementSibling.getAttribute("data-value"));
    })
})

function coup() {
    backs.forEach((el) => {
        el.classList.remove("rotate__back");
        el.previousElementSibling.classList.remove("rotate__front");
    })
}