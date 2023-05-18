const guestsList = ["Gino", "Gina", "Ginetto", "Ginetta"];
let personName = prompt("Come ti chiami?");
let isInList = false;

for(i = 0; i < guestsList.length; i++){

    if(personName == guestsList[i]){
        isInList = true;
    }
}

if(isInList){
    console.log("Puoi entrare alla festa.");
}else{
    console.log("Non sei nella lista degli invitati.");
}