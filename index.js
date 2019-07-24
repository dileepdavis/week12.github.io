//retriving the topping divs
const $pep = document.querySelector(".pepperoni");
const $oli = document.querySelector(".olives");
const $sau = document.querySelector(".sausage");

//creating an array of buttons

const $checkbox = document.querySelectorAll(".button");

//retriving the size selector box

const $select = document.getElementById("sizes");
const $choice = document.querySelector(".sizes");

//adding event listner to the size selector

$select.addEventListener('change', function (event) {
    $choice.innerHTML = (event.target.value);
});

//adding event listner to each of the buttons using a "for of" loop and conditional statement.

for (let $button of $checkbox) {
    $button.addEventListener("click", function (event) {
        if (event.target.id == "pepperoni") {
            $pep.classList.toggle("show");
            $button.classList.toggle("checked");
        } 
        else if (event.target.id == "olives") {
            $oli.classList.toggle("show");
            $button.classList.toggle("checked");
        } 
        else {
            $sau.classList.toggle("show");
            $button.classList.toggle("checked");
        }
    });
}