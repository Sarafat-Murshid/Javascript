const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😫";
});

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't! 😛";
});

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Click Me 😀";
});
