//Dice Roller Program

function roll_dice(){

    const num_of_dice= document.getElementById("nofdice").value;
    const dice_result= document.getElementById("dice_result");
    const dice_image= document.getElementById("dice_image");

    const values = [];
    const images = [];

    for(let i = 0; i <num_of_dice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="assets/${value}.png" alt="Dice ${value}">`);
    }
    
    dice_result.textContent = `dice : ${values.join(',')}`;
    dice_image.innerHTML = images.join('');
}