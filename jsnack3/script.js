let oddNumber = [];
let userNumber;

for(i = 0; i < 6; i++){
    userNumber = parseInt(prompt("Inserisci un numero:"));

    if(userNumber % 2 !== 0){
        oddNumber.push(userNumber);
    }
}

console.log(oddNumber);