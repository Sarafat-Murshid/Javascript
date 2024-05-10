let timeoutId;


function startTimer(){
    timeoutId = setTimeout(() => {window.alert("Hello")}, 3000);
    console.log("Start");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("End");
}