let myBtn = document.querySelectorAll(".myBtn");

myBtn.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "green";
    })   
})

myBtn.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(271, 76%, 40%)";
  });

  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(271, 76%, 60%)";
  });

});


const newBtn = document.createElement("button");
newBtn.textContent = "button 5";
newBtn.classList = "myBtn";
document.body.appendChild(newBtn);

myBtn = document.querySelectorAll(".myBtn");

console.log(myBtn)

myBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    button = document.querySelectorAll(".myBtn");
    console.log(button);
  });
});