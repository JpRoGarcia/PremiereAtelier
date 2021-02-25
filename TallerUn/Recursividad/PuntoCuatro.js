let suma = 0;

function PointQuatre(n) {
    if(n%2 === 0){
        if(n == 2){
            return console.log("La Suma es:" , suma + 2);
        }else{
            suma += n
            return PointQuatre(n-2)
        }
    }
    else{
        return console.log("Numero Impar");
    }
}



console.time("PointQuatre");
console.log(PointQuatre(100));
console.timeEnd("PointQuatre");