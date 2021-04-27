var arrLunghe = [];
var arrCorte = [];
var pesoCorte = 0;
var pesoLunghe = 0;

var arrZucchina = [

    {
        nome : "zucchinaGialla",
        peso : 30,
        lunghezza : 20
    },
    {
        nome : "zucchetta",
        peso : 10,
        lunghezza : 10
    },
    {
        nome : "zuccona",
        peso : 30,
        lunghezza : 30
    },
    {
        nome : "zucchinaPink",
        peso : 30,
        lunghezza : 15
    },
    {
        nome : "zucchinaMini",
        peso : 2,
        lunghezza : 2
    },
    {
        nome : "zucchinaGigante",
        peso : 300,
        lunghezza : 200
    },
    {
        nome : "zucchinaNera",
        peso : 30,
        lunghezza : 10
    },
    {
        nome : "zucchinaMarrone",
        peso : 30,
        lunghezza : 20
    },
    {
        nome : "zucchinaArancione",
        peso : 40,
        lunghezza : 40
    },
    {
        nome : "zucchinaVerde",
        peso : 30,
        lunghezza : 20
    }

];

for (var i = 0; i< arrZucchina.length; i++){

    var zucchina = arrZucchina[i];

    if(zucchina["lunghezza"] > 15){

        arrLunghe.push(zucchina);
        pesoLunghe += zucchina["peso"];

    }else{

        arrCorte.push(zucchina);
        pesoCorte += zucchina["peso"]

    }

}

console.log(arrLunghe);
console.log(arrCorte);

/* for (var j = 0; j < arrCorte.length; j++){

    var zucchinaCorta = arrCorte[j];
    pesoCorte += zucchinaCorta["peso"];

}

for (var k = 0; k < arrLunghe.length; k++){

    var zucchinaLunga = arrLunghe[k];
    pesoLunghe += zucchinaLunga["peso"];

} */

console.log("il peso delle zucchine corte è: " + pesoCorte + " g");
console.log("il peso delle zucchine lunghe è: " + pesoLunghe + " g");