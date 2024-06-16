const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

myBtn.addEventListener("click", event =>{
    
    if (myBtn.textContent == "Hide"){
        myImg.style.visibility = "hidden";
        myBtn.textContent = "Show";
    }
    else if(myBtn.textContent = "Show"){
        myImg.style.visibility = "visible";
        myBtn.textContent = "Hide";
    }
});
