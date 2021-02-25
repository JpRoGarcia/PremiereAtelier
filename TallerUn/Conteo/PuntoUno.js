function factorial(n) {
    let factor = 1;
    for (let i = 1; i <= n; i++) {
        factor *= i; 
    }

    return factor
}

const PointUn = () => {
    let nroSillas = 10;
    let nroTPersonas = 4;
    
    let posicion = (factorial(nroSillas))/(factorial(nroSillas-nroTPersonas));

    console.log("El Total de Opciones es: ", posicion);
}

console.time("PointUn");
PointUn();
console.timeEnd("PointUn");