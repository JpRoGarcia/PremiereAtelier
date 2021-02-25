let listaRandom = Array(0)

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function PointUn(n) {

    listaRandom.push(RandomInt(0, 100))

    if(n==1){
        return console.log(listaRandom); 
    }
    else{
        return PointUn(n-1)
    }
}

console.time("PuntoUn");
console.log(PointUn(100));
console.timeEnd("PuntoUn");