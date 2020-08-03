const modifier = document.getElementById("modifier");
const display = document.getElementById("display");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

display.textContent = 0;
modifier.value = 1;

plus.addEventListener("click", function (e) {
    display.textContent = display.innerText - (-modifier.value);
    if (display.textContent < 0) {
            display.style.color = "red";
    } else {
            display.style.color = "black";
    }
});

minus.addEventListener("click", function (e) {
    display.textContent = display.textContent - modifier.value;
    if (display.textContent < 0) {
            display.style.color = "red";
    } else {
            display.style.color = "black";
}
});


