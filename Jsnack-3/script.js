var arrUno = ["a","b","c"];
var arrDue = [1,2,3];
var arrTre = [];

var i = 0;

while(arrUno[i]!= undefined && arrDue[i]!= undefined){
    arrTre.push(arrUno[i]);
    arrTre.push(arrDue[i]);
    i++
}

console.log(arrTre);