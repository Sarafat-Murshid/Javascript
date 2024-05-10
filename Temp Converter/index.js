
const temperature = document.getElementById("temperature");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFarenheit.checked){
        temp = Number(temperature.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "° Farenheit";
    }
    
    else if(toCelcius.checked){
        temp = Number(temperature.value);
        temp = (temp -32) * 5 / 9 ;
        result.textContent = temp.toFixed(1) + "° Celcius";
    }

    else{
        result.textContent = "Select a Unit";
    }
}