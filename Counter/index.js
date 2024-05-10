let count = 0;
let decrementInterval;
let incrementInterval;

function startDecrement() {
    decrementInterval = setInterval(decrement, 200);
}

function stopDecrement() {
    clearInterval(decrementInterval);
}

function startIncrement() {
    incrementInterval = setInterval(increment, 200);
}

function stopIncrement() {
    clearInterval(incrementInterval);
}

function decrement() {
    document.getElementById("h1").textContent = --count;
}

function increment() {
    document.getElementById("h1").textContent = ++count;
}

document.getElementById("mybtn1").addEventListener("mousedown", startDecrement);
document.getElementById("mybtn1").addEventListener("mouseup", stopDecrement);

document.getElementById("mybtn1").addEventListener("click", decrement);

document.getElementById("mybtn2").addEventListener("click", function() {
    count = 0;
    document.getElementById("h1").textContent = count;
});

document.getElementById("mybtn3").addEventListener("mousedown", startIncrement);
document.getElementById("mybtn3").addEventListener("mouseup", stopIncrement);

document.getElementById("mybtn3").addEventListener("click", increment);