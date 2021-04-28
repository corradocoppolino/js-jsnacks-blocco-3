var squadraBasket = [

    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: generatoRandomNumber(0,50),
        percentualeTriple: generatoRandomNumber(0,100)  
    },
    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: generatoRandomNumber(0,50),
        percentualeTriple: generatoRandomNumber(0,100)    
    },
    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: generatoRandomNumber(0,50),
        percentualeTriple: generatoRandomNumber(0,100)  
    },
    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: generatoRandomNumber(0,50),
        percentualeTriple: generatoRandomNumber(0,100) 
    },
    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: generatoRandomNumber(0,50),
        percentualeTriple: generatoRandomNumber(0,100)  
    }

]

console.log(squadraBasket);

function generatoRandomNumber(min,max){
    var num = Math.floor(Math.random()*(max - min + 1)- min);
    return num;
}

function codiceRandom(length){
    var stringRandom = "";
    var stringnumbers = "0123456789";
    var stringLetters = "ABCDEFGHILMNOPQRSTUVZ";

    for(var i = 0; i < length/2; i++){
        
        stringRandom += stringLetters.charAt(Math.floor(Math.random()*length));

    }

    for(var i = 0; i < length/2; i++){
        
        stringRandom += stringnumbers.charAt(Math.floor(Math.random()*length));

    }

    return stringRandom;
}