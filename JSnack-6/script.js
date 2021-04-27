var arr1 = [1,2,3];
var arr2 = [1,2,3,4,5,6];

while(arr1.length != arr2.length){

    if(arr1.length < arr2.length){
        arr1.push(Math.ceil(Math.random()*10));
    }else{
        arr2.push(Math.ceil(Math.random()*10));
    }

}

console.log(arr1);
console.log(arr2);