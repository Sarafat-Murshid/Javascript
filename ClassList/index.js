let myBtn = document.querySelectorAll(".myBtn");

myBtn.forEach((buttons) => {
  buttons.classList.add("enabled");
});

myBtn.forEach((buttons) => {
  buttons.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

myBtn.forEach((buttons) => {
  buttons.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

myBtn.forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.classList.replace("disabled", "enabled");
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});

