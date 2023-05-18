const userNumber = prompt("Inserisci un numero di 4 cifre:");

let finalNumber = 0;

for(let i = 0; i < userNumber.length; i++){
    finalNumber += parseInt(userNumber[i]);
}

console.log(finalNumber);