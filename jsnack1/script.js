let finalNumber = 0;

for(i = 0; i < 10; i++){
    userNumber = parseInt(prompt("Inserisci un numero"));
    finalNumber += userNumber;
}

if(isNaN(finalNumber)){
    console.log("Inserisci un numero valido.");
}

console.log(finalNumber);