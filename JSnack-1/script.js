$(function(){

    var pesoTotale = 0;

    var arrZucchine = [

        {
            nome : "zuccona",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucchetta",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zuc",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zuk",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucky",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "sluck",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucks",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucchin",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zuca",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucca rossa",
            peso : 20,
            lunghezza : 30
        },

    ]

    //console.log(arrZucchine);

    for(var i = 0; i < arrZucchine.length; i++){
    
        var zucchina = arrZucchine[i];
        console.log(zucchina);

        pesoTotale += zucchina["peso"];

    }

    console.log(pesoTotale);

})

