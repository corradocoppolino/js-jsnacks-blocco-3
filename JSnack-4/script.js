var squadraBasket = [

    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: media(),
        percentualeTriple: percentuale()  
    },
    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: media(),
        percentualeTriple: percentuale()  
    },
    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: media(),
        percentualeTriple: percentuale()  
    },
    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: media(),
        percentualeTriple: percentuale()  
    },
    {
        codiceGiocatore: codiceRandom(6),
        mediaPunti: media(),
        percentualeTriple: percentuale()  
    }

]

console.log(squadraBasket);

function media(){
    var punti = Math.floor(Math.random()*51);
    return punti;
}

function percentuale(){
    var per100 = Math.floor(Math.random()*101);
    return per100;
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