let username = window.prompt("Enter Your Username");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();


console.log(username)
document.getElementById(`h1`).textContent = username;
