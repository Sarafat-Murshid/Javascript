
function generate_password(length, include_lowercase, include_uppercase, include_numbers, include_symbols){
    const lowercase_chars = "acbdefghijklmnopqrstuvwxyz";
    const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers_chars = "0123456789";
    const symbols_chars = "`~!@#$%^&*()_+-={}[]\|:;,.<>/?";  

    let allowed_chars = "";
    let password = "";

    allowed_chars += include_lowercase ? lowercase_chars : "" ;
    allowed_chars += include_uppercase ? uppercase_chars : "" ;
    allowed_chars += include_numbers ? numbers_chars : "" ;
    allowed_chars += include_symbols ? symbols_chars : "" ;

    if(length <=0){
        return `(Password length must be at least 1)` ;
    }

    if(allowed_chars.length === 0){
        return '(Atleast 1 set of character needs to be selected)' ;
    }

    for(let i = 0; i < length; i++){
        const random_index = Math.floor(Math.random() * allowed_chars.length);
        password += allowed_chars[random_index];
    }

    return password ;
}

const length = 12;
const include_lowercase = true;
const include_uppercase = true;
const include_numbers = true;
const include_symbols = true;


const password = generate_password(length, 
                                   include_lowercase, 
                                   include_uppercase, 
                                   include_numbers, 
                                   include_symbols);

console.log(`Generate Password: ${password}`);
