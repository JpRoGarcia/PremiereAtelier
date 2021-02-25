
let listaDecreciente = Array(0)

function PointTrois(n) {

    listaDecreciente.push(n)

    if(n == 1)
    {
        return console.log(listaDecreciente)
    } else
    {        
        return PointTrois(n-1);
    }
}

console.time("PointTrois");
console.log(PointTrois(100));
console.timeEnd("PointTrois");