// permetto di inserire al'utente l'età e il numero dei km che vuole percorrere quindi inizializzo le variabili età e calcolo dei km
let age = prompt("Inserisci la tua età:");
let kmCount = prompt("Inserisci i chilometri che vuoi percorrere:")

// inizializzo la variabile prezzo per km e la calcolo in base ai km che si vuole percorrere
let kmPrice = (0.21*kmCount)

// Inizializzo la variabile prezzo finale
let finalPrice

// calcolo lo sconto applicabile in base all'età
if(age<18){
    finalPrice = kmPrice*0.8
    console.log(`il prezzo è di ${finalPrice}`)
}
else if(age>65){
    finalPrice = kmPrice*0.4
    console.log(`il prezzo è di ${finalPrice}`)
}
else{
    finalPrice = kmPrice
    console.log(`il prezzo è di ${finalPrice}`)
}





