
const min_num = 50; 
const max_num = 100;
const answer = Math.floor(Math.random() * (max_num - min_num +1)) + min_num;

let attempt = 0;
let guess;
let loop = true;

while(loop){
    
    guess = window.prompt(`Guess a number between ${min_num} and ${max_num}`);
    guess = Number(guess);
    

    if(isNaN(guess)){
        window.alert("Enter a valid number");
    }
    else if(guess < min_num || guess > max_num){
        window.alert(`Enter a number in the valid range of ${min_num} and ${max_num}`);
    }
    else{        
        attempt++;
        if(guess < answer){
            window.alert(`Answer is higher`);
        }
        else if(guess > answer){
            window.alert(`Answer is lower`);
        }
        else{
            window.alert(`Your answer ${answer} is correct. It took you ${attempt} attempts`);
            loop = false;
        }
    }
}

 
